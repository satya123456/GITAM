import sequelize from "../database";
import Product from "./product.model";
import Customer from "./customer.model";
import Order from "./orders.model";
import Item from "./items.model";

export {Customer}
export {Product}
export {Order}
export {Item}

Customer.hasMany(Order, {foreignKey: 'customer_fk'});
Order.belongsTo(Customer, {foreignKey: 'customer_fk'});
Order.hasMany(Item, {
    foreignKey: "order_fk",
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
});

Item.belongsTo(Order, {foreignKey: 'order_fk'});
Item.belongsTo(Product, {foreignKey: 'product_fk'});

sequelize.sync();