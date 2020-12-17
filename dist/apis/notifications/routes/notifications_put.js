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

var _notifications_put = _interopRequireDefault(require("../controllers/notifications_put"));

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
 *   put:
 *     tags:
 *       - Notifications
 *     description: It takes an array of notification ids to mark as read.
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: body
 *         name: ids
 *         description: It takes _id of notifications
 *         schema:
 *            type: array
 *            items:
 *              type: string
 *     responses:
 *       200:
 *         description: A JSON object
 *         schema:
 *           type: object
 *           properties:
 *              message:
 *                  type: string
 */

router.put(`${_baseurl.baseUrl}`, (0, _expressJwt.default)({
  secret: _env.default.JWT_SECRET,
  isRevoked: (0, _checkRevokedToken.getIsRevokedCallBackForAccessToken)()
}), (0, _celebrate.celebrate)(userLocationSchema), _get_loggedIn_user.default, _notifications_put.default);
var _default = router;
exports.default = _default;
//# sourceMappingURL=notifications_put.js.map
