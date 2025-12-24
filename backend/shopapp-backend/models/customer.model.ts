// Object Relational Mapping

import {DataTypes, InferAttributes, InferCreationAttributes, Model } from "sequelize";

import sequelize from "../database";

class Customer extends Model<InferAttributes<Customer>, InferCreationAttributes<Customer>> {
    declare email: string;
    declare name: string;
}

// Mapping
Customer.init({
    email: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING, // varchar(255), NVARCHAR(255), TEXT(255)
        allowNull: false,
    }
},{
    sequelize,
    tableName: 'customers',
    timestamps: false
});

export default Customer;