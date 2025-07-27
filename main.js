/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\n  box-sizing: border-box;\n}\n\nbody {\n  background-color: black;\n}\n\nmain {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 2fr 1fr;\n  grid-template-areas:\n    'player1 player2'\n    'button button'\n  ;\n}\n\n.board {\n  background-color: blue;\n  width: min-content;\n  margin: 50px;\n}\n\n.board-square {\n  width: 50px;\n  height: 50px;\n  border: 1px solid black;\n\n}\n\n.y-box {\n  display: flex;\n}\n\n.x-box {\n  background-color: purple;\n\n}\n\n.ship {\n  background-color: blue;\n}\n\n.missed {\n  background-color: red;\n}\n\n.hit {\n  background-color: green;\n}\n\n.board.player1 {\n  grid-area: player1;\n}\n\n.board.player2 {\n  grid-area: player2;\n}\n\n.ships-container {\n  display: flex;\n  justify-content: space-evenly;\n}\n\n.ships-container.player1 {\n  grid-area: ships1\n}\n\n.ships-container.player2 {\n  grid-area: ships2\n}\n\n.random-button {\n  grid-area: button;\n}\n\nbutton {\n  width: 100px;\n  height: 50px;\n  place-self: center;\n}\n\nbutton:hover {\n  cursor: pointer;\n}\n\n.modal {\n  width: 100vw;\n  height: 100vh;\n  position: absolute;\n  top: 0;\n  left: 0;\n  background-color: #ddd2;\n  backdrop-filter: blur(5px);\n  display: grid;\n  place-content: center;\n}\n\n.winner-text {\n  font-size: 2rem;\n  color: white;\n}\n\n.board-name.player1 {\n  grid-area: player1;\n  height: 40px;\n  text-align: center;\n  color: white;\n  font-size: 2rem;\n}\n\n.board-name.player2 {\n  grid-area: player2;\n  height: 40px;\n  text-align: center;\n  color: white;\n  font-size: 2rem;\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship/./src/styles.css?./node_modules/css-loader/dist/cjs.js\n}");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("{\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/api.js?\n}");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("{\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/noSourceMaps.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("{\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("{\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertBySelector.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("{\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertStyleElement.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("{\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleDomAPI.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("{\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleTagTransform.js?\n}");

/***/ }),

