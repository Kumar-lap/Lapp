"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = updateInterDepotTransfers;

var _index = _interopRequireDefault(require("../services/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function updateInterDepotTransfers(req, res, next) {
  try {
    return res.json(_index.default.updateInterDepotTransfersInDB(req.body));
  } catch (error) {
    return next(error);
  }
}
//# sourceMappingURL=interdepottransfers_put.js.map
