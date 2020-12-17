"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = addFavorites;

var _boom = _interopRequireDefault(require("@hapi/boom"));

var _index = _interopRequireDefault(require("../services/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function addFavorites(req, res, next) {
  try {
    const {
      profileImage,
      deviceToken,
      active
    } = req.body;

    if (!profileImage && !deviceToken && active === undefined) {
      throw _boom.default.badRequest('Atleast one of profileImage/deviceToken/active is mandatory');
    }

    return res.json(await _index.default.updateUserDetails(req.params.id, profileImage, deviceToken, active));
  } catch (err) {
    return next(err);
  }
}
//# sourceMappingURL=users_put_by_id.js.map
