"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = deleteShipments;

var _index = _interopRequireDefault(require("../services/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function deleteShipments(req, res, next) {
  try {
    const {
      ids
    } = req.query;
    return res.json(_index.default.deleteShipmentsInDB(ids.split(',')));
  } catch (error) {
    return next(error);
  }
}
//# sourceMappingURL=shipments_delete.js.map
