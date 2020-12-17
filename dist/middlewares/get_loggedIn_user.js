"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = addLoggedInUserInRequestObject;

var _index = _interopRequireDefault(require("../apis/users/services/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function addLoggedInUserInRequestObject(req, res, next) {
  try {
    const loggedInUser = await _index.default.getUserByUserId(req.user.userId);
    req.loggedInUser = loggedInUser;
    next();
  } catch (err) {
    next(err);
  }
}
//# sourceMappingURL=get_loggedIn_user.js.map
