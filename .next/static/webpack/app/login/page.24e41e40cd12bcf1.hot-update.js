"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/login/page",{

/***/ "(app-pages-browser)/./src/components/posts/postCard/postCardDescription.tsx":
/*!***************************************************************!*\
  !*** ./src/components/posts/postCard/postCardDescription.tsx ***!
  \***************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ PostCardDescription; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.2.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/context */ \"(app-pages-browser)/./src/context/index.ts\");\n/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/services */ \"(app-pages-browser)/./src/services/index.ts\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-pages-browser)/./node_modules/.pnpm/@chakra-ui+layout@2.3.1_@chakra-ui+system@2.6.2_@emotion+react@11.13.0_@types+react@18.3.3_re_rhwmpieiemaihohwy6rvp4pifq/node_modules/@chakra-ui/layout/dist/chunk-2OOHT3W5.mjs\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-pages-browser)/./node_modules/.pnpm/@chakra-ui+input@2.1.2_@chakra-ui+system@2.6.2_@emotion+react@11.13.0_@types+react@18.3.3_rea_tz2k6uauadeij4delk2xih67ii/node_modules/@chakra-ui/input/dist/chunk-FKYN3ZGE.mjs\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-pages-browser)/./node_modules/.pnpm/@chakra-ui+textarea@2.1.2_@chakra-ui+system@2.6.2_@emotion+react@11.13.0_@types+react@18.3.3__rsh7ns5ljrnctxaudttx4kxlbq/node_modules/@chakra-ui/textarea/dist/chunk-4IH3O7BJ.mjs\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-pages-browser)/./node_modules/.pnpm/@chakra-ui+input@2.1.2_@chakra-ui+system@2.6.2_@emotion+react@11.13.0_@types+react@18.3.3_rea_tz2k6uauadeij4delk2xih67ii/node_modules/@chakra-ui/input/dist/chunk-2ZHRCML3.mjs\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-pages-browser)/./node_modules/.pnpm/@chakra-ui+button@2.1.0_@chakra-ui+system@2.6.2_@emotion+react@11.13.0_@types+react@18.3.3_re_qiv7n6gvhmekhv2kn3ly2r6ofy/node_modules/@chakra-ui/button/dist/chunk-6QYXN73V.mjs\");\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @tanstack/react-query */ \"(app-pages-browser)/./node_modules/.pnpm/@tanstack+react-query@5.51.15_react@18.3.1/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.2.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _barrel_optimize_names_MdSave_react_icons_md__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! __barrel_optimize__?names=MdSave!=!react-icons/md */ \"(app-pages-browser)/./node_modules/.pnpm/react-icons@5.2.1_react@18.3.1/node_modules/react-icons/md/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction PostCardDescription(param) {\n    let { post } = param;\n    _s();\n    const queryClient = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_4__.useQueryClient)();\n    const [postDescription, setPostDescription] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(post.body);\n    const { isEditing, setIsEditing } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_context__WEBPACK_IMPORTED_MODULE_1__.PostCardContext);\n    const handleInputKeydown = (e)=>{\n        if (e.key === \"Escape\") {\n            setPostDescription(post.body);\n            queryClient.invalidateQueries({\n                queryKey: [\n                    \"posts\"\n                ]\n            });\n            setIsEditing(false);\n        }\n    };\n    const handleOnSave = ()=>{\n        (0,_services__WEBPACK_IMPORTED_MODULE_2__.saveLocalPost)({\n            ...post,\n            body: postDescription\n        });\n        setIsEditing(false);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            !isEditing && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Text, {\n                children: post.body\n            }, void 0, false, {\n                fileName: \"/Users/lm/Workspace/kolab-connect/src/components/posts/postCard/postCardDescription.tsx\",\n                lineNumber: 43,\n                columnNumber: 22\n            }, this),\n            isEditing && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.InputGroup, {\n                size: \"md\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Textarea, {\n                        value: postDescription,\n                        onChange: (e)=>setPostDescription(e.target.value),\n                        size: \"sm\",\n                        onKeyDown: handleInputKeydown\n                    }, void 0, false, {\n                        fileName: \"/Users/lm/Workspace/kolab-connect/src/components/posts/postCard/postCardDescription.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.InputRightElement, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.IconButton, {\n                            variant: \"text\",\n                            \"aria-label\": \"Search\",\n                            size: \"lg\",\n                            icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_MdSave_react_icons_md__WEBPACK_IMPORTED_MODULE_10__.MdSave, {}, void 0, false, {\n                                fileName: \"/Users/lm/Workspace/kolab-connect/src/components/posts/postCard/postCardDescription.tsx\",\n                                lineNumber: 57,\n                                columnNumber: 21\n                            }, void 0),\n                            onClick: handleOnSave\n                        }, void 0, false, {\n                            fileName: \"/Users/lm/Workspace/kolab-connect/src/components/posts/postCard/postCardDescription.tsx\",\n                            lineNumber: 53,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/lm/Workspace/kolab-connect/src/components/posts/postCard/postCardDescription.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/lm/Workspace/kolab-connect/src/components/posts/postCard/postCardDescription.tsx\",\n                lineNumber: 45,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(PostCardDescription, \"0ygs9mYGZlMZlMLKSEo5kSwKbYE=\", false, function() {\n    return [\n        _tanstack_react_query__WEBPACK_IMPORTED_MODULE_4__.useQueryClient\n    ];\n});\n_c = PostCardDescription;\nvar _c;\n$RefreshReg$(_c, \"PostCardDescription\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL3Bvc3RzL3Bvc3RDYXJkL3Bvc3RDYXJkRGVzY3JpcHRpb24udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUE0QztBQUVEO0FBT2pCO0FBQzZCO0FBQ1Y7QUFDTDtBQU16QixTQUFTVyxvQkFBb0IsS0FFakI7UUFGaUIsRUFDMUNDLElBQUksRUFDcUIsR0FGaUI7O0lBRzFDLE1BQU1DLGNBQWNOLHFFQUFjQTtJQUNsQyxNQUFNLENBQUNPLGlCQUFpQkMsbUJBQW1CLEdBQUdOLCtDQUFRQSxDQUFTRyxLQUFLSSxJQUFJO0lBQ3hFLE1BQU0sRUFBRUMsU0FBUyxFQUFFQyxZQUFZLEVBQUUsR0FBR1YsaURBQVVBLENBQUNSLHFEQUFlQTtJQUU5RCxNQUFNbUIscUJBQXFCLENBQUNDO1FBQzFCLElBQUlBLEVBQUVDLEdBQUcsS0FBSyxVQUFVO1lBQ3RCTixtQkFBbUJILEtBQUtJLElBQUk7WUFDNUJILFlBQVlTLGlCQUFpQixDQUFDO2dCQUM1QkMsVUFBVTtvQkFBQztpQkFBUTtZQUNyQjtZQUNBTCxhQUFhO1FBQ2Y7SUFDRjtJQUVBLE1BQU1NLGVBQWU7UUFDbkJ2Qix3REFBYUEsQ0FBQztZQUFFLEdBQUdXLElBQUk7WUFBRUksTUFBTUY7UUFBZ0I7UUFDL0NJLGFBQWE7SUFDZjtJQUVBLHFCQUNFOztZQUNHLENBQUNELDJCQUFhLDhEQUFDWixrREFBSUE7MEJBQUVPLEtBQUtJLElBQUk7Ozs7OztZQUM5QkMsMkJBQ0MsOERBQUNkLHdEQUFVQTtnQkFBQ3NCLE1BQUs7O2tDQUNmLDhEQUFDbkIsc0RBQVFBO3dCQUNQb0IsT0FBT1o7d0JBQ1BhLFVBQVVQLENBQUFBLElBQUtMLG1CQUFtQkssRUFBRVEsTUFBTSxDQUFDRixLQUFLO3dCQUNoREQsTUFBSzt3QkFDTEksV0FBV1Y7Ozs7OztrQ0FFYiw4REFBQ2YsK0RBQWlCQTtrQ0FDaEIsNEVBQUNGLHdEQUFVQTs0QkFDVDRCLFNBQVE7NEJBQ1JDLGNBQVc7NEJBQ1hOLE1BQUs7NEJBQ0xPLG9CQUFNLDhEQUFDdEIsaUZBQU1BOzs7Ozs0QkFDYnVCLFNBQVNUOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT3ZCO0dBOUN3QmI7O1FBR0ZKLGlFQUFjQTs7O0tBSFpJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL3Bvc3RzL3Bvc3RDYXJkL3Bvc3RDYXJkRGVzY3JpcHRpb24udHN4P2Y1ZDciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUG9zdENhcmRDb250ZXh0IH0gZnJvbSAnQC9jb250ZXh0JztcbmltcG9ydCB7IFBvc3QgfSBmcm9tICdAL21vZGVscyc7XG5pbXBvcnQgeyBzYXZlTG9jYWxQb3N0IH0gZnJvbSAnQC9zZXJ2aWNlcyc7XG5pbXBvcnQge1xuICBJY29uQnV0dG9uLFxuICBJbnB1dEdyb3VwLFxuICBJbnB1dFJpZ2h0RWxlbWVudCxcbiAgVGV4dCxcbiAgVGV4dGFyZWFcbn0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCc7XG5pbXBvcnQgeyB1c2VRdWVyeUNsaWVudCB9IGZyb20gJ0B0YW5zdGFjay9yZWFjdC1xdWVyeSc7XG5pbXBvcnQgeyB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IE1kU2F2ZSB9IGZyb20gJ3JlYWN0LWljb25zL21kJztcblxudHlwZSBQb3N0Q2FyZERlc2NyaXB0aW9uUHJvcHMgPSB7XG4gIHBvc3Q6IFBvc3Q7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb3N0Q2FyZERlc2NyaXB0aW9uKHtcbiAgcG9zdFxufTogUG9zdENhcmREZXNjcmlwdGlvblByb3BzKSB7XG4gIGNvbnN0IHF1ZXJ5Q2xpZW50ID0gdXNlUXVlcnlDbGllbnQoKTtcbiAgY29uc3QgW3Bvc3REZXNjcmlwdGlvbiwgc2V0UG9zdERlc2NyaXB0aW9uXSA9IHVzZVN0YXRlPHN0cmluZz4ocG9zdC5ib2R5KTtcbiAgY29uc3QgeyBpc0VkaXRpbmcsIHNldElzRWRpdGluZyB9ID0gdXNlQ29udGV4dChQb3N0Q2FyZENvbnRleHQpO1xuXG4gIGNvbnN0IGhhbmRsZUlucHV0S2V5ZG93biA9IChlOiBSZWFjdC5LZXlib2FyZEV2ZW50PEhUTUxUZXh0QXJlYUVsZW1lbnQ+KSA9PiB7XG4gICAgaWYgKGUua2V5ID09PSAnRXNjYXBlJykge1xuICAgICAgc2V0UG9zdERlc2NyaXB0aW9uKHBvc3QuYm9keSk7XG4gICAgICBxdWVyeUNsaWVudC5pbnZhbGlkYXRlUXVlcmllcyh7XG4gICAgICAgIHF1ZXJ5S2V5OiBbJ3Bvc3RzJ11cbiAgICAgIH0pO1xuICAgICAgc2V0SXNFZGl0aW5nKGZhbHNlKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlT25TYXZlID0gKCkgPT4ge1xuICAgIHNhdmVMb2NhbFBvc3QoeyAuLi5wb3N0LCBib2R5OiBwb3N0RGVzY3JpcHRpb24gfSk7XG4gICAgc2V0SXNFZGl0aW5nKGZhbHNlKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7IWlzRWRpdGluZyAmJiA8VGV4dD57cG9zdC5ib2R5fTwvVGV4dD59XG4gICAgICB7aXNFZGl0aW5nICYmIChcbiAgICAgICAgPElucHV0R3JvdXAgc2l6ZT1cIm1kXCI+XG4gICAgICAgICAgPFRleHRhcmVhXG4gICAgICAgICAgICB2YWx1ZT17cG9zdERlc2NyaXB0aW9ufVxuICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0UG9zdERlc2NyaXB0aW9uKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgIHNpemU9XCJzbVwiXG4gICAgICAgICAgICBvbktleURvd249e2hhbmRsZUlucHV0S2V5ZG93bn1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxJbnB1dFJpZ2h0RWxlbWVudD5cbiAgICAgICAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIlNlYXJjaFwiXG4gICAgICAgICAgICAgIHNpemU9XCJsZ1wiXG4gICAgICAgICAgICAgIGljb249ezxNZFNhdmUgLz59XG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZU9uU2F2ZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9JbnB1dFJpZ2h0RWxlbWVudD5cbiAgICAgICAgPC9JbnB1dEdyb3VwPlxuICAgICAgKX1cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJQb3N0Q2FyZENvbnRleHQiLCJzYXZlTG9jYWxQb3N0IiwiSWNvbkJ1dHRvbiIsIklucHV0R3JvdXAiLCJJbnB1dFJpZ2h0RWxlbWVudCIsIlRleHQiLCJUZXh0YXJlYSIsInVzZVF1ZXJ5Q2xpZW50IiwidXNlQ29udGV4dCIsInVzZVN0YXRlIiwiTWRTYXZlIiwiUG9zdENhcmREZXNjcmlwdGlvbiIsInBvc3QiLCJxdWVyeUNsaWVudCIsInBvc3REZXNjcmlwdGlvbiIsInNldFBvc3REZXNjcmlwdGlvbiIsImJvZHkiLCJpc0VkaXRpbmciLCJzZXRJc0VkaXRpbmciLCJoYW5kbGVJbnB1dEtleWRvd24iLCJlIiwia2V5IiwiaW52YWxpZGF0ZVF1ZXJpZXMiLCJxdWVyeUtleSIsImhhbmRsZU9uU2F2ZSIsInNpemUiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwidGFyZ2V0Iiwib25LZXlEb3duIiwidmFyaWFudCIsImFyaWEtbGFiZWwiLCJpY29uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/posts/postCard/postCardDescription.tsx\n"));

/***/ })

});