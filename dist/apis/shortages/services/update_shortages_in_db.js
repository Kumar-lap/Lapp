"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = updateShortages;

var _shortages = _interopRequireDefault(require("../models/shortages"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function updateShortages(shortagesList) {
  const Shortages = (0, _shortages.default)();
  await Promise.all(shortagesList.map(async shortage => {
    return Shortages.findByIdAndUpdate({
      _id: shortage._id
    }, shortage.update);
  }));
  return {
    message: 'Shortages updated successfully'
  };
}
//# sourceMappingURL=update_shortages_in_db.js.map
