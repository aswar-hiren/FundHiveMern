const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('stripeAccount', {
    stripeAccountId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    accountId: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    status: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    createdDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    modifiedDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    loginLink: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'stripeAccount',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "stripeAccount_pkey",
        unique: true,
        fields: [
          { name: "stripeAccountId" },
        ]
      },
    ]
  });
};
