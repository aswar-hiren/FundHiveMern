var DataTypes = require("sequelize").DataTypes;
var _campaign = require("./campaign");
var _category = require("./category");
var _donation = require("./donation");
var _payoutDonation = require("./payoutDonation");
var _request = require("./request");
var _role = require("./role");
var _stripeAccount = require("./stripeAccount");
var _users = require("./users");

function initModels(sequelize) {
  var campaign = _campaign(sequelize, DataTypes);
  var category = _category(sequelize, DataTypes);
  var donation = _donation(sequelize, DataTypes);
  var payoutDonation = _payoutDonation(sequelize, DataTypes);
  var request = _request(sequelize, DataTypes);
  var role = _role(sequelize, DataTypes);
  var stripeAccount = _stripeAccount(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);

  campaign.belongsTo(category, { as: "category", foreignKey: "categoryid"});
  category.hasMany(campaign, { as: "campaigns", foreignKey: "categoryid"});
  users.belongsTo(role, { as: "role", foreignKey: "roleid"});
  role.hasMany(users, { as: "users", foreignKey: "roleid"});
  payoutDonation.belongsTo(stripeAccount, { as: "destinationAccount_stripeAccount", foreignKey: "destinationAccount"});
  stripeAccount.hasMany(payoutDonation, { as: "payoutDonations", foreignKey: "destinationAccount"});
  campaign.belongsTo(users, { as: "user", foreignKey: "userid"});
  users.hasMany(campaign, { as: "campaigns", foreignKey: "userid"});
  donation.belongsTo(users, { as: "user", foreignKey: "userid"});
  users.hasMany(donation, { as: "donations", foreignKey: "userid"});
  stripeAccount.belongsTo(users, { as: "user", foreignKey: "userId"});
  users.hasMany(stripeAccount, { as: "stripeAccounts", foreignKey: "userId"});

  return {
    campaign,
    category,
    donation,
    payoutDonation,
    request,
    role,
    stripeAccount,
    users,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
