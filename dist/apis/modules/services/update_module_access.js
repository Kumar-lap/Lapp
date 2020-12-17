"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = updateModuleAccessByRole;

var _modules = _interopRequireDefault(require("../models/modules"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function updateModuleAccessByRole(modules) {
  const ModuleAccess = (0, _modules.default)();
  await Promise.all(modules.map(async module => {
    return ModuleAccess.findOneAndUpdate({
      role: module.role,
      moduleId: module.moduleId
    }, {
      module
    });
  }));
  return {
    message: 'Module access updated successfully'
  };
}
//# sourceMappingURL=update_module_access.js.map
