"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _celebrate = require("celebrate");

var _reset_password_post = _interopRequireDefault(require("../controllers/reset_password_post"));

var _baseurl = require("../baseurl");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = _express.default.Router();

const passwordChangeSchema = {
  body: _celebrate.Joi.object({
    uid: _celebrate.Joi.string().required(),
    newPassword: _celebrate.Joi.string().required()
  })
};
/**
 * @swagger
 * /auth/resetPassword:
 *   post:
 *     tags:
 *       - Authentication
 *     description: Returns status 200 if password is changed successfully
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: "body"
 *         name: "uid"
 *         description: "UID for current password change action"
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *              uid :
 *                  type: string
 *              newPassword:
 *                  type: string
 *     responses:
 *       200:
 *         description: A JSON object
 *         schema:
 *           properties:
 *              message:
 *                  type: string
 *       409:
 *         description: Returns 409 if the uid expires
 *         schema:
 *           type: object
 *           properties:
 *              statusCode:
 *                  type: number
 *                  example: 409
 *              error:
 *                  type: string
 *              message:
 *                  type: string
 *       400:
 *         description: Returns 400 if the uid is not valid
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

router.post(`${_baseurl.baseUrl}/resetPassword`, (0, _celebrate.celebrate)(passwordChangeSchema), _reset_password_post.default);
var _default = router;
exports.default = _default;
//# sourceMappingURL=reset_password.js.map
