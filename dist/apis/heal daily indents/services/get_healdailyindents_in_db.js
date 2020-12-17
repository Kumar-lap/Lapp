"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getHealDailyIndentsInDB;

var _heal_daily_indents = _interopRequireDefault(require("../models/heal_daily_indents"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function getHealDailyIndentsInDB(offset, limit) {
  const HealDailyIndents = (0, _heal_daily_indents.default)();
  const healdailyindentsInDb = await HealDailyIndents.find().skip(offset || 0).limit(limit || 20).lean();
  return healdailyindentsInDb;
}
//# sourceMappingURL=get_healdailyindents_in_db.js.map
