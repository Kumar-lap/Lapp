"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = updateapiName;

var _index = _interopRequireDefault(require("../services/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function updateapiName(req, res, next) {
  try {
    return res.json(_index.default.updateapiNameInDB(req.body));
  } catch (error) {
    return next(error);
  }
}
//# sourceMappingURL=fileName_put.js.map
