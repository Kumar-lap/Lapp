"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = updateBreakages;

var _index = _interopRequireDefault(require("../services/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function updateBreakages(req, res, next) {
  try {
    return res.json(_index.default.updateBreakagesInDB(req.body));
  } catch (error) {
    return next(error);
  }
}
//# sourceMappingURL=breakages_put.js.map
