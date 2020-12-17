"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = updateHealUsage;

var _heal_usage = _interopRequireDefault(require("../models/heal_usage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function updateHealUsage(healusageList) {
  const HealUsage = (0, _heal_usage.default)();
  await Promise.all(healusageList.map(async healUsage => {
    return HealUsage.findByIdAndUpdate({
      _id: healUsage._id
    }, healUsage.update);
  }));
  return {
    message: 'HealUsage updated successfully'
  };
}
//# sourceMappingURL=update_healusage_in_db.js.map
