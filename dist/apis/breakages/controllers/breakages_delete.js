"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = deleteBreakages;

var _index = _interopRequireDefault(require("../services/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function deleteBreakages(req, res, next) {
  try {
    const {
      ids
    } = req.query;
    return res.json(_index.default.deleteBreakagesInDB(ids.split(',')));
  } catch (error) {
    return next(error);
  }
}
//# sourceMappingURL=breakages_delete.js.map
