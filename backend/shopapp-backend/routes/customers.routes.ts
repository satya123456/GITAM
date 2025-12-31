import { Application, Request, Response } from "express";
import { CommonRoutesConfig } from "./CommonRoutesConfig";

import { Sequelize } from "sequelize";
import sequelize from "sequelize";
import customerController from "../controllers/customer.controller";

export default class CustomerRoutes extends CommonRoutesConfig {
      constructor(app: Application) {
            super(app, "Customer Routes");
        }
    
        configureRoutes(): Application {
            this.app.route("/api/customers")
            .post(customerController.register);

            this.app.route("/api/login")
            .post(customerController.login);
            return this.app;
        }
}