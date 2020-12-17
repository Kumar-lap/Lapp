"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = sendMailToUsers;

var _node_mailer = _interopRequireDefault(require("../../config/node_mailer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function sendMailToUsers(email, subject, text, html) {
  try {
    const transporter = await (0, _node_mailer.default)();
    const mailStatus = await transporter.sendMail({
      from: 'realgov.test@gmail.com',
      to: email,
      subject,
      text,
      html
    });
    return mailStatus;
  } catch (err) {
    console.log(err);
    return err;
  }
}
//# sourceMappingURL=sendMail.js.map
