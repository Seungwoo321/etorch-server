import { sequelize } from '../utils';
// const sequelize = new Sequelize('mysql://root:asd123@localhost:3306/mydb');
export { Indicator } from './indicator';
export { Ecos } from './ecos'
export { Kosis } from './kosis'
export { OECD } from './oecd'

(async () => {
  try {
    await sequelize.sync({ force: true, alter: true });
    console.log('SUCCESS')
  } catch (error) {
    console.log(error) 
  }
})();

