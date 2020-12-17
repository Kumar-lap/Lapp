"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getUploadedFileStream;

var _fs = _interopRequireDefault(require("fs"));

var _util = _interopRequireDefault(require("util"));

var _boom = _interopRequireDefault(require("@hapi/boom"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function getUploadedFileStream(req, res, next) {
  try {
    if (!req.file) {
      throw _boom.default.badRequest('File not found in request');
    }

    const fileType = req.file.originalname.split('.')[1];

    if (fileType !== 'csv') {
      throw _boom.default.badRequest('Invalid file type');
    }

    if (req.file.size === 0) {
      throw _boom.default.badData('File size cannot be 0 bytes');
    }

    const readFile = _util.default.promisify(_fs.default.readFile);

    const fileStream = await readFile(req.file.destination + req.file.filename, 'utf-8');
    req.fileStream = fileStream;
    next();
  } catch (error) {
    next(error);
  }
}
//# sourceMappingURL=get_uploaded_filestream.js.map
