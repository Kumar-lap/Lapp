"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _expressJwt = _interopRequireDefault(require("express-jwt"));

var _env = _interopRequireDefault(require("../../../config/env"));

var _get_loggedIn_user = _interopRequireDefault(require("../../../middlewares/get_loggedIn_user"));

var _interdepottransfers_get = _interopRequireDefault(require("../controllers/interdepottransfers_get"));

var _baseurl = require("../baseurl");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = _express.default.Router();
/**
 * @swagger
 * /interdepottransfers:
 *   get:
 *     tags:
 *       - inter depot transfers
 *     description: Returns list of inter depot transfers
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
 *            consignmentType:
 *              type: string
 *            indentNumber:
 *              type: string
 *            sourceDepot:
 *              type: string
 *            destinationDepot:
 *              type: string
 *            supplierName:
 *              type: string
 *            date:
 *              type: date
 *            evc:
 *              type: string
 *            grn:
 *              type: string
 *            status:
 *              type: string
 */

/**
 * @swagger
 * /interdepottransfers:
 *   post:
 *     tags:
 *       - inter depot transfers
 *     description: Returns success message if inter depot transfers details are added
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
 *            consignmentType:
 *              type: string
 *            indentNumber:
 *              type: string
 *            sourceDepot:
 *              type: string
 *            destinationDepot:
 *              type: string
 *            supplierName:
 *              type: string
 *            date:
 *              type: date
 *            evc:
 *              type: string
 *            grn:
 *              type: string
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
 *            consignmentType:
 *              type: string
 *            indentNumber:
 *              type: string
 *            sourceDepot:
 *              type: string
 *            destinationDepot:
 *              type: string
 *            supplierName:
 *              type: string
 *            date:
 *              type: date
 *            evc:
 *              type: string
 *            grn:
 *              type: string
 *            status:
 *              type: string
 */

/**
 * @swagger
 * /interdepottransfers:
 *   put:
 *     tags:
 *       - inter depot transfers
 *     description: Returns success message if inter depot transfers details are updated
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
 *                  consignmentType:
 *                    type: string
 *                  indentNumber:
 *                    type: string
 *                  sourceDepot:
 *                    type: string
 *                  destinationDepot:
 *                    type: string
 *                  supplierName:
 *                    type: string
 *                  date:
 *                    type: date
 *                  evc:
 *                    type: string
 *                  grn:
 *                    type: string
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
}), _get_loggedIn_user.default, _interdepottransfers_get.default);
var _default = router;
exports.default = _default;
//# sourceMappingURL=interdepottransfers_get.js.map
