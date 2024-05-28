import { NextResponse } from 'next/server';
import Produit from '@/models/Produit'; // Import your Product model
import Categorie from '@/models/Categorie'; // Import your Category model
import Image from '@/models/Image'; // Import your Image model
import sequelize from '@/lib/db';

sequelize.authenticate();

export async function GET(request, { params }) {



    const productId = params.productId;

    try {
        // Find the product based on the product ID and include associated category and images
        const product = await Produit.findByPk(productId, {
            include: [
                {
                    model: Categorie,
                    attributes: ['libcat'],
                },
                {
                    model: Image,
                    attributes: ['cheminacces', 'libelle'],
                },
            ],
        });

        if (!product) {
            return NextResponse.json({ success: false, message: 'Product not found' }, { status: 404 });
        }

        // Construct the response object
        const productData = {
            id: product.idprod,
            name: product.libelleprod,
            price: product.prixprod,
            description: product.description,
            category: product.Categorie ? product.Categorie.libcat : null,
            images: product.Images.map(image => ({
                url: image.cheminacces,
                label: image.libelle,
            })),
        };
        console.log('====================================');
        console.log(productData);
        console.log('====================================');

        // Return the product data
        return NextResponse.json({ success: true, product: productData });
    } catch (error) {
        console.error('Error fetching product details:', error);
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}
