"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getAgenda;

var _agenda = _interopRequireDefault(require("agenda"));

var _agenda2 = require("../helpers/job_scheduler/agenda");

var _env = _interopRequireDefault(require("./env"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const agenda = new _agenda.default({
  db: {
    address: _env.default.MONGODBSRV,
    collection: 'agendaJobs'
  }
});

(async () => {
  await agenda.start();
  (0, _agenda2.emailScheduler)(agenda);
  (0, _agenda2.otpScheduler)(agenda);
  (0, _agenda2.smsScheduler)(agenda);
  (0, _agenda2.pushNotificationScheduler)(agenda);
  (0, _agenda2.userSpecificPushNotificationScheduler)(agenda);
  agenda.on('complete', async scheduledJob => {
    await scheduledJob.remove();
  });
})();

function getAgenda() {
  return agenda;
}
//# sourceMappingURL=agenda_setup.js.map
