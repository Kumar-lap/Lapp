"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = updateHealFeed;

var _heal_feed = _interopRequireDefault(require("../models/heal_feed"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function updateHealFeed(healfeedList) {
  const HealFeed = (0, _heal_feed.default)();
  await Promise.all(healfeedList.map(async healFeed => {
    return HealFeed.findByIdAndUpdate({
      _id: healFeed._id
    }, healFeed.update);
  }));
  return {
    message: 'HealFeed updated successfully'
  };
}
//# sourceMappingURL=update_healfeed_in_db.js.map
