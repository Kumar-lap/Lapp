"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = deleteHealPurchaseIndents;

var _index = _interopRequireDefault(require("../services/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function deleteHealPurchaseIndents(req, res, next) {
  try {
    const {
      ids
    } = req.query;
    return res.json(_index.default.deleteHealPurchaseIndentsInDB(ids.split(',')));
  } catch (error) {
    return next(error);
  }
}
//# sourceMappingURL=healpurchaseindents_delete.js.map
