"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = generateJwtToken;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _ms = _interopRequireDefault(require("ms"));

var _env = _interopRequireDefault(require("../../../config/env"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function generateJwtToken(userId, issueTime) {
  const payload = {
    userId,
    issueTime
  };
  const secret = _env.default.JWT_SECRET;
  const tokenExpiry = {
    expiresIn: (0, _ms.default)(_env.default.TOKEN_EXPIRY)
  };

  const jwt = _jsonwebtoken.default.sign(payload, secret, tokenExpiry);

  return jwt;
}
//# sourceMappingURL=generate_jwt.js.map
