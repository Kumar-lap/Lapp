"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = addHealUsage;

var _index = _interopRequireDefault(require("../services/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function addHealUsage(req, res, next) {
  try {
    return res.json(_index.default.createHealUsage(req.body));
  } catch (error) {
    return next(error);
  }
}
//# sourceMappingURL=healusage_post.js.map
