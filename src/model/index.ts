import { sequelize } from '../utils';
// const sequelize = new Sequelize('mysql://root:asd123@localhost:3306/mydb');
export { Indicator } from './indicator';
export { Ecos } from './ecos'
export { Kosis } from './kosis'
export { OECD } from './oecd'

(async () => {
  console.log(1)
  const synced = await sequelize.sync({ force: true, alter: true });
  console.log(synced)
})();

// sequelize.sync({ force: true, alter: true });
