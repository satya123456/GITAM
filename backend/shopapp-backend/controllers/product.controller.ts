import { Request, Response } from "express";
import productService from "../services/product.service"; // Object

class ProductController {
    async listProducts(req:Request, res: Response) {
        const products = await productService.getProducts();
        res.status(200).send(products);
    }

    async createProduct(req:Request, res: Response) {
        // payload will have new product data in the form of JSON express.json()
        const product = await productService.addProduct(req.body);
        res.status(201).send(product);
    }

    // http://localhost:1234/api/products/2
    async getById(req:Request, res: Response) {
        // parseInt(req.params.id) ==> +req.params.id
        const product = await productService.getProductById(+req.params.id);
        res.status(200).send(product);
    }

    // PATCH http://localhost:1234/api/products/1
    // {"price": 99999}
    async updatePrice(req:Request, res: Response) {
        const product = await productService.updatePrice(+req.params.id, req.body.price);
        res.status(200).send(product);
    }
}

// Singleton
export default new ProductController();