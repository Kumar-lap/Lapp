"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = deleteHolograms;

var _holograms = _interopRequireDefault(require("../models/holograms"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function deleteHolograms(ids) {
  const Holograms = (0, _holograms.default)();
  await Holograms.deleteMany({
    _id: {
      $in: ids
    }
  });
  return {
    message: 'Hologram(s) deleted successfully'
  };
}
//# sourceMappingURL=delete_holograms_in_db.js.map
