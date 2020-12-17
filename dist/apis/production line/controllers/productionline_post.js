"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = addProductionLine;

var _index = _interopRequireDefault(require("../services/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function addProductionLine(req, res, next) {
  try {
    return res.json(_index.default.createProductionLine(req.body));
  } catch (error) {
    return next(error);
  }
}
//# sourceMappingURL=productionline_post.js.map
