import {body, validationResult} from 'express-validator'

import { Application, NextFunction, Request, Response } from "express";
import { CommonRoutesConfig } from "./CommonRoutesConfig";
import productController from "../controllers/product.controller";
import { tokenGuard } from '../token.guard';

// a reusable middleware to handle validation results
// middleware will have next: NextFunction along with request and response
const validateRequest = (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    }
    // if validation passes, procced to next middleware or route handler
    next(); 
}

export default class ProductRoutes extends CommonRoutesConfig {
    constructor(app: Application) {
        super(app, "Product Routes");
    }

    configureRoutes(): Application {
        this.app.route("/api/products")
            .get( productController.listProducts)
            .post(
                // tokenGuard,
                // 1. validation middleware chain
                [
                    body('title').notEmpty().withMessage('Title is required!!!'),
                    body('title').isLength({min:3}).withMessage('Title must be at least 3 characters'),
                    body('price').isFloat({min:1}).withMessage('Price should be more than zero!!!')
                ],
                // 2. custom middleware to check
                validateRequest,
                productController.createProduct)
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