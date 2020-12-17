"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = deleteBreakages;

var _breakages = _interopRequireDefault(require("../models/breakages"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function deleteBreakages(ids) {
  const Breakages = (0, _breakages.default)();
  await Breakages.deleteMany({
    _id: {
      $in: ids
    }
  });
  return {
    message: 'Breakage(s) deleted successfully'
  };
}
//# sourceMappingURL=delete_breakages_in_db.js.map
