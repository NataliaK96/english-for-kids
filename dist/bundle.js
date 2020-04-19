/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_MainPage_mainPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/MainPage/mainPage */ "./src/modules/MainPage/mainPage.js");
/* harmony import */ var _modules_Menu_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/Menu/menu */ "./src/modules/Menu/menu.js");
/* harmony import */ var _modules_Switch_switch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/Switch/switch */ "./src/modules/Switch/switch.js");
/* harmony import */ var _modules_App_repeater_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/App/repeater.scss */ "./src/modules/App/repeater.scss");
/* harmony import */ var _modules_App_repeater_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_modules_App_repeater_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _modules_App_app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/App/app */ "./src/modules/App/app.js");
/* harmony import */ var _modules_App_banner_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/App/banner.scss */ "./src/modules/App/banner.scss");
/* harmony import */ var _modules_App_banner_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_modules_App_banner_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _modules_App_star_container_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/App/star-container.scss */ "./src/modules/App/star-container.scss");
/* harmony import */ var _modules_App_star_container_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_modules_App_star_container_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _modules_Card_card_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/Card/card.scss */ "./src/modules/Card/card.scss");
/* harmony import */ var _modules_Card_card_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_modules_Card_card_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _modules_Menu_bootstrapPanel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/Menu/bootstrapPanel */ "./src/modules/Menu/bootstrapPanel.js");
/* harmony import */ var _modules_Menu_bootstrapPanel__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_modules_Menu_bootstrapPanel__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _modules_Menu_bootstrapPanel_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/Menu/bootstrapPanel.scss */ "./src/modules/Menu/bootstrapPanel.scss");
/* harmony import */ var _modules_Menu_bootstrapPanel_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_modules_Menu_bootstrapPanel_scss__WEBPACK_IMPORTED_MODULE_10__);












/***/ }),

/***/ "./src/modules/App/app.js":
/*!********************************!*\
  !*** ./src/modules/App/app.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _gameData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameData */ "./src/modules/App/gameData.js");
/* harmony import */ var _repeatSound__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./repeatSound */ "./src/modules/App/repeatSound.js");
/* harmony import */ var _startGame__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./startGame */ "./src/modules/App/startGame.js");
/* harmony import */ var _step__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./step */ "./src/modules/App/step.js");




var startBtn = document.getElementById('start');
startBtn.addEventListener('click', function () {
  if (_gameData__WEBPACK_IMPORTED_MODULE_0__["gameData"].gameStarted) {
    Object(_repeatSound__WEBPACK_IMPORTED_MODULE_1__["repeatSound"])();
  } else {
    Object(_startGame__WEBPACK_IMPORTED_MODULE_2__["startGame"])();
  }
});
var cardContainer = document.querySelector('.card-container');
cardContainer.addEventListener('click', function (event) {
  var card = event.target.closest('.card');
  if (!card) return;

  if (_gameData__WEBPACK_IMPORTED_MODULE_0__["gameData"].gameStarted) {
    Object(_step__WEBPACK_IMPORTED_MODULE_3__["step"])(card);
  }
});

/***/ }),

/***/ "./src/modules/App/banner.scss":
/*!*************************************!*\
  !*** ./src/modules/App/banner.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/modules/App/fillingPage.js":
/*!****************************************!*\
  !*** ./src/modules/App/fillingPage.js ***!
  \****************************************/
/*! exports provided: filler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filler", function() { return filler; });
/* harmony import */ var _Card_cards__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Card/cards */ "./src/modules/Card/cards.js");
/* harmony import */ var _Card_DubleSideCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Card/DubleSideCard */ "./src/modules/Card/DubleSideCard.js");
/* harmony import */ var _gameData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gameData */ "./src/modules/App/gameData.js");
/* harmony import */ var _resetGame__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./resetGame */ "./src/modules/App/resetGame.js");




function filler(sectionName) {
  Object(_resetGame__WEBPACK_IMPORTED_MODULE_3__["resetGame"])();
  var firstRow = document.querySelector('.row-first');
  var secondRow = document.querySelector('.row-second');
  firstRow.innerHTML = '';
  secondRow.innerHTML = '';
  var indexSectionName = _Card_cards__WEBPACK_IMPORTED_MODULE_0__["cards"][0].indexOf(sectionName);
  var sectionCards = _Card_cards__WEBPACK_IMPORTED_MODULE_0__["cards"][indexSectionName + 1];
  sectionCards.forEach(function (item, index) {
    var card = new _Card_DubleSideCard__WEBPACK_IMPORTED_MODULE_1__["DubleSideCard"](item);
    _gameData__WEBPACK_IMPORTED_MODULE_2__["gameData"].currentPageCards.push(card);

    if (_gameData__WEBPACK_IMPORTED_MODULE_2__["gameData"].sectionIsGame) {
      card.toGame();
      var startBtn = document.getElementById('start');
      startBtn.classList.remove('d-none');
    }

    if (index < 4) {
      card.appendTo(firstRow);
    } else {
      card.appendTo(secondRow);
    }
  });
}

/***/ }),

/***/ "./src/modules/App/gameData.js":
/*!*************************************!*\
  !*** ./src/modules/App/gameData.js ***!
  \*************************************/
/*! exports provided: gameData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gameData", function() { return gameData; });
var gameData = {
  activePage: 'mainPage',
  sectionIsGame: false,
  currentPageCards: [],
  gameStarted: false,
  randomCards: [],
  activCardIndex: 0,
  errors: 0
};

/***/ }),

/***/ "./src/modules/App/gameOver.js":
/*!*************************************!*\
  !*** ./src/modules/App/gameOver.js ***!
  \*************************************/
/*! exports provided: gameOver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gameOver", function() { return gameOver; });
/* harmony import */ var _gameData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameData */ "./src/modules/App/gameData.js");
/* harmony import */ var _resetGame__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./resetGame */ "./src/modules/App/resetGame.js");


function gameOver() {
  var banner = document.createElement('div');
  banner.classList.add('banner', 'text-center');
  var text = document.createElement('div');
  var img = document.createElement('img');
  img.classList.add('img-fluid');
  var sound = new Audio();
  banner.append(text, img);
  document.body.append(banner);
  var firstRow = document.querySelector('.row-first');
  var secondRow = document.querySelector('.row-second');
  firstRow.innerHTML = '';
  secondRow.innerHTML = '';

  if (!_gameData__WEBPACK_IMPORTED_MODULE_0__["gameData"].errors) {
    sound.src = './audio/success.mp3';
    text.innerHTML = 'Молодец!';
    img.src = './img/win.png';
  } else {
    sound.src = './audio/failure.mp3';
    text.innerHTML = "\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u043E\u0448\u0438\u0431\u043E\u043A: ".concat(_gameData__WEBPACK_IMPORTED_MODULE_0__["gameData"].errors);
    img.src = './img/lose.png';
  }

  sound.play();
  Object(_resetGame__WEBPACK_IMPORTED_MODULE_1__["resetGame"])();
  setTimeout(function () {
    banner.remove();
    document.getElementById('mainPage').click();
  }, 3000);
}

/***/ }),

/***/ "./src/modules/App/repeatSound.js":
/*!****************************************!*\
  !*** ./src/modules/App/repeatSound.js ***!
  \****************************************/
/*! exports provided: repeatSound */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "repeatSound", function() { return repeatSound; });
/* harmony import */ var _gameData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameData */ "./src/modules/App/gameData.js");

function repeatSound() {
  _gameData__WEBPACK_IMPORTED_MODULE_0__["gameData"].randomCards[_gameData__WEBPACK_IMPORTED_MODULE_0__["gameData"].activCardIndex].say();
}

/***/ }),

/***/ "./src/modules/App/repeater.scss":
/*!***************************************!*\
  !*** ./src/modules/App/repeater.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/modules/App/resetGame.js":
/*!**************************************!*\
  !*** ./src/modules/App/resetGame.js ***!
  \**************************************/
/*! exports provided: resetGame */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetGame", function() { return resetGame; });
/* harmony import */ var _gameData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameData */ "./src/modules/App/gameData.js");

function resetGame() {
  _gameData__WEBPACK_IMPORTED_MODULE_0__["gameData"].currentPageCards = [];
  _gameData__WEBPACK_IMPORTED_MODULE_0__["gameData"].gameStarted = false;
  _gameData__WEBPACK_IMPORTED_MODULE_0__["gameData"].randomCards = [];
  _gameData__WEBPACK_IMPORTED_MODULE_0__["gameData"].activCardIndex = 0;
  _gameData__WEBPACK_IMPORTED_MODULE_0__["gameData"].errors = 0;
  var startBtn = document.getElementById('start');
  startBtn.classList.remove('repeater', 'rounded-circle');
  startBtn.style.backgroundImage = '';
  startBtn.innerHTML = 'START GAME';
  var starContainer = document.querySelector('.star-container');
  starContainer.innerHTML = '';
}

/***/ }),

/***/ "./src/modules/App/star-container.scss":
/*!*********************************************!*\
  !*** ./src/modules/App/star-container.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/modules/App/startGame.js":
/*!**************************************!*\
  !*** ./src/modules/App/startGame.js ***!
  \**************************************/
/*! exports provided: startGame */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startGame", function() { return startGame; });
/* harmony import */ var _gameData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameData */ "./src/modules/App/gameData.js");

function startGame() {
  var startBtn = document.getElementById('start');
  startBtn.classList.add('repeater', 'rounded-circle');
  startBtn.style.backgroundImage = 'url(./img/repeat.svg)';
  startBtn.innerHTML = '';
  _gameData__WEBPACK_IMPORTED_MODULE_0__["gameData"].randomCards = _gameData__WEBPACK_IMPORTED_MODULE_0__["gameData"].currentPageCards.sort(function () {
    return Math.random() - 0.5;
  });
  _gameData__WEBPACK_IMPORTED_MODULE_0__["gameData"].randomCards[_gameData__WEBPACK_IMPORTED_MODULE_0__["gameData"].activCardIndex].say();
  _gameData__WEBPACK_IMPORTED_MODULE_0__["gameData"].gameStarted = true;
}

/***/ }),

/***/ "./src/modules/App/step.js":
/*!*********************************!*\
  !*** ./src/modules/App/step.js ***!
  \*********************************/
/*! exports provided: step */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "step", function() { return step; });
/* harmony import */ var _gameData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameData */ "./src/modules/App/gameData.js");
/* harmony import */ var _gameOver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameOver */ "./src/modules/App/gameOver.js");
/* harmony import */ var _resetGame__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resetGame */ "./src/modules/App/resetGame.js");



function step(card) {
  var sound = new Audio();
  var starContainer = document.querySelector('.star-container');
  var star = document.createElement('img');

  if (card !== _gameData__WEBPACK_IMPORTED_MODULE_0__["gameData"].randomCards[_gameData__WEBPACK_IMPORTED_MODULE_0__["gameData"].activCardIndex].node) {
    sound.src = './audio/error.mp3';
    _gameData__WEBPACK_IMPORTED_MODULE_0__["gameData"].errors += 1;
    star.src = './img/star.svg';
  } else {
    star.src = './img/star-win.svg';
    sound.src = './audio/correct.mp3';
    card.classList.add('inactive');

    if (_gameData__WEBPACK_IMPORTED_MODULE_0__["gameData"].activCardIndex === _gameData__WEBPACK_IMPORTED_MODULE_0__["gameData"].randomCards.length - 1) {
      Object(_gameOver__WEBPACK_IMPORTED_MODULE_1__["gameOver"])();
      Object(_resetGame__WEBPACK_IMPORTED_MODULE_2__["resetGame"])();
      return;
    }

    _gameData__WEBPACK_IMPORTED_MODULE_0__["gameData"].activCardIndex += 1;
    setTimeout(function () {
      _gameData__WEBPACK_IMPORTED_MODULE_0__["gameData"].randomCards[_gameData__WEBPACK_IMPORTED_MODULE_0__["gameData"].activCardIndex].say();
    }, 500);
  }

  sound.play();
  starContainer.prepend(star);
}

/***/ }),

/***/ "./src/modules/App/toGame.js":
/*!***********************************!*\
  !*** ./src/modules/App/toGame.js ***!
  \***********************************/
/*! exports provided: toGame */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toGame", function() { return toGame; });
/* harmony import */ var _gameData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameData */ "./src/modules/App/gameData.js");

function toGame() {
  _gameData__WEBPACK_IMPORTED_MODULE_0__["gameData"].currentPageCards.forEach(function (item) {
    item.toGame();
  });
  document.getElementById('sidebar-wrapper').classList.remove('bg-primary');
  document.getElementById('sidebar-wrapper').classList.add('bg-success');
  _gameData__WEBPACK_IMPORTED_MODULE_0__["gameData"].sectionIsGame = true;

  if (_gameData__WEBPACK_IMPORTED_MODULE_0__["gameData"].activePage !== 'mainPage') {
    var startBtn = document.getElementById('start');
    startBtn.classList.remove('d-none');
  }
}

/***/ }),

/***/ "./src/modules/App/toTrain.js":
/*!************************************!*\
  !*** ./src/modules/App/toTrain.js ***!
  \************************************/
/*! exports provided: toTrain */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toTrain", function() { return toTrain; });
/* harmony import */ var _gameData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameData */ "./src/modules/App/gameData.js");

