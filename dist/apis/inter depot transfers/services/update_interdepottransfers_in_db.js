"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = updateInterDepotTransfers;

var _inter_depot_transfer = _interopRequireDefault(require("../models/inter_depot_transfer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function updateInterDepotTransfers(interDepotTransfersList) {
  const InterDepotTransfers = (0, _inter_depot_transfer.default)();
  await Promise.all(interDepotTransfersList.map(async interDepotTransfer => {
    return InterDepotTransfers.findByIdAndUpdate({
      _id: interDepotTransfer._id
    }, interDepotTransfer.update);
  }));
  return {
    message: 'InterDepotTransfers updated successfully'
  };
}
//# sourceMappingURL=update_interdepottransfers_in_db.js.map
