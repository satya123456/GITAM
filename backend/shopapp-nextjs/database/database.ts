import {Sequelize} from 'sequelize'
import mysql2 from 'mysql2';
// ORM
const sequelize = new Sequelize({
    username: "root",
    password: "Welcome123",
    host: "localhost",
    port: 3306,
    database: "gitam_db",
    dialect : "mysql",
     dialectModule: mysql2,
    logging: true
});

// Creates tables that do not exist in the database.
// Does nothing if a table already exists, meaning it will not add, change, or delete columns in existing tables.
// Adds necessary indexes and foreign key constraints.
sequelize.sync();
// sequelize.sync({alter: true});
async function authenticateDatabase() {
    try {
        await sequelize.authenticate();
        console.log("Database Server is Connected!!!");
    } catch(error) {
        console.log("Unable to connect to DB", error);
    }
}

authenticateDatabase();

export default sequelize;