/***/ "./src/controllers/DOMController.js":
/*!******************************************!*\
  !*** ./src/controllers/DOMController.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DOMController: () => (/* binding */ DOMController)\n/* harmony export */ });\n/* harmony import */ var _services_listeners_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/listeners.js */ \"./src/services/listeners.js\");\n\n\n\nclass DOMController {\n  static #main = document.querySelector('main');\n\n  static createBoard(player) {\n    const board = player.gameboard.board;\n    const boardDiv = document.createElement('div');\n    boardDiv.classList.add('board', player.name);\n    for (let y = 0; y < board.length; y++) {\n      const yCoordinate = board[y];\n      const yDiv = document.createElement('div');\n      yDiv.classList.add('y-box');\n      for (let x = 0; x < yCoordinate.length; x++) {\n        const xCoordinate = yCoordinate[x];\n        const xDiv = document.createElement('div');\n        xDiv.classList.add('board-square', 'x-box');\n        xDiv.dataset.coordinate = [x, y];\n\n        // If the coordinate wasn't hit or isn't any ship in there add the event\n        if (!xCoordinate || xCoordinate === 'ship') {\n          xDiv.addEventListener('click', _services_listeners_js__WEBPACK_IMPORTED_MODULE_0__.attackHandler);\n        }\n\n        // Not show the opponent's ships\n        if (\n          xCoordinate != 'ship' ||\n          (xCoordinate == 'ship' && player.type == 'human')\n        ) {\n          xDiv.classList.add(`${xCoordinate}`);\n        }\n        yDiv.appendChild(xDiv);\n      }\n      boardDiv.appendChild(yDiv);\n    }\n    if (!player.status) {\n      boardDiv.dataset.status = 'active';\n    } else {\n      boardDiv.dataset.status = 'inactive';\n    }\n    return boardDiv;\n  }\n  static renderBoard(player) {\n    const previousBoardDiv = document.querySelector(`.${player.name}`);\n    const randomButton = document.querySelector('.random-button');\n    if (previousBoardDiv) {\n      previousBoardDiv.remove();\n    }\n    if (randomButton) {\n      randomButton.remove();\n    }\n    const boardName = document.createElement('span');\n    boardName.textContent = `${player.name}'s board`;\n    boardName.classList.add('board-name', player.name);\n    const boardDiv = DOMController.createBoard(player);\n    DOMController.main.append(boardName, boardDiv);\n  }\n  static placeShipOnBoard(ship, player, coordinates) {\n    player.gameboard.placeShip(ship, coordinates);\n    DOMController.renderBoard(player);\n  }\n  static createShip(ship) {\n    const shipDiv = document.createElement('div');\n    for (let i = 0; i < ship.length; i++) {\n      const div = document.createElement('div');\n      div.classList.add('board-square', 'ship');\n      shipDiv.appendChild(div);\n    }\n    return shipDiv;\n  }\n  static renderShip(ship, player) {\n    const shipDiv = DOMController.createShip(ship);\n    let shipsContainer = document.querySelector(`.ships-container.${player.name}`);\n    if (!shipsContainer) {\n      shipsContainer = document.createElement('div');\n    }\n    shipsContainer.classList.add('ships-container', player.name);\n    shipsContainer.appendChild(shipDiv);\n    DOMController.main.appendChild(shipsContainer);\n  }\n\n  static createRandomShipsPlacementButton() {\n    const button = document.createElement('button');\n    button.addEventListener('click', _services_listeners_js__WEBPACK_IMPORTED_MODULE_0__.randomizeShipsHandler);\n    button.textContent = 'Set ships randomly';\n    button.classList.add('random-button');\n    DOMController.main.appendChild(button);\n  }\n\n  static get main() {\n    return DOMController.#main;\n  }\n\n}\n\n\n//# sourceURL=webpack://battleship/./src/controllers/DOMController.js?\n}");

/***/ }),

