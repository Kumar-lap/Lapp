"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getProductionLineInDB;

var _production_line = _interopRequireDefault(require("../models/production_line"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function getProductionLineInDB(offset, limit) {
  const ProductionLine = (0, _production_line.default)();
  const productionlineInDb = await ProductionLine.find().skip(offset || 0).limit(limit || 20).lean();
  return productionlineInDb;
}
//# sourceMappingURL=get_productionline_in_db.js.map
