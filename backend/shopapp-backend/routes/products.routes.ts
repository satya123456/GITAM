import { Application, Request, Response } from "express";
import { CommonRoutesConfig } from "./CommonRoutesConfig";

export default class ProductRoutes extends CommonRoutesConfig {
    constructor(app:Application) {
        super(app, "Product Routes");
    }

    configureRoutes(): Application {
        this.app.route("/api/products")
            .get( (req:Request, res: Response) => {
                res.send("Product List!!!");
            })
            .post((req:Request, res: Response) => {
                console.log(req.body);
                res.send("Product Added!!!");
            });

        return this.app;
    }
    
}