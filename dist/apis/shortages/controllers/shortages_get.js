"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getShortages;

var _index = _interopRequireDefault(require("../services/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function getShortages(req, res, next) {
  try {
    const {
      limit,
      offset
    } = req.query;
    return res.json(_index.default.getShortagesInDB(offset, limit));
  } catch (error) {
    return next(error);
  }
}
//# sourceMappingURL=shortages_get.js.map
