"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = addStock;

var _index = _interopRequireDefault(require("../services/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function addStock(req, res, next) {
  try {
    return res.json(_index.default.createStock(req.body));
  } catch (error) {
    return next(error);
  }
}
//# sourceMappingURL=stock_post.js.map
