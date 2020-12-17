"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = addHolograms;

var _index = _interopRequireDefault(require("../services/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function addHolograms(req, res, next) {
  try {
    return res.json(_index.default.createHolograms(req.body));
  } catch (error) {
    return next(error);
  }
}
//# sourceMappingURL=holograms_post.js.map
