"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getRedisClient;

var _redis = _interopRequireDefault(require("redis"));

var _env = _interopRequireDefault(require("./env"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const redisHost = _env.default.REDIS_HOST;
const redisPort = _env.default.REDIS_PORT;
const redisAuth = _env.default.REDIS_PASSWORD;

const redisClient = _redis.default.createClient({
  port: redisPort,
  host: redisHost,
  password: redisAuth
});

redisClient.on('connect', () => {
  console.log('connected on redis server');
});
redisClient.on('error', error => {
  console.log(`An error occured while connecting to redis ${error}`);
});

function getRedisClient() {
  return redisClient;
}
//# sourceMappingURL=redis_connection.js.map
