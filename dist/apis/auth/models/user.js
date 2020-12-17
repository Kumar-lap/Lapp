"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = usernModel;

var _mongoose = require("mongoose");

function usernModel() {
  const collectionName = 'users';

  if (_mongoose.models[collectionName]) {
    return (0, _mongoose.model)(collectionName);
  }

  const userSchema = 'schema';
  return (0, _mongoose.model)(collectionName, userSchema);
}
//# sourceMappingURL=user.js.map
