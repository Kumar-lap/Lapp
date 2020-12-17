"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _expressJwt = _interopRequireDefault(require("express-jwt"));

var _celebrate = require("celebrate");

var _users_get_reports = _interopRequireDefault(require("../controllers/users_get_reports"));

var _baseurl = require("../baseurl");

var _env = _interopRequireDefault(require("../../../config/env"));

var _checkRevokedToken = require("../../../helpers/revokeToken/checkRevokedToken");

var _get_loggedIn_user = _interopRequireDefault(require("../../../middlewares/get_loggedIn_user"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = _express.default.Router();

const userLocationSchema = {
  query: {
    divisionId: _celebrate.Joi.string(),
    videoId: _celebrate.Joi.string().required()
  }
};
/**
 * @swagger
 * /users/reports:
 *   get:
 *     tags:
 *       - Users
 *     description: It returns the list of users.
 *     consumes:
 *       - application/json
 *     parameters:
 *      - in: "query"
 *        name: divisionId
 *        description: "It takes a division id to pass the list of users"
 *        required: true
 *        schema:
 *           type: object
 *           properties:
 *              divisionId :
 *                  type: string
 *      - in: "query"
 *        name: role
 *        description: "It takes a role id to pass the list of users having that role"
 *        required: true
 *        schema:
 *           type: object
 *           properties:
 *              role :
 *                  type: string
 *      - in: "query"
 *        name: "limit"
 *        description: "Sets the number of users to be returned"
 *        schema:
 *          type: object
 *          properties:
 *             limit:
 *                 type: number
 *      - in: "query"
 *        name: "offset"
 *        description: "Sets the offset to the list of users"
 *        schema:
 *          type: object
 *          properties:
 *             offset:
 *                 type: number
 *      - in: "query"
 *        name: "userType"
 *        description: "userType can be one of['vv,wv']"
 *        schema:
 *          type: object
 *          properties:
 *             userType:
 *                 type: string
 *      - in: "query"
 *        name: "all"
 *        description: A boolean value to include disabled users
 *        schema:
 *          type: object
 *          properties:
 *             all:
 *                 type: boolean
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

router.get(`${_baseurl.baseUrl}/reports`, (0, _expressJwt.default)({
  secret: _env.default.JWT_SECRET,
  isRevoked: (0, _checkRevokedToken.getIsRevokedCallBackForAccessToken)()
}), _get_loggedIn_user.default, (0, _celebrate.celebrate)(userLocationSchema), _users_get_reports.default);
var _default = router;
exports.default = _default;
//# sourceMappingURL=users_get_reports.js.map
