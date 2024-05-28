import sequelize from './db';
import Categorie from '../models/Categorie';
import Produit from '../models/Produit';

const categories = {
    'Céréales et Grains': ['Maïs', 'Riz', 'Sorgho', 'Mil', 'Blé', 'Fonio', 'Avoine', 'Orge'],
    'Légumes': ['Tomates', 'Carottes', 'Pommes de terre', 'Oignons', 'Choux', 'Gombo', 'Laitues', 'Piments'],
    'Fruits': ['Bananes plantains', 'Oranges', 'Mangues', 'Papayes', 'Ananas', 'Citrons', 'Avocats', 'Pamplemousses'],
    'Légumineuses': ['Niébé', 'Soja', 'Pois chiches', 'Arachides', 'Lentilles', 'Haricots rouges', 'Voandzou', 'Pois d’Angole'],
    'Oléagineux': ['Arachides', 'Soja', 'Noix de palmiste', 'Noix de coco', 'Sésame', 'Karité', 'Tournesol', 'Noix'],
    'Tubercules': ['Manioc', 'Igname', 'Pommes de terre', 'Patates douces', 'Taro', 'Patate douce violette', 'Arachide', 'Chou de Chine']
};

export async function seedDatabase() {
    await sequelize.sync({ force: false });

    for (const [categoryName, products] of Object.entries(categories)) {
        const category = await Categorie.create({ libcat: categoryName });

        for (const productName of products) {
            await Produit.create({
                libelleprod: productName,
                prixprod: Math.floor(Math.random() * 100) + 1,  // Assign a random price
                qtestock: Math.floor(Math.random() * 100) + 1,  // Assign a random stock quantity
                description: `Description for ${productName}`,
                codcat: category.codcat,
                parkilo: Math.random() > 0.5,  // Randomly assign true or false
                datecreation: new Date(), // Set current date as creation date
            });
        }
    }

    console.log('Database seeded successfully.');
}
