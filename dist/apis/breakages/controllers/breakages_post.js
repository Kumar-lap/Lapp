"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = addBreakages;

var _index = _interopRequireDefault(require("../services/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function addBreakages(req, res, next) {
  try {
    return res.json(_index.default.createBreakages(req.body));
  } catch (error) {
    return next(error);
  }
}
//# sourceMappingURL=breakages_post.js.map
