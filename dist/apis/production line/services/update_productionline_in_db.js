"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = updateProductionLine;

var _production_line = _interopRequireDefault(require("../models/production_line"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function updateProductionLine(productionlineList) {
  const ProductionLine = (0, _production_line.default)();
  await Promise.all(productionlineList.map(async productionLine => {
    return ProductionLine.findByIdAndUpdate({
      _id: productionLine._id
    }, productionLine.update);
  }));
  return {
    message: 'ProductionLine updated successfully'
  };
}
//# sourceMappingURL=update_productionline_in_db.js.map
