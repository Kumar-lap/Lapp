"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getHolograms;

var _index = _interopRequireDefault(require("../services/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function getHolograms(req, res, next) {
  try {
    const {
      limit,
      offset
    } = req.query;
    return res.json(_index.default.getHologramsInDB(offset, limit));
  } catch (error) {
    return next(error);
  }
}
//# sourceMappingURL=holograms_get.js.map
