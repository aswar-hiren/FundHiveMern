const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('donation', {
    donationid: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true
    },
    phonenumber: {
      type: DataTypes.STRING,
      allowNull: true
    },
    createdate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    donateamount: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    userid: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    campaignid: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    modifidate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    stripepaymentintent: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'donation',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "donation_pkey",
        unique: true,
        fields: [
          { name: "donationid" },
        ]
      },
    ]
  });
};
