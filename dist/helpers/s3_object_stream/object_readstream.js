"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getS3ObjectStream;

var _awsSdk = _interopRequireDefault(require("aws-sdk"));

var _env = _interopRequireDefault(require("../../config/env"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function getS3ObjectStream(key) {
  const s3 = new _awsSdk.default.S3({
    accessKeyId: _env.default.S3_ACCESS_KEY_ID,
    secretAccessKey: _env.default.S3_ACCESS_KEY
  });
  const params = {
    Bucket: _env.default.S3_BUCKET_NAME,
    Key: key
  };
  return s3.getObject(params).createReadStream();
}
//# sourceMappingURL=object_readstream.js.map
