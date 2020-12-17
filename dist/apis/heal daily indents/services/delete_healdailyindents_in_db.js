"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = deleteHealDailyIndents;

var _heal_daily_indents = _interopRequireDefault(require("../models/heal_daily_indents"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function deleteHealDailyIndents(ids) {
  const HealDailyIndents = (0, _heal_daily_indents.default)();
  await HealDailyIndents.deleteMany({
    _id: {
      $in: ids
    }
  });
  return {
    message: 'Heal daily indent(s) deleted successfully'
  };
}
//# sourceMappingURL=delete_healdailyindents_in_db.js.map
