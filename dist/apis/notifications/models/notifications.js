"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = notificationModel;

var _mongoose = require("mongoose");

function notificationModel() {
  const collectionName = 'notifications';

  if (_mongoose.models[collectionName]) {
    return (0, _mongoose.model)(collectionName);
  }

  const NotificationSchema = new _mongoose.Schema({
    userId: {
      type: _mongoose.Schema.Types.String
    },
    all: {
      type: Boolean,
      default: false
    },
    new: {
      type: Boolean,
      default: true
    },
    title: {
      type: String,
      required: true
    },
    body: {
      type: String,
      required: true
    },
    createdOn: {
      type: Date,
      default: new Date()
    }
  });
  return (0, _mongoose.model)(collectionName, NotificationSchema);
}
//# sourceMappingURL=notifications.js.map
