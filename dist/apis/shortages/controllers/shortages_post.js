"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = addShortages;

var _index = _interopRequireDefault(require("../services/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function addShortages(req, res, next) {
  try {
    return res.json(_index.default.createShortages(req.body));
  } catch (error) {
    return next(error);
  }
}
//# sourceMappingURL=shortages_post.js.map
