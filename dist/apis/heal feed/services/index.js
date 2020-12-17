"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _get_healfeed_in_db = _interopRequireDefault(require("./get_healfeed_in_db"));

var _delete_healfeed_in_db = _interopRequireDefault(require("./delete_healfeed_in_db"));

var _create_healfeed = _interopRequireDefault(require("./create_healfeed"));

var _update_healfeed_in_db = _interopRequireDefault(require("./update_healfeed_in_db"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const services = {
  getHealFeedInDB: _get_healfeed_in_db.default,
  deleteHealFeedInDB: _delete_healfeed_in_db.default,
  createHealFeed: _create_healfeed.default,
  updateHealFeedInDB: _update_healfeed_in_db.default
};
var _default = services;
exports.default = _default;
//# sourceMappingURL=index.js.map
