"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getInterDepotTransfers;

var _index = _interopRequireDefault(require("../services/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function getInterDepotTransfers(req, res, next) {
  try {
    const {
      limit,
      offset
    } = req.query;
    return res.json(_index.default.getInterDepotTransfersInDB(offset, limit));
  } catch (error) {
    return next(error);
  }
}
//# sourceMappingURL=interdepottransfers_get.js.map
