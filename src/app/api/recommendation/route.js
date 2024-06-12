import { NextResponse } from 'next/server';
import Produit from '@/models/Produit';
import Categorie from '@/models/Categorie';
import Image from '@/models/Image';
import sequelize from '../../../lib/db';


export async function GET(request) {
    try {
        // Fetch six random products, including their category and images
        const products = await Produit.findAll({
            include: [
                {
                    model: Categorie, // Include the Category model
                    as: 'Categorie', // Alias for the association
                },
                {
                    model: Image, // Include the Image model
                    as: 'Images', // Alias for the association
                },
            ],
            order: sequelize.random(), // Order the results randomly
            limit: 6, // Limit the result to six products
        });

        // Map the fetched products to the desired format
        const productData = products.map(product => ({
            id: product.idprod,
            name: product.libelleprod,
            price: product.prixprod,
            description: product.description,
            images: product.Images.map(image => ({
                id: image.codeimage,
                url: image.cheminacces,
                label: image.libelle,
            })),
        }));

        // Return the product data
        return NextResponse.json({ success: true, products: productData });
    } catch (error) {
        console.error('Error fetching random products:', error);
        return NextResponse.json(
            { success: false, error: error.message },
            { status: 500 }
        );
    }
}
