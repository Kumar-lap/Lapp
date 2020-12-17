"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = deleteHealInventory;

var _heal_inventory = _interopRequireDefault(require("../models/heal_inventory"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function deleteHealInventory(ids) {
  const HealInventory = (0, _heal_inventory.default)();
  await HealInventory.deleteMany({
    _id: {
      $in: ids
    }
  });
  return {
    message: 'Heal inventory deleted successfully'
  };
}
//# sourceMappingURL=delete_healinventory_in_db.js.map
