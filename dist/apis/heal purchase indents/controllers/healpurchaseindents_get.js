"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getHealPurchaseIndents;

var _index = _interopRequireDefault(require("../services/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function getHealPurchaseIndents(req, res, next) {
  try {
    const {
      limit,
      offset
    } = req.query;
    return res.json(_index.default.getHealPurchaseIndentsInDB(offset, limit));
  } catch (error) {
    return next(error);
  }
}
//# sourceMappingURL=healpurchaseindents_get.js.map
