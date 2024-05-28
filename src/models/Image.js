import { DataTypes } from 'sequelize';
import sequelize from '../lib/db';
import Produit from './Produit';

const Image = sequelize.define('Image', {
    codeimage: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    cheminacces: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    libelle: {
        type: DataTypes.STRING,
    },
    idprod: {
        type: DataTypes.INTEGER,
        references: {
            model: Produit,
            key: 'idprod',
        },
    },
});

Image.belongsTo(Produit, { foreignKey: 'idprod' });
Produit.hasMany(Image, { foreignKey: 'idprod' })

export default Image;
