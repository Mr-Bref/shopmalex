import { DataTypes } from 'sequelize';
import sequelize from '../lib/db';
import Commande from './Commande';
import Produit from './Produit';

const Ligne_commande = sequelize.define('Ligne_commande', {
    idcom: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
            model: Commande,
            key: 'idcom',
        },
    },
    idprod: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
            model: Produit,
            key: 'idprod',
        },
    },
    qteprocom: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
});

Ligne_commande.belongsTo(Commande, { foreignKey: 'idcom' });
Ligne_commande.belongsTo(Produit, { foreignKey: 'idprod' });

export default Ligne_commande;
