"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getapiName;

var _index = _interopRequireDefault(require("../services/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function getapiName(req, res, next) {
  try {
    const {
      limit,
      offset
    } = req.query;
    return res.json(_index.default.getapiNameInDB(offset, limit));
  } catch (error) {
    return next(error);
  }
}
//# sourceMappingURL=fileName_get.js.map
