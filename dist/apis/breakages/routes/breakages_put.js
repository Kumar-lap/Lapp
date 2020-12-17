"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _expressJwt = _interopRequireDefault(require("express-jwt"));

var _env = _interopRequireDefault(require("../../../config/env"));

var _get_loggedIn_user = _interopRequireDefault(require("../../../middlewares/get_loggedIn_user"));

var _breakages_put = _interopRequireDefault(require("../controllers/breakages_put"));

var _baseurl = require("../baseurl");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = _express.default.Router();
/**
 * @swagger
 * /breakages:
 *   put:
 *     tags:
 *       - Breakages
 *     description: Returns success message if breakage details are updated
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
 *          type: array
 *          items:
 *            type: object
 *            properties:
 *              _id:
 *                type: string
 *              update:
 *                type: object
 *                properties:
 *                  productCode:
 *                    type: string
 *                  brandCode:
 *                    type: string
 *                  productName:
 *                    type: string
 *                  sizeCode:
 *                    type: string
 *                  date:
 *                    type: date
 *     responses:
 *       200:
 *         description: A JSON object
 *         schema:
 *           type: object
 *           properties:
 *            message:
 *              type: string
 */


router.put(`${_baseurl.baseUrl}/`, (0, _expressJwt.default)({
  secret: _env.default.JWT_SECRET
}), _get_loggedIn_user.default, _breakages_put.default);
var _default = router;
exports.default = _default;
//# sourceMappingURL=breakages_put.js.map
