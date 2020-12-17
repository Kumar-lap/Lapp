"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getOrderForSupplyModel;

var _mongoose = require("mongoose");

function getOrderForSupplyModel() {
  const collectionName = 'order_for_supply';

  if (_mongoose.models[collectionName]) {
    return (0, _mongoose.model)(collectionName);
  }

  const orderForSupplySchema = new _mongoose.Schema({
    ofsNumber: {
      type: String,
      required: true
    },
    indentNumber: {
      type: String
    },
    referenceNumber: {
      type: String
    },
    depot: {
      type: String,
      required: true
    },
    date: {
      type: Date,
      required: true
    },
    status: {
      type: String,
      required: true
    }
  });
  return (0, _mongoose.model)(collectionName, orderForSupplySchema);
}
//# sourceMappingURL=order_for_supply.js.map
