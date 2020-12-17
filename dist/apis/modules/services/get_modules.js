"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getModules;

var _modules = _interopRequireDefault(require("../models/modules"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function getModules(role) {
  const ModuleAccess = (0, _modules.default)();
  const access = await ModuleAccess.find({
    role
  });
  return access;
}
//# sourceMappingURL=get_modules.js.map
