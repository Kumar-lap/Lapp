"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = addHealInventory;

var _index = _interopRequireDefault(require("../services/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function addHealInventory(req, res, next) {
  try {
    return res.json(_index.default.createHealInventory(req.body));
  } catch (error) {
    return next(error);
  }
}
//# sourceMappingURL=healinventory_post.js.map
