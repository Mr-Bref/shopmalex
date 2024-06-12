import mime from 'mime';
import { join } from 'path';
import { stat, mkdir, writeFile } from 'fs/promises';
import { NextRequest, NextResponse } from 'next/server';
import Produit from '@/models/Produit';
import Image from '@/models/Image'; // Import your Image model


export async function POST(request) {
    try {
        const formData = await request.formData();
        const file = formData.get('image');
        const libelle = formData.get('libelle') || 'Libeleplaceholder'; // Set default value if libelle is not provided
        const productId = formData.get('productId');

        if (!file || !productId) {
            return NextResponse.json(
                { error: 'Image file and productId are required fields.' },
                { status: 400 }
            );
        }

        // Check if the productId exists
        const existingProduct = await Produit.findByPk(productId);
        if (!existingProduct) {
            return NextResponse.json(
                { error: 'Product not found.' },
                { status: 404 }
            );
        }

        const buffer = Buffer.from(await file.arrayBuffer());
        const relativeUploadDir = '/images/uploads/';
        const uploadDirPath = join(process.cwd(), 'public', relativeUploadDir);

        try {
            await stat(uploadDirPath);
        } catch (e) {
            if (e.code === 'ENOENT') {
                await mkdir(uploadDirPath, { recursive: true });
            } else {
                console.error('Error creating directory:', e);
                return NextResponse.json(
                    { error: 'Error creating upload directory.' },
                    { status: 500 }
                );
            }
        }

        const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
        const filename = `${file.name.replace(/\.[^/.]+$/, '')}-${uniqueSuffix}.${mime.getExtension(file.type)}`;
        const filePath = `${uploadDirPath}/${filename}`;

        await writeFile(filePath, buffer);

        // Create a new image record and associate it with the provided product ID
        const image = await Image.create({
            cheminacces: `/uploads/${filename}`,
            libelle: libelle,
            idprod: productId,
        });

        return NextResponse.json({ success: true, image });
    } catch (error) {
        console.error('Error adding image:', error);
        return NextResponse.json(
            { error: 'Something went wrong.' },
            { status: 500 }
        );
    }
}
