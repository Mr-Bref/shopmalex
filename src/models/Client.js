import { DataTypes } from 'sequelize';
import sequelize from '../lib/db';
import Personne from './Personne';

const Client = sequelize.define('Client', {
    idpers: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
            model: Personne,
            key: 'idpers',
        },
    },
}, {
    validate: {
        async roleCheck() {
            const personne = await Personne.findByPk(this.idpers);
            if (personne.role !== 'client') {
                throw new Error('Personne must have client role');
            }
        },
    },
});

Client.belongsTo(Personne, { foreignKey: 'idpers' });

export default Client;
