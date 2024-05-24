import sequelize from './db';
import Mode_paiement from '../models/Mode_paiement';
import Categorie from '../models/Categorie';
import Produit from '../models/Produit';
import Image from '../models/Image';
import Personne from '../models/Personne';
import Client from '../models/Client';
import Administrateur from '../models/Administrateur';
import Commande from '../models/Commande';
import Ligne_commande from '../models/Ligne_commande';
import Avis from '../models/Avis';
import Paiement from '../models/Paiement';

const initDB = async () => {
    try {
        await sequelize.sync({ force: false }); // Utilisez `force: true` pour recréer les tables à chaque démarrage (utile pour le développement)
        console.log('Database synchronized');
    } catch (error) {
        console.error('Error synchronizing database:', error);
    }
};

export default initDB;
