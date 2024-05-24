import { DataTypes } from 'sequelize';
import sequelize from '../lib/db';

const Mode_paiement = sequelize.define('Mode_paiement', {
    codemode: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    libmode: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

export default Mode_paiement;
