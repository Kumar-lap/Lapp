"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _expressJwt = _interopRequireDefault(require("express-jwt"));

var _env = _interopRequireDefault(require("../../../config/env"));

var _get_loggedIn_user = _interopRequireDefault(require("../../../middlewares/get_loggedIn_user"));

var _healdailyindents_post = _interopRequireDefault(require("../controllers/healdailyindents_post"));

var _baseurl = require("../baseurl");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = _express.default.Router();
/**
 * @swagger
 * /healdailyindents:
 *   post:
 *     tags:
 *       - HealDailyIndents
 *     description: Returns success message if HealDailyIndent details are added
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: "body"
 *         name: "body"
 *         description: "Required details"
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *            indentNumber:
 *              type: string
 *            purpose:
 *              type: string
 *            status:
 *              type: string
 *            quantity:
 *              type: string
 *            requestedOn:
 *              type: date
 *     responses:
 *       200:
 *         description: A JSON object
 *         schema:
 *           type: object
 *           properties:
 *            _id:
 *              type: string
 *            indentNumber:
 *              type: string
 *            purpose:
 *              type: string
 *            status:
 *              type: string
 *            quantity:
 *              type: string
 *            requestedOn:
 *              type: date
 */


router.post(`${_baseurl.baseUrl}/`, (0, _expressJwt.default)({
  secret: _env.default.JWT_SECRET
}), _get_loggedIn_user.default, _healdailyindents_post.default);
var _default = router;
exports.default = _default;
//# sourceMappingURL=healdailyindents_post.js.map
