const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('payoutDonation', {
    payoutDonationId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    transferId: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    destinationAccount: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'stripeAccount',
        key: 'stripeAccountId'
      }
    },
    amount: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    createdDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    campaignId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    isPaid: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    modifiedDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    payoutId: {
      type: DataTypes.STRING(30),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'payoutDonation',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "payoutDonation_pkey",
        unique: true,
        fields: [
          { name: "payoutDonationId" },
        ]
      },
    ]
  });
};
