"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _celebrate = require("celebrate");

var _users_post = _interopRequireDefault(require("../controllers/users_post"));

var _baseurl = require("../baseurl");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = _express.default.Router();

const userSchema = {
  body: {
    userId: _celebrate.Joi.string().required(),
    mobileNumber: _celebrate.Joi.string().required(),
    email: _celebrate.Joi.string().email(),
    firstName: _celebrate.Joi.string().required(),
    lastName: _celebrate.Joi.string().required(),
    profileImage: _celebrate.Joi.string(),
    role: _celebrate.Joi.string().required(),
    type: _celebrate.Joi.string(),
    locationAccess: _celebrate.Joi.array().items(_celebrate.Joi.object({
      divisionType: _celebrate.Joi.string().required(),
      divisionLevel: _celebrate.Joi.number().required(),
      division: _celebrate.Joi.string().required()
    }))
  }
};
/**
 * @swagger
 * /users:
 *   post:
 *     tags:
 *       - Users
 *     description: It takes user details and adds a user.
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: "body"
 *         name: "body"
 *         description: "Required user details"
 *         required: true
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
 *              profileImage:
 *                  type: string
 *              locationAccess:
 *                  type: array
 *                  items:
 *                    type: object
 *                    properties:
 *                      divisionType:
 *                        type: string
 *                      divisionLevel:
 *                        type: number
 *                      division:
 *                        type: string
 *              role:
 *                  type: string
 *              type:
 *                  type: string
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

router.post(`${_baseurl.baseUrl}`, (0, _celebrate.celebrate)(userSchema), _users_post.default);
var _default = router;
exports.default = _default;
//# sourceMappingURL=users_post.js.map
