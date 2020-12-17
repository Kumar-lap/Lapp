"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getHealPurchasePndentsModel;

var _mongoose = require("mongoose");

function getHealPurchasePndentsModel() {
  const collectionName = 'heal_purchase_indents';

  if (_mongoose.models[collectionName]) {
    return (0, _mongoose.model)(collectionName);
  }

  const healPurchaseIndentsSchema = new _mongoose.Schema({
    indentNumber: {
      type: String,
      required: true
    },
    createdOn: {
      type: Date,
      required: true
    },
    purpose: {
      type: String,
      required: true
    },
    quantity: {
      type: Number,
      required: true
    },
    challanNumber: {
      type: String,
      required: true
    },
    challanAmount: {
      type: Number
    },
    challanDate: {
      type: Date
    },
    status: {
      type: String,
      required: true
    }
  });
  return (0, _mongoose.model)(collectionName, healPurchaseIndentsSchema);
}
//# sourceMappingURL=heal_purchase_indents.js.map
