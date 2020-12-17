"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = deleteOrderForSupply;

var _index = _interopRequireDefault(require("../services/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function deleteOrderForSupply(req, res, next) {
  try {
    const {
      ids
    } = req.query;
    return res.json(_index.default.deleteOrderForSupplyInDB(ids.split(',')));
  } catch (error) {
    return next(error);
  }
}
//# sourceMappingURL=orderforsupply_delete.js.map
