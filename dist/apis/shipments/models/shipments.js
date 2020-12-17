"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getshipmentsModel;

var _mongoose = require("mongoose");

function getshipmentsModel() {
  const collectionName = 'shipments';

  if (_mongoose.models[collectionName]) {
    return (0, _mongoose.model)(collectionName);
  }

  const shipmentsSchema = new _mongoose.Schema({
    consignmentType: {
      type: String,
      required: true
    },
    destination: {
      type: String
    },
    vehicleNumber: {
      type: String
    },
    isssueTime: {
      type: Date,
      required: true
    },
    date: {
      type: Date,
      required: true
    },
    packingList: {
      type: String,
      required: true
    },
    evc: {
      type: String
    },
    grn: {
      type: String
    },
    status: {
      type: String
    }
  });
  return (0, _mongoose.model)(collectionName, shipmentsSchema);
}
//# sourceMappingURL=shipments.js.map
