import { DataTypes } from 'sequelize';
import sequelize from '../lib/db';
import Commande from './Commande';
import Mode_paiement from './Mode_paiement';

const Paiement = sequelize.define('Paiement', {
    idpaie: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    montpaie: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    datepaie: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    idcom: {
        type: DataTypes.INTEGER,
        references: {
            model: Commande,
            key: 'idcom',
        },
    },
    codemode: {
        type: DataTypes.INTEGER,
        references: {
            model: Mode_paiement,
            key: 'codemode',
        },
    },
});

Paiement.belongsTo(Commande, { foreignKey: 'idcom' });
Paiement.belongsTo(Mode_paiement, { foreignKey: 'codemode' });

export default Paiement;
