"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getUserReports;

var _lodash = _interopRequireDefault(require("lodash"));

var _index = _interopRequireDefault(require("../services/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function getUserReports(req, res, next) {
  try {
    const {
      videoId
    } = req.query;

    const assignedLocation = _lodash.default.sortBy(req.loggedInUser.locationAccess, 'divisionLevel', 'asc').pop();

    return res.json(await _index.default.getUserReports(assignedLocation ? assignedLocation.division._id : undefined, videoId));
  } catch (err) {
    return next(err);
  }
}
//# sourceMappingURL=users_get_reports.js.map
