// pages/api/users.ts (Pages Router example)
import type { NextApiRequest, NextApiResponse } from 'next';

import { Product } from '@/database/models';
import sequelize from '@/database/database';


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    await sequelize.sync(); // Sync models if needed (useful in dev, migrations are better for prod)

    if (req.method === 'GET') {
        const { id } = req.query
        try {
            const product = await Product.findByPk(+id!);
            res.status(200).json(product);
        } catch (error) {
            res.status(404).json({ message: 'Error fetching product with id ' + id });
        }
    } else if (req.method === 'PATCH') {
        const { id } = req.query
        const { price } = req.body;
        try {
            const product = await Product.findByPk(+id!);
            if (!product) {
                return null;
            }
            product.set({ price });
            product.isNewRecord = false;
            // Save the instance, Sequelize is optimized to only update changed fields
            return await product.save();
        } catch (error) {
            res.status(500).json({ message: 'Error creating product' });

        }

    } else {
        res.setHeader('Allow', ['GET', 'PATCH']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
