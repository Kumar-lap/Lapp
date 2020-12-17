"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = deleteShipments;

var _shipments = _interopRequireDefault(require("../models/shipments"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function deleteShipments(ids) {
  const Shipments = (0, _shipments.default)();
  await Shipments.deleteMany({
    _id: {
      $in: ids
    }
  });
  return {
    message: 'Shipments deleted successfully'
  };
}
//# sourceMappingURL=delete_shipments_in_db.js.map
