"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getHealFeedInDB;

var _heal_feed = _interopRequireDefault(require("../models/heal_feed"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function getHealFeedInDB(offset, limit) {
  const HealFeed = (0, _heal_feed.default)();
  const healfeedInDb = await HealFeed.find().skip(offset || 0).limit(limit || 20).lean();
  return healfeedInDb;
}
//# sourceMappingURL=get_healfeed_in_db.js.map
