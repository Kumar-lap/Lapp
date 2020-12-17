"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = deleteProduction;

var _index = _interopRequireDefault(require("../services/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function deleteProduction(req, res, next) {
  try {
    const {
      ids
    } = req.query;
    return res.json(_index.default.deleteProductionInDB(ids.split(',')));
  } catch (error) {
    return next(error);
  }
}
//# sourceMappingURL=production_delete.js.map
