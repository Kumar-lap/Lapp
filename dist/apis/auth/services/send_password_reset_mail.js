"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = sendPasswordResetMail;

// import agenda from '../../../config/agenda_setup';
// import { scheduleEmailNow } from '../../../helpers/email_scheduler/agenda';
async function sendPasswordResetMail() {
  // email, code
  // const agendaScheduler = agenda();
  // scheduleEmailNow(agendaScheduler, {
  //   email,
  //   subject: `Reset your password`,
  //   text: `Hii this is your ${code}`,
  //   html: `<p>Hello,<br></p><p style = "text-indent : 3em;">Your password-reset link is http://example.com/resetPasswords?uid=${code} <br><br>Note: The password-reset link expires in 10 minutes. </p>`,
  // });
  return {
    message: 'Password reset link sent mail successfully'
  };
}
//# sourceMappingURL=send_password_reset_mail.js.map
