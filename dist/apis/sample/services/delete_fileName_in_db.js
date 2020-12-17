"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = deleteapiName;

var _modelName = _interopRequireDefault(require("../models/modelName"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function deleteapiName(ids) {
  const apiName = (0, _modelName.default)();
  await apiName.deleteMany({
    _id: {
      $in: ids
    }
  });
  return {
    message: 'modelNamePlural deleted successfully'
  };
}
//# sourceMappingURL=delete_fileName_in_db.js.map
