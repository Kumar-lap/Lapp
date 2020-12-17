"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getapiNameListInDB;

var _modelName = _interopRequireDefault(require("../models/modelName"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function getapiNameListInDB(fileNameInRequest) {
  const apiName = (0, _modelName.default)();
  const apiNameInDb = await apiName.insertMany(fileNameInRequest);
  return apiNameInDb;
}
//# sourceMappingURL=create_fileName.js.map
