"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getHealFeedListInDB;

var _heal_feed = _interopRequireDefault(require("../models/heal_feed"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function getHealFeedListInDB(healfeedInRequest) {
  const HealFeed = (0, _heal_feed.default)();
  const HealFeedInDb = await HealFeed.insertMany(healfeedInRequest);
  return HealFeedInDb;
}
//# sourceMappingURL=create_healfeed.js.map
