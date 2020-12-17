"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = deleteHealUsage;

var _index = _interopRequireDefault(require("../services/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function deleteHealUsage(req, res, next) {
  try {
    const {
      ids
    } = req.query;
    return res.json(_index.default.deleteHealUsageInDB(ids.split(',')));
  } catch (error) {
    return next(error);
  }
}
//# sourceMappingURL=healusage_delete.js.map
