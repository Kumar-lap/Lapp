"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = updateHolograms;

var _index = _interopRequireDefault(require("../services/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function updateHolograms(req, res, next) {
  try {
    return res.json(_index.default.updateHologramsInDB(req.body));
  } catch (error) {
    return next(error);
  }
}
//# sourceMappingURL=holograms_put.js.map
