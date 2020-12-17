"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = deleteShortages;

var _index = _interopRequireDefault(require("../services/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function deleteShortages(req, res, next) {
  try {
    const {
      ids
    } = req.query;
    return res.json(_index.default.deleteShortagesInDB(ids.split(',')));
  } catch (error) {
    return next(error);
  }
}
//# sourceMappingURL=shortages_delete.js.map
