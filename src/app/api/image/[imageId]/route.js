import mime from 'mime';
import { join } from 'path';
import { stat, mkdir, writeFile } from 'fs/promises';
import { NextRequest, NextResponse } from 'next/server';
import Image from '@/models/Image'; // Import your Image model

export const config = {
    api: {
        bodyParser: false, // Disallow body parsing, formData will handle it
    },
};

const uploadDir = join(process.cwd(), 'public', 'images', 'uploads');

export async function PATCH(request, { params }) {
    const imageId = params.imageId;

    try {
        const formData = await request.formData();
        const file = formData.get('image')

        if (!file) {

            return NextResponse.json(
                { error: 'Image file is required.' },
                { status: 400 }
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

        const image = await Image.findByPk(imageId);
        if (!image) {
            return NextResponse.json(
                { error: 'Image not found.' },
                { status: 404 }
            );
        }

        // Update the image record with the new path
        image.cheminacces = `/uploads/${filename}`;
        await image.save();

        return NextResponse.json({ success: true, image });
    } catch (error) {
        console.error('Error updating image:', error);
        return NextResponse.json(
            { error: 'Something went wrong.' },
            { status: 500 }
        );
    }
}


export async function DELETE(request, { params }) {
    const imageId = params.imageId;

    try {
        const image = await Image.findByPk(imageId);
        if (!image) {
            return NextResponse.json(
                { error: 'Image not found.' },
                { status: 404 }
            );
        }

        // Delete the image record
        await image.destroy();

        return NextResponse.json({ success: true, message: 'Image deleted successfully.' });
    } catch (error) {
        console.error('Error deleting image:', error);
        return NextResponse.json(
            { error: 'Something went wrong.' },
            { status: 500 }
        );
    }
}
