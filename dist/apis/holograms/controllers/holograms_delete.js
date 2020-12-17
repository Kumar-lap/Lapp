"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = deleteHolograms;

var _index = _interopRequireDefault(require("../services/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function deleteHolograms(req, res, next) {
  try {
    const {
      ids
    } = req.query;
    return res.json(_index.default.deleteHologramsInDB(ids.split(',')));
  } catch (error) {
    return next(error);
  }
}
//# sourceMappingURL=holograms_delete.js.map
