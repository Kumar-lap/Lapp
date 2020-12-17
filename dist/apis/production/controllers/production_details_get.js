"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getProductionDetails;

var _index = _interopRequireDefault(require("../services/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function getProductionDetails(req, res, next) {
  try {
    const {
      limit,
      offset
    } = req.query;
    return res.json(_index.default.getProductionDetails(offset, limit));
  } catch (error) {
    return next(error);
  }
}
//# sourceMappingURL=production_details_get.js.map
