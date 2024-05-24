import { DataTypes } from 'sequelize';
import sequelize from '../lib/db';
import Categorie from './Categorie';

const Produit = sequelize.define('Produit', {
    idprod: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    libelleprod: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    prixprod: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    qtestock: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
    },
    datecreation: {
        type: DataTypes.DATE,
    },
    codcat: {
        type: DataTypes.INTEGER,
        references: {
            model: Categorie,
            key: 'codcat',
        },
    },
    parkilo: {
        type: DataTypes.BOOLEAN,
    },
});

Produit.belongsTo(Categorie, { foreignKey: 'codcat' });

export default Produit;
