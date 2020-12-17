"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = deleteInterDepotTransfers;

var _index = _interopRequireDefault(require("../services/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function deleteInterDepotTransfers(req, res, next) {
  try {
    const {
      ids
    } = req.query;
    return res.json(_index.default.deleteInterDepotTransfersInDB(ids.split(',')));
  } catch (error) {
    return next(error);
  }
}
//# sourceMappingURL=interdepottransfers_delete.js.map
