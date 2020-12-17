"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getInterDepotTransfersInDB;

var _inter_depot_transfer = _interopRequireDefault(require("../models/inter_depot_transfer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function getInterDepotTransfersInDB(offset, limit) {
  const InterDepotTransfers = (0, _inter_depot_transfer.default)();
  const interdepottransfersInDb = await InterDepotTransfers.find().skip(offset || 0).limit(limit || 20).lean();
  return interdepottransfersInDb;
}
//# sourceMappingURL=get_interdepottransfers_in_db.js.map
