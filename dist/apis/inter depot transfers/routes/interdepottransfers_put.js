"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _expressJwt = _interopRequireDefault(require("express-jwt"));

var _env = _interopRequireDefault(require("../../../config/env"));

var _get_loggedIn_user = _interopRequireDefault(require("../../../middlewares/get_loggedIn_user"));

var _interdepottransfers_put = _interopRequireDefault(require("../controllers/interdepottransfers_put"));

var _baseurl = require("../baseurl");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = _express.default.Router();
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


router.put(`${_baseurl.baseUrl}/`, (0, _expressJwt.default)({
  secret: _env.default.JWT_SECRET
}), _get_loggedIn_user.default, _interdepottransfers_put.default);
var _default = router;
exports.default = _default;
//# sourceMappingURL=interdepottransfers_put.js.map
