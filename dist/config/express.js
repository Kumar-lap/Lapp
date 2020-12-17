"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _celebrate = require("celebrate");

var _swaggerUiExpress = _interopRequireDefault(require("swagger-ui-express"));

var _boom = _interopRequireDefault(require("@hapi/boom"));

var _swaggerspec = _interopRequireDefault(require("./swaggerspec"));

var _index = _interopRequireDefault(require("../apis/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import util from 'util';
// import appRoot from 'app-root-path';
// import fs from 'fs';
const app = (0, _express.default)(); // eslint-disable-next-line no-unused-vars
// app.get('/', async (req, res, next) => {
//   const readFileAsync = util.promisify(fs.readFile);
//   console.log(`${appRoot}/source/apis/auth/baseurl.js`);
//   console.log(await readFileAsync(`${appRoot}/source/apis/auth/baseurl.js`));
//   return res(
//     (await readFileAsync(`${appRoot}/source/apis/auth/baseurl.js`)).toString(
//       'utf-8'
//     )
//   );
// })();
// CORS acces setup

app.use((0, _cors.default)()); // request body parser

app.use(_bodyParser.default.json({
  limit: '50MB'
})); // Swagger UI

app.use('/api/v1/api-docs', _swaggerUiExpress.default.serve, _swaggerUiExpress.default.setup(_swaggerspec.default)); // Binding routes

app.use('/api/v1', _index.default); // Error handler for celebrate

app.use((0, _celebrate.errors)());
app.use('/', (req, res, next) => {
  next(_boom.default.notFound('URL not found'));
}); // eslint-disable-next-line no-unused-vars

app.use((error, req, res, next) => {
  console.log(error);

  if (_boom.default.isBoom(error)) {
    res.status(error.output.payload.statusCode).json(error.output.payload);
  } else if (error.status === 401) {
    res.status(error.status).json({
      statusCode: error.status,
      error: error.name,
      message: error.message
    });
  } else {
    const boomifiedError = _boom.default.boomify(error, {
      status: 500
    });

    res.status(500).json(boomifiedError.output.payload);
  }
});
var _default = app;
exports.default = _default;
//# sourceMappingURL=express.js.map
