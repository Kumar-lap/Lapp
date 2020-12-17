"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = generateJwtToken;

var _ms = _interopRequireDefault(require("ms"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _env = _interopRequireDefault(require("../../../config/env"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function generateJwtToken(userId, issueTime) {
  const payload = {
    userId,
    issueTime
  };
  const secret = _env.default.JWT_REFRESH_SECRET;
  const tokenExpiry = {
    expiresIn: (0, _ms.default)(_env.default.TOKEN_EXPIRY)
  };

  const jwt = _jsonwebtoken.default.sign(payload, secret, tokenExpiry);

  return jwt;
}
//# sourceMappingURL=generate_refresh_token.js.map
