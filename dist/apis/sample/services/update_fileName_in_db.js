"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = updateapiName;

var _modelName = _interopRequireDefault(require("../models/modelName"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function updateapiName(fileNameList) {
  const apiName = (0, _modelName.default)();
  await Promise.all(fileNameList.map(async modelName => {
    return apiName.findByIdAndUpdate({
      _id: modelName._id
    }, modelName.update);
  }));
  return {
    message: 'apiName updated successfully'
  };
}
//# sourceMappingURL=update_fileName_in_db.js.map
