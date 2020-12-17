"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getstockModel;

var _mongoose = require("mongoose");

function getstockModel() {
  const collectionName = 'stock';

  if (_mongoose.models[collectionName]) {
    return (0, _mongoose.model)(collectionName);
  }

  const stockSchema = new _mongoose.Schema({
    productCode: {
      type: String,
      required: true
    },
    brandName: {
      type: String,
      required: true
    },
    stockType: {
      type: String,
      required: true
    },
    productSize: {
      type: String,
      required: true
    },
    production: {
      type: String,
      required: true
    },
    sales: {
      type: Number,
      required: true
    },
    openingStock: {
      type: Number,
      required: true
    },
    closingStock: {
      type: Number,
      required: true
    },
    breakage: {
      type: Number,
      required: true
    },
    shortage: {
      type: Number,
      required: true
    },
    date: {
      type: Date
    }
  });
  return (0, _mongoose.model)(collectionName, stockSchema);
}
//# sourceMappingURL=stock.js.map