function toTrain() {
  _gameData__WEBPACK_IMPORTED_MODULE_0__["gameData"].currentPageCards.forEach(function (item) {
    item.toTrain();
  });
  document.getElementById('sidebar-wrapper').classList.remove('bg-success');
  document.getElementById('sidebar-wrapper').classList.add('bg-primary');
  _gameData__WEBPACK_IMPORTED_MODULE_0__["gameData"].sectionIsGame = false;
  var startBtn = document.getElementById('start');
  startBtn.classList.add('d-none');
}

/***/ }),

/***/ "./src/modules/Card/DubleSideCard.js":
/*!*******************************************!*\
  !*** ./src/modules/Card/DubleSideCard.js ***!
  \*******************************************/
/*! exports provided: DubleSideCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DubleSideCard", function() { return DubleSideCard; });
/* harmony import */ var _MainPage_SingleSideCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../MainPage/SingleSideCard */ "./src/modules/MainPage/SingleSideCard.js");
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }


var DubleSideCard = /*#__PURE__*/function (_SingleSideCard) {
  _inheritsLoose(DubleSideCard, _SingleSideCard);

  function DubleSideCard(cardData) {
    var _this;

    _this = _SingleSideCard.call(this, cardData, cardData.word) || this;

    _this.cardBody.remove();

    _this.cardImg.classList.remove('rounded-circle', 'img-sqr');

    _this.cardBodyFront = _this.cardBody;
    _this.frontSide = document.createElement('div');

    _this.frontSide.classList.add('front');

    _this.frontSide.append(_this.cardBodyFront);

    _this.rotateBtnFront = document.createElement('input');

    _this.rotateBtnFront.classList.add('card-rotate-btn');

    _this.rotateBtnFront.type = 'image';
    _this.rotateBtnFront.src = 'img/rotate.svg';
    _this.backSide = document.createElement('div');

    _this.backSide.classList.add('back');

    _this.cardBodyBack = document.createElement('div');

    _this.cardBodyBack.classList.add('card-body', 'text-center');

    _this.backSide.append(_this.cardBodyBack);

    _this.cardBodyFront.append(_this.rotateBtnFront);

    _this.cardImgBack = document.createElement('img');
    _this.cardImgBack.src = cardData.image;

    _this.cardImgBack.classList.add('card-img-top');

    _this.cardHeaderBack = document.createElement('h4');
    _this.cardHeaderBack.innerHTML = cardData.translation;

    _this.cardHeaderBack.classList.add('card-title');

    _this.cardBodyBack.append(_this.cardImgBack, _this.cardHeaderBack);

    _this.node.append(_this.frontSide, _this.backSide);

    _this.node.classList.remove('main-page-card');

    _this.rotateBtnFront.addEventListener('click', function () {
      _this.node.classList.add('rotate');
    });

    _this.node.addEventListener('mouseleave', function () {
      _this.node.classList.remove('rotate');
    });

    _this.sound = new Audio();
    _this.sound.src = cardData.audioSrc;

    _this.node.addEventListener('click', function (e) {
      if (_this.soundIsOff) return;
      if (e.target !== _this.rotateBtnFront) _this.say();
    });

    return _this;
  }

  var _proto = DubleSideCard.prototype;

  _proto.toTrain = function toTrain() {
    this.node.classList.remove('bg-success');
    this.node.classList.add('bg-primary');
    this.cardHeader.classList.remove('d-none');
    this.rotateBtnFront.classList.remove('d-none');
    this.soundIsOff = false;
  };

  _proto.toGame = function toGame() {
    this.node.classList.remove('bg-primary');
    this.node.classList.add('bg-success');
    this.cardHeader.classList.add('d-none');
    this.rotateBtnFront.classList.add('d-none');
    this.soundIsOff = true;
  };

  _proto.say = function say() {
    this.sound.play();
  };

  return DubleSideCard;
}(_MainPage_SingleSideCard__WEBPACK_IMPORTED_MODULE_0__["SingleSideCard"]);

/***/ }),

/***/ "./src/modules/Card/card.scss":
/*!************************************!*\
  !*** ./src/modules/Card/card.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/modules/Card/cards.js":
/*!***********************************!*\
  !*** ./src/modules/Card/cards.js ***!
  \***********************************/
/*! exports provided: cards */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cards", function() { return cards; });
var cards = [['Action (set A)', 'Action (set B)', 'Action (set C)', 'Adjective', 'Animal (set A)', 'Animal (set B)', 'Clothes', 'Emotions'], [{
  word: 'cry',
  translation: 'плакать',
  image: 'img/cry.jpg',
  audioSrc: 'audio/cry.mp3'
}, {
  word: 'dance',
  translation: 'танцевать',
  image: 'img/dance.jpg',
  audioSrc: 'audio/dance.mp3'
}, {
  word: 'dive',
  translation: 'нырять',
  image: 'img/dive.jpg',
  audioSrc: 'audio/dive.mp3'
}, {
  word: 'draw',
  translation: 'рисовать',
  image: 'img/draw.jpg',
  audioSrc: 'audio/draw.mp3'
}, {
  word: 'fish',
  translation: 'ловить рыбу',
  image: 'img/fish.jpg',
  audioSrc: 'audio/fish.mp3'
}, {
  word: 'fly',
  translation: 'летать',
  image: 'img/fly.jpg',
  audioSrc: 'audio/fly.mp3'
}, {
  word: 'hug',
  translation: 'обнимать',
  image: 'img/hug.jpg',
  audioSrc: 'audio/hug.mp3'
}, {
  word: 'jump',
  translation: 'прыгать',
  image: 'img/jump.jpg',
  audioSrc: 'audio/jump.mp3'
}], [{
  word: 'open',
  translation: 'открывать',
  image: 'img/open.jpg',
  audioSrc: 'audio/open.mp3'
}, {
  word: 'play',
  translation: 'играть',
  image: 'img/play.jpg',
  audioSrc: 'audio/play.mp3'
}, {
  word: 'point',
  translation: 'указывать',
  image: 'img/point.jpg',
  audioSrc: 'audio/point.mp3'
}, {
  word: 'ride',
  translation: 'ездить',
  image: 'img/ride.jpg',
  audioSrc: 'audio/ride.mp3'
}, {
  word: 'run',
  translation: 'бегать',
  image: 'img/run.jpg',
  audioSrc: 'audio/run.mp3'
}, {
  word: 'sing',
  translation: 'петь',
  image: 'img/sing.jpg',
  audioSrc: 'audio/sing.mp3'
}, {
  word: 'skip',
  translation: 'пропускать, прыгать',
  image: 'img/skip.jpg',
  audioSrc: 'audio/skip.mp3'
}, {
  word: 'swim',
  translation: 'плавать',
  image: 'img/swim.jpg',
  audioSrc: 'audio/swim.mp3'
}], [{
  word: 'argue',
  translation: 'спорить',
  image: 'img/argue.jpg',
  audioSrc: 'audio/argue.mp3'
}, {
  word: 'build',
  translation: 'строить',
  image: 'img/build.jpg',
  audioSrc: 'audio/build.mp3'
}, {
  word: 'carry',
  translation: 'нести',
  image: 'img/carry.jpg',
  audioSrc: 'audio/carry.mp3'
}, {
  word: 'catch',
  translation: 'ловить',
  image: 'img/catch.jpg',
  audioSrc: 'audio/catch.mp3'
}, {
  word: 'drive',
  translation: 'водить машину',
  image: 'img/drive.jpg',
  audioSrc: 'audio/drive.mp3'
}, {
  word: 'drop',
  translation: 'падать',
  image: 'img/drop.jpg',
  audioSrc: 'audio/drop.mp3'
}, {
  word: 'pull',
  translation: 'тянуть',
  image: 'img/pull.jpg',
  audioSrc: 'audio/pull.mp3'
}, {
  word: 'push',
  translation: 'толкать',
  image: 'img/push.jpg',
  audioSrc: 'audio/push.mp3'
}], [{
  word: 'big',
  translation: 'большой',
  image: 'img/big.jpg',
  audioSrc: 'audio/big.mp3'
}, {
  word: 'small',
  translation: 'маленький',
  image: 'img/small.jpg',
  audioSrc: 'audio/small.mp3'
}, {
  word: 'fast',
  translation: 'быстрый',
  image: 'img/fast.jpg',
  audioSrc: 'audio/fast.mp3'
}, {
  word: 'slow',
  translation: 'медленный',
  image: 'img/slow.jpg',
  audioSrc: 'audio/slow.mp3'
}, {
  word: 'friendly',
  translation: 'дружелюбный',
  image: 'img/friendly.jpg',
  audioSrc: 'audio/friendly.mp3'
}, {
  word: 'unfriendly',
  translation: 'недружелюбный',
  image: 'img/unfriendly.jpg',
  audioSrc: 'audio/unfriendly.mp3'
}, {
  word: 'young',
  translation: 'молодой',
  image: 'img/young.jpg',
  audioSrc: 'audio/young.mp3'
}, {
  word: 'old',
  translation: 'старый',
  image: 'img/old.jpg',
  audioSrc: 'audio/old.mp3'
}], [{
  word: 'cat',
  translation: 'кот',
  image: 'img/cat.jpg',
  audioSrc: 'audio/cat.mp3'
}, {
  word: 'chick',
  translation: 'цыплёнок',
  image: 'img/chick.jpg',
  audioSrc: 'audio/chick.mp3'
}, {
  word: 'chicken',
  translation: 'курица',
  image: 'img/chicken.jpg',
  audioSrc: 'audio/chicken.mp3'
}, {
  word: 'dog',
  translation: 'собака',
  image: 'img/dog.jpg',
  audioSrc: 'audio/dog.mp3'
}, {
  word: 'horse',
  translation: 'лошадь',
  image: 'img/horse.jpg',
  audioSrc: 'audio/horse.mp3'
}, {
  word: 'pig',
  translation: 'свинья',
  image: 'img/pig.jpg',
  audioSrc: 'audio/pig.mp3'
}, {
  word: 'rabbit',
  translation: 'кролик',
  image: 'img/rabbit.jpg',
  audioSrc: 'audio/rabbit.mp3'
}, {
  word: 'sheep',
  translation: 'овца',
  image: 'img/sheep.jpg',
  audioSrc: 'audio/sheep.mp3'
}], [{
  word: 'bird',
  translation: 'птица',
  image: 'img/bird.jpg',
  audioSrc: 'audio/bird.mp3'
}, {
  word: 'fish',
  translation: 'рыба',
  image: 'img/fish1.jpg',
  audioSrc: 'audio/fish.mp3'
}, {
  word: 'frog',
  translation: 'жаба',
  image: 'img/frog.jpg',
  audioSrc: 'audio/frog.mp3'
}, {
  word: 'giraffe',
  translation: 'жирафа',
  image: 'img/giraffe.jpg',
  audioSrc: 'audio/giraffe.mp3'
}, {
  word: 'lion',
  translation: 'лев',
  image: 'img/lion.jpg',
  audioSrc: 'audio/lion.mp3'
}, {
  word: 'mouse',
  translation: 'мышь',
  image: 'img/mouse.jpg',
  audioSrc: 'audio/mouse.mp3'
}, {
  word: 'turtle',
  translation: 'черепаха',
  image: 'img/turtle.jpg',
  audioSrc: 'audio/turtle.mp3'
}, {
  word: 'dolphin',
  translation: 'дельфин',
  image: 'img/dolphin.jpg',
  audioSrc: 'audio/dolphin.mp3'
}], [{
  word: 'skirt',
  translation: 'юбка',
  image: 'img/skirt.jpg',
  audioSrc: 'audio/skirt.mp3'
}, {
  word: 'pants',
  translation: 'брюки',
  image: 'img/pants.jpg',
  audioSrc: 'audio/pants.mp3'
}, {
  word: 'blouse',
  translation: 'блузка',
  image: 'img/blouse.jpg',
  audioSrc: 'audio/blouse.mp3'
}, {
  word: 'dress',
  translation: 'платье',
  image: 'img/dress.jpg',
  audioSrc: 'audio/dress.mp3'
}, {
  word: 'boot',
  translation: 'ботинок',
  image: 'img/boot.jpg',
  audioSrc: 'audio/boot.mp3'
}, {
  word: 'shirt',
  translation: 'рубашка',
  image: 'img/shirt.jpg',
  audioSrc: 'audio/shirt.mp3'
}, {
  word: 'coat',
  translation: 'пальто',
  image: 'img/coat.jpg',
  audioSrc: 'audio/coat.mp3'
}, {
  word: 'shoe',
  translation: 'туфли',
  image: 'img/shoe.jpg',
  audioSrc: 'audio/shoe.mp3'
}], [{
  word: 'sad',
  translation: 'грустный',
  image: 'img/sad.jpg',
  audioSrc: 'audio/sad.mp3'
}, {
  word: 'angry',
  translation: 'сердитый',
  image: 'img/angry.jpg',
  audioSrc: 'audio/angry.mp3'
}, {
  word: 'happy',
  translation: 'счастливый',
  image: 'img/happy.jpg',
  audioSrc: 'audio/happy.mp3'
}, {
  word: 'tired',
  translation: 'уставший',
  image: 'img/tired.jpg',
  audioSrc: 'audio/tired.mp3'
}, {
  word: 'surprised',
  translation: 'удивлённый',
  image: 'img/surprised.jpg',
  audioSrc: 'audio/surprised.mp3'
}, {
  word: 'scared',
  translation: 'испуганный',
  image: 'img/scared.jpg',
  audioSrc: 'audio/scared.mp3'
}, {
  word: 'smile',
  translation: 'улыбка',
  image: 'img/smile.jpg',
  audioSrc: 'audio/smile.mp3'
}, {
  word: 'laugh',
  translation: 'смех',
  image: 'img/laugh.jpg',
  audioSrc: 'audio/laugh.mp3'
}]];

