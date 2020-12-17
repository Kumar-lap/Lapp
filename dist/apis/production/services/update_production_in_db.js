"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = updateProduction;

var _production = _interopRequireDefault(require("../models/production"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function updateProduction(productionList) {
  const Production = (0, _production.default)();
  await Promise.all(productionList.map(async production => {
    return Production.findByIdAndUpdate({
      _id: production._id
    }, production.update);
  }));
  return {
    message: 'Production updated successfully'
  };
}
//# sourceMappingURL=update_production_in_db.js.map
