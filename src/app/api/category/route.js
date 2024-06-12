import { NextResponse } from 'next/server';
import Produit from '@/models/Produit';
import Categorie from '@/models/Categorie';
import Image from '@/models/Image';

export async function GET(request) {
    try {
        // Fetch all products, including their category and images
        const products = await Produit.findAll({
            include: [
                {
                    model: Categorie,
                    as: 'Categorie',
                },
                {
                    model: Image,
                    as: 'Images',
                },
            ],
        });

        // Group the products by category
        const productData = products.reduce((acc, product) => {
            const { Categorie } = product;
            const categoryData = acc.find((item) => item.categoryId === Categorie.codcat);

            if (categoryData) {
                categoryData.products.push({
                    id: product.idprod,
                    name: product.libelleprod,
                    price: product.prixprod,
                    description: product.description,
                    images: product.Images.map((image) => ({
                        id: image.codeimage,
                        url: image.cheminacces,
                        label: image.libelle,
                    })),
                });
            } else {
                acc.push({
                    categoryId: Categorie.codcat,
                    categoryName: Categorie.libcat,
                    products: [
                        {
                            id: product.idprod,
                            name: product.libelleprod,
                            price: product.prixprod,
                            description: product.description,
                            images: product.Images.map((image) => ({
                                id: image.codeimage,
                                url: image.cheminacces,
                                label: image.libelle,
                            })),
                        },
                    ],
                });
            }

            return acc;
        }, []);

        // Return the product data
        return NextResponse.json({ success: true, products: productData });
    } catch (error) {
        console.error('Error fetching all products:', error);
        return NextResponse.json(
            { success: false, error: error.message },
            { status: 500 }
        );
    }
}
