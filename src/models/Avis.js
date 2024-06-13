import { DataTypes } from 'sequelize';
import sequelize from '../lib/db';
import Produit from './Produit';
import Client from './Client';

const Avis = sequelize.define('Avis', {
    idavis: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    commentaire: {
        type: DataTypes.TEXT,
    },
    note: {
        type: DataTypes.DECIMAL(10, 1),
    },
    idprod: {
        type: DataTypes.INTEGER,
        references: {
            model: Produit,
            key: 'idprod',
        },
    },
    idpers: {
        type: DataTypes.INTEGER,
        references: {
            model: Client,
            key: 'idpers',
        },
    },
});

Avis.belongsTo(Produit, { foreignKey: 'idprod' });
Avis.belongsTo(Client, { foreignKey: 'idpers' });
Produit.hasMany(Avis, { foreignKey: 'idprod' });
Client.hasMany(Avis, { foreignKey: 'idpers' });

export default Avis;
