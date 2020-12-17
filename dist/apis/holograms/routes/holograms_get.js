"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _expressJwt = _interopRequireDefault(require("express-jwt"));

var _env = _interopRequireDefault(require("../../../config/env"));

var _get_loggedIn_user = _interopRequireDefault(require("../../../middlewares/get_loggedIn_user"));

var _holograms_get = _interopRequireDefault(require("../controllers/holograms_get"));

var _baseurl = require("../baseurl");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = _express.default.Router();
/**
 * @swagger
 * /holograms:
 *   get:
 *     tags:
 *       - Holograms
 *     description: Returns list of Holograms
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: "query"
 *         name: "search"
 *         description: "Search text"
 *         schema:
 *           type: object
 *           properties:
 *              search:
 *                  type: string
 *       - in: "query"
 *         name: "limit"
 *         description: "Sets the number of objects to be returned"
 *         schema:
 *           type: object
 *           properties:
 *              limit:
 *                  type: number
 *       - in: "query"
 *         name: "offset"
 *         description: "Sets the offset to the list of breakages"
 *         schema:
 *           type: object
 *           properties:
 *              offset:
 *                  type: number
 *       - in: "query"
 *         name: "from"
 *         description: "from date"
 *         schema:
 *           type: object
 *           properties:
 *              from:
 *                  type: date
 *       - in: "query"
 *         name: "to"
 *         description: "to date"
 *         schema:
 *           type: object
 *           properties:
 *              from:
 *                  type: date
 *     responses:
 *       200:
 *         description: A JSON object
 *         schema:
 *          type: array
 *          items:
 *           type: object
 *           properties:
 *            _id:
 *              type: string
 *            spoolBarCode:
 *              type: string
 *            healEndCode:
 *              type: string
 *            purpose:
 *              type: string
 *            quantity:
 *              type: string
 *            healStartCode:
 *              type: string
 */

/**
 * @swagger
 * /holograms:
 *   post:
 *     tags:
 *       - Holograms
 *     description: Returns success message if Holograms details are added
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
 *            spoolBarCode:
 *              type: string
 *            healEndCode:
 *              type: string
 *            purpose:
 *              type: string
 *            quantity:
 *              type: string
 *            healStartCode:
 *              type: string
 *     responses:
 *       200:
 *         description: A JSON object
 *         schema:
 *           type: object
 *           properties:
 *            _id:
 *              type: string
 *            spoolBarCode:
 *              type: string
 *            healEndCode:
 *              type: string
 *            purpose:
 *              type: string
 *            quantity:
 *              type: string
 *            healStartCode:
 *              type: string
 */

/**
 * @swagger
 * /holograms:
 *   put:
 *     tags:
 *       - Holograms
 *     description: Returns success message if Holograms details are updated
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
 *                  spoolBarCode:
 *                    type: string
 *                  healEndCode:
 *                    type: string
 *                  purpose:
 *                    type: string
 *                  quantity:
 *                    type: string
 *                  healStartCode:
 *                    type: string
 *     responses:
 *       200:
 *         description: A JSON object
 *         schema:
 *           type: object
 *           properties:
 *            message:
 *              type: string
 */


router.get(`${_baseurl.baseUrl}/`, (0, _expressJwt.default)({
  secret: _env.default.JWT_SECRET
}), _get_loggedIn_user.default, _holograms_get.default);
var _default = router;
exports.default = _default;
//# sourceMappingURL=holograms_get.js.map
