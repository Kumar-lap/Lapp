"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _celebrate = require("celebrate");

var _expressJwt = _interopRequireDefault(require("express-jwt"));

var _env = _interopRequireDefault(require("../../../config/env"));

var _modules_get = _interopRequireDefault(require("../controllers/modules_get"));

var _get_loggedIn_user = _interopRequireDefault(require("../../../middlewares/get_loggedIn_user"));

var _baseurl = require("../baseurl");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = _express.default.Router();

const moduleAccessSchema = {
  body: _celebrate.Joi.array().items(_celebrate.Joi.object({
    moduleId: _celebrate.Joi.string().required(),
    role: _celebrate.Joi.string().required(),
    features: _celebrate.Joi.array().items(_celebrate.Joi.object({
      featureId: _celebrate.Joi.string().required(),
      access: _celebrate.Joi.array().items(_celebrate.Joi.string).allow('READ', 'WRITE', 'UPDATE', 'APPROVE')
    }))
  })).required()
};
/**
 * @swagger
 * /modules:
 *   get:
 *     tags:
 *       - Module access
 *     description: Returns a list of modules with features
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     parameters:
 *     responses:
 *       200:
 *         description: A JSON object
 *         schema:
 *           type: array
 *           items:
 *              type: object
 *              properties:
 *                  moduleId:
 *                      type: string
 *                  features:
 *                      type: array
 *                      items:
 *                          type: object
 *                          properties:
 *                              featureId:
 *                                  type: string
 *                              access:
 *                                  type: array
 *                                  items:
 *                                      type: string
 *       400:
 *         description: Returns 400 if userId or password are invalid
 *         schema:
 *           type: object
 *           properties:
 *              statusCode:
 *                  type: number
 *                  example: 400
 *              error:
 *                  type: string
 *              message:
 *                  type: string
 */

router.put(`${_baseurl.baseUrl}/`, (0, _expressJwt.default)({
  secret: _env.default.JWT_SECRET
}), _get_loggedIn_user.default, (0, _celebrate.celebrate)(moduleAccessSchema), _modules_get.default);
var _default = router;
exports.default = _default;
//# sourceMappingURL=modules_put.js.map
