"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _expressJwt = _interopRequireDefault(require("express-jwt"));

var _env = _interopRequireDefault(require("../../../config/env"));

var _get_loggedIn_user = _interopRequireDefault(require("../../../middlewares/get_loggedIn_user"));

var _stock_get = _interopRequireDefault(require("../controllers/stock_get"));

var _baseurl = require("../baseurl");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = _express.default.Router();
/**
 * @swagger
 * /shortages:
 *   get:
 *     tags:
 *       - Shortages
 *     description: Returns list of Shortages
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
 *            productCode:
 *              type: string
 *            brandName:
 *              type: string
 *            stockType:
 *              type: string
 *            productSize:
 *              type: string
 *            production:
 *              type: string
 *            sales:
 *              type: number
 *            openingStock:
 *              type: number
 *            closingStock:
 *              type: number
 *            breakage:
 *              type: number
 *            shortage:
 *              type: number
 *            date:
 *              type: date
 */

/**
 * @swagger
 * /shortages:
 *   post:
 *     tags:
 *       - Shortages
 *     description: Returns success message if Shortages details are added
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
 *            brandName:
 *              type: string
 *            stockType:
 *              type: string
 *            productSize:
 *              type: string
 *            production:
 *              type: string
 *            sales:
 *              type: number
 *            openingStock:
 *              type: number
 *            closingStock:
 *              type: number
 *            breakage:
 *              type: number
 *            shortage:
 *              type: number
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
 *            brandName:
 *              type: string
 *            stockType:
 *              type: string
 *            productSize:
 *              type: string
 *            production:
 *              type: string
 *            sales:
 *              type: number
 *            openingStock:
 *              type: number
 *            closingStock:
 *              type: number
 *            breakage:
 *              type: number
 *            shortage:
 *              type: number
 *            date:
 *              type: date
 */

/**
 * @swagger
 * /shortages:
 *   put:
 *     tags:
 *       - Shortages
 *     description: Returns success message if Shortages details are updated
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
 *                  brandName:
 *                    type: string
 *                  stockType:
 *                    type: string
 *                  productSize:
 *                    type: string
 *                  production:
 *                    type: string
 *                  sales:
 *                    type: number
 *                  openingStock:
 *                    type: number
 *                  closingStock:
 *                    type: number
 *                  breakage:
 *                    type: number
 *                  shortage:
 *                    type: number
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


router.get(`${_baseurl.baseUrl}/`, (0, _expressJwt.default)({
  secret: _env.default.JWT_SECRET
}), _get_loggedIn_user.default, _stock_get.default);
var _default = router;
exports.default = _default;
//# sourceMappingURL=stock_get.js.map
