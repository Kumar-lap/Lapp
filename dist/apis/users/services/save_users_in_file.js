"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = parseCSV;

var _papaparse = _interopRequireDefault(require("papaparse"));

var _user = _interopRequireDefault(require("../models/user"));

var _user2 = _interopRequireDefault(require("../../auth/models/user"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-unused-vars */
function parseCSV(fileStream) {
  const UserAccounts = (0, _user2.default)();
  const Users = (0, _user.default)();

  _papaparse.default.parse(fileStream, {
    delimiter: ',',
    // auto-detect
    newline: '',
    // auto-detect
    quoteChar: '"',
    escapeChar: '"',
    header: true,
    transformHeader: undefined,
    dynamicTyping: false,
    preview: 0,
    encoding: 'utf8',
    worker: false,
    comments: false,
    step: undefined,
    complete: async result => {},
    error: undefined,
    download: false,
    downloadRequestHeaders: undefined,
    downloadRequestBody: undefined,
    skipEmptyLines: false,
    chunk: async (result, parser) => {
      parser.pause();
      const usersWithValidMobileNumbers = result.data.filter(user => {
        const mobileRegex = /^[0][1-9]\d{9}$|^[1-9]\d{9}$/;
        const {
          mobileNumber
        } = user;
        const match = mobileNumber.match(mobileRegex);
        return match;
      });
      const validUsers = usersWithValidMobileNumbers.map(user => {
        return {
          locationAccess: [{
            divisionLevel: 1,
            divisionType: 'District',
            division: user.District.trim()
          }, {
            divisionLevel: 1,
            divisionType: 'PC',
            division: user.PC.trim()
          }, {
            divisionLevel: 1,
            divisionType: 'AC',
            division: user.AC.trim()
          }, {
            divisionLevel: 1,
            divisionType: 'Mandal',
            division: user.Mandal.trim()
          }, {
            divisionLevel: 1,
            divisionType: 'Secretariat',
            division: user.Secretariat.trim()
          }].filter(location => location.division),
          firstName: user.firstName,
          lastName: user.lastName,
          userId: user.userId,
          mobileNumber: `+91${user.mobileNumber}`,
          email: user.email,
          role: user.role.trim(),
          type: user.type,
          _id: user.userId
        };
      }).filter(user => user.firstName && user.lastName && user.mobileNumber && user.role && user.userId);
      const credentials = validUsers.map(user => ({
        userId: user.userId,
        password: 'password',
        isFirstLogin: true
      }));
      await Users.insertMany(validUsers, {
        ordered: false
      });
      await UserAccounts.insertMany(credentials, {
        ordered: false
      });
      parser.resume();
    },
    fastMode: undefined,
    beforeFirstChunk: undefined,
    withCredentials: undefined,
    transform: undefined,
    delimitersToGuess: [',', '\t', '|', ';', _papaparse.default.RECORD_SEP, _papaparse.default.UNIT_SEP],
    chunkSize: 2 * 1024 * 1024
  });

  return {
    message: 'Users uploaded successfully'
  };
}
//# sourceMappingURL=save_users_in_file.js.map
