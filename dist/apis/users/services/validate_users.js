"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = validateUsers;

var _boom = _interopRequireDefault(require("@hapi/boom"));

var _lodash = _interopRequireDefault(require("lodash"));

var _user = _interopRequireDefault(require("../models/user"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function validateUsers(users) {
  const Users = (0, _user.default)();
  const duplicateUserIds = (0, _lodash.default)(users.map(user => user.userId)).groupBy().pickBy(x => x.length > 1).keys().value();

  if (duplicateUserIds.length > 0) {
    throw _boom.default.badRequest(`Found duplicate ids in file : ${duplicateUserIds.join(', ')}`);
  }

  const duplicateMobileNumbers = (0, _lodash.default)(users.map(user => user.mobileNumber)).groupBy().pickBy(x => x.length > 1).keys().value();

  if (duplicateMobileNumbers.length > 0) {
    throw _boom.default.badRequest(`Found duplicate mobile numbers in file : ${duplicateMobileNumbers.join(', ')}`);
  }

  const oldUsers = await Users.find({
    userId: users.map(user => user.userId)
  }).select('userId');
  const oldUserIds = oldUsers.map(user => user.userId);
  let newUsers = users.filter(user => oldUserIds.indexOf(user.userId) < 0);

  if (newUsers.length === 0) {
    throw _boom.default.badRequest('No new users found in the file');
  }

  const usersWithInvalidEmailIds = newUsers.filter(user => {
    const emailRegex = /^[^@]+@[^@]+\.[^@]+$/;
    const {
      email
    } = user;
    const match = email.match(emailRegex);
    return user.email !== '-' && !match;
  });
  if (usersWithInvalidEmailIds.length > 0) throw _boom.default.badRequest(`Invalid email is passed for users - ${usersWithInvalidEmailIds.map(user => user.userId).join(', ')}`);
  newUsers = newUsers.map(user => ({ ...user,
    mobileNumber: user.mobileNumber.slice(-10),
    email: user.email === '-' ? undefined : user.email
  }));
  const usersWithInvalidMobileNumbers = newUsers.filter(user => {
    const mobileRegex = /^[0][1-9]\d{9}$|^[1-9]\d{9}$/;
    const {
      mobileNumber
    } = user;
    const match = mobileNumber.match(mobileRegex);
    return !match;
  });
  if (usersWithInvalidMobileNumbers.length > 0) throw _boom.default.badRequest(`Invalid mobile number is passed for users - ${usersWithInvalidMobileNumbers.map(user => user.userId).join(', ')}`);
  const oldMobileNumbers = await Users.find({
    mobileNumber: {
      $in: newUsers.map(user => `+91${user.mobileNumber}`)
    }
  }).select('_id');

  if (oldMobileNumbers.length > 0) {
    throw _boom.default.badRequest('Found some mobile numbers which are already registered for other users');
  }

  const oldEmailIds = await Users.find({
    email: newUsers.filter(user => user.email).map(user => user.email)
  }).select('_id');

  if (oldEmailIds.length > 0) {
    throw _boom.default.badRequest('Some of the email ids are already registered for other users');
  }

  return newUsers;
}
//# sourceMappingURL=validate_users.js.map
