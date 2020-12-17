"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = updateHealDailyIndents;

var _heal_daily_indents = _interopRequireDefault(require("../models/heal_daily_indents"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function updateHealDailyIndents(healdailyindentsList) {
  const HealDailyIndents = (0, _heal_daily_indents.default)();
  await Promise.all(healdailyindentsList.map(async healDailyIndent => {
    return HealDailyIndents.findByIdAndUpdate({
      _id: healDailyIndent._id
    }, healDailyIndent.update);
  }));
  return {
    message: 'HealDailyIndents updated successfully'
  };
}
//# sourceMappingURL=update_healdailyindents_in_db.js.map
