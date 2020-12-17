"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getapiNameInDB;

var _modelName = _interopRequireDefault(require("../models/modelName"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function getapiNameInDB(offset, limit) {
  const apiName = (0, _modelName.default)();
  const fileNameInDb = await apiName.find().skip(offset || 0).limit(limit || 20).lean();
  return fileNameInDb;
}
//# sourceMappingURL=get_fileName_in_db.js.map
