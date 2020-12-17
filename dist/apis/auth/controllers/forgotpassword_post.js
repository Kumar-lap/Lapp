"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = forgotPassword;

var _index = _interopRequireDefault(require("../services/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function forgotPassword(req, res, next) {
  try {
    const {
      email
    } = req.body;
    const user = await _index.default.getUserByEmail(email);
    const request = await _index.default.generateForgotPasswordResetRequest(user.userId);
    const mailStatus = await _index.default.sendPasswordResetMail(email, request.code);
    return res.json(mailStatus);
  } catch (error) {
    return next(error);
  }
}
//# sourceMappingURL=forgotpassword_post.js.map
