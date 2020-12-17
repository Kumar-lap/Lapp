"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = addOrderForSupply;

var _index = _interopRequireDefault(require("../services/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function addOrderForSupply(req, res, next) {
  try {
    return res.json(_index.default.createOrderForSupply(req.body));
  } catch (error) {
    return next(error);
  }
}
//# sourceMappingURL=orderforsupply_post.js.map
