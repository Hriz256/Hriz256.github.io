/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./app.ts","vendors~main"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./UI/createBg.ts":
/*!************************!*\
  !*** ./UI/createBg.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.createBg = void 0;
var pixi_js_1 = __webpack_require__(/*! pixi.js */ "../node_modules/pixi.js/lib/pixi.es.js");
var createBg = function (_a) {
    var x = _a.x, y = _a.y, width = _a.width, height = _a.height;
    var graphics = new pixi_js_1.Graphics();
    graphics.beginFill(0xb3b3b3);
    graphics.drawRect(x, y, width, height);
    graphics.endFill();
    graphics.interactive = true;
    return graphics;
};
exports.createBg = createBg;


/***/ }),

/***/ "./UI/header/counter/counter.ts":
/*!**************************************!*\
  !*** ./UI/header/counter/counter.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Counter = void 0;
var pixi_js_1 = __webpack_require__(/*! pixi.js */ "../node_modules/pixi.js/lib/pixi.es.js");
var subscriber_1 = __webpack_require__(/*! ../../../logic/subscriber */ "./logic/subscriber.ts");
var Counter = /** @class */ (function (_super) {
    __extends(Counter, _super);
    function Counter(_a) {
        var textures = _a.textures, tileSize = _a.tileSize, width = _a.width, anchorX = _a.anchorX, x = _a.x;
        var _this = _super.call(this) || this;
        _this.anchorX = anchorX;
        _this.textures = textures;
        _this.tileSize = tileSize;
        _this.width = width;
        _this.x = x;
        return _this;
    }
    Counter.prototype.setBg = function (container) {
        var bg = new pixi_js_1.Sprite(this.textures['nums_background.svg']);
        bg.anchor.set(this.anchorX, 0.5);
        bg.width = this.tileSize * 3;
        bg.height = this.tileSize * 1.6;
        container.addChild(bg);
    };
    Counter.prototype.create = function () {
        var _this = this;
        var container = new pixi_js_1.Container();
        container.position.x = this.x;
        container.position.y = (this.tileSize * 0.7 * 2 + this.tileSize * 2) / 2;
        this.setBg(container);
        this.numbers = Array.from({ length: 3 }, function (_, index) {
            var number = new pixi_js_1.AnimatedSprite(Object.values(_this.textures));
            number.anchor.set(_this.anchorX, 0.5);
            number.gotoAndStop(0);
            number.width = _this.tileSize * 0.9;
            number.height = _this.tileSize * 1.4;
            number.x = _this.anchorX ?
                number.x - (_this.tileSize * 0.95 * index + 4) :
                number.x + _this.tileSize * 0.95 * index + 4;
            number.y = 0;
            container.addChild(number);
            return number;
        });
        return container;
    };
    return Counter;
}(subscriber_1.Subscriber));
exports.Counter = Counter;


/***/ }),

/***/ "./UI/header/counter/minesCounter.ts":
/*!*******************************************!*\
  !*** ./UI/header/counter/minesCounter.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.MinesCounter = void 0;
var counter_1 = __webpack_require__(/*! ./counter */ "./UI/header/counter/counter.ts");
var MinesCounter = /** @class */ (function (_super) {
    __extends(MinesCounter, _super);
    function MinesCounter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MinesCounter.prototype.update = function (count) {
        var formatCount = this.format(count);
        var indexesArray = this.getFrameIndex(formatCount);
        Array.from(this.numbers, function (number, index) { return number.gotoAndStop(indexesArray[index]); });
    };
    MinesCounter.prototype.format = function (count) {
        // Добавляем нужное число 0 перед числом
        return "" + '0'.repeat(3 - ("" + count).length) + count;
    };
    MinesCounter.prototype.getFrameIndex = function (formatCount) {
        // Цифры от 0 до 9 соответствуют названиям фреймов, 10 - '-'
        return Array.from(formatCount, function (letter) { return letter !== '-' ? +letter : +10; });
    };
    return MinesCounter;
}(counter_1.Counter));
exports.MinesCounter = MinesCounter;


/***/ }),

/***/ "./UI/header/counter/timer.ts":
/*!************************************!*\
  !*** ./UI/header/counter/timer.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Timer = void 0;
var counter_1 = __webpack_require__(/*! ./counter */ "./UI/header/counter/counter.ts");
var Timer = /** @class */ (function (_super) {
    __extends(Timer, _super);
    function Timer(args) {
        var _this = _super.call(this, args) || this;
        _this.currentDate = 0;
        _this.date = 0;
        _this.allowUpdate = false;
        _this.isStart = false;
        return _this;
    }
    Timer.prototype.update = function () {
        var newDate = Math.floor(Date.now() / 1000);
        if (newDate > this.currentDate && this.allowUpdate) {
            this.currentDate = newDate;
            this.date++;
        }
        // Из строки делаем массив и переворачиваем его, чтобы цифры обновлялись справа налево
        var stringDate = ("" + this.date).split('').reverse();
        this.allowUpdate && Array.from(this.numbers, function (number, index) {
            number.gotoAndStop(+stringDate[index] || 0);
        });
    };
    Timer.prototype.reset = function () {
        this.stop();
        this.isStart = false;
        Array.from(this.numbers, function (number) { return number.gotoAndStop(0); });
    };
    Timer.prototype.stop = function () {
        this.allowUpdate = false;
    };
    Timer.prototype.continue = function () {
        if (this.isStart) {
            this.allowUpdate = true;
        }
    };
    Timer.prototype.start = function () {
        this.isStart = true;
        if (!this.allowUpdate) {
            this.currentDate = Math.floor(Date.now() / 1000);
            this.date = 0;
            this.allowUpdate = true;
        }
    };
    return Timer;
}(counter_1.Counter));
exports.Timer = Timer;


/***/ }),

/***/ "./UI/header/header.ts":
/*!*****************************!*\
  !*** ./UI/header/header.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.createHeader = void 0;
var timer_1 = __webpack_require__(/*! ./counter/timer */ "./UI/header/counter/timer.ts");
var minesCounter_1 = __webpack_require__(/*! ./counter/minesCounter */ "./UI/header/counter/minesCounter.ts");
var smileBtn_1 = __webpack_require__(/*! ./smileBtn */ "./UI/header/smileBtn.ts");
var pixi_js_1 = __webpack_require__(/*! pixi.js */ "../node_modules/pixi.js/lib/pixi.es.js");
var mediator_1 = __webpack_require__(/*! ../../logic/mediator */ "./logic/mediator.ts");
var createHeader = function (config, resources) {
    var headerContainer = new pixi_js_1.Container();
    var timer = new timer_1.Timer({
        textures: resources.timeSheet.textures,
        tileSize: config.tileSize,
        width: config.width,
        anchorX: 1,
        x: (config.tileSize * 0.7 * 2 + config.tileSize * config.width) - config.tileSize * 0.9,
    });
    var minesCount = new minesCounter_1.MinesCounter({
        textures: resources.timeSheet.textures,
        tileSize: config.tileSize,
        width: config.width,
        anchorX: 0,
        x: config.tileSize * 0.7 + config.tileSize * 0.1,
    });
    var smile = new smileBtn_1.Smile({
        textures: resources.smileSheet.textures,
        tileSize: config.tileSize,
        width: config.width,
        mineQuantity: config.mineQuantity
    });
    var timerContainer = timer.create();
    var minesCountContainer = minesCount.create();
    var smileContainer = smile.create();
    mediator_1.mediator.register(timer, 'timer');
    mediator_1.mediator.register(minesCount, 'minesCount');
    mediator_1.mediator.register(smile, 'smile');
    headerContainer.addChild(timerContainer, minesCountContainer, smileContainer);
    return { headerContainer: headerContainer, timer: timer };
};
exports.createHeader = createHeader;


/***/ }),

/***/ "./UI/header/smileBtn.ts":
/*!*******************************!*\
  !*** ./UI/header/smileBtn.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Smile = void 0;
var pixi_js_1 = __webpack_require__(/*! pixi.js */ "../node_modules/pixi.js/lib/pixi.es.js");
var subscriber_1 = __webpack_require__(/*! ../../logic/subscriber */ "./logic/subscriber.ts");
var Smile = /** @class */ (function (_super) {
    __extends(Smile, _super);
    function Smile(_a) {
        var tileSize = _a.tileSize, width = _a.width, textures = _a.textures, mineQuantity = _a.mineQuantity;
        var _this = _super.call(this) || this;
        _this.textures = textures;
        _this.tileSize = tileSize;
        _this.width = width;
        _this.mineQuantity = mineQuantity;
        return _this;
    }
    Smile.prototype.create = function () {
        var _this = this;
        this.smile = new pixi_js_1.AnimatedSprite(Object.values(this.textures));
        this.smile.gotoAndStop(0);
        this.smile.anchor.set(0.5);
        this.smile.width = this.tileSize * 1.6;
        this.smile.height = this.tileSize * 1.6;
        this.smile.x = (this.tileSize * 0.7 * 2 + this.tileSize * this.width) / 2;
        this.smile.y = (this.tileSize * 0.7 * 2 + this.tileSize * 2) / 2;
        this.smile.interactive = true;
        this.smile.buttonMode = true;
        this.smile.on('pointerup', function () {
            _this.smile.gotoAndStop(1);
            _this.restart();
        });
        return this.smile;
    };
    // При нажатии на кнопку вызывается рестарт игры и отправляются соответствующие уведомления другим элементам
    Smile.prototype.restart = function () {
        this.sendAction({ action: 'reset', to: 'timer' });
        this.sendAction({ action: 'update', to: 'minesCount', value: this.mineQuantity });
        this.sendAction({ action: 'restart', to: 'field' });
        setTimeout(this.setInitFrame.bind(this), 150);
    };
    Smile.prototype.setInitFrame = function () {
        this.smile.gotoAndStop(0);
    };
    Smile.prototype.setWinFrame = function () {
        this.smile.gotoAndStop(3);
    };
    Smile.prototype.setLoseFrame = function () {
        this.smile.gotoAndStop(2);
    };
    return Smile;
}(subscriber_1.Subscriber));
exports.Smile = Smile;


/***/ }),

/***/ "./UI/main/field.ts":
/*!**************************!*\
  !*** ./UI/main/field.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Field = void 0;
var tile_1 = __webpack_require__(/*! ./tile */ "./UI/main/tile.ts");
var pixi_js_1 = __webpack_require__(/*! pixi.js */ "../node_modules/pixi.js/lib/pixi.es.js");
var subscriber_1 = __webpack_require__(/*! ../../logic/subscriber */ "./logic/subscriber.ts");
var mediator_1 = __webpack_require__(/*! ../../logic/mediator */ "./logic/mediator.ts");
var Field = /** @class */ (function (_super) {
    __extends(Field, _super);
    function Field(_a) {
        var textures = _a.textures, tileSize = _a.tileSize, width = _a.width, height = _a.height, mineQuantity = _a.mineQuantity;
        var _this = _super.call(this) || this;
        _this.textures = textures;
        _this.tileSize = tileSize;
        _this.width = width;
        _this.height = height;
        _this.mineQuantity = mineQuantity;
        _this.tilesLeft = _this.height * _this.height - _this.mineQuantity;
        return _this;
    }
    Field.prototype.create = function () {
        var _this = this;
        var container = new pixi_js_1.Container();
        this.tiles = Array.from({ length: this.width }, function (_, indexX) {
            return Array.from({ length: _this.height }, function (_, indexY) {
                var tileInstance = new tile_1.Tile({
                    textures: _this.textures,
                    tileSize: _this.tileSize,
                    x: indexX,
                    y: indexY,
                });
                mediator_1.mediator.register(tileInstance, "tileInstance[" + indexX + "][" + indexY + "]");
                tileInstance.create();
                container.addChild(tileInstance.tile);
                return tileInstance;
            });
        });
        this.sendAction({ action: 'update', to: 'minesCount', value: this.mineQuantity });
        this.setMines();
        return container;
    };
    // вызывается при каждом клике и уведомляет счётчик мин
    Field.prototype.getQuantityFlags = function () {
        var quantityFlags = this.getTiles().filter(function (tile) { return tile.isSetFlag(); }).length;
        this.sendAction({ action: 'update', to: 'minesCount', value: this.mineQuantity - quantityFlags });
    };
    Field.prototype.restart = function () {
        Array.from(this.getTiles(), function (tile) { return tile.resetTile(); });
        this.tilesLeft = this.height * this.height - this.mineQuantity;
        this.setMines();
    };
    // уменьшает количество оставшихся клеток, которые не являются минами
    Field.prototype.decreaseTilesLeft = function (isLose) {
        this.tilesLeft--;
        console.log(this.tilesLeft);
        if (!this.tilesLeft) {
            if (isLose) {
                this.sendAction({ action: 'setLoseFrame', to: 'smile' });
            }
            else {
                this.sendAction({ action: 'setWinFrame', to: 'smile' });
                this.setFlagsOnMines();
            }
            this.sendAction({ action: 'stop', to: 'timer' });
        }
    };
    // Если игрок выиграл, но он где-то не поставил флажок - ставим
    Field.prototype.setFlagsOnMines = function () {
        var mines = this.getTiles().filter(function (tile) { return tile.currentState === tile.states.notPressedMine; });
        Array.from(mines, function (mine) { return mine.setFlag(false, true); });
    };
    // Выключаем интерактивность у каждой клетки (например, когда игрок открывает меню)
    Field.prototype.toggleTilesInteractive = function (interactive) {
        Array.from(this.getTiles(), function (tile) { return tile.setInteractive(interactive); });
    };
    Field.prototype.getRandomTile = function () {
        var tiles = this.getTiles();
        return tiles[Math.floor(Math.random() * tiles.length)];
    };
    // При инициализации игры устанавливаем мины
    Field.prototype.setMines = function () {
        var _this = this;
        var tile = this.getRandomTile();
        Array.from({ length: this.mineQuantity }, function () {
            while (tile.getValue() === tile.states.notPressedMine) {
                tile = _this.getRandomTile();
            }
            tile.setValue(tile.states.notPressedMine);
            _this.updateSurroundingTiles(tile);
        });
    };
    // Вызывается при каждой установки мины. Величина соседних клеток мины увеличивается на 1
    Field.prototype.updateSurroundingTiles = function (tile) {
        var tilesWithoutMines = this.getSurroundingTiles(tile).filter(function (tile) {
            return tile.getValue() !== tile.states.notPressedMine;
        });
        Array.from(tilesWithoutMines, function (tile) { return tile.setValue(tile.getValue() + 1); });
    };
    ;
    // Получить соседние элементы клетки
    Field.prototype.getSurroundingTiles = function (tile) {
        var tileList = [];
        for (var x = -1; x <= 1; x++) {
            for (var y = -1; y <= 1; y++) {
                var row = tile.x + x;
                var column = tile.y + y;
                if (!x && !y) {
                    continue;
                }
                if (row < 0 || row >= this.width || column < 0 || column >= this.height) {
                    continue;
                }
                tileList.push(this.tiles[row][column]);
            }
        }
        return tileList;
    };
    Field.prototype.openDispatch = function (_a) {
        var isGameOver = _a.isGameOver, tile = _a.tile;
        this.openCells(isGameOver ? this.getTiles() : this.getSurroundingTiles(tile), isGameOver);
    };
    Field.prototype.openCells = function (tiles, isGameOver) {
        Array.from(tiles, function (tile) {
            !tile.isOpened() && tile.open(false, isGameOver);
        });
        this.getQuantityFlags();
    };
    // Получить все клетки
    Field.prototype.getTiles = function () {
        return this.tiles.reduce(function (acc, tile) { return __spreadArrays(acc, tile); }, []);
    };
    return Field;
}(subscriber_1.Subscriber));
exports.Field = Field;


/***/ }),

