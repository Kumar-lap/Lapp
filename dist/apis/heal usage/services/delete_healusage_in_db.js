"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = deleteHealUsage;

var _heal_usage = _interopRequireDefault(require("../models/heal_usage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function deleteHealUsage(ids) {
  const HealUsage = (0, _heal_usage.default)();
  await HealUsage.deleteMany({
    _id: {
      $in: ids
    }
  });
  return {
    message: 'Heal usage deleted successfully'
  };
}
//# sourceMappingURL=delete_healusage_in_db.js.map
