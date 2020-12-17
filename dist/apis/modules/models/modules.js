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

  const featureSchema = new _mongoose.Schema({
    featureName: {
      type: String,
      required: true
    },
    featureId: {
      type: String,
      required: true
    },
    divisionType: {
      type: String,
      required: true
    }
  });
  const moduleSchema = new _mongoose.Schema({
    moduleName: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    features: {
      type: [featureSchema]
    }
  });
  return (0, _mongoose.model)(collectionName, moduleSchema);
}
//# sourceMappingURL=modules.js.map
