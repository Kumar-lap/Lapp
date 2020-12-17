"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = deleteShortages;

var _shortages = _interopRequireDefault(require("../models/shortages"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function deleteShortages(ids) {
  const Shortages = (0, _shortages.default)();
  await Shortages.deleteMany({
    _id: {
      $in: ids
    }
  });
  return {
    message: 'Shortage(s) deleted successfully'
  };
}
//# sourceMappingURL=delete_shortages_in_db.js.map
