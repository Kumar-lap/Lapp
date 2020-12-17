"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _celebrate = require("celebrate");

var _express = _interopRequireDefault(require("express"));

var _forgotpassword_post = _interopRequireDefault(require("../controllers/forgotpassword_post"));

var _baseurl = require("../baseurl");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = _express.default.Router();

const requestSchema = {
  body: {
    email: _celebrate.Joi.string().email().required()
  }
};
/**
 * @swagger
 * /auth/forgotPassword:
 *   post:
 *     tags:
 *       - Authentication
 *     description: Returns status 200 if email is sent successfully
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: "body"
 *         name: "email"
 *         description: "Email address of a user."
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *              email :
 *                  type: string
 *     responses:
 *       200:
 *         description: A JSON object
 *         schema:
 *           properties:
 *              message:
 *                  type: string
 *       404:
 *         description: Returns 404 if the email does not belong to any user
 *         schema:
 *           type: object
 *           properties:
 *              statusCode:
 *                  type: number
 *                  example: 404
 *              error:
 *                  type: string
 *              message:
 *                  type: string
 */

router.post(`${_baseurl.baseUrl}/forgotPassword`, (0, _celebrate.celebrate)(requestSchema), _forgotpassword_post.default);
var _default = router;
exports.default = _default;
//# sourceMappingURL=forgotpassword.js.map
