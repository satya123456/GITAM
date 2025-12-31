
import { CreationOptional, DataTypes, ForeignKey, InferAttributes, InferCreationAttributes, Model } from "sequelize";

import sequelize from "../database";
import Customer from "./customer.model";

class Order extends Model<InferAttributes<Order>, InferCreationAttributes<Order>> {
    declare oid: CreationOptional<number>;
    declare order_date: Date;
    declare total: number;
    declare customer_fk:ForeignKey<Customer['email']>
}


// Mapping
Order.init({
    oid: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
    },
    order_date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    total: {
        type: DataTypes.DOUBLE
    }
},
{
    sequelize,
    timestamps: false,
    tableName: "orders"
});

export default Order;