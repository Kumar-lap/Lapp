"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = deleteProductionLine;

var _index = _interopRequireDefault(require("../services/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function deleteProductionLine(req, res, next) {
  try {
    const {
      ids
    } = req.query;
    return res.json(_index.default.deleteProductionLineInDB(ids.split(',')));
  } catch (error) {
    return next(error);
  }
}
//# sourceMappingURL=productionline_delete.js.map
