import { NextResponse } from 'next/server';
import Produit from '@/models/Produit';
import Avis from '@/models/Avis';
import Client from '@/models/Client';
import Image from '@/models/Image';
import sequelize from '../../../lib/db';
import { loadData, fetchRecommendations } from '@/lib/flaskApi';
sequelize.authenticate();


export async function POST(request) {
    try {
        const { productId } = request.json()

        const url = `http://localhost:5000//recommend?item_id=${1}&user_id=${2}&top_n=${6}`
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
                    rating: parseInt(review.note, 10),
                    reviewer: {
                        id: review.Client.idpers,
                    },
                }))),
            };


            // Load the data into the Flask recommendation engine
            await loadData(productData, ['id', 'description'])

            console.log('Data loaded successfully.');
        }

        // Fetch the recommendations from the Flask recommendation engine
        let recommendations
        try {
            recommendations = await fetchRecommendations(url);

            // Process the recommendation response here
            console.log('Recommendations:', recommendations);

        } catch (error) {
            console.error('Error fetching recommendations:', error.message);
            // Handle error here, e.g., show error message to user
        }


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
