"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getproductsModel;

var _mongoose = require("mongoose");

function getproductsModel() {
  const collectionName = 'products';

  if (_mongoose.models[collectionName]) {
    return (0, _mongoose.model)(collectionName);
  }

  const productsSchema = new _mongoose.Schema({
    productCode: {
      type: String,
      required: true
    },
    itemCode: {
      type: String
    },
    brandCode: {
      type: String
    },
    productName: {
      type: String,
      required: true
    },
    productSize: {
      type: String,
      required: true
    },
    packType: {
      type: String,
      required: true
    },
    basePrice: {
      type: Number
    },
    exciseDuty: {
      type: Number
    },
    segment: {
      type: String
    }
  });
  return (0, _mongoose.model)(collectionName, productsSchema);
}
//# sourceMappingURL=products.js.map
