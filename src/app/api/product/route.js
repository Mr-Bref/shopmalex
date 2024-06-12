import { NextResponse } from 'next/server';
import Produit from '@/models/Produit'; // Import your Product model
import Categorie from '@/models/Categorie'; // Import your Category model
import Image from '@/models/Image'; // Import your Image model
import sequelize from '@/lib/db';

// Authenticate once and handle any connection errors
sequelize.authenticate().catch((error) => {
    console.error('Unable to connect to the database:', error);
});

export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page')) || 1;
    const pageSize = parseInt(searchParams.get('pageSize')) || 10;
    const offset = (page - 1) * pageSize;

    try {
        const count = await Produit.count();

        // Find all products with pagination and include associated categories and images
        const products = await Produit.findAll({
            include: [
                {
                    model: Categorie,
                    attributes: ['libcat'],
                },
                {
                    model: Image,
                    attributes: ['codeimage', 'cheminacces', 'libelle'],
                },
            ],
            limit: pageSize,
            offset,
        });

        // Construct the response object
        const productsData = products.map(product => ({
            id: product.idprod,
            name: product.libelleprod,
            price: product.prixprod,
            description: product.description,
            category: product.Categorie ? product.Categorie.libcat : null,
            images: product.Images.map(image => ({
                id: image.codeimage,
                url: image.cheminacces,
                label: image.libelle,
            })),
        }));

        // Return the products data with pagination info
        return NextResponse.json({
            success: true,
            products: productsData,
            total: count,
            currentPage: page,
            pageSize,
        });
    } catch (error) {
        console.error('Error fetching products:', error);
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}

