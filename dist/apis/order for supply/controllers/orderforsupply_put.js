"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = updateOrderForSupply;

var _index = _interopRequireDefault(require("../services/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function updateOrderForSupply(req, res, next) {
  try {
    return res.json(_index.default.updateOrderForSupplyInDB(req.body));
  } catch (error) {
    return next(error);
  }
}
//# sourceMappingURL=orderforsupply_put.js.map
