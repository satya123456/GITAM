// pages/api/users.ts (Pages Router example)
import type { NextApiRequest, NextApiResponse } from 'next';

import { Customer, Item, Order, Product } from '@/database/models';
import sequelize from '@/database/database';
import { Op } from 'sequelize';
type ItemDTO = {
    "product": number,
    "qty": number
}

async function createOrder(email: string, items: ItemDTO[]) {
    let total = 0; // order total needs to be computed.
    // atomic operation
    try {
        // managed transactions automatically commit / rollback
        const finalOrder = await sequelize.transaction(async (tx) => {
            // 1. create order initally without total, i need oid for inserting line_items
            const order = await Order.create({
                customer_fk: email,
                order_date: new Date(),
                total: 0
            }, { transaction: tx });

            for (const lineItem of items) {
                const product = await Product.findByPk(lineItem.product, { transaction: tx });
                // await product.save({qty: product.qty - lineItem.qty});
                if (!product) throw new Error(`Product ${lineItem.product} not found`);
                const amount = (product.price) * (lineItem.qty);
                const createdLineItem = await Item.create({
                    product_fk: lineItem.product,
                    qty: lineItem.qty,
                    price: product.price,
                    order_fk: order.oid,
                    amount
                }, { transaction: tx });

                total += createdLineItem.amount ?? 0;
            }

            order.total = total; // computed total
            await order.save({ transaction: tx });
        });
        return finalOrder;
    } catch (error) {
        // if code reaches here, rollback
        console.log("Transaction failed ", error)
        throw error;
    }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    await sequelize.sync(); // Sync models if needed (useful in dev, migrations are better for prod)

    if (req.method === 'GET') {
        try {
            let orders = await Order.findAll({
                include: [
                    { model: Customer },
                    { model: Item }
                ]
            });
            res.status(200).json(orders);
        } catch (error) {
            res.status(500).json({ message: 'Error fetching orders' });
        }
    } else if (req.method === 'POST') {
        const { email, items } = req.body;
        try {
            const order = await createOrder(email, items); // insert into
            res.status(201).json(order);
        } catch (error) {
            res.status(500).json({ message: 'Error creating order' });
        }
    } else {
        res.setHeader('Allow', ['GET', 'POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
