import { DataTypes } from 'sequelize';
import sequelize from '../lib/db';
import Client from './Client';

const Commande = sequelize.define('Commande', {
    idcom: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    datecom: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
    montant: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    idpers: {
        type: DataTypes.INTEGER,
        references: {
            model: Client,
            key: 'idpers',
        },
    },
    statuscom: {
        type: DataTypes.STRING,
    },
});

Commande.belongsTo(Client, { foreignKey: 'idpers' });

export default Commande;
