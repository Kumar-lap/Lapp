"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getInterDepotTransferModel;

var _mongoose = require("mongoose");

function getInterDepotTransferModel() {
  const collectionName = 'inter_depot_transfer';

  if (_mongoose.models[collectionName]) {
    return (0, _mongoose.model)(collectionName);
  }

  const interDepotTransferSchema = new _mongoose.Schema({
    consignmentType: {
      type: String,
      required: true
    },
    indentNumber: {
      type: String,
      required: true
    },
    sourceDepot: {
      type: String,
      required: true
    },
    destinationDepot: {
      type: String,
      required: true
    },
    supplierName: {
      type: String,
      required: true
    },
    date: {
      type: Date,
      required: true
    },
    evc: {
      type: String,
      required: true
    },
    grn: {
      type: String,
      required: true
    },
    status: {
      type: String,
      required: true
    }
  });
  return (0, _mongoose.model)(collectionName, interDepotTransferSchema);
}
//# sourceMappingURL=inter_depot_transfer.js.map
