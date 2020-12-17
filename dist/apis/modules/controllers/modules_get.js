"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getModules;

var _index = _interopRequireDefault(require("../services/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function getModules(req, res, next) {
  try {
    return res.json(_index.default.getModulesByRole(req.loggedInUser.role._id));
  } catch (error) {
    return next(error);
  }
}
//# sourceMappingURL=modules_get.js.map
