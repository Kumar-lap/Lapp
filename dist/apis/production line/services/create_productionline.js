"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getProductionLineListInDB;

var _production_line = _interopRequireDefault(require("../models/production_line"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function getProductionLineListInDB(productionlineInRequest) {
  const ProductionLine = (0, _production_line.default)();
  const ProductionLineInDb = await ProductionLine.insertMany(productionlineInRequest);
  return ProductionLineInDb;
}
//# sourceMappingURL=create_productionline.js.map
