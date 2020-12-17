"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = addHealDailyIndents;

var _index = _interopRequireDefault(require("../services/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function addHealDailyIndents(req, res, next) {
  try {
    return res.json(_index.default.createHealDailyIndents(req.body));
  } catch (error) {
    return next(error);
  }
}
//# sourceMappingURL=healdailyindents_post.js.map
