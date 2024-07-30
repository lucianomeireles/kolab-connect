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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   PostCardActions: function() { return /* binding */ PostCardActions; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.2.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/context */ \"(app-pages-browser)/./src/context/index.ts\");\n/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/i18n */ \"(app-pages-browser)/./src/i18n.ts\");\n/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/services */ \"(app-pages-browser)/./src/services/index.ts\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-pages-browser)/./node_modules/.pnpm/@chakra-ui+layout@2.3.1_@chakra-ui+system@2.6.2_@emotion+react@11.13.0_@types+react@18.3.3_re_rhwmpieiemaihohwy6rvp4pifq/node_modules/@chakra-ui/layout/dist/chunk-KRPLQIP4.mjs\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-pages-browser)/./node_modules/.pnpm/@chakra-ui+button@2.1.0_@chakra-ui+system@2.6.2_@emotion+react@11.13.0_@types+react@18.3.3_re_qiv7n6gvhmekhv2kn3ly2r6ofy/node_modules/@chakra-ui/button/dist/chunk-UVUR7MCU.mjs\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-pages-browser)/./node_modules/.pnpm/@chakra-ui+button@2.1.0_@chakra-ui+system@2.6.2_@emotion+react@11.13.0_@types+react@18.3.3_re_qiv7n6gvhmekhv2kn3ly2r6ofy/node_modules/@chakra-ui/button/dist/chunk-DA7QIPTJ.mjs\");\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @tanstack/react-query */ \"(app-pages-browser)/./node_modules/.pnpm/@tanstack+react-query@5.51.15_react@18.3.1/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.2.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-i18next */ \"(app-pages-browser)/./node_modules/.pnpm/react-i18next@15.0.0_i18next@23.12.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-i18next/dist/es/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction PostCardActions(param) {\n    let { postId, userId } = param;\n    _s();\n    const queryClient = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_6__.useQueryClient)();\n    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_5__.useTranslation)();\n    const loggedUser = (0,_services__WEBPACK_IMPORTED_MODULE_3__.getLoggedUser)();\n    const editable = (loggedUser === null || loggedUser === void 0 ? void 0 : loggedUser.id) === userId;\n    const { isCommentsOpened, setIsCommentsOpened, postCommentsLength, isEditing, setIsEditing } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useContext)(_context__WEBPACK_IMPORTED_MODULE_1__.PostCardContext);\n    const commentsDisplay = (0,react__WEBPACK_IMPORTED_MODULE_4__.useMemo)(()=>{\n        if (isCommentsOpened && postCommentsLength !== undefined) {\n            return \"\".concat(postCommentsLength, \" \").concat(t(\"comments\"));\n        } else {\n            return t(\"see_comments\");\n        }\n    }, [\n        t,\n        _i18n__WEBPACK_IMPORTED_MODULE_2__[\"default\"].language,\n        isCommentsOpened,\n        setIsCommentsOpened,\n        postCommentsLength\n    ]);\n    const handleOnDelete = ()=>{\n        (0,_services__WEBPACK_IMPORTED_MODULE_3__.removeLocalPost)(postId);\n        queryClient.invalidateQueries({\n            queryKey: [\n                \"posts\"\n            ]\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Flex, {\n        justify: \"space-between\",\n        w: \"full\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Button, {\n                fontSize: \"xs\",\n                variant: \"link\",\n                onClick: ()=>{\n                    setIsCommentsOpened(!isCommentsOpened);\n                },\n                children: commentsDisplay\n            }, void 0, false, {\n                fileName: \"/Users/lm/Workspace/kolab-connect/src/components/posts/postCard/postCardActions.tsx\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, this),\n            editable && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.ButtonGroup, {\n                children: [\n                    !isEditing && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Button, {\n                        fontSize: \"xs\",\n                        variant: \"link\",\n                        onClick: (_)=>setIsEditing(true),\n                        children: t(\"edit\")\n                    }, void 0, false, {\n                        fileName: \"/Users/lm/Workspace/kolab-connect/src/components/posts/postCard/postCardActions.tsx\",\n                        lineNumber: 64,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Button, {\n                        fontSize: \"xs\",\n                        variant: \"link\",\n                        onClick: handleOnDelete,\n                        children: t(\"delete\")\n                    }, void 0, false, {\n                        fileName: \"/Users/lm/Workspace/kolab-connect/src/components/posts/postCard/postCardActions.tsx\",\n                        lineNumber: 72,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/lm/Workspace/kolab-connect/src/components/posts/postCard/postCardActions.tsx\",\n                lineNumber: 62,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/lm/Workspace/kolab-connect/src/components/posts/postCard/postCardActions.tsx\",\n        lineNumber: 51,\n        columnNumber: 5\n    }, this);\n}\n_s(PostCardActions, \"uTuPBWV3cy/F/qeAryR7tIIsSLo=\", false, function() {\n    return [\n        _tanstack_react_query__WEBPACK_IMPORTED_MODULE_6__.useQueryClient,\n        react_i18next__WEBPACK_IMPORTED_MODULE_5__.useTranslation\n    ];\n});\n_c = PostCardActions;\nvar _c;\n$RefreshReg$(_c, \"PostCardActions\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL3Bvc3RzL3Bvc3RDYXJkL3Bvc3RDYXJkQWN0aW9ucy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBNEM7QUFDbEI7QUFDa0M7QUFDQztBQUNOO0FBQ1g7QUFDRztBQU94QyxTQUFTVyxnQkFBZ0IsS0FBd0M7UUFBeEMsRUFBRUMsTUFBTSxFQUFFQyxNQUFNLEVBQXdCLEdBQXhDOztJQUM5QixNQUFNQyxjQUFjUCxxRUFBY0E7SUFDbEMsTUFBTSxFQUFFUSxDQUFDLEVBQUUsR0FBR0wsNkRBQWNBO0lBRTVCLE1BQU1NLGFBQWFkLHdEQUFhQTtJQUNoQyxNQUFNZSxXQUFXRCxDQUFBQSx1QkFBQUEsaUNBQUFBLFdBQVlFLEVBQUUsTUFBS0w7SUFFcEMsTUFBTSxFQUNKTSxnQkFBZ0IsRUFDaEJDLG1CQUFtQixFQUNuQkMsa0JBQWtCLEVBQ2xCQyxTQUFTLEVBQ1RDLFlBQVksRUFDYixHQUFHZixpREFBVUEsQ0FBQ1IscURBQWVBO0lBRTlCLE1BQU13QixrQkFBa0JmLDhDQUFPQSxDQUFDO1FBQzlCLElBQUlVLG9CQUFvQkUsdUJBQXVCSSxXQUFXO1lBQ3hELE9BQU8sR0FBeUJWLE9BQXRCTSxvQkFBbUIsS0FBaUIsT0FBZE4sRUFBRTtRQUNwQyxPQUFPO1lBQ0wsT0FBT0EsRUFBRTtRQUNYO0lBQ0YsR0FBRztRQUNEQTtRQUNBZCw2Q0FBSUEsQ0FBQ3lCLFFBQVE7UUFDYlA7UUFDQUM7UUFDQUM7S0FDRDtJQUVELE1BQU1NLGlCQUFpQjtRQUNyQnhCLDBEQUFlQSxDQUFDUztRQUNoQkUsWUFBWWMsaUJBQWlCLENBQUM7WUFDNUJDLFVBQVU7Z0JBQUM7YUFBUTtRQUNyQjtJQUNGO0lBRUEscUJBQ0UsOERBQUN2QixrREFBSUE7UUFBQ3dCLFNBQVE7UUFBZ0JDLEdBQUU7OzBCQUM5Qiw4REFBQzNCLG9EQUFNQTtnQkFDTDRCLFVBQVM7Z0JBQ1RDLFNBQVE7Z0JBQ1JDLFNBQVM7b0JBQ1BkLG9CQUFvQixDQUFDRDtnQkFDdkI7MEJBRUNLOzs7Ozs7WUFFRlAsMEJBQ0MsOERBQUNaLHlEQUFXQTs7b0JBQ1QsQ0FBQ2lCLDJCQUNBLDhEQUFDbEIsb0RBQU1BO3dCQUNMNEIsVUFBUzt3QkFDVEMsU0FBUTt3QkFDUkMsU0FBU0MsQ0FBQUEsSUFBS1osYUFBYTtrQ0FFMUJSLEVBQUU7Ozs7OztrQ0FHUCw4REFBQ1gsb0RBQU1BO3dCQUFDNEIsVUFBUzt3QkFBS0MsU0FBUTt3QkFBT0MsU0FBU1A7a0NBQzNDWixFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNZjtHQWpFZ0JKOztRQUNNSixpRUFBY0E7UUFDcEJHLHlEQUFjQTs7O0tBRmRDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL3Bvc3RzL3Bvc3RDYXJkL3Bvc3RDYXJkQWN0aW9ucy50c3g/MmY1NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQb3N0Q2FyZENvbnRleHQgfSBmcm9tICdAL2NvbnRleHQnO1xuaW1wb3J0IGkxOG4gZnJvbSAnQC9pMThuJztcbmltcG9ydCB7IGdldExvZ2dlZFVzZXIsIHJlbW92ZUxvY2FsUG9zdCB9IGZyb20gJ0Avc2VydmljZXMnO1xuaW1wb3J0IHsgQnV0dG9uLCBCdXR0b25Hcm91cCwgRmxleCB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnO1xuaW1wb3J0IHsgdXNlUXVlcnlDbGllbnQgfSBmcm9tICdAdGFuc3RhY2svcmVhY3QtcXVlcnknO1xuaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCc7XG5cbnR5cGUgUG9zdENhcmRBY3Rpb25zUHJvcHMgPSB7XG4gIHBvc3RJZDogbnVtYmVyO1xuICB1c2VySWQ6IG51bWJlcjtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBQb3N0Q2FyZEFjdGlvbnMoeyBwb3N0SWQsIHVzZXJJZCB9OiBQb3N0Q2FyZEFjdGlvbnNQcm9wcykge1xuICBjb25zdCBxdWVyeUNsaWVudCA9IHVzZVF1ZXJ5Q2xpZW50KCk7XG4gIGNvbnN0IHsgdCB9ID0gdXNlVHJhbnNsYXRpb24oKTtcblxuICBjb25zdCBsb2dnZWRVc2VyID0gZ2V0TG9nZ2VkVXNlcigpO1xuICBjb25zdCBlZGl0YWJsZSA9IGxvZ2dlZFVzZXI/LmlkID09PSB1c2VySWQ7XG5cbiAgY29uc3Qge1xuICAgIGlzQ29tbWVudHNPcGVuZWQsXG4gICAgc2V0SXNDb21tZW50c09wZW5lZCxcbiAgICBwb3N0Q29tbWVudHNMZW5ndGgsXG4gICAgaXNFZGl0aW5nLFxuICAgIHNldElzRWRpdGluZ1xuICB9ID0gdXNlQ29udGV4dChQb3N0Q2FyZENvbnRleHQpO1xuXG4gIGNvbnN0IGNvbW1lbnRzRGlzcGxheSA9IHVzZU1lbW8oKCkgPT4ge1xuICAgIGlmIChpc0NvbW1lbnRzT3BlbmVkICYmIHBvc3RDb21tZW50c0xlbmd0aCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gYCR7cG9zdENvbW1lbnRzTGVuZ3RofSAke3QoJ2NvbW1lbnRzJyl9YDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHQoJ3NlZV9jb21tZW50cycpO1xuICAgIH1cbiAgfSwgW1xuICAgIHQsXG4gICAgaTE4bi5sYW5ndWFnZSxcbiAgICBpc0NvbW1lbnRzT3BlbmVkLFxuICAgIHNldElzQ29tbWVudHNPcGVuZWQsXG4gICAgcG9zdENvbW1lbnRzTGVuZ3RoXG4gIF0pO1xuXG4gIGNvbnN0IGhhbmRsZU9uRGVsZXRlID0gKCkgPT4ge1xuICAgIHJlbW92ZUxvY2FsUG9zdChwb3N0SWQpO1xuICAgIHF1ZXJ5Q2xpZW50LmludmFsaWRhdGVRdWVyaWVzKHtcbiAgICAgIHF1ZXJ5S2V5OiBbJ3Bvc3RzJ11cbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxGbGV4IGp1c3RpZnk9XCJzcGFjZS1iZXR3ZWVuXCIgdz1cImZ1bGxcIj5cbiAgICAgIDxCdXR0b25cbiAgICAgICAgZm9udFNpemU9XCJ4c1wiXG4gICAgICAgIHZhcmlhbnQ9XCJsaW5rXCJcbiAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgIHNldElzQ29tbWVudHNPcGVuZWQoIWlzQ29tbWVudHNPcGVuZWQpO1xuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICB7Y29tbWVudHNEaXNwbGF5fVxuICAgICAgPC9CdXR0b24+XG4gICAgICB7ZWRpdGFibGUgJiYgKFxuICAgICAgICA8QnV0dG9uR3JvdXA+XG4gICAgICAgICAgeyFpc0VkaXRpbmcgJiYgKFxuICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICBmb250U2l6ZT1cInhzXCJcbiAgICAgICAgICAgICAgdmFyaWFudD1cImxpbmtcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXtfID0+IHNldElzRWRpdGluZyh0cnVlKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge3QoJ2VkaXQnKX1cbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICl9XG4gICAgICAgICAgPEJ1dHRvbiBmb250U2l6ZT1cInhzXCIgdmFyaWFudD1cImxpbmtcIiBvbkNsaWNrPXtoYW5kbGVPbkRlbGV0ZX0+XG4gICAgICAgICAgICB7dCgnZGVsZXRlJyl9XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvQnV0dG9uR3JvdXA+XG4gICAgICApfVxuICAgIDwvRmxleD5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJQb3N0Q2FyZENvbnRleHQiLCJpMThuIiwiZ2V0TG9nZ2VkVXNlciIsInJlbW92ZUxvY2FsUG9zdCIsIkJ1dHRvbiIsIkJ1dHRvbkdyb3VwIiwiRmxleCIsInVzZVF1ZXJ5Q2xpZW50IiwidXNlQ29udGV4dCIsInVzZU1lbW8iLCJ1c2VUcmFuc2xhdGlvbiIsIlBvc3RDYXJkQWN0aW9ucyIsInBvc3RJZCIsInVzZXJJZCIsInF1ZXJ5Q2xpZW50IiwidCIsImxvZ2dlZFVzZXIiLCJlZGl0YWJsZSIsImlkIiwiaXNDb21tZW50c09wZW5lZCIsInNldElzQ29tbWVudHNPcGVuZWQiLCJwb3N0Q29tbWVudHNMZW5ndGgiLCJpc0VkaXRpbmciLCJzZXRJc0VkaXRpbmciLCJjb21tZW50c0Rpc3BsYXkiLCJ1bmRlZmluZWQiLCJsYW5ndWFnZSIsImhhbmRsZU9uRGVsZXRlIiwiaW52YWxpZGF0ZVF1ZXJpZXMiLCJxdWVyeUtleSIsImp1c3RpZnkiLCJ3IiwiZm9udFNpemUiLCJ2YXJpYW50Iiwib25DbGljayIsIl8iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/posts/postCard/postCardActions.tsx\n"));

/***/ })

});