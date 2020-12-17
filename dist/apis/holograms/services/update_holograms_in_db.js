"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = updateHolograms;

var _holograms = _interopRequireDefault(require("../models/holograms"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function updateHolograms(hologramsList) {
  const Holograms = (0, _holograms.default)();
  await Promise.all(hologramsList.map(async hologram => {
    return Holograms.findByIdAndUpdate({
      _id: hologram._id
    }, hologram.update);
  }));
  return {
    message: 'Hologram(s) updated successfully'
  };
}
//# sourceMappingURL=update_holograms_in_db.js.map
