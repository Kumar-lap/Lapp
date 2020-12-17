"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getmodelNameModel;

var _mongoose = require("mongoose");

function getmodelNameModel() {
  const collectionName = 'modelName';

  if (_mongoose.models[collectionName]) {
    return (0, _mongoose.model)(collectionName);
  }

  const modelNameSchema = new _mongoose.Schema({
    consignmentType: {
      type: String,
      required: true
    }
  });
  return (0, _mongoose.model)(collectionName, modelNameSchema);
}
//# sourceMappingURL=modelName.js.map
