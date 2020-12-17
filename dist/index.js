"use strict";

var _express = _interopRequireDefault(require("./config/express"));

var _env = _interopRequireDefault(require("./config/env"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-unused-vars */
// import util from 'util';
// import appRoot from 'app-root-path';
// import fs from 'fs';
// import initiateMongoConnection from './config/mongo_connection';
// import initiateRedisConnection from './config/redis_connection';
// (async () => {
//   const readFileAsync = util.promisify(fs.readFile);
//   const writeFileAsync = util.promisify(fs.writeFile);
//   const mkDirAsync = util.promisify(fs.mkdir);
// console.log(`${appRoot}/source/apis/auth/routes/logout.js`);
// const str = (
//   await readFileAsync(`${appRoot}/source/apis/auth/models/user.js`)
// ).toString();
// console.log(str.split('schema').join("{ username : {type : 'string'}}"));
// await writeFileAsync(
//   './test.js',
//   str.split("'schema'").join("{ username : {\ntype : 'string'\n}\n}")
// );
//   await Promise.all(
//     [
//       `${appRoot}/source/apis/sample/controllers/fileName_get.js`,
//       `${appRoot}/source/apis/sample/controllers/fileName_delete.js`,
//       `${appRoot}/source/apis/sample/controllers/fileName_post.js`,
//       `${appRoot}/source/apis/sample/controllers/fileName_put.js`,
//       `${appRoot}/source/apis/sample/routes/fileName_get.js`,
//       `${appRoot}/source/apis/sample/routes/fileName_delete.js`,
//       `${appRoot}/source/apis/sample/routes/fileName_post.js`,
//       `${appRoot}/source/apis/sample/routes/fileName_put.js`,
//       `${appRoot}/source/apis/sample/baseurl.js`,
//       `${appRoot}/source/apis/sample/services/create_fileName.js`,
//       `${appRoot}/source/apis/sample/services/delete_fileName_in_db.js`,
//       `${appRoot}/source/apis/sample/services/get_fileName_in_db.js`,
//       `${appRoot}/source/apis/sample/services/update_fileName_in_db.js`,
//       `${appRoot}/source/apis/sample/services/index.js`,
//       `${appRoot}/source/apis/sample/models/modelName.js`,
//     ].map(async (route) => {
//       await mkDirAsync(
//         route
//           .split('/')
//           .slice(0, route.split('/').length - 1)
//           .join('/')
//           .replace('sample', 'holograms'),
//         { recursive: true }
//       );
//       const obj = {
//         apiName: 'Holograms',
//         fileName: 'holograms',
//         modelName: 'holograms',
//       };
//       const stringInFile = (await readFileAsync(route)).toString();
//       await writeFileAsync(
//         route
//           .split('fileName')
//           .join(obj.fileName)
//           .replace('sample', obj.fileName)
//           .split('modelName')
//           .join(obj.modelName),
//         stringInFile
//           .split('apiName')
//           .join(obj.apiName)
//           .split('fileName')
//           .join(obj.fileName)
//           .split('modelName')
//           .join(obj.modelName)
//       );
//     })
//   );
// })();
// // Connect to mongo server
// (async () => {
//   await initiateMongoConnection();
// })();
// // Connect to redis server
// (async () => {
//   await initiateRedisConnection();
// })();
// app.get('/health', async (req, res, _next) => {
//   const readFileAsync = util.promisify(fs.readFile);
//   res.send(await readFileAsync(`${appRoot}/source/apis/auth/baseurl.js`));
// });
const server = _express.default.listen(_env.default.PORT, () => {
  console.log(`Server running on port ${_env.default.PORT}!`);
}); // server.keepAliveTimeout = 600 * 1000;
// server.headersTimeout = 950 * 1000;
// server.timeout = 1200 * 1000;
//# sourceMappingURL=index.js.map
