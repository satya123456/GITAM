import { Application, NextFunction, Request, Response } from "express";
import { CommonRoutesConfig } from "./CommonRoutesConfig";
import productController from "../controllers/product.controller";

export default class ProductRoutes extends CommonRoutesConfig {
    constructor(app: Application) {
        super(app, "Product Routes");
    }

    configureRoutes(): Application {
        this.app.route("/api/products")
            .get(productController.listProducts)
            .post(productController.createProduct)
            // .get( (req:Request, res: Response) => {
            //     // res.send("Product List!!!");
            // })

            // .post((req: Request, res: Response) => {
            //     console.log(req.body);
            //     res.send("Product Added!!!");
            // });
        // http://localhost:1234/api/products/2
        this.app.route("/api/products/:id")
            .all((req:Request, res:Response, next: NextFunction) => {
               // middleware function runs for all http://localhost:1234/api/products/2 methods
               next();
            })
            .get(productController.getById)
            .patch(productController.updatePrice)
            .delete((req:Request, res:Response) => {
                res.status(200).send(`Deleted request for ${req.params.id}`);
            })

        return this.app;
    }

}