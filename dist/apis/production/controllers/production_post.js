"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = addProduction;

var _index = _interopRequireDefault(require("../services/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function addProduction(req, res, next) {
  try {
    return res.json(_index.default.createProduction(req.body));
  } catch (error) {
    return next(error);
  }
}
//# sourceMappingURL=production_post.js.map
