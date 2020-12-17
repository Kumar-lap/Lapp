"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = deleteapiName;

var _index = _interopRequireDefault(require("../services/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function deleteapiName(req, res, next) {
  try {
    const {
      ids
    } = req.query;
    return res.json(_index.default.deleteapiNameInDB(ids.split(',')));
  } catch (error) {
    return next(error);
  }
}
//# sourceMappingURL=fileName_delete.js.map
