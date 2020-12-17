"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getShortagesInDB;

var _shortages = _interopRequireDefault(require("../models/shortages"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function getShortagesInDB(offset, limit) {
  const Shortages = (0, _shortages.default)();
  const shortagesInDb = await Shortages.find().skip(offset || 0).limit(limit || 20).lean();
  return shortagesInDb;
}
//# sourceMappingURL=get_shortages_in_db.js.map