/***/ "./src/controllers/GameController.js":
/*!*******************************************!*\
  !*** ./src/controllers/GameController.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GameController: () => (/* binding */ GameController)\n/* harmony export */ });\n/* harmony import */ var _models_Player_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/Player.js */ \"./src/models/Player.js\");\n/* harmony import */ var _models_Gameboard_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/Gameboard.js */ \"./src/models/Gameboard.js\");\n/* harmony import */ var _DOMController_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DOMController.js */ \"./src/controllers/DOMController.js\");\n/* harmony import */ var _services_createRandomCoordinates_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/createRandomCoordinates.js */ \"./src/services/createRandomCoordinates.js\");\n/* harmony import */ var _views_modal_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../views/modal.js */ \"./src/views/modal.js\");\n\n\n\n\n\n\nclass GameController {\n  static #player1;\n  static #player2;\n  static #gameboard1;\n  static #gameboard2;\n\n  static startGame() {\n    GameController.#gameboard1 = new _models_Gameboard_js__WEBPACK_IMPORTED_MODULE_1__.Gameboard(8, 8);\n    GameController.#gameboard2 = new _models_Gameboard_js__WEBPACK_IMPORTED_MODULE_1__.Gameboard(8, 8);\n    GameController.#player1 =\n      new _models_Player_js__WEBPACK_IMPORTED_MODULE_0__.Player(GameController.gameboard1, 'player1');\n    GameController.#player2 =\n      new _models_Player_js__WEBPACK_IMPORTED_MODULE_0__.Player(GameController.gameboard2, 'player2');\n    GameController.player1.activate();\n    GameController.player1.type = 'human';\n    GameController.player2.type = 'bot';\n\n    _DOMController_js__WEBPACK_IMPORTED_MODULE_2__.DOMController.renderBoard(GameController.player1)\n    _DOMController_js__WEBPACK_IMPORTED_MODULE_2__.DOMController.renderBoard(GameController.player2)\n    _DOMController_js__WEBPACK_IMPORTED_MODULE_2__.DOMController.createRandomShipsPlacementButton();\n  }\n  static getCurrentPlayer() {\n    if (GameController.player1.status && !GameController.player2.status) {\n      return GameController.player1;\n    }\n    return GameController.player2;\n  }\n  static getCurrentOpponent() {\n    if (GameController.player1.status && !GameController.player2.status) {\n      return GameController.player2;\n    }\n    return GameController.player1;\n  }\n  static createBotAttack() {\n    // TODO: Move this function to Services layer\n    const opponent = GameController.getCurrentOpponent()\n    const opponentBoard = opponent.gameboard;\n\n    let xCoordinate = Math.floor(Math.random() * 8);\n    let yCoordinate = Math.floor(Math.random() * 8);\n    let point = opponentBoard.board[yCoordinate][xCoordinate];\n\n    let counter = opponentBoard.length;\n    while (point === 'missed' || point === 'hit') {\n      if (counter <= 0) return [0, 0];\n      xCoordinate = Math.floor(Math.random() * 8);\n      yCoordinate = Math.floor(Math.random() * 8);\n      point = opponentBoard.board[yCoordinate][xCoordinate];\n      counter--;\n    }\n    return [xCoordinate, yCoordinate];\n  }\n  static finishGame() {\n    const modal = new _views_modal_js__WEBPACK_IMPORTED_MODULE_4__.Modal();\n    const playerName = GameController.getCurrentPlayer().name;\n    modal.querySelector('p').textContent = `${playerName} won`;\n    _DOMController_js__WEBPACK_IMPORTED_MODULE_2__.DOMController.main.append(modal);\n  }\n  static placeShipsRandomly(...ships) {\n    const directions = ['horizontal', 'vertical'];\n    const currentPlayer = GameController.getCurrentPlayer();\n    const opponentPlayer = GameController.getCurrentOpponent();\n\n    // Current Player's board\n    ships.forEach((ship) => {\n      let direction = directions[Math.floor(Math.random() * 2)];\n      let coordinates;\n      if (direction == directions[0]) {\n        coordinates = (0,_services_createRandomCoordinates_js__WEBPACK_IMPORTED_MODULE_3__.createHorizontalCoordinates)(\n          currentPlayer.gameboard, ship.length\n        );\n      } else {\n        coordinates = (0,_services_createRandomCoordinates_js__WEBPACK_IMPORTED_MODULE_3__.createVerticalCoordinates)(\n          currentPlayer.gameboard, ship.length\n        );\n      }\n      _DOMController_js__WEBPACK_IMPORTED_MODULE_2__.DOMController.placeShipOnBoard(ship, currentPlayer, coordinates);\n    });\n\n    // Enemy's board\n    ships.forEach((ship) => {\n      let direction = directions[Math.floor(Math.random() * 2)];\n      let coordinates;\n      if (direction == directions[0]) {\n        coordinates = (0,_services_createRandomCoordinates_js__WEBPACK_IMPORTED_MODULE_3__.createHorizontalCoordinates)(\n          opponentPlayer.gameboard, ship.length\n        );\n      } else {\n        coordinates = (0,_services_createRandomCoordinates_js__WEBPACK_IMPORTED_MODULE_3__.createVerticalCoordinates)(\n          currentPlayer.gameboard, ship.length\n        );\n      }\n      _DOMController_js__WEBPACK_IMPORTED_MODULE_2__.DOMController.placeShipOnBoard(ship, opponentPlayer, coordinates);\n    });\n\n  }\n\n  static get gameboard1() {\n    return GameController.#gameboard1;\n  }\n  static get gameboard2() {\n    return GameController.#gameboard2;\n  }\n  static get player1() {\n    return GameController.#player1;\n  }\n  static get player2() {\n    return GameController.#player2;\n  }\n\n\n}\n\n\n//# sourceURL=webpack://battleship/./src/controllers/GameController.js?\n}");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _controllers_GameController_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controllers/GameController.js */ \"./src/controllers/GameController.js\");\n\n\n\n_controllers_GameController_js__WEBPACK_IMPORTED_MODULE_1__.GameController.startGame();\n\n\n//# sourceURL=webpack://battleship/./src/index.js?\n}");

