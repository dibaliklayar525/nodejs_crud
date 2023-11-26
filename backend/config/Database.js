import { Sequelize } from "sequelize";
 const db = new Sequelize('node_js_crud_db','root','',{
    host: 'localhost',
    dialect: 'mysql'
 });

export default db;