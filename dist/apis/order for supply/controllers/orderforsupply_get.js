"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getOrderForSupply;

var _index = _interopRequireDefault(require("../services/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function getOrderForSupply(req, res, next) {
  try {
    const {
      limit,
      offset
    } = req.query;
    return res.json(_index.default.getOrderForSupplyInDB(offset, limit));
  } catch (error) {
    return next(error);
  }
}
//# sourceMappingURL=orderforsupply_get.js.map
