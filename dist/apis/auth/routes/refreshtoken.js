"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _expressJwt = _interopRequireDefault(require("express-jwt"));

var _env = _interopRequireDefault(require("../../../config/env"));

var _refreshtoken_get = _interopRequireDefault(require("../controllers/refreshtoken_get"));

var _checkRevokedToken = require("../../../helpers/revokeToken/checkRevokedToken");

var _baseurl = require("../baseurl");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = _express.default.Router();
/**
 * @swagger
 * /auth/refreshToken:
 *   get:
 *     tags:
 *       - Authentication
 *     description: Returns a jwt token if a valid refresh token is passed through headers
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: header
 *         name: Authorization
 *         description: Existing refresh token must passed
 *         schema:
 *           type: string
 *           required: true
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
 *         description: Returns 401 if refresh token is invalid
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


router.get(`${_baseurl.baseUrl}/refreshToken`, (0, _expressJwt.default)({
  secret: _env.default.JWT_REFRESH_SECRET,
  isRevoked: (0, _checkRevokedToken.getIsRevokedCallBackForRefreshToken)()
}), _refreshtoken_get.default);
var _default = router;
exports.default = _default;
//# sourceMappingURL=refreshtoken.js.map
