"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = updateShipments;

var _index = _interopRequireDefault(require("../services/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function updateShipments(req, res, next) {
  try {
    return res.json(_index.default.updateShipmentsInDB(req.body));
  } catch (error) {
    return next(error);
  }
}
//# sourceMappingURL=shipments_put.js.map
