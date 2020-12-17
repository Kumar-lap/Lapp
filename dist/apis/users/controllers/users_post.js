"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createUser;

var _boom = _interopRequireDefault(require("@hapi/boom"));

var _index = _interopRequireDefault(require("../services/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function createUser(req, res, next) {
  try {
    const mobileRegex = /^[0][1-9]\d{9}$|^[1-9]\d{9}$/;
    const {
      mobileNumber
    } = req.body;
    const match = mobileNumber.match(mobileRegex);
    if (!match) throw _boom.default.badRequest('Invalid mobile number');
    const user = req.body;
    const newUser = await _index.default.createUser({ ...user,
      ...{
        mobileNumber: `+91${user.mobileNumber}`
      }
    });
    return res.json(newUser);
  } catch (err) {
    return next(err);
  }
}
//# sourceMappingURL=users_post.js.map
