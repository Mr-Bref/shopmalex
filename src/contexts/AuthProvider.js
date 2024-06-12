"use client"
import { createContext, useState, useEffect } from 'react';
import jwt from 'jsonwebtoken';
import { useRouter } from 'next/navigation';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            const decoded = jwt.decode(token);
            setUser(decoded);
        }
    }, []);

    const login = async (email, motdepasse) => {
        const res = await fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, motdepasse }),
        });
        const data = await res.json();
        if (data.success) {
            localStorage.setItem('token', data.token);
            const decoded = jwt.decode(data.token);
            setUser(decoded);
            router.push('/');
        } else {
            alert(data.message);
        }
    };

    const register = async (nompers, prenom, email, motdepasse, role) => {
        const res = await fetch('/api/registerClient', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ nompers, prenom, email, motdepasse }),
        });
        const data = await res.json();
        if (data.success) {
            router.push('/login');
        } else {
            alert(data.error);
        }
    };

    const logout = () => {
        localStorage.removeItem('token');
        setUser(null);
        router.push('/login');
    };

    return (
        <AuthContext.Provider value={{ user, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
