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

/***/ "(app-pages-browser)/./src/components/posts/postCard/postCardActions.tsx":
/*!***********************************************************!*\
  !*** ./src/components/posts/postCard/postCardActions.tsx ***!
  \***********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   PostCardActions: function() { return /* binding */ PostCardActions; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.2.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/context */ \"(app-pages-browser)/./src/context/index.ts\");\n/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/i18n */ \"(app-pages-browser)/./src/i18n.ts\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-pages-browser)/./node_modules/.pnpm/@chakra-ui+layout@2.3.1_@chakra-ui+system@2.6.2_@emotion+react@11.13.0_@types+react@18.3.3_re_rhwmpieiemaihohwy6rvp4pifq/node_modules/@chakra-ui/layout/dist/chunk-KRPLQIP4.mjs\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-pages-browser)/./node_modules/.pnpm/@chakra-ui+button@2.1.0_@chakra-ui+system@2.6.2_@emotion+react@11.13.0_@types+react@18.3.3_re_qiv7n6gvhmekhv2kn3ly2r6ofy/node_modules/@chakra-ui/button/dist/chunk-UVUR7MCU.mjs\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-pages-browser)/./node_modules/.pnpm/@chakra-ui+button@2.1.0_@chakra-ui+system@2.6.2_@emotion+react@11.13.0_@types+react@18.3.3_re_qiv7n6gvhmekhv2kn3ly2r6ofy/node_modules/@chakra-ui/button/dist/chunk-DA7QIPTJ.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.2.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-i18next */ \"(app-pages-browser)/./node_modules/.pnpm/react-i18next@15.0.0_i18next@23.12.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-i18next/dist/es/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction PostCardActions() {\n    _s();\n    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_4__.useTranslation)();\n    const { isCommentsOpened, setIsCommentsOpened, postCommentsLength, isEditing, setIsEditing } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_context__WEBPACK_IMPORTED_MODULE_1__.PostCardContext);\n    const commentsDisplay = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(()=>{\n        if (isCommentsOpened && postCommentsLength !== undefined) {\n            return \"\".concat(postCommentsLength, \" \").concat(t(\"comments\"));\n        } else {\n            return t(\"see_comments\");\n        }\n    }, [\n        t,\n        _i18n__WEBPACK_IMPORTED_MODULE_2__[\"default\"].language,\n        isCommentsOpened,\n        setIsCommentsOpened,\n        postCommentsLength\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Flex, {\n        justify: \"space-between\",\n        w: \"full\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                fontSize: \"xs\",\n                variant: \"link\",\n                onClick: ()=>{\n                    setIsCommentsOpened(!isCommentsOpened);\n                },\n                children: commentsDisplay\n            }, void 0, false, {\n                fileName: \"/Users/lm/Workspace/kolab-connect/src/components/posts/postCard/postCardActions.tsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.ButtonGroup, {\n                children: [\n                    !isEditing && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                        fontSize: \"xs\",\n                        variant: \"link\",\n                        onClick: (_)=>setIsEditing(true),\n                        children: t(\"edit\")\n                    }, void 0, false, {\n                        fileName: \"/Users/lm/Workspace/kolab-connect/src/components/posts/postCard/postCardActions.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                        fontSize: \"xs\",\n                        variant: \"link\",\n                        children: t(\"delete\")\n                    }, void 0, false, {\n                        fileName: \"/Users/lm/Workspace/kolab-connect/src/components/posts/postCard/postCardActions.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/lm/Workspace/kolab-connect/src/components/posts/postCard/postCardActions.tsx\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/lm/Workspace/kolab-connect/src/components/posts/postCard/postCardActions.tsx\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, this);\n}\n_s(PostCardActions, \"nnuyusM7Ps2fNtq6iQzzasUxWDA=\", false, function() {\n    return [\n        react_i18next__WEBPACK_IMPORTED_MODULE_4__.useTranslation\n    ];\n});\n_c = PostCardActions;\nvar _c;\n$RefreshReg$(_c, \"PostCardActions\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL3Bvc3RzL3Bvc3RDYXJkL3Bvc3RDYXJkQWN0aW9ucy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQTRDO0FBQ2xCO0FBQ3lDO0FBQ3ZCO0FBQ0c7QUFFeEMsU0FBU1E7O0lBQ2QsTUFBTSxFQUFFQyxDQUFDLEVBQUUsR0FBR0YsNkRBQWNBO0lBRTVCLE1BQU0sRUFDSkcsZ0JBQWdCLEVBQ2hCQyxtQkFBbUIsRUFDbkJDLGtCQUFrQixFQUNsQkMsU0FBUyxFQUNUQyxZQUFZLEVBQ2IsR0FBR1QsaURBQVVBLENBQUNMLHFEQUFlQTtJQUU5QixNQUFNZSxrQkFBa0JULDhDQUFPQSxDQUFDO1FBQzlCLElBQUlJLG9CQUFvQkUsdUJBQXVCSSxXQUFXO1lBQ3hELE9BQU8sR0FBeUJQLE9BQXRCRyxvQkFBbUIsS0FBaUIsT0FBZEgsRUFBRTtRQUNwQyxPQUFPO1lBQ0wsT0FBT0EsRUFBRTtRQUNYO0lBQ0YsR0FBRztRQUNEQTtRQUNBUiw2Q0FBSUEsQ0FBQ2dCLFFBQVE7UUFDYlA7UUFDQUM7UUFDQUM7S0FDRDtJQUVELHFCQUNFLDhEQUFDUixrREFBSUE7UUFBQ2MsU0FBUTtRQUFnQkMsR0FBRTs7MEJBQzlCLDhEQUFDakIsb0RBQU1BO2dCQUNMa0IsVUFBUztnQkFDVEMsU0FBUTtnQkFDUkMsU0FBUztvQkFDUFgsb0JBQW9CLENBQUNEO2dCQUN2QjswQkFFQ0s7Ozs7OzswQkFFSCw4REFBQ1oseURBQVdBOztvQkFDVCxDQUFDVSwyQkFDQSw4REFBQ1gsb0RBQU1BO3dCQUNMa0IsVUFBUzt3QkFDVEMsU0FBUTt3QkFDUkMsU0FBU0MsQ0FBQUEsSUFBS1QsYUFBYTtrQ0FFMUJMLEVBQUU7Ozs7OztrQ0FHUCw4REFBQ1Asb0RBQU1BO3dCQUFDa0IsVUFBUzt3QkFBS0MsU0FBUTtrQ0FDM0JaLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtiO0dBcERnQkQ7O1FBQ0FELHlEQUFjQTs7O0tBRGRDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL3Bvc3RzL3Bvc3RDYXJkL3Bvc3RDYXJkQWN0aW9ucy50c3g/MmY1NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQb3N0Q2FyZENvbnRleHQgfSBmcm9tICdAL2NvbnRleHQnO1xuaW1wb3J0IGkxOG4gZnJvbSAnQC9pMThuJztcbmltcG9ydCB7IEJ1dHRvbiwgQnV0dG9uR3JvdXAsIEZsZXgsIFRleHQgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0JztcbmltcG9ydCB7IHVzZUNvbnRleHQsIHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xuXG5leHBvcnQgZnVuY3Rpb24gUG9zdENhcmRBY3Rpb25zKCkge1xuICBjb25zdCB7IHQgfSA9IHVzZVRyYW5zbGF0aW9uKCk7XG5cbiAgY29uc3Qge1xuICAgIGlzQ29tbWVudHNPcGVuZWQsXG4gICAgc2V0SXNDb21tZW50c09wZW5lZCxcbiAgICBwb3N0Q29tbWVudHNMZW5ndGgsXG4gICAgaXNFZGl0aW5nLFxuICAgIHNldElzRWRpdGluZ1xuICB9ID0gdXNlQ29udGV4dChQb3N0Q2FyZENvbnRleHQpO1xuXG4gIGNvbnN0IGNvbW1lbnRzRGlzcGxheSA9IHVzZU1lbW8oKCkgPT4ge1xuICAgIGlmIChpc0NvbW1lbnRzT3BlbmVkICYmIHBvc3RDb21tZW50c0xlbmd0aCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gYCR7cG9zdENvbW1lbnRzTGVuZ3RofSAke3QoJ2NvbW1lbnRzJyl9YDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHQoJ3NlZV9jb21tZW50cycpO1xuICAgIH1cbiAgfSwgW1xuICAgIHQsXG4gICAgaTE4bi5sYW5ndWFnZSxcbiAgICBpc0NvbW1lbnRzT3BlbmVkLFxuICAgIHNldElzQ29tbWVudHNPcGVuZWQsXG4gICAgcG9zdENvbW1lbnRzTGVuZ3RoXG4gIF0pO1xuXG4gIHJldHVybiAoXG4gICAgPEZsZXgganVzdGlmeT1cInNwYWNlLWJldHdlZW5cIiB3PVwiZnVsbFwiPlxuICAgICAgPEJ1dHRvblxuICAgICAgICBmb250U2l6ZT1cInhzXCJcbiAgICAgICAgdmFyaWFudD1cImxpbmtcIlxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgc2V0SXNDb21tZW50c09wZW5lZCghaXNDb21tZW50c09wZW5lZCk7XG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIHtjb21tZW50c0Rpc3BsYXl9XG4gICAgICA8L0J1dHRvbj5cbiAgICAgIDxCdXR0b25Hcm91cD5cbiAgICAgICAgeyFpc0VkaXRpbmcgJiYgKFxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIGZvbnRTaXplPVwieHNcIlxuICAgICAgICAgICAgdmFyaWFudD1cImxpbmtcIlxuICAgICAgICAgICAgb25DbGljaz17XyA9PiBzZXRJc0VkaXRpbmcodHJ1ZSl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge3QoJ2VkaXQnKX1cbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgKX1cbiAgICAgICAgPEJ1dHRvbiBmb250U2l6ZT1cInhzXCIgdmFyaWFudD1cImxpbmtcIj5cbiAgICAgICAgICB7dCgnZGVsZXRlJyl9XG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgPC9CdXR0b25Hcm91cD5cbiAgICA8L0ZsZXg+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUG9zdENhcmRDb250ZXh0IiwiaTE4biIsIkJ1dHRvbiIsIkJ1dHRvbkdyb3VwIiwiRmxleCIsInVzZUNvbnRleHQiLCJ1c2VNZW1vIiwidXNlVHJhbnNsYXRpb24iLCJQb3N0Q2FyZEFjdGlvbnMiLCJ0IiwiaXNDb21tZW50c09wZW5lZCIsInNldElzQ29tbWVudHNPcGVuZWQiLCJwb3N0Q29tbWVudHNMZW5ndGgiLCJpc0VkaXRpbmciLCJzZXRJc0VkaXRpbmciLCJjb21tZW50c0Rpc3BsYXkiLCJ1bmRlZmluZWQiLCJsYW5ndWFnZSIsImp1c3RpZnkiLCJ3IiwiZm9udFNpemUiLCJ2YXJpYW50Iiwib25DbGljayIsIl8iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/posts/postCard/postCardActions.tsx\n"));

/***/ })

});