"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  PORT: process.env.PORT || 3000,
  MONGODBSRV: process.env.MONGODBSRV,
  JWT_SECRET: process.env.JWT_SECRET,
  JWT_REFRESH_SECRET: process.env.JWT_REFRESH_SECRET,
  TOKEN_EXPIRY: process.env.TOKEN_EXPIRY,
  REFRESH_TOKEN_EXPIRY: process.env.REFRESH_TOKEN_EXPIRY,
  VERIFY_SERVICE_SID: process.env.VERIFY_SERVICE_SID,
  TWILIO_ACCOUNT_SID: process.env.TWILIO_ACCOUNT_SID,
  TWILIO_AUTH_TOKEN: process.env.TWILIO_AUTH_TOKEN,
  REDIS_PORT: process.argv[3] || process.env.REDIS_PORT,
  REDIS_PASSWORD: process.env.REDIS_PASSWORD,
  REDIS_HOST: process.env.REDIS_HOST,
  REDIS_KEY_EXPIRY: process.env.REDIS_KEY_EXPIRY,
  REDIS_REFRESH_KEY_EXPIRY: process.env.REDIS_REFRESH_KEY_EXPIRY,
  FORGOT_PASSWORD_URL_EXPIRY: process.env.FORGOT_PASSWORD_URL_EXPIRY,
  OTP_EXPIRY: process.env.OTP_EXPIRY,
  TWILIO_PHONE_NUMBER: process.env.TWILIO_PHONE_NUMBER,
  S3_BUCKET_NAME: process.env.S3_BUCKET_NAME,
  S3_ACCESS_KEY_ID: process.env.S3_ACCESS_KEY_ID,
  S3_ACCESS_KEY: process.env.S3_ACCESS_KEY
};
exports.default = _default;
//# sourceMappingURL=env.js.map
