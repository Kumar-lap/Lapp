"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = updateHealInventory;

var _heal_inventory = _interopRequireDefault(require("../models/heal_inventory"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function updateHealInventory(healinventoryList) {
  const HealInventory = (0, _heal_inventory.default)();
  await Promise.all(healinventoryList.map(async healInventory => {
    return HealInventory.findByIdAndUpdate({
      _id: healInventory._id
    }, healInventory.update);
  }));
  return {
    message: 'HealInventory updated successfully'
  };
}
//# sourceMappingURL=update_healinventory_in_db.js.map
