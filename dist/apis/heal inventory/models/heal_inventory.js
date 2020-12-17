"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getHealInventoryModel;

var _mongoose = require("mongoose");

function getHealInventoryModel() {
  const collectionName = 'heal_inventory';

  if (_mongoose.models[collectionName]) {
    return (0, _mongoose.model)(collectionName);
  }

  const healInventorySchema = new _mongoose.Schema({
    cartonBarcode: {
      type: String,
      required: true
    },
    shippedOn: {
      type: Date
    },
    purpose: {
      type: String
    },
    receivedOn: {
      type: Date
    }
  });
  return (0, _mongoose.model)(collectionName, healInventorySchema);
}
//# sourceMappingURL=heal_inventory.js.map
