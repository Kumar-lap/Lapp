"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getBreakagesInDB;

var _breakages = _interopRequireDefault(require("../models/breakages"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function getBreakagesInDB(offset, limit) {
  const Breakages = (0, _breakages.default)();
  const breakagesInDb = await Breakages.find().skip(offset || 0).limit(limit || 20).lean();
  return breakagesInDb;
}
//# sourceMappingURL=get_breakages_in_db.js.map