/***/ }),

/***/ "./src/modules/MainPage/SingleSideCard.js":
/*!************************************************!*\
  !*** ./src/modules/MainPage/SingleSideCard.js ***!
  \************************************************/
/*! exports provided: SingleSideCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleSideCard", function() { return SingleSideCard; });
var SingleSideCard = /*#__PURE__*/function () {
  function SingleSideCard(cardData, header) {
    this.cardWrapper = document.createElement('div');
    this.cardWrapper.classList.add('col-12', 'col-md-6', 'col-lg-3');
    this.node = document.createElement('div');
    this.node.classList.add('card', 'text-white', 'bg-primary', 'mb-3', 'main-page-card');
    this.cardBody = document.createElement('div');
    this.cardBody.classList.add('card-body', 'text-center');
    this.cardImg = document.createElement('img');
    this.cardImg.src = cardData.image;
    this.cardImg.classList.add('card-img-top', 'rounded-circle', 'img-sqr');
    this.cardHeader = document.createElement('h4');
    this.cardHeader.innerHTML = header;
    this.cardHeader.classList.add('card-title');
    this.cardBody.append(this.cardImg, this.cardHeader);
    this.node.append(this.cardBody);
    this.cardWrapper.append(this.node);
  }

  var _proto = SingleSideCard.prototype;

  _proto.appendTo = function appendTo(node) {
    node.append(this.cardWrapper);
  };

  _proto.toGame = function toGame() {
    this.node.classList.remove('bg-primary');
    this.node.classList.add('bg-success');
  };

  _proto.toTrain = function toTrain() {
    this.node.classList.remove('bg-success');
    this.node.classList.add('bg-primary');
  };

  return SingleSideCard;
}();

/***/ }),

/***/ "./src/modules/MainPage/mainPage.js":
/*!******************************************!*\
  !*** ./src/modules/MainPage/mainPage.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _renderMainPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderMainPage */ "./src/modules/MainPage/renderMainPage.js");
/* harmony import */ var _Menu_keyPages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Menu/keyPages */ "./src/modules/Menu/keyPages.js");


var cardContainer = document.querySelector('.card-container');
Object(_renderMainPage__WEBPACK_IMPORTED_MODULE_0__["renderMainPage"])();
cardContainer.addEventListener('click', function (event) {
  var card = event.target.closest('.main-page-card');
  if (!card) return;
  var sectionName = card.querySelector('.card-title').innerHTML;
  var id = Object.entries(_Menu_keyPages__WEBPACK_IMPORTED_MODULE_1__["keyPages"]).find(function (item) {
    return item[1] === sectionName;
  })[0];
  document.getElementById(id).click();
});

/***/ }),

/***/ "./src/modules/MainPage/renderMainPage.js":
/*!************************************************!*\
  !*** ./src/modules/MainPage/renderMainPage.js ***!
  \************************************************/
/*! exports provided: renderMainPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderMainPage", function() { return renderMainPage; });
/* harmony import */ var _Card_cards__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Card/cards */ "./src/modules/Card/cards.js");
/* harmony import */ var _SingleSideCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SingleSideCard */ "./src/modules/MainPage/SingleSideCard.js");
/* harmony import */ var _App_gameData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../App/gameData */ "./src/modules/App/gameData.js");
/* harmony import */ var _App_resetGame__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../App/resetGame */ "./src/modules/App/resetGame.js");




function renderMainPage() {
  Object(_App_resetGame__WEBPACK_IMPORTED_MODULE_3__["resetGame"])();
  var startBtn = document.getElementById('start');
  startBtn.classList.add('d-none');
  _App_gameData__WEBPACK_IMPORTED_MODULE_2__["gameData"].currentPageCards = [];
  var firstRow = document.querySelector('.row-first');
  var secondRow = document.querySelector('.row-second');
  firstRow.innerHTML = '';
  secondRow.innerHTML = '';
  _Card_cards__WEBPACK_IMPORTED_MODULE_0__["cards"][0].forEach(function (item, index) {
    var card = new _SingleSideCard__WEBPACK_IMPORTED_MODULE_1__["SingleSideCard"](_Card_cards__WEBPACK_IMPORTED_MODULE_0__["cards"][index + 1][0], item);
    _App_gameData__WEBPACK_IMPORTED_MODULE_2__["gameData"].currentPageCards.push(card);

    if (_App_gameData__WEBPACK_IMPORTED_MODULE_2__["gameData"].sectionIsGame) {
      card.toGame();
    }

    if (index < 4) {
      card.appendTo(firstRow);
    } else {
      card.appendTo(secondRow);
    }
  });
}

/***/ }),

/***/ "./src/modules/Menu/bootstrapPanel.js":
/*!********************************************!*\
  !*** ./src/modules/Menu/bootstrapPanel.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

$(document).ready(function () {
  var trigger = $('.hamburger');
  var overlay = $('.overlay');
  var isClosed = false;

  function hamburgerCross() {
    if (isClosed === true) {
      overlay.hide();
      trigger.removeClass('is-open');
      trigger.addClass('is-closed');
      isClosed = false;
    } else {
      overlay.show();
      trigger.removeClass('is-closed');
      trigger.addClass('is-open');
      isClosed = true;
    }
  }

  trigger.click(function () {
    hamburgerCross();
  });
  $('[data-toggle="offcanvas"]').click(function () {
    $('#wrapper').toggleClass('toggled');
  });
  document.addEventListener('click', function (event) {
    if (!event.target.closest('.navbar') && !event.target.closest('.hamburger') && isClosed) {
      $('.hamburger').click();
    }
  });
});

/***/ }),

/***/ "./src/modules/Menu/bootstrapPanel.scss":
/*!**********************************************!*\
  !*** ./src/modules/Menu/bootstrapPanel.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/modules/Menu/keyPages.js":
/*!**************************************!*\
  !*** ./src/modules/Menu/keyPages.js ***!
  \**************************************/
/*! exports provided: keyPages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keyPages", function() { return keyPages; });
var keyPages = {
  ActionSetA: 'Action (set A)',
  ActionSetB: 'Action (set B)',
  ActionSetC: 'Action (set C)',
  Adjective: 'Adjective',
  AnimalSetA: 'Animal (set A)',
  AnimalSetB: 'Animal (set B)',
  Clothes: 'Clothes',
  Emotions: 'Emotions'
};

/***/ }),

/***/ "./src/modules/Menu/menu.js":
/*!**********************************!*\
  !*** ./src/modules/Menu/menu.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App_fillingPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../App/fillingPage */ "./src/modules/App/fillingPage.js");
/* harmony import */ var _keyPages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./keyPages */ "./src/modules/Menu/keyPages.js");
/* harmony import */ var _MainPage_renderMainPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../MainPage/renderMainPage */ "./src/modules/MainPage/renderMainPage.js");
/* harmony import */ var _App_gameData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../App/gameData */ "./src/modules/App/gameData.js");




var sideBar = document.querySelector('.sidebar-nav');
sideBar.addEventListener('click', function (event) {
  var anchor = event.target.closest('.anchor');
  if (!anchor) return;

  if (anchor.id === 'mainPage') {
    Object(_MainPage_renderMainPage__WEBPACK_IMPORTED_MODULE_2__["renderMainPage"])();
  } else {
    var sectionName = _keyPages__WEBPACK_IMPORTED_MODULE_1__["keyPages"][anchor.id];
    Object(_App_fillingPage__WEBPACK_IMPORTED_MODULE_0__["filler"])(sectionName);
  }

  var activePage = sideBar.querySelector('.active');

  if (activePage) {
    activePage.classList.remove('active');
  }

  anchor.classList.add('active');
  var hamburger = document.querySelector('.hamburger');

  if (hamburger.classList.contains('is-open')) {
    hamburger.click();
  }

  _App_gameData__WEBPACK_IMPORTED_MODULE_3__["gameData"].activePage = anchor.id;
});

/***/ }),

/***/ "./src/modules/Switch/switch.js":
/*!**************************************!*\
  !*** ./src/modules/Switch/switch.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App_toGame__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../App/toGame */ "./src/modules/App/toGame.js");
/* harmony import */ var _App_toTrain__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../App/toTrain */ "./src/modules/App/toTrain.js");


