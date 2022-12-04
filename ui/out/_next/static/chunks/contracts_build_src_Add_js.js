"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["contracts_build_src_Add_js"],{

/***/ "../contracts/build/src/Add.js":
/*!*************************************!*\
  !*** ../contracts/build/src/Add.js ***!
  \*************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Add\": function() { return /* binding */ Add; }\n/* harmony export */ });\n/* harmony import */ var snarkyjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! snarkyjs */ \"./node_modules/snarkyjs/dist/web/index.js\");\nvar __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nvar __metadata = (undefined && undefined.__metadata) || function (k, v) {\r\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\r\n};\r\n\r\n/**\r\n * Basic Example\r\n * See https://docs.minaprotocol.com/zkapps for more info.\r\n *\r\n * The Add contract initializes the state variable 'num' to be a Field(1) value by default when deployed.\r\n * When the 'update' method is called, the Add contract adds Field(2) to its 'num' contract state.\r\n *\r\n * This file is safe to delete and replace with your own contract.\r\n */\r\nclass Add extends snarkyjs__WEBPACK_IMPORTED_MODULE_0__.SmartContract {\r\n    constructor() {\r\n        super(...arguments);\r\n        this.num = (0,snarkyjs__WEBPACK_IMPORTED_MODULE_0__.State)();\r\n    }\r\n    init() {\r\n        super.init();\r\n        this.num.set((0,snarkyjs__WEBPACK_IMPORTED_MODULE_0__.Field)(1));\r\n    }\r\n    update() {\r\n        const currentState = this.num.get();\r\n        this.num.assertEquals(currentState); // precondition that links this.num.get() to the actual on-chain state\r\n        const newState = currentState.add(2);\r\n        this.num.set(newState);\r\n    }\r\n}\r\n__decorate([\r\n    (0,snarkyjs__WEBPACK_IMPORTED_MODULE_0__.state)(snarkyjs__WEBPACK_IMPORTED_MODULE_0__.Field),\r\n    __metadata(\"design:type\", Object)\r\n], Add.prototype, \"num\", void 0);\r\n__decorate([\r\n    snarkyjs__WEBPACK_IMPORTED_MODULE_0__.method,\r\n    __metadata(\"design:type\", Function),\r\n    __metadata(\"design:paramtypes\", []),\r\n    __metadata(\"design:returntype\", void 0)\r\n], Add.prototype, \"update\", null);\r\n//# sourceMappingURL=Add.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vY29udHJhY3RzL2J1aWxkL3NyYy9BZGQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxrQkFBa0IsU0FBSSxJQUFJLFNBQUk7QUFDOUI7QUFDQTtBQUNBLDZDQUE2QyxRQUFRO0FBQ3JEO0FBQ0E7QUFDQSxrQkFBa0IsU0FBSSxJQUFJLFNBQUk7QUFDOUI7QUFDQTtBQUNzRTtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTyxrQkFBa0IsbURBQWE7QUFDdEM7QUFDQTtBQUNBLG1CQUFtQiwrQ0FBSztBQUN4QjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsK0NBQUs7QUFDMUI7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLCtDQUFLLENBQUMsMkNBQUs7QUFDZjtBQUNBO0FBQ0E7QUFDQSxJQUFJLDRDQUFNO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi4vY29udHJhY3RzL2J1aWxkL3NyYy9BZGQuanM/ODVlOCJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59O1xyXG52YXIgX19tZXRhZGF0YSA9ICh0aGlzICYmIHRoaXMuX19tZXRhZGF0YSkgfHwgZnVuY3Rpb24gKGssIHYpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShrLCB2KTtcclxufTtcclxuaW1wb3J0IHsgRmllbGQsIFNtYXJ0Q29udHJhY3QsIHN0YXRlLCBTdGF0ZSwgbWV0aG9kIH0gZnJvbSAnc25hcmt5anMnO1xyXG4vKipcclxuICogQmFzaWMgRXhhbXBsZVxyXG4gKiBTZWUgaHR0cHM6Ly9kb2NzLm1pbmFwcm90b2NvbC5jb20vemthcHBzIGZvciBtb3JlIGluZm8uXHJcbiAqXHJcbiAqIFRoZSBBZGQgY29udHJhY3QgaW5pdGlhbGl6ZXMgdGhlIHN0YXRlIHZhcmlhYmxlICdudW0nIHRvIGJlIGEgRmllbGQoMSkgdmFsdWUgYnkgZGVmYXVsdCB3aGVuIGRlcGxveWVkLlxyXG4gKiBXaGVuIHRoZSAndXBkYXRlJyBtZXRob2QgaXMgY2FsbGVkLCB0aGUgQWRkIGNvbnRyYWN0IGFkZHMgRmllbGQoMikgdG8gaXRzICdudW0nIGNvbnRyYWN0IHN0YXRlLlxyXG4gKlxyXG4gKiBUaGlzIGZpbGUgaXMgc2FmZSB0byBkZWxldGUgYW5kIHJlcGxhY2Ugd2l0aCB5b3VyIG93biBjb250cmFjdC5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBBZGQgZXh0ZW5kcyBTbWFydENvbnRyYWN0IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XHJcbiAgICAgICAgdGhpcy5udW0gPSBTdGF0ZSgpO1xyXG4gICAgfVxyXG4gICAgaW5pdCgpIHtcclxuICAgICAgICBzdXBlci5pbml0KCk7XHJcbiAgICAgICAgdGhpcy5udW0uc2V0KEZpZWxkKDEpKTtcclxuICAgIH1cclxuICAgIHVwZGF0ZSgpIHtcclxuICAgICAgICBjb25zdCBjdXJyZW50U3RhdGUgPSB0aGlzLm51bS5nZXQoKTtcclxuICAgICAgICB0aGlzLm51bS5hc3NlcnRFcXVhbHMoY3VycmVudFN0YXRlKTsgLy8gcHJlY29uZGl0aW9uIHRoYXQgbGlua3MgdGhpcy5udW0uZ2V0KCkgdG8gdGhlIGFjdHVhbCBvbi1jaGFpbiBzdGF0ZVxyXG4gICAgICAgIGNvbnN0IG5ld1N0YXRlID0gY3VycmVudFN0YXRlLmFkZCgyKTtcclxuICAgICAgICB0aGlzLm51bS5zZXQobmV3U3RhdGUpO1xyXG4gICAgfVxyXG59XHJcbl9fZGVjb3JhdGUoW1xyXG4gICAgc3RhdGUoRmllbGQpLFxyXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjp0eXBlXCIsIE9iamVjdClcclxuXSwgQWRkLnByb3RvdHlwZSwgXCJudW1cIiwgdm9pZCAwKTtcclxuX19kZWNvcmF0ZShbXHJcbiAgICBtZXRob2QsXHJcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnR5cGVcIiwgRnVuY3Rpb24pLFxyXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjpwYXJhbXR5cGVzXCIsIFtdKSxcclxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246cmV0dXJudHlwZVwiLCB2b2lkIDApXHJcbl0sIEFkZC5wcm90b3R5cGUsIFwidXBkYXRlXCIsIG51bGwpO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1BZGQuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///../contracts/build/src/Add.js\n"));

/***/ })

}]);