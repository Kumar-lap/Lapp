"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = updateImage;

var _uuidv = require("uuidv4");

var _index = _interopRequireDefault(require("../services/index"));

var _fileupload = _interopRequireDefault(require("../../../helpers/s3_file_upload.js/fileupload"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function updateImage(req, res, next) {
  try {
    const key = `profile pictures/${(0, _uuidv.uuid)()}.jpg`;
    const file = await (0, _fileupload.default)(key, req.file.buffer);
    await _index.default.updateUserDetails(req.params.id, file.Location);
    return res.json({
      url: file.Location
    });
  } catch (err) {
    return next(err);
  }
}
//# sourceMappingURL=user_put_profileimage.js.map
