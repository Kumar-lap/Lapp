"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _get_fileName_in_db = _interopRequireDefault(require("./get_fileName_in_db"));

var _delete_fileName_in_db = _interopRequireDefault(require("./delete_fileName_in_db"));

var _create_fileName = _interopRequireDefault(require("./create_fileName"));

var _update_fileName_in_db = _interopRequireDefault(require("./update_fileName_in_db"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const services = {
  getapiNameInDB: _get_fileName_in_db.default,
  deleteapiNameInDB: _delete_fileName_in_db.default,
  createapiName: _create_fileName.default,
  updateapiNameInDB: _update_fileName_in_db.default
};
var _default = services;
exports.default = _default;
//# sourceMappingURL=index.js.map
