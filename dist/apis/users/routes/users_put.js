"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _expressJwt = _interopRequireDefault(require("express-jwt"));

var _celebrate = require("celebrate");

var _users_put = _interopRequireDefault(require("../controllers/users_put"));

var _baseurl = require("../baseurl");

var _env = _interopRequireDefault(require("../../../config/env"));

var _checkRevokedToken = require("../../../helpers/revokeToken/checkRevokedToken");

var _get_loggedIn_user = _interopRequireDefault(require("../../../middlewares/get_loggedIn_user"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = _express.default.Router();

const userSchema = {
  body: _celebrate.Joi.array().items(_celebrate.Joi.object({
    _id: _celebrate.Joi.string(),
    userDetails: _celebrate.Joi.object({
      userId: _celebrate.Joi.string(),
      mobileNumber: _celebrate.Joi.string(),
      email: _celebrate.Joi.string().email(),
      firstName: _celebrate.Joi.string(),
      lastName: _celebrate.Joi.string(),
      profileImage: _celebrate.Joi.string(),
      role: _celebrate.Joi.string(),
      type: _celebrate.Joi.string(),
      locationAccess: _celebrate.Joi.array().items(_celebrate.Joi.object({
        divisionType: _celebrate.Joi.string(),
        divisionLevel: _celebrate.Joi.number(),
        division: _celebrate.Joi.string()
      }))
    })
  }))
};
/**
 * @swagger
 * /users:
 *   put:
 *     tags:
 *       - Users
 *     description: It takes user details and updates a users.
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
 *          type: array
 *          items:
 *              type: object
 *              properties:
 *                  _id:
 *                      type: string
 *                  userDetails:
 *                      type: object
 *                      properties:
 *                         userId:
 *                             type: string
 *                         firstName:
 *                             type: string
 *                         lastName:
 *                             type: string
 *                         mobileNumber:
 *                             type: string
 *                         email:
 *                             type: string
 *                         profileImage:
 *                             type: string
 *                         locationAccess:
 *                             type: array
 *                             items:
 *                               type: object
 *                               properties:
 *                                 divisionType:
 *                                   type: string
 *                                 divisionLevel:
 *                                   type: number
 *                                 division:
 *                                   type: string
 *                         role:
 *                             type: string
 *                         type:
 *                             type: string
 *     responses:
 *       200:
 *         description: A JSON object
 *         schema:
 *           type: object
 *           properties:
 *              message:
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

router.put(`${_baseurl.baseUrl}`, (0, _expressJwt.default)({
  secret: _env.default.JWT_SECRET,
  isRevoked: (0, _checkRevokedToken.getIsRevokedCallBackForAccessToken)()
}), (0, _celebrate.celebrate)(userSchema), _get_loggedIn_user.default, _users_put.default);
var _default = router;
exports.default = _default;
//# sourceMappingURL=users_put.js.map
