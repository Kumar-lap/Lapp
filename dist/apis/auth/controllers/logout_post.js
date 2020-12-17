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
    } = req.user;
    const jwt = req.headers.authorization.split(' ')[1];
    await _index.default.revokeJwt(userId, jwt);
    return res.json({
      message: 'User logged out successfully'
    });
  } catch (error) {
    return next(error);
  }
}
//# sourceMappingURL=logout_post.js.map
