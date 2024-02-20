const env = require('./utils')

export const config = {
  MARIADB_HOST: env.get('MARIADB_HOST'),
  MARIADB_DATABASE: env.get('MARIADB_DATABASE'),
  MARIADB_USERNAME: env.get('MARIADB_USERNAME'),
  MARIADB_PASSWORD: env.get('MARIADB_PASSWORD'),
  MARIADB_PORT: env.get('MARIADB_PORT')
}