
import { CreationOptional, DataTypes, ForeignKey, InferAttributes, InferCreationAttributes, Model } from "sequelize";

import sequelize from "../database";
import Order from "./orders.model";
import Product from "./product.model";


export default class Item extends Model<InferAttributes<Item>, InferCreationAttributes<Item>> {
    declare item_id: CreationOptional<number>;
    declare qty?:number;
    declare price?: number;
    declare amount?: number;
    declare order_fk:ForeignKey<Order['oid']>;
    declare product_fk:ForeignKey<Product['id']>
}
 

// Mapping
Item.init({
    item_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
    },
    qty: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false
    },
    price: {
        type: DataTypes.DOUBLE,
        allowNull: false
    },
    amount: {
        type: DataTypes.DOUBLE
    }
},
{
    sequelize,
    timestamps: false,
    tableName: "items"
});

