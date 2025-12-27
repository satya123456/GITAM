import { NextApiRequest, NextApiResponse } from "next";
import sequelize from '@/database/database';
import { Product } from "@/database/models";
import { Op } from "sequelize";

// http://localhost:3000/api/products
export default async function handler(req:NextApiRequest, res:NextApiResponse) {
    // await sequelize.sync();
    if(req.method == 'GET') {
        // http://localhost:3000/api/products?price=10
        const {price} = req.query;
        try {
        let  products = null;
        if(!price) {
            products = await Product.findAll();
        } else {
            products = await Product.findAll({
                where: {
                    price: {[Op.gte]: +price}
                }
            })
        }
        res.status(200).json(products);
    } catch(error) {
        res.status(500).json({message: 'Error fetching products!!!'})
    }
    } else if(req.method === 'POST') {

    }
}