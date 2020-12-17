"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getRefreshToken;

var _index = _interopRequireDefault(require("../services/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function getRefreshToken(req, res, next) {
  try {
    const {
      userId
    } = req.user;
    const issueTime = Date.now();
    const jwt = await _index.default.generateJwt(userId, issueTime);
    const refreshToken = await _index.default.generateRefreshToken(userId, issueTime);
    return res.json({
      jwt,
      refreshToken
    });
  } catch (error) {
    return next(error);
  }
}
//# sourceMappingURL=refreshtoken_get.js.map
