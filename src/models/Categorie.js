import { DataTypes } from 'sequelize';
import sequelize from '../lib/db';

const Categorie = sequelize.define('Categorie', {
    codcat: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    libcat: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

export default Categorie;
