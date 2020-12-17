"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getIsRevokedCallBackForAccessToken = getIsRevokedCallBackForAccessToken;
exports.getIsRevokedCallBackForRefreshToken = getIsRevokedCallBackForRefreshToken;

var _stringHash = _interopRequireDefault(require("string-hash"));

var _redis_connection = _interopRequireDefault(require("../../config/redis_connection"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getIsRevokedCallBackForAccessToken() {
  const client = (0, _redis_connection.default)();
  return (req, payload, done) => {
    const {
      issueTime
    } = payload;
    const {
      userId
    } = payload;
    const hoursOfIssueTime = new Date(issueTime).getHours();
    const userIdHash = (0, _stringHash.default)(userId);
    const tokenBucketID = `${parseInt(userIdHash / 500, 10)}-${hoursOfIssueTime}`;
    client.hget(tokenBucketID, userId, (err, response) => {
      if (err) {
        return done(err);
      }

      if (response) {
        if (issueTime <= response) {
          return done(null, true);
        }

        return done(null, false);
      }

      return done(null, false);
    });
  };
}

function getIsRevokedCallBackForRefreshToken() {
  const client = (0, _redis_connection.default)();
  return (req, payload, done) => {
    const {
      issueTime
    } = payload;
    const {
      userId
    } = payload;
    const dateOfIssueTime = new Date(issueTime).getDate();
    const userIdHash = (0, _stringHash.default)(userId);
    const refreshTokenBucketID = `refresh-${parseInt(userIdHash / 500, 10)}-${dateOfIssueTime}`;
    client.hget(refreshTokenBucketID, userId, (err, response) => {
      if (err) {
        return done(err);
      }

      if (response) {
        if (issueTime <= response) {
          return done(null, true);
        }

        return done(null, false);
      }

      return done(null, false);
    });
  };
}
//# sourceMappingURL=checkRevokedToken.js.map
