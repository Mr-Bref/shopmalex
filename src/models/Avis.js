import { DataTypes } from 'sequelize';
import sequelize from '../lib/db';
import Produit from './Produit';
import Personne from './Personne';

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
            model: Personne,
            key: 'idpers',
        },
    },
});

Avis.belongsTo(Produit, { foreignKey: 'idprod' });
Avis.belongsTo(Personne, { foreignKey: 'idpers' });

export default Avis;
