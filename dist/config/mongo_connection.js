"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = initiateMongoConnection;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _env = _interopRequireDefault(require("./env"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function initiateMongoConnection() {
  if (!_env.default.MONGODBSRV) {
    throw new Error('No database connection string found');
  }

  if (_env.default.MONGODBSRV) {
    _mongoose.default.connect(_env.default.MONGODBSRV, {
      useNewUrlParser: true,
      readPreference: 'nearest'
    });

    _mongoose.default.set('debug', true);
  }

  _mongoose.default.connection.on('connected', () => {
    console.log('connected on mongo server');
  });

  _mongoose.default.connection.on('error', error => {
    console.log(`An error occured while connecting to mongo ${error}`);
  });
}
//# sourceMappingURL=mongo_connection.js.map
