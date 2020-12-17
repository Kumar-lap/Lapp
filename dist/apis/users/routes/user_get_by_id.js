"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _expressJwt = _interopRequireDefault(require("express-jwt"));

var _users_get_by_id = _interopRequireDefault(require("../controllers/users_get_by_id"));

var _baseurl = require("../baseurl");

var _env = _interopRequireDefault(require("../../../config/env"));

var _checkRevokedToken = require("../../../helpers/revokeToken/checkRevokedToken");

var _get_loggedIn_user = _interopRequireDefault(require("../../../middlewares/get_loggedIn_user"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = _express.default.Router();
/**
 * @swagger
 * /users/me:
 *   get:
 *     tags:
 *       - Users
 *     description: It returns the details of logged-in user.
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
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
 *              role:
 *                  type: object
 *                  properties:
 *                      _id:
 *                          type: string
 *                      roleName:
 *                          type: string
 *                      roleLevel:
 *                          type: number
 *                      assignedLocationLevels:
 *                          type: array
 *                          items:
 *                              type: number
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


router.get(`${_baseurl.baseUrl}/me`, (0, _expressJwt.default)({
  secret: _env.default.JWT_SECRET,
  isRevoked: (0, _checkRevokedToken.getIsRevokedCallBackForAccessToken)()
}), _get_loggedIn_user.default, _users_get_by_id.default);
var _default = router;
exports.default = _default;
//# sourceMappingURL=user_get_by_id.js.map
