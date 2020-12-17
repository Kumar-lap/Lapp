"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getProductionDetails;

var _production = _interopRequireDefault(require("../models/production"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function getProductionDetails(offset, limit) {
  const ProductionDetails = (0, _production.default)();
  const productionListInDb = await ProductionDetails.find().skip(offset || 0).limit(limit || 20).populate({
    path: 'product',
    select: 'productCode productName'
  }).populate({
    path: 'line',
    select: 'lineName'
  }).lean();
  return productionListInDb.map(production => {
    return { ...production,
      ...{
        productName: production.product.productName,
        productCode: production.product.productCode,
        lineName: production.line.lineName,
        product: undefined,
        line: undefined
      }
    };
  });
}
//# sourceMappingURL=get_production_details.js.map
