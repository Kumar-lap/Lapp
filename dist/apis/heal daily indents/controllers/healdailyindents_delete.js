"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = deleteHealDailyIndents;

var _index = _interopRequireDefault(require("../services/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function deleteHealDailyIndents(req, res, next) {
  try {
    const {
      ids
    } = req.query;
    return res.json(_index.default.deleteHealDailyIndentsInDB(ids.split(',')));
  } catch (error) {
    return next(error);
  }
}
//# sourceMappingURL=healdailyindents_delete.js.map
