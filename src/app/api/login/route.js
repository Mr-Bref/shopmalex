import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import Personne from '../../../models/Personne';
import sequelize from '../../../lib/db';
import initDB from '@/lib/initDB';

sequelize.authenticate();

export async function POST(request) {
    const { email, motdepasse } = await request.json();
    try {
        const user = await Personne.findOne({ where: { email } });
        if (!user) {
            return NextResponse.json({ success: false, message: 'User not found' });
        }
        const isPasswordValid = await bcrypt.compare(motdepasse, user.motdepasse);
        if (!isPasswordValid) {
            return NextResponse.json({ success: false, message: 'Invalid password' });
        }
        const token = jwt.sign({ id: user.idpers, email: user.email }, process.env.JWT_SECRET, { expiresIn: '1h' });
        return NextResponse.json({ success: true, token });
    } catch (error) {
        console.error('Error logging in:', error);
        return NextResponse.json({ success: false, error: error.message });
    }
}
