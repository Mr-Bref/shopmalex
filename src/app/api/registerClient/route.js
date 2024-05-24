import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import Personne from '../../../models/Personne';
import Client from '../../../models/Client';
import sequelize from '../../../lib/db';
import initDB from '@/lib/initDB';

sequelize.authenticate();

export async function POST(request) {
    const { nompers, prenom, email, motdepasse } = await request.json();
    try {
        const hashedPassword = await bcrypt.hash(motdepasse, 10);

        // Create Personne
        const newPersonne = await Personne.create({
            nompers,
            prenom,
            email,
            motdepasse: hashedPassword,
            role: 'client',  // Role par defaut
            verified: false,
        });

        // Create Client
        const newClient = await Client.create({
            idpers: newPersonne.idpers, // Use the idpers of the newly created Personne
        });

        return NextResponse.json({ success: true, user: newPersonne });
    } catch (error) {
        console.error('Error registering user:', error);
        return NextResponse.json({ success: false, error: error.message });
    }
}
