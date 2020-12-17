"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _get_modules = _interopRequireDefault(require("./get_modules"));

var _update_module_access = _interopRequireDefault(require("./update_module_access"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const services = {
  getModulesByRole: _get_modules.default,
  updateModuleAccessByRole: _update_module_access.default
};
var _default = services;
exports.default = _default;
//# sourceMappingURL=index.js.map
