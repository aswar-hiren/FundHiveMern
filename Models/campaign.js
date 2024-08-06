const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('campaign', {
    Id: {
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
    description: {
      type: DataTypes.STRING,
      allowNull: true
    },
    targetedamount: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    createdate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    isdeleted: {
      type: DataTypes.BOOLEAN,
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
    status: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    categoryid: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'category',
        key: 'categoryid'
      }
    },
    achivedamount: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    photo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    campaignstartdate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    campaignenddate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    createby: {
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
    street: {
      type: DataTypes.STRING,
      allowNull: true
    },
    city: {
      type: DataTypes.STRING,
      allowNull: true
    },
    zipcode: {
      type: DataTypes.STRING,
      allowNull: true
    },
    state: {
      type: DataTypes.STRING,
      allowNull: true
    },
    address: {
      type: DataTypes.STRING,
      allowNull: true
    },
    photopreview: {
      type: DataTypes.STRING,
      allowNull: true
    },
    modifieddate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    birthdate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    isRequest: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    isExtended: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    isTransferMoney: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'campaign',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "Campain_pkey",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
