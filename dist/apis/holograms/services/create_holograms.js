"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getHologramsListInDB;

var _holograms = _interopRequireDefault(require("../models/holograms"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function getHologramsListInDB(hologramsInRequest) {
  const Holograms = (0, _holograms.default)();
  const HologramsInDb = await Holograms.insertMany(hologramsInRequest);
  return HologramsInDb;
}
//# sourceMappingURL=create_holograms.js.map
