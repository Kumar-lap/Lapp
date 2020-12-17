"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getHealInventoryListInDB;

var _heal_inventory = _interopRequireDefault(require("../models/heal_inventory"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function getHealInventoryListInDB(healinventoryInRequest) {
  const HealInventory = (0, _heal_inventory.default)();
  const HealInventoryInDb = await HealInventory.insertMany(healinventoryInRequest);
  return HealInventoryInDb;
}
//# sourceMappingURL=create_healinventory.js.map
