"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = addInterDepotTransfers;

var _index = _interopRequireDefault(require("../services/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function addInterDepotTransfers(req, res, next) {
  try {
    return res.json(_index.default.createInterDepotTransfers(req.body));
  } catch (error) {
    return next(error);
  }
}
//# sourceMappingURL=interdepottransfers_post.js.map
