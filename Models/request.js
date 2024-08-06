const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('request', {
    requestId: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    campaignId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    CampaignName: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'request',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "request_pkey",
        unique: true,
        fields: [
          { name: "requestId" },
        ]
      },
    ]
  });
};
