"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = updateShipments;

var _shipments = _interopRequireDefault(require("../models/shipments"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function updateShipments(shipmentsList) {
  const Shipments = (0, _shipments.default)();
  await Promise.all(shipmentsList.map(async shipment => {
    return Shipments.findByIdAndUpdate({
      _id: shipment._id
    }, shipment.update);
  }));
  return {
    message: 'Shipments updated successfully'
  };
}
//# sourceMappingURL=update_shipments_in_db.js.map
