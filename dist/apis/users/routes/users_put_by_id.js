"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _expressJwt = _interopRequireDefault(require("express-jwt"));

var _celebrate = require("celebrate");

var _users_put_by_id = _interopRequireDefault(require("../controllers/users_put_by_id"));

var _baseurl = require("../baseurl");

var _env = _interopRequireDefault(require("../../../config/env"));

var _checkRevokedToken = require("../../../helpers/revokeToken/checkRevokedToken");

var _get_loggedIn_user = _interopRequireDefault(require("../../../middlewares/get_loggedIn_user"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = _express.default.Router();

const userSchema = {
  body: {
    profileImage: _celebrate.Joi.string(),
    deviceToken: _celebrate.Joi.string(),
    active: _celebrate.Joi.boolean()
  }
};
/**
 * @swagger
 * /users/me:
 *   put:
 *     tags:
 *       - Users
 *     description: Update user details
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: "body"
 *         name: "body"
 *         description: "_id of a video"
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *              deviceToken:
 *                type: string
 *              profileImage:
 *                type: string
 *              active:
 *                type: boolean
 *     responses:
 *       200:
 *         description: A JSON object
 *         schema:
 *           type: object
 *           properties:
 *              userId:
 *                  type: string
 *              firstName:
 *                  type: string
 *              lastName:
 *                  type: string
 *              mobileNumber:
 *                  type: string
 *              email:
 *                  type: string
 *              profileImage:
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

router.put(`${_baseurl.baseUrl}/me`, (0, _expressJwt.default)({
  secret: _env.default.JWT_SECRET,
  isRevoked: (0, _checkRevokedToken.getIsRevokedCallBackForAccessToken)()
}), (0, _celebrate.celebrate)(userSchema), _get_loggedIn_user.default, (req, res, next) => {
  req.params.id = req.loggedInUser._id;
  next();
}, _users_put_by_id.default);
router.put(`${_baseurl.baseUrl}/:id`, (0, _expressJwt.default)({
  secret: _env.default.JWT_SECRET,
  isRevoked: (0, _checkRevokedToken.getIsRevokedCallBackForAccessToken)()
}), (0, _celebrate.celebrate)(userSchema), _get_loggedIn_user.default, _users_put_by_id.default);
var _default = router;
exports.default = _default;
//# sourceMappingURL=users_put_by_id.js.map
