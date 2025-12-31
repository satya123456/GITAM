// import Product from "../models/product.model";
import {Product} from '../models'; //index.ts

// can be used by standalone, web, mobile, tv, desktop application
class ProductService {
    async getProducts() {
        return await Product.findAll(); // select * from products
    }

    async getProductById(id:number) {
        return await Product.findByPk(id);
    }

    async  addProduct(product: Product) {
        return await Product.create({...product}); // insert into
    }

    async getByPrice(price: number) {
        return await Product.findAll({
            where: {price: price}
        })
    }

    async updatePrice(id: number, price: number) {
        try {
            const product = await Product.findByPk(id);
            if(!product) {
                return null;
            }
            product.set({price});
            product.isNewRecord = false;
            // Save the instance, Sequelize is optimized to only update changed fields
            return await product.save();
        } catch(error) {
            console.log(error);
        }
    }
}

/*
    Singleton Instance: This caching in behaiour is fundamental to how modules work,
    If the module exports a single instance of a class,
    every part of your applicaiton that imports share the same object
*/
export default new ProductService(); 