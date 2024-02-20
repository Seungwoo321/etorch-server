import { Sequelize, DataTypes } from 'sequelize'
import { config } from './config'

const { MARIADB_HOST, MARIADB_DATABASE, MARIADB_USERNAME, MARIADB_PASSWORD } = config

// const sequelize = new Sequelize('mysql://root:asd123@localhost:3306/mydb');
export const sequelize = new Sequelize(MARIADB_DATABASE, MARIADB_USERNAME, MARIADB_PASSWORD, {
    host: MARIADB_HOST,
    dialect: 'mariadb',
    dialectOptions: {
        charset: 'utf8',
        collate: 'utf8_general_ci'
    }
})

export const options = {
    sequelize: sequelize,
    schema: 'economic',
    freezeTableName: true,
    underscored: true
}

export const env = {
  get(key) {
    return process.env[key]
  },
  getInt(key) {
    return parseInt(process.env[key], 10)
  },
  getFloat(key) {
    return parseFloat(process.env[key])
  },
  getBoolean(key) {
    return process.env[key].toLowerCase() === 'true'
  }
}
