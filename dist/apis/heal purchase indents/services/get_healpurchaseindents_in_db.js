"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getHealPurchaseIndentsInDB;

var _heal_purchase_indents = _interopRequireDefault(require("../models/heal_purchase_indents"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function getHealPurchaseIndentsInDB(offset, limit) {
  const HealPurchaseIndents = (0, _heal_purchase_indents.default)();
  const healpurchaseindentsInDb = await HealPurchaseIndents.find().skip(offset || 0).limit(limit || 20).lean();
  return healpurchaseindentsInDb;
}
//# sourceMappingURL=get_healpurchaseindents_in_db.js.map
