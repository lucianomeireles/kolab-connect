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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ PostCardDescription; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.2.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/context */ \"(app-pages-browser)/./src/context/index.ts\");\n/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/services */ \"(app-pages-browser)/./src/services/index.ts\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-pages-browser)/./node_modules/.pnpm/@chakra-ui+layout@2.3.1_@chakra-ui+system@2.6.2_@emotion+react@11.13.0_@types+react@18.3.3_re_rhwmpieiemaihohwy6rvp4pifq/node_modules/@chakra-ui/layout/dist/chunk-2OOHT3W5.mjs\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-pages-browser)/./node_modules/.pnpm/@chakra-ui+input@2.1.2_@chakra-ui+system@2.6.2_@emotion+react@11.13.0_@types+react@18.3.3_rea_tz2k6uauadeij4delk2xih67ii/node_modules/@chakra-ui/input/dist/chunk-FKYN3ZGE.mjs\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-pages-browser)/./node_modules/.pnpm/@chakra-ui+textarea@2.1.2_@chakra-ui+system@2.6.2_@emotion+react@11.13.0_@types+react@18.3.3__rsh7ns5ljrnctxaudttx4kxlbq/node_modules/@chakra-ui/textarea/dist/chunk-4IH3O7BJ.mjs\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-pages-browser)/./node_modules/.pnpm/@chakra-ui+input@2.1.2_@chakra-ui+system@2.6.2_@emotion+react@11.13.0_@types+react@18.3.3_rea_tz2k6uauadeij4delk2xih67ii/node_modules/@chakra-ui/input/dist/chunk-2ZHRCML3.mjs\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-pages-browser)/./node_modules/.pnpm/@chakra-ui+button@2.1.0_@chakra-ui+system@2.6.2_@emotion+react@11.13.0_@types+react@18.3.3_re_qiv7n6gvhmekhv2kn3ly2r6ofy/node_modules/@chakra-ui/button/dist/chunk-6QYXN73V.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.2.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _barrel_optimize_names_MdSave_react_icons_md__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! __barrel_optimize__?names=MdSave!=!react-icons/md */ \"(app-pages-browser)/./node_modules/.pnpm/react-icons@5.2.1_react@18.3.1/node_modules/react-icons/md/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction PostCardDescription(param) {\n    let { post } = param;\n    _s();\n    const [postDescription, setPostDescription] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(post.body);\n    const { isEditing, setIsEditing } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_context__WEBPACK_IMPORTED_MODULE_1__.PostCardContext);\n    const handleInputKeydown = (e)=>{\n        if (e.key === \"Escape\") {\n            setPostDescription(post.body);\n            setIsEditing(false);\n        }\n    };\n    const handleOnSave = ()=>{\n        (0,_services__WEBPACK_IMPORTED_MODULE_2__.saveLocalPost)({\n            ...post,\n            body: postDescription\n        });\n        setIsEditing(false);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            !isEditing && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Text, {\n                children: post.body\n            }, void 0, false, {\n                fileName: \"/Users/lm/Workspace/kolab-connect/src/components/posts/postCard/postCardDescription.tsx\",\n                lineNumber: 38,\n                columnNumber: 22\n            }, this),\n            isEditing && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.InputGroup, {\n                size: \"md\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Textarea, {\n                        value: postDescription,\n                        onChange: (e)=>setPostDescription(e.target.value),\n                        size: \"sm\",\n                        onKeyDown: handleInputKeydown\n                    }, void 0, false, {\n                        fileName: \"/Users/lm/Workspace/kolab-connect/src/components/posts/postCard/postCardDescription.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.InputRightElement, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.IconButton, {\n                            variant: \"text\",\n                            \"aria-label\": \"Search\",\n                            size: \"lg\",\n                            icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_MdSave_react_icons_md__WEBPACK_IMPORTED_MODULE_9__.MdSave, {}, void 0, false, {\n                                fileName: \"/Users/lm/Workspace/kolab-connect/src/components/posts/postCard/postCardDescription.tsx\",\n                                lineNumber: 52,\n                                columnNumber: 21\n                            }, void 0),\n                            onClick: handleOnSave\n                        }, void 0, false, {\n                            fileName: \"/Users/lm/Workspace/kolab-connect/src/components/posts/postCard/postCardDescription.tsx\",\n                            lineNumber: 48,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/lm/Workspace/kolab-connect/src/components/posts/postCard/postCardDescription.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/lm/Workspace/kolab-connect/src/components/posts/postCard/postCardDescription.tsx\",\n                lineNumber: 40,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(PostCardDescription, \"NuviWnllPDNHlt9+SKOmu0Doiyc=\");\n_c = PostCardDescription;\nvar _c;\n$RefreshReg$(_c, \"PostCardDescription\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL3Bvc3RzL3Bvc3RDYXJkL3Bvc3RDYXJkRGVzY3JpcHRpb24udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTRDO0FBRUQ7QUFPakI7QUFDbUI7QUFDTDtBQU16QixTQUFTVSxvQkFBb0IsS0FFakI7UUFGaUIsRUFDMUNDLElBQUksRUFDcUIsR0FGaUI7O0lBRzFDLE1BQU0sQ0FBQ0MsaUJBQWlCQyxtQkFBbUIsR0FBR0wsK0NBQVFBLENBQVNHLEtBQUtHLElBQUk7SUFDeEUsTUFBTSxFQUFFQyxTQUFTLEVBQUVDLFlBQVksRUFBRSxHQUFHVCxpREFBVUEsQ0FBQ1AscURBQWVBO0lBRTlELE1BQU1pQixxQkFBcUIsQ0FBQ0M7UUFDMUIsSUFBSUEsRUFBRUMsR0FBRyxLQUFLLFVBQVU7WUFDdEJOLG1CQUFtQkYsS0FBS0csSUFBSTtZQUM1QkUsYUFBYTtRQUNmO0lBQ0Y7SUFFQSxNQUFNSSxlQUFlO1FBQ25CbkIsd0RBQWFBLENBQUM7WUFBRSxHQUFHVSxJQUFJO1lBQUVHLE1BQU1GO1FBQWdCO1FBQy9DSSxhQUFhO0lBQ2Y7SUFFQSxxQkFDRTs7WUFDRyxDQUFDRCwyQkFBYSw4REFBQ1Ysa0RBQUlBOzBCQUFFTSxLQUFLRyxJQUFJOzs7Ozs7WUFDOUJDLDJCQUNDLDhEQUFDWix3REFBVUE7Z0JBQUNrQixNQUFLOztrQ0FDZiw4REFBQ2Ysc0RBQVFBO3dCQUNQZ0IsT0FBT1Y7d0JBQ1BXLFVBQVVMLENBQUFBLElBQUtMLG1CQUFtQkssRUFBRU0sTUFBTSxDQUFDRixLQUFLO3dCQUNoREQsTUFBSzt3QkFDTEksV0FBV1I7Ozs7OztrQ0FFYiw4REFBQ2IsK0RBQWlCQTtrQ0FDaEIsNEVBQUNGLHdEQUFVQTs0QkFDVHdCLFNBQVE7NEJBQ1JDLGNBQVc7NEJBQ1hOLE1BQUs7NEJBQ0xPLG9CQUFNLDhEQUFDbkIsZ0ZBQU1BOzs7Ozs0QkFDYm9CLFNBQVNUOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT3ZCO0dBMUN3QlY7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvcG9zdHMvcG9zdENhcmQvcG9zdENhcmREZXNjcmlwdGlvbi50c3g/ZjVkNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQb3N0Q2FyZENvbnRleHQgfSBmcm9tICdAL2NvbnRleHQnO1xuaW1wb3J0IHsgUG9zdCB9IGZyb20gJ0AvbW9kZWxzJztcbmltcG9ydCB7IHNhdmVMb2NhbFBvc3QgfSBmcm9tICdAL3NlcnZpY2VzJztcbmltcG9ydCB7XG4gIEljb25CdXR0b24sXG4gIElucHV0R3JvdXAsXG4gIElucHV0UmlnaHRFbGVtZW50LFxuICBUZXh0LFxuICBUZXh0YXJlYVxufSBmcm9tICdAY2hha3JhLXVpL3JlYWN0JztcbmltcG9ydCB7IHVzZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTWRTYXZlIH0gZnJvbSAncmVhY3QtaWNvbnMvbWQnO1xuXG50eXBlIFBvc3RDYXJkRGVzY3JpcHRpb25Qcm9wcyA9IHtcbiAgcG9zdDogUG9zdDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBvc3RDYXJkRGVzY3JpcHRpb24oe1xuICBwb3N0XG59OiBQb3N0Q2FyZERlc2NyaXB0aW9uUHJvcHMpIHtcbiAgY29uc3QgW3Bvc3REZXNjcmlwdGlvbiwgc2V0UG9zdERlc2NyaXB0aW9uXSA9IHVzZVN0YXRlPHN0cmluZz4ocG9zdC5ib2R5KTtcbiAgY29uc3QgeyBpc0VkaXRpbmcsIHNldElzRWRpdGluZyB9ID0gdXNlQ29udGV4dChQb3N0Q2FyZENvbnRleHQpO1xuXG4gIGNvbnN0IGhhbmRsZUlucHV0S2V5ZG93biA9IChlOiBSZWFjdC5LZXlib2FyZEV2ZW50PEhUTUxUZXh0QXJlYUVsZW1lbnQ+KSA9PiB7XG4gICAgaWYgKGUua2V5ID09PSAnRXNjYXBlJykge1xuICAgICAgc2V0UG9zdERlc2NyaXB0aW9uKHBvc3QuYm9keSk7XG4gICAgICBzZXRJc0VkaXRpbmcoZmFsc2UpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBoYW5kbGVPblNhdmUgPSAoKSA9PiB7XG4gICAgc2F2ZUxvY2FsUG9zdCh7IC4uLnBvc3QsIGJvZHk6IHBvc3REZXNjcmlwdGlvbiB9KTtcbiAgICBzZXRJc0VkaXRpbmcoZmFsc2UpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHshaXNFZGl0aW5nICYmIDxUZXh0Pntwb3N0LmJvZHl9PC9UZXh0Pn1cbiAgICAgIHtpc0VkaXRpbmcgJiYgKFxuICAgICAgICA8SW5wdXRHcm91cCBzaXplPVwibWRcIj5cbiAgICAgICAgICA8VGV4dGFyZWFcbiAgICAgICAgICAgIHZhbHVlPXtwb3N0RGVzY3JpcHRpb259XG4gICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRQb3N0RGVzY3JpcHRpb24oZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgc2l6ZT1cInNtXCJcbiAgICAgICAgICAgIG9uS2V5RG93bj17aGFuZGxlSW5wdXRLZXlkb3dufVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPElucHV0UmlnaHRFbGVtZW50PlxuICAgICAgICAgICAgPEljb25CdXR0b25cbiAgICAgICAgICAgICAgdmFyaWFudD1cInRleHRcIlxuICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiU2VhcmNoXCJcbiAgICAgICAgICAgICAgc2l6ZT1cImxnXCJcbiAgICAgICAgICAgICAgaWNvbj17PE1kU2F2ZSAvPn1cbiAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlT25TYXZlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0lucHV0UmlnaHRFbGVtZW50PlxuICAgICAgICA8L0lucHV0R3JvdXA+XG4gICAgICApfVxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlBvc3RDYXJkQ29udGV4dCIsInNhdmVMb2NhbFBvc3QiLCJJY29uQnV0dG9uIiwiSW5wdXRHcm91cCIsIklucHV0UmlnaHRFbGVtZW50IiwiVGV4dCIsIlRleHRhcmVhIiwidXNlQ29udGV4dCIsInVzZVN0YXRlIiwiTWRTYXZlIiwiUG9zdENhcmREZXNjcmlwdGlvbiIsInBvc3QiLCJwb3N0RGVzY3JpcHRpb24iLCJzZXRQb3N0RGVzY3JpcHRpb24iLCJib2R5IiwiaXNFZGl0aW5nIiwic2V0SXNFZGl0aW5nIiwiaGFuZGxlSW5wdXRLZXlkb3duIiwiZSIsImtleSIsImhhbmRsZU9uU2F2ZSIsInNpemUiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwidGFyZ2V0Iiwib25LZXlEb3duIiwidmFyaWFudCIsImFyaWEtbGFiZWwiLCJpY29uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/posts/postCard/postCardDescription.tsx\n"));

/***/ })

});