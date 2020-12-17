"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getHealInventory;

var _index = _interopRequireDefault(require("../services/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function getHealInventory(req, res, next) {
  try {
    const {
      limit,
      offset
    } = req.query;
    return res.json(_index.default.getHealInventoryInDB(offset, limit));
  } catch (error) {
    return next(error);
  }
}
//# sourceMappingURL=healinventory_get.js.map
