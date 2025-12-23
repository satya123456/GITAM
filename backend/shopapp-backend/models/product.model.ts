// Object Relational Mapping

import { CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model } from "sequelize";

import sequelize from "../database";

class Product extends Model<InferAttributes<Product>, InferCreationAttributes<Product>> {
    declare id: CreationOptional<number>;
    declare title: string;
    declare price: number;
    declare image: string;
}

// Mapping
Product.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING, // varchar(255), NVARCHAR(255), TEXT(255)
        allowNull: false,
        unique: true
    },
    price: {
        type: DataTypes.DOUBLE, // NUMERIC(12,2), double
        allowNull: false
    },
    image : {
        type: DataTypes.STRING,
        allowNull: true
    }
},{
    sequelize,
    tableName: 'products',
    // timestamps: false
});

export default Product;