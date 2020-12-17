"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _expressJwt = _interopRequireDefault(require("express-jwt"));

var _env = _interopRequireDefault(require("../../../config/env"));

var _get_loggedIn_user = _interopRequireDefault(require("../../../middlewares/get_loggedIn_user"));

var _orderforsupply_get = _interopRequireDefault(require("../controllers/orderforsupply_get"));

var _baseurl = require("../baseurl");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = _express.default.Router();
/**
 * @swagger
 * /orderforsupply:
 *   get:
 *     tags:
 *       - Order for supply
 *     description: Returns list of Order for supply
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
 *            ofsNumber:
 *              type: string
 *            indentNumber:
 *              type: string
 *            referenceNumber:
 *              type: string
 *            depot:
 *              type: string
 *            date:
 *              type: date
 *            status:
 *              type: string
 */

/**
 * @swagger
 * /orderforsupply:
 *   post:
 *     tags:
 *       - Order for supply
 *     description: Returns success message if Order for supply details are added
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
 *            ofsNumber:
 *              type: string
 *            indentNumber:
 *              type: string
 *            referenceNumber:
 *              type: string
 *            depot:
 *              type: string
 *            date:
 *              type: date
 *            status:
 *              type: string
 *     responses:
 *       200:
 *         description: A JSON object
 *         schema:
 *           type: object
 *           properties:
 *            _id:
 *              type: string
 *            ofsNumber:
 *              type: string
 *            indentNumber:
 *              type: string
 *            referenceNumber:
 *              type: string
 *            depot:
 *              type: string
 *            date:
 *              type: date
 *            status:
 *              type: string
 */

/**
 * @swagger
 * /orderforsupply:
 *   put:
 *     tags:
 *       - Order for supply
 *     description: Returns success message if Order for supply details are updated
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
 *                  ofsNumber:
 *                    type: string
 *                  indentNumber:
 *                    type: string
 *                  referenceNumber:
 *                    type: string
 *                  depot:
 *                    type: string
 *                  date:
 *                    type: date
 *                  status:
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
}), _get_loggedIn_user.default, _orderforsupply_get.default);
var _default = router;
exports.default = _default;
//# sourceMappingURL=orderforsupply_get.js.map
