"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = resetPassword;

var _index = _interopRequireDefault(require("../services/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function resetPassword(req, res, next) {
  try {
    const {
      uid
    } = req.body;
    const {
      newPassword
    } = req.body;
    const userId = await _index.default.getUserByPasswordChangeUID(uid);
    await _index.default.resetPassword(userId, newPassword, uid);
    return res.json({
      message: 'Password changed successfully'
    });
  } catch (error) {
    return next(error);
  }
}
//# sourceMappingURL=reset_password_post.js.map
