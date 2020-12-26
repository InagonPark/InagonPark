webpackHotUpdate_N_E("pages/index",{

/***/ "./src/resume/components/templates/ProjectSection/index.tsx":
/*!******************************************************************!*\
  !*** ./src/resume/components/templates/ProjectSection/index.tsx ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _atoms_Description__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../atoms/Description */ \"./src/resume/components/atoms/Description/index.tsx\");\n/* harmony import */ var _atoms_Typography_Title__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../atoms/Typography/Title */ \"./src/resume/components/atoms/Typography/Title.tsx\");\n/* harmony import */ var _atoms_Typography_Text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../atoms/Typography/Text */ \"./src/resume/components/atoms/Typography/Text.tsx\");\n/* harmony import */ var _atoms_Space__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../atoms/Space */ \"./src/resume/components/atoms/Space/index.tsx\");\n/* harmony import */ var _atoms_List__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../atoms/List */ \"./src/resume/components/atoms/List/index.tsx\");\n/* harmony import */ var _context_PayloadContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../context/PayloadContext */ \"./src/resume/context/PayloadContext.tsx\");\n/* harmony import */ var _atoms_Tag__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../atoms/Tag */ \"./src/resume/components/atoms/Tag/index.tsx\");\n\n\n\nvar _jsxFileName = \"/Users/parkjonghyeok/Workspace/resume-kit/src/resume/components/templates/ProjectSection/index.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nfunction ProjectContent(_ref) {\n  var _this = this;\n\n  var projects = _ref.projects;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: projects.map(function (_ref2, index) {\n      var id = _ref2.id,\n          title = _ref2.title,\n          startedAt = _ref2.startedAt,\n          endedAt = _ref2.endedAt,\n          description = _ref2.description,\n          tasks = _ref2.tasks,\n          skills = _ref2.skills;\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        style: {\n          marginBottom: index === projects.length - 1 ? 0 : 42\n        },\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_atoms_Typography_Title__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n          level: 4,\n          children: title\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 19,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_atoms_Typography_Text__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n          italic: true,\n          children: [startedAt, \" ~ \", endedAt]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 20,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_atoms_Space__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n          top: 12,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_atoms_Typography_Title__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            level: 5,\n            children: \"Description\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 25,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_atoms_Typography_Text__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            block: true,\n            children: description\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 26,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 24,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_atoms_Space__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n          top: 12,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_atoms_List__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n            title: \"What I did\",\n            items: tasks.map(function (task) {\n              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {\n                children: task.title\n              }, task.id, false, {\n                fileName: _jsxFileName,\n                lineNumber: 32,\n                columnNumber: 17\n              }, _this);\n            })\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 29,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 28,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_atoms_Space__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n          top: 12,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_atoms_Typography_Title__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            level: 5,\n            children: \"Spec Sheet\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 37,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_atoms_Space__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n            top: 7,\n            children: skills.map(function (skill, index) {\n              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_atoms_Tag__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                text: skill\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 40,\n                columnNumber: 17\n              }, _this);\n            })\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 38,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 36,\n          columnNumber: 11\n        }, _this)]\n      }, id, true, {\n        fileName: _jsxFileName,\n        lineNumber: 18,\n        columnNumber: 9\n      }, _this);\n    })\n  }, void 0, false);\n}\n\n_c = ProjectContent;\n\nfunction ProjectSection() {\n  _s();\n\n  var _this2 = this;\n\n  var _usePayload = Object(_context_PayloadContext__WEBPACK_IMPORTED_MODULE_7__[\"usePayload\"])(),\n      data = _usePayload.project.data,\n      career = _usePayload.career;\n\n  var groupByCorp = data.reduce(function (prev, project) {\n    prev[project.where.id] = prev[project.where.id] || [];\n    prev[project.where.id].push(project);\n    return prev;\n  }, {});\n\n  var findCorpById = function findCorpById(id) {\n    return career.data.find(function (c) {\n      return c.id === id;\n    });\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_atoms_Space__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    section: true,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_atoms_Typography_Title__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      level: 3,\n      section: true,\n      children: \"WORK EXPERIENCE\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 7\n    }, this), Object.keys(groupByCorp).map(function (key) {\n      var corp = findCorpById(key);\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_atoms_Description__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        left: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_atoms_Space__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_atoms_Typography_Title__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            level: 4,\n            children: corp.title\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 78,\n            columnNumber: 17\n          }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_atoms_Typography_Text__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            block: true,\n            children: corp.subtitle\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 79,\n            columnNumber: 17\n          }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_atoms_Typography_Text__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            children: [corp.startedAt, \" ~ \", corp.endedAt]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 80,\n            columnNumber: 17\n          }, _this2)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 77,\n          columnNumber: 15\n        }, _this2),\n        right: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(ProjectContent, {\n          projects: groupByCorp[key]\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 85,\n          columnNumber: 20\n        }, _this2)\n      }, key, false, {\n        fileName: _jsxFileName,\n        lineNumber: 74,\n        columnNumber: 11\n      }, _this2);\n    })]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 66,\n    columnNumber: 5\n  }, this);\n}\n\n_s(ProjectSection, \"a+9aAiuQlBjKUe91GQ6Wpmt4auc=\", false, function () {\n  return [_context_PayloadContext__WEBPACK_IMPORTED_MODULE_7__[\"usePayload\"]];\n});\n\n_c2 = ProjectSection;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProjectSection);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"ProjectContent\");\n$RefreshReg$(_c2, \"ProjectSection\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3Jlc3VtZS9jb21wb25lbnRzL3RlbXBsYXRlcy9Qcm9qZWN0U2VjdGlvbi9pbmRleC50c3g/NTMyZiJdLCJuYW1lcyI6WyJQcm9qZWN0Q29udGVudCIsInByb2plY3RzIiwibWFwIiwiaW5kZXgiLCJpZCIsInRpdGxlIiwic3RhcnRlZEF0IiwiZW5kZWRBdCIsImRlc2NyaXB0aW9uIiwidGFza3MiLCJza2lsbHMiLCJtYXJnaW5Cb3R0b20iLCJsZW5ndGgiLCJ0YXNrIiwic2tpbGwiLCJQcm9qZWN0U2VjdGlvbiIsInVzZVBheWxvYWQiLCJkYXRhIiwicHJvamVjdCIsImNhcmVlciIsImdyb3VwQnlDb3JwIiwicmVkdWNlIiwicHJldiIsIndoZXJlIiwicHVzaCIsImZpbmRDb3JwQnlJZCIsImZpbmQiLCJjIiwiT2JqZWN0Iiwia2V5cyIsImtleSIsImNvcnAiLCJzdWJ0aXRsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFNQSxTQUFTQSxjQUFULE9BQTJEO0FBQUE7O0FBQUEsTUFBakNDLFFBQWlDLFFBQWpDQSxRQUFpQztBQUN6RCxzQkFDRTtBQUFBLGNBQ0dBLFFBQVEsQ0FBQ0MsR0FBVCxDQUFhLGlCQUFnRUMsS0FBaEU7QUFBQSxVQUFHQyxFQUFILFNBQUdBLEVBQUg7QUFBQSxVQUFPQyxLQUFQLFNBQU9BLEtBQVA7QUFBQSxVQUFjQyxTQUFkLFNBQWNBLFNBQWQ7QUFBQSxVQUF5QkMsT0FBekIsU0FBeUJBLE9BQXpCO0FBQUEsVUFBa0NDLFdBQWxDLFNBQWtDQSxXQUFsQztBQUFBLFVBQStDQyxLQUEvQyxTQUErQ0EsS0FBL0M7QUFBQSxVQUFzREMsTUFBdEQsU0FBc0RBLE1BQXREO0FBQUEsMEJBQ1o7QUFBYyxhQUFLLEVBQUU7QUFBRUMsc0JBQVksRUFBRVIsS0FBSyxLQUFLRixRQUFRLENBQUNXLE1BQVQsR0FBa0Is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aW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IERlc2NyaXB0aW9uIGZyb20gJ0BSZXN1bWUvY29tcG9uZW50cy9hdG9tcy9EZXNjcmlwdGlvbidcbmltcG9ydCBUaXRsZSBmcm9tICdAUmVzdW1lL2NvbXBvbmVudHMvYXRvbXMvVHlwb2dyYXBoeS9UaXRsZSdcbmltcG9ydCBUZXh0IGZyb20gJ0BSZXN1bWUvY29tcG9uZW50cy9hdG9tcy9UeXBvZ3JhcGh5L1RleHQnXG5pbXBvcnQgU3BhY2UgZnJvbSAnQFJlc3VtZS9jb21wb25lbnRzL2F0b21zL1NwYWNlJ1xuaW1wb3J0IExpc3QgZnJvbSAnQFJlc3VtZS9jb21wb25lbnRzL2F0b21zL0xpc3QnXG5pbXBvcnQgeyB1c2VQYXlsb2FkIH0gZnJvbSAnQFJlc3VtZS9jb250ZXh0L1BheWxvYWRDb250ZXh0J1xuaW1wb3J0IFRhZyBmcm9tICdAUmVzdW1lL2NvbXBvbmVudHMvYXRvbXMvVGFnJ1xuaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gJ0BTaGFyZWQvdHlwZXMvUHJvamVjdCdcblxudHlwZSBQcm9qZWN0Q29udGVudFByb3BzID0ge1xuICBwcm9qZWN0czogUHJvamVjdFtdXG59XG5mdW5jdGlvbiBQcm9qZWN0Q29udGVudCh7IHByb2plY3RzIH06IFByb2plY3RDb250ZW50UHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge3Byb2plY3RzLm1hcCgoeyBpZCwgdGl0bGUsIHN0YXJ0ZWRBdCwgZW5kZWRBdCwgZGVzY3JpcHRpb24sIHRhc2tzLCBza2lsbHMgfSwgaW5kZXgpID0+IChcbiAgICAgICAgPGRpdiBrZXk9e2lkfSBzdHlsZT17eyBtYXJnaW5Cb3R0b206IGluZGV4ID09PSBwcm9qZWN0cy5sZW5ndGggLSAxID8gMCA6IDQyIH19PlxuICAgICAgICAgIDxUaXRsZSBsZXZlbD17NH0+e3RpdGxlfTwvVGl0bGU+XG4gICAgICAgICAgPFRleHQgaXRhbGljPlxuICAgICAgICAgICAge3N0YXJ0ZWRBdH0gfiB7ZW5kZWRBdH1cbiAgICAgICAgICA8L1RleHQ+XG5cbiAgICAgICAgICA8U3BhY2UgdG9wPXsxMn0+XG4gICAgICAgICAgICA8VGl0bGUgbGV2ZWw9ezV9PkRlc2NyaXB0aW9uPC9UaXRsZT5cbiAgICAgICAgICAgIDxUZXh0IGJsb2NrPntkZXNjcmlwdGlvbn08L1RleHQ+XG4gICAgICAgICAgPC9TcGFjZT5cbiAgICAgICAgICA8U3BhY2UgdG9wPXsxMn0+XG4gICAgICAgICAgICA8TGlzdFxuICAgICAgICAgICAgICB0aXRsZT1cIldoYXQgSSBkaWRcIlxuICAgICAgICAgICAgICBpdGVtcz17dGFza3MubWFwKCh0YXNrKSA9PiAoXG4gICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50IGtleT17dGFzay5pZH0+e3Rhc2sudGl0bGV9PC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvU3BhY2U+XG4gICAgICAgICAgPFNwYWNlIHRvcD17MTJ9PlxuICAgICAgICAgICAgPFRpdGxlIGxldmVsPXs1fT5TcGVjIFNoZWV0PC9UaXRsZT5cbiAgICAgICAgICAgIDxTcGFjZSB0b3A9ezd9PlxuICAgICAgICAgICAgICB7c2tpbGxzLm1hcCgoc2tpbGwsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgPFRhZyB0ZXh0PXtza2lsbH0gLz5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L1NwYWNlPlxuICAgICAgICAgIDwvU3BhY2U+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSl9XG4gICAgPC8+XG4gIClcbn1cblxuZnVuY3Rpb24gUHJvamVjdFNlY3Rpb24oKSB7XG4gIGNvbnN0IHtcbiAgICBwcm9qZWN0OiB7IGRhdGEgfSxcbiAgICBjYXJlZXIsXG4gIH0gPSB1c2VQYXlsb2FkKClcblxuICBjb25zdCBncm91cEJ5Q29ycCA9IGRhdGEucmVkdWNlPHsgW2tleTogc3RyaW5nXTogUHJvamVjdFtdIH0+KChwcmV2LCBwcm9qZWN0KSA9PiB7XG4gICAgcHJldltwcm9qZWN0LndoZXJlLmlkXSA9IHByZXZbcHJvamVjdC53aGVyZS5pZF0gfHwgW11cbiAgICBwcmV2W3Byb2plY3Qud2hlcmUuaWRdLnB1c2gocHJvamVjdClcblxuICAgIHJldHVybiBwcmV2XG4gIH0sIHt9KVxuXG4gIGNvbnN0IGZpbmRDb3JwQnlJZCA9IChpZDogc3RyaW5nKSA9PiBjYXJlZXIuZGF0YS5maW5kKChjKSA9PiBjLmlkID09PSBpZCkhXG5cbiAgcmV0dXJuIChcbiAgICA8U3BhY2Ugc2VjdGlvbj5cbiAgICAgIDxUaXRsZSBsZXZlbD17M30gc2VjdGlvbj5cbiAgICAgICAgV09SSyBFWFBFUklFTkNFXG4gICAgICA8L1RpdGxlPlxuXG4gICAgICB7T2JqZWN0LmtleXMoZ3JvdXBCeUNvcnApLm1hcCgoa2V5KSA9PiB7XG4gICAgICAgIGNvbnN0IGNvcnAgPSBmaW5kQ29ycEJ5SWQoa2V5KVxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxEZXNjcmlwdGlvblxuICAgICAgICAgICAga2V5PXtrZXl9XG4gICAgICAgICAgICBsZWZ0PXtcbiAgICAgICAgICAgICAgPFNwYWNlPlxuICAgICAgICAgICAgICAgIDxUaXRsZSBsZXZlbD17NH0+e2NvcnAudGl0bGV9PC9UaXRsZT5cbiAgICAgICAgICAgICAgICA8VGV4dCBibG9jaz57Y29ycC5zdWJ0aXRsZX08L1RleHQ+XG4gICAgICAgICAgICAgICAgPFRleHQ+XG4gICAgICAgICAgICAgICAgICB7Y29ycC5zdGFydGVkQXR9IH4ge2NvcnAuZW5kZWRBdH1cbiAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgIDwvU3BhY2U+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByaWdodD17PFByb2plY3RDb250ZW50IHByb2plY3RzPXtncm91cEJ5Q29ycFtrZXldfSAvPn1cbiAgICAgICAgICAvPlxuICAgICAgICApXG4gICAgICB9KX1cbiAgICA8L1NwYWNlPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3RTZWN0aW9uXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/resume/components/templates/ProjectSection/index.tsx\n");

/***/ })

})