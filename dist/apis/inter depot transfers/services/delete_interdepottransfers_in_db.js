"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = deleteInterDepotTransfers;

var _inter_depot_transfer = _interopRequireDefault(require("../models/inter_depot_transfer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function deleteInterDepotTransfers(ids) {
  const InterDepotTransfers = (0, _inter_depot_transfer.default)();
  await InterDepotTransfers.deleteMany({
    _id: {
      $in: ids
    }
  });
  return {
    message: 'Inter depot transfer(s) deleted successfully'
  };
}
//# sourceMappingURL=delete_interdepottransfers_in_db.js.map
