"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getHealDailyIndentsListInDB;

var _heal_daily_indents = _interopRequireDefault(require("../models/heal_daily_indents"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function getHealDailyIndentsListInDB(healdailyindentsInRequest) {
  const HealDailyIndents = (0, _heal_daily_indents.default)();
  const HealDailyIndentsInDb = await HealDailyIndents.insertMany(healdailyindentsInRequest);
  return HealDailyIndentsInDb;
}
//# sourceMappingURL=create_healdailyindents.js.map
