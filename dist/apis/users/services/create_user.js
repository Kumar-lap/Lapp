"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createUser;

var _boom = _interopRequireDefault(require("@hapi/boom"));

var _user = _interopRequireDefault(require("../models/user"));

var _agenda_setup = _interopRequireDefault(require("../../../config/agenda_setup"));

var _agenda = require("../../../helpers/job_scheduler/agenda");

var _index = _interopRequireDefault(require("../../auth/services/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function createUser(user) {
  const agendaScheduler = (0, _agenda_setup.default)();
  const Users = (0, _user.default)();
  const userWithSameMobileNumber = await Users.findOne({
    mobileNumber: user.mobileNumber
  });
  const userAccountInDB = await Users.findOne({
    userId: user.userId
  });
  if (userAccountInDB) throw _boom.default.badRequest('Cannot add users with same userId');
  if (userWithSameMobileNumber) throw _boom.default.badRequest('This mobile number is already registered');

  if (user.email) {
    const userWithEmail = await Users.findOne({
      email: user.email
    });
    if (userWithEmail) throw _boom.default.badRequest('This emailId is already registered');
  }

  const newUser = await Users.create({
    _id: user.userId,
    ...user
  });
  const randomPassword = Math.random().toString(36).slice(-8);
  await _index.default.createUser({
    userId: newUser.userId,
    password: randomPassword,
    isFirstLogin: true
  });
  (0, _agenda.scheduleNewSmsNow)(agendaScheduler, {
    mobileNumber: user.mobileNumber,
    message: `Your one time login pasword for Egovernance system is ${randomPassword}`
  });
  return newUser;
}
//# sourceMappingURL=create_user.js.map
