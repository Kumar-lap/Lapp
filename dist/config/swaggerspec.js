"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _swaggerJsdoc = _interopRequireDefault(require("swagger-jsdoc"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const swaggerDefinition = {
  info: {
    title: 'Real time Governance System API docs',
    version: '1.0.0',
    description: 'All the APIs are listed here\nBase url: http://realegovapp-env.eba-qkt6gfyy.ap-south-1.elasticbeanstalk.com/api/v1'
  },
  basepath: 'http://realegovapp-env.eba-qkt6gfyy.ap-south-1.elasticbeanstalk.com/api/v1'
};
const options = {
  swaggerDefinition,
  apis: ['./dist/apis/**/routes/*.js']
};
const swaggerSpec = (0, _swaggerJsdoc.default)(options);
var _default = swaggerSpec;
exports.default = _default;
//# sourceMappingURL=swaggerspec.js.map
