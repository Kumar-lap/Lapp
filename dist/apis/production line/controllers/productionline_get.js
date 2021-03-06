"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getProductionLine;

var _index = _interopRequireDefault(require("../services/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function getProductionLine(req, res, next) {
  try {
    const {
      limit,
      offset
    } = req.query;
    return res.json(_index.default.getProductionLineInDB(offset, limit));
  } catch (error) {
    return next(error);
  }
}
//# sourceMappingURL=productionline_get.js.map
