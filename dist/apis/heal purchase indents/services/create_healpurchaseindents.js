"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getHealPurchaseIndentsListInDB;

var _heal_purchase_indents = _interopRequireDefault(require("../models/heal_purchase_indents"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function getHealPurchaseIndentsListInDB(healpurchaseindentsInRequest) {
  const HealPurchaseIndents = (0, _heal_purchase_indents.default)();
  const HealPurchaseIndentsInDb = await HealPurchaseIndents.insertMany(healpurchaseindentsInRequest);
  return HealPurchaseIndentsInDb;
}
//# sourceMappingURL=create_healpurchaseindents.js.map
