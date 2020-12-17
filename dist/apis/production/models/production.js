"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = production;

var _mongoose = require("mongoose");

var _products = _interopRequireDefault(require("../../products/models/products"));

var _production_line = _interopRequireDefault(require("../../production line/models/production_line"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function production() {
  const collectionName = 'production';

  if (_mongoose.models[collectionName]) {
    return (0, _mongoose.model)(collectionName);
  }

  const productionSchema = new _mongoose.Schema({
    line: {
      type: _mongoose.Schema.Types.ObjectId,
      required: true,
      ref: (0, _production_line.default)().modelName
    },
    productionType: {
      type: String,
      required: true
    },
    product: {
      type: _mongoose.Schema.Types.ObjectId,
      ref: (0, _products.default)().modelName,
      required: true
    },
    batchNumber: {
      type: String,
      required: true
    },
    batchQuantity: {
      type: Number
    },
    packType: {
      type: String
    },
    healStartCode: {
      type: String
    },
    bottles: {
      type: Number
    },
    cases: {
      type: Number
    },
    status: {
      type: String
    }
  });
  return (0, _mongoose.model)(collectionName, productionSchema);
}
//# sourceMappingURL=production.js.map
