"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getInterDepotTransfersListInDB;

var _inter_depot_transfer = _interopRequireDefault(require("../models/inter_depot_transfer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function getInterDepotTransfersListInDB(interDepotTransfersInRequest) {
  const InterDepotTransfers = (0, _inter_depot_transfer.default)();
  const InterDepotTransfersInDb = await InterDepotTransfers.insertMany(interDepotTransfersInRequest);
  return InterDepotTransfersInDb;
}
//# sourceMappingURL=create_interdepottransfers.js.map
