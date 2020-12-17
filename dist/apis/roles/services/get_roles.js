"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getOtpVerificationStatus;

var _roles = _interopRequireDefault(require("../models/roles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function getOtpVerificationStatus() {
  const Roles = (0, _roles.default)();
  const rolesInDb = await Roles.find();
  return rolesInDb;
}
//# sourceMappingURL=get_roles.js.map