/***/ "./UI/main/frame.ts":
/*!**************************!*\
  !*** ./UI/main/frame.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.createFrame = void 0;
var pixi_js_1 = __webpack_require__(/*! pixi.js */ "../node_modules/pixi.js/lib/pixi.es.js");
var createBg_1 = __webpack_require__(/*! ../createBg */ "./UI/createBg.ts");
var createWalls = function (_a) {
    var textures = _a.textures, tileSize = _a.tileSize, width = _a.width, height = _a.height;
    var wallsContainer = new pixi_js_1.Container();
    var borderVertLeft = new pixi_js_1.Sprite(textures['border_vert.png']);
    borderVertLeft.height = tileSize * 0.7 * 3 + tileSize * (height + 2);
    borderVertLeft.width = tileSize * 0.7;
    var borderVertRight = new pixi_js_1.Sprite(textures['border_vert.png']);
    borderVertRight.height = tileSize * 0.7 * 3 + tileSize * (height + 2);
    borderVertRight.width = tileSize * 0.7;
    borderVertRight.x = tileSize * 0.7 + tileSize * width;
    var borderHorUp = new pixi_js_1.Sprite(textures['border_hor.png']);
    borderHorUp.height = tileSize * 0.7;
    borderHorUp.width = tileSize * 0.7 * 2 + tileSize * width;
    var borderHorMiddle = new pixi_js_1.Sprite(textures['border_hor.png']);
    borderHorMiddle.height = tileSize * 0.7;
    borderHorMiddle.width = tileSize * 0.7 * 2 + tileSize * width;
    borderHorMiddle.y = tileSize * 0.7 + tileSize * 2;
    var borderHorBottom = new pixi_js_1.Sprite(textures['border_hor.png']);
    borderHorBottom.height = tileSize * 0.7;
    borderHorBottom.width = tileSize * 0.7 * 2 + tileSize * width;
    borderHorBottom.y = tileSize * 0.7 * 2 + tileSize * (height + 2);
    Array.from([borderVertLeft, borderVertRight, borderHorUp, borderHorMiddle, borderHorBottom], function (wall) {
        wall.anchor.set(0);
        wallsContainer.addChild(wall);
    });
    return wallsContainer;
};
var createCorner = function (_a) {
    var textures = _a.textures, tileSize = _a.tileSize, height = _a.height, width = _a.width;
    var cornerContainer = new pixi_js_1.Container();
    var cornerBottomLeft = new pixi_js_1.Sprite(textures['corner_bottom_left.png']);
    cornerBottomLeft.x = 0;
    cornerBottomLeft.y = tileSize * 0.7 * 2 + tileSize * (height + 2);
    var cornerBottomRight = new pixi_js_1.Sprite(textures['corner_bottom_right.png']);
    cornerBottomRight.x = tileSize * 0.7 + tileSize * width;
    cornerBottomRight.y = tileSize * 0.7 * 2 + tileSize * (height + 2);
    var cornerUpLeft = new pixi_js_1.Sprite(textures['corner_up_left.png']);
    cornerUpLeft.x = 0;
    cornerUpLeft.y = 0;
    var cornerUpRight = new pixi_js_1.Sprite(textures['corner_up_right.png']);
    cornerUpRight.x = tileSize * 0.7 + tileSize * width;
    cornerUpRight.y = 0;
    var crossroadsLeft = new pixi_js_1.Sprite(textures['crossroads_left.png']);
    crossroadsLeft.x = 0;
    crossroadsLeft.y = tileSize * 0.7 + tileSize * 2;
    var crossroadsRight = new pixi_js_1.Sprite(textures['crossroads_right.png']);
    crossroadsRight.x = tileSize * 0.7 + tileSize * width;
    crossroadsRight.y = tileSize * 0.7 + tileSize * 2;
    Array.from([
        cornerBottomLeft, cornerBottomRight, cornerUpLeft, cornerUpRight, crossroadsLeft, crossroadsRight
    ], function (corner) {
        corner.anchor.set(0);
        corner.height = tileSize * 0.7;
        corner.width = tileSize * 0.7;
        cornerContainer.addChild(corner);
    });
    return cornerContainer;
};
var createFrame = function (parameters) {
    var container = new pixi_js_1.Container();
    var headerBg = createBg_1.createBg({
        x: parameters.tileSize * 0.7,
        y: parameters.tileSize * 0.7,
        width: parameters.tileSize * parameters.width,
        height: parameters.tileSize * 2
    });
    var wallsContainer = createWalls(parameters);
    var cornerContainer = createCorner(parameters);
    container.addChild(headerBg, wallsContainer, cornerContainer);
    return container;
};
exports.createFrame = createFrame;


/***/ }),

/***/ "./UI/main/main.ts":
/*!*************************!*\
  !*** ./UI/main/main.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.createBody = void 0;
var field_1 = __webpack_require__(/*! ./field */ "./UI/main/field.ts");
var pixi_js_1 = __webpack_require__(/*! pixi.js */ "../node_modules/pixi.js/lib/pixi.es.js");
var frame_1 = __webpack_require__(/*! ./frame */ "./UI/main/frame.ts");
var mediator_1 = __webpack_require__(/*! ../../logic/mediator */ "./logic/mediator.ts");
var createBody = function (config, resources) {
    var bodyContainer = new pixi_js_1.Container();
    // создаём поле с кнопками
    var field = new field_1.Field({
        textures: resources.tilesSheet.textures,
        tileSize: config.tileSize,
        height: config.height,
        width: config.width,
        mineQuantity: config.mineQuantity
    });
    // создаём статические визуальные элементы
    var frameContainer = frame_1.createFrame({
        textures: resources.wallsSheet.textures,
        tileSize: config.tileSize,
        width: config.width,
        height: config.height
    });
    mediator_1.mediator.register(field, 'field');
    bodyContainer.addChild(frameContainer, field.create());
    return bodyContainer;
};
exports.createBody = createBody;


/***/ }),

/***/ "./UI/main/tile.ts":
/*!*************************!*\
  !*** ./UI/main/tile.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile = void 0;
var pixi_js_1 = __webpack_require__(/*! pixi.js */ "../node_modules/pixi.js/lib/pixi.es.js");
var subscriber_1 = __webpack_require__(/*! ../../logic/subscriber */ "./logic/subscriber.ts");
var Tile = /** @class */ (function (_super) {
    __extends(Tile, _super);
    function Tile(_a) {
        var tileSize = _a.tileSize, textures = _a.textures, x = _a.x, y = _a.y;
        var _this = _super.call(this) || this;
        _this.tileSize = tileSize;
        _this.textures = textures;
        _this.x = x;
        _this.y = y;
        _this.states = {
            init: 0,
            pressedMine: 9,
            notPressedMine: 10,
            wrongMine: 11,
            flag: 12,
            default: 13
        };
        _this.currentState = 0;
        return _this;
    }
    Tile.prototype.create = function () {
        this.tile = new pixi_js_1.AnimatedSprite(Object.values(this.textures));
        this.tile.gotoAndStop(Object.values(this.textures).length - 1);
        this.tile.anchor.set(0);
        this.tile.width = this.tileSize;
        this.tile.height = this.tileSize;
        this.tile.x = this.tileSize * 0.7 + this.tileSize * this.x;
        this.tile.y = this.tileSize * 0.7 * 2 + this.tileSize * (this.y + 2);
        this.tile.buttonMode = true;
        this.setInteractive(true);
        this.tile.on('pointerdown', this.buttonDown.bind(this));
    };
    Tile.prototype.buttonDown = function (event) {
        this.sendAction({ action: 'start', to: 'timer' }); // Клетка была нажата - таймер начинает отсчёт
        !event.data.button ?
            !this.isSetFlag() && this.open(true, false) :
            this.setFlag(true, !this.isSetFlag());
    };
    // Поставить / снять флажок
    Tile.prototype.setFlag = function (interactive, active) {
        this.tile.gotoAndStop(active ? this.states.flag : this.states.default);
        this.tile.interactive = interactive;
        this.sendAction({ action: 'getQuantityFlags', to: 'field' });
    };
    Tile.prototype.setInteractive = function (interactive) {
        this.tile.interactive = interactive;
    };
    Tile.prototype.isSetFlag = function () {
        return this.tile.currentFrame === this.states.flag;
    };
    Tile.prototype.setValue = function (value) {
        this.currentState = value;
    };
    Tile.prototype.getValue = function () {
        return this.currentState;
    };
    Tile.prototype.isOpened = function () {
        return this.tile.currentFrame === this.currentState;
    };
    // Вернуть клетку в начальное состояние
    Tile.prototype.resetTile = function () {
        this.setValue(0);
        this.tile.gotoAndStop(this.states.default);
        this.setInteractive(true);
    };
    Tile.prototype.open = function (byUser, isGameOver) {
        if (isGameOver === void 0) { isGameOver = false; }
        switch (this.getValue()) {
            case this.states.notPressedMine:
                byUser && this.setValue(this.states.pressedMine); // Попали на мину - меняем текстуру на отличную от других мин
                this.tile.currentFrame === this.states.flag && this.setValue(this.states.flag);
                this.tile.gotoAndStop(this.currentState);
                !isGameOver && this.sendAction({ action: 'openDispatch', to: 'field', value: { isGameOver: true, tile: this } });
                break;
            case this.states.init:
                // Если стоял флажок, но мины там не оказалось, - показываем соответствующую текстуру
                if (isGameOver && this.tile.currentFrame === this.states.flag) {
                    this.setValue(this.states.wrongMine);
                }
                this.tile.gotoAndStop(this.currentState);
                this.sendAction({ action: 'decreaseTilesLeft', to: 'field', value: isGameOver });
                !isGameOver && this.sendAction({ action: 'openDispatch', to: 'field', value: { isGameOver: false, tile: this } });
                break;
            default:
                // Если стоял флажок, но мины там не оказалось, - показываем соответствующую текстуру
                if (isGameOver && this.tile.currentFrame === this.states.flag) {
                    this.setValue(this.states.wrongMine);
                }
                this.tile.gotoAndStop(this.currentState);
                this.sendAction({ action: 'decreaseTilesLeft', to: 'field', value: isGameOver });
        }
        this.setInteractive(false);
    };
    return Tile;
}(subscriber_1.Subscriber));
exports.Tile = Tile;


/***/ }),

/***/ "./UI/menu/buttons/button.ts":
/*!***********************************!*\
  !*** ./UI/menu/buttons/button.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
var pixi_js_1 = __webpack_require__(/*! pixi.js */ "../node_modules/pixi.js/lib/pixi.es.js");
var createBg_1 = __webpack_require__(/*! ../../createBg */ "./UI/createBg.ts");
var subscriber_1 = __webpack_require__(/*! ../../../logic/subscriber */ "./logic/subscriber.ts");
var Button = /** @class */ (function (_super) {
    __extends(Button, _super);
    function Button(_a) {
        var width = _a.width, height = _a.height, text = _a.text, x = _a.x, y = _a.y, anchorY = _a.anchorY, fontSize = _a.fontSize, _b = _a.bgVisibility, bgVisibility = _b === void 0 ? true : _b;
        var _this = _super.call(this) || this;
        _this.width = width;
        _this.height = height;
        _this.text = text;
        _this.x = x;
        _this.y = y;
        _this.anchorY = anchorY;
        _this.fontSize = fontSize;
        _this.bgVisibility = bgVisibility;
        return _this;
    }
    Button.prototype.create = function () {
        var container = new pixi_js_1.Container();
        if (this.bgVisibility) {
            var bg = createBg_1.createBg({
                width: this.width,
                height: this.height,
                x: this.x,
                y: this.y
            });
            container.addChild(bg);
        }
        container.addChild(this.setText());
        return container;
    };
    Button.prototype.setText = function () {
        var style = new pixi_js_1.TextStyle({
            fontFamily: 'Arial',
            fontSize: this.fontSize,
            fontWeight: 'bold',
            fill: ['#ffffff', '#ff6c62'],
            stroke: '#4a1850',
            strokeThickness: 5,
            dropShadow: true,
            dropShadowColor: '#000000',
            dropShadowBlur: 4,
            dropShadowAngle: Math.PI / 6,
            dropShadowDistance: 6,
        });
        this.button = new pixi_js_1.Text(this.text, style);
        this.button.anchor.set(0.5, this.anchorY);
        this.button.interactive = true;
        this.button.buttonMode = true;
        this.button.x = this.x + this.width / 2;
        this.button.y = this.y + this.height * this.anchorY;
        return this.button;
    };
    return Button;
}(subscriber_1.Subscriber));
exports.Button = Button;


/***/ }),

/***/ "./UI/menu/buttons/exit.ts":
/*!*********************************!*\
  !*** ./UI/menu/buttons/exit.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Exit = void 0;
var button_1 = __webpack_require__(/*! ./button */ "./UI/menu/buttons/button.ts");
var Exit = /** @class */ (function (_super) {
    __extends(Exit, _super);
    function Exit() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Exit.prototype.set = function (pauseMenuContainer, startGameButtonContainer) {
        var container = this.create();
        this.button.on('pointerup', function () {
            pauseMenuContainer.visible = !pauseMenuContainer.visible; // Скрываем контейнер паузы
            startGameButtonContainer.visible = !startGameButtonContainer.visible; // Показыем контейнер с кнопкой начать игру
        });
        return container;
    };
    return Exit;
}(button_1.Button));
exports.Exit = Exit;


/***/ }),

/***/ "./UI/menu/buttons/pause.ts":
/*!**********************************!*\
  !*** ./UI/menu/buttons/pause.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.PauseButton = void 0;
var button_1 = __webpack_require__(/*! ./button */ "./UI/menu/buttons/button.ts");
var PauseButton = /** @class */ (function (_super) {
    __extends(PauseButton, _super);
    function PauseButton() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PauseButton.prototype.set = function (pauseMenuContainer) {
        var _this = this;
        var container = this.create();
        this.button.on('pointerup', function () {
            pauseMenuContainer.visible = !pauseMenuContainer.visible;
            _this.sendAction({ action: pauseMenuContainer.visible ? 'stop' : 'continue', to: 'timer' });
            _this.sendAction({ action: 'toggleTilesInteractive', to: 'field', value: !pauseMenuContainer.visible });
        });
        return container;
    };
    return PauseButton;
}(button_1.Button));
exports.PauseButton = PauseButton;


/***/ }),

/***/ "./UI/menu/buttons/start.ts":
/*!**********************************!*\
  !*** ./UI/menu/buttons/start.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Start = void 0;
var button_1 = __webpack_require__(/*! ./button */ "./UI/menu/buttons/button.ts");
var Start = /** @class */ (function (_super) {
    __extends(Start, _super);
    function Start() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Start.prototype.set = function () {
        var _this = this;
        var container = this.create();
        this.button.on('pointerup', function () {
            container.visible = !container.visible;
            _this.sendAction({ action: 'setInitFrame', to: 'smile' });
            _this.sendAction({ action: 'restart', to: 'smile' });
        });
        return container;
    };
    return Start;
}(button_1.Button));
exports.Start = Start;


/***/ }),

/***/ "./UI/menu/menu.ts":
/*!*************************!*\
  !*** ./UI/menu/menu.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.createMenu = void 0;
var pixi_js_1 = __webpack_require__(/*! pixi.js */ "../node_modules/pixi.js/lib/pixi.es.js");
var pause_1 = __webpack_require__(/*! ./buttons/pause */ "./UI/menu/buttons/pause.ts");
var exit_1 = __webpack_require__(/*! ./buttons/exit */ "./UI/menu/buttons/exit.ts");
var start_1 = __webpack_require__(/*! ./buttons/start */ "./UI/menu/buttons/start.ts");
var mediator_1 = __webpack_require__(/*! ../../logic/mediator */ "./logic/mediator.ts");
var createMenu = function (config) {
    var menuContainer = new pixi_js_1.Container();
    var pauseMenuContainer = new pixi_js_1.Container();
    var pauseButton = new pause_1.PauseButton({
        width: config.tileSize * config.width + config.tileSize * 2 * 0.7,
        height: config.tileSize,
        text: 'ПАУЗА',
        fontSize: 20,
        x: 0,
        y: -config.tileSize,
        anchorY: 0.5,
        bgVisibility: false
    });
    var continueGameButton = new pause_1.PauseButton({
        width: config.tileSize * config.width,
        height: config.tileSize,
        text: 'ПРОДОЛЖИТЬ ИГРУ',
        fontSize: 16,
        x: config.tileSize * 0.7,
        y: config.tileSize * 0.7,
        anchorY: 0.6,
    });
    var exitToMenuButton = new exit_1.Exit({
        width: config.tileSize * config.width,
        height: config.tileSize,
        text: 'ВЫХОД ИЗ ИГРЫ',
        fontSize: 16,
        x: config.tileSize * 0.7,
        y: config.tileSize * 0.7 + config.tileSize,
        anchorY: 0.6
    });
    var startGameButton = new start_1.Start({
        width: config.tileSize * config.width,
        height: config.tileSize * 0.7 + config.tileSize * (config.height + 2),
        text: 'НАЧАТЬ ИГРУ',
        fontSize: 24,
        x: config.tileSize * 0.7,
        y: config.tileSize * 0.7,
        anchorY: 0.5
    });
    mediator_1.mediator.register(pauseButton, 'pauseButton');
    mediator_1.mediator.register(continueGameButton, 'continueGameButton');
    mediator_1.mediator.register(startGameButton, 'startGameButton');
    var startGameButtonContainer = startGameButton.set();
    var pauseButtonContainer = pauseButton.set(pauseMenuContainer);
    var continueButtonContainer = continueGameButton.set(pauseMenuContainer);
    var exitToMenuButtonContainer = exitToMenuButton.set(pauseMenuContainer, startGameButtonContainer);
    pauseMenuContainer.visible = false;
    startGameButtonContainer.visible = false;
    pauseMenuContainer.addChild(continueButtonContainer, exitToMenuButtonContainer);
    menuContainer.addChild(pauseMenuContainer, pauseButtonContainer, startGameButtonContainer);
    return menuContainer;
};
exports.createMenu = createMenu;


/***/ }),

