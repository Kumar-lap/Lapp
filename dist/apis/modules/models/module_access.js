"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = modules;

var _mongoose = require("mongoose");

function modules() {
  const collectionName = 'modules';

  if (_mongoose.models[collectionName]) {
    return (0, _mongoose.model)(collectionName);
  }

  const featureAccessSchema = new _mongoose.Schema({
    access: {
      type: [String],
      required: true
    },
    featureId: {
      type: String,
      required: true
    }
  });
  const moduleSchema = new _mongoose.Schema({
    role: {
      type: _mongoose.Schema.Types.ObjectId,
      required: true
    },
    moduleId: {
      type: String,
      required: true
    },
    features: {
      type: [featureAccessSchema]
    }
  });
  return (0, _mongoose.model)(collectionName, moduleSchema);
}
//# sourceMappingURL=module_access.js.map
