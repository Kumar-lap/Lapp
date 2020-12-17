"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = deleteProductionLine;

var _production_line = _interopRequireDefault(require("../models/production_line"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function deleteProductionLine(ids) {
  const ProductionLine = (0, _production_line.default)();
  await ProductionLine.deleteMany({
    _id: {
      $in: ids
    }
  });
  return {
    message: 'Production line(s) deleted successfully'
  };
}
//# sourceMappingURL=delete_productionline_in_db.js.map
