import { DataTypes } from 'sequelize';
import sequelize from '../lib/db';
import Personne from './Personne';

const Administrateur = sequelize.define('Administrateur', {
    idpers: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
            model: Personne,
            key: 'idpers',
        },
    },
    droit: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    validate: {
        async roleCheck() {
            const personne = await Personne.findByPk(this.idpers);
            if (personne.role !== 'administrateur') {
                throw new Error('Personne must have administrateur role');
            }
        },
    },
});

Administrateur.belongsTo(Personne, { foreignKey: 'idpers' });

export default Administrateur;
