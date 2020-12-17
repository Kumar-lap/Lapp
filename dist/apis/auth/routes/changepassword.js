"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _celebrate = require("celebrate");

var _changepassword_post = _interopRequireDefault(require("../controllers/changepassword_post"));

var _baseurl = require("../baseurl");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = _express.default.Router();

const passwordChangeSchema = {
  body: _celebrate.Joi.object({
    oldPassword: _celebrate.Joi.string().required(),
    newPassword: _celebrate.Joi.string().required()
  })
};
/**
 * @swagger
 * /auth/changePassword:
 *   post:
 *     tags:
 *       - Authentication
 *     description: Returns status 200 if password is changed successfully
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: header
 *         name: Authorization
 *         schema:
 *           type: string
 *           required: true
 *       - in: "body"
 *         name: "body"
 *         description: "Required user credentials"
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *              oldPassword:
 *                  type: string
 *              newPassword:
 *                  type: string
 *     responses:
 *       200:
 *         description: A JSON object
 *         schema:
 *           type: object
 *           properties:
 *              message:
 *                  type: string
 *       400:
 *         description: Returns 400 if the password does not match with the existing one.
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

router.post(`${_baseurl.baseUrl}/changePassword`, (0, _celebrate.celebrate)(passwordChangeSchema), _changepassword_post.default);
var _default = router;
exports.default = _default;
//# sourceMappingURL=changepassword.js.map
