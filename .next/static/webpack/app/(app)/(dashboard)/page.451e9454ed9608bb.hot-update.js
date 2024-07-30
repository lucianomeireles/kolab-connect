"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(app)/(dashboard)/page",{

/***/ "(app-pages-browser)/./src/components/posts/postCard/postCardComments.tsx":
/*!************************************************************!*\
  !*** ./src/components/posts/postCard/postCardComments.tsx ***!
  \************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ PostCardComments; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.2.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/context */ \"(app-pages-browser)/./src/context/index.ts\");\n/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/services */ \"(app-pages-browser)/./src/services/index.ts\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-pages-browser)/./node_modules/.pnpm/@chakra-ui+layout@2.3.1_@chakra-ui+system@2.6.2_@emotion+react@11.13.0_@types+react@18.3.3_re_rhwmpieiemaihohwy6rvp4pifq/node_modules/@chakra-ui/layout/dist/chunk-PULVB27S.mjs\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-pages-browser)/./node_modules/.pnpm/@chakra-ui+layout@2.3.1_@chakra-ui+system@2.6.2_@emotion+react@11.13.0_@types+react@18.3.3_re_rhwmpieiemaihohwy6rvp4pifq/node_modules/@chakra-ui/layout/dist/chunk-NTCQBYKE.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.2.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _postCardCommentForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./postCardCommentForm */ \"(app-pages-browser)/./src/components/posts/postCard/postCardCommentForm.tsx\");\n/* harmony import */ var _postCardCommentsItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./postCardCommentsItem */ \"(app-pages-browser)/./src/components/posts/postCard/postCardCommentsItem.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction PostCardComments(param) {\n    let { postId } = param;\n    _s();\n    const { users } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_context__WEBPACK_IMPORTED_MODULE_1__.AppContext);\n    const { isCommentsOpened, setPostComments, setIsCommentsOpened } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_context__WEBPACK_IMPORTED_MODULE_1__.PostCardContext);\n    const { data: postComments } = (0,_services__WEBPACK_IMPORTED_MODULE_2__.useGetPostComments)(postId, isCommentsOpened);\n    const commentsMapped = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(()=>{\n        if (!users) return [];\n        const apiComments = postComments === null || postComments === void 0 ? void 0 : postComments.map((comment)=>{\n            const user = !comment.user ? users[Math.floor(Math.random() * users.length)] : comment.user;\n            return {\n                ...comment,\n                user\n            };\n        });\n        return apiComments;\n    }, [\n        postComments,\n        users\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        setPostComments(postComments);\n    }, [\n        commentsMapped\n    ]);\n    const handleOnSaved = ()=>{\n        setIsCommentsOpened(true);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            ((commentsMapped === null || commentsMapped === void 0 ? void 0 : commentsMapped.length) || 0) > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Box, {\n                w: \"full\",\n                maxH: \"300px\",\n                overflowY: \"auto\",\n                paddingBottom: 2,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.VStack, {\n                    gap: 3,\n                    w: \"full\",\n                    children: isCommentsOpened && (commentsMapped === null || commentsMapped === void 0 ? void 0 : commentsMapped.map((comment)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_postCardCommentsItem__WEBPACK_IMPORTED_MODULE_5__.PostCardCommentsItem, {\n                            comment: comment\n                        }, comment.id, false, {\n                            fileName: \"/Users/lm/Workspace/kolab-connect/src/components/posts/postCard/postCardComments.tsx\",\n                            lineNumber: 45,\n                            columnNumber: 17\n                        }, this)))\n                }, void 0, false, {\n                    fileName: \"/Users/lm/Workspace/kolab-connect/src/components/posts/postCard/postCardComments.tsx\",\n                    lineNumber: 42,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/lm/Workspace/kolab-connect/src/components/posts/postCard/postCardComments.tsx\",\n                lineNumber: 41,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_postCardCommentForm__WEBPACK_IMPORTED_MODULE_4__.PostCardCommentForm, {\n                postId: postId,\n                onSaved: handleOnSaved\n            }, void 0, false, {\n                fileName: \"/Users/lm/Workspace/kolab-connect/src/components/posts/postCard/postCardComments.tsx\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(PostCardComments, \"uJ7Ao+AaaZYHdNB38fW3FYedC3w=\", false, function() {\n    return [\n        _services__WEBPACK_IMPORTED_MODULE_2__.useGetPostComments\n    ];\n});\n_c = PostCardComments;\nvar _c;\n$RefreshReg$(_c, \"PostCardComments\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL3Bvc3RzL3Bvc3RDYXJkL3Bvc3RDYXJkQ29tbWVudHMudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUF3RDtBQUVSO0FBQ0Q7QUFDUTtBQUNLO0FBQ0U7QUFNL0MsU0FBU1UsaUJBQWlCLEtBQWlDO1FBQWpDLEVBQUVDLE1BQU0sRUFBeUIsR0FBakM7O0lBQ3ZDLE1BQU0sRUFBRUMsS0FBSyxFQUFFLEdBQUdQLGlEQUFVQSxDQUFDTCxnREFBVUE7SUFDdkMsTUFBTSxFQUFFYSxnQkFBZ0IsRUFBRUMsZUFBZSxFQUFFQyxtQkFBbUIsRUFBRSxHQUM5RFYsaURBQVVBLENBQUNKLHFEQUFlQTtJQUM1QixNQUFNLEVBQUVlLE1BQU1DLFlBQVksRUFBRSxHQUFHZiw2REFBa0JBLENBQUNTLFFBQVFFO0lBRTFELE1BQU1LLGlCQUFpQlgsOENBQU9BLENBQUM7UUFDN0IsSUFBSSxDQUFDSyxPQUFPLE9BQU8sRUFBRTtRQUNyQixNQUFNTyxjQUFjRix5QkFBQUEsbUNBQUFBLGFBQWNHLEdBQUcsQ0FBQ0MsQ0FBQUE7WUFDcEMsTUFBTUMsT0FBTyxDQUFDRCxRQUFRQyxJQUFJLEdBQ3RCVixLQUFLLENBQUNXLEtBQUtDLEtBQUssQ0FBQ0QsS0FBS0UsTUFBTSxLQUFLYixNQUFNYyxNQUFNLEVBQUUsR0FDL0NMLFFBQVFDLElBQUk7WUFDaEIsT0FBTztnQkFBRSxHQUFHRCxPQUFPO2dCQUFFQztZQUFLO1FBQzVCO1FBQ0EsT0FBT0g7SUFDVCxHQUFHO1FBQUNGO1FBQWNMO0tBQU07SUFFeEJOLGdEQUFTQSxDQUFDO1FBQ1JRLGdCQUFnQkc7SUFDbEIsR0FBRztRQUFDQztLQUFlO0lBRW5CLE1BQU1TLGdCQUFnQjtRQUNwQlosb0JBQW9CO0lBQ3RCO0lBRUEscUJBQ0U7O1lBQ0lHLENBQUFBLENBQUFBLDJCQUFBQSxxQ0FBQUEsZUFBZ0JRLE1BQU0sS0FBSSxLQUFLLG1CQUMvQiw4REFBQ3ZCLGlEQUFHQTtnQkFBQ3lCLEdBQUU7Z0JBQU9DLE1BQUs7Z0JBQVFDLFdBQVU7Z0JBQU9DLGVBQWU7MEJBQ3pELDRFQUFDM0Isb0RBQU1BO29CQUFDNEIsS0FBSztvQkFBR0osR0FBRTs4QkFDZmYscUJBQ0NLLDJCQUFBQSxxQ0FBQUEsZUFBZ0JFLEdBQUcsQ0FBQyxDQUFDQyx3QkFDbkIsOERBQUNaLHVFQUFvQkE7NEJBQWtCWSxTQUFTQTsyQkFBckJBLFFBQVFZLEVBQUU7Ozs7Ozs7Ozs7Ozs7OzswQkFLL0MsOERBQUN6QixxRUFBbUJBO2dCQUFDRyxRQUFRQTtnQkFBUXVCLFNBQVNQOzs7Ozs7OztBQUdwRDtHQXhDd0JqQjs7UUFJU1IseURBQWtCQTs7O0tBSjNCUSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9wb3N0cy9wb3N0Q2FyZC9wb3N0Q2FyZENvbW1lbnRzLnRzeD85YmNkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcENvbnRleHQsIFBvc3RDYXJkQ29udGV4dCB9IGZyb20gJ0AvY29udGV4dCc7XG5pbXBvcnQgeyBQb3N0Q29tbWVudCB9IGZyb20gJ0AvbW9kZWxzJztcbmltcG9ydCB7IHVzZUdldFBvc3RDb21tZW50cyB9IGZyb20gJ0Avc2VydmljZXMnO1xuaW1wb3J0IHsgQm94LCBWU3RhY2sgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0JztcbmltcG9ydCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFBvc3RDYXJkQ29tbWVudEZvcm0gfSBmcm9tICcuL3Bvc3RDYXJkQ29tbWVudEZvcm0nO1xuaW1wb3J0IHsgUG9zdENhcmRDb21tZW50c0l0ZW0gfSBmcm9tICcuL3Bvc3RDYXJkQ29tbWVudHNJdGVtJztcblxudHlwZSBQb3N0Q2FyZENvbW1lbnRzUHJvcHMgPSB7XG4gIHBvc3RJZDogbnVtYmVyO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9zdENhcmRDb21tZW50cyh7IHBvc3RJZCB9OiBQb3N0Q2FyZENvbW1lbnRzUHJvcHMpIHtcbiAgY29uc3QgeyB1c2VycyB9ID0gdXNlQ29udGV4dChBcHBDb250ZXh0KTtcbiAgY29uc3QgeyBpc0NvbW1lbnRzT3BlbmVkLCBzZXRQb3N0Q29tbWVudHMsIHNldElzQ29tbWVudHNPcGVuZWQgfSA9XG4gICAgdXNlQ29udGV4dChQb3N0Q2FyZENvbnRleHQpO1xuICBjb25zdCB7IGRhdGE6IHBvc3RDb21tZW50cyB9ID0gdXNlR2V0UG9zdENvbW1lbnRzKHBvc3RJZCwgaXNDb21tZW50c09wZW5lZCk7XG5cbiAgY29uc3QgY29tbWVudHNNYXBwZWQgPSB1c2VNZW1vKCgpID0+IHtcbiAgICBpZiAoIXVzZXJzKSByZXR1cm4gW107XG4gICAgY29uc3QgYXBpQ29tbWVudHMgPSBwb3N0Q29tbWVudHM/Lm1hcChjb21tZW50ID0+IHtcbiAgICAgIGNvbnN0IHVzZXIgPSAhY29tbWVudC51c2VyXG4gICAgICAgID8gdXNlcnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdXNlcnMubGVuZ3RoKV1cbiAgICAgICAgOiBjb21tZW50LnVzZXI7XG4gICAgICByZXR1cm4geyAuLi5jb21tZW50LCB1c2VyIH0gYXMgUG9zdENvbW1lbnQ7XG4gICAgfSk7XG4gICAgcmV0dXJuIGFwaUNvbW1lbnRzO1xuICB9LCBbcG9zdENvbW1lbnRzLCB1c2Vyc10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0UG9zdENvbW1lbnRzKHBvc3RDb21tZW50cyk7XG4gIH0sIFtjb21tZW50c01hcHBlZF0pO1xuXG4gIGNvbnN0IGhhbmRsZU9uU2F2ZWQgPSAoKSA9PiB7XG4gICAgc2V0SXNDb21tZW50c09wZW5lZCh0cnVlKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7KGNvbW1lbnRzTWFwcGVkPy5sZW5ndGggfHwgMCkgPiAwICYmIChcbiAgICAgICAgPEJveCB3PVwiZnVsbFwiIG1heEg9XCIzMDBweFwiIG92ZXJmbG93WT1cImF1dG9cIiBwYWRkaW5nQm90dG9tPXsyfT5cbiAgICAgICAgICA8VlN0YWNrIGdhcD17M30gdz1cImZ1bGxcIj5cbiAgICAgICAgICAgIHtpc0NvbW1lbnRzT3BlbmVkICYmXG4gICAgICAgICAgICAgIGNvbW1lbnRzTWFwcGVkPy5tYXAoKGNvbW1lbnQ6IFBvc3RDb21tZW50KSA9PiAoXG4gICAgICAgICAgICAgICAgPFBvc3RDYXJkQ29tbWVudHNJdGVtIGtleT17Y29tbWVudC5pZH0gY29tbWVudD17Y29tbWVudH0gLz5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9WU3RhY2s+XG4gICAgICAgIDwvQm94PlxuICAgICAgKX1cbiAgICAgIDxQb3N0Q2FyZENvbW1lbnRGb3JtIHBvc3RJZD17cG9zdElkfSBvblNhdmVkPXtoYW5kbGVPblNhdmVkfSAvPlxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkFwcENvbnRleHQiLCJQb3N0Q2FyZENvbnRleHQiLCJ1c2VHZXRQb3N0Q29tbWVudHMiLCJCb3giLCJWU3RhY2siLCJ1c2VDb250ZXh0IiwidXNlRWZmZWN0IiwidXNlTWVtbyIsIlBvc3RDYXJkQ29tbWVudEZvcm0iLCJQb3N0Q2FyZENvbW1lbnRzSXRlbSIsIlBvc3RDYXJkQ29tbWVudHMiLCJwb3N0SWQiLCJ1c2VycyIsImlzQ29tbWVudHNPcGVuZWQiLCJzZXRQb3N0Q29tbWVudHMiLCJzZXRJc0NvbW1lbnRzT3BlbmVkIiwiZGF0YSIsInBvc3RDb21tZW50cyIsImNvbW1lbnRzTWFwcGVkIiwiYXBpQ29tbWVudHMiLCJtYXAiLCJjb21tZW50IiwidXNlciIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImxlbmd0aCIsImhhbmRsZU9uU2F2ZWQiLCJ3IiwibWF4SCIsIm92ZXJmbG93WSIsInBhZGRpbmdCb3R0b20iLCJnYXAiLCJpZCIsIm9uU2F2ZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/posts/postCard/postCardComments.tsx\n"));

/***/ })

});