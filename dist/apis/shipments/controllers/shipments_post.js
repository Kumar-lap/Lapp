"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = addShipments;

var _index = _interopRequireDefault(require("../services/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function addShipments(req, res, next) {
  try {
    return res.json(_index.default.createShipments(req.body));
  } catch (error) {
    return next(error);
  }
}
//# sourceMappingURL=shipments_post.js.map
