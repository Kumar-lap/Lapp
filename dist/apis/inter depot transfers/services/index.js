"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _get_interdepottransfers_in_db = _interopRequireDefault(require("./get_interdepottransfers_in_db"));

var _delete_interdepottransfers_in_db = _interopRequireDefault(require("./delete_interdepottransfers_in_db"));

var _create_interdepottransfers = _interopRequireDefault(require("./create_interdepottransfers"));

var _update_interdepottransfers_in_db = _interopRequireDefault(require("./update_interdepottransfers_in_db"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const services = {
  getInterDepotTransfersInDB: _get_interdepottransfers_in_db.default,
  deleteInterDepotTransfersInDB: _delete_interdepottransfers_in_db.default,
  createInterDepotTransfers: _create_interdepottransfers.default,
  updateInterDepotTransfersInDB: _update_interdepottransfers_in_db.default
};
var _default = services;
exports.default = _default;
//# sourceMappingURL=index.js.map