/***/ "./UI/scene.ts":
/*!*********************!*\
  !*** ./UI/scene.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.createScene = void 0;
var pixi_js_1 = __webpack_require__(/*! pixi.js */ "../node_modules/pixi.js/lib/pixi.es.js");
var header_1 = __webpack_require__(/*! ./header/header */ "./UI/header/header.ts");
var menu_1 = __webpack_require__(/*! ./menu/menu */ "./UI/menu/menu.ts");
var main_1 = __webpack_require__(/*! ./main/main */ "./UI/main/main.ts");
var config = {
    tileSize: 40,
    width: 9,
    height: 9,
    mineQuantity: 10
};
var centerContainer = function (app, container) {
    container.position.x = app.view.width / 2;
    container.position.y = app.view.height / 2;
    container.pivot.x = container.width / 2;
    container.pivot.y = container.height / 2;
};
var createScene = function (app, resources) {
    var mainContainer = new pixi_js_1.Container();
    var _a = header_1.createHeader(config, resources), headerContainer = _a.headerContainer, timer = _a.timer; // Создаём шапку (2 счётчика и кнопку)
    var menuContainer = menu_1.createMenu(config); // Создаём интерфейс меню
    var bodyContainer = main_1.createBody(config, resources); // Создаём игровое поле
    mainContainer.addChild(bodyContainer, headerContainer, menuContainer);
    app.stage.addChild(mainContainer);
    app.ticker.add(function () { return timer.update(); }); // Обновляем значение таймера
    // центрируем контейнер при создании и каждом ресайзе экрана
    centerContainer(app, mainContainer);
    window.addEventListener('resize', function () { return centerContainer(app, mainContainer); });
};
exports.createScene = createScene;


/***/ }),

/***/ "./app.ts":
/*!****************!*\
  !*** ./app.ts ***!
  \****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var pixi_js_1 = __webpack_require__(/*! pixi.js */ "../node_modules/pixi.js/lib/pixi.es.js");
var scene_1 = __webpack_require__(/*! ./UI/scene */ "./UI/scene.ts");
var createApp = function () {
    // инициализируем приложение
    var app = new pixi_js_1.Application({
        width: window.innerWidth,
        height: window.innerHeight,
        backgroundColor: 0x1099bb,
        resolution: 1,
        resizeTo: window
    });
    document.body.append(app.view);
    app.stage.interactive = true;
    app.loader
        .add('timeSheet', 'assets/time.json')
        .add('tilesSheet', 'assets/tiles.json')
        .add('smileSheet', 'assets/smile.json')
        .add('wallsSheet', 'assets/walls.json')
        .load(function (_a) {
        var resources = _a.resources;
        return scene_1.createScene(app, resources);
    });
    app.start();
};
createApp();
document.addEventListener('contextmenu', function (e) { return e.preventDefault(); });


/***/ }),

/***/ "./logic/mediator.ts":
/*!***************************!*\
  !*** ./logic/mediator.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.mediator = void 0;
var Mediator = /** @class */ (function () {
    function Mediator() {
        this.subscribers = {};
    }
    // Регистрируем инстанс класса, чтобы с ним можно было связаться
    Mediator.prototype.register = function (subscriber, name) {
        this.subscribers[name] = subscriber;
        subscriber.setMediator(this);
    };
    // Вызываем заданный метод у вызываемого инстанса
    Mediator.prototype.notify = function (_a) {
        var action = _a.action, to = _a.to, value = _a.value;
        this.subscribers[to].dispatch(action, value);
    };
    return Mediator;
}());
var mediator = new Mediator();
exports.mediator = mediator;


/***/ }),