var gameSwitch = document.querySelector('#cmn-toggle-1');
gameSwitch.addEventListener('change', function () {
  if (gameSwitch.checked) {
    Object(_App_toGame__WEBPACK_IMPORTED_MODULE_0__["toGame"])();
  } else {
    Object(_App_toTrain__WEBPACK_IMPORTED_MODULE_1__["toTrain"])();
  }
});

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL0FwcC9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvQXBwL2Jhbm5lci5zY3NzPzgwYWMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvQXBwL2ZpbGxpbmdQYWdlLmpzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL0FwcC9nYW1lRGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9BcHAvZ2FtZU92ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvQXBwL3JlcGVhdFNvdW5kLmpzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL0FwcC9yZXBlYXRlci5zY3NzPzU3NTMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvQXBwL3Jlc2V0R2FtZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9BcHAvc3Rhci1jb250YWluZXIuc2Nzcz9iOTliIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL0FwcC9zdGFydEdhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvQXBwL3N0ZXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvQXBwL3RvR2FtZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9BcHAvdG9UcmFpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9DYXJkL0R1YmxlU2lkZUNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvQ2FyZC9jYXJkLnNjc3M/YjAxMSIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9DYXJkL2NhcmRzLmpzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL01haW5QYWdlL1NpbmdsZVNpZGVDYXJkLmpzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL01haW5QYWdlL21haW5QYWdlLmpzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL01haW5QYWdlL3JlbmRlck1haW5QYWdlLmpzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL01lbnUvYm9vdHN0cmFwUGFuZWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvTWVudS9ib290c3RyYXBQYW5lbC5zY3NzPzNlMGMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvTWVudS9rZXlQYWdlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9NZW51L21lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvU3dpdGNoL3N3aXRjaC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGUuc2NzcyJdLCJuYW1lcyI6WyJzdGFydEJ0biIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJhZGRFdmVudExpc3RlbmVyIiwiZ2FtZURhdGEiLCJnYW1lU3RhcnRlZCIsInJlcGVhdFNvdW5kIiwic3RhcnRHYW1lIiwiY2FyZENvbnRhaW5lciIsInF1ZXJ5U2VsZWN0b3IiLCJldmVudCIsImNhcmQiLCJ0YXJnZXQiLCJjbG9zZXN0Iiwic3RlcCIsImZpbGxlciIsInNlY3Rpb25OYW1lIiwicmVzZXRHYW1lIiwiZmlyc3RSb3ciLCJzZWNvbmRSb3ciLCJpbm5lckhUTUwiLCJpbmRleFNlY3Rpb25OYW1lIiwiY2FyZHMiLCJpbmRleE9mIiwic2VjdGlvbkNhcmRzIiwiZm9yRWFjaCIsIml0ZW0iLCJpbmRleCIsIkR1YmxlU2lkZUNhcmQiLCJjdXJyZW50UGFnZUNhcmRzIiwicHVzaCIsInNlY3Rpb25Jc0dhbWUiLCJ0b0dhbWUiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhcHBlbmRUbyIsImFjdGl2ZVBhZ2UiLCJyYW5kb21DYXJkcyIsImFjdGl2Q2FyZEluZGV4IiwiZXJyb3JzIiwiZ2FtZU92ZXIiLCJiYW5uZXIiLCJjcmVhdGVFbGVtZW50IiwiYWRkIiwidGV4dCIsImltZyIsInNvdW5kIiwiQXVkaW8iLCJhcHBlbmQiLCJib2R5Iiwic3JjIiwicGxheSIsInNldFRpbWVvdXQiLCJjbGljayIsInNheSIsInN0eWxlIiwiYmFja2dyb3VuZEltYWdlIiwic3RhckNvbnRhaW5lciIsInNvcnQiLCJNYXRoIiwicmFuZG9tIiwic3RhciIsIm5vZGUiLCJsZW5ndGgiLCJwcmVwZW5kIiwidG9UcmFpbiIsImNhcmREYXRhIiwid29yZCIsImNhcmRCb2R5IiwiY2FyZEltZyIsImNhcmRCb2R5RnJvbnQiLCJmcm9udFNpZGUiLCJyb3RhdGVCdG5Gcm9udCIsInR5cGUiLCJiYWNrU2lkZSIsImNhcmRCb2R5QmFjayIsImNhcmRJbWdCYWNrIiwiaW1hZ2UiLCJjYXJkSGVhZGVyQmFjayIsInRyYW5zbGF0aW9uIiwiYXVkaW9TcmMiLCJlIiwic291bmRJc09mZiIsImNhcmRIZWFkZXIiLCJTaW5nbGVTaWRlQ2FyZCIsImhlYWRlciIsImNhcmRXcmFwcGVyIiwicmVuZGVyTWFpblBhZ2UiLCJpZCIsIk9iamVjdCIsImVudHJpZXMiLCJrZXlQYWdlcyIsImZpbmQiLCIkIiwicmVhZHkiLCJ0cmlnZ2VyIiwib3ZlcmxheSIsImlzQ2xvc2VkIiwiaGFtYnVyZ2VyQ3Jvc3MiLCJoaWRlIiwicmVtb3ZlQ2xhc3MiLCJhZGRDbGFzcyIsInNob3ciLCJ0b2dnbGVDbGFzcyIsIkFjdGlvblNldEEiLCJBY3Rpb25TZXRCIiwiQWN0aW9uU2V0QyIsIkFkamVjdGl2ZSIsIkFuaW1hbFNldEEiLCJBbmltYWxTZXRCIiwiQ2xvdGhlcyIsIkVtb3Rpb25zIiwic2lkZUJhciIsImFuY2hvciIsImhhbWJ1cmdlciIsImNvbnRhaW5zIiwiZ2FtZVN3aXRjaCIsImNoZWNrZWQiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNB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QUNBekUsbUVBQU0sQ0FBQ0MsV0FBRCxDQUFOO0FBQ0Q7O0FBQ0QsTUFBTW9CLFVBQVUsR0FBRzRFLE9BQU8sQ0FBQ3ZHLGFBQVIsQ0FBc0IsU0FBdEIsQ0FBbkI7O0FBQ0EsTUFBSTJCLFVBQUosRUFBZ0I7QUFBRUEsY0FBVSxDQUFDSCxTQUFYLENBQXFCQyxNQUFyQixDQUE0QixRQUE1QjtBQUF3Qzs7QUFDMUQrRSxRQUFNLENBQUNoRixTQUFQLENBQWlCVSxHQUFqQixDQUFxQixRQUFyQjtBQUNBLE1BQU11RSxTQUFTLEdBQUdqSCxRQUFRLENBQUNRLGFBQVQsQ0FBdUIsWUFBdkIsQ0FBbEI7O0FBQ0EsTUFBSXlHLFNBQVMsQ0FBQ2pGLFNBQVYsQ0FBb0JrRixRQUFwQixDQUE2QixTQUE3QixDQUFKLEVBQTZDO0FBQzNDRCxhQUFTLENBQUM3RCxLQUFWO0FBQ0Q7O0FBQ0RqRCx3REFBUSxDQUFDZ0MsVUFBVCxHQUFzQjZFLE1BQU0sQ0FBQ3pCLEVBQTdCO0FBQ0QsQ0FqQkQsRTs7Ozs7Ozs7Ozs7O0FDTkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBLElBQU00QixVQUFVLEdBQUduSCxRQUFRLENBQUNRLGFBQVQsQ0FBdUIsZUFBdkIsQ0FBbkI7QUFDQTJHLFVBQVUsQ0FBQ2pILGdCQUFYLENBQTRCLFFBQTVCLEVBQXNDLFlBQU07QUFDMUMsTUFBSWlILFVBQVUsQ0FBQ0MsT0FBZixFQUF3QjtBQUN0QnJGLDhEQUFNO0FBQ1AsR0FGRCxNQUVPO0FBQ0xpQyxnRUFBTztBQUNSO0FBQ0YsQ0FORCxFOzs7Ozs7Ozs7OztBQ0pBLHVDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0ICcuL3N0eWxlLnNjc3MnO1xuaW1wb3J0ICcuL21vZHVsZXMvTWFpblBhZ2UvbWFpblBhZ2UnO1xuaW1wb3J0ICcuL21vZHVsZXMvTWVudS9tZW51JztcbmltcG9ydCAnLi9tb2R1bGVzL1N3aXRjaC9zd2l0Y2gnO1xuaW1wb3J0ICcuL21vZHVsZXMvQXBwL3JlcGVhdGVyLnNjc3MnO1xuaW1wb3J0ICcuL21vZHVsZXMvQXBwL2FwcCc7XG5pbXBvcnQgJy4vbW9kdWxlcy9BcHAvYmFubmVyLnNjc3MnO1xuaW1wb3J0ICcuL21vZHVsZXMvQXBwL3N0YXItY29udGFpbmVyLnNjc3MnO1xuaW1wb3J0ICcuL21vZHVsZXMvQ2FyZC9jYXJkLnNjc3MnO1xuaW1wb3J0ICcuL21vZHVsZXMvTWVudS9ib290c3RyYXBQYW5lbCc7XG5pbXBvcnQgJy4vbW9kdWxlcy9NZW51L2Jvb3RzdHJhcFBhbmVsLnNjc3MnO1xuIiwiaW1wb3J0IHsgZ2FtZURhdGEgfSBmcm9tICcuL2dhbWVEYXRhJztcbmltcG9ydCB7IHJlcGVhdFNvdW5kIH0gZnJvbSAnLi9yZXBlYXRTb3VuZCc7XG5pbXBvcnQgeyBzdGFydEdhbWUgfSBmcm9tICcuL3N0YXJ0R2FtZSc7XG5pbXBvcnQgeyBzdGVwIH0gZnJvbSAnLi9zdGVwJztcblxuY29uc3Qgc3RhcnRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhcnQnKTtcbnN0YXJ0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBpZiAoZ2FtZURhdGEuZ2FtZVN0YXJ0ZWQpIHtcbiAgICByZXBlYXRTb3VuZCgpO1xuICB9IGVsc2Uge1xuICAgIHN0YXJ0R2FtZSgpO1xuICB9XG59KTtcblxuY29uc3QgY2FyZENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkLWNvbnRhaW5lcicpO1xuXG5jYXJkQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gIGNvbnN0IGNhcmQgPSBldmVudC50YXJnZXQuY2xvc2VzdCgnLmNhcmQnKTtcbiAgaWYgKCFjYXJkKSByZXR1cm47XG4gIGlmIChnYW1lRGF0YS5nYW1lU3RhcnRlZCkge1xuICAgIHN0ZXAoY2FyZCk7XG4gIH1cbn0pO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IHsgY2FyZHMgfSBmcm9tICcuLi9DYXJkL2NhcmRzJztcbmltcG9ydCB7IER1YmxlU2lkZUNhcmQgfSBmcm9tICcuLi9DYXJkL0R1YmxlU2lkZUNhcmQnO1xuaW1wb3J0IHsgZ2FtZURhdGEgfSBmcm9tICcuL2dhbWVEYXRhJztcbmltcG9ydCB7IHJlc2V0R2FtZSB9IGZyb20gJy4vcmVzZXRHYW1lJztcblxuZXhwb3J0IGZ1bmN0aW9uIGZpbGxlcihzZWN0aW9uTmFtZSkge1xuICByZXNldEdhbWUoKTtcbiAgY29uc3QgZmlyc3RSb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucm93LWZpcnN0Jyk7XG4gIGNvbnN0IHNlY29uZFJvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yb3ctc2Vjb25kJyk7XG4gIGZpcnN0Um93LmlubmVySFRNTCA9ICcnO1xuICBzZWNvbmRSb3cuaW5uZXJIVE1MID0gJyc7XG4gIGNvbnN0IGluZGV4U2VjdGlvbk5hbWUgPSBjYXJkc1swXS5pbmRleE9mKHNlY3Rpb25OYW1lKTtcbiAgY29uc3Qgc2VjdGlvbkNhcmRzID0gY2FyZHNbaW5kZXhTZWN0aW9uTmFtZSArIDFdO1xuICBzZWN0aW9uQ2FyZHMuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBjYXJkID0gbmV3IER1YmxlU2lkZUNhcmQoaXRlbSk7XG4gICAgZ2FtZURhdGEuY3VycmVudFBhZ2VDYXJkcy5wdXNoKGNhcmQpO1xuICAgIGlmIChnYW1lRGF0YS5zZWN0aW9uSXNHYW1lKSB7XG4gICAgICBjYXJkLnRvR2FtZSgpO1xuICAgICAgY29uc3Qgc3RhcnRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhcnQnKTtcbiAgICAgIHN0YXJ0QnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2Qtbm9uZScpO1xuICAgIH1cbiAgICBpZiAoaW5kZXggPCA0KSB7XG4gICAgICBjYXJkLmFwcGVuZFRvKGZpcnN0Um93KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2FyZC5hcHBlbmRUbyhzZWNvbmRSb3cpO1xuICAgIH1cbiAgfSk7XG59XG4iLCJleHBvcnQgY29uc3QgZ2FtZURhdGEgPSB7XG4gIGFjdGl2ZVBhZ2U6ICdtYWluUGFnZScsXG4gIHNlY3Rpb25Jc0dhbWU6IGZhbHNlLFxuICBjdXJyZW50UGFnZUNhcmRzOiBbXSxcbiAgZ2FtZVN0YXJ0ZWQ6IGZhbHNlLFxuICByYW5kb21DYXJkczogW10sXG4gIGFjdGl2Q2FyZEluZGV4OiAwLFxuICBlcnJvcnM6IDAsXG59O1xuIiwiaW1wb3J0IHsgZ2FtZURhdGEgfSBmcm9tICcuL2dhbWVEYXRhJztcbmltcG9ydCB7IHJlc2V0R2FtZSB9IGZyb20gJy4vcmVzZXRHYW1lJztcblxuZXhwb3J0IGZ1bmN0aW9uIGdhbWVPdmVyKCkge1xuICBjb25zdCBiYW5uZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgYmFubmVyLmNsYXNzTGlzdC5hZGQoJ2Jhbm5lcicsICd0ZXh0LWNlbnRlcicpO1xuICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBpbWcuY2xhc3NMaXN0LmFkZCgnaW1nLWZsdWlkJyk7XG4gIGNvbnN0IHNvdW5kID0gbmV3IEF1ZGlvKCk7XG4gIGJhbm5lci5hcHBlbmQodGV4dCwgaW1nKTtcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmQoYmFubmVyKTtcbiAgY29uc3QgZmlyc3RSb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucm93LWZpcnN0Jyk7XG4gIGNvbnN0IHNlY29uZFJvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yb3ctc2Vjb25kJyk7XG4gIGZpcnN0Um93LmlubmVySFRNTCA9ICcnO1xuICBzZWNvbmRSb3cuaW5uZXJIVE1MID0gJyc7XG4gIGlmICghZ2FtZURhdGEuZXJyb3JzKSB7XG4gICAgc291bmQuc3JjID0gJy4vYXVkaW8vc3VjY2Vzcy5tcDMnO1xuICAgIHRleHQuaW5uZXJIVE1MID0gJ9Cc0L7Qu9C+0LTQtdGGISc7XG4gICAgaW1nLnNyYyA9ICcuL2ltZy93aW4ucG5nJztcbiAgfSBlbHNlIHtcbiAgICBzb3VuZC5zcmMgPSAnLi9hdWRpby9mYWlsdXJlLm1wMyc7XG4gICAgdGV4dC5pbm5lckhUTUwgPSBg0JrQvtC70LjRh9C10YHRgtCy0L4g0L7RiNC40LHQvtC6OiAke2dhbWVEYXRhLmVycm9yc31gO1xuICAgIGltZy5zcmMgPSAnLi9pbWcvbG9zZS5wbmcnO1xuICB9XG4gIHNvdW5kLnBsYXkoKTtcbiAgcmVzZXRHYW1lKCk7XG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIGJhbm5lci5yZW1vdmUoKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpblBhZ2UnKS5jbGljaygpO1xuICB9LCAzMDAwKTtcbn1cbiIsImltcG9ydCB7IGdhbWVEYXRhIH0gZnJvbSAnLi9nYW1lRGF0YSc7XG5cbmV4cG9ydCBmdW5jdGlvbiByZXBlYXRTb3VuZCgpIHtcbiAgZ2FtZURhdGEucmFuZG9tQ2FyZHNbZ2FtZURhdGEuYWN0aXZDYXJkSW5kZXhdLnNheSgpO1xufVxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IHsgZ2FtZURhdGEgfSBmcm9tICcuL2dhbWVEYXRhJztcblxuZXhwb3J0IGZ1bmN0aW9uIHJlc2V0R2FtZSgpIHtcbiAgZ2FtZURhdGEuY3VycmVudFBhZ2VDYXJkcyA9IFtdO1xuICBnYW1lRGF0YS5nYW1lU3RhcnRlZCA9IGZhbHNlO1xuICBnYW1lRGF0YS5yYW5kb21DYXJkcyA9IFtdO1xuICBnYW1lRGF0YS5hY3RpdkNhcmRJbmRleCA9IDA7XG4gIGdhbWVEYXRhLmVycm9ycyA9IDA7XG4gIGNvbnN0IHN0YXJ0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0YXJ0Jyk7XG4gIHN0YXJ0QnRuLmNsYXNzTGlzdC5yZW1vdmUoJ3JlcGVhdGVyJywgJ3JvdW5kZWQtY2lyY2xlJyk7XG4gIHN0YXJ0QnRuLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9ICcnO1xuICBzdGFydEJ0bi5pbm5lckhUTUwgPSAnU1RBUlQgR0FNRSc7XG4gIGNvbnN0IHN0YXJDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3Rhci1jb250YWluZXInKTtcbiAgc3RhckNvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbn1cbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCB7IGdhbWVEYXRhIH0gZnJvbSAnLi9nYW1lRGF0YSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGFydEdhbWUoKSB7XG4gIGNvbnN0IHN0YXJ0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0YXJ0Jyk7XG4gIHN0YXJ0QnRuLmNsYXNzTGlzdC5hZGQoJ3JlcGVhdGVyJywgJ3JvdW5kZWQtY2lyY2xlJyk7XG4gIHN0YXJ0QnRuLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9ICd1cmwoLi9pbWcvcmVwZWF0LnN2ZyknO1xuICBzdGFydEJ0bi5pbm5lckhUTUwgPSAnJztcbiAgZ2FtZURhdGEucmFuZG9tQ2FyZHMgPSBnYW1lRGF0YS5jdXJyZW50UGFnZUNhcmRzLnNvcnQoXG4gICAgKCkgPT4gTWF0aC5yYW5kb20oKSAtIDAuNSxcbiAgKTtcbiAgZ2FtZURhdGEucmFuZG9tQ2FyZHNbZ2FtZURhdGEuYWN0aXZDYXJkSW5kZXhdLnNheSgpO1xuICBnYW1lRGF0YS5nYW1lU3RhcnRlZCA9IHRydWU7XG59XG4iLCJpbXBvcnQgeyBnYW1lRGF0YSB9IGZyb20gJy4vZ2FtZURhdGEnO1xuaW1wb3J0IHsgZ2FtZU92ZXIgfSBmcm9tICcuL2dhbWVPdmVyJztcbmltcG9ydCB7IHJlc2V0R2FtZSB9IGZyb20gJy4vcmVzZXRHYW1lJztcblxuZXhwb3J0IGZ1bmN0aW9uIHN0ZXAoY2FyZCkge1xuICBjb25zdCBzb3VuZCA9IG5ldyBBdWRpbygpO1xuICBjb25zdCBzdGFyQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0YXItY29udGFpbmVyJyk7XG4gIGNvbnN0IHN0YXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgaWYgKGNhcmQgIT09IGdhbWVEYXRhLnJhbmRvbUNhcmRzW2dhbWVEYXRhLmFjdGl2Q2FyZEluZGV4XS5ub2RlKSB7XG4gICAgc291bmQuc3JjID0gJy4vYXVkaW8vZXJyb3IubXAzJztcblxuICAgIGdhbWVEYXRhLmVycm9ycyArPSAxO1xuICAgIHN0YXIuc3JjID0gJy4vaW1nL3N0YXIuc3ZnJztcbiAgfSBlbHNlIHtcbiAgICBzdGFyLnNyYyA9ICcuL2ltZy9zdGFyLXdpbi5zdmcnO1xuICAgIHNvdW5kLnNyYyA9ICcuL2F1ZGlvL2NvcnJlY3QubXAzJztcbiAgICBjYXJkLmNsYXNzTGlzdC5hZGQoJ2luYWN0aXZlJyk7XG4gICAgaWYgKGdhbWVEYXRhLmFjdGl2Q2FyZEluZGV4ID09PSBnYW1lRGF0YS5yYW5kb21DYXJkcy5sZW5ndGggLSAxKSB7XG4gICAgICBnYW1lT3ZlcigpO1xuICAgICAgcmVzZXRHYW1lKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGdhbWVEYXRhLmFjdGl2Q2FyZEluZGV4ICs9IDE7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBnYW1lRGF0YS5yYW5kb21DYXJkc1tnYW1lRGF0YS5hY3RpdkNhcmRJbmRleF0uc2F5KCk7XG4gICAgfSwgNTAwKTtcbiAgfVxuICBzb3VuZC5wbGF5KCk7XG4gIHN0YXJDb250YWluZXIucHJlcGVuZChzdGFyKTtcbn1cbiIsImltcG9ydCB7IGdhbWVEYXRhIH0gZnJvbSAnLi9nYW1lRGF0YSc7XG5cbmV4cG9ydCBmdW5jdGlvbiB0b0dhbWUoKSB7XG4gIGdhbWVEYXRhLmN1cnJlbnRQYWdlQ2FyZHMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgIGl0ZW0udG9HYW1lKCk7XG4gIH0pO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2lkZWJhci13cmFwcGVyJykuY2xhc3NMaXN0LnJlbW92ZSgnYmctcHJpbWFyeScpO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2lkZWJhci13cmFwcGVyJykuY2xhc3NMaXN0LmFkZCgnYmctc3VjY2VzcycpO1xuICBnYW1lRGF0YS5zZWN0aW9uSXNHYW1lID0gdHJ1ZTtcbiAgaWYgKGdhbWVEYXRhLmFjdGl2ZVBhZ2UgIT09ICdtYWluUGFnZScpIHtcbiAgICBjb25zdCBzdGFydEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGFydCcpO1xuICAgIHN0YXJ0QnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2Qtbm9uZScpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBnYW1lRGF0YSB9IGZyb20gJy4vZ2FtZURhdGEnO1xuXG5leHBvcnQgZnVuY3Rpb24gdG9UcmFpbigpIHtcbiAgZ2FtZURhdGEuY3VycmVudFBhZ2VDYXJkcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgaXRlbS50b1RyYWluKCk7XG4gIH0pO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2lkZWJhci13cmFwcGVyJykuY2xhc3NMaXN0LnJlbW92ZSgnYmctc3VjY2VzcycpO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2lkZWJhci13cmFwcGVyJykuY2xhc3NMaXN0LmFkZCgnYmctcHJpbWFyeScpO1xuICBnYW1lRGF0YS5zZWN0aW9uSXNHYW1lID0gZmFsc2U7XG4gIGNvbnN0IHN0YXJ0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0YXJ0Jyk7XG4gIHN0YXJ0QnRuLmNsYXNzTGlzdC5hZGQoJ2Qtbm9uZScpO1xufVxuIiwiaW1wb3J0IHsgU2luZ2xlU2lkZUNhcmQgfSBmcm9tICcuLi9NYWluUGFnZS9TaW5nbGVTaWRlQ2FyZCc7XHJcblxyXG5leHBvcnQgY2xhc3MgRHVibGVTaWRlQ2FyZCBleHRlbmRzIFNpbmdsZVNpZGVDYXJkIHtcclxuICBjb25zdHJ1Y3RvcihjYXJkRGF0YSkge1xyXG4gICAgc3VwZXIoY2FyZERhdGEsIGNhcmREYXRhLndvcmQpO1xyXG4gICAgdGhpcy5jYXJkQm9keS5yZW1vdmUoKTtcclxuICAgIHRoaXMuY2FyZEltZy5jbGFzc0xpc3QucmVtb3ZlKCdyb3VuZGVkLWNpcmNsZScsICdpbWctc3FyJyk7XHJcbiAgICB0aGlzLmNhcmRCb2R5RnJvbnQgPSB0aGlzLmNhcmRCb2R5O1xyXG4gICAgdGhpcy5mcm9udFNpZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHRoaXMuZnJvbnRTaWRlLmNsYXNzTGlzdC5hZGQoJ2Zyb250Jyk7XHJcbiAgICB0aGlzLmZyb250U2lkZS5hcHBlbmQodGhpcy5jYXJkQm9keUZyb250KTtcclxuICAgIHRoaXMucm90YXRlQnRuRnJvbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgdGhpcy5yb3RhdGVCdG5Gcm9udC5jbGFzc0xpc3QuYWRkKCdjYXJkLXJvdGF0ZS1idG4nKTtcclxuICAgIHRoaXMucm90YXRlQnRuRnJvbnQudHlwZSA9ICdpbWFnZSc7XHJcbiAgICB0aGlzLnJvdGF0ZUJ0bkZyb250LnNyYyA9ICdpbWcvcm90YXRlLnN2Zyc7XHJcbiAgICB0aGlzLmJhY2tTaWRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB0aGlzLmJhY2tTaWRlLmNsYXNzTGlzdC5hZGQoJ2JhY2snKTtcclxuICAgIHRoaXMuY2FyZEJvZHlCYWNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB0aGlzLmNhcmRCb2R5QmFjay5jbGFzc0xpc3QuYWRkKCdjYXJkLWJvZHknLCAndGV4dC1jZW50ZXInKTtcclxuICAgIHRoaXMuYmFja1NpZGUuYXBwZW5kKHRoaXMuY2FyZEJvZHlCYWNrKTtcclxuICAgIHRoaXMuY2FyZEJvZHlGcm9udC5hcHBlbmQodGhpcy5yb3RhdGVCdG5Gcm9udCk7XHJcbiAgICB0aGlzLmNhcmRJbWdCYWNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICB0aGlzLmNhcmRJbWdCYWNrLnNyYyA9IGNhcmREYXRhLmltYWdlO1xyXG4gICAgdGhpcy5jYXJkSW1nQmFjay5jbGFzc0xpc3QuYWRkKCdjYXJkLWltZy10b3AnKTtcclxuICAgIHRoaXMuY2FyZEhlYWRlckJhY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xyXG4gICAgdGhpcy5jYXJkSGVhZGVyQmFjay5pbm5lckhUTUwgPSBjYXJkRGF0YS50cmFuc2xhdGlvbjtcclxuICAgIHRoaXMuY2FyZEhlYWRlckJhY2suY2xhc3NMaXN0LmFkZCgnY2FyZC10aXRsZScpO1xyXG4gICAgdGhpcy5jYXJkQm9keUJhY2suYXBwZW5kKHRoaXMuY2FyZEltZ0JhY2ssIHRoaXMuY2FyZEhlYWRlckJhY2spO1xyXG4gICAgdGhpcy5ub2RlLmFwcGVuZCh0aGlzLmZyb250U2lkZSwgdGhpcy5iYWNrU2lkZSk7XHJcbiAgICB0aGlzLm5vZGUuY2xhc3NMaXN0LnJlbW92ZSgnbWFpbi1wYWdlLWNhcmQnKTtcclxuICAgIHRoaXMucm90YXRlQnRuRnJvbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMubm9kZS5jbGFzc0xpc3QuYWRkKCdyb3RhdGUnKTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5ub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMubm9kZS5jbGFzc0xpc3QucmVtb3ZlKCdyb3RhdGUnKTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5zb3VuZCA9IG5ldyBBdWRpbygpO1xyXG4gICAgdGhpcy5zb3VuZC5zcmMgPSBjYXJkRGF0YS5hdWRpb1NyYztcclxuICAgIHRoaXMubm9kZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLnNvdW5kSXNPZmYpIHJldHVybjtcclxuICAgICAgaWYgKGUudGFyZ2V0ICE9PSB0aGlzLnJvdGF0ZUJ0bkZyb250KSB0aGlzLnNheSgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICB0b1RyYWluKCkge1xyXG4gICAgdGhpcy5ub2RlLmNsYXNzTGlzdC5yZW1vdmUoJ2JnLXN1Y2Nlc3MnKTtcclxuICAgIHRoaXMubm9kZS5jbGFzc0xpc3QuYWRkKCdiZy1wcmltYXJ5Jyk7XHJcbiAgICB0aGlzLmNhcmRIZWFkZXIuY2xhc3NMaXN0LnJlbW92ZSgnZC1ub25lJyk7XHJcbiAgICB0aGlzLnJvdGF0ZUJ0bkZyb250LmNsYXNzTGlzdC5yZW1vdmUoJ2Qtbm9uZScpO1xyXG4gICAgdGhpcy5zb3VuZElzT2ZmID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICB0b0dhbWUoKSB7XHJcbiAgICB0aGlzLm5vZGUuY2xhc3NMaXN0LnJlbW92ZSgnYmctcHJpbWFyeScpO1xyXG4gICAgdGhpcy5ub2RlLmNsYXNzTGlzdC5hZGQoJ2JnLXN1Y2Nlc3MnKTtcclxuICAgIHRoaXMuY2FyZEhlYWRlci5jbGFzc0xpc3QuYWRkKCdkLW5vbmUnKTtcclxuICAgIHRoaXMucm90YXRlQnRuRnJvbnQuY2xhc3NMaXN0LmFkZCgnZC1ub25lJyk7XHJcbiAgICB0aGlzLnNvdW5kSXNPZmYgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgc2F5KCkge1xyXG4gICAgdGhpcy5zb3VuZC5wbGF5KCk7XHJcbiAgfVxyXG59XHJcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImV4cG9ydCBjb25zdCBjYXJkcyA9IFtcbiAgWydBY3Rpb24gKHNldCBBKScsICdBY3Rpb24gKHNldCBCKScsICdBY3Rpb24gKHNldCBDKScsICdBZGplY3RpdmUnLCAnQW5pbWFsIChzZXQgQSknLCAnQW5pbWFsIChzZXQgQiknLCAnQ2xvdGhlcycsICdFbW90aW9ucyddLFxuICBbXG4gICAge1xuICAgICAgd29yZDogJ2NyeScsXG4gICAgICB0cmFuc2xhdGlvbjogJ9C/0LvQsNC60LDRgtGMJyxcbiAgICAgIGltYWdlOiAnaW1nL2NyeS5qcGcnLFxuICAgICAgYXVkaW9TcmM6ICdhdWRpby9jcnkubXAzJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHdvcmQ6ICdkYW5jZScsXG4gICAgICB0cmFuc2xhdGlvbjogJ9GC0LDQvdGG0LXQstCw0YLRjCcsXG4gICAgICBpbWFnZTogJ2ltZy9kYW5jZS5qcGcnLFxuICAgICAgYXVkaW9TcmM6ICdhdWRpby9kYW5jZS5tcDMnLFxuICAgIH0sXG4gICAge1xuICAgICAgd29yZDogJ2RpdmUnLFxuICAgICAgdHJhbnNsYXRpb246ICfQvdGL0YDRj9GC0YwnLFxuICAgICAgaW1hZ2U6ICdpbWcvZGl2ZS5qcGcnLFxuICAgICAgYXVkaW9TcmM6ICdhdWRpby9kaXZlLm1wMycsXG4gICAgfSxcbiAgICB7XG4gICAgICB3b3JkOiAnZHJhdycsXG4gICAgICB0cmFuc2xhdGlvbjogJ9GA0LjRgdC+0LLQsNGC0YwnLFxuICAgICAgaW1hZ2U6ICdpbWcvZHJhdy5qcGcnLFxuICAgICAgYXVkaW9TcmM6ICdhdWRpby9kcmF3Lm1wMycsXG4gICAgfSxcbiAgICB7XG4gICAgICB3b3JkOiAnZmlzaCcsXG4gICAgICB0cmFuc2xhdGlvbjogJ9C70L7QstC40YLRjCDRgNGL0LHRgycsXG4gICAgICBpbWFnZTogJ2ltZy9maXNoLmpwZycsXG4gICAgICBhdWRpb1NyYzogJ2F1ZGlvL2Zpc2gubXAzJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHdvcmQ6ICdmbHknLFxuICAgICAgdHJhbnNsYXRpb246ICfQu9C10YLQsNGC0YwnLFxuICAgICAgaW1hZ2U6ICdpbWcvZmx5LmpwZycsXG4gICAgICBhdWRpb1NyYzogJ2F1ZGlvL2ZseS5tcDMnLFxuICAgIH0sXG4gICAge1xuICAgICAgd29yZDogJ2h1ZycsXG4gICAgICB0cmFuc2xhdGlvbjogJ9C+0LHQvdC40LzQsNGC0YwnLFxuICAgICAgaW1hZ2U6ICdpbWcvaHVnLmpwZycsXG4gICAgICBhdWRpb1NyYzogJ2F1ZGlvL2h1Zy5tcDMnLFxuICAgIH0sXG4gICAge1xuICAgICAgd29yZDogJ2p1bXAnLFxuICAgICAgdHJhbnNsYXRpb246ICfQv9GA0YvQs9Cw0YLRjCcsXG4gICAgICBpbWFnZTogJ2ltZy9qdW1wLmpwZycsXG4gICAgICBhdWRpb1NyYzogJ2F1ZGlvL2p1bXAubXAzJyxcbiAgICB9LFxuICBdLFxuICBbXG4gICAge1xuICAgICAgd29yZDogJ29wZW4nLFxuICAgICAgdHJhbnNsYXRpb246ICfQvtGC0LrRgNGL0LLQsNGC0YwnLFxuICAgICAgaW1hZ2U6ICdpbWcvb3Blbi5qcGcnLFxuICAgICAgYXVkaW9TcmM6ICdhdWRpby9vcGVuLm1wMycsXG4gICAgfSxcbiAgICB7XG4gICAgICB3b3JkOiAncGxheScsXG4gICAgICB0cmFuc2xhdGlvbjogJ9C40LPRgNCw0YLRjCcsXG4gICAgICBpbWFnZTogJ2ltZy9wbGF5LmpwZycsXG4gICAgICBhdWRpb1NyYzogJ2F1ZGlvL3BsYXkubXAzJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHdvcmQ6ICdwb2ludCcsXG4gICAgICB0cmFuc2xhdGlvbjogJ9GD0LrQsNC30YvQstCw0YLRjCcsXG4gICAgICBpbWFnZTogJ2ltZy9wb2ludC5qcGcnLFxuICAgICAgYXVkaW9TcmM6ICdhdWRpby9wb2ludC5tcDMnLFxuICAgIH0sXG4gICAge1xuICAgICAgd29yZDogJ3JpZGUnLFxuICAgICAgdHJhbnNsYXRpb246ICfQtdC30LTQuNGC0YwnLFxuICAgICAgaW1hZ2U6ICdpbWcvcmlkZS5qcGcnLFxuICAgICAgYXVkaW9TcmM6ICdhdWRpby9yaWRlLm1wMycsXG4gICAgfSxcbiAgICB7XG4gICAgICB3b3JkOiAncnVuJyxcbiAgICAgIHRyYW5zbGF0aW9uOiAn0LHQtdCz0LDRgtGMJyxcbiAgICAgIGltYWdlOiAnaW1nL3J1bi5qcGcnLFxuICAgICAgYXVkaW9TcmM6ICdhdWRpby9ydW4ubXAzJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHdvcmQ6ICdzaW5nJyxcbiAgICAgIHRyYW5zbGF0aW9uOiAn0L/QtdGC0YwnLFxuICAgICAgaW1hZ2U6ICdpbWcvc2luZy5qcGcnLFxuICAgICAgYXVkaW9TcmM6ICdhdWRpby9zaW5nLm1wMycsXG4gICAgfSxcbiAgICB7XG4gICAgICB3b3JkOiAnc2tpcCcsXG4gICAgICB0cmFuc2xhdGlvbjogJ9C/0YDQvtC/0YPRgdC60LDRgtGMLCDQv9GA0YvQs9Cw0YLRjCcsXG4gICAgICBpbWFnZTogJ2ltZy9za2lwLmpwZycsXG4gICAgICBhdWRpb1NyYzogJ2F1ZGlvL3NraXAubXAzJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHdvcmQ6ICdzd2ltJyxcbiAgICAgIHRyYW5zbGF0aW9uOiAn0L/Qu9Cw0LLQsNGC0YwnLFxuICAgICAgaW1hZ2U6ICdpbWcvc3dpbS5qcGcnLFxuICAgICAgYXVkaW9TcmM6ICdhdWRpby9zd2ltLm1wMycsXG4gICAgfSxcbiAgXSxcbiAgW1xuICAgIHtcbiAgICAgIHdvcmQ6ICdhcmd1ZScsXG4gICAgICB0cmFuc2xhdGlvbjogJ9GB0L/QvtGA0LjRgtGMJyxcbiAgICAgIGltYWdlOiAnaW1nL2FyZ3VlLmpwZycsXG4gICAgICBhdWRpb1NyYzogJ2F1ZGlvL2FyZ3VlLm1wMycsXG4gICAgfSxcbiAgICB7XG4gICAgICB3b3JkOiAnYnVpbGQnLFxuICAgICAgdHJhbnNsYXRpb246ICfRgdGC0YDQvtC40YLRjCcsXG4gICAgICBpbWFnZTogJ2ltZy9idWlsZC5qcGcnLFxuICAgICAgYXVkaW9TcmM6ICdhdWRpby9idWlsZC5tcDMnLFxuICAgIH0sXG4gICAge1xuICAgICAgd29yZDogJ2NhcnJ5JyxcbiAgICAgIHRyYW5zbGF0aW9uOiAn0L3QtdGB0YLQuCcsXG4gICAgICBpbWFnZTogJ2ltZy9jYXJyeS5qcGcnLFxuICAgICAgYXVkaW9TcmM6ICdhdWRpby9jYXJyeS5tcDMnLFxuICAgIH0sXG4gICAge1xuICAgICAgd29yZDogJ2NhdGNoJyxcbiAgICAgIHRyYW5zbGF0aW9uOiAn0LvQvtCy0LjRgtGMJyxcbiAgICAgIGltYWdlOiAnaW1nL2NhdGNoLmpwZycsXG4gICAgICBhdWRpb1NyYzogJ2F1ZGlvL2NhdGNoLm1wMycsXG4gICAgfSxcbiAgICB7XG4gICAgICB3b3JkOiAnZHJpdmUnLFxuICAgICAgdHJhbnNsYXRpb246ICfQstC+0LTQuNGC0Ywg0LzQsNGI0LjQvdGDJyxcbiAgICAgIGltYWdlOiAnaW1nL2RyaXZlLmpwZycsXG4gICAgICBhdWRpb1NyYzogJ2F1ZGlvL2RyaXZlLm1wMycsXG4gICAgfSxcbiAgICB7XG4gICAgICB3b3JkOiAnZHJvcCcsXG4gICAgICB0cmFuc2xhdGlvbjogJ9C/0LDQtNCw0YLRjCcsXG4gICAgICBpbWFnZTogJ2ltZy9kcm9wLmpwZycsXG4gICAgICBhdWRpb1NyYzogJ2F1ZGlvL2Ryb3AubXAzJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHdvcmQ6ICdwdWxsJyxcbiAgICAgIHRyYW5zbGF0aW9uOiAn0YLRj9C90YPRgtGMJyxcbiAgICAgIGltYWdlOiAnaW1nL3B1bGwuanBnJyxcbiAgICAgIGF1ZGlvU3JjOiAnYXVkaW8vcHVsbC5tcDMnLFxuICAgIH0sXG4gICAge1xuICAgICAgd29yZDogJ3B1c2gnLFxuICAgICAgdHJhbnNsYXRpb246ICfRgtC+0LvQutCw0YLRjCcsXG4gICAgICBpbWFnZTogJ2ltZy9wdXNoLmpwZycsXG4gICAgICBhdWRpb1NyYzogJ2F1ZGlvL3B1c2gubXAzJyxcbiAgICB9LFxuICBdLFxuICBbXG4gICAge1xuICAgICAgd29yZDogJ2JpZycsXG4gICAgICB0cmFuc2xhdGlvbjogJ9Cx0L7Qu9GM0YjQvtC5JyxcbiAgICAgIGltYWdlOiAnaW1nL2JpZy5qcGcnLFxuICAgICAgYXVkaW9TcmM6ICdhdWRpby9iaWcubXAzJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHdvcmQ6ICdzbWFsbCcsXG4gICAgICB0cmFuc2xhdGlvbjogJ9C80LDQu9C10L3RjNC60LjQuScsXG4gICAgICBpbWFnZTogJ2ltZy9zbWFsbC5qcGcnLFxuICAgICAgYXVkaW9TcmM6ICdhdWRpby9zbWFsbC5tcDMnLFxuICAgIH0sXG4gICAge1xuICAgICAgd29yZDogJ2Zhc3QnLFxuICAgICAgdHJhbnNsYXRpb246ICfQsdGL0YHRgtGA0YvQuScsXG4gICAgICBpbWFnZTogJ2ltZy9mYXN0LmpwZycsXG4gICAgICBhdWRpb1NyYzogJ2F1ZGlvL2Zhc3QubXAzJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHdvcmQ6ICdzbG93JyxcbiAgICAgIHRyYW5zbGF0aW9uOiAn0LzQtdC00LvQtdC90L3Ri9C5JyxcbiAgICAgIGltYWdlOiAnaW1nL3Nsb3cuanBnJyxcbiAgICAgIGF1ZGlvU3JjOiAnYXVkaW8vc2xvdy5tcDMnLFxuICAgIH0sXG4gICAge1xuICAgICAgd29yZDogJ2ZyaWVuZGx5JyxcbiAgICAgIHRyYW5zbGF0aW9uOiAn0LTRgNGD0LbQtdC70Y7QsdC90YvQuScsXG4gICAgICBpbWFnZTogJ2ltZy9mcmllbmRseS5qcGcnLFxuICAgICAgYXVkaW9TcmM6ICdhdWRpby9mcmllbmRseS5tcDMnLFxuICAgIH0sXG4gICAge1xuICAgICAgd29yZDogJ3VuZnJpZW5kbHknLFxuICAgICAgdHJhbnNsYXRpb246ICfQvdC10LTRgNGD0LbQtdC70Y7QsdC90YvQuScsXG4gICAgICBpbWFnZTogJ2ltZy91bmZyaWVuZGx5LmpwZycsXG4gICAgICBhdWRpb1NyYzogJ2F1ZGlvL3VuZnJpZW5kbHkubXAzJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHdvcmQ6ICd5b3VuZycsXG4gICAgICB0cmFuc2xhdGlvbjogJ9C80L7Qu9C+0LTQvtC5JyxcbiAgICAgIGltYWdlOiAnaW1nL3lvdW5nLmpwZycsXG4gICAgICBhdWRpb1NyYzogJ2F1ZGlvL3lvdW5nLm1wMycsXG4gICAgfSxcbiAgICB7XG4gICAgICB3b3JkOiAnb2xkJyxcbiAgICAgIHRyYW5zbGF0aW9uOiAn0YHRgtCw0YDRi9C5JyxcbiAgICAgIGltYWdlOiAnaW1nL29sZC5qcGcnLFxuICAgICAgYXVkaW9TcmM6ICdhdWRpby9vbGQubXAzJyxcbiAgICB9LFxuICBdLFxuICBbXG4gICAge1xuICAgICAgd29yZDogJ2NhdCcsXG4gICAgICB0cmFuc2xhdGlvbjogJ9C60L7RgicsXG4gICAgICBpbWFnZTogJ2ltZy9jYXQuanBnJyxcbiAgICAgIGF1ZGlvU3JjOiAnYXVkaW8vY2F0Lm1wMycsXG4gICAgfSxcbiAgICB7XG4gICAgICB3b3JkOiAnY2hpY2snLFxuICAgICAgdHJhbnNsYXRpb246ICfRhtGL0L/Qu9GR0L3QvtC6JyxcbiAgICAgIGltYWdlOiAnaW1nL2NoaWNrLmpwZycsXG4gICAgICBhdWRpb1NyYzogJ2F1ZGlvL2NoaWNrLm1wMycsXG4gICAgfSxcbiAgICB7XG4gICAgICB3b3JkOiAnY2hpY2tlbicsXG4gICAgICB0cmFuc2xhdGlvbjogJ9C60YPRgNC40YbQsCcsXG4gICAgICBpbWFnZTogJ2ltZy9jaGlja2VuLmpwZycsXG4gICAgICBhdWRpb1NyYzogJ2F1ZGlvL2NoaWNrZW4ubXAzJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHdvcmQ6ICdkb2cnLFxuICAgICAgdHJhbnNsYXRpb246ICfRgdC+0LHQsNC60LAnLFxuICAgICAgaW1hZ2U6ICdpbWcvZG9nLmpwZycsXG4gICAgICBhdWRpb1NyYzogJ2F1ZGlvL2RvZy5tcDMnLFxuICAgIH0sXG4gICAge1xuICAgICAgd29yZDogJ2hvcnNlJyxcbiAgICAgIHRyYW5zbGF0aW9uOiAn0LvQvtGI0LDQtNGMJyxcbiAgICAgIGltYWdlOiAnaW1nL2hvcnNlLmpwZycsXG4gICAgICBhdWRpb1NyYzogJ2F1ZGlvL2hvcnNlLm1wMycsXG4gICAgfSxcbiAgICB7XG4gICAgICB3b3JkOiAncGlnJyxcbiAgICAgIHRyYW5zbGF0aW9uOiAn0YHQstC40L3RjNGPJyxcbiAgICAgIGltYWdlOiAnaW1nL3BpZy5qcGcnLFxuICAgICAgYXVkaW9TcmM6ICdhdWRpby9waWcubXAzJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHdvcmQ6ICdyYWJiaXQnLFxuICAgICAgdHJhbnNsYXRpb246ICfQutGA0L7Qu9C40LonLFxuICAgICAgaW1hZ2U6ICdpbWcvcmFiYml0LmpwZycsXG4gICAgICBhdWRpb1NyYzogJ2F1ZGlvL3JhYmJpdC5tcDMnLFxuICAgIH0sXG4gICAge1xuICAgICAgd29yZDogJ3NoZWVwJyxcbiAgICAgIHRyYW5zbGF0aW9uOiAn0L7QstGG0LAnLFxuICAgICAgaW1hZ2U6ICdpbWcvc2hlZXAuanBnJyxcbiAgICAgIGF1ZGlvU3JjOiAnYXVkaW8vc2hlZXAubXAzJyxcbiAgICB9LFxuICBdLFxuICBbXG4gICAge1xuICAgICAgd29yZDogJ2JpcmQnLFxuICAgICAgdHJhbnNsYXRpb246ICfQv9GC0LjRhtCwJyxcbiAgICAgIGltYWdlOiAnaW1nL2JpcmQuanBnJyxcbiAgICAgIGF1ZGlvU3JjOiAnYXVkaW8vYmlyZC5tcDMnLFxuICAgIH0sXG4gICAge1xuICAgICAgd29yZDogJ2Zpc2gnLFxuICAgICAgdHJhbnNsYXRpb246ICfRgNGL0LHQsCcsXG4gICAgICBpbWFnZTogJ2ltZy9maXNoMS5qcGcnLFxuICAgICAgYXVkaW9TcmM6ICdhdWRpby9maXNoLm1wMycsXG4gICAgfSxcbiAgICB7XG4gICAgICB3b3JkOiAnZnJvZycsXG4gICAgICB0cmFuc2xhdGlvbjogJ9C20LDQsdCwJyxcbiAgICAgIGltYWdlOiAnaW1nL2Zyb2cuanBnJyxcbiAgICAgIGF1ZGlvU3JjOiAnYXVkaW8vZnJvZy5tcDMnLFxuICAgIH0sXG4gICAge1xuICAgICAgd29yZDogJ2dpcmFmZmUnLFxuICAgICAgdHJhbnNsYXRpb246ICfQttC40YDQsNGE0LAnLFxuICAgICAgaW1hZ2U6ICdpbWcvZ2lyYWZmZS5qcGcnLFxuICAgICAgYXVkaW9TcmM6ICdhdWRpby9naXJhZmZlLm1wMycsXG4gICAgfSxcbiAgICB7XG4gICAgICB3b3JkOiAnbGlvbicsXG4gICAgICB0cmFuc2xhdGlvbjogJ9C70LXQsicsXG4gICAgICBpbWFnZTogJ2ltZy9saW9uLmpwZycsXG4gICAgICBhdWRpb1NyYzogJ2F1ZGlvL2xpb24ubXAzJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHdvcmQ6ICdtb3VzZScsXG4gICAgICB0cmFuc2xhdGlvbjogJ9C80YvRiNGMJyxcbiAgICAgIGltYWdlOiAnaW1nL21vdXNlLmpwZycsXG4gICAgICBhdWRpb1NyYzogJ2F1ZGlvL21vdXNlLm1wMycsXG4gICAgfSxcbiAgICB7XG4gICAgICB3b3JkOiAndHVydGxlJyxcbiAgICAgIHRyYW5zbGF0aW9uOiAn0YfQtdGA0LXQv9Cw0YXQsCcsXG4gICAgICBpbWFnZTogJ2ltZy90dXJ0bGUuanBnJyxcbiAgICAgIGF1ZGlvU3JjOiAnYXVkaW8vdHVydGxlLm1wMycsXG4gICAgfSxcbiAgICB7XG4gICAgICB3b3JkOiAnZG9scGhpbicsXG4gICAgICB0cmFuc2xhdGlvbjogJ9C00LXQu9GM0YTQuNC9JyxcbiAgICAgIGltYWdlOiAnaW1nL2RvbHBoaW4uanBnJyxcbiAgICAgIGF1ZGlvU3JjOiAnYXVkaW8vZG9scGhpbi5tcDMnLFxuICAgIH0sXG4gIF0sXG4gIFtcbiAgICB7XG4gICAgICB3b3JkOiAnc2tpcnQnLFxuICAgICAgdHJhbnNsYXRpb246ICfRjtCx0LrQsCcsXG4gICAgICBpbWFnZTogJ2ltZy9za2lydC5qcGcnLFxuICAgICAgYXVkaW9TcmM6ICdhdWRpby9za2lydC5tcDMnLFxuICAgIH0sXG4gICAge1xuICAgICAgd29yZDogJ3BhbnRzJyxcbiAgICAgIHRyYW5zbGF0aW9uOiAn0LHRgNGO0LrQuCcsXG4gICAgICBpbWFnZTogJ2ltZy9wYW50cy5qcGcnLFxuICAgICAgYXVkaW9TcmM6ICdhdWRpby9wYW50cy5tcDMnLFxuICAgIH0sXG4gICAge1xuICAgICAgd29yZDogJ2Jsb3VzZScsXG4gICAgICB0cmFuc2xhdGlvbjogJ9Cx0LvRg9C30LrQsCcsXG4gICAgICBpbWFnZTogJ2ltZy9ibG91c2UuanBnJyxcbiAgICAgIGF1ZGlvU3JjOiAnYXVkaW8vYmxvdXNlLm1wMycsXG4gICAgfSxcbiAgICB7XG4gICAgICB3b3JkOiAnZHJlc3MnLFxuICAgICAgdHJhbnNsYXRpb246ICfQv9C70LDRgtGM0LUnLFxuICAgICAgaW1hZ2U6ICdpbWcvZHJlc3MuanBnJyxcbiAgICAgIGF1ZGlvU3JjOiAnYXVkaW8vZHJlc3MubXAzJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHdvcmQ6ICdib290JyxcbiAgICAgIHRyYW5zbGF0aW9uOiAn0LHQvtGC0LjQvdC+0LonLFxuICAgICAgaW1hZ2U6ICdpbWcvYm9vdC5qcGcnLFxuICAgICAgYXVkaW9TcmM6ICdhdWRpby9ib290Lm1wMycsXG4gICAgfSxcbiAgICB7XG4gICAgICB3b3JkOiAnc2hpcnQnLFxuICAgICAgdHJhbnNsYXRpb246ICfRgNGD0LHQsNGI0LrQsCcsXG4gICAgICBpbWFnZTogJ2ltZy9zaGlydC5qcGcnLFxuICAgICAgYXVkaW9TcmM6ICdhdWRpby9zaGlydC5tcDMnLFxuICAgIH0sXG4gICAge1xuICAgICAgd29yZDogJ2NvYXQnLFxuICAgICAgdHJhbnNsYXRpb246ICfQv9Cw0LvRjNGC0L4nLFxuICAgICAgaW1hZ2U6ICdpbWcvY29hdC5qcGcnLFxuICAgICAgYXVkaW9TcmM6ICdhdWRpby9jb2F0Lm1wMycsXG4gICAgfSxcbiAgICB7XG4gICAgICB3b3JkOiAnc2hvZScsXG4gICAgICB0cmFuc2xhdGlvbjogJ9GC0YPRhNC70LgnLFxuICAgICAgaW1hZ2U6ICdpbWcvc2hvZS5qcGcnLFxuICAgICAgYXVkaW9TcmM6ICdhdWRpby9zaG9lLm1wMycsXG4gICAgfSxcbiAgXSxcbiAgW1xuICAgIHtcbiAgICAgIHdvcmQ6ICdzYWQnLFxuICAgICAgdHJhbnNsYXRpb246ICfQs9GA0YPRgdGC0L3Ri9C5JyxcbiAgICAgIGltYWdlOiAnaW1nL3NhZC5qcGcnLFxuICAgICAgYXVkaW9TcmM6ICdhdWRpby9zYWQubXAzJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHdvcmQ6ICdhbmdyeScsXG4gICAgICB0cmFuc2xhdGlvbjogJ9GB0LXRgNC00LjRgtGL0LknLFxuICAgICAgaW1hZ2U6ICdpbWcvYW5ncnkuanBnJyxcbiAgICAgIGF1ZGlvU3JjOiAnYXVkaW8vYW5ncnkubXAzJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHdvcmQ6ICdoYXBweScsXG4gICAgICB0cmFuc2xhdGlvbjogJ9GB0YfQsNGB0YLQu9C40LLRi9C5JyxcbiAgICAgIGltYWdlOiAnaW1nL2hhcHB5LmpwZycsXG4gICAgICBhdWRpb1NyYzogJ2F1ZGlvL2hhcHB5Lm1wMycsXG4gICAgfSxcbiAgICB7XG4gICAgICB3b3JkOiAndGlyZWQnLFxuICAgICAgdHJhbnNsYXRpb246ICfRg9GB0YLQsNCy0YjQuNC5JyxcbiAgICAgIGltYWdlOiAnaW1nL3RpcmVkLmpwZycsXG4gICAgICBhdWRpb1NyYzogJ2F1ZGlvL3RpcmVkLm1wMycsXG4gICAgfSxcbiAgICB7XG4gICAgICB3b3JkOiAnc3VycHJpc2VkJyxcbiAgICAgIHRyYW5zbGF0aW9uOiAn0YPQtNC40LLQu9GR0L3QvdGL0LknLFxuICAgICAgaW1hZ2U6ICdpbWcvc3VycHJpc2VkLmpwZycsXG4gICAgICBhdWRpb1NyYzogJ2F1ZGlvL3N1cnByaXNlZC5tcDMnLFxuICAgIH0sXG4gICAge1xuICAgICAgd29yZDogJ3NjYXJlZCcsXG4gICAgICB0cmFuc2xhdGlvbjogJ9C40YHQv9GD0LPQsNC90L3Ri9C5JyxcbiAgICAgIGltYWdlOiAnaW1nL3NjYXJlZC5qcGcnLFxuICAgICAgYXVkaW9TcmM6ICdhdWRpby9zY2FyZWQubXAzJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHdvcmQ6ICdzbWlsZScsXG4gICAgICB0cmFuc2xhdGlvbjogJ9GD0LvRi9Cx0LrQsCcsXG4gICAgICBpbWFnZTogJ2ltZy9zbWlsZS5qcGcnLFxuICAgICAgYXVkaW9TcmM6ICdhdWRpby9zbWlsZS5tcDMnLFxuICAgIH0sXG4gICAge1xuICAgICAgd29yZDogJ2xhdWdoJyxcbiAgICAgIHRyYW5zbGF0aW9uOiAn0YHQvNC10YUnLFxuICAgICAgaW1hZ2U6ICdpbWcvbGF1Z2guanBnJyxcbiAgICAgIGF1ZGlvU3JjOiAnYXVkaW8vbGF1Z2gubXAzJyxcbiAgICB9LFxuICBdLFxuXTtcbiIsImV4cG9ydCBjbGFzcyBTaW5nbGVTaWRlQ2FyZCB7XHJcbiAgY29uc3RydWN0b3IoY2FyZERhdGEsIGhlYWRlcikge1xyXG4gICAgdGhpcy5jYXJkV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgdGhpcy5jYXJkV3JhcHBlci5jbGFzc0xpc3QuYWRkKCdjb2wtMTInLCAnY29sLW1kLTYnLCAnY29sLWxnLTMnKTtcclxuICAgIHRoaXMubm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgdGhpcy5ub2RlLmNsYXNzTGlzdC5hZGQoJ2NhcmQnLCAndGV4dC13aGl0ZScsICdiZy1wcmltYXJ5JywgJ21iLTMnLCAnbWFpbi1wYWdlLWNhcmQnKTtcclxuICAgIHRoaXMuY2FyZEJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHRoaXMuY2FyZEJvZHkuY2xhc3NMaXN0LmFkZCgnY2FyZC1ib2R5JywgJ3RleHQtY2VudGVyJyk7XHJcbiAgICB0aGlzLmNhcmRJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgIHRoaXMuY2FyZEltZy5zcmMgPSBjYXJkRGF0YS5pbWFnZTtcclxuICAgIHRoaXMuY2FyZEltZy5jbGFzc0xpc3QuYWRkKCdjYXJkLWltZy10b3AnLCAncm91bmRlZC1jaXJjbGUnLCAnaW1nLXNxcicpO1xyXG4gICAgdGhpcy5jYXJkSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcclxuICAgIHRoaXMuY2FyZEhlYWRlci5pbm5lckhUTUwgPSBoZWFkZXI7XHJcbiAgICB0aGlzLmNhcmRIZWFkZXIuY2xhc3NMaXN0LmFkZCgnY2FyZC10aXRsZScpO1xyXG4gICAgdGhpcy5jYXJkQm9keS5hcHBlbmQodGhpcy5jYXJkSW1nLCB0aGlzLmNhcmRIZWFkZXIpO1xyXG4gICAgdGhpcy5ub2RlLmFwcGVuZCh0aGlzLmNhcmRCb2R5KTtcclxuICAgIHRoaXMuY2FyZFdyYXBwZXIuYXBwZW5kKHRoaXMubm9kZSk7XHJcbiAgfVxuXHJcbiAgYXBwZW5kVG8obm9kZSkge1xyXG4gICAgbm9kZS5hcHBlbmQodGhpcy5jYXJkV3JhcHBlcik7XHJcbiAgfVxuXHJcbiAgdG9HYW1lKCkge1xyXG4gICAgdGhpcy5ub2RlLmNsYXNzTGlzdC5yZW1vdmUoJ2JnLXByaW1hcnknKTtcclxuICAgIHRoaXMubm9kZS5jbGFzc0xpc3QuYWRkKCdiZy1zdWNjZXNzJyk7XHJcbiAgfVxuXHJcbiAgdG9UcmFpbigpIHtcclxuICAgIHRoaXMubm9kZS5jbGFzc0xpc3QucmVtb3ZlKCdiZy1zdWNjZXNzJyk7XHJcbiAgICB0aGlzLm5vZGUuY2xhc3NMaXN0LmFkZCgnYmctcHJpbWFyeScpO1xyXG4gIH1cclxufVxuIiwiaW1wb3J0IHsgcmVuZGVyTWFpblBhZ2UgfSBmcm9tICcuL3JlbmRlck1haW5QYWdlJztcclxuaW1wb3J0IHsga2V5UGFnZXMgfSBmcm9tICcuLi9NZW51L2tleVBhZ2VzJztcclxuXHJcblxyXG5jb25zdCBjYXJkQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmQtY29udGFpbmVyJyk7XHJcblxyXG5yZW5kZXJNYWluUGFnZSgpO1xyXG5cclxuY2FyZENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xyXG4gIGNvbnN0IGNhcmQgPSBldmVudC50YXJnZXQuY2xvc2VzdCgnLm1haW4tcGFnZS1jYXJkJyk7XHJcbiAgaWYgKCFjYXJkKSByZXR1cm47XHJcbiAgY29uc3Qgc2VjdGlvbk5hbWUgPSBjYXJkLnF1ZXJ5U2VsZWN0b3IoJy5jYXJkLXRpdGxlJykuaW5uZXJIVE1MO1xyXG4gIGNvbnN0IGlkID0gT2JqZWN0LmVudHJpZXMoa2V5UGFnZXMpLmZpbmQoKGl0ZW0pID0+IGl0ZW1bMV0gPT09IHNlY3Rpb25OYW1lKVswXTtcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkuY2xpY2soKTtcclxufSk7XHJcbiIsImltcG9ydCB7IGNhcmRzIH0gZnJvbSAnLi4vQ2FyZC9jYXJkcyc7XHJcbmltcG9ydCB7IFNpbmdsZVNpZGVDYXJkIH0gZnJvbSAnLi9TaW5nbGVTaWRlQ2FyZCc7XHJcbmltcG9ydCB7IGdhbWVEYXRhIH0gZnJvbSAnLi4vQXBwL2dhbWVEYXRhJztcclxuaW1wb3J0IHsgcmVzZXRHYW1lIH0gZnJvbSAnLi4vQXBwL3Jlc2V0R2FtZSc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyTWFpblBhZ2UoKSB7XHJcbiAgcmVzZXRHYW1lKCk7XHJcbiAgY29uc3Qgc3RhcnRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhcnQnKTtcclxuICBzdGFydEJ0bi5jbGFzc0xpc3QuYWRkKCdkLW5vbmUnKTtcclxuICBnYW1lRGF0YS5jdXJyZW50UGFnZUNhcmRzID0gW107XHJcbiAgY29uc3QgZmlyc3RSb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucm93LWZpcnN0Jyk7XHJcbiAgY29uc3Qgc2Vjb25kUm93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJvdy1zZWNvbmQnKTtcclxuICBmaXJzdFJvdy5pbm5lckhUTUwgPSAnJztcclxuICBzZWNvbmRSb3cuaW5uZXJIVE1MID0gJyc7XHJcbiAgY2FyZHNbMF0uZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgIGNvbnN0IGNhcmQgPSBuZXcgU2luZ2xlU2lkZUNhcmQoY2FyZHNbaW5kZXggKyAxXVswXSwgaXRlbSk7XHJcbiAgICBnYW1lRGF0YS5jdXJyZW50UGFnZUNhcmRzLnB1c2goY2FyZCk7XHJcbiAgICBpZiAoZ2FtZURhdGEuc2VjdGlvbklzR2FtZSkgeyBjYXJkLnRvR2FtZSgpOyB9XHJcbiAgICBpZiAoaW5kZXggPCA0KSB7XHJcbiAgICAgIGNhcmQuYXBwZW5kVG8oZmlyc3RSb3cpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY2FyZC5hcHBlbmRUbyhzZWNvbmRSb3cpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XG4iLCIkKGRvY3VtZW50KS5yZWFkeSgoKSA9PiB7XHJcbiAgY29uc3QgdHJpZ2dlciA9ICQoJy5oYW1idXJnZXInKTtcclxuICBjb25zdCBvdmVybGF5ID0gJCgnLm92ZXJsYXknKTtcclxuICBsZXQgaXNDbG9zZWQgPSBmYWxzZTtcclxuXHJcblxyXG4gIGZ1bmN0aW9uIGhhbWJ1cmdlckNyb3NzKCkge1xyXG4gICAgaWYgKGlzQ2xvc2VkID09PSB0cnVlKSB7XHJcbiAgICAgIG92ZXJsYXkuaGlkZSgpO1xyXG4gICAgICB0cmlnZ2VyLnJlbW92ZUNsYXNzKCdpcy1vcGVuJyk7XHJcbiAgICAgIHRyaWdnZXIuYWRkQ2xhc3MoJ2lzLWNsb3NlZCcpO1xyXG4gICAgICBpc0Nsb3NlZCA9IGZhbHNlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgb3ZlcmxheS5zaG93KCk7XHJcbiAgICAgIHRyaWdnZXIucmVtb3ZlQ2xhc3MoJ2lzLWNsb3NlZCcpO1xyXG4gICAgICB0cmlnZ2VyLmFkZENsYXNzKCdpcy1vcGVuJyk7XHJcbiAgICAgIGlzQ2xvc2VkID0gdHJ1ZTtcclxuICAgIH1cclxuICB9XHJcbiAgdHJpZ2dlci5jbGljaygoKSA9PiB7XHJcbiAgICBoYW1idXJnZXJDcm9zcygpO1xyXG4gIH0pO1xyXG5cclxuICAkKCdbZGF0YS10b2dnbGU9XCJvZmZjYW52YXNcIl0nKS5jbGljaygoKSA9PiB7XHJcbiAgICAkKCcjd3JhcHBlcicpLnRvZ2dsZUNsYXNzKCd0b2dnbGVkJyk7XHJcbiAgfSk7XHJcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuICAgIGlmICgoIWV2ZW50LnRhcmdldC5jbG9zZXN0KCcubmF2YmFyJykgJiYgIWV2ZW50LnRhcmdldC5jbG9zZXN0KCcuaGFtYnVyZ2VyJykpICYmIChpc0Nsb3NlZCkpIHtcclxuICAgICAgJCgnLmhhbWJ1cmdlcicpLmNsaWNrKCk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn0pO1xyXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJleHBvcnQgY29uc3Qga2V5UGFnZXMgPSB7XHJcbiAgQWN0aW9uU2V0QTogJ0FjdGlvbiAoc2V0IEEpJyxcclxuICBBY3Rpb25TZXRCOiAnQWN0aW9uIChzZXQgQiknLFxyXG4gIEFjdGlvblNldEM6ICdBY3Rpb24gKHNldCBDKScsXHJcbiAgQWRqZWN0aXZlOiAnQWRqZWN0aXZlJyxcclxuICBBbmltYWxTZXRBOiAnQW5pbWFsIChzZXQgQSknLFxyXG4gIEFuaW1hbFNldEI6ICdBbmltYWwgKHNldCBCKScsXHJcbiAgQ2xvdGhlczogJ0Nsb3RoZXMnLFxyXG4gIEVtb3Rpb25zOiAnRW1vdGlvbnMnLFxyXG59O1xuIiwiaW1wb3J0IHsgZmlsbGVyIH0gZnJvbSAnLi4vQXBwL2ZpbGxpbmdQYWdlJztcclxuaW1wb3J0IHsga2V5UGFnZXMgfSBmcm9tICcuL2tleVBhZ2VzJztcclxuaW1wb3J0IHsgcmVuZGVyTWFpblBhZ2UgfSBmcm9tICcuLi9NYWluUGFnZS9yZW5kZXJNYWluUGFnZSc7XHJcbmltcG9ydCB7IGdhbWVEYXRhIH0gZnJvbSAnLi4vQXBwL2dhbWVEYXRhJztcclxuXHJcbmNvbnN0IHNpZGVCYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhci1uYXYnKTtcclxuc2lkZUJhci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xyXG4gIGNvbnN0IGFuY2hvciA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KCcuYW5jaG9yJyk7XHJcbiAgaWYgKCFhbmNob3IpIHJldHVybjtcclxuICBpZiAoYW5jaG9yLmlkID09PSAnbWFpblBhZ2UnKSB7XHJcbiAgICByZW5kZXJNYWluUGFnZSgpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBjb25zdCBzZWN0aW9uTmFtZSA9IGtleVBhZ2VzW2FuY2hvci5pZF07XHJcbiAgICBmaWxsZXIoc2VjdGlvbk5hbWUpO1xyXG4gIH1cclxuICBjb25zdCBhY3RpdmVQYWdlID0gc2lkZUJhci5xdWVyeVNlbGVjdG9yKCcuYWN0aXZlJyk7XHJcbiAgaWYgKGFjdGl2ZVBhZ2UpIHsgYWN0aXZlUGFnZS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTsgfVxyXG4gIGFuY2hvci5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICBjb25zdCBoYW1idXJnZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGFtYnVyZ2VyJyk7XHJcbiAgaWYgKGhhbWJ1cmdlci5jbGFzc0xpc3QuY29udGFpbnMoJ2lzLW9wZW4nKSkge1xyXG4gICAgaGFtYnVyZ2VyLmNsaWNrKCk7XHJcbiAgfVxyXG4gIGdhbWVEYXRhLmFjdGl2ZVBhZ2UgPSBhbmNob3IuaWQ7XHJcbn0pO1xyXG4iLCJpbXBvcnQgeyB0b0dhbWUgfSBmcm9tICcuLi9BcHAvdG9HYW1lJztcclxuaW1wb3J0IHsgdG9UcmFpbiB9IGZyb20gJy4uL0FwcC90b1RyYWluJztcclxuXHJcbmNvbnN0IGdhbWVTd2l0Y2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY21uLXRvZ2dsZS0xJyk7XHJcbmdhbWVTd2l0Y2guYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xyXG4gIGlmIChnYW1lU3dpdGNoLmNoZWNrZWQpIHtcclxuICAgIHRvR2FtZSgpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICB0b1RyYWluKCk7XHJcbiAgfVxyXG59KTtcclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==