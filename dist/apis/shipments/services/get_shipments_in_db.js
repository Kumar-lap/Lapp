"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getShipmentsInDB;

var _shipments = _interopRequireDefault(require("../models/shipments"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function getShipmentsInDB(offset, limit) {
  const Shipments = (0, _shipments.default)();
  const shipmentsInDb = await Shipments.find().skip(offset || 0).limit(limit || 20).lean();
  return shipmentsInDb;
}
//# sourceMappingURL=get_shipments_in_db.js.map