/***/ "./logic/subscriber.ts":
/*!*****************************!*\
  !*** ./logic/subscriber.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Subscriber = void 0;
var Subscriber = /** @class */ (function () {
    function Subscriber() {
        this.mediator = null;
    }
    Subscriber.prototype.dispatch = function (action, value) {
        this[action](value);
    };
    Subscriber.prototype.sendAction = function (data) {
        this.mediator.notify(data);
    };
    Subscriber.prototype.setMediator = function (mediator) {
        this.mediator = mediator;
    };
    return Subscriber;
}());
exports.Subscriber = Subscriber;


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vVUkvY3JlYXRlQmcudHMiLCJ3ZWJwYWNrOi8vLy4vVUkvaGVhZGVyL2NvdW50ZXIvY291bnRlci50cyIsIndlYnBhY2s6Ly8vLi9VSS9oZWFkZXIvY291bnRlci9taW5lc0NvdW50ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vVUkvaGVhZGVyL2NvdW50ZXIvdGltZXIudHMiLCJ3ZWJwYWNrOi8vLy4vVUkvaGVhZGVyL2hlYWRlci50cyIsIndlYnBhY2s6Ly8vLi9VSS9oZWFkZXIvc21pbGVCdG4udHMiLCJ3ZWJwYWNrOi8vLy4vVUkvbWFpbi9maWVsZC50cyIsIndlYnBhY2s6Ly8vLi9VSS9tYWluL2ZyYW1lLnRzIiwid2VicGFjazovLy8uL1VJL21haW4vbWFpbi50cyIsIndlYnBhY2s6Ly8vLi9VSS9tYWluL3RpbGUudHMiLCJ3ZWJwYWNrOi8vLy4vVUkvbWVudS9idXR0b25zL2J1dHRvbi50cyIsIndlYnBhY2s6Ly8vLi9VSS9tZW51L2J1dHRvbnMvZXhpdC50cyIsIndlYnBhY2s6Ly8vLi9VSS9tZW51L2J1dHRvbnMvcGF1c2UudHMiLCJ3ZWJwYWNrOi8vLy4vVUkvbWVudS9idXR0b25zL3N0YXJ0LnRzIiwid2VicGFjazovLy8uL1VJL21lbnUvbWVudS50cyIsIndlYnBhY2s6Ly8vLi9VSS9zY2VuZS50cyIsIndlYnBhY2s6Ly8vLi9hcHAudHMiLCJ3ZWJwYWNrOi8vLy4vbG9naWMvbWVkaWF0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vbG9naWMvc3Vic2NyaWJlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSxRQUFRLG9CQUFvQjtRQUM1QjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FB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O0lBQ3pCLENBQUM7SUFFRCw2QkFBUSxHQUFSLFVBQVMsTUFBYyxFQUFFLEtBQVc7UUFDaEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3hCLENBQUM7SUFFRCwrQkFBVSxHQUFWLFVBQVcsSUFBZ0I7UUFDdkIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQzlCLENBQUM7SUFFRCxnQ0FBVyxHQUFYLFVBQVksUUFBbUI7UUFDM0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7SUFDN0IsQ0FBQztJQUNMLGlCQUFDO0FBQUQsQ0FBQztBQUVPLGdDQUFVIiwiZmlsZSI6IjI3Y2JlNTIzYWFkZjljNWJmM2U3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcIm1haW5cIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbXCIuL2FwcC50c1wiLFwidmVuZG9yc35tYWluXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiaW1wb3J0IHtHcmFwaGljc1JlY3RUeXBlfSBmcm9tIFwiLi4vdHlwaW5nL3R5cGVzXCI7XHJcbmltcG9ydCB7R3JhcGhpY3N9IGZyb20gXCJwaXhpLmpzXCI7XHJcblxyXG5jb25zdCBjcmVhdGVCZyA9ICh7eCwgeSwgd2lkdGgsIGhlaWdodH06IEdyYXBoaWNzUmVjdFR5cGUpOiBHcmFwaGljcyA9PiB7XHJcbiAgICBjb25zdCBncmFwaGljcyA9IG5ldyBHcmFwaGljcygpO1xyXG5cclxuICAgIGdyYXBoaWNzLmJlZ2luRmlsbCgweGIzYjNiMyk7XHJcbiAgICBncmFwaGljcy5kcmF3UmVjdCh4LCB5LCB3aWR0aCwgaGVpZ2h0KTtcclxuICAgIGdyYXBoaWNzLmVuZEZpbGwoKTtcclxuICAgIGdyYXBoaWNzLmludGVyYWN0aXZlID0gdHJ1ZTtcclxuXHJcbiAgICByZXR1cm4gZ3JhcGhpY3M7XHJcbn07XHJcblxyXG5leHBvcnQge2NyZWF0ZUJnfTtcclxuIiwiaW1wb3J0IHtJQ291bnRlcn0gZnJvbSBcIi4uLy4uLy4uL3R5cGluZy9pbnRlcmZhY2VzXCI7XHJcbmltcG9ydCB7QW5pbWF0ZWRTcHJpdGUsIENvbnRhaW5lciwgU3ByaXRlfSBmcm9tIFwicGl4aS5qc1wiO1xyXG5pbXBvcnQge0NvbmZpZ1R5cGUsIENvdW50ZXJUeXBlfSBmcm9tIFwiLi4vLi4vLi4vdHlwaW5nL3R5cGVzXCI7XHJcbmltcG9ydCB7U3Vic2NyaWJlcn0gZnJvbSBcIi4uLy4uLy4uL2xvZ2ljL3N1YnNjcmliZXJcIjtcclxuXHJcbmNsYXNzIENvdW50ZXIgZXh0ZW5kcyBTdWJzY3JpYmVyIGltcGxlbWVudHMgSUNvdW50ZXIge1xyXG4gICAgYW5jaG9yWDogbnVtYmVyO1xyXG4gICAgd2lkdGg6IG51bWJlcjtcclxuICAgIHRpbGVTaXplOiBudW1iZXI7XHJcbiAgICB0ZXh0dXJlczogb2JqZWN0O1xyXG4gICAgbnVtYmVyczogQXJyYXk8QW5pbWF0ZWRTcHJpdGU+O1xyXG4gICAgeDogbnVtYmVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHt0ZXh0dXJlcywgdGlsZVNpemUsIHdpZHRoLCBhbmNob3JYLCB4fTogQ291bnRlclR5cGUpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgICB0aGlzLmFuY2hvclggPSBhbmNob3JYO1xyXG4gICAgICAgIHRoaXMudGV4dHVyZXMgPSB0ZXh0dXJlcztcclxuICAgICAgICB0aGlzLnRpbGVTaXplID0gdGlsZVNpemU7XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoO1xyXG4gICAgICAgIHRoaXMueCA9IHg7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0QmcoY29udGFpbmVyOiBDb250YWluZXIpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBiZyA9IG5ldyBTcHJpdGUodGhpcy50ZXh0dXJlc1snbnVtc19iYWNrZ3JvdW5kLnN2ZyddKTtcclxuXHJcbiAgICAgICAgYmcuYW5jaG9yLnNldCh0aGlzLmFuY2hvclgsIDAuNSk7XHJcbiAgICAgICAgYmcud2lkdGggPSB0aGlzLnRpbGVTaXplICogMztcclxuICAgICAgICBiZy5oZWlnaHQgPSB0aGlzLnRpbGVTaXplICogMS42O1xyXG5cclxuICAgICAgICBjb250YWluZXIuYWRkQ2hpbGQoYmcpO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZSgpOiBDb250YWluZXIge1xyXG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IG5ldyBDb250YWluZXIoKTtcclxuICAgICAgICBjb250YWluZXIucG9zaXRpb24ueCA9IHRoaXMueDtcclxuICAgICAgICBjb250YWluZXIucG9zaXRpb24ueSA9ICh0aGlzLnRpbGVTaXplICogMC43ICogMiArIHRoaXMudGlsZVNpemUgKiAyKSAvIDI7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0QmcoY29udGFpbmVyKTtcclxuXHJcbiAgICAgICAgdGhpcy5udW1iZXJzID0gQXJyYXkuZnJvbSh7bGVuZ3RoOiAzfSwgKF8sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IG51bWJlciA9IG5ldyBBbmltYXRlZFNwcml0ZShPYmplY3QudmFsdWVzKHRoaXMudGV4dHVyZXMpKTtcclxuXHJcbiAgICAgICAgICAgIG51bWJlci5hbmNob3Iuc2V0KHRoaXMuYW5jaG9yWCwgMC41KTtcclxuICAgICAgICAgICAgbnVtYmVyLmdvdG9BbmRTdG9wKDApO1xyXG4gICAgICAgICAgICBudW1iZXIud2lkdGggPSB0aGlzLnRpbGVTaXplICogMC45O1xyXG4gICAgICAgICAgICBudW1iZXIuaGVpZ2h0ID0gdGhpcy50aWxlU2l6ZSAqIDEuNDtcclxuICAgICAgICAgICAgbnVtYmVyLnggPSB0aGlzLmFuY2hvclggP1xyXG4gICAgICAgICAgICAgICAgbnVtYmVyLnggLSAodGhpcy50aWxlU2l6ZSAqIDAuOTUgKiBpbmRleCArIDQpIDpcclxuICAgICAgICAgICAgICAgIG51bWJlci54ICsgdGhpcy50aWxlU2l6ZSAqIDAuOTUgKiBpbmRleCArIDQ7XHJcbiAgICAgICAgICAgIG51bWJlci55ID0gMDtcclxuXHJcbiAgICAgICAgICAgIGNvbnRhaW5lci5hZGRDaGlsZChudW1iZXIpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIG51bWJlcjtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGNvbnRhaW5lcjtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHtDb3VudGVyfVxyXG4iLCJpbXBvcnQge0NvdW50ZXJ9IGZyb20gXCIuL2NvdW50ZXJcIjtcclxuaW1wb3J0IHtJTWluZXNDb3VudGVyfSBmcm9tIFwiLi4vLi4vLi4vdHlwaW5nL2ludGVyZmFjZXNcIjtcclxuXHJcbmNsYXNzIE1pbmVzQ291bnRlciBleHRlbmRzIENvdW50ZXIgaW1wbGVtZW50cyBJTWluZXNDb3VudGVyIHtcclxuICAgIHVwZGF0ZShjb3VudDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgZm9ybWF0Q291bnQgPSB0aGlzLmZvcm1hdChjb3VudCk7XHJcbiAgICAgICAgY29uc3QgaW5kZXhlc0FycmF5ID0gdGhpcy5nZXRGcmFtZUluZGV4KGZvcm1hdENvdW50KTtcclxuXHJcbiAgICAgICAgQXJyYXkuZnJvbSh0aGlzLm51bWJlcnMsIChudW1iZXIsIGluZGV4KSA9PiBudW1iZXIuZ290b0FuZFN0b3AoaW5kZXhlc0FycmF5W2luZGV4XSkpO1xyXG4gICAgfVxyXG5cclxuICAgIGZvcm1hdChjb3VudDogbnVtYmVyKTogc3RyaW5nIHtcclxuICAgICAgICAvLyDQlNC+0LHQsNCy0LvRj9C10Lwg0L3Rg9C20L3QvtC1INGH0LjRgdC70L4gMCDQv9C10YDQtdC0INGH0LjRgdC70L7QvFxyXG4gICAgICAgIHJldHVybiBgJHsnMCcucmVwZWF0KDMgLSBgJHtjb3VudH1gLmxlbmd0aCl9JHtjb3VudH1gO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEZyYW1lSW5kZXgoZm9ybWF0Q291bnQ6IHN0cmluZyk6IEFycmF5PG51bWJlcj4ge1xyXG4gICAgICAgIC8vINCm0LjRhNGA0Ysg0L7RgiAwINC00L4gOSDRgdC+0L7RgtCy0LXRgtGB0YLQstGD0Y7RgiDQvdCw0LfQstCw0L3QuNGP0Lwg0YTRgNC10LnQvNC+0LIsIDEwIC0gJy0nXHJcbiAgICAgICAgcmV0dXJuIEFycmF5LmZyb20oZm9ybWF0Q291bnQsIGxldHRlciA9PiBsZXR0ZXIgIT09ICctJyA/ICtsZXR0ZXIgOiArMTApXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7TWluZXNDb3VudGVyfTtcclxuIiwiaW1wb3J0IHtDb3VudGVyfSBmcm9tIFwiLi9jb3VudGVyXCI7XHJcbmltcG9ydCB7SVRpbWVyfSBmcm9tIFwiLi4vLi4vLi4vdHlwaW5nL2ludGVyZmFjZXNcIjtcclxuXHJcbmNsYXNzIFRpbWVyIGV4dGVuZHMgQ291bnRlciBpbXBsZW1lbnRzIElUaW1lciB7XHJcbiAgICBjdXJyZW50RGF0ZTogbnVtYmVyO1xyXG4gICAgZGF0ZTogbnVtYmVyO1xyXG4gICAgYWxsb3dVcGRhdGU6IGJvb2xlYW47XHJcbiAgICBpc1N0YXJ0OiBib29sZWFuOyAvLyDQndGD0LbQvdC+INC00LvRjyDRgtC+0LPQviwg0YfRgtC+0LHRiyDQv9GA0LXQtNC+0YLQstGA0LDRgtC40YLRjCDQt9Cw0L/Rg9GB0Log0YLQsNC50LzQtdGA0LAg0L/QvtGB0LvQtSDRgdC60YDRi9GC0LjRjyDQvNC10L3Rjiwg0LXRgdC70Lgg0YLQsNC50LzQtdGAINC90LUg0LfQsNC/0YPRidC10L1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihhcmdzKSB7XHJcbiAgICAgICAgc3VwZXIoYXJncyk7XHJcblxyXG4gICAgICAgIHRoaXMuY3VycmVudERhdGUgPSAwO1xyXG4gICAgICAgIHRoaXMuZGF0ZSA9IDA7XHJcbiAgICAgICAgdGhpcy5hbGxvd1VwZGF0ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuaXNTdGFydCA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSgpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBuZXdEYXRlID0gTWF0aC5mbG9vcihEYXRlLm5vdygpIC8gMTAwMCk7XHJcblxyXG4gICAgICAgIGlmIChuZXdEYXRlID4gdGhpcy5jdXJyZW50RGF0ZSAmJiB0aGlzLmFsbG93VXBkYXRlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudERhdGUgPSBuZXdEYXRlO1xyXG4gICAgICAgICAgICB0aGlzLmRhdGUrKztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vINCY0Lcg0YHRgtGA0L7QutC4INC00LXQu9Cw0LXQvCDQvNCw0YHRgdC40LIg0Lgg0L/QtdGA0LXQstC+0YDQsNGH0LjQstCw0LXQvCDQtdCz0L4sINGH0YLQvtCx0Ysg0YbQuNGE0YDRiyDQvtCx0L3QvtCy0LvRj9C70LjRgdGMINGB0L/RgNCw0LLQsCDQvdCw0LvQtdCy0L5cclxuICAgICAgICBjb25zdCBzdHJpbmdEYXRlID0gYCR7dGhpcy5kYXRlfWAuc3BsaXQoJycpLnJldmVyc2UoKTtcclxuXHJcbiAgICAgICAgdGhpcy5hbGxvd1VwZGF0ZSAmJiBBcnJheS5mcm9tKHRoaXMubnVtYmVycywgKG51bWJlciwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgbnVtYmVyLmdvdG9BbmRTdG9wKCtzdHJpbmdEYXRlW2luZGV4XSB8fCAwKVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlc2V0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc3RvcCgpO1xyXG4gICAgICAgIHRoaXMuaXNTdGFydCA9IGZhbHNlO1xyXG4gICAgICAgIEFycmF5LmZyb20odGhpcy5udW1iZXJzLCBudW1iZXIgPT4gbnVtYmVyLmdvdG9BbmRTdG9wKDApKTtcclxuICAgIH1cclxuXHJcbiAgICBzdG9wKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuYWxsb3dVcGRhdGUgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBjb250aW51ZSgpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5pc1N0YXJ0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWxsb3dVcGRhdGUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGFydCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmlzU3RhcnQgPSB0cnVlO1xyXG5cclxuICAgICAgICBpZiAoIXRoaXMuYWxsb3dVcGRhdGUpIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50RGF0ZSA9IE1hdGguZmxvb3IoRGF0ZS5ub3coKSAvIDEwMDApO1xyXG4gICAgICAgICAgICB0aGlzLmRhdGUgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLmFsbG93VXBkYXRlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7VGltZXJ9O1xyXG4iLCJpbXBvcnQge1RpbWVyfSBmcm9tIFwiLi9jb3VudGVyL3RpbWVyXCI7XHJcbmltcG9ydCB7TWluZXNDb3VudGVyfSBmcm9tIFwiLi9jb3VudGVyL21pbmVzQ291bnRlclwiO1xyXG5pbXBvcnQge1NtaWxlfSBmcm9tIFwiLi9zbWlsZUJ0blwiO1xyXG5pbXBvcnQge0NvbmZpZ1R5cGV9IGZyb20gXCIuLi8uLi90eXBpbmcvdHlwZXNcIjtcclxuaW1wb3J0IHtMb2FkZXJSZXNvdXJjZSwgQ29udGFpbmVyfSBmcm9tIFwicGl4aS5qc1wiO1xyXG5pbXBvcnQge21lZGlhdG9yfSBmcm9tIFwiLi4vLi4vbG9naWMvbWVkaWF0b3JcIjtcclxuaW1wb3J0IHtJVGltZXJ9IGZyb20gXCIuLi8uLi90eXBpbmcvaW50ZXJmYWNlc1wiO1xyXG5cclxuY29uc3QgY3JlYXRlSGVhZGVyID0gKGNvbmZpZzogQ29uZmlnVHlwZSwgcmVzb3VyY2VzOiBQYXJ0aWFsPFJlY29yZDxzdHJpbmcsIExvYWRlclJlc291cmNlPj4pOiB7aGVhZGVyQ29udGFpbmVyOiBDb250YWluZXIsIHRpbWVyOiBJVGltZXJ9ID0+IHtcclxuICAgIGNvbnN0IGhlYWRlckNvbnRhaW5lciA9IG5ldyBDb250YWluZXIoKTtcclxuXHJcbiAgICBjb25zdCB0aW1lciA9IG5ldyBUaW1lcih7XHJcbiAgICAgICAgdGV4dHVyZXM6IHJlc291cmNlcy50aW1lU2hlZXQudGV4dHVyZXMsXHJcbiAgICAgICAgdGlsZVNpemU6IGNvbmZpZy50aWxlU2l6ZSxcclxuICAgICAgICB3aWR0aDogY29uZmlnLndpZHRoLFxyXG4gICAgICAgIGFuY2hvclg6IDEsXHJcbiAgICAgICAgeDogKGNvbmZpZy50aWxlU2l6ZSAqIDAuNyAqIDIgKyBjb25maWcudGlsZVNpemUgKiBjb25maWcud2lkdGgpIC0gY29uZmlnLnRpbGVTaXplICogMC45LFxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgbWluZXNDb3VudCA9IG5ldyBNaW5lc0NvdW50ZXIoe1xyXG4gICAgICAgIHRleHR1cmVzOiByZXNvdXJjZXMudGltZVNoZWV0LnRleHR1cmVzLFxyXG4gICAgICAgIHRpbGVTaXplOiBjb25maWcudGlsZVNpemUsXHJcbiAgICAgICAgd2lkdGg6IGNvbmZpZy53aWR0aCxcclxuICAgICAgICBhbmNob3JYOiAwLFxyXG4gICAgICAgIHg6IGNvbmZpZy50aWxlU2l6ZSAqIDAuNyArIGNvbmZpZy50aWxlU2l6ZSAqIDAuMSxcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IHNtaWxlID0gbmV3IFNtaWxlKHtcclxuICAgICAgICB0ZXh0dXJlczogcmVzb3VyY2VzLnNtaWxlU2hlZXQudGV4dHVyZXMsXHJcbiAgICAgICAgdGlsZVNpemU6IGNvbmZpZy50aWxlU2l6ZSxcclxuICAgICAgICB3aWR0aDogY29uZmlnLndpZHRoLFxyXG4gICAgICAgIG1pbmVRdWFudGl0eTogY29uZmlnLm1pbmVRdWFudGl0eVxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgdGltZXJDb250YWluZXI6IENvbnRhaW5lciA9IHRpbWVyLmNyZWF0ZSgpO1xyXG4gICAgY29uc3QgbWluZXNDb3VudENvbnRhaW5lcjogQ29udGFpbmVyID0gbWluZXNDb3VudC5jcmVhdGUoKTtcclxuICAgIGNvbnN0IHNtaWxlQ29udGFpbmVyID0gc21pbGUuY3JlYXRlKCk7XHJcblxyXG4gICAgbWVkaWF0b3IucmVnaXN0ZXIodGltZXIsICd0aW1lcicpO1xyXG4gICAgbWVkaWF0b3IucmVnaXN0ZXIobWluZXNDb3VudCwgJ21pbmVzQ291bnQnKTtcclxuICAgIG1lZGlhdG9yLnJlZ2lzdGVyKHNtaWxlLCAnc21pbGUnKTtcclxuXHJcbiAgICBoZWFkZXJDb250YWluZXIuYWRkQ2hpbGQodGltZXJDb250YWluZXIsIG1pbmVzQ291bnRDb250YWluZXIsIHNtaWxlQ29udGFpbmVyKTtcclxuXHJcbiAgICByZXR1cm4ge2hlYWRlckNvbnRhaW5lciwgdGltZXJ9O1xyXG59O1xyXG5cclxuZXhwb3J0IHtjcmVhdGVIZWFkZXJ9O1xyXG4iLCJpbXBvcnQge0lTbWlsZX0gZnJvbSBcIi4uLy4uL3R5cGluZy9pbnRlcmZhY2VzXCI7XHJcbmltcG9ydCB7QW5pbWF0ZWRTcHJpdGV9IGZyb20gXCJwaXhpLmpzXCI7XHJcbmltcG9ydCB7Q29uZmlnV2l0aFRleHR1cmVzfSBmcm9tIFwiLi4vLi4vdHlwaW5nL3R5cGVzXCI7XHJcbmltcG9ydCB7U3Vic2NyaWJlcn0gZnJvbSBcIi4uLy4uL2xvZ2ljL3N1YnNjcmliZXJcIjtcclxuXHJcbmNsYXNzIFNtaWxlIGV4dGVuZHMgU3Vic2NyaWJlciBpbXBsZW1lbnRzIElTbWlsZSB7XHJcbiAgICByZWFkb25seSB3aWR0aDogbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgdGV4dHVyZXM6IG9iamVjdDtcclxuICAgIHJlYWRvbmx5IHRpbGVTaXplOiBudW1iZXI7XHJcbiAgICByZWFkb25seSBtaW5lUXVhbnRpdHk6IG51bWJlcjtcclxuICAgIHNtaWxlOiBBbmltYXRlZFNwcml0ZTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih7dGlsZVNpemUsIHdpZHRoLCB0ZXh0dXJlcywgbWluZVF1YW50aXR5fTogQ29uZmlnV2l0aFRleHR1cmVzKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuXHJcbiAgICAgICAgdGhpcy50ZXh0dXJlcyA9IHRleHR1cmVzO1xyXG4gICAgICAgIHRoaXMudGlsZVNpemUgPSB0aWxlU2l6ZTtcclxuICAgICAgICB0aGlzLndpZHRoID0gd2lkdGg7XHJcbiAgICAgICAgdGhpcy5taW5lUXVhbnRpdHkgPSBtaW5lUXVhbnRpdHk7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlKCk6IEFuaW1hdGVkU3ByaXRlIHtcclxuICAgICAgICB0aGlzLnNtaWxlID0gbmV3IEFuaW1hdGVkU3ByaXRlKE9iamVjdC52YWx1ZXModGhpcy50ZXh0dXJlcykpO1xyXG5cclxuICAgICAgICB0aGlzLnNtaWxlLmdvdG9BbmRTdG9wKDApO1xyXG4gICAgICAgIHRoaXMuc21pbGUuYW5jaG9yLnNldCgwLjUpO1xyXG4gICAgICAgIHRoaXMuc21pbGUud2lkdGggPSB0aGlzLnRpbGVTaXplICogMS42O1xyXG4gICAgICAgIHRoaXMuc21pbGUuaGVpZ2h0ID0gdGhpcy50aWxlU2l6ZSAqIDEuNjtcclxuICAgICAgICB0aGlzLnNtaWxlLnggPSAodGhpcy50aWxlU2l6ZSAqIDAuNyAqIDIgKyB0aGlzLnRpbGVTaXplICogdGhpcy53aWR0aCkgLyAyO1xyXG4gICAgICAgIHRoaXMuc21pbGUueSA9ICh0aGlzLnRpbGVTaXplICogMC43ICogMiArIHRoaXMudGlsZVNpemUgKiAyKSAvIDI7XHJcbiAgICAgICAgdGhpcy5zbWlsZS5pbnRlcmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5zbWlsZS5idXR0b25Nb2RlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgdGhpcy5zbWlsZS5vbigncG9pbnRlcnVwJywgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNtaWxlLmdvdG9BbmRTdG9wKDEpO1xyXG4gICAgICAgICAgICB0aGlzLnJlc3RhcnQoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc21pbGU7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g0J/RgNC4INC90LDQttCw0YLQuNC4INC90LAg0LrQvdC+0L/QutGDINCy0YvQt9GL0LLQsNC10YLRgdGPINGA0LXRgdGC0LDRgNGCINC40LPRgNGLINC4INC+0YLQv9GA0LDQstC70Y/RjtGC0YHRjyDRgdC+0L7RgtCy0LXRgtGB0YLQstGD0Y7RidC40LUg0YPQstC10LTQvtC80LvQtdC90LjRjyDQtNGA0YPQs9C40Lwg0Y3Qu9C10LzQtdC90YLQsNC8XHJcbiAgICByZXN0YXJ0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc2VuZEFjdGlvbih7YWN0aW9uOiAncmVzZXQnLCB0bzogJ3RpbWVyJ30pO1xyXG4gICAgICAgIHRoaXMuc2VuZEFjdGlvbih7YWN0aW9uOiAndXBkYXRlJywgdG86ICdtaW5lc0NvdW50JywgdmFsdWU6IHRoaXMubWluZVF1YW50aXR5fSk7XHJcbiAgICAgICAgdGhpcy5zZW5kQWN0aW9uKHthY3Rpb246ICdyZXN0YXJ0JywgdG86ICdmaWVsZCd9KTtcclxuXHJcbiAgICAgICAgc2V0VGltZW91dCh0aGlzLnNldEluaXRGcmFtZS5iaW5kKHRoaXMpLCAxNTApO1xyXG4gICAgfVxyXG5cclxuICAgIHNldEluaXRGcmFtZSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnNtaWxlLmdvdG9BbmRTdG9wKDApO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFdpbkZyYW1lKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc21pbGUuZ290b0FuZFN0b3AoMyk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0TG9zZUZyYW1lKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc21pbGUuZ290b0FuZFN0b3AoMik7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7U21pbGV9O1xyXG4iLCJpbXBvcnQge1RpbGV9IGZyb20gXCIuL3RpbGVcIjtcclxuaW1wb3J0IHtDb25maWdXaXRoVGV4dHVyZXMsIE9wZW5EaXNwYXRjaFR5cGV9IGZyb20gXCIuLi8uLi90eXBpbmcvdHlwZXNcIjtcclxuaW1wb3J0IHtDb250YWluZXJ9IGZyb20gXCJwaXhpLmpzXCI7XHJcbmltcG9ydCB7SUZpZWxkLCBJVGlsZX0gZnJvbSBcIi4uLy4uL3R5cGluZy9pbnRlcmZhY2VzXCI7XHJcbmltcG9ydCB7U3Vic2NyaWJlcn0gZnJvbSBcIi4uLy4uL2xvZ2ljL3N1YnNjcmliZXJcIjtcclxuaW1wb3J0IHttZWRpYXRvcn0gZnJvbSBcIi4uLy4uL2xvZ2ljL21lZGlhdG9yXCI7XHJcblxyXG5jbGFzcyBGaWVsZCBleHRlbmRzIFN1YnNjcmliZXIgaW1wbGVtZW50cyBJRmllbGQge1xyXG4gICAgcmVhZG9ubHkgaGVpZ2h0OiBudW1iZXI7XHJcbiAgICByZWFkb25seSB3aWR0aDogbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgbWluZVF1YW50aXR5OiBudW1iZXI7XHJcbiAgICByZWFkb25seSB0ZXh0dXJlczogb2JqZWN0O1xyXG4gICAgcmVhZG9ubHkgdGlsZVNpemU6IG51bWJlcjtcclxuICAgIHRpbGVzOiBJVGlsZVtdW107XHJcbiAgICB0aWxlc0xlZnQ6IG51bWJlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih7dGV4dHVyZXMsIHRpbGVTaXplLCB3aWR0aCwgaGVpZ2h0LCBtaW5lUXVhbnRpdHl9OiBDb25maWdXaXRoVGV4dHVyZXMpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgICB0aGlzLnRleHR1cmVzID0gdGV4dHVyZXM7XHJcbiAgICAgICAgdGhpcy50aWxlU2l6ZSA9IHRpbGVTaXplO1xyXG4gICAgICAgIHRoaXMud2lkdGggPSB3aWR0aDtcclxuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcclxuICAgICAgICB0aGlzLm1pbmVRdWFudGl0eSA9IG1pbmVRdWFudGl0eTtcclxuICAgICAgICB0aGlzLnRpbGVzTGVmdCA9IHRoaXMuaGVpZ2h0ICogdGhpcy5oZWlnaHQgLSB0aGlzLm1pbmVRdWFudGl0eTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGUoKTogQ29udGFpbmVyIHtcclxuICAgICAgICBjb25zdCBjb250YWluZXIgPSBuZXcgQ29udGFpbmVyKCk7XHJcblxyXG4gICAgICAgIHRoaXMudGlsZXMgPSBBcnJheS5mcm9tKHtsZW5ndGg6IHRoaXMud2lkdGh9LCAoXywgaW5kZXhYKSA9PiB7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gQXJyYXkuZnJvbSh7bGVuZ3RoOiB0aGlzLmhlaWdodH0sIChfLCBpbmRleFkpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRpbGVJbnN0YW5jZSA9IG5ldyBUaWxlKHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0dXJlczogdGhpcy50ZXh0dXJlcyxcclxuICAgICAgICAgICAgICAgICAgICB0aWxlU2l6ZTogdGhpcy50aWxlU2l6ZSxcclxuICAgICAgICAgICAgICAgICAgICB4OiBpbmRleFgsXHJcbiAgICAgICAgICAgICAgICAgICAgeTogaW5kZXhZLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgbWVkaWF0b3IucmVnaXN0ZXIodGlsZUluc3RhbmNlLCBgdGlsZUluc3RhbmNlWyR7aW5kZXhYfV1bJHtpbmRleFl9XWApO1xyXG5cclxuICAgICAgICAgICAgICAgIHRpbGVJbnN0YW5jZS5jcmVhdGUoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb250YWluZXIuYWRkQ2hpbGQodGlsZUluc3RhbmNlLnRpbGUpO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiB0aWxlSW5zdGFuY2U7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5zZW5kQWN0aW9uKHthY3Rpb246ICd1cGRhdGUnLCB0bzogJ21pbmVzQ291bnQnLCB2YWx1ZTogdGhpcy5taW5lUXVhbnRpdHl9KTtcclxuICAgICAgICB0aGlzLnNldE1pbmVzKCk7XHJcblxyXG4gICAgICAgIHJldHVybiBjb250YWluZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g0LLRi9C30YvQstCw0LXRgtGB0Y8g0L/RgNC4INC60LDQttC00L7QvCDQutC70LjQutC1INC4INGD0LLQtdC00L7QvNC70Y/QtdGCINGB0YfRkdGC0YfQuNC6INC80LjQvVxyXG4gICAgZ2V0UXVhbnRpdHlGbGFncygpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBxdWFudGl0eUZsYWdzID0gdGhpcy5nZXRUaWxlcygpLmZpbHRlcih0aWxlID0+IHRpbGUuaXNTZXRGbGFnKCkpLmxlbmd0aDtcclxuXHJcbiAgICAgICAgdGhpcy5zZW5kQWN0aW9uKHthY3Rpb246ICd1cGRhdGUnLCB0bzogJ21pbmVzQ291bnQnLCB2YWx1ZTogdGhpcy5taW5lUXVhbnRpdHkgLSBxdWFudGl0eUZsYWdzfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVzdGFydCgpOiB2b2lkIHtcclxuICAgICAgICBBcnJheS5mcm9tKHRoaXMuZ2V0VGlsZXMoKSwgdGlsZSA9PiB0aWxlLnJlc2V0VGlsZSgpKTtcclxuXHJcbiAgICAgICAgdGhpcy50aWxlc0xlZnQgPSB0aGlzLmhlaWdodCAqIHRoaXMuaGVpZ2h0IC0gdGhpcy5taW5lUXVhbnRpdHk7XHJcbiAgICAgICAgdGhpcy5zZXRNaW5lcygpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vINGD0LzQtdC90YzRiNCw0LXRgiDQutC+0LvQuNGH0LXRgdGC0LLQviDQvtGB0YLQsNCy0YjQuNGF0YHRjyDQutC70LXRgtC+0LosINC60L7RgtC+0YDRi9C1INC90LUg0Y/QstC70Y/RjtGC0YHRjyDQvNC40L3QsNC80LhcclxuICAgIGRlY3JlYXNlVGlsZXNMZWZ0KGlzTG9zZTogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMudGlsZXNMZWZ0LS07XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMudGlsZXNMZWZ0KVxyXG5cclxuICAgICAgICBpZiAoIXRoaXMudGlsZXNMZWZ0KSB7XHJcbiAgICAgICAgICAgIGlmIChpc0xvc2UpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VuZEFjdGlvbih7YWN0aW9uOiAnc2V0TG9zZUZyYW1lJywgdG86ICdzbWlsZSd9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VuZEFjdGlvbih7YWN0aW9uOiAnc2V0V2luRnJhbWUnLCB0bzogJ3NtaWxlJ30pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRGbGFnc09uTWluZXMoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5zZW5kQWN0aW9uKHthY3Rpb246ICdzdG9wJywgdG86ICd0aW1lcid9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8g0JXRgdC70Lgg0LjQs9GA0L7QuiDQstGL0LjQs9GA0LDQuywg0L3QviDQvtC9INCz0LTQtS3RgtC+INC90LUg0L/QvtGB0YLQsNCy0LjQuyDRhNC70LDQttC+0LogLSDRgdGC0LDQstC40LxcclxuICAgIHNldEZsYWdzT25NaW5lcygpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBtaW5lczogQXJyYXk8SVRpbGU+ID0gdGhpcy5nZXRUaWxlcygpLmZpbHRlcih0aWxlID0+IHRpbGUuY3VycmVudFN0YXRlID09PSB0aWxlLnN0YXRlcy5ub3RQcmVzc2VkTWluZSk7XHJcblxyXG4gICAgICAgIEFycmF5LmZyb20obWluZXMsIG1pbmUgPT4gbWluZS5zZXRGbGFnKGZhbHNlLCB0cnVlKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g0JLRi9C60LvRjtGH0LDQtdC8INC40L3RgtC10YDQsNC60YLQuNCy0L3QvtGB0YLRjCDRgyDQutCw0LbQtNC+0Lkg0LrQu9C10YLQutC4ICjQvdCw0L/RgNC40LzQtdGALCDQutC+0LPQtNCwINC40LPRgNC+0Log0L7RgtC60YDRi9Cy0LDQtdGCINC80LXQvdGOKVxyXG4gICAgdG9nZ2xlVGlsZXNJbnRlcmFjdGl2ZShpbnRlcmFjdGl2ZTogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgICAgIEFycmF5LmZyb20odGhpcy5nZXRUaWxlcygpLCB0aWxlID0+IHRpbGUuc2V0SW50ZXJhY3RpdmUoaW50ZXJhY3RpdmUpKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRSYW5kb21UaWxlKCk6IElUaWxlIHtcclxuICAgICAgICBjb25zdCB0aWxlczogQXJyYXk8SVRpbGU+ID0gdGhpcy5nZXRUaWxlcygpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGlsZXNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGlsZXMubGVuZ3RoKV07XHJcbiAgICB9XHJcblxyXG4gICAgLy8g0J/RgNC4INC40L3QuNGG0LjQsNC70LjQt9Cw0YbQuNC4INC40LPRgNGLINGD0YHRgtCw0L3QsNCy0LvQuNCy0LDQtdC8INC80LjQvdGLXHJcbiAgICBzZXRNaW5lcygpOiB2b2lkIHtcclxuICAgICAgICBsZXQgdGlsZTogSVRpbGUgPSB0aGlzLmdldFJhbmRvbVRpbGUoKTtcclxuXHJcbiAgICAgICAgQXJyYXkuZnJvbSh7bGVuZ3RoOiB0aGlzLm1pbmVRdWFudGl0eX0sICgpID0+IHtcclxuICAgICAgICAgICAgd2hpbGUgKHRpbGUuZ2V0VmFsdWUoKSA9PT0gdGlsZS5zdGF0ZXMubm90UHJlc3NlZE1pbmUpIHtcclxuICAgICAgICAgICAgICAgIHRpbGUgPSB0aGlzLmdldFJhbmRvbVRpbGUoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGlsZS5zZXRWYWx1ZSh0aWxlLnN0YXRlcy5ub3RQcmVzc2VkTWluZSk7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU3Vycm91bmRpbmdUaWxlcyh0aWxlKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDQktGL0LfRi9Cy0LDQtdGC0YHRjyDQv9GA0Lgg0LrQsNC20LTQvtC5INGD0YHRgtCw0L3QvtCy0LrQuCDQvNC40L3Riy4g0JLQtdC70LjRh9C40L3QsCDRgdC+0YHQtdC00L3QuNGFINC60LvQtdGC0L7QuiDQvNC40L3RiyDRg9Cy0LXQu9C40YfQuNCy0LDQtdGC0YHRjyDQvdCwIDFcclxuICAgIHVwZGF0ZVN1cnJvdW5kaW5nVGlsZXModGlsZTogSVRpbGUpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCB0aWxlc1dpdGhvdXRNaW5lczogQXJyYXk8SVRpbGU+ID0gdGhpcy5nZXRTdXJyb3VuZGluZ1RpbGVzKHRpbGUpLmZpbHRlcih0aWxlID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHRpbGUuZ2V0VmFsdWUoKSAhPT0gdGlsZS5zdGF0ZXMubm90UHJlc3NlZE1pbmU7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIEFycmF5LmZyb20odGlsZXNXaXRob3V0TWluZXMsIHRpbGUgPT4gdGlsZS5zZXRWYWx1ZSh0aWxlLmdldFZhbHVlKCkgKyAxKSk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8vINCf0L7Qu9GD0YfQuNGC0Ywg0YHQvtGB0LXQtNC90LjQtSDRjdC70LXQvNC10L3RgtGLINC60LvQtdGC0LrQuFxyXG4gICAgZ2V0U3Vycm91bmRpbmdUaWxlcyh0aWxlOiBJVGlsZSk6IEFycmF5PElUaWxlPiB7XHJcbiAgICAgICAgY29uc3QgdGlsZUxpc3Q6IEFycmF5PElUaWxlPiA9IFtdO1xyXG5cclxuICAgICAgICBmb3IgKGxldCB4ID0gLTE7IHggPD0gMTsgeCsrKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IHkgPSAtMTsgeSA8PSAxOyB5KyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJvdyA9IHRpbGUueCArIHg7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjb2x1bW4gPSB0aWxlLnkgKyB5O1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICgheCAmJiAheSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChyb3cgPCAwIHx8IHJvdyA+PSB0aGlzLndpZHRoIHx8IGNvbHVtbiA8IDAgfHwgY29sdW1uID49IHRoaXMuaGVpZ2h0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdGlsZUxpc3QucHVzaCh0aGlzLnRpbGVzW3Jvd11bY29sdW1uXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aWxlTGlzdDtcclxuICAgIH1cclxuXHJcbiAgICBvcGVuRGlzcGF0Y2goe2lzR2FtZU92ZXIsIHRpbGV9OiBPcGVuRGlzcGF0Y2hUeXBlKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5vcGVuQ2VsbHMoaXNHYW1lT3ZlciA/IHRoaXMuZ2V0VGlsZXMoKSA6IHRoaXMuZ2V0U3Vycm91bmRpbmdUaWxlcyh0aWxlKSwgaXNHYW1lT3Zlcik7XHJcbiAgICB9XHJcblxyXG4gICAgb3BlbkNlbGxzKHRpbGVzOiBBcnJheTxJVGlsZT4sIGlzR2FtZU92ZXI6IGJvb2xlYW4pIHtcclxuICAgICAgICBBcnJheS5mcm9tKHRpbGVzLCB0aWxlID0+IHtcclxuICAgICAgICAgICAgIXRpbGUuaXNPcGVuZWQoKSAmJiB0aWxlLm9wZW4oZmFsc2UsIGlzR2FtZU92ZXIpXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuZ2V0UXVhbnRpdHlGbGFncygpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vINCf0L7Qu9GD0YfQuNGC0Ywg0LLRgdC1INC60LvQtdGC0LrQuFxyXG4gICAgZ2V0VGlsZXMoKTogQXJyYXk8SVRpbGU+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy50aWxlcy5yZWR1Y2UoKGFjYywgdGlsZSkgPT4gWy4uLmFjYywgLi4udGlsZV0sIFtdKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHtGaWVsZH07XHJcbiIsImltcG9ydCB7Q29udGFpbmVyLCBTcHJpdGV9IGZyb20gXCJwaXhpLmpzXCI7XHJcbmltcG9ydCB7RnJhbWVUeXBlfSBmcm9tIFwiLi4vLi4vdHlwaW5nL3R5cGVzXCI7XHJcbmltcG9ydCB7Y3JlYXRlQmd9IGZyb20gJy4uL2NyZWF0ZUJnJztcclxuXHJcbmNvbnN0IGNyZWF0ZVdhbGxzID0gKHt0ZXh0dXJlcywgdGlsZVNpemUsIHdpZHRoLCBoZWlnaHR9OiBGcmFtZVR5cGUpOiBDb250YWluZXIgPT4ge1xyXG4gICAgY29uc3Qgd2FsbHNDb250YWluZXIgPSBuZXcgQ29udGFpbmVyKCk7XHJcblxyXG4gICAgY29uc3QgYm9yZGVyVmVydExlZnQgPSBuZXcgU3ByaXRlKHRleHR1cmVzWydib3JkZXJfdmVydC5wbmcnXSk7XHJcbiAgICBib3JkZXJWZXJ0TGVmdC5oZWlnaHQgPSB0aWxlU2l6ZSAqIDAuNyAqIDMgKyB0aWxlU2l6ZSAqIChoZWlnaHQgKyAyKTtcclxuICAgIGJvcmRlclZlcnRMZWZ0LndpZHRoID0gdGlsZVNpemUgKiAwLjc7XHJcblxyXG4gICAgY29uc3QgYm9yZGVyVmVydFJpZ2h0ID0gbmV3IFNwcml0ZSh0ZXh0dXJlc1snYm9yZGVyX3ZlcnQucG5nJ10pO1xyXG4gICAgYm9yZGVyVmVydFJpZ2h0LmhlaWdodCA9IHRpbGVTaXplICogMC43ICogMyArIHRpbGVTaXplICogKGhlaWdodCArIDIpO1xyXG4gICAgYm9yZGVyVmVydFJpZ2h0LndpZHRoID0gdGlsZVNpemUgKiAwLjc7XHJcbiAgICBib3JkZXJWZXJ0UmlnaHQueCA9IHRpbGVTaXplICogMC43ICsgdGlsZVNpemUgKiB3aWR0aDtcclxuXHJcbiAgICBjb25zdCBib3JkZXJIb3JVcCA9IG5ldyBTcHJpdGUodGV4dHVyZXNbJ2JvcmRlcl9ob3IucG5nJ10pO1xyXG4gICAgYm9yZGVySG9yVXAuaGVpZ2h0ID0gdGlsZVNpemUgKiAwLjc7XHJcbiAgICBib3JkZXJIb3JVcC53aWR0aCA9IHRpbGVTaXplICogMC43ICogMiArIHRpbGVTaXplICogd2lkdGg7XHJcblxyXG4gICAgY29uc3QgYm9yZGVySG9yTWlkZGxlID0gbmV3IFNwcml0ZSh0ZXh0dXJlc1snYm9yZGVyX2hvci5wbmcnXSk7XHJcbiAgICBib3JkZXJIb3JNaWRkbGUuaGVpZ2h0ID0gdGlsZVNpemUgKiAwLjc7XHJcbiAgICBib3JkZXJIb3JNaWRkbGUud2lkdGggPSB0aWxlU2l6ZSAqIDAuNyAqIDIgKyB0aWxlU2l6ZSAqIHdpZHRoO1xyXG4gICAgYm9yZGVySG9yTWlkZGxlLnkgPSB0aWxlU2l6ZSAqIDAuNyArIHRpbGVTaXplICogMjtcclxuXHJcbiAgICBjb25zdCBib3JkZXJIb3JCb3R0b20gPSBuZXcgU3ByaXRlKHRleHR1cmVzWydib3JkZXJfaG9yLnBuZyddKTtcclxuICAgIGJvcmRlckhvckJvdHRvbS5oZWlnaHQgPSB0aWxlU2l6ZSAqIDAuNztcclxuICAgIGJvcmRlckhvckJvdHRvbS53aWR0aCA9IHRpbGVTaXplICogMC43ICogMiArIHRpbGVTaXplICogd2lkdGg7XHJcbiAgICBib3JkZXJIb3JCb3R0b20ueSA9IHRpbGVTaXplICogMC43ICogMiArIHRpbGVTaXplICogKGhlaWdodCArIDIpO1xyXG5cclxuICAgIEFycmF5LmZyb20oW2JvcmRlclZlcnRMZWZ0LCBib3JkZXJWZXJ0UmlnaHQsIGJvcmRlckhvclVwLCBib3JkZXJIb3JNaWRkbGUsIGJvcmRlckhvckJvdHRvbV0sIHdhbGwgPT4ge1xyXG4gICAgICAgIHdhbGwuYW5jaG9yLnNldCgwKTtcclxuXHJcbiAgICAgICAgd2FsbHNDb250YWluZXIuYWRkQ2hpbGQod2FsbCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gd2FsbHNDb250YWluZXI7XHJcbn07XHJcblxyXG5cclxuY29uc3QgY3JlYXRlQ29ybmVyID0gKHt0ZXh0dXJlcywgdGlsZVNpemUsIGhlaWdodCwgd2lkdGh9OiBGcmFtZVR5cGUpOiBDb250YWluZXIgPT4ge1xyXG4gICAgY29uc3QgY29ybmVyQ29udGFpbmVyID0gbmV3IENvbnRhaW5lcigpO1xyXG5cclxuICAgIGNvbnN0IGNvcm5lckJvdHRvbUxlZnQgPSBuZXcgU3ByaXRlKHRleHR1cmVzWydjb3JuZXJfYm90dG9tX2xlZnQucG5nJ10pO1xyXG4gICAgY29ybmVyQm90dG9tTGVmdC54ID0gMDtcclxuICAgIGNvcm5lckJvdHRvbUxlZnQueSA9IHRpbGVTaXplICogMC43ICogMiArIHRpbGVTaXplICogKGhlaWdodCArIDIpO1xyXG5cclxuICAgIGNvbnN0IGNvcm5lckJvdHRvbVJpZ2h0ID0gbmV3IFNwcml0ZSh0ZXh0dXJlc1snY29ybmVyX2JvdHRvbV9yaWdodC5wbmcnXSk7XHJcbiAgICBjb3JuZXJCb3R0b21SaWdodC54ID0gdGlsZVNpemUgKiAwLjcgKyB0aWxlU2l6ZSAqIHdpZHRoO1xyXG4gICAgY29ybmVyQm90dG9tUmlnaHQueSA9IHRpbGVTaXplICogMC43ICogMiArIHRpbGVTaXplICogKGhlaWdodCArIDIpO1xyXG5cclxuICAgIGNvbnN0IGNvcm5lclVwTGVmdCA9IG5ldyBTcHJpdGUodGV4dHVyZXNbJ2Nvcm5lcl91cF9sZWZ0LnBuZyddKTtcclxuICAgIGNvcm5lclVwTGVmdC54ID0gMDtcclxuICAgIGNvcm5lclVwTGVmdC55ID0gMDtcclxuXHJcbiAgICBjb25zdCBjb3JuZXJVcFJpZ2h0ID0gbmV3IFNwcml0ZSh0ZXh0dXJlc1snY29ybmVyX3VwX3JpZ2h0LnBuZyddKTtcclxuICAgIGNvcm5lclVwUmlnaHQueCA9IHRpbGVTaXplICogMC43ICsgdGlsZVNpemUgKiB3aWR0aDtcclxuICAgIGNvcm5lclVwUmlnaHQueSA9IDA7XHJcblxyXG4gICAgY29uc3QgY3Jvc3Nyb2Fkc0xlZnQgPSBuZXcgU3ByaXRlKHRleHR1cmVzWydjcm9zc3JvYWRzX2xlZnQucG5nJ10pO1xyXG4gICAgY3Jvc3Nyb2Fkc0xlZnQueCA9IDA7XHJcbiAgICBjcm9zc3JvYWRzTGVmdC55ID0gdGlsZVNpemUgKiAwLjcgKyB0aWxlU2l6ZSAqIDI7XHJcblxyXG4gICAgY29uc3QgY3Jvc3Nyb2Fkc1JpZ2h0ID0gbmV3IFNwcml0ZSh0ZXh0dXJlc1snY3Jvc3Nyb2Fkc19yaWdodC5wbmcnXSk7XHJcbiAgICBjcm9zc3JvYWRzUmlnaHQueCA9IHRpbGVTaXplICogMC43ICsgdGlsZVNpemUgKiB3aWR0aDtcclxuICAgIGNyb3Nzcm9hZHNSaWdodC55ID0gdGlsZVNpemUgKiAwLjcgKyB0aWxlU2l6ZSAqIDI7XHJcblxyXG4gICAgQXJyYXkuZnJvbShbXHJcbiAgICAgICAgY29ybmVyQm90dG9tTGVmdCwgY29ybmVyQm90dG9tUmlnaHQsIGNvcm5lclVwTGVmdCwgY29ybmVyVXBSaWdodCwgY3Jvc3Nyb2Fkc0xlZnQsIGNyb3Nzcm9hZHNSaWdodFxyXG4gICAgXSwgY29ybmVyID0+IHtcclxuICAgICAgICBjb3JuZXIuYW5jaG9yLnNldCgwKTtcclxuICAgICAgICBjb3JuZXIuaGVpZ2h0ID0gdGlsZVNpemUgKiAwLjc7XHJcbiAgICAgICAgY29ybmVyLndpZHRoID0gdGlsZVNpemUgKiAwLjc7XHJcblxyXG4gICAgICAgIGNvcm5lckNvbnRhaW5lci5hZGRDaGlsZChjb3JuZXIpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIGNvcm5lckNvbnRhaW5lcjtcclxufTtcclxuXHJcbmNvbnN0IGNyZWF0ZUZyYW1lID0gKHBhcmFtZXRlcnM6IEZyYW1lVHlwZSk6IENvbnRhaW5lciA9PiB7XHJcbiAgICBjb25zdCBjb250YWluZXIgPSBuZXcgQ29udGFpbmVyKCk7XHJcblxyXG4gICAgY29uc3QgaGVhZGVyQmcgPSBjcmVhdGVCZyh7XHJcbiAgICAgICAgeDogcGFyYW1ldGVycy50aWxlU2l6ZSAqIDAuNyxcclxuICAgICAgICB5OiBwYXJhbWV0ZXJzLnRpbGVTaXplICogMC43LFxyXG4gICAgICAgIHdpZHRoOiBwYXJhbWV0ZXJzLnRpbGVTaXplICogcGFyYW1ldGVycy53aWR0aCxcclxuICAgICAgICBoZWlnaHQ6IHBhcmFtZXRlcnMudGlsZVNpemUgKiAyXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCB3YWxsc0NvbnRhaW5lciA9IGNyZWF0ZVdhbGxzKHBhcmFtZXRlcnMpO1xyXG4gICAgY29uc3QgY29ybmVyQ29udGFpbmVyID0gY3JlYXRlQ29ybmVyKHBhcmFtZXRlcnMpO1xyXG5cclxuICAgIGNvbnRhaW5lci5hZGRDaGlsZChoZWFkZXJCZywgd2FsbHNDb250YWluZXIsIGNvcm5lckNvbnRhaW5lcik7XHJcblxyXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcclxufTtcclxuXHJcbmV4cG9ydCB7Y3JlYXRlRnJhbWV9O1xyXG4iLCJpbXBvcnQge0ZpZWxkfSBmcm9tIFwiLi9maWVsZFwiO1xyXG5pbXBvcnQge0NvbnRhaW5lciwgTG9hZGVyUmVzb3VyY2V9IGZyb20gXCJwaXhpLmpzXCI7XHJcbmltcG9ydCB7Y3JlYXRlRnJhbWV9IGZyb20gXCIuL2ZyYW1lXCI7XHJcbmltcG9ydCB7bWVkaWF0b3J9IGZyb20gXCIuLi8uLi9sb2dpYy9tZWRpYXRvclwiO1xyXG5pbXBvcnQge0NvbmZpZ1R5cGV9IGZyb20gXCIuLi8uLi90eXBpbmcvdHlwZXNcIjtcclxuXHJcbmNvbnN0IGNyZWF0ZUJvZHkgPSAoY29uZmlnOiBDb25maWdUeXBlLCByZXNvdXJjZXM6IFBhcnRpYWw8UmVjb3JkPHN0cmluZywgTG9hZGVyUmVzb3VyY2U+Pik6IENvbnRhaW5lciA9PiB7XHJcbiAgICBjb25zdCBib2R5Q29udGFpbmVyID0gbmV3IENvbnRhaW5lcigpO1xyXG5cclxuICAgIC8vINGB0L7Qt9C00LDRkdC8INC/0L7Qu9C1INGBINC60L3QvtC/0LrQsNC80LhcclxuICAgIGNvbnN0IGZpZWxkID0gbmV3IEZpZWxkKHtcclxuICAgICAgICB0ZXh0dXJlczogcmVzb3VyY2VzLnRpbGVzU2hlZXQudGV4dHVyZXMsXHJcbiAgICAgICAgdGlsZVNpemU6IGNvbmZpZy50aWxlU2l6ZSxcclxuICAgICAgICBoZWlnaHQ6IGNvbmZpZy5oZWlnaHQsXHJcbiAgICAgICAgd2lkdGg6IGNvbmZpZy53aWR0aCxcclxuICAgICAgICBtaW5lUXVhbnRpdHk6IGNvbmZpZy5taW5lUXVhbnRpdHlcclxuICAgIH0pO1xyXG5cclxuICAgIC8vINGB0L7Qt9C00LDRkdC8INGB0YLQsNGC0LjRh9C10YHQutC40LUg0LLQuNC30YPQsNC70YzQvdGL0LUg0Y3Qu9C10LzQtdC90YLRi1xyXG4gICAgY29uc3QgZnJhbWVDb250YWluZXI6IENvbnRhaW5lciA9IGNyZWF0ZUZyYW1lKHtcclxuICAgICAgICB0ZXh0dXJlczogcmVzb3VyY2VzLndhbGxzU2hlZXQudGV4dHVyZXMsXHJcbiAgICAgICAgdGlsZVNpemU6IGNvbmZpZy50aWxlU2l6ZSxcclxuICAgICAgICB3aWR0aDogY29uZmlnLndpZHRoLFxyXG4gICAgICAgIGhlaWdodDogY29uZmlnLmhlaWdodFxyXG4gICAgfSk7XHJcblxyXG4gICAgbWVkaWF0b3IucmVnaXN0ZXIoZmllbGQsICdmaWVsZCcpO1xyXG5cclxuICAgIGJvZHlDb250YWluZXIuYWRkQ2hpbGQoZnJhbWVDb250YWluZXIsIGZpZWxkLmNyZWF0ZSgpKTtcclxuXHJcbiAgICByZXR1cm4gYm9keUNvbnRhaW5lcjtcclxufTtcclxuXHJcbmV4cG9ydCB7Y3JlYXRlQm9keX07XHJcbiIsImltcG9ydCB7QW5pbWF0ZWRTcHJpdGV9IGZyb20gJ3BpeGkuanMnXHJcbmltcG9ydCB7SVRpbGV9IGZyb20gXCIuLi8uLi90eXBpbmcvaW50ZXJmYWNlc1wiO1xyXG5pbXBvcnQge1N0YXRlc1R5cGUsIFRpbGVUeXBlfSBmcm9tIFwiLi4vLi4vdHlwaW5nL3R5cGVzXCI7XHJcbmltcG9ydCB7U3Vic2NyaWJlcn0gZnJvbSBcIi4uLy4uL2xvZ2ljL3N1YnNjcmliZXJcIjtcclxuXHJcbmNsYXNzIFRpbGUgZXh0ZW5kcyBTdWJzY3JpYmVyIGltcGxlbWVudHMgSVRpbGUge1xyXG4gICAgcmVhZG9ubHkgc3RhdGVzOiBTdGF0ZXNUeXBlO1xyXG4gICAgcmVhZG9ubHkgdGV4dHVyZXM6IG9iamVjdDtcclxuICAgIHJlYWRvbmx5IHRpbGVTaXplOiBudW1iZXI7XHJcbiAgICByZWFkb25seSB4OiBudW1iZXI7XHJcbiAgICByZWFkb25seSB5OiBudW1iZXI7XHJcbiAgICBjdXJyZW50U3RhdGU6IG51bWJlcjtcclxuICAgIHRpbGU6IEFuaW1hdGVkU3ByaXRlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHt0aWxlU2l6ZSwgdGV4dHVyZXMsIHgsIHl9OiBUaWxlVHlwZSkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgIHRoaXMudGlsZVNpemUgPSB0aWxlU2l6ZTtcclxuICAgICAgICB0aGlzLnRleHR1cmVzID0gdGV4dHVyZXM7XHJcbiAgICAgICAgdGhpcy54ID0geDtcclxuICAgICAgICB0aGlzLnkgPSB5O1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlcyA9IHtcclxuICAgICAgICAgICAgaW5pdDogMCxcclxuICAgICAgICAgICAgcHJlc3NlZE1pbmU6IDksXHJcbiAgICAgICAgICAgIG5vdFByZXNzZWRNaW5lOiAxMCxcclxuICAgICAgICAgICAgd3JvbmdNaW5lOiAxMSxcclxuICAgICAgICAgICAgZmxhZzogMTIsXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IDEzXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5jdXJyZW50U3RhdGUgPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnRpbGUgPSBuZXcgQW5pbWF0ZWRTcHJpdGUoT2JqZWN0LnZhbHVlcyh0aGlzLnRleHR1cmVzKSk7XHJcblxyXG4gICAgICAgIHRoaXMudGlsZS5nb3RvQW5kU3RvcChPYmplY3QudmFsdWVzKHRoaXMudGV4dHVyZXMpLmxlbmd0aCAtIDEpO1xyXG4gICAgICAgIHRoaXMudGlsZS5hbmNob3Iuc2V0KDApO1xyXG4gICAgICAgIHRoaXMudGlsZS53aWR0aCA9IHRoaXMudGlsZVNpemU7XHJcbiAgICAgICAgdGhpcy50aWxlLmhlaWdodCA9IHRoaXMudGlsZVNpemU7XHJcbiAgICAgICAgdGhpcy50aWxlLnggPSB0aGlzLnRpbGVTaXplICogMC43ICsgdGhpcy50aWxlU2l6ZSAqIHRoaXMueDtcclxuICAgICAgICB0aGlzLnRpbGUueSA9IHRoaXMudGlsZVNpemUgKiAwLjcgKiAyICsgdGhpcy50aWxlU2l6ZSAqICh0aGlzLnkgKyAyKTtcclxuICAgICAgICB0aGlzLnRpbGUuYnV0dG9uTW9kZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5zZXRJbnRlcmFjdGl2ZSh0cnVlKTtcclxuICAgICAgICB0aGlzLnRpbGUub24oJ3BvaW50ZXJkb3duJywgdGhpcy5idXR0b25Eb3duLmJpbmQodGhpcykpXHJcbiAgICB9XHJcblxyXG4gICAgYnV0dG9uRG93bihldmVudCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc2VuZEFjdGlvbih7YWN0aW9uOiAnc3RhcnQnLCB0bzogJ3RpbWVyJ30pOyAvLyDQmtC70LXRgtC60LAg0LHRi9C70LAg0L3QsNC20LDRgtCwIC0g0YLQsNC50LzQtdGAINC90LDRh9C40L3QsNC10YIg0L7RgtGB0YfRkdGCXHJcblxyXG4gICAgICAgICFldmVudC5kYXRhLmJ1dHRvbiA/XHJcbiAgICAgICAgICAgICF0aGlzLmlzU2V0RmxhZygpICYmIHRoaXMub3Blbih0cnVlLCBmYWxzZSkgOlxyXG4gICAgICAgICAgICB0aGlzLnNldEZsYWcodHJ1ZSwgIXRoaXMuaXNTZXRGbGFnKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vINCf0L7RgdGC0LDQstC40YLRjCAvINGB0L3Rj9GC0Ywg0YTQu9Cw0LbQvtC6XHJcbiAgICBzZXRGbGFnKGludGVyYWN0aXZlOiBib29sZWFuLCBhY3RpdmU6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnRpbGUuZ290b0FuZFN0b3AoYWN0aXZlID8gdGhpcy5zdGF0ZXMuZmxhZyA6IHRoaXMuc3RhdGVzLmRlZmF1bHQpO1xyXG4gICAgICAgIHRoaXMudGlsZS5pbnRlcmFjdGl2ZSA9IGludGVyYWN0aXZlO1xyXG4gICAgICAgIHRoaXMuc2VuZEFjdGlvbih7YWN0aW9uOiAnZ2V0UXVhbnRpdHlGbGFncycsIHRvOiAnZmllbGQnfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0SW50ZXJhY3RpdmUoaW50ZXJhY3RpdmU6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnRpbGUuaW50ZXJhY3RpdmUgPSBpbnRlcmFjdGl2ZTtcclxuICAgIH1cclxuXHJcbiAgICBpc1NldEZsYWcoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudGlsZS5jdXJyZW50RnJhbWUgPT09IHRoaXMuc3RhdGVzLmZsYWc7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0VmFsdWUodmFsdWU6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuY3VycmVudFN0YXRlID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VmFsdWUoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50U3RhdGU7XHJcbiAgICB9XHJcblxyXG4gICAgaXNPcGVuZWQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudGlsZS5jdXJyZW50RnJhbWUgPT09IHRoaXMuY3VycmVudFN0YXRlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vINCS0LXRgNC90YPRgtGMINC60LvQtdGC0LrRgyDQsiDQvdCw0YfQsNC70YzQvdC+0LUg0YHQvtGB0YLQvtGP0L3QuNC1XHJcbiAgICByZXNldFRpbGUoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zZXRWYWx1ZSgwKTtcclxuICAgICAgICB0aGlzLnRpbGUuZ290b0FuZFN0b3AodGhpcy5zdGF0ZXMuZGVmYXVsdCk7XHJcbiAgICAgICAgdGhpcy5zZXRJbnRlcmFjdGl2ZSh0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICBvcGVuKGJ5VXNlcjogYm9vbGVhbiwgaXNHYW1lT3ZlcjogYm9vbGVhbiA9IGZhbHNlKTogdm9pZCB7XHJcbiAgICAgICAgc3dpdGNoICh0aGlzLmdldFZhbHVlKCkpIHtcclxuICAgICAgICAgICAgY2FzZSB0aGlzLnN0YXRlcy5ub3RQcmVzc2VkTWluZTpcclxuICAgICAgICAgICAgICAgIGJ5VXNlciAmJiB0aGlzLnNldFZhbHVlKHRoaXMuc3RhdGVzLnByZXNzZWRNaW5lKTsgLy8g0J/QvtC/0LDQu9C4INC90LAg0LzQuNC90YMgLSDQvNC10L3Rj9C10Lwg0YLQtdC60YHRgtGD0YDRgyDQvdCwINC+0YLQu9C40YfQvdGD0Y4g0L7RgiDQtNGA0YPQs9C40YUg0LzQuNC9XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRpbGUuY3VycmVudEZyYW1lID09PSB0aGlzLnN0YXRlcy5mbGFnICYmIHRoaXMuc2V0VmFsdWUodGhpcy5zdGF0ZXMuZmxhZyk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy50aWxlLmdvdG9BbmRTdG9wKHRoaXMuY3VycmVudFN0YXRlKTtcclxuICAgICAgICAgICAgICAgICFpc0dhbWVPdmVyICYmIHRoaXMuc2VuZEFjdGlvbih7YWN0aW9uOiAnb3BlbkRpc3BhdGNoJywgdG86ICdmaWVsZCcsIHZhbHVlOiB7aXNHYW1lT3ZlcjogdHJ1ZSwgdGlsZTogdGhpc319KTtcclxuXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSB0aGlzLnN0YXRlcy5pbml0OlxyXG4gICAgICAgICAgICAgICAgLy8g0JXRgdC70Lgg0YHRgtC+0Y/QuyDRhNC70LDQttC+0LosINC90L4g0LzQuNC90Ysg0YLQsNC8INC90LUg0L7QutCw0LfQsNC70L7RgdGMLCAtINC/0L7QutCw0LfRi9Cy0LDQtdC8INGB0L7QvtGC0LLQtdGC0YHRgtCy0YPRjtGJ0YPRjiDRgtC10LrRgdGC0YPRgNGDXHJcbiAgICAgICAgICAgICAgICBpZiAoaXNHYW1lT3ZlciAmJiB0aGlzLnRpbGUuY3VycmVudEZyYW1lID09PSB0aGlzLnN0YXRlcy5mbGFnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRWYWx1ZSh0aGlzLnN0YXRlcy53cm9uZ01pbmUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMudGlsZS5nb3RvQW5kU3RvcCh0aGlzLmN1cnJlbnRTdGF0ZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlbmRBY3Rpb24oe2FjdGlvbjogJ2RlY3JlYXNlVGlsZXNMZWZ0JywgdG86ICdmaWVsZCcsIHZhbHVlOiBpc0dhbWVPdmVyfSk7XHJcbiAgICAgICAgICAgICAgICAhaXNHYW1lT3ZlciAmJiB0aGlzLnNlbmRBY3Rpb24oe2FjdGlvbjogJ29wZW5EaXNwYXRjaCcsIHRvOiAnZmllbGQnLCB2YWx1ZToge2lzR2FtZU92ZXI6IGZhbHNlLCB0aWxlOiB0aGlzfX0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgLy8g0JXRgdC70Lgg0YHRgtC+0Y/QuyDRhNC70LDQttC+0LosINC90L4g0LzQuNC90Ysg0YLQsNC8INC90LUg0L7QutCw0LfQsNC70L7RgdGMLCAtINC/0L7QutCw0LfRi9Cy0LDQtdC8INGB0L7QvtGC0LLQtdGC0YHRgtCy0YPRjtGJ0YPRjiDRgtC10LrRgdGC0YPRgNGDXHJcbiAgICAgICAgICAgICAgICBpZiAoaXNHYW1lT3ZlciAmJiB0aGlzLnRpbGUuY3VycmVudEZyYW1lID09PSB0aGlzLnN0YXRlcy5mbGFnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRWYWx1ZSh0aGlzLnN0YXRlcy53cm9uZ01pbmUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMudGlsZS5nb3RvQW5kU3RvcCh0aGlzLmN1cnJlbnRTdGF0ZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlbmRBY3Rpb24oe2FjdGlvbjogJ2RlY3JlYXNlVGlsZXNMZWZ0JywgdG86ICdmaWVsZCcsIHZhbHVlOiBpc0dhbWVPdmVyfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnNldEludGVyYWN0aXZlKGZhbHNlKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHtUaWxlfTtcclxuIiwiaW1wb3J0IHtDb250YWluZXIsIFRleHRTdHlsZSwgVGV4dH0gZnJvbSBcInBpeGkuanNcIjtcclxuaW1wb3J0IHtJQnV0dG9ufSBmcm9tIFwiLi4vLi4vLi4vdHlwaW5nL2ludGVyZmFjZXNcIjtcclxuaW1wb3J0IHtCdXR0b25UeXBlLCBHcmFwaGljc1JlY3RUeXBlfSBmcm9tIFwiLi4vLi4vLi4vdHlwaW5nL3R5cGVzXCI7XHJcbmltcG9ydCB7Y3JlYXRlQmd9IGZyb20gXCIuLi8uLi9jcmVhdGVCZ1wiO1xyXG5pbXBvcnQge1N1YnNjcmliZXJ9IGZyb20gXCIuLi8uLi8uLi9sb2dpYy9zdWJzY3JpYmVyXCI7XHJcblxyXG5jbGFzcyBCdXR0b24gZXh0ZW5kcyBTdWJzY3JpYmVyIGltcGxlbWVudHMgSUJ1dHRvbiB7XHJcbiAgICByZWFkb25seSBoZWlnaHQ6IG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHg6IG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHk6IG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHRleHQ6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IHdpZHRoOiBudW1iZXI7XHJcbiAgICByZWFkb25seSBhbmNob3JZOiBudW1iZXI7XHJcbiAgICByZWFkb25seSBiZ1Zpc2liaWxpdHk6IGJvb2xlYW47XHJcbiAgICByZWFkb25seSBmb250U2l6ZTogbnVtYmVyO1xyXG4gICAgYnV0dG9uOiBUZXh0O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHt3aWR0aCwgaGVpZ2h0LCB0ZXh0LCB4LCB5LCBhbmNob3JZLCBmb250U2l6ZSwgYmdWaXNpYmlsaXR5ID0gdHJ1ZX06IEJ1dHRvblR5cGUgJiBHcmFwaGljc1JlY3RUeXBlKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuXHJcbiAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG4gICAgICAgIHRoaXMudGV4dCA9IHRleHQ7XHJcbiAgICAgICAgdGhpcy54ID0geDtcclxuICAgICAgICB0aGlzLnkgPSB5O1xyXG4gICAgICAgIHRoaXMuYW5jaG9yWSA9IGFuY2hvclk7XHJcbiAgICAgICAgdGhpcy5mb250U2l6ZSA9IGZvbnRTaXplO1xyXG4gICAgICAgIHRoaXMuYmdWaXNpYmlsaXR5ID0gYmdWaXNpYmlsaXR5O1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZSgpOiBDb250YWluZXIge1xyXG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IG5ldyBDb250YWluZXIoKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuYmdWaXNpYmlsaXR5KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGJnID0gY3JlYXRlQmcoe1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IHRoaXMud2lkdGgsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IHRoaXMuaGVpZ2h0LFxyXG4gICAgICAgICAgICAgICAgeDogdGhpcy54LFxyXG4gICAgICAgICAgICAgICAgeTogdGhpcy55XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgY29udGFpbmVyLmFkZENoaWxkKGJnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnRhaW5lci5hZGRDaGlsZCh0aGlzLnNldFRleHQoKSk7XHJcblxyXG4gICAgICAgIHJldHVybiBjb250YWluZXI7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0VGV4dCgpOiBUZXh0IHtcclxuICAgICAgICBjb25zdCBzdHlsZSA9IG5ldyBUZXh0U3R5bGUoe1xyXG4gICAgICAgICAgICBmb250RmFtaWx5OiAnQXJpYWwnLFxyXG4gICAgICAgICAgICBmb250U2l6ZTogdGhpcy5mb250U2l6ZSxcclxuICAgICAgICAgICAgZm9udFdlaWdodDogJ2JvbGQnLFxyXG4gICAgICAgICAgICBmaWxsOiBbJyNmZmZmZmYnLCAnI2ZmNmM2MiddLFxyXG4gICAgICAgICAgICBzdHJva2U6ICcjNGExODUwJyxcclxuICAgICAgICAgICAgc3Ryb2tlVGhpY2tuZXNzOiA1LFxyXG4gICAgICAgICAgICBkcm9wU2hhZG93OiB0cnVlLFxyXG4gICAgICAgICAgICBkcm9wU2hhZG93Q29sb3I6ICcjMDAwMDAwJyxcclxuICAgICAgICAgICAgZHJvcFNoYWRvd0JsdXI6IDQsXHJcbiAgICAgICAgICAgIGRyb3BTaGFkb3dBbmdsZTogTWF0aC5QSSAvIDYsXHJcbiAgICAgICAgICAgIGRyb3BTaGFkb3dEaXN0YW5jZTogNixcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5idXR0b24gPSBuZXcgVGV4dCh0aGlzLnRleHQsIHN0eWxlKTtcclxuICAgICAgICB0aGlzLmJ1dHRvbi5hbmNob3Iuc2V0KDAuNSwgdGhpcy5hbmNob3JZKTtcclxuICAgICAgICB0aGlzLmJ1dHRvbi5pbnRlcmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5idXR0b24uYnV0dG9uTW9kZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5idXR0b24ueCA9IHRoaXMueCArIHRoaXMud2lkdGggLyAyO1xyXG4gICAgICAgIHRoaXMuYnV0dG9uLnkgPSB0aGlzLnkgKyB0aGlzLmhlaWdodCAqIHRoaXMuYW5jaG9yWTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYnV0dG9uO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQge0J1dHRvbn07XHJcbiIsImltcG9ydCB7QnV0dG9ufSBmcm9tIFwiLi9idXR0b25cIjtcclxuaW1wb3J0IHtJRXhpdH0gZnJvbSBcIi4uLy4uLy4uL3R5cGluZy9pbnRlcmZhY2VzXCI7XHJcbmltcG9ydCB7Q29udGFpbmVyfSBmcm9tIFwicGl4aS5qc1wiO1xyXG5cclxuY2xhc3MgRXhpdCBleHRlbmRzIEJ1dHRvbiBpbXBsZW1lbnRzIElFeGl0IHtcclxuICAgIHNldChwYXVzZU1lbnVDb250YWluZXI6IENvbnRhaW5lciwgc3RhcnRHYW1lQnV0dG9uQ29udGFpbmVyOiBDb250YWluZXIpOiBDb250YWluZXIge1xyXG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IHRoaXMuY3JlYXRlKCk7XHJcblxyXG4gICAgICAgIHRoaXMuYnV0dG9uLm9uKCdwb2ludGVydXAnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHBhdXNlTWVudUNvbnRhaW5lci52aXNpYmxlID0gIXBhdXNlTWVudUNvbnRhaW5lci52aXNpYmxlOyAvLyDQodC60YDRi9Cy0LDQtdC8INC60L7QvdGC0LXQudC90LXRgCDQv9Cw0YPQt9GLXHJcbiAgICAgICAgICAgIHN0YXJ0R2FtZUJ1dHRvbkNvbnRhaW5lci52aXNpYmxlID0gIXN0YXJ0R2FtZUJ1dHRvbkNvbnRhaW5lci52aXNpYmxlOyAvLyDQn9C+0LrQsNC30YvQtdC8INC60L7QvdGC0LXQudC90LXRgCDRgSDQutC90L7Qv9C60L7QuSDQvdCw0YfQsNGC0Ywg0LjQs9GA0YNcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGNvbnRhaW5lcjtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHtFeGl0fTtcclxuIiwiaW1wb3J0IHtCdXR0b259IGZyb20gXCIuL2J1dHRvblwiO1xyXG5pbXBvcnQge0lQYXVzZUJ1dHRvbn0gZnJvbSBcIi4uLy4uLy4uL3R5cGluZy9pbnRlcmZhY2VzXCI7XHJcbmltcG9ydCB7Q29udGFpbmVyfSBmcm9tIFwicGl4aS5qc1wiO1xyXG5cclxuY2xhc3MgUGF1c2VCdXR0b24gZXh0ZW5kcyBCdXR0b24gaW1wbGVtZW50cyBJUGF1c2VCdXR0b24ge1xyXG4gICAgc2V0KHBhdXNlTWVudUNvbnRhaW5lcjogQ29udGFpbmVyKTogQ29udGFpbmVyIHtcclxuICAgICAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLmNyZWF0ZSgpO1xyXG5cclxuICAgICAgICB0aGlzLmJ1dHRvbi5vbigncG9pbnRlcnVwJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBwYXVzZU1lbnVDb250YWluZXIudmlzaWJsZSA9ICFwYXVzZU1lbnVDb250YWluZXIudmlzaWJsZTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc2VuZEFjdGlvbih7YWN0aW9uOiBwYXVzZU1lbnVDb250YWluZXIudmlzaWJsZSA/ICdzdG9wJyA6ICdjb250aW51ZScsIHRvOiAndGltZXInfSk7XHJcbiAgICAgICAgICAgIHRoaXMuc2VuZEFjdGlvbih7YWN0aW9uOiAndG9nZ2xlVGlsZXNJbnRlcmFjdGl2ZScsIHRvOiAnZmllbGQnLCB2YWx1ZTogIXBhdXNlTWVudUNvbnRhaW5lci52aXNpYmxlfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBjb250YWluZXI7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7UGF1c2VCdXR0b259O1xyXG4iLCJpbXBvcnQge0J1dHRvbn0gZnJvbSBcIi4vYnV0dG9uXCI7XHJcbmltcG9ydCB7SVN0YXJ0fSBmcm9tIFwiLi4vLi4vLi4vdHlwaW5nL2ludGVyZmFjZXNcIjtcclxuaW1wb3J0IHtDb250YWluZXJ9IGZyb20gXCJwaXhpLmpzXCI7XHJcblxyXG5jbGFzcyBTdGFydCBleHRlbmRzIEJ1dHRvbiBpbXBsZW1lbnRzIElTdGFydCB7XHJcbiAgICBzZXQoKTogQ29udGFpbmVyIHtcclxuICAgICAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLmNyZWF0ZSgpO1xyXG5cclxuICAgICAgICB0aGlzLmJ1dHRvbi5vbigncG9pbnRlcnVwJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb250YWluZXIudmlzaWJsZSA9ICFjb250YWluZXIudmlzaWJsZTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc2VuZEFjdGlvbih7YWN0aW9uOiAnc2V0SW5pdEZyYW1lJywgdG86ICdzbWlsZSd9KTtcclxuICAgICAgICAgICAgdGhpcy5zZW5kQWN0aW9uKHthY3Rpb246ICdyZXN0YXJ0JywgdG86ICdzbWlsZSd9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGNvbnRhaW5lcjtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHtTdGFydH07XHJcbiIsImltcG9ydCB7Q29uZmlnVHlwZX0gZnJvbSBcIi4uLy4uL3R5cGluZy90eXBlc1wiO1xyXG5pbXBvcnQge0NvbnRhaW5lcn0gZnJvbSBcInBpeGkuanNcIjtcclxuaW1wb3J0IHtQYXVzZUJ1dHRvbn0gZnJvbSBcIi4vYnV0dG9ucy9wYXVzZVwiO1xyXG5pbXBvcnQge0V4aXR9IGZyb20gXCIuL2J1dHRvbnMvZXhpdFwiO1xyXG5pbXBvcnQge1N0YXJ0fSBmcm9tIFwiLi9idXR0b25zL3N0YXJ0XCI7XHJcbmltcG9ydCB7bWVkaWF0b3J9IGZyb20gXCIuLi8uLi9sb2dpYy9tZWRpYXRvclwiO1xyXG5cclxuY29uc3QgY3JlYXRlTWVudSA9IChjb25maWc6IENvbmZpZ1R5cGUpID0+IHtcclxuICAgIGNvbnN0IG1lbnVDb250YWluZXIgPSBuZXcgQ29udGFpbmVyKCk7XHJcbiAgICBjb25zdCBwYXVzZU1lbnVDb250YWluZXIgPSBuZXcgQ29udGFpbmVyKCk7XHJcblxyXG4gICAgY29uc3QgcGF1c2VCdXR0b24gPSBuZXcgUGF1c2VCdXR0b24oe1xyXG4gICAgICAgIHdpZHRoOiBjb25maWcudGlsZVNpemUgKiBjb25maWcud2lkdGggKyBjb25maWcudGlsZVNpemUgKiAyICogMC43LFxyXG4gICAgICAgIGhlaWdodDogY29uZmlnLnRpbGVTaXplLFxyXG4gICAgICAgIHRleHQ6ICfQn9CQ0KPQl9CQJyxcclxuICAgICAgICBmb250U2l6ZTogMjAsXHJcbiAgICAgICAgeDogMCxcclxuICAgICAgICB5OiAtY29uZmlnLnRpbGVTaXplLFxyXG4gICAgICAgIGFuY2hvclk6IDAuNSxcclxuICAgICAgICBiZ1Zpc2liaWxpdHk6IGZhbHNlXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBjb250aW51ZUdhbWVCdXR0b24gPSBuZXcgUGF1c2VCdXR0b24oe1xyXG4gICAgICAgIHdpZHRoOiBjb25maWcudGlsZVNpemUgKiBjb25maWcud2lkdGgsXHJcbiAgICAgICAgaGVpZ2h0OiBjb25maWcudGlsZVNpemUsXHJcbiAgICAgICAgdGV4dDogJ9Cf0KDQntCU0J7Qm9CW0JjQotCsINCY0JPQoNCjJyxcclxuICAgICAgICBmb250U2l6ZTogMTYsXHJcbiAgICAgICAgeDogY29uZmlnLnRpbGVTaXplICogMC43LFxyXG4gICAgICAgIHk6IGNvbmZpZy50aWxlU2l6ZSAqIDAuNyxcclxuICAgICAgICBhbmNob3JZOiAwLjYsXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBleGl0VG9NZW51QnV0dG9uID0gbmV3IEV4aXQoe1xyXG4gICAgICAgIHdpZHRoOiBjb25maWcudGlsZVNpemUgKiBjb25maWcud2lkdGgsXHJcbiAgICAgICAgaGVpZ2h0OiBjb25maWcudGlsZVNpemUsXHJcbiAgICAgICAgdGV4dDogJ9CS0KvQpdCe0JQg0JjQlyDQmNCT0KDQqycsXHJcbiAgICAgICAgZm9udFNpemU6IDE2LFxyXG4gICAgICAgIHg6IGNvbmZpZy50aWxlU2l6ZSAqIDAuNyxcclxuICAgICAgICB5OiBjb25maWcudGlsZVNpemUgKiAwLjcgKyBjb25maWcudGlsZVNpemUsXHJcbiAgICAgICAgYW5jaG9yWTogMC42XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBzdGFydEdhbWVCdXR0b24gPSBuZXcgU3RhcnQoe1xyXG4gICAgICAgIHdpZHRoOiBjb25maWcudGlsZVNpemUgKiBjb25maWcud2lkdGgsXHJcbiAgICAgICAgaGVpZ2h0OiBjb25maWcudGlsZVNpemUgKiAwLjcgKyBjb25maWcudGlsZVNpemUgKiAoY29uZmlnLmhlaWdodCArIDIpLFxyXG4gICAgICAgIHRleHQ6ICfQndCQ0KfQkNCi0Kwg0JjQk9Cg0KMnLFxyXG4gICAgICAgIGZvbnRTaXplOiAyNCxcclxuICAgICAgICB4OiBjb25maWcudGlsZVNpemUgKiAwLjcsXHJcbiAgICAgICAgeTogY29uZmlnLnRpbGVTaXplICogMC43LFxyXG4gICAgICAgIGFuY2hvclk6IDAuNVxyXG4gICAgfSk7XHJcblxyXG4gICAgbWVkaWF0b3IucmVnaXN0ZXIocGF1c2VCdXR0b24sICdwYXVzZUJ1dHRvbicpO1xyXG4gICAgbWVkaWF0b3IucmVnaXN0ZXIoY29udGludWVHYW1lQnV0dG9uLCAnY29udGludWVHYW1lQnV0dG9uJyk7XHJcbiAgICBtZWRpYXRvci5yZWdpc3RlcihzdGFydEdhbWVCdXR0b24sICdzdGFydEdhbWVCdXR0b24nKTtcclxuXHJcblxyXG4gICAgY29uc3Qgc3RhcnRHYW1lQnV0dG9uQ29udGFpbmVyID0gc3RhcnRHYW1lQnV0dG9uLnNldCgpO1xyXG4gICAgY29uc3QgcGF1c2VCdXR0b25Db250YWluZXIgPSBwYXVzZUJ1dHRvbi5zZXQocGF1c2VNZW51Q29udGFpbmVyKTtcclxuICAgIGNvbnN0IGNvbnRpbnVlQnV0dG9uQ29udGFpbmVyID0gY29udGludWVHYW1lQnV0dG9uLnNldChwYXVzZU1lbnVDb250YWluZXIpO1xyXG4gICAgY29uc3QgZXhpdFRvTWVudUJ1dHRvbkNvbnRhaW5lciA9IGV4aXRUb01lbnVCdXR0b24uc2V0KHBhdXNlTWVudUNvbnRhaW5lciwgc3RhcnRHYW1lQnV0dG9uQ29udGFpbmVyKTtcclxuXHJcbiAgICBwYXVzZU1lbnVDb250YWluZXIudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgc3RhcnRHYW1lQnV0dG9uQ29udGFpbmVyLnZpc2libGUgPSBmYWxzZTtcclxuXHJcbiAgICBwYXVzZU1lbnVDb250YWluZXIuYWRkQ2hpbGQoY29udGludWVCdXR0b25Db250YWluZXIsIGV4aXRUb01lbnVCdXR0b25Db250YWluZXIpO1xyXG4gICAgbWVudUNvbnRhaW5lci5hZGRDaGlsZChwYXVzZU1lbnVDb250YWluZXIsIHBhdXNlQnV0dG9uQ29udGFpbmVyLCBzdGFydEdhbWVCdXR0b25Db250YWluZXIpO1xyXG5cclxuICAgIHJldHVybiBtZW51Q29udGFpbmVyO1xyXG59O1xyXG5cclxuZXhwb3J0IHtjcmVhdGVNZW51fTtcclxuIiwiaW1wb3J0IHtBcHBsaWNhdGlvbiwgTG9hZGVyUmVzb3VyY2UsIENvbnRhaW5lcn0gZnJvbSAncGl4aS5qcydcclxuaW1wb3J0IHtDb25maWdUeXBlfSBmcm9tIFwiLi4vdHlwaW5nL3R5cGVzXCI7XHJcbmltcG9ydCB7Y3JlYXRlSGVhZGVyfSBmcm9tIFwiLi9oZWFkZXIvaGVhZGVyXCI7XHJcbmltcG9ydCB7Y3JlYXRlTWVudX0gZnJvbSBcIi4vbWVudS9tZW51XCI7XHJcbmltcG9ydCB7Y3JlYXRlQm9keX0gZnJvbSBcIi4vbWFpbi9tYWluXCI7XHJcblxyXG5jb25zdCBjb25maWc6IENvbmZpZ1R5cGUgPSB7XHJcbiAgICB0aWxlU2l6ZTogNDAsXHJcbiAgICB3aWR0aDogOSxcclxuICAgIGhlaWdodDogOSxcclxuICAgIG1pbmVRdWFudGl0eTogMTBcclxufTtcclxuXHJcbmNvbnN0IGNlbnRlckNvbnRhaW5lciA9IChhcHA6IEFwcGxpY2F0aW9uLCBjb250YWluZXI6IENvbnRhaW5lcik6IHZvaWQgPT4ge1xyXG4gICAgY29udGFpbmVyLnBvc2l0aW9uLnggPSBhcHAudmlldy53aWR0aCAvIDI7XHJcbiAgICBjb250YWluZXIucG9zaXRpb24ueSA9IGFwcC52aWV3LmhlaWdodCAvIDI7XHJcblxyXG4gICAgY29udGFpbmVyLnBpdm90LnggPSBjb250YWluZXIud2lkdGggLyAyO1xyXG4gICAgY29udGFpbmVyLnBpdm90LnkgPSBjb250YWluZXIuaGVpZ2h0IC8gMjtcclxufTtcclxuXHJcbmNvbnN0IGNyZWF0ZVNjZW5lID0gKGFwcDogQXBwbGljYXRpb24sIHJlc291cmNlczogUGFydGlhbDxSZWNvcmQ8c3RyaW5nLCBMb2FkZXJSZXNvdXJjZT4+KTogdm9pZCA9PiB7XHJcbiAgICBjb25zdCBtYWluQ29udGFpbmVyID0gbmV3IENvbnRhaW5lcigpO1xyXG5cclxuICAgIGNvbnN0IHtoZWFkZXJDb250YWluZXIsIHRpbWVyfSA9IGNyZWF0ZUhlYWRlcihjb25maWcsIHJlc291cmNlcyk7IC8vINCh0L7Qt9C00LDRkdC8INGI0LDQv9C60YMgKDIg0YHRh9GR0YLRh9C40LrQsCDQuCDQutC90L7Qv9C60YMpXHJcbiAgICBjb25zdCBtZW51Q29udGFpbmVyID0gY3JlYXRlTWVudShjb25maWcpOyAvLyDQodC+0LfQtNCw0ZHQvCDQuNC90YLQtdGA0YTQtdC50YEg0LzQtdC90Y5cclxuICAgIGNvbnN0IGJvZHlDb250YWluZXIgPSBjcmVhdGVCb2R5KGNvbmZpZywgcmVzb3VyY2VzKTsgLy8g0KHQvtC30LTQsNGR0Lwg0LjQs9GA0L7QstC+0LUg0L/QvtC70LVcclxuXHJcbiAgICBtYWluQ29udGFpbmVyLmFkZENoaWxkKGJvZHlDb250YWluZXIsIGhlYWRlckNvbnRhaW5lciwgbWVudUNvbnRhaW5lcik7XHJcblxyXG4gICAgYXBwLnN0YWdlLmFkZENoaWxkKG1haW5Db250YWluZXIpO1xyXG4gICAgYXBwLnRpY2tlci5hZGQoKCkgPT4gdGltZXIudXBkYXRlKCkpOyAvLyDQntCx0L3QvtCy0LvRj9C10Lwg0LfQvdCw0YfQtdC90LjQtSDRgtCw0LnQvNC10YDQsFxyXG5cclxuICAgIC8vINGG0LXQvdGC0YDQuNGA0YPQtdC8INC60L7QvdGC0LXQudC90LXRgCDQv9GA0Lgg0YHQvtC30LTQsNC90LjQuCDQuCDQutCw0LbQtNC+0Lwg0YDQtdGB0LDQudC30LUg0Y3QutGA0LDQvdCwXHJcblxyXG4gICAgY2VudGVyQ29udGFpbmVyKGFwcCwgbWFpbkNvbnRhaW5lcik7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4gY2VudGVyQ29udGFpbmVyKGFwcCwgbWFpbkNvbnRhaW5lcikpXHJcbn07XHJcblxyXG5leHBvcnQge2NyZWF0ZVNjZW5lfTtcclxuIiwiaW1wb3J0IHtBcHBsaWNhdGlvbn0gZnJvbSAncGl4aS5qcydcclxuaW1wb3J0IHtjcmVhdGVTY2VuZX0gZnJvbSBcIi4vVUkvc2NlbmVcIjtcclxuXHJcbmNvbnN0IGNyZWF0ZUFwcCA9ICgpOiB2b2lkID0+IHtcclxuICAgIC8vINC40L3QuNGG0LjQsNC70LjQt9C40YDRg9C10Lwg0L/RgNC40LvQvtC20LXQvdC40LVcclxuICAgIGNvbnN0IGFwcCA9IG5ldyBBcHBsaWNhdGlvbih7XHJcbiAgICAgICAgd2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoLFxyXG4gICAgICAgIGhlaWdodDogd2luZG93LmlubmVySGVpZ2h0LFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogMHgxMDk5YmIsXHJcbiAgICAgICAgcmVzb2x1dGlvbjogMSxcclxuICAgICAgICByZXNpemVUbzogd2luZG93XHJcbiAgICB9KTtcclxuXHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZChhcHAudmlldyk7XHJcblxyXG4gICAgYXBwLnN0YWdlLmludGVyYWN0aXZlID0gdHJ1ZTtcclxuXHJcbiAgICBhcHAubG9hZGVyXHJcbiAgICAgICAgLmFkZCgndGltZVNoZWV0JywgJ2Fzc2V0cy90aW1lLmpzb24nKVxyXG4gICAgICAgIC5hZGQoJ3RpbGVzU2hlZXQnLCAnYXNzZXRzL3RpbGVzLmpzb24nKVxyXG4gICAgICAgIC5hZGQoJ3NtaWxlU2hlZXQnLCAnYXNzZXRzL3NtaWxlLmpzb24nKVxyXG4gICAgICAgIC5hZGQoJ3dhbGxzU2hlZXQnLCAnYXNzZXRzL3dhbGxzLmpzb24nKVxyXG4gICAgICAgIC5sb2FkKCh7cmVzb3VyY2VzfSk6IHZvaWQgPT4gY3JlYXRlU2NlbmUoYXBwLCByZXNvdXJjZXMpKTtcclxuXHJcbiAgICBhcHAuc3RhcnQoKTtcclxufTtcclxuXHJcbmNyZWF0ZUFwcCgpO1xyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY29udGV4dG1lbnUnLCBlID0+IGUucHJldmVudERlZmF1bHQoKSk7XHJcblxyXG4iLCJpbXBvcnQge0lNZWRpYXRvciwgSVN1YnNjcmliZXJ9IGZyb20gXCIuLi90eXBpbmcvaW50ZXJmYWNlc1wiO1xyXG5pbXBvcnQge0FjdGlvbkRhdGF9IGZyb20gXCIuLi90eXBpbmcvdHlwZXNcIjtcclxuXHJcbmNsYXNzIE1lZGlhdG9yIGltcGxlbWVudHMgSU1lZGlhdG9yIHtcclxuICAgIHN1YnNjcmliZXJzOiBvYmplY3Q7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5zdWJzY3JpYmVycyA9IHt9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vINCg0LXQs9C40YHRgtGA0LjRgNGD0LXQvCDQuNC90YHRgtCw0L3RgSDQutC70LDRgdGB0LAsINGH0YLQvtCx0Ysg0YEg0L3QuNC8INC80L7QttC90L4g0LHRi9C70L4g0YHQstGP0LfQsNGC0YzRgdGPXHJcbiAgICByZWdpc3RlcihzdWJzY3JpYmVyOiBJU3Vic2NyaWJlciwgbmFtZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zdWJzY3JpYmVyc1tuYW1lXSA9IHN1YnNjcmliZXI7XHJcblxyXG4gICAgICAgIHN1YnNjcmliZXIuc2V0TWVkaWF0b3IodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g0JLRi9C30YvQstCw0LXQvCDQt9Cw0LTQsNC90L3Ri9C5INC80LXRgtC+0LQg0YMg0LLRi9C30YvQstCw0LXQvNC+0LPQviDQuNC90YHRgtCw0L3RgdCwXHJcbiAgICBub3RpZnkoe2FjdGlvbiwgdG8sIHZhbHVlfTogQWN0aW9uRGF0YSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc3Vic2NyaWJlcnNbdG9dLmRpc3BhdGNoKGFjdGlvbiwgdmFsdWUpXHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IG1lZGlhdG9yID0gbmV3IE1lZGlhdG9yKCk7XHJcblxyXG5leHBvcnQge21lZGlhdG9yfTtcclxuIiwiaW1wb3J0IHtJTWVkaWF0b3IsIElTdWJzY3JpYmVyfSBmcm9tIFwiLi4vdHlwaW5nL2ludGVyZmFjZXNcIjtcclxuaW1wb3J0IHtBY3Rpb25EYXRhfSBmcm9tIFwiLi4vdHlwaW5nL3R5cGVzXCI7XHJcblxyXG5jbGFzcyBTdWJzY3JpYmVyIGltcGxlbWVudHMgSVN1YnNjcmliZXIge1xyXG4gICAgbWVkaWF0b3I6IElNZWRpYXRvciB8IG51bGw7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5tZWRpYXRvciA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgZGlzcGF0Y2goYWN0aW9uOiBzdHJpbmcsIHZhbHVlPzogYW55KTogdm9pZCB7XHJcbiAgICAgICAgdGhpc1thY3Rpb25dKHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBzZW5kQWN0aW9uKGRhdGE6IEFjdGlvbkRhdGEpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm1lZGlhdG9yLm5vdGlmeShkYXRhKVxyXG4gICAgfVxyXG5cclxuICAgIHNldE1lZGlhdG9yKG1lZGlhdG9yOiBJTWVkaWF0b3IpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm1lZGlhdG9yID0gbWVkaWF0b3I7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7U3Vic2NyaWJlcn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=