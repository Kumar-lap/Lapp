"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getRoles;

var _index = _interopRequireDefault(require("../services/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function getRoles(req, res, next) {
  try {
    return res.json(_index.default.getRoles);
  } catch (error) {
    return next(error);
  }
}
//# sourceMappingURL=roles_get.js.map
