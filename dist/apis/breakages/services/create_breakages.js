"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getBreakagesListInDB;

var _breakages = _interopRequireDefault(require("../models/breakages"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function getBreakagesListInDB(breakagesInRequest) {
  const Breakages = (0, _breakages.default)();
  const BreakagesInDb = await Breakages.insertMany(breakagesInRequest);
  return BreakagesInDb;
}
//# sourceMappingURL=create_breakages.js.map
