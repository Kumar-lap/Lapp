"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = updateBreakages;

var _breakages = _interopRequireDefault(require("../models/breakages"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function updateBreakages(breakagesList) {
  const Breakages = (0, _breakages.default)();
  await Promise.all(breakagesList.map(async breakage => {
    return Breakages.findByIdAndUpdate({
      _id: breakage._id
    }, breakage.update);
  }));
  return {
    message: 'Breakages updated successfully'
  };
}
//# sourceMappingURL=update_breakages_in_db.js.map
