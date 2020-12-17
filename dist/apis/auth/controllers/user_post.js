"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = login;

var _boom = _interopRequireDefault(require("@hapi/boom"));

var _index = _interopRequireDefault(require("../services/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function login(req, res, next) {
  try {
    const mobileRegex = /^[0][1-9]\d{9}$|^[1-9]\d{9}$/;
    const {
      mobileNumber
    } = req.body;
    const match = mobileNumber.match(mobileRegex);
    if (!match) throw _boom.default.badRequest('Invalid mobile number');
    const userInPayload = req.body;
    const user = await _index.default.createUser(userInPayload);
    return res.json({ ...user,
      ...{
        _id: undefined,
        __v: undefined
      }
    });
  } catch (error) {
    return next(error);
  }
}
//# sourceMappingURL=user_post.js.map
