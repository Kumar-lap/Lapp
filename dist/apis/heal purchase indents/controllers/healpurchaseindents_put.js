"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = updateHealPurchaseIndents;

var _index = _interopRequireDefault(require("../services/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function updateHealPurchaseIndents(req, res, next) {
  try {
    return res.json(_index.default.updateHealPurchaseIndentsInDB(req.body));
  } catch (error) {
    return next(error);
  }
}
//# sourceMappingURL=healpurchaseindents_put.js.map
