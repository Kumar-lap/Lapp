"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = deleteHealFeed;

var _heal_feed = _interopRequireDefault(require("../models/heal_feed"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function deleteHealFeed(ids) {
  const HealFeed = (0, _heal_feed.default)();
  await HealFeed.deleteMany({
    _id: {
      $in: ids
    }
  });
  return {
    message: 'Heal feed deleted successfully'
  };
}
//# sourceMappingURL=delete_healfeed_in_db.js.map
