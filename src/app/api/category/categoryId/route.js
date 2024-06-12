import { NextResponse } from 'next/server';
import Produit from '@/models/Produit';
import Categorie from '@/models/Categorie';
import Image from '@/models/Image';

export async function GET(request, { params }) {
    const { categoryId } = params;

    try {
        // Find the category based on the provided category code
        const categoryInstance = await Categorie.findOne({
            where: { libcat: categoryId },
            include: [
                {
                    model: Produit,
                    as: 'Produits',
                    include: [
                        {
                            model: Image,
                            as: 'Images',
                        },
                    ],
                },
            ],
        });

        if (!categoryInstance) {
            return NextResponse.json(
                { success: false, message: 'Category not found' },
                { status: 404 }
            );
        }

        // Extract the products from the category instance
        const products = categoryInstance.Produits;

        // Construct the response object
        const productData = products.map((product) => ({
            id: product.idprod,
            name: product.libelleprod,
            price: product.prixprod,
            description: product.description,
            categoryId: categoryInstance.codcat,
            categoryName: categoryInstance.libcat,
            images: product.Images.map((image) => ({
                id: image.codeimage,
                url: image.cheminacces,
                label: image.libelle,
            })),
        }));

        // Return the product data
        return NextResponse.json({ success: true, products: productData });
    } catch (error) {
        console.error('Error fetching products by category:', error);
        return NextResponse.json(
            { success: false, error: error.message },
            { status: 500 }
        );
    }
}
