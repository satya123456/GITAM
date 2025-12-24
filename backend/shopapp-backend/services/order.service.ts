import sequelize from '../database';
import ItemDTO from '../dto/ItemDTO';
import {Product, Order, Item, Customer} from '../models'; //index.ts

class OrderService {

    async createOrder(email: string, items: ItemDTO[]) {
        let total = 0; // order total needs to be computed.

        try {
            // managed transactions automatically commit / rollback
            const finalOrder = await sequelize.transaction( async(tx) => {
             // 1. create order initally without total, i need oid for inserting line_items
             const order = await Order.create({
                customer_fk: email,
                order_date: new Date(),
                total: 0
             }, {transaction: tx});

             for(const lineItem of items) {
                const product = await Product.findByPk(lineItem.product, {transaction: tx});
                // await product.save({qty: product.qty - lineItem.qty});
                if(!product) throw new Error(`Product ${lineItem.product} not found`);
                const amount = (product.price) * (lineItem.qty);
                const createdLineItem = await Item.create({
                    product_fk: lineItem.product,
                    qty: lineItem.qty,
                    price: product.price,
                    order_fk: order.oid,
                    amount
                }, {transaction: tx});

                total += createdLineItem.amount ?? 0;
             }

             order.total = total; // computed total
             await order.save({transaction: tx});
            });
        } catch(error) {
            // if code reaches here, rollback
            console.log("Transaction failed ", error )
            throw error;
        }
    }
}


export default new OrderService();