"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getShortagesListInDB;

var _shortages = _interopRequireDefault(require("../models/shortages"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function getShortagesListInDB(shortagesInRequest) {
  const Shortages = (0, _shortages.default)();
  const ShortagesInDb = await Shortages.insertMany(shortagesInRequest);
  return ShortagesInDb;
}
//# sourceMappingURL=create_shortages.js.map
