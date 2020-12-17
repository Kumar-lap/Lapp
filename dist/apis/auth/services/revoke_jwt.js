"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = revokeJwt;

var _jwtDecode = _interopRequireDefault(require("jwt-decode"));

var _stringHash = _interopRequireDefault(require("string-hash"));

var _ms = _interopRequireDefault(require("ms"));

var _redis_connection = _interopRequireDefault(require("../../../config/redis_connection"));

var _env = _interopRequireDefault(require("../../../config/env"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function revokeJwt(userId, jwt) {
  const {
    issueTime
  } = (0, _jwtDecode.default)(jwt);
  const cacheDBClient = (0, _redis_connection.default)();
  const keyExpiry = (0, _ms.default)(_env.default.REDIS_KEY_EXPIRY) / 1000;
  const hoursOfIssueTime = new Date(issueTime).getHours();
  const dateOfIssueTime = new Date(issueTime).getDate();
  const userIdHash = (0, _stringHash.default)(userId);
  const tokenBucketID = `${parseInt(userIdHash / 500, 10)}-${hoursOfIssueTime}`;
  const lastLogOut = Date.now();
  cacheDBClient.hmset(tokenBucketID, userId, lastLogOut);
  cacheDBClient.expire(tokenBucketID, keyExpiry); // revoke refresh token

  const refreshKeyExpiry = (0, _ms.default)(_env.default.REDIS_REFRESH_KEY_EXPIRY) / 1000;
  const refreshTokenBucketID = `refresh-${parseInt(userIdHash / 500, 10)}-${dateOfIssueTime}`;
  cacheDBClient.hmset(refreshTokenBucketID, userId, lastLogOut);
  cacheDBClient.expire(refreshTokenBucketID, refreshKeyExpiry);
}
//# sourceMappingURL=revoke_jwt.js.map
