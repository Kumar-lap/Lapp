"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _celebrate = require("celebrate");

var _user_post = _interopRequireDefault(require("../controllers/user_post"));

var _baseurl = require("../baseurl");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = _express.default.Router();

const userSchema = {
  body: {
    userId: _celebrate.Joi.string().required(),
    password: _celebrate.Joi.string().required(),
    mobileNumber: _celebrate.Joi.string().required(),
    email: _celebrate.Joi.string().email().required()
  }
};
/**
 * @swagger
 * /auth/user:
 *   post:
 *     tags:
 *       - Authentication
 *     description: It takes user details and creates a user.
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: "body"
 *         name: "body"
 *         description: "Required user details"
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *              userId:
 *                  type: string
 *              password:
 *                  type: string
 *              mobileNumber:
 *                  type: string
 *              email:
 *                  type: string
 *     responses:
 *       200:
 *         description: A JSON object
 *         schema:
 *           type: object
 *           properties:
 *              userId:
 *                  type: string
 *              mobileNumber:
 *                  type: string
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

router.post(`${_baseurl.baseUrl}/user`, (0, _celebrate.celebrate)(userSchema), _user_post.default);
var _default = router;
exports.default = _default;
//# sourceMappingURL=createuser.js.map
