"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getShipmentsListInDB;

var _shipments = _interopRequireDefault(require("../models/shipments"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function getShipmentsListInDB(shipmentsInRequest) {
  const Shipments = (0, _shipments.default)();
  const ShipmentsInDb = await Shipments.insertMany(shipmentsInRequest);
  return ShipmentsInDb;
}
//# sourceMappingURL=create_shipments.js.map
