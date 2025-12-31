// pages/api/products.ts (Pages Router example)
import type { NextApiRequest, NextApiResponse } from 'next';

import {Product} from '@/database/models';
import sequelize from '@/database/database';
import { Op } from 'sequelize';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await sequelize.sync(); // Sync models if needed (useful in dev, migrations are better for prod)

  if (req.method === 'GET') {
    // const searchParams = request.nextUrl.searchParams;
    //  const price = searchParams.get('price');
    const { price } = req.query
    try {
      let products = null;
      if(!price) {
       products = await Product.findAll();
      } else {
        products = await Product.findAll({
            where: {
              price: {[Op.gte]:+price}
            }
        })
      }
      res.status(200).json(products);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching products' });
    }
  } else if (req.method === 'POST') {
    const { title, price, image } = req.body;
    try {
    const product =  await Product.create({title, price, image}); // insert into
      res.status(201).json(product);
    } catch (error) {
      res.status(500).json({ message: 'Error creating product' });
    }
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
