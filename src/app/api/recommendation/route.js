import { NextResponse } from 'next/server';
import Produit from '@/models/Produit';
import Avis from '@/models/Avis';
import Client from '@/models/Client';
import Image from '@/models/Image';
import sequelize from '../../../lib/db';
sequelize.authenticate();


export async function POST(request) {
    try {
        const { productId } = request.json()

        const url = `http://localhost:5000/recommend?item_id=${productId || 2}&top_n=6`
        // Check if the data is already loaded
        const response = await fetch(url);
        const responsejson = await response.json();
        const { success, error } = responsejson;

        // If the data is not loaded, load it first
        if (!success && error?.includes('No recommendations found')) {

            // Fetch the product data, including reviews
            const products = await Produit.findAll({
                include: [
                    {
                        model: Avis,

                        include: [
                            {
                                model: Client,
                                attributes: ['idpers'],
                            },
                        ],
                    },
                ],
            });

            // Transform the fetched products into the desired format            
            const productData = {
                id: products.map(product => product.idprod),
                name: products.map(product => product.libelleprod),
                description: products.map(product => product.description),
                price: products.map(product => product.prixprod),
                reviews: products.map(product => product.Avis.map(review => ({
                    id: review.idavis,
                    comment: review.commentaire,
                    rating: review.note,
                    reviewer: {
                        id: review.Client.idpers,
                    },
                }))),
            };




            // Load the data into the Flask recommendation engine
            await fetch('http://localhost:5000/load_data', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    dataset: productData,
                    features: ['name', 'description'],
                }),
            });

            console.log('Data loaded successfully.');
        }

        // Get the product ID from the request query
        // const { productId } = request.nextUrl.searchParams;

        // Fetch the recommendations from the Flask recommendation engine

        const recommendationResponse = await fetch(url);


        const recommendations = await recommendationResponse.json();

        const recommendedProducts = await Produit.findAll({
            where: {
                idprod: recommendations.map(rec => rec.id)
            },
            include: [
                {
                    model: Image,
                    attributes: ['codeimage', 'cheminacces', 'libelle'],
                },
            ],
        });

        // Include additional information (e.g., images) in the recommended products
        const recommendedProductsInfo = recommendedProducts?.map(product => ({
            id: product.idprod,
            name: product.libelleprod,
            price: product.prixprod,
            description: product.description,
            images: product.Images?.map(image => ({
                id: image.codeimage,
                url: image.cheminacces,
                label: image.libelle,
            })),
        }));

        // Return the recommendation data
        return NextResponse.json({ success: true, products: recommendedProductsInfo });
    } catch (error) {
        console.error('Error fetching product recommendations:', error);
        return NextResponse.json(
            { success: false, error: error.message },
            { status: 500 }
        );
    }
}
