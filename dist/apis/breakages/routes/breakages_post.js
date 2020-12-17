"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _expressJwt = _interopRequireDefault(require("express-jwt"));

var _env = _interopRequireDefault(require("../../../config/env"));

var _get_loggedIn_user = _interopRequireDefault(require("../../../middlewares/get_loggedIn_user"));

var _breakages_post = _interopRequireDefault(require("../controllers/breakages_post"));

var _baseurl = require("../baseurl");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = _express.default.Router();
/**
 * @swagger
 * /breakages:
 *   post:
 *     tags:
 *       - Breakages
 *     description: Returns success message if breakage details are added
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
 *            productCode:
 *              type: string
 *            brandCode:
 *              type: string
 *            productName:
 *              type: string
 *            sizeCode:
 *              type: string
 *            date:
 *              type: date
 *     responses:
 *       200:
 *         description: A JSON object
 *         schema:
 *           type: object
 *           properties:
 *            _id:
 *              type: string
 *            productCode:
 *              type: string
 *            brandCode:
 *              type: string
 *            productName:
 *              type: string
 *            sizeCode:
 *              type: string
 *            date:
 *              type: date
 */


router.post(`${_baseurl.baseUrl}/`, (0, _expressJwt.default)({
  secret: _env.default.JWT_SECRET
}), _get_loggedIn_user.default, _breakages_post.default);
var _default = router;
exports.default = _default;
//# sourceMappingURL=breakages_post.js.map
