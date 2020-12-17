"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = deleteHealPurchaseIndents;

var _heal_purchase_indents = _interopRequireDefault(require("../models/heal_purchase_indents"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function deleteHealPurchaseIndents(ids) {
  const HealPurchaseIndents = (0, _heal_purchase_indents.default)();
  await HealPurchaseIndents.deleteMany({
    _id: {
      $in: ids
    }
  });
  return {
    message: 'Heal purchase indents deleted successfully'
  };
}
//# sourceMappingURL=delete_healpurchaseindents_in_db.js.map
