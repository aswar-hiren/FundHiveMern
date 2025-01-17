const Sequelize = require('sequelize');
const path = require('path');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../Config/config.json')[env];
const initModels = require('../Models/init-models'); 
let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}
const db = initModels(sequelize);
db.sequelize = sequelize;
db.Sequelize = Sequelize;
module.exports = db;
