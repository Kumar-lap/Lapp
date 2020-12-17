"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = changePassword;

var _index = _interopRequireDefault(require("../services/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function changePassword(req, res, next) {
  try {
    const {
      oldPassword
    } = req.body;
    const {
      newPassword
    } = req.body;
    const {
      userId
    } = req.user;
    await _index.default.changePassword(userId, oldPassword, newPassword);
    return res.json({
      message: 'Password changed successfully'
    });
  } catch (error) {
    return next(error);
  }
}
//# sourceMappingURL=changepassword_post.js.map
