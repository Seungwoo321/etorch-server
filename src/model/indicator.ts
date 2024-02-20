import { DataTypes, Sequelize, Model, InferAttributes, InferCreationAttributes } from 'sequelize'
import { sequelize, options } from '../utils'

export class Indicator extends Model<InferAttributes<Indicator>, InferCreationAttributes<Indicator>> {
  id: number;
  name_ko: string;
  name_en: string;
  description_ko: string;
  description_en: string;
  source: string;
  unit_ko: string;
  unit_en: string;
  time_unit: string;
}

Indicator.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name_ko: {
    type: DataTypes.STRING(100)
  },
  name_en: {
    type: DataTypes.STRING(100)
  },
  description_ko: {
    type: DataTypes.STRING(100)
  },
  description_en: {
    type: DataTypes.STRING(100)
  },
  source: {
    type: DataTypes.ENUM,
    values: ['kosis', 'ecos', 'oecd']
  },
  unit_ko: {
    type: DataTypes.STRING(100)
  },
  unit_en: {
    type: DataTypes.STRING(100)
  },
  time_unit: {
    type: DataTypes.STRING(100)
  }
}, { sequelize })