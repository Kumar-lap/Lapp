"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _expressJwt = _interopRequireDefault(require("express-jwt"));

var _multer = _interopRequireDefault(require("multer"));

var _baseurl = require("../baseurl");

var _env = _interopRequireDefault(require("../../../config/env"));

var _checkRevokedToken = require("../../../helpers/revokeToken/checkRevokedToken");

var _get_loggedIn_user = _interopRequireDefault(require("../../../middlewares/get_loggedIn_user"));

var _user_put_profileimage = _interopRequireDefault(require("../controllers/user_put_profileimage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = _express.default.Router();

const storage = _multer.default.memoryStorage();

const upload = (0, _multer.default)({
  storage
});
/**
 * @swagger
 * /users/me/profileimage:
 *   put:
 *     tags:
 *       - Users
 *     description: upload profile
 *     consumes:
 *       - multipart/form-data
 *     parameters:
 *       - in: formData
 *         name: file
 *         type: file
 *         description: The file to upload.
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: A JSON object
 *         schema:
 *           type: object
 *           properties:
 *              url:
 *                  type: string
 */

router.put(`${_baseurl.baseUrl}/me/profileimage`, (0, _expressJwt.default)({
  secret: _env.default.JWT_SECRET,
  isRevoked: (0, _checkRevokedToken.getIsRevokedCallBackForAccessToken)()
}), upload.single('file'), _get_loggedIn_user.default, (req, res, next) => {
  req.params.id = req.loggedInUser._id;
  next();
}, _user_put_profileimage.default);
var _default = router;
exports.default = _default;
//# sourceMappingURL=user_put_by_id_image.js.map
