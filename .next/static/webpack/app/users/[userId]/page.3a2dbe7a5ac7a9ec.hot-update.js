"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/users/[userId]/page",{

/***/ "(app-pages-browser)/./src/components/posts/postCard/postCardActions.tsx":
/*!***********************************************************!*\
  !*** ./src/components/posts/postCard/postCardActions.tsx ***!
  \***********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   PostCardActions: function() { return /* binding */ PostCardActions; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.2.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/context */ \"(app-pages-browser)/./src/context/index.ts\");\n/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/i18n */ \"(app-pages-browser)/./src/i18n.ts\");\n/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/services */ \"(app-pages-browser)/./src/services/index.ts\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-pages-browser)/./node_modules/.pnpm/@chakra-ui+layout@2.3.1_@chakra-ui+system@2.6.2_@emotion+react@11.13.0_@types+react@18.3.3_re_rhwmpieiemaihohwy6rvp4pifq/node_modules/@chakra-ui/layout/dist/chunk-KRPLQIP4.mjs\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-pages-browser)/./node_modules/.pnpm/@chakra-ui+button@2.1.0_@chakra-ui+system@2.6.2_@emotion+react@11.13.0_@types+react@18.3.3_re_qiv7n6gvhmekhv2kn3ly2r6ofy/node_modules/@chakra-ui/button/dist/chunk-UVUR7MCU.mjs\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-pages-browser)/./node_modules/.pnpm/@chakra-ui+button@2.1.0_@chakra-ui+system@2.6.2_@emotion+react@11.13.0_@types+react@18.3.3_re_qiv7n6gvhmekhv2kn3ly2r6ofy/node_modules/@chakra-ui/button/dist/chunk-DA7QIPTJ.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.2.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-i18next */ \"(app-pages-browser)/./node_modules/.pnpm/react-i18next@15.0.0_i18next@23.12.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-i18next/dist/es/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction PostCardActions(param) {\n    let { postId } = param;\n    _s();\n    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_5__.useTranslation)();\n    const { isCommentsOpened, setIsCommentsOpened, postCommentsLength, isEditing, setIsEditing } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useContext)(_context__WEBPACK_IMPORTED_MODULE_1__.PostCardContext);\n    const commentsDisplay = (0,react__WEBPACK_IMPORTED_MODULE_4__.useMemo)(()=>{\n        if (isCommentsOpened && postCommentsLength !== undefined) {\n            return \"\".concat(postCommentsLength, \" \").concat(t(\"comments\"));\n        } else {\n            return t(\"see_comments\");\n        }\n    }, [\n        t,\n        _i18n__WEBPACK_IMPORTED_MODULE_2__[\"default\"].language,\n        isCommentsOpened,\n        setIsCommentsOpened,\n        postCommentsLength\n    ]);\n    const handleOnDelete = ()=>{\n        (0,_services__WEBPACK_IMPORTED_MODULE_3__.removeLocalPost)(postId);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Flex, {\n        justify: \"space-between\",\n        w: \"full\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Button, {\n                fontSize: \"xs\",\n                variant: \"link\",\n                onClick: ()=>{\n                    setIsCommentsOpened(!isCommentsOpened);\n                },\n                children: commentsDisplay\n            }, void 0, false, {\n                fileName: \"/Users/lm/Workspace/kolab-connect/src/components/posts/postCard/postCardActions.tsx\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.ButtonGroup, {\n                children: [\n                    !isEditing && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Button, {\n                        fontSize: \"xs\",\n                        variant: \"link\",\n                        onClick: (_)=>setIsEditing(true),\n                        children: t(\"edit\")\n                    }, void 0, false, {\n                        fileName: \"/Users/lm/Workspace/kolab-connect/src/components/posts/postCard/postCardActions.tsx\",\n                        lineNumber: 54,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Button, {\n                        fontSize: \"xs\",\n                        variant: \"link\",\n                        onClick: handleOnDelete,\n                        children: t(\"delete\")\n                    }, void 0, false, {\n                        fileName: \"/Users/lm/Workspace/kolab-connect/src/components/posts/postCard/postCardActions.tsx\",\n                        lineNumber: 62,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/lm/Workspace/kolab-connect/src/components/posts/postCard/postCardActions.tsx\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/lm/Workspace/kolab-connect/src/components/posts/postCard/postCardActions.tsx\",\n        lineNumber: 42,\n        columnNumber: 5\n    }, this);\n}\n_s(PostCardActions, \"nnuyusM7Ps2fNtq6iQzzasUxWDA=\", false, function() {\n    return [\n        react_i18next__WEBPACK_IMPORTED_MODULE_5__.useTranslation\n    ];\n});\n_c = PostCardActions;\nvar _c;\n$RefreshReg$(_c, \"PostCardActions\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL3Bvc3RzL3Bvc3RDYXJkL3Bvc3RDYXJkQWN0aW9ucy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUE0QztBQUNsQjtBQUNtQjtBQUNnQjtBQUNqQjtBQUNHO0FBTXhDLFNBQVNTLGdCQUFnQixLQUFnQztRQUFoQyxFQUFFQyxNQUFNLEVBQXdCLEdBQWhDOztJQUM5QixNQUFNLEVBQUVDLENBQUMsRUFBRSxHQUFHSCw2REFBY0E7SUFFNUIsTUFBTSxFQUNKSSxnQkFBZ0IsRUFDaEJDLG1CQUFtQixFQUNuQkMsa0JBQWtCLEVBQ2xCQyxTQUFTLEVBQ1RDLFlBQVksRUFDYixHQUFHVixpREFBVUEsQ0FBQ04scURBQWVBO0lBRTlCLE1BQU1pQixrQkFBa0JWLDhDQUFPQSxDQUFDO1FBQzlCLElBQUlLLG9CQUFvQkUsdUJBQXVCSSxXQUFXO1lBQ3hELE9BQU8sR0FBeUJQLE9BQXRCRyxvQkFBbUIsS0FBaUIsT0FBZEgsRUFBRTtRQUNwQyxPQUFPO1lBQ0wsT0FBT0EsRUFBRTtRQUNYO0lBQ0YsR0FBRztRQUNEQTtRQUNBViw2Q0FBSUEsQ0FBQ2tCLFFBQVE7UUFDYlA7UUFDQUM7UUFDQUM7S0FDRDtJQUVELE1BQU1NLGlCQUFpQjtRQUNyQmxCLDBEQUFlQSxDQUFDUTtJQUNsQjtJQUVBLHFCQUNFLDhEQUFDTCxrREFBSUE7UUFBQ2dCLFNBQVE7UUFBZ0JDLEdBQUU7OzBCQUM5Qiw4REFBQ25CLG9EQUFNQTtnQkFDTG9CLFVBQVM7Z0JBQ1RDLFNBQVE7Z0JBQ1JDLFNBQVM7b0JBQ1BaLG9CQUFvQixDQUFDRDtnQkFDdkI7MEJBRUNLOzs7Ozs7MEJBRUgsOERBQUNiLHlEQUFXQTs7b0JBQ1QsQ0FBQ1csMkJBQ0EsOERBQUNaLG9EQUFNQTt3QkFDTG9CLFVBQVM7d0JBQ1RDLFNBQVE7d0JBQ1JDLFNBQVNDLENBQUFBLElBQUtWLGFBQWE7a0NBRTFCTCxFQUFFOzs7Ozs7a0NBR1AsOERBQUNSLG9EQUFNQTt3QkFBQ29CLFVBQVM7d0JBQUtDLFNBQVE7d0JBQU9DLFNBQVNMO2tDQUMzQ1QsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS2I7R0F4RGdCRjs7UUFDQUQseURBQWNBOzs7S0FEZEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvcG9zdHMvcG9zdENhcmQvcG9zdENhcmRBY3Rpb25zLnRzeD8yZjU2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBvc3RDYXJkQ29udGV4dCB9IGZyb20gJ0AvY29udGV4dCc7XG5pbXBvcnQgaTE4biBmcm9tICdAL2kxOG4nO1xuaW1wb3J0IHsgcmVtb3ZlTG9jYWxQb3N0IH0gZnJvbSAnQC9zZXJ2aWNlcyc7XG5pbXBvcnQgeyBCdXR0b24sIEJ1dHRvbkdyb3VwLCBGbGV4IH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCc7XG5pbXBvcnQgeyB1c2VDb250ZXh0LCB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0JztcblxudHlwZSBQb3N0Q2FyZEFjdGlvbnNQcm9wcyA9IHtcbiAgcG9zdElkOiBudW1iZXI7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gUG9zdENhcmRBY3Rpb25zKHsgcG9zdElkIH06IFBvc3RDYXJkQWN0aW9uc1Byb3BzKSB7XG4gIGNvbnN0IHsgdCB9ID0gdXNlVHJhbnNsYXRpb24oKTtcblxuICBjb25zdCB7XG4gICAgaXNDb21tZW50c09wZW5lZCxcbiAgICBzZXRJc0NvbW1lbnRzT3BlbmVkLFxuICAgIHBvc3RDb21tZW50c0xlbmd0aCxcbiAgICBpc0VkaXRpbmcsXG4gICAgc2V0SXNFZGl0aW5nXG4gIH0gPSB1c2VDb250ZXh0KFBvc3RDYXJkQ29udGV4dCk7XG5cbiAgY29uc3QgY29tbWVudHNEaXNwbGF5ID0gdXNlTWVtbygoKSA9PiB7XG4gICAgaWYgKGlzQ29tbWVudHNPcGVuZWQgJiYgcG9zdENvbW1lbnRzTGVuZ3RoICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBgJHtwb3N0Q29tbWVudHNMZW5ndGh9ICR7dCgnY29tbWVudHMnKX1gO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdCgnc2VlX2NvbW1lbnRzJyk7XG4gICAgfVxuICB9LCBbXG4gICAgdCxcbiAgICBpMThuLmxhbmd1YWdlLFxuICAgIGlzQ29tbWVudHNPcGVuZWQsXG4gICAgc2V0SXNDb21tZW50c09wZW5lZCxcbiAgICBwb3N0Q29tbWVudHNMZW5ndGhcbiAgXSk7XG5cbiAgY29uc3QgaGFuZGxlT25EZWxldGUgPSAoKSA9PiB7XG4gICAgcmVtb3ZlTG9jYWxQb3N0KHBvc3RJZCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8RmxleCBqdXN0aWZ5PVwic3BhY2UtYmV0d2VlblwiIHc9XCJmdWxsXCI+XG4gICAgICA8QnV0dG9uXG4gICAgICAgIGZvbnRTaXplPVwieHNcIlxuICAgICAgICB2YXJpYW50PVwibGlua1wiXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICBzZXRJc0NvbW1lbnRzT3BlbmVkKCFpc0NvbW1lbnRzT3BlbmVkKTtcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAge2NvbW1lbnRzRGlzcGxheX1cbiAgICAgIDwvQnV0dG9uPlxuICAgICAgPEJ1dHRvbkdyb3VwPlxuICAgICAgICB7IWlzRWRpdGluZyAmJiAoXG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgZm9udFNpemU9XCJ4c1wiXG4gICAgICAgICAgICB2YXJpYW50PVwibGlua1wiXG4gICAgICAgICAgICBvbkNsaWNrPXtfID0+IHNldElzRWRpdGluZyh0cnVlKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7dCgnZWRpdCcpfVxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICApfVxuICAgICAgICA8QnV0dG9uIGZvbnRTaXplPVwieHNcIiB2YXJpYW50PVwibGlua1wiIG9uQ2xpY2s9e2hhbmRsZU9uRGVsZXRlfT5cbiAgICAgICAgICB7dCgnZGVsZXRlJyl9XG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgPC9CdXR0b25Hcm91cD5cbiAgICA8L0ZsZXg+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUG9zdENhcmRDb250ZXh0IiwiaTE4biIsInJlbW92ZUxvY2FsUG9zdCIsIkJ1dHRvbiIsIkJ1dHRvbkdyb3VwIiwiRmxleCIsInVzZUNvbnRleHQiLCJ1c2VNZW1vIiwidXNlVHJhbnNsYXRpb24iLCJQb3N0Q2FyZEFjdGlvbnMiLCJwb3N0SWQiLCJ0IiwiaXNDb21tZW50c09wZW5lZCIsInNldElzQ29tbWVudHNPcGVuZWQiLCJwb3N0Q29tbWVudHNMZW5ndGgiLCJpc0VkaXRpbmciLCJzZXRJc0VkaXRpbmciLCJjb21tZW50c0Rpc3BsYXkiLCJ1bmRlZmluZWQiLCJsYW5ndWFnZSIsImhhbmRsZU9uRGVsZXRlIiwianVzdGlmeSIsInciLCJmb250U2l6ZSIsInZhcmlhbnQiLCJvbkNsaWNrIiwiXyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/posts/postCard/postCardActions.tsx\n"));

/***/ })

});