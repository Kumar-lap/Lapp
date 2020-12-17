"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _firebaseAdmin = _interopRequireDefault(require("firebase-admin"));

var _egov2424bFirebaseAdminsdkKrrrt853d83709a = _interopRequireDefault(require("../firebase credentials/egov-2424b-firebase-adminsdk-krrrt-853d83709a"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_firebaseAdmin.default.initializeApp({
  credential: _firebaseAdmin.default.credential.cert(_egov2424bFirebaseAdminsdkKrrrt853d83709a.default),
  databaseURL: 'https://egov-2424b.firebaseio.com'
});

var _default = _firebaseAdmin.default;
exports.default = _default;
//# sourceMappingURL=firebase_push_notifications.js.map
