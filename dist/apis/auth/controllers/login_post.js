"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = login;

var _index = _interopRequireDefault(require("../services/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function login(req, res, next) {
  try {
    const {
      userId
    } = req.body;
    const {
      password
    } = req.body;
    await _index.default.dbAuthenticate(userId, password);
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
//# sourceMappingURL=login_post.js.map
