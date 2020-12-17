"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getShipments;

var _index = _interopRequireDefault(require("../services/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function getShipments(req, res, next) {
  try {
    const {
      limit,
      offset
    } = req.query;
    return res.json(_index.default.getShipmentsInDB(offset, limit));
  } catch (error) {
    return next(error);
  }
}
//# sourceMappingURL=shipments_get.js.map
