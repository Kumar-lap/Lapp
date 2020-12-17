"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = deleteHealInventory;

var _index = _interopRequireDefault(require("../services/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function deleteHealInventory(req, res, next) {
  try {
    const {
      ids
    } = req.query;
    return res.json(_index.default.deleteHealInventoryInDB(ids.split(',')));
  } catch (error) {
    return next(error);
  }
}
//# sourceMappingURL=healinventory_delete.js.map
