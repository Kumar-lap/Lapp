"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = addapiName;

var _index = _interopRequireDefault(require("../services/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function addapiName(req, res, next) {
  try {
    return res.json(_index.default.createapiName(req.body));
  } catch (error) {
    return next(error);
  }
}
//# sourceMappingURL=fileName_post.js.map
