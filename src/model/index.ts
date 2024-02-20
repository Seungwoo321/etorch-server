import { DataTypes, Sequelize } from 'sequelize'
import { Indicator } from './indicator';
const sequelize = new Sequelize('mysql://root:asd123@localhost:3306/mydb');

(async () => {


  // await sequelize.sync({ force: true });
})