"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _celebrate = require("celebrate");

var _otp_get = _interopRequireDefault(require("../controllers/otp_get"));

var _baseurl = require("../baseurl");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = _express.default.Router();

const userSchema = {
  query: {
    mobileNumber: _celebrate.Joi.string().required()
  }
};
/**
 * @swagger
 * /auth/otp:
 *   get:
 *     tags:
 *       - Authentication
 *     description: Returns a jwt token if login is successful
 *     consumes:
 *       - application/json
 *     parameters:
 *      - in: "query"
 *        name: mobileNumber
 *        description: "Mobile number to send OTP"
 *        required: true
 *        schema:
 *           type: object
 *           properties:
 *              mobileNumber :
 *                  type: string
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: A JSON object
 *         schema:
 *           type: object
 *           properties:
 *              message:
 *                  type: string
 *       400:
 *         description: Returns 400 if it fails to send the OTP.
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

router.get(`${_baseurl.baseUrl}/otp`, (0, _celebrate.celebrate)(userSchema), _otp_get.default);
var _default = router;
exports.default = _default;
//# sourceMappingURL=getOtp.js.map
