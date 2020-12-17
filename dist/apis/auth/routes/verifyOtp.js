"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _celebrate = require("celebrate");

var _verifyOTP_post = _interopRequireDefault(require("../controllers/verifyOTP_post"));

var _baseurl = require("../baseurl");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = _express.default.Router();

const userSchema = {
  body: {
    mobileNumber: _celebrate.Joi.string().required(),
    code: _celebrate.Joi.string().required()
  }
};
/**
 * @swagger
 * /auth/verifyOtp:
 *   post:
 *     tags:
 *       - Authentication
 *     description: Returns a jwt token if login is successful
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: "body"
 *         name: "body"
 *         description: "Required credentials"
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *              mobileNumber:
 *                  type: string
 *              code:
 *                  type: string
 *     responses:
 *       200:
 *         description: A JSON object
 *         schema:
 *           type: object
 *           properties:
 *              jwt:
 *                  type: string
 *              refreshToken:
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

router.post(`${_baseurl.baseUrl}/verifyOtp`, (0, _celebrate.celebrate)(userSchema), _verifyOTP_post.default);
var _default = router;
exports.default = _default;
//# sourceMappingURL=verifyOtp.js.map
