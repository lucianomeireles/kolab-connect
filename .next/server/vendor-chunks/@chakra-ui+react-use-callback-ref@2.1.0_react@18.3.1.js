"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@chakra-ui+react-use-callback-ref@2.1.0_react@18.3.1";
exports.ids = ["vendor-chunks/@chakra-ui+react-use-callback-ref@2.1.0_react@18.3.1"];
exports.modules = {

/***/ "(ssr)/./node_modules/.pnpm/@chakra-ui+react-use-callback-ref@2.1.0_react@18.3.1/node_modules/@chakra-ui/react-use-callback-ref/dist/index.mjs":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@chakra-ui+react-use-callback-ref@2.1.0_react@18.3.1/node_modules/@chakra-ui/react-use-callback-ref/dist/index.mjs ***!
  \***********************************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useCallbackRef: () => (/* binding */ useCallbackRef)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/.pnpm/next@14.2.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n/* __next_internal_client_entry_do_not_use__ useCallbackRef auto */ // src/index.ts\n\nfunction useCallbackRef(callback, deps = []) {\n    const callbackRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(callback);\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        callbackRef.current = callback;\n    });\n    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((...args)=>{\n        var _a;\n        return (_a = callbackRef.current) == null ? void 0 : _a.call(callbackRef, ...args);\n    }, deps);\n}\n //# sourceMappingURL=index.mjs.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vQGNoYWtyYS11aStyZWFjdC11c2UtY2FsbGJhY2stcmVmQDIuMS4wX3JlYWN0QDE4LjMuMS9ub2RlX21vZHVsZXMvQGNoYWtyYS11aS9yZWFjdC11c2UtY2FsbGJhY2stcmVmL2Rpc3QvaW5kZXgubWpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUErQztBQUV4QyxTQUFTRyxlQUNkQyxRQUFBLEVBQ0FDLE9BQTZCLEVBQUM7SUFFOUIsTUFBTUMsY0FBY0osNkNBQU1BLENBQUNFO0lBRTNCSCxnREFBU0EsQ0FBQztRQUNSSyxZQUFZQyxPQUFBLEdBQVVIO0lBQ3hCO0lBR0EsT0FBT0osa0RBQVdBLENBQUUsSUFBSVE7UUFiMUIsSUFBQUM7UUFhbUMsUUFBQUEsS0FBQUgsWUFBWUMsT0FBQSxLQUFaLGdCQUFBRSxHQUFBQyxJQUFBLENBQUFKLGdCQUF5QkU7SUFBQSxHQUFhSDtBQUN6RSIsInNvdXJjZXMiOlsid2VicGFjazovL2tvbGFiLWNvbm5lY3QvLi4vc3JjL2luZGV4LnRzPzUyZDUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCJcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUNhbGxiYWNrUmVmPFQgZXh0ZW5kcyAoLi4uYXJnczogYW55W10pID0+IGFueT4oXG4gIGNhbGxiYWNrOiBUIHwgdW5kZWZpbmVkLFxuICBkZXBzOiBSZWFjdC5EZXBlbmRlbmN5TGlzdCA9IFtdLFxuKSB7XG4gIGNvbnN0IGNhbGxiYWNrUmVmID0gdXNlUmVmKGNhbGxiYWNrKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY2FsbGJhY2tSZWYuY3VycmVudCA9IGNhbGxiYWNrXG4gIH0pXG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xuICByZXR1cm4gdXNlQ2FsbGJhY2soKCguLi5hcmdzKSA9PiBjYWxsYmFja1JlZi5jdXJyZW50Py4oLi4uYXJncykpIGFzIFQsIGRlcHMpXG59XG4iXSwibmFtZXMiOlsidXNlQ2FsbGJhY2siLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VDYWxsYmFja1JlZiIsImNhbGxiYWNrIiwiZGVwcyIsImNhbGxiYWNrUmVmIiwiY3VycmVudCIsImFyZ3MiLCJfYSIsImNhbGwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/@chakra-ui+react-use-callback-ref@2.1.0_react@18.3.1/node_modules/@chakra-ui/react-use-callback-ref/dist/index.mjs\n");

/***/ })

};
;