"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = updateHealPurchaseIndents;

var _heal_purchase_indents = _interopRequireDefault(require("../models/heal_purchase_indents"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function updateHealPurchaseIndents(healpurchaseindentsList) {
  const HealPurchaseIndents = (0, _heal_purchase_indents.default)();
  await Promise.all(healpurchaseindentsList.map(async healPurchaseIndent => {
    return HealPurchaseIndents.findByIdAndUpdate({
      _id: healPurchaseIndent._id
    }, healPurchaseIndent.update);
  }));
  return {
    message: 'HealPurchaseIndents updated successfully'
  };
}
//# sourceMappingURL=update_healpurchaseindents_in_db.js.map
