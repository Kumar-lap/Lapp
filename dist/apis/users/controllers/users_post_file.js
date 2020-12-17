"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = postAttendance;

var _index = _interopRequireDefault(require("../services/index"));

var _object_readstream = _interopRequireDefault(require("../../../helpers/s3_object_stream/object_readstream"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function postAttendance(req, res, next) {
  try {
    const fileStream = await (0, _object_readstream.default)(req.body.key);
    console.log(fileStream);
    const message = await _index.default.parseCSV(fileStream);
    return res.json(message);
  } catch (error) {
    return next(error);
  }
}
//# sourceMappingURL=users_post_file.js.map
