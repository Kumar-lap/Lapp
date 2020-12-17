"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = deleteStock;

var _index = _interopRequireDefault(require("../services/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function deleteStock(req, res, next) {
  try {
    const {
      ids
    } = req.query;
    return res.json(_index.default.deleteStockInDB(ids.split(',')));
  } catch (error) {
    return next(error);
  }
}
//# sourceMappingURL=stock_delete.js.map
