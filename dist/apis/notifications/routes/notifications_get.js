"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _expressJwt = _interopRequireDefault(require("express-jwt"));

var _celebrate = require("celebrate");

var _baseurl = require("../baseurl");

var _env = _interopRequireDefault(require("../../../config/env"));

var _checkRevokedToken = require("../../../helpers/revokeToken/checkRevokedToken");

var _get_loggedIn_user = _interopRequireDefault(require("../../../middlewares/get_loggedIn_user"));

var _notifications_get = _interopRequireDefault(require("../controllers/notifications_get"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = _express.default.Router();

const userLocationSchema = {
  query: {
    offset: _celebrate.Joi.number().required(),
    limit: _celebrate.Joi.number().required()
  }
};
/**
 * @swagger
 * /notifications:
 *   get:
 *     tags:
 *       - Notifications
 *     description: It returns the list of notifications.
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: A JSON object
 *         schema:
 *           type: object
 *           properties:
 *            count:
 *              type: number
 *            notifications:
 *              type: array
 *              items:
 *                type: object
 *                properties:
 *                   new:
 *                       type: boolean
 *                   title:
 *                       type: string
 *                   body:
 *                       type: string
 *                   createdOn:
 *                       type: Date
 *                       example: "1990-08-19T14:55:06.607Z"
 */

router.get(`${_baseurl.baseUrl}`, (0, _expressJwt.default)({
  secret: _env.default.JWT_SECRET,
  isRevoked: (0, _checkRevokedToken.getIsRevokedCallBackForAccessToken)()
}), (0, _celebrate.celebrate)(userLocationSchema), _get_loggedIn_user.default, _notifications_get.default);
var _default = router;
exports.default = _default;
//# sourceMappingURL=notifications_get.js.map
