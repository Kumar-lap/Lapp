"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = deleteHealFeed;

var _index = _interopRequireDefault(require("../services/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function deleteHealFeed(req, res, next) {
  try {
    const {
      ids
    } = req.query;
    return res.json(_index.default.deleteHealFeedInDB(ids.split(',')));
  } catch (error) {
    return next(error);
  }
}
//# sourceMappingURL=healfeed_delete.js.map
