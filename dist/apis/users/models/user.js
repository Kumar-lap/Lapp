"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = userModel;

var _mongoose = require("mongoose");

var _roles = _interopRequireDefault(require("../../roles/models/roles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function userModel() {
  const collectionName = 'users';

  if (_mongoose.models[collectionName]) {
    return (0, _mongoose.model)(collectionName);
  }

  const userSchema = new _mongoose.Schema({
    _id: {
      type: String,
      required: true
    },
    userId: {
      type: String,
      required: true
    },
    firstName: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: true
    },
    mobileNumber: {
      type: String,
      required: true
    },
    email: {
      type: String
    },
    profileImage: {
      type: String
    },
    role: {
      type: _mongoose.Schema.Types.ObjectId,
      ref: (0, _roles.default)().modelName
    },
    deviceToken: {
      type: String
    },
    type: {
      type: String
    },
    active: {
      type: Boolean,
      default: true
    }
  }, {
    timestamps: true
  });
  return (0, _mongoose.model)(collectionName, userSchema);
}
//# sourceMappingURL=user.js.map
