"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getHealInventoryInDB;

var _heal_inventory = _interopRequireDefault(require("../models/heal_inventory"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function getHealInventoryInDB(offset, limit) {
  const HealInventory = (0, _heal_inventory.default)();
  const healinventoryInDb = await HealInventory.find().skip(offset || 0).limit(limit || 20).lean();
  return healinventoryInDb;
}
//# sourceMappingURL=get_healinventory_in_db.js.map
