(function() {
var exports = {};
exports.id = "pages/api/new-meetup";
exports.ids = ["pages/api/new-meetup"];
exports.modules = {

/***/ "./pages/api/new-meetup.js":
/*!*********************************!*\
  !*** ./pages/api/new-meetup.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ "mongodb");
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);
// /api/new-meetup - POST request


const handler = async function (req, res) {
  if (req.method === "POST") {
    const data = req.body; // Connect DB

    const client = await mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient.connect("mongodb+srv://yogeshmadar:VFP8dmjqpyoyarvm@cluster0.q88vady.mongodb.net/?retryWrites=true&w=majority");
    const db = client.db();
    const meetupsCollection = db.collection("meetups"); // Store in dataBase - MongoDB

    const result = await meetupsCollection.insertOne(data);
    console.log(result);
    client.close();
    res.status(201).json({
      message: "Meetup inserted!"
    });
  }
};

/* harmony default export */ __webpack_exports__["default"] = (handler);

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ (function(module) {

"use strict";
module.exports = require("mongodb");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/api/new-meetup.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtY291cnNlLy4vcGFnZXMvYXBpL25ldy1tZWV0dXAuanMiLCJ3ZWJwYWNrOi8vbmV4dGpzLWNvdXJzZS9leHRlcm5hbCBcIm1vbmdvZGJcIiJdLCJuYW1lcyI6WyJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwiZGF0YSIsImJvZHkiLCJjbGllbnQiLCJNb25nb0NsaWVudCIsImRiIiwibWVldHVwc0NvbGxlY3Rpb24iLCJjb2xsZWN0aW9uIiwicmVzdWx0IiwiaW5zZXJ0T25lIiwiY29uc29sZSIsImxvZyIsImNsb3NlIiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBOztBQUVBLE1BQU1BLE9BQU8sR0FBRyxnQkFBZ0JDLEdBQWhCLEVBQXFCQyxHQUFyQixFQUEwQjtBQUN4QyxNQUFJRCxHQUFHLENBQUNFLE1BQUosS0FBZSxNQUFuQixFQUEyQjtBQUN6QixVQUFNQyxJQUFJLEdBQUdILEdBQUcsQ0FBQ0ksSUFBakIsQ0FEeUIsQ0FHekI7O0FBQ0EsVUFBTUMsTUFBTSxHQUFHLE1BQU1DLHdEQUFBLENBQ25CLHNHQURtQixDQUFyQjtBQUdBLFVBQU1DLEVBQUUsR0FBR0YsTUFBTSxDQUFDRSxFQUFQLEVBQVg7QUFFQSxVQUFNQyxpQkFBaUIsR0FBR0QsRUFBRSxDQUFDRSxVQUFILENBQWMsU0FBZCxDQUExQixDQVR5QixDQVd6Qjs7QUFDQSxVQUFNQyxNQUFNLEdBQUcsTUFBTUYsaUJBQWlCLENBQUNHLFNBQWxCLENBQTRCUixJQUE1QixDQUFyQjtBQUNBUyxXQUFPLENBQUNDLEdBQVIsQ0FBWUgsTUFBWjtBQUVBTCxVQUFNLENBQUNTLEtBQVA7QUFFQWIsT0FBRyxDQUFDYyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRUMsYUFBTyxFQUFFO0FBQVgsS0FBckI7QUFDRDtBQUNGLENBcEJEOztBQXNCQSwrREFBZWxCLE9BQWYsRTs7Ozs7Ozs7Ozs7QUMxQkEscUMiLCJmaWxlIjoicGFnZXMvYXBpL25ldy1tZWV0dXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAvYXBpL25ldy1tZWV0dXAgLSBQT1NUIHJlcXVlc3RcclxuXHJcbmltcG9ydCB7IE1vbmdvQ2xpZW50IH0gZnJvbSBcIm1vbmdvZGJcIjtcclxuXHJcbmNvbnN0IGhhbmRsZXIgPSBhc3luYyBmdW5jdGlvbiAocmVxLCByZXMpIHtcclxuICBpZiAocmVxLm1ldGhvZCA9PT0gXCJQT1NUXCIpIHtcclxuICAgIGNvbnN0IGRhdGEgPSByZXEuYm9keTtcclxuXHJcbiAgICAvLyBDb25uZWN0IERCXHJcbiAgICBjb25zdCBjbGllbnQgPSBhd2FpdCBNb25nb0NsaWVudC5jb25uZWN0KFxyXG4gICAgICBcIm1vbmdvZGIrc3J2Oi8veW9nZXNobWFkYXI6VkZQOGRtanFweW95YXJ2bUBjbHVzdGVyMC5xODh2YWR5Lm1vbmdvZGIubmV0Lz9yZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHlcIlxyXG4gICAgKTtcclxuICAgIGNvbnN0IGRiID0gY2xpZW50LmRiKCk7XHJcblxyXG4gICAgY29uc3QgbWVldHVwc0NvbGxlY3Rpb24gPSBkYi5jb2xsZWN0aW9uKFwibWVldHVwc1wiKTtcclxuXHJcbiAgICAvLyBTdG9yZSBpbiBkYXRhQmFzZSAtIE1vbmdvREJcclxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG1lZXR1cHNDb2xsZWN0aW9uLmluc2VydE9uZShkYXRhKTtcclxuICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcblxyXG4gICAgY2xpZW50LmNsb3NlKCk7XHJcblxyXG4gICAgcmVzLnN0YXR1cygyMDEpLmpzb24oeyBtZXNzYWdlOiBcIk1lZXR1cCBpbnNlcnRlZCFcIiB9KTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb25nb2RiXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9