/***/ }),

/***/ "./src/models/Gameboard.js":
/*!*********************************!*\
  !*** ./src/models/Gameboard.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Gameboard: () => (/* binding */ Gameboard)\n/* harmony export */ });\n\nclass Gameboard {\n  #board;\n  #shipsAndPositions;\n  #missedAttacks;\n  #length;\n\n  constructor(xAxis, yAxis) {\n    this.#length = [xAxis, yAxis];\n    this.#board = [];\n    this.#shipsAndPositions = [];\n    this.#missedAttacks = [];\n    for (let i = 0; i < yAxis; i++) {\n      let xRow = [];\n      for (let j = 0; j < xAxis; j++) {\n        xRow.push(false);\n      }\n      this.#board.push(xRow);\n    }\n  }\n  get shipsAndPositions() {\n    return this.#shipsAndPositions;\n  }\n  get missedAttacks() {\n    return this.#missedAttacks;\n  }\n  get board() {\n    return this.#board\n  }\n  get length() {\n    return this.#length;\n  }\n  placeShip(ship, coordinates) {\n    this.#shipsAndPositions.push({\n      ship,\n      position: coordinates,\n    });\n    for (let coordinate of coordinates) {\n      const x = coordinate[0];\n      const y = coordinate[1];\n      this.#board[y][x] = 'ship';\n    }\n  }\n  receiveAttack(xAxis, yAxis) {\n    const coordinates = [xAxis, yAxis];\n    for (let shipAndPositionPair of this.shipsAndPositions) {\n      for (let xyCoordinates of shipAndPositionPair.position) {\n        if (xyCoordinates[0] === xAxis && xyCoordinates[1] === yAxis) {\n          shipAndPositionPair.ship.hit();\n          this.#board[yAxis][xAxis] = 'hit';\n          return;\n        }\n      }\n    }\n    this.#board[yAxis][xAxis] = 'missed';\n    this.#missedAttacks.push([xAxis, yAxis]);\n  }\n  isSunk() {\n    for (let shipAndPosition of this.shipsAndPositions) {\n      const { ship, position } = shipAndPosition;\n      if (!ship.isSunk()) return false;\n    }\n    for (let y = 0; y < this.board.length; y++) {\n      let yRow = this.board[y];\n      for (let x = 0; x < yRow.length; x++) {\n        let positionContent = yRow[x];\n        if (positionContent == 'ship') return false;\n      }\n    }\n    return true;\n  }\n  getFromBoard(x, y) {\n    return this.#board[y][x];\n  }\n\n}\n\n\n//# sourceURL=webpack://battleship/./src/models/Gameboard.js?\n}");

/***/ }),

/***/ "./src/models/Player.js":
/*!******************************!*\
  !*** ./src/models/Player.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Player: () => (/* binding */ Player)\n/* harmony export */ });\n\nclass Player {\n  #gameboard;\n  #name;\n  #active;\n  #type;\n\n  constructor(board, name) {\n    this.#gameboard = board;\n    this.#name = name;\n    this.#active = false;\n  }\n  get gameboard() {\n    return this.#gameboard;\n  }\n  get name() {\n    return this.#name;\n  }\n  get status() {\n    return this.#active;\n  }\n  activate() {\n    this.#active = true;\n  }\n  deactivate() {\n    this.#active = false;\n  }\n  set type(type) {\n    if (type === 'bot' || type === 'human') {\n      this.#type = type;\n    } else {\n      throw new TypeError('Only [bot] or [human] types are available');\n    }\n  }\n  get type() {\n    return this.#type;\n  }\n}\n\n\n//# sourceURL=webpack://battleship/./src/models/Player.js?\n}");

/***/ }),

