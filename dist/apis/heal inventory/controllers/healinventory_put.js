"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = updateHealInventory;

var _index = _interopRequireDefault(require("../services/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function updateHealInventory(req, res, next) {
  try {
    return res.json(_index.default.updateHealInventoryInDB(req.body));
  } catch (error) {
    return next(error);
  }
}
//# sourceMappingURL=healinventory_put.js.map
