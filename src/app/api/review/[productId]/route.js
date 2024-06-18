import { NextResponse } from 'next/server';
import Produit from '@/models/Produit';
import Avis from '@/models/Avis';
import Client from '@/models/Client';
import Personne from '@/models/Personne';
import sequelize from '@/lib/db';

sequelize.authenticate();

export async function GET(request, { params }) {
    const productId = params.productId;

    try {
        // Find the product based on the product ID
        const product = await Produit.findByPk(productId);

        if (!product) {
            return NextResponse.json({ success: false, message: 'Product not found' }, { status: 404 });
        }

        // Find all comments for the product, including author information
        const comments = await Avis.findAll({
            where: { idprod: productId },
            include: [
                {
                    model: Client,
                    include: [
                        {
                            model: Personne,
                            attributes: ['nompers', 'prenom']
                        }
                    ]
                }
            ]
        });

        // Calculate total number of comments
        const totalComments = comments.length;

        // Calculate average rating
        const totalRating = comments.reduce((sum, comment) => sum + parseFloat(comment.note), 0);
        const averageRating = totalComments > 0 ? totalRating / totalComments : 0;

        // Construct the response object
        const productData = {
            id: product.idprod,
            name: product.libelleprod,
            price: product.prixprod,
            description: product.description,
            totalComments: totalComments,
            averageRating: averageRating,
            comments: comments.map(comment => ({
                id: comment.idavis,
                commentaire: comment.commentaire,
                note: comment.note,
                author: `${comment.Client.Personne.prenom} ${comment.Client.Personne.nompers}`,
            })),
        };

        // Return the product data
        return NextResponse.json({ success: true, product: productData });
    } catch (error) {
        console.error('Error fetching product details:', error);
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}


export async function POST(request) {
    const { commentaire, note, productId, email } = await request.json();

    try {
        // Find or create the person (you may want to adjust this logic)
        let person = await Personne.findOne({ where: { email } });

        if (!person) {
            return NextResponse.json({ success: false, message: 'User not found' }, { status: 404 });
        }

        const client = await Client.findOne({ where: { idpers: person.idpers } });

        if (!client) {
            return NextResponse.json({ success: false, message: 'Client not found' }, { status: 404 });
        }

        // Create a new comment
        const newAvis = await Avis.create({
            commentaire,
            note,
            idprod: productId,
            idpers: client.idpers,
        });

        return NextResponse.json({ success: true, avis: newAvis });
    } catch (error) {
        console.error('Error adding comment:', error);
        return NextResponse.json({ success: false, error: error.message });
    }
}
