"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getHologramsInDB;

var _holograms = _interopRequireDefault(require("../models/holograms"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function getHologramsInDB(offset, limit) {
  const Holograms = (0, _holograms.default)();
  const hologramsInDb = await Holograms.find().skip(offset || 0).limit(limit || 20).lean();
  return hologramsInDb;
}
//# sourceMappingURL=get_holograms_in_db.js.map
