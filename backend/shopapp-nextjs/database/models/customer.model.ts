// Object Relational Mapping

import {DataTypes, InferAttributes, InferCreationAttributes, Model } from "sequelize";

import sequelize from "../database";

class Customer extends Model<InferAttributes<Customer>, InferCreationAttributes<Customer>> {
    declare email: string;
    declare name: string;
    declare password: string;
}

// Mapping
Customer.init({
    email: {
        type: DataTypes.STRING,
        primaryKey: true,
        validate: {
            isEmail: {
                msg: "Please provide a valid email address" 
            }
        }
    },
    name: {
        type: DataTypes.STRING, // varchar(255), NVARCHAR(255), TEXT(255)
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: true
    }
},{
    sequelize,
    tableName: 'customers',
    timestamps: false
});

Customer.sync({alter:true});

export default Customer;