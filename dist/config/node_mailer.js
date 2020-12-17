"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getTransporter;

var _nodemailer = _interopRequireDefault(require("nodemailer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function getTransporter() {
  try {
    const transporter = await _nodemailer.default.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        type: 'login',
        user: 'realgov.test@gmail.com',
        pass: 'Resourceone@1'
      }
    });
    return transporter;
  } catch (err) {
    console.log(err);
    return err;
  }
}
//# sourceMappingURL=node_mailer.js.map
