"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = passwordResetRequest;

var _mongoose = require("mongoose");

function passwordResetRequest() {
  const collectionName = 'passwordresetrequest';

  if (_mongoose.models[collectionName]) {
    return (0, _mongoose.model)(collectionName);
  }

  const passwordResetRequestSchema = new _mongoose.Schema({
    userId: {
      type: String,
      required: true
    },
    code: {
      type: String,
      required: true
    },
    expiresAt: {
      type: Date,
      required: true
    }
  });
  return (0, _mongoose.model)(collectionName, passwordResetRequestSchema);
}
//# sourceMappingURL=passwordresetrequest.js.map
