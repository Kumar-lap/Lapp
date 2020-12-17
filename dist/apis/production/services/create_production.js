"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getProductionListInDB;

var _production = _interopRequireDefault(require("../models/production"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function getProductionListInDB(productionInRequest) {
  const Production = (0, _production.default)();
  const ProductionInDb = await Production.insertMany(productionInRequest);
  return ProductionInDb;
}
//# sourceMappingURL=create_production.js.map