/***/ "./src/models/Ship.js":
/*!****************************!*\
  !*** ./src/models/Ship.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Ship: () => (/* binding */ Ship)\n/* harmony export */ });\nclass Ship {\n  #length = 0;\n  #hits;\n\n  constructor(length) {\n    this.#length = length;\n    this.#hits = 0;\n  }\n  hit() {\n    this.#hits += 1;\n  }\n  isSunk() {\n    return this.#hits >= this.#length;\n  }\n  get length() {\n    return this.#length;\n  }\n  get hits() {\n    return this.#hits;\n  }\n}\n\n\n//# sourceURL=webpack://battleship/./src/models/Ship.js?\n}");

/***/ }),

/***/ "./src/services/createRandomCoordinates.js":
/*!*************************************************!*\
  !*** ./src/services/createRandomCoordinates.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createHorizontalCoordinates: () => (/* binding */ createHorizontalCoordinates),\n/* harmony export */   createVerticalCoordinates: () => (/* binding */ createVerticalCoordinates)\n/* harmony export */ });\n\nfunction createHorizontalCoordinates(gameboard, coordinatesLength) {\n  /**\n   * Returns a random horizontal coordinates for one ship\n   * @param gameboard an instance of the Gameboard class\n   * @param coordinatesLength an integer representing the length of the ship\n   * the returned coordinates will have the same length than the ship\n   */\n\n  const coordinates = [];\n  const rowLength = gameboard.length[0];\n  const rowNumber = Math.floor(Math.random() * rowLength);\n  const row = gameboard.board[rowNumber];\n  let counter = 0;\n  let columnNumber = 0;\n  while (counter < coordinatesLength && columnNumber < rowLength) {\n    const point = row[columnNumber];\n    if (point != 'ship' && !coordinates.includes([columnNumber, rowNumber])) {\n      coordinates.push([columnNumber, rowNumber])\n      counter++;\n    } else {\n      // Delete the saved coordinates\n      coordinates.splice(0, coordinates.length - 1);\n      counter = 0;\n    }\n    columnNumber++;\n  }\n  // Coordinates could not be found, try again with a different random number\n  if (coordinates.length != coordinatesLength) {\n    return createHorizontalCoordinates(gameboard, coordinatesLength)\n  }\n  return coordinates\n}\nfunction createVerticalCoordinates(gameboard, coordinatesLength) {\n  /**\n   * Returns a random vertical coordinates for one ship\n   * @param gameboard an instance of the Gameboard class\n   * @param coordinatesLength an integer representing the length of the ship\n   * the returned coordinates will have the same length than the ship\n   */\n\n  const coordinates = [];\n  const columnLength = gameboard.length[0];\n  const rowLength = gameboard.length[1];\n  const columnNumber = Math.floor(Math.random() * columnLength);\n  let rowNumber = Math.floor(Math.random() * rowLength);\n  let counter = 0;\n  while (counter < coordinatesLength && rowNumber < rowLength) {\n    const row = gameboard.board[rowNumber];\n    const point = row[columnNumber];\n    if (point != 'ship' && !coordinates.includes([columnNumber, rowNumber])) {\n      coordinates.push([columnNumber, rowNumber])\n      counter++;\n    } else {\n      // Delete the saved coordinates\n      coordinates.splice(0, coordinates.length - 1);\n      counter = 0;\n    }\n    rowNumber++;\n  }\n  // Coordinates could not be found, try again with a different random number\n  if (coordinates.length != coordinatesLength) {\n    return createVerticalCoordinates(gameboard, coordinatesLength)\n  }\n  return coordinates\n}\n\n\n\n//# sourceURL=webpack://battleship/./src/services/createRandomCoordinates.js?\n}");

/***/ }),

/***/ "./src/services/listeners.js":
/*!***********************************!*\
  !*** ./src/services/listeners.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   attackHandler: () => (/* binding */ attackHandler),\n/* harmony export */   randomizeShipsHandler: () => (/* binding */ randomizeShipsHandler)\n/* harmony export */ });\n/* harmony import */ var _models_Ship_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/Ship.js */ \"./src/models/Ship.js\");\n/* harmony import */ var _controllers_DOMController_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/DOMController.js */ \"./src/controllers/DOMController.js\");\n/* harmony import */ var _controllers_GameController_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../controllers/GameController.js */ \"./src/controllers/GameController.js\");\n\n\n\n\nfunction attackHandler(evt) {\n  const targetedBoard = evt.target.parentNode.parentNode;\n  const coordinates = evt.target.dataset.coordinate.split(',');\n  const targetXCoordinate = Number.parseInt(coordinates[0]);\n  const targetYCoordinate = Number.parseInt(coordinates[1]);\n  const currentPlayer = _controllers_GameController_js__WEBPACK_IMPORTED_MODULE_2__.GameController.getCurrentPlayer()\n  const currentOpponent = _controllers_GameController_js__WEBPACK_IMPORTED_MODULE_2__.GameController.getCurrentOpponent();\n  const opponentBoard = currentOpponent.gameboard;\n\n  // If the board being clicked is not the enemy board don't allow attacks\n  if (targetedBoard.classList.contains(`${currentPlayer.name}`)) {\n    console.log('NOPE')\n    return;\n  }\n\n  opponentBoard.receiveAttack(targetXCoordinate, targetYCoordinate);\n\n  // Switch players turns \n  currentPlayer.deactivate();\n  currentOpponent.activate();\n\n  // render the boards again with the new players status\n  _controllers_DOMController_js__WEBPACK_IMPORTED_MODULE_1__.DOMController.renderBoard(currentOpponent);\n  _controllers_DOMController_js__WEBPACK_IMPORTED_MODULE_1__.DOMController.renderBoard(currentPlayer);\n\n  //Validate if the player has sunk all opponent's ships\n  if (opponentBoard.isSunk()) {\n    console.log(`${currentPlayer.name} won`)\n    _controllers_GameController_js__WEBPACK_IMPORTED_MODULE_2__.GameController.finishGame();\n    return;\n  }\n\n  // The bot immediately attacks back \n  if (currentPlayer.type === 'human') {\n    const botAttackCoordinates = _controllers_GameController_js__WEBPACK_IMPORTED_MODULE_2__.GameController.createBotAttack();\n\n    const boardToAttack = document\n      .querySelector(`.board.${currentPlayer.name}`)\n    const divToAttack = boardToAttack\n      .querySelector(`.x-box[data-coordinate='${botAttackCoordinates}']`);\n\n    divToAttack.click();\n    // DOMController.renderBoard(currentOpponent);\n    // DOMController.renderBoard(currentPlayer);\n  } else {\n    console.log('Bot attacked...Waiting for human to attack again');\n  }\n}\nfunction randomizeShipsHandler(evt) {\n  const ship1 = new _models_Ship_js__WEBPACK_IMPORTED_MODULE_0__.Ship(2);\n  const ship2 = new _models_Ship_js__WEBPACK_IMPORTED_MODULE_0__.Ship(4);\n  const ship3 = new _models_Ship_js__WEBPACK_IMPORTED_MODULE_0__.Ship(3);\n  const ship4 = new _models_Ship_js__WEBPACK_IMPORTED_MODULE_0__.Ship(5);\n\n  _controllers_GameController_js__WEBPACK_IMPORTED_MODULE_2__.GameController.placeShipsRandomly(ship1, ship2, ship3, ship4);\n\n}\n\n\n\n\n\n\n//# sourceURL=webpack://battleship/./src/services/listeners.js?\n}");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://battleship/./src/styles.css?\n}");

/***/ }),

/***/ "./src/views/modal.js":
/*!****************************!*\
  !*** ./src/views/modal.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Modal: () => (/* binding */ Modal)\n/* harmony export */ });\n\nclass Modal {\n\n  constructor() {\n    const modal = document.createElement('div');\n    modal.classList.add('modal');\n    const text = document.createElement('p');\n    text.classList.add('winner-text');\n    const button = document.createElement('button');\n    button.textContent = 'Reset';\n    button.addEventListener('click', () => {\n      location.reload();\n    });\n    modal.append(text, button);\n    return modal;\n  }\n\n}\n\n\n//# sourceURL=webpack://battleship/./src/views/modal.js?\n}");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;