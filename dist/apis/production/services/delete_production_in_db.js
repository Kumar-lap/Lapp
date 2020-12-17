"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = deleteProduction;

var _production = _interopRequireDefault(require("../models/production"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function deleteProduction(ids) {
  const Production = (0, _production.default)();
  await Production.deleteMany({
    _id: {
      $in: ids
    }
  });
  return {
    message: 'Production(s) deleted successfully'
  };
}
//# sourceMappingURL=delete_production_in_db.js.map
