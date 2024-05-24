import { DataTypes } from 'sequelize';
import sequelize from '../lib/db';

const Personne = sequelize.define('Personne', {
    idpers: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    nompers: {
        type: DataTypes.STRING,
    },
    prenom: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    sexe: {
        type: DataTypes.CHAR,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    telephone: {
        type: DataTypes.STRING,
    },
    adresse: {
        type: DataTypes.TEXT,
    },
    motdepasse: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    verified: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    role: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    age: {
        type: DataTypes.INTEGER,
    },
}, {
    validate: {
        roleCheck() {
            if (!['client', 'administrateur'].includes(this.role)) {
                throw new Error('Role must be either client or administrateur');
            }
        },
    },
});

export default Personne;
