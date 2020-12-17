"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = roles;

var _mongoose = require("mongoose");

function roles() {
  const collectionName = 'roles';

  if (_mongoose.models[collectionName]) {
    return (0, _mongoose.model)(collectionName);
  }

  const roleSchema = new _mongoose.Schema({
    roleName: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    divisionType: {
      type: String,
      required: true
    }
  });
  return (0, _mongoose.model)(collectionName, roleSchema);
}
//# sourceMappingURL=roles.js.map
