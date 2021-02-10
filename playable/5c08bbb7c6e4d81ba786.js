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
/******/ 	deferredModules.push(["./Main.ts","vendors~main"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./AtlasesMap.ts":
/*!***********************!*\
  !*** ./AtlasesMap.ts ***!
  \***********************/
/*! exports provided: Atlas */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Atlas", function() { return Atlas; });
/* eslint-disable comma-dangle */
const Atlas = {
    "appeal_popup": "sources/appeal_popup",
    "Austin": "sources/Austin",
    "bg": "sources/bg",
    "blue_stair": "sources/blue_stair",
    "book_stand": "sources/book_stand",
    "button_continue": "sources/button_continue",
    "button_ok": "sources/button_ok",
    "carpet_blue": "sources/carpet_blue",
    "carpet_green": "sources/carpet_green",
    "carpet_orange": "sources/carpet_orange",
    "circle": "sources/circle",
    "circle_selected": "sources/circle_selected",
    "globe": "sources/globe",
    "green_stair": "sources/green_stair",
    "icon_hammer": "sources/icon_hammer",
    "logo": "sources/logo",
    "old_stair": "sources/old_stair",
    "orange_stair": "sources/orange_stair",
    "plant_1": "sources/plant_1",
    "plant_2": "sources/plant_2",
    "sofa": "sources/sofa",
    "table": "sources/table"
};


/***/ }),

/***/ "./Main.ts":
/*!*****************!*\
  !*** ./Main.ts ***!
  \*****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/App */ "./core/App.ts");
/* harmony import */ var _scene_Scene__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scene/Scene */ "./scene/Scene.ts");
/* harmony import */ var _core_Assets__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/Assets */ "./core/Assets.ts");



class Main {
    constructor() {
        this._realWidth = 1390;
        this._realHeight = 640;
        this._app = new _core_App__WEBPACK_IMPORTED_MODULE_0__["App"]({
            width: this._realWidth,
            height: this._realHeight,
            resolution: window.devicePixelRatio,
        });
        this.refreshSize();
        this.init();
        window.addEventListener("resize", this.refreshSize.bind(this));
    }
    async init() {
        await _core_Assets__WEBPACK_IMPORTED_MODULE_2__["default"].loadResources();
        this._scene = new _scene_Scene__WEBPACK_IMPORTED_MODULE_1__["Scene"]();
        this._app.stage.addChild(this._scene);
    }
    refreshSize() {
        const vpw = window.innerWidth;
        const vph = window.innerHeight;
        let nvw;
        let nvh;
        if (vph / vpw < this._realHeight / this._realWidth) {
            nvh = vph;
            nvw = (nvh * this._realWidth) / this._realHeight;
        }
        else {
            nvw = vpw;
            nvh = (nvw * this._realHeight) / this._realWidth;
        }
        _core_App__WEBPACK_IMPORTED_MODULE_0__["App"].renderer.view.style.width = `${nvw}px`;
        _core_App__WEBPACK_IMPORTED_MODULE_0__["App"].renderer.view.style.height = `${nvh}px`;
        _core_App__WEBPACK_IMPORTED_MODULE_0__["App"].renderer.resize(nvw, nvh);
        this._app.stage.scale.set(nvw / this._realWidth, nvh / this._realHeight);
    }
}
new Main();


/***/ }),

/***/ "./core/App.ts":
/*!*********************!*\
  !*** ./core/App.ts ***!
  \*********************/
/*! exports provided: App */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "App", function() { return App; });
/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pixi.js */ "../node_modules/pixi.js/lib/pixi.es.js");

class App extends pixi_js__WEBPACK_IMPORTED_MODULE_0__["Application"] {
    constructor(options) {
        super(options);
        document.addEventListener("contextmenu", e => e.preventDefault());
        document.body.append(this.view);
        this.stage.interactive = true;
        App._renderer = this.renderer;
        this.start();
    }
    static get renderer() {
        return this._renderer;
    }
}


/***/ }),

/***/ "./core/Assets.ts":
/*!************************!*\
  !*** ./core/Assets.ts ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pixi.js */ "../node_modules/pixi.js/lib/pixi.es.js");

class Assets {
    constructor() {
        this._atlasName = "textures";
    }
    sprite(id) {
        return new pixi_js__WEBPACK_IMPORTED_MODULE_0__["Sprite"](this._textures[id]);
    }
    loadResources() {
        const loader = this.loader;
        const path = `assets/${this._atlasName}.json`;
        loader.add(this._atlasName, path, () => this.onAtlasLoaded(loader));
        return new Promise((resolve) => loader.load(resolve));
    }
    get loader() {
        const loader = new pixi_js__WEBPACK_IMPORTED_MODULE_0__["Loader"]();
        loader.defaultQueryString = `v=${Math.random()}`;
        return loader;
    }
    onAtlasLoaded(loader) {
        this._textures = Object.assign(Object.assign({}, this._textures), loader.resources[this._atlasName].textures);
    }
}
/* harmony default export */ __webpack_exports__["default"] = (new Assets());


/***/ }),

/***/ "./menu/Menu.ts":
/*!**********************!*\
  !*** ./menu/Menu.ts ***!
  \**********************/
/*! exports provided: Menu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Menu", function() { return Menu; });
/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pixi.js */ "../node_modules/pixi.js/lib/pixi.es.js");
/* harmony import */ var _core_Assets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/Assets */ "./core/Assets.ts");
/* harmony import */ var _AtlasesMap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../AtlasesMap */ "./AtlasesMap.ts");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap */ "../node_modules/gsap/index.js");
/* harmony import */ var _buttons_BlueCarpet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./buttons/BlueCarpet */ "./menu/buttons/BlueCarpet.ts");
/* harmony import */ var _buttons_OrangeCarpet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./buttons/OrangeCarpet */ "./menu/buttons/OrangeCarpet.ts");
/* harmony import */ var _buttons_GreenCarpet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./buttons/GreenCarpet */ "./menu/buttons/GreenCarpet.ts");
/* harmony import */ var _scene_StairsContainer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../scene/StairsContainer */ "./scene/StairsContainer.ts");








class Menu extends pixi_js__WEBPACK_IMPORTED_MODULE_0__["Container"] {
    constructor() {
        super();
        this.ACCEPT_STAIR = "accept_stair";
        this.CHANGE_STAIR = "change_stair";
        this._buttons = new Map();
        this._blueCarpet = new _buttons_BlueCarpet__WEBPACK_IMPORTED_MODULE_4__["BlueCarpet"]();
        this._buttons.set(_scene_StairsContainer__WEBPACK_IMPORTED_MODULE_7__["Stairs"].BLUE, this._blueCarpet);
        this.addChild(this._blueCarpet);
        this._orangeCarpet = new _buttons_OrangeCarpet__WEBPACK_IMPORTED_MODULE_5__["OrangeCarpet"]();
        this._orangeCarpet.x = this._blueCarpet.width;
        this._buttons.set(_scene_StairsContainer__WEBPACK_IMPORTED_MODULE_7__["Stairs"].ORANGE, this._orangeCarpet);
        this.addChild(this._orangeCarpet);
        this._greenCarpet = new _buttons_GreenCarpet__WEBPACK_IMPORTED_MODULE_6__["GreenCarpet"]();
        this._greenCarpet.x = this._orangeCarpet.x + this._orangeCarpet.width;
        this._buttons.set(_scene_StairsContainer__WEBPACK_IMPORTED_MODULE_7__["Stairs"].GREEN, this._greenCarpet);
        this.addChild(this._greenCarpet);
        this.createAcceptButton();
        for (const [key, button] of this._buttons) {
            button.y = -button.height;
            button.alpha = 0;
            button.on("pointerdown", () => this.changeActiveButton(key), this);
        }
    }
    createAcceptButton() {
        this._acceptButton = _core_Assets__WEBPACK_IMPORTED_MODULE_1__["default"].sprite(_AtlasesMap__WEBPACK_IMPORTED_MODULE_2__["Atlas"].button_ok);
        this._acceptButton.anchor.x = 0.5;
        this._acceptButton.interactive = true;
        this._acceptButton.buttonMode = true;
        this._acceptButton.visible = false;
        this.addChild(this._acceptButton);
        this._acceptButton.on("pointerdown", () => this.emit(this.ACCEPT_STAIR), this);
    }
    changeActiveButton(key) {
        const button = this._buttons.get(key);
        if (!button.select) {
            [...this._buttons].forEach(button => button[1].select = false);
            button.select = true;
            /** меняем лестницу */
            this.emit(this.CHANGE_STAIR, key);
            const x = Math.floor(button.x + button.width * 0.5);
            if (!this._acceptButton.visible) {
                this._acceptButton.visible = true;
                this._acceptButton.position.set(x, button.height - 30);
            }
            else {
                gsap__WEBPACK_IMPORTED_MODULE_3__["default"].killTweensOf(this._acceptButton);
                gsap__WEBPACK_IMPORTED_MODULE_3__["default"].to(this._acceptButton, 0.2, { x, ease: gsap__WEBPACK_IMPORTED_MODULE_3__["Sine"].easeOut });
            }
        }
    }
    showButtons() {
        const buttons = [...this._buttons].map(button => button[1]);
        gsap__WEBPACK_IMPORTED_MODULE_3__["default"].to(buttons, 0.3, { y: 0, alpha: 1, stagger: 0.1 });
    }
}


/***/ }),

/***/ "./menu/MenuButton.ts":
/*!****************************!*\
  !*** ./menu/MenuButton.ts ***!
  \****************************/
/*! exports provided: MenuButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuButton", function() { return MenuButton; });
/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pixi.js */ "../node_modules/pixi.js/lib/pixi.es.js");
/* harmony import */ var _core_Assets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/Assets */ "./core/Assets.ts");
/* harmony import */ var _AtlasesMap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../AtlasesMap */ "./AtlasesMap.ts");



class MenuButton extends pixi_js__WEBPACK_IMPORTED_MODULE_0__["Container"] {
    constructor(iconPath) {
        super();
        this._isActive = false;
        this.interactive = true;
        this.buttonMode = true;
        this._bg = _core_Assets__WEBPACK_IMPORTED_MODULE_1__["default"].sprite(_AtlasesMap__WEBPACK_IMPORTED_MODULE_2__["Atlas"].circle);
        this.addChild(this._bg);
        /** Иконка имеет прозрачные пиксели, поэтому чтобы она не растягивала кнупку - отсекаю маской */
        const bgMask = _core_Assets__WEBPACK_IMPORTED_MODULE_1__["default"].sprite(_AtlasesMap__WEBPACK_IMPORTED_MODULE_2__["Atlas"].circle);
        this.addChild(bgMask);
        this._selectedBg = _core_Assets__WEBPACK_IMPORTED_MODULE_1__["default"].sprite(_AtlasesMap__WEBPACK_IMPORTED_MODULE_2__["Atlas"].circle_selected);
        this._selectedBg.anchor.set(0.5);
        this._selectedBg.position.set(Math.floor(this.width * 0.5), Math.floor(this.width * 0.5) - 4);
        this._selectedBg.visible = false;
        this.addChild(this._selectedBg);
        this._icon = _core_Assets__WEBPACK_IMPORTED_MODULE_1__["default"].sprite(iconPath);
        this._icon.anchor.set(0, 1);
        this._icon.mask = bgMask;
        this.addChild(this._icon);
    }
    set select(selected) {
        this._selectedBg.visible = selected;
        this._isActive = selected;
    }
    get select() {
        return this._isActive;
    }
}


/***/ }),

/***/ "./menu/buttons/BlueCarpet.ts":
/*!************************************!*\
  !*** ./menu/buttons/BlueCarpet.ts ***!
  \************************************/
/*! exports provided: BlueCarpet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlueCarpet", function() { return BlueCarpet; });
/* harmony import */ var _MenuButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../MenuButton */ "./menu/MenuButton.ts");
/* harmony import */ var _AtlasesMap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../AtlasesMap */ "./AtlasesMap.ts");


class BlueCarpet extends _MenuButton__WEBPACK_IMPORTED_MODULE_0__["MenuButton"] {
    constructor() {
        super(_AtlasesMap__WEBPACK_IMPORTED_MODULE_1__["Atlas"].carpet_blue);
        this._icon.position.set(28, Math.floor(this._bg.height - 30));
    }
}


/***/ }),

/***/ "./menu/buttons/GreenCarpet.ts":
/*!*************************************!*\
  !*** ./menu/buttons/GreenCarpet.ts ***!
  \*************************************/
/*! exports provided: GreenCarpet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GreenCarpet", function() { return GreenCarpet; });
/* harmony import */ var _MenuButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../MenuButton */ "./menu/MenuButton.ts");
/* harmony import */ var _AtlasesMap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../AtlasesMap */ "./AtlasesMap.ts");


class GreenCarpet extends _MenuButton__WEBPACK_IMPORTED_MODULE_0__["MenuButton"] {
    constructor() {
        super(_AtlasesMap__WEBPACK_IMPORTED_MODULE_1__["Atlas"].carpet_green);
        this._icon.position.set(28, Math.floor(this._bg.height - 30));
    }
}


/***/ }),

/***/ "./menu/buttons/OrangeCarpet.ts":
/*!**************************************!*\
  !*** ./menu/buttons/OrangeCarpet.ts ***!
  \**************************************/
/*! exports provided: OrangeCarpet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrangeCarpet", function() { return OrangeCarpet; });
/* harmony import */ var _MenuButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../MenuButton */ "./menu/MenuButton.ts");
/* harmony import */ var _AtlasesMap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../AtlasesMap */ "./AtlasesMap.ts");


class OrangeCarpet extends _MenuButton__WEBPACK_IMPORTED_MODULE_0__["MenuButton"] {
    constructor() {
        super(_AtlasesMap__WEBPACK_IMPORTED_MODULE_1__["Atlas"].carpet_orange);
        this._icon.position.set(32, Math.floor(this._bg.height - 34));
    }
}


/***/ }),

/***/ "./scene/Scene.ts":
/*!************************!*\
  !*** ./scene/Scene.ts ***!
  \************************/
/*! exports provided: Scene */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Scene", function() { return Scene; });
/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pixi.js */ "../node_modules/pixi.js/lib/pixi.es.js");
/* harmony import */ var _AtlasesMap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../AtlasesMap */ "./AtlasesMap.ts");
/* harmony import */ var _core_Assets__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/Assets */ "./core/Assets.ts");
/* harmony import */ var _menu_Menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../menu/Menu */ "./menu/Menu.ts");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gsap */ "../node_modules/gsap/index.js");
/* harmony import */ var _StairsContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./StairsContainer */ "./scene/StairsContainer.ts");






class Scene extends pixi_js__WEBPACK_IMPORTED_MODULE_0__["Container"] {
    constructor() {
        super();
        const bg = _core_Assets__WEBPACK_IMPORTED_MODULE_2__["default"].sprite(_AtlasesMap__WEBPACK_IMPORTED_MODULE_1__["Atlas"].bg);
        this.addChild(bg);
        this.createDecor();
        const austin = _core_Assets__WEBPACK_IMPORTED_MODULE_2__["default"].sprite(_AtlasesMap__WEBPACK_IMPORTED_MODULE_1__["Atlas"].Austin);
        austin.position.set(696, 113);
        this.addChild(austin);
        this.createHammer();
        this.createMenu();
        this.createPopup();
        const logo = _core_Assets__WEBPACK_IMPORTED_MODULE_2__["default"].sprite(_AtlasesMap__WEBPACK_IMPORTED_MODULE_1__["Atlas"].logo);
        logo.position.set(32, 5);
        this.addChild(logo);
        this.createButtonContinue();
    }
    /** Создание и анимация молоточка */
    createHammer() {
        const hammer = _core_Assets__WEBPACK_IMPORTED_MODULE_2__["default"].sprite(_AtlasesMap__WEBPACK_IMPORTED_MODULE_1__["Atlas"].icon_hammer);
        hammer.position.set(1087, 258);
        hammer.interactive = true;
        hammer.buttonMode = true;
        hammer.alpha = 0;
        hammer.visible = false;
        hammer.on("pointerdown", () => {
            var _a;
            (_a = this._hammerTimeline) === null || _a === void 0 ? void 0 : _a.kill();
            this._hammerTimeline = new gsap__WEBPACK_IMPORTED_MODULE_4__["TimelineMax"]();
            this._menu.showButtons();
            this._hammerTimeline.to(hammer, 0.3, { alpha: 0 }, 0);
            this._hammerTimeline.set(hammer, { visible: false }, 0.3);
        }, this);
        this.addChild(hammer);
        this._hammerTimeline = new gsap__WEBPACK_IMPORTED_MODULE_4__["TimelineMax"]();
        this._hammerTimeline.delay(1.5);
        this._hammerTimeline.set(hammer, { visible: true });
        this._hammerTimeline.to(hammer, 0.4, { alpha: 1 });
    }
    /** Затемнение + всплыющее окно */
    createPopup() {
        this._blackLayer = new pixi_js__WEBPACK_IMPORTED_MODULE_0__["Graphics"]();
        this._blackLayer.beginFill(0x000, 0.55);
        this._blackLayer.drawRect(0, 0, this.width, this.height);
        this._blackLayer.endFill();
        this._blackLayer.alpha = 0;
        this.addChild(this._blackLayer);
        this._appealPopup = _core_Assets__WEBPACK_IMPORTED_MODULE_2__["default"].sprite(_AtlasesMap__WEBPACK_IMPORTED_MODULE_1__["Atlas"].appeal_popup);
        this._appealPopup.anchor.set(0.5);
        this._appealPopup.position.set(Math.floor(this.width * 0.5), 255);
        this._appealPopup.alpha = 0;
        this._appealPopup.scale.set(0);
        this.addChild(this._appealPopup);
    }
    /** Показывает финальное окно */
    showAppealPopup() {
        this._popupTimeline = new gsap__WEBPACK_IMPORTED_MODULE_4__["TimelineMax"]()
            .call(() => this._stairContainer.lowerStair(0.25), [], 0)
            .to(this._menu, 0.25, { y: -this._menu.height }, 0)
            .to(this._blackLayer, 0.4, { alpha: 1 }, 0.25)
            .to(this._appealPopup.scale, 0.4, { x: 1, y: 1 }, 0.55)
            .to(this._appealPopup, 0.4, { alpha: 1 }, 0.55);
    }
    createMenu() {
        this._menu = new _menu_Menu__WEBPACK_IMPORTED_MODULE_3__["Menu"]();
        this._menu.position.set(850, 10);
        this._menu.on(this._menu.ACCEPT_STAIR, this.showAppealPopup, this);
        this._menu.on(this._menu.CHANGE_STAIR, this._stairContainer.changeStair.bind(this._stairContainer), this);
        this.addChild(this._menu);
    }
    createButtonContinue() {
        const buttonContinue = _core_Assets__WEBPACK_IMPORTED_MODULE_2__["default"].sprite(_AtlasesMap__WEBPACK_IMPORTED_MODULE_1__["Atlas"].button_continue);
        buttonContinue.anchor.set(0.5);
        buttonContinue.position.set(Math.floor(this.width * 0.5), 560);
        buttonContinue.interactive = true;
        buttonContinue.buttonMode = true;
        buttonContinue.on("pointerdown", () => alert("click"), this);
        this.addChild(buttonContinue);
        this._buttonContinueTimeline = new gsap__WEBPACK_IMPORTED_MODULE_4__["TimelineMax"]({
            repeat: -1, onUpdate: () => {
                const time = this._buttonContinueTimeline.totalTime();
                const speed = 3;
                buttonContinue.rotation = Math.sin(time * speed) * 0.03;
            },
        });
        this._buttonContinueTimeline
            .to(buttonContinue.scale, 0.5, { x: 1.15, y: 1.15, ease: gsap__WEBPACK_IMPORTED_MODULE_4__["Sine"].easeIn })
            .to(buttonContinue.scale, 0.5, { x: 1, y: 1, ease: gsap__WEBPACK_IMPORTED_MODULE_4__["Sine"].easeOut });
    }
    createDecor() {
        const table = _core_Assets__WEBPACK_IMPORTED_MODULE_2__["default"].sprite(_AtlasesMap__WEBPACK_IMPORTED_MODULE_1__["Atlas"].table);
        table.position.set(200, 198);
        this.addChild(table);
        const sofa = _core_Assets__WEBPACK_IMPORTED_MODULE_2__["default"].sprite(_AtlasesMap__WEBPACK_IMPORTED_MODULE_1__["Atlas"].sofa);
        sofa.position.set(127, 324);
        this.addChild(sofa);
        const bookStand = _core_Assets__WEBPACK_IMPORTED_MODULE_2__["default"].sprite(_AtlasesMap__WEBPACK_IMPORTED_MODULE_1__["Atlas"].book_stand);
        bookStand.position.set(834, -25);
        this.addChild(bookStand);
        const globe = _core_Assets__WEBPACK_IMPORTED_MODULE_2__["default"].sprite(_AtlasesMap__WEBPACK_IMPORTED_MODULE_1__["Atlas"].globe);
        globe.position.set(87, 109);
        this.addChild(globe);
        const plant1 = _core_Assets__WEBPACK_IMPORTED_MODULE_2__["default"].sprite(_AtlasesMap__WEBPACK_IMPORTED_MODULE_1__["Atlas"].plant_2);
        plant1.position.set(1135, 164);
        this.addChild(plant1);
        const plant2 = _core_Assets__WEBPACK_IMPORTED_MODULE_2__["default"].sprite(_AtlasesMap__WEBPACK_IMPORTED_MODULE_1__["Atlas"].plant_2);
        plant2.position.set(456, -40);
        this.addChild(plant2);
        this._stairContainer = new _StairsContainer__WEBPACK_IMPORTED_MODULE_5__["StairsContainer"]();
        this.addChild(this._stairContainer);
        this._stairContainer.x = this.width - this._stairContainer.width;
        const plant3 = _core_Assets__WEBPACK_IMPORTED_MODULE_2__["default"].sprite(_AtlasesMap__WEBPACK_IMPORTED_MODULE_1__["Atlas"].plant_1);
        plant3.position.set(1122, 438);
        this.addChild(plant3);
    }
    destroy(options) {
        var _a, _b, _c;
        (_a = this._popupTimeline) === null || _a === void 0 ? void 0 : _a.kill();
        (_b = this._buttonContinueTimeline) === null || _b === void 0 ? void 0 : _b.kill();
        (_c = this._hammerTimeline) === null || _c === void 0 ? void 0 : _c.kill();
        super.destroy(options);
    }
}


/***/ }),

/***/ "./scene/StairsContainer.ts":
/*!**********************************!*\
  !*** ./scene/StairsContainer.ts ***!
  \**********************************/
/*! exports provided: Stairs, StairsContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Stairs", function() { return Stairs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StairsContainer", function() { return StairsContainer; });
/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pixi.js */ "../node_modules/pixi.js/lib/pixi.es.js");
/* harmony import */ var _core_Assets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/Assets */ "./core/Assets.ts");
/* harmony import */ var _AtlasesMap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../AtlasesMap */ "./AtlasesMap.ts");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap */ "../node_modules/gsap/index.js");




var Stairs;
(function (Stairs) {
    Stairs[Stairs["BLUE"] = 0] = "BLUE";
    Stairs[Stairs["ORANGE"] = 1] = "ORANGE";
    Stairs[Stairs["GREEN"] = 2] = "GREEN";
    Stairs[Stairs["OLD"] = 3] = "OLD";
})(Stairs || (Stairs = {}));
class StairsContainer extends pixi_js__WEBPACK_IMPORTED_MODULE_0__["Container"] {
    constructor() {
        super();
        this._stairs = new Map();
        /** активная лестница */
        this._activeStair = Stairs.OLD;
        this._y = 0;
        const oldStair = _core_Assets__WEBPACK_IMPORTED_MODULE_1__["default"].sprite(_AtlasesMap__WEBPACK_IMPORTED_MODULE_2__["Atlas"].old_stair);
        oldStair.anchor.x = 1;
        oldStair.position.set(0, 125);
        this._stairs.set(Stairs.OLD, oldStair);
        this.addChild(oldStair);
        const blueStair = _core_Assets__WEBPACK_IMPORTED_MODULE_1__["default"].sprite(_AtlasesMap__WEBPACK_IMPORTED_MODULE_2__["Atlas"].blue_stair);
        blueStair.anchor.x = 1;
        blueStair.position.set(0, 18);
        blueStair.alpha = 0;
        this._stairs.set(Stairs.BLUE, blueStair);
        this.addChild(blueStair);
        const orangeStair = _core_Assets__WEBPACK_IMPORTED_MODULE_1__["default"].sprite(_AtlasesMap__WEBPACK_IMPORTED_MODULE_2__["Atlas"].orange_stair);
        orangeStair.anchor.x = 1;
        orangeStair.position.set(0, 28);
        orangeStair.alpha = 0;
        this._stairs.set(Stairs.ORANGE, orangeStair);
        this.addChild(orangeStair);
        const greenStair = _core_Assets__WEBPACK_IMPORTED_MODULE_1__["default"].sprite(_AtlasesMap__WEBPACK_IMPORTED_MODULE_2__["Atlas"].green_stair);
        greenStair.anchor.x = 1;
        greenStair.position.set(0, 25);
        greenStair.alpha = 0;
        this._stairs.set(Stairs.GREEN, greenStair);
        this.addChild(greenStair);
    }
    changeStair(key) {
        var _a;
        const currentStair = [...this._stairs].find(stair => stair[0] === this._activeStair)[1];
        const nextStair = this._stairs.get(key);
        const offsetY = 65;
        (_a = this._stairTimeline) === null || _a === void 0 ? void 0 : _a.kill();
        this._stairTimeline = new gsap__WEBPACK_IMPORTED_MODULE_3__["TimelineMax"]();
        this._stairTimeline.to(currentStair, 0.3, { alpha: 0 }, 0);
        this._stairTimeline.to(currentStair, 0.3, { y: currentStair.y - offsetY }, 0);
        this._stairTimeline.set(currentStair, { y: this._y }, 0.3);
        /** запоминаем реальную позицию лестницы */
        this._y = nextStair.y;
        this._stairTimeline.to(nextStair, 0.3, { alpha: 1 }, 0.3);
        this._stairTimeline.fromTo(nextStair, 0.3, { y: -offsetY }, { y: -15 }, 0.3);
        this._activeStair = key;
    }
    /** Опустить выбранную лестницу на исходную позицию */
    lowerStair(duration) {
        gsap__WEBPACK_IMPORTED_MODULE_3__["default"].to(this._stairs.get(this._activeStair), duration, { y: this._y });
    }
    destroy(options) {
        var _a;
        (_a = this._stairTimeline) === null || _a === void 0 ? void 0 : _a.kill();
        super.destroy(options);
    }
}


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vQXRsYXNlc01hcC50cyIsIndlYnBhY2s6Ly8vLi9NYWluLnRzIiwid2VicGFjazovLy8uL2NvcmUvQXBwLnRzIiwid2VicGFjazovLy8uL2NvcmUvQXNzZXRzLnRzIiwid2VicGFjazovLy8uL21lbnUvTWVudS50cyIsIndlYnBhY2s6Ly8vLi9tZW51L01lbnVCdXR0b24udHMiLCJ3ZWJwYWNrOi8vLy4vbWVudS9idXR0b25zL0JsdWVDYXJwZXQudHMiLCJ3ZWJwYWNrOi8vLy4vbWVudS9idXR0b25zL0dyZWVuQ2FycGV0LnRzIiwid2VicGFjazovLy8uL21lbnUvYnV0dG9ucy9PcmFuZ2VDYXJwZXQudHMiLCJ3ZWJwYWNrOi8vLy4vc2NlbmUvU2NlbmUudHMiLCJ3ZWJwYWNrOi8vLy4vc2NlbmUvU3RhaXJzQ29udGFpbmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLFFBQVEsb0JBQW9CO1FBQzVCO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsaUJBQWlCLDRCQUE0QjtRQUM3QztRQUNBO1FBQ0Esa0JBQWtCLDJCQUEyQjtRQUM3QztRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7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QUFDLEVBQUUsQ0FBQyxTQUFTLEVBQUUsR0FBRyxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQzFELElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBRTdFLElBQUksQ0FBQyxZQUFZLEdBQUcsR0FBRyxDQUFDO0lBQ3pCLENBQUM7SUFFRCxzREFBc0Q7SUFDL0MsVUFBVSxDQUFDLFFBQWdCO1FBQ2pDLDRDQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxRQUFRLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDeEUsQ0FBQztJQUVNLE9BQU8sQ0FBQyxPQUEwRTs7UUFDeEYsVUFBSSxDQUFDLGNBQWMsMENBQUUsSUFBSSxHQUFHO1FBQzVCLEtBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDeEIsQ0FBQztDQUNEIiwiZmlsZSI6IjVjMDhiYmI3YzZlNGQ4MWJhNzg2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcIm1haW5cIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbXCIuL01haW4udHNcIixcInZlbmRvcnN+bWFpblwiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIGNvbW1hLWRhbmdsZSAqL1xuZXhwb3J0IGNvbnN0IEF0bGFzID0ge1xuXHRcImFwcGVhbF9wb3B1cFwiOiBcInNvdXJjZXMvYXBwZWFsX3BvcHVwXCIsXG5cdFwiQXVzdGluXCI6IFwic291cmNlcy9BdXN0aW5cIixcblx0XCJiZ1wiOiBcInNvdXJjZXMvYmdcIixcblx0XCJibHVlX3N0YWlyXCI6IFwic291cmNlcy9ibHVlX3N0YWlyXCIsXG5cdFwiYm9va19zdGFuZFwiOiBcInNvdXJjZXMvYm9va19zdGFuZFwiLFxuXHRcImJ1dHRvbl9jb250aW51ZVwiOiBcInNvdXJjZXMvYnV0dG9uX2NvbnRpbnVlXCIsXG5cdFwiYnV0dG9uX29rXCI6IFwic291cmNlcy9idXR0b25fb2tcIixcblx0XCJjYXJwZXRfYmx1ZVwiOiBcInNvdXJjZXMvY2FycGV0X2JsdWVcIixcblx0XCJjYXJwZXRfZ3JlZW5cIjogXCJzb3VyY2VzL2NhcnBldF9ncmVlblwiLFxuXHRcImNhcnBldF9vcmFuZ2VcIjogXCJzb3VyY2VzL2NhcnBldF9vcmFuZ2VcIixcblx0XCJjaXJjbGVcIjogXCJzb3VyY2VzL2NpcmNsZVwiLFxuXHRcImNpcmNsZV9zZWxlY3RlZFwiOiBcInNvdXJjZXMvY2lyY2xlX3NlbGVjdGVkXCIsXG5cdFwiZ2xvYmVcIjogXCJzb3VyY2VzL2dsb2JlXCIsXG5cdFwiZ3JlZW5fc3RhaXJcIjogXCJzb3VyY2VzL2dyZWVuX3N0YWlyXCIsXG5cdFwiaWNvbl9oYW1tZXJcIjogXCJzb3VyY2VzL2ljb25faGFtbWVyXCIsXG5cdFwibG9nb1wiOiBcInNvdXJjZXMvbG9nb1wiLFxuXHRcIm9sZF9zdGFpclwiOiBcInNvdXJjZXMvb2xkX3N0YWlyXCIsXG5cdFwib3JhbmdlX3N0YWlyXCI6IFwic291cmNlcy9vcmFuZ2Vfc3RhaXJcIixcblx0XCJwbGFudF8xXCI6IFwic291cmNlcy9wbGFudF8xXCIsXG5cdFwicGxhbnRfMlwiOiBcInNvdXJjZXMvcGxhbnRfMlwiLFxuXHRcInNvZmFcIjogXCJzb3VyY2VzL3NvZmFcIixcblx0XCJ0YWJsZVwiOiBcInNvdXJjZXMvdGFibGVcIlxufSBhcyBjb25zdDtcbiIsImltcG9ydCB7IEFwcCB9IGZyb20gXCIuL2NvcmUvQXBwXCI7XG5pbXBvcnQgeyBTY2VuZSB9IGZyb20gXCIuL3NjZW5lL1NjZW5lXCI7XG5pbXBvcnQgQXNzZXRzIGZyb20gXCIuL2NvcmUvQXNzZXRzXCI7XG5cbmNsYXNzIE1haW4ge1xuXHRwcml2YXRlIHJlYWRvbmx5IF9yZWFsV2lkdGggPSAxMzkwO1xuXHRwcml2YXRlIHJlYWRvbmx5IF9yZWFsSGVpZ2h0ID0gNjQwO1xuXHRwcml2YXRlIHJlYWRvbmx5IF9hcHA6IEFwcDtcblx0cHJpdmF0ZSBfc2NlbmU6IFNjZW5lO1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHRoaXMuX2FwcCA9IG5ldyBBcHAoe1xuXHRcdFx0d2lkdGg6IHRoaXMuX3JlYWxXaWR0aCxcblx0XHRcdGhlaWdodDogdGhpcy5fcmVhbEhlaWdodCxcblx0XHRcdHJlc29sdXRpb246IHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvLFxuXHRcdH0pO1xuXG5cdFx0dGhpcy5yZWZyZXNoU2l6ZSgpO1xuXHRcdHRoaXMuaW5pdCgpO1xuXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgdGhpcy5yZWZyZXNoU2l6ZS5iaW5kKHRoaXMpKTtcblx0fVxuXG5cdHByaXZhdGUgYXN5bmMgaW5pdCgpIHtcblx0XHRhd2FpdCBBc3NldHMubG9hZFJlc291cmNlcygpO1xuXHRcdHRoaXMuX3NjZW5lID0gbmV3IFNjZW5lKCk7XG5cdFx0dGhpcy5fYXBwLnN0YWdlLmFkZENoaWxkKHRoaXMuX3NjZW5lKTtcblx0fVxuXG5cdHByaXZhdGUgcmVmcmVzaFNpemUoKTogdm9pZCB7XG5cdFx0Y29uc3QgdnB3ID0gd2luZG93LmlubmVyV2lkdGg7XG5cdFx0Y29uc3QgdnBoID0gd2luZG93LmlubmVySGVpZ2h0O1xuXHRcdGxldCBudnc7XG5cdFx0bGV0IG52aDtcblxuXHRcdGlmICh2cGggLyB2cHcgPCB0aGlzLl9yZWFsSGVpZ2h0IC8gdGhpcy5fcmVhbFdpZHRoKSB7XG5cdFx0XHRudmggPSB2cGg7XG5cdFx0XHRudncgPSAobnZoICogdGhpcy5fcmVhbFdpZHRoKSAvIHRoaXMuX3JlYWxIZWlnaHQ7XG5cdFx0fSBlbHNlIHtcblx0XHRcdG52dyA9IHZwdztcblx0XHRcdG52aCA9IChudncgKiB0aGlzLl9yZWFsSGVpZ2h0KSAvIHRoaXMuX3JlYWxXaWR0aDtcblx0XHR9XG5cblx0XHRBcHAucmVuZGVyZXIudmlldy5zdHlsZS53aWR0aCA9IGAke252d31weGA7XG5cdFx0QXBwLnJlbmRlcmVyLnZpZXcuc3R5bGUuaGVpZ2h0ID0gYCR7bnZofXB4YDtcblx0XHRBcHAucmVuZGVyZXIucmVzaXplKG52dywgbnZoKTtcblx0XHR0aGlzLl9hcHAuc3RhZ2Uuc2NhbGUuc2V0KG52dyAvIHRoaXMuX3JlYWxXaWR0aCwgbnZoIC8gdGhpcy5fcmVhbEhlaWdodCk7XG5cdH1cbn1cblxubmV3IE1haW4oKTtcbiIsImltcG9ydCAqIGFzIFBJWEkgZnJvbSBcInBpeGkuanNcIjtcblxuZXhwb3J0IGNsYXNzIEFwcCBleHRlbmRzIFBJWEkuQXBwbGljYXRpb24ge1xuXHRwcml2YXRlIHN0YXRpYyBfcmVuZGVyZXI6IFBJWEkuUmVuZGVyZXI7XG5cblx0Y29uc3RydWN0b3Iob3B0aW9uczogYW55KSB7XG5cdFx0c3VwZXIob3B0aW9ucyk7XG5cblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY29udGV4dG1lbnVcIiwgZSA9PiBlLnByZXZlbnREZWZhdWx0KCkpO1xuXHRcdGRvY3VtZW50LmJvZHkuYXBwZW5kKHRoaXMudmlldyk7XG5cblx0XHR0aGlzLnN0YWdlLmludGVyYWN0aXZlID0gdHJ1ZTtcblx0XHRBcHAuX3JlbmRlcmVyID0gdGhpcy5yZW5kZXJlcjtcblx0XHR0aGlzLnN0YXJ0KCk7XG5cdH1cblxuXHRwdWJsaWMgc3RhdGljIGdldCByZW5kZXJlcigpOiBQSVhJLlJlbmRlcmVyIHtcblx0XHRyZXR1cm4gdGhpcy5fcmVuZGVyZXI7XG5cdH1cbn1cbiIsImltcG9ydCAqIGFzIFBJWEkgZnJvbSBcInBpeGkuanNcIjtcbmltcG9ydCB7IEF0bGFzIH0gZnJvbSBcIi4uL0F0bGFzZXNNYXBcIjtcblxuZXhwb3J0IHR5cGUgcGF0aCA9IHR5cGVvZiBBdGxhc1trZXlvZiB0eXBlb2YgQXRsYXNdO1xuXG5jbGFzcyBBc3NldHMge1xuXHRwcml2YXRlIHJlYWRvbmx5IF9hdGxhc05hbWUgPSBcInRleHR1cmVzXCIgYXMgY29uc3Q7XG5cdHByaXZhdGUgX3RleHR1cmVzOiBSZWNvcmQ8cGF0aCwgUElYSS5UZXh0dXJlPjtcblxuXHRwdWJsaWMgc3ByaXRlKGlkOiBwYXRoKSB7XG5cdFx0cmV0dXJuIG5ldyBQSVhJLlNwcml0ZSh0aGlzLl90ZXh0dXJlc1tpZF0pO1xuXHR9XG5cblx0cHVibGljIGxvYWRSZXNvdXJjZXMoKSB7XG5cdFx0Y29uc3QgbG9hZGVyID0gdGhpcy5sb2FkZXI7XG5cdFx0Y29uc3QgcGF0aCA9IGBhc3NldHMvJHsgdGhpcy5fYXRsYXNOYW1lIH0uanNvbmA7XG5cblx0XHRsb2FkZXIuYWRkKHRoaXMuX2F0bGFzTmFtZSwgcGF0aCwgKCkgPT4gdGhpcy5vbkF0bGFzTG9hZGVkKGxvYWRlcikpO1xuXG5cdFx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiBsb2FkZXIubG9hZChyZXNvbHZlKSk7XG5cdH1cblxuXHRwcml2YXRlIGdldCBsb2FkZXIoKSB7XG5cdFx0Y29uc3QgbG9hZGVyID0gbmV3IFBJWEkuTG9hZGVyKCk7XG5cdFx0bG9hZGVyLmRlZmF1bHRRdWVyeVN0cmluZyA9IGB2PSR7IE1hdGgucmFuZG9tKCkgfWA7XG5cdFx0cmV0dXJuIGxvYWRlcjtcblx0fVxuXG5cdHByaXZhdGUgb25BdGxhc0xvYWRlZChsb2FkZXI6IFBJWEkuTG9hZGVyKSB7XG5cdFx0dGhpcy5fdGV4dHVyZXMgPSB7IC4uLnRoaXMuX3RleHR1cmVzLCAuLi5sb2FkZXIucmVzb3VyY2VzW3RoaXMuX2F0bGFzTmFtZV0udGV4dHVyZXMgfTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgQXNzZXRzKCk7XG4iLCJpbXBvcnQgKiBhcyBQSVhJIGZyb20gXCJwaXhpLmpzXCI7XG5pbXBvcnQgeyBNZW51QnV0dG9uIH0gZnJvbSBcIi4vTWVudUJ1dHRvblwiO1xuaW1wb3J0IEFzc2V0cyBmcm9tIFwiLi4vY29yZS9Bc3NldHNcIjtcbmltcG9ydCB7IEF0bGFzIH0gZnJvbSBcIi4uL0F0bGFzZXNNYXBcIjtcbmltcG9ydCBnc2FwLCB7IFNpbmUgfSBmcm9tIFwiZ3NhcFwiO1xuaW1wb3J0IHsgQmx1ZUNhcnBldCB9IGZyb20gXCIuL2J1dHRvbnMvQmx1ZUNhcnBldFwiO1xuaW1wb3J0IHsgT3JhbmdlQ2FycGV0IH0gZnJvbSBcIi4vYnV0dG9ucy9PcmFuZ2VDYXJwZXRcIjtcbmltcG9ydCB7IEdyZWVuQ2FycGV0IH0gZnJvbSBcIi4vYnV0dG9ucy9HcmVlbkNhcnBldFwiO1xuaW1wb3J0IHsgU3RhaXJzIH0gZnJvbSBcIi4uL3NjZW5lL1N0YWlyc0NvbnRhaW5lclwiO1xuXG5leHBvcnQgY2xhc3MgTWVudSBleHRlbmRzIFBJWEkuQ29udGFpbmVyIHtcblx0cHVibGljIEFDQ0VQVF9TVEFJUiA9IFwiYWNjZXB0X3N0YWlyXCI7XG5cdHB1YmxpYyBDSEFOR0VfU1RBSVIgPSBcImNoYW5nZV9zdGFpclwiO1xuXG5cdHByaXZhdGUgX2J1dHRvbnM6IE1hcDxTdGFpcnMsIE1lbnVCdXR0b24+ID0gbmV3IE1hcCgpO1xuXHRwcml2YXRlIF9ibHVlQ2FycGV0OiBCbHVlQ2FycGV0O1xuXHRwcml2YXRlIF9vcmFuZ2VDYXJwZXQ6IE9yYW5nZUNhcnBldDtcblx0cHJpdmF0ZSBfZ3JlZW5DYXJwZXQ6IEdyZWVuQ2FycGV0O1xuXHRwcml2YXRlIF9hY2NlcHRCdXR0b246IFBJWEkuU3ByaXRlO1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cblx0XHR0aGlzLl9ibHVlQ2FycGV0ID0gbmV3IEJsdWVDYXJwZXQoKTtcblx0XHR0aGlzLl9idXR0b25zLnNldChTdGFpcnMuQkxVRSwgdGhpcy5fYmx1ZUNhcnBldCk7XG5cdFx0dGhpcy5hZGRDaGlsZCh0aGlzLl9ibHVlQ2FycGV0KTtcblxuXHRcdHRoaXMuX29yYW5nZUNhcnBldCA9IG5ldyBPcmFuZ2VDYXJwZXQoKTtcblx0XHR0aGlzLl9vcmFuZ2VDYXJwZXQueCA9IHRoaXMuX2JsdWVDYXJwZXQud2lkdGg7XG5cdFx0dGhpcy5fYnV0dG9ucy5zZXQoU3RhaXJzLk9SQU5HRSwgdGhpcy5fb3JhbmdlQ2FycGV0KTtcblx0XHR0aGlzLmFkZENoaWxkKHRoaXMuX29yYW5nZUNhcnBldCk7XG5cblx0XHR0aGlzLl9ncmVlbkNhcnBldCA9IG5ldyBHcmVlbkNhcnBldCgpO1xuXHRcdHRoaXMuX2dyZWVuQ2FycGV0LnggPSB0aGlzLl9vcmFuZ2VDYXJwZXQueCArIHRoaXMuX29yYW5nZUNhcnBldC53aWR0aDtcblx0XHR0aGlzLl9idXR0b25zLnNldChTdGFpcnMuR1JFRU4sIHRoaXMuX2dyZWVuQ2FycGV0KTtcblx0XHR0aGlzLmFkZENoaWxkKHRoaXMuX2dyZWVuQ2FycGV0KTtcblxuXHRcdHRoaXMuY3JlYXRlQWNjZXB0QnV0dG9uKCk7XG5cblx0XHRmb3IgKGNvbnN0IFtrZXksIGJ1dHRvbl0gb2YgdGhpcy5fYnV0dG9ucykge1xuXHRcdFx0YnV0dG9uLnkgPSAtYnV0dG9uLmhlaWdodDtcblx0XHRcdGJ1dHRvbi5hbHBoYSA9IDA7XG5cdFx0XHRidXR0b24ub24oXCJwb2ludGVyZG93blwiLCAoKSA9PiB0aGlzLmNoYW5nZUFjdGl2ZUJ1dHRvbihrZXkpLCB0aGlzKTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGNyZWF0ZUFjY2VwdEJ1dHRvbigpIHtcblx0XHR0aGlzLl9hY2NlcHRCdXR0b24gPSBBc3NldHMuc3ByaXRlKEF0bGFzLmJ1dHRvbl9vayk7XG5cdFx0dGhpcy5fYWNjZXB0QnV0dG9uLmFuY2hvci54ID0gMC41O1xuXHRcdHRoaXMuX2FjY2VwdEJ1dHRvbi5pbnRlcmFjdGl2ZSA9IHRydWU7XG5cdFx0dGhpcy5fYWNjZXB0QnV0dG9uLmJ1dHRvbk1vZGUgPSB0cnVlO1xuXHRcdHRoaXMuX2FjY2VwdEJ1dHRvbi52aXNpYmxlID0gZmFsc2U7XG5cdFx0dGhpcy5hZGRDaGlsZCh0aGlzLl9hY2NlcHRCdXR0b24pO1xuXG5cdFx0dGhpcy5fYWNjZXB0QnV0dG9uLm9uKFwicG9pbnRlcmRvd25cIiwgKCkgPT4gdGhpcy5lbWl0KHRoaXMuQUNDRVBUX1NUQUlSKSwgdGhpcyk7XG5cdH1cblxuXHRwcml2YXRlIGNoYW5nZUFjdGl2ZUJ1dHRvbihrZXk6IFN0YWlycykge1xuXHRcdGNvbnN0IGJ1dHRvbiA9IHRoaXMuX2J1dHRvbnMuZ2V0KGtleSk7XG5cblx0XHRpZiAoIWJ1dHRvbi5zZWxlY3QpIHtcblx0XHRcdFsuLi50aGlzLl9idXR0b25zXS5mb3JFYWNoKGJ1dHRvbiA9PiBidXR0b25bMV0uc2VsZWN0ID0gZmFsc2UpO1xuXHRcdFx0YnV0dG9uLnNlbGVjdCA9IHRydWU7XG5cblx0XHRcdC8qKiDQvNC10L3Rj9C10Lwg0LvQtdGB0YLQvdC40YbRgyAqL1xuXHRcdFx0dGhpcy5lbWl0KHRoaXMuQ0hBTkdFX1NUQUlSLCBrZXkpO1xuXG5cdFx0XHRjb25zdCB4ID0gTWF0aC5mbG9vcihidXR0b24ueCArIGJ1dHRvbi53aWR0aCAqIDAuNSk7XG5cdFx0XHRpZiAoIXRoaXMuX2FjY2VwdEJ1dHRvbi52aXNpYmxlKSB7XG5cdFx0XHRcdHRoaXMuX2FjY2VwdEJ1dHRvbi52aXNpYmxlID0gdHJ1ZTtcblx0XHRcdFx0dGhpcy5fYWNjZXB0QnV0dG9uLnBvc2l0aW9uLnNldCh4LCBidXR0b24uaGVpZ2h0IC0gMzApO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Z3NhcC5raWxsVHdlZW5zT2YodGhpcy5fYWNjZXB0QnV0dG9uKTtcblx0XHRcdFx0Z3NhcC50byh0aGlzLl9hY2NlcHRCdXR0b24sIDAuMiwgeyB4LCBlYXNlOiBTaW5lLmVhc2VPdXQgfSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cHVibGljIHNob3dCdXR0b25zKCkge1xuXHRcdGNvbnN0IGJ1dHRvbnMgPSBbLi4udGhpcy5fYnV0dG9uc10ubWFwKGJ1dHRvbiA9PiBidXR0b25bMV0pO1xuXHRcdGdzYXAudG8oYnV0dG9ucywgMC4zLCB7IHk6IDAsIGFscGhhOiAxLCBzdGFnZ2VyOiAwLjEgfSk7XG5cdH1cbn1cbiIsImltcG9ydCAqIGFzIFBJWEkgZnJvbSBcInBpeGkuanNcIjtcbmltcG9ydCBBc3NldHMsIHsgcGF0aCB9IGZyb20gXCIuLi9jb3JlL0Fzc2V0c1wiO1xuaW1wb3J0IHsgQXRsYXMgfSBmcm9tIFwiLi4vQXRsYXNlc01hcFwiO1xuXG5leHBvcnQgY2xhc3MgTWVudUJ1dHRvbiBleHRlbmRzIFBJWEkuQ29udGFpbmVyIHtcblx0cHJvdGVjdGVkIF9iZzogUElYSS5TcHJpdGU7XG5cdHByb3RlY3RlZCBfaWNvbjogUElYSS5TcHJpdGU7XG5cdHByaXZhdGUgX3NlbGVjdGVkQmc6IFBJWEkuU3ByaXRlO1xuXHRwcml2YXRlIF9pc0FjdGl2ZSA9IGZhbHNlO1xuXG5cdGNvbnN0cnVjdG9yKGljb25QYXRoOiBwYXRoKSB7XG5cdFx0c3VwZXIoKTtcblxuXHRcdHRoaXMuaW50ZXJhY3RpdmUgPSB0cnVlO1xuXHRcdHRoaXMuYnV0dG9uTW9kZSA9IHRydWU7XG5cblx0XHR0aGlzLl9iZyA9IEFzc2V0cy5zcHJpdGUoQXRsYXMuY2lyY2xlKTtcblx0XHR0aGlzLmFkZENoaWxkKHRoaXMuX2JnKTtcblxuXHRcdC8qKiDQmNC60L7QvdC60LAg0LjQvNC10LXRgiDQv9GA0L7Qt9GA0LDRh9C90YvQtSDQv9C40LrRgdC10LvQuCwg0L/QvtGN0YLQvtC80YMg0YfRgtC+0LHRiyDQvtC90LAg0L3QtSDRgNCw0YHRgtGP0LPQuNCy0LDQu9CwINC60L3Rg9C/0LrRgyAtINC+0YLRgdC10LrQsNGOINC80LDRgdC60L7QuSAqL1xuXHRcdGNvbnN0IGJnTWFzayA9IEFzc2V0cy5zcHJpdGUoQXRsYXMuY2lyY2xlKTtcblx0XHR0aGlzLmFkZENoaWxkKGJnTWFzayk7XG5cblx0XHR0aGlzLl9zZWxlY3RlZEJnID0gQXNzZXRzLnNwcml0ZShBdGxhcy5jaXJjbGVfc2VsZWN0ZWQpO1xuXHRcdHRoaXMuX3NlbGVjdGVkQmcuYW5jaG9yLnNldCgwLjUpO1xuXHRcdHRoaXMuX3NlbGVjdGVkQmcucG9zaXRpb24uc2V0KE1hdGguZmxvb3IodGhpcy53aWR0aCAqIDAuNSksIE1hdGguZmxvb3IodGhpcy53aWR0aCAqIDAuNSkgLSA0KTtcblx0XHR0aGlzLl9zZWxlY3RlZEJnLnZpc2libGUgPSBmYWxzZTtcblx0XHR0aGlzLmFkZENoaWxkKHRoaXMuX3NlbGVjdGVkQmcpO1xuXG5cdFx0dGhpcy5faWNvbiA9IEFzc2V0cy5zcHJpdGUoaWNvblBhdGgpO1xuXHRcdHRoaXMuX2ljb24uYW5jaG9yLnNldCgwLCAxKTtcblx0XHR0aGlzLl9pY29uLm1hc2sgPSBiZ01hc2s7XG5cdFx0dGhpcy5hZGRDaGlsZCh0aGlzLl9pY29uKTtcblx0fVxuXG5cdHB1YmxpYyBzZXQgc2VsZWN0KHNlbGVjdGVkOiBib29sZWFuKSB7XG5cdFx0dGhpcy5fc2VsZWN0ZWRCZy52aXNpYmxlID0gc2VsZWN0ZWQ7XG5cdFx0dGhpcy5faXNBY3RpdmUgPSBzZWxlY3RlZDtcblx0fVxuXG5cdHB1YmxpYyBnZXQgc2VsZWN0KCkge1xuXHRcdHJldHVybiB0aGlzLl9pc0FjdGl2ZTtcblx0fVxufVxuIiwiaW1wb3J0IHsgTWVudUJ1dHRvbiB9IGZyb20gXCIuLi9NZW51QnV0dG9uXCI7XG5pbXBvcnQgeyBBdGxhcyB9IGZyb20gXCIuLi8uLi9BdGxhc2VzTWFwXCI7XG5cbmV4cG9ydCBjbGFzcyBCbHVlQ2FycGV0IGV4dGVuZHMgTWVudUJ1dHRvbiB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKEF0bGFzLmNhcnBldF9ibHVlKTtcblx0XHR0aGlzLl9pY29uLnBvc2l0aW9uLnNldCgyOCwgTWF0aC5mbG9vcih0aGlzLl9iZy5oZWlnaHQgLSAzMCkpO1xuXHR9XG59XG4iLCJpbXBvcnQgeyBNZW51QnV0dG9uIH0gZnJvbSBcIi4uL01lbnVCdXR0b25cIjtcbmltcG9ydCB7IEF0bGFzIH0gZnJvbSBcIi4uLy4uL0F0bGFzZXNNYXBcIjtcblxuZXhwb3J0IGNsYXNzIEdyZWVuQ2FycGV0IGV4dGVuZHMgTWVudUJ1dHRvbiB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKEF0bGFzLmNhcnBldF9ncmVlbik7XG5cdFx0dGhpcy5faWNvbi5wb3NpdGlvbi5zZXQoMjgsIE1hdGguZmxvb3IodGhpcy5fYmcuaGVpZ2h0IC0gMzApKTtcblx0fVxufVxuIiwiaW1wb3J0IHsgTWVudUJ1dHRvbiB9IGZyb20gXCIuLi9NZW51QnV0dG9uXCI7XG5pbXBvcnQgeyBBdGxhcyB9IGZyb20gXCIuLi8uLi9BdGxhc2VzTWFwXCI7XG5cbmV4cG9ydCBjbGFzcyBPcmFuZ2VDYXJwZXQgZXh0ZW5kcyBNZW51QnV0dG9uIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoQXRsYXMuY2FycGV0X29yYW5nZSk7XG5cdFx0dGhpcy5faWNvbi5wb3NpdGlvbi5zZXQoMzIsIE1hdGguZmxvb3IodGhpcy5fYmcuaGVpZ2h0IC0gMzQpKTtcblx0fVxufVxuIiwiaW1wb3J0ICogYXMgUElYSSBmcm9tIFwicGl4aS5qc1wiO1xuaW1wb3J0IHsgQXRsYXMgfSBmcm9tIFwiLi4vQXRsYXNlc01hcFwiO1xuaW1wb3J0IEFzc2V0cyBmcm9tIFwiLi4vY29yZS9Bc3NldHNcIjtcbmltcG9ydCB7IE1lbnUgfSBmcm9tIFwiLi4vbWVudS9NZW51XCI7XG5pbXBvcnQgeyBTaW5lLCBUaW1lbGluZU1heCB9IGZyb20gXCJnc2FwXCI7XG5pbXBvcnQgeyBTdGFpcnNDb250YWluZXIgfSBmcm9tIFwiLi9TdGFpcnNDb250YWluZXJcIjtcblxuZXhwb3J0IGNsYXNzIFNjZW5lIGV4dGVuZHMgUElYSS5Db250YWluZXIge1xuXHRwcml2YXRlIF9ibGFja0xheWVyOiBQSVhJLkdyYXBoaWNzO1xuXHRwcml2YXRlIF9hcHBlYWxQb3B1cDogUElYSS5TcHJpdGU7XG5cdC8qKiDQsNC90LjQvNCw0YbQuNGPINC60L3QvtC/0LrQuCBcImNvbnRpbnVlXCIgKi9cblx0cHJpdmF0ZSBfYnV0dG9uQ29udGludWVUaW1lbGluZTogVGltZWxpbmVNYXg7XG5cdC8qKiDQsNC90LjQvNCw0YbQuNGPINC/0L7Rj9Cy0LvQtdC90LjRjyDRhNC40L3QsNC70YzQvdC+0LPQviDQv9C+0L/QsNC/0LAg0Lgg0LfQsNGC0LXQvNC90LXQvdC40Y8gKi9cblx0cHJpdmF0ZSBfcG9wdXBUaW1lbGluZTogVGltZWxpbmVNYXg7XG5cdC8qKiDQsNC90LjQvNCw0YbQuNGPINC80L7Qu9C+0YLQvtGH0LrQsCAqL1xuXHRwcml2YXRlIF9oYW1tZXJUaW1lbGluZTogVGltZWxpbmVNYXg7XG5cdHByaXZhdGUgX21lbnU6IE1lbnU7XG5cdHByaXZhdGUgX3N0YWlyQ29udGFpbmVyOiBTdGFpcnNDb250YWluZXI7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblxuXHRcdGNvbnN0IGJnID0gQXNzZXRzLnNwcml0ZShBdGxhcy5iZyk7XG5cdFx0dGhpcy5hZGRDaGlsZChiZyk7XG5cblx0XHR0aGlzLmNyZWF0ZURlY29yKCk7XG5cblx0XHRjb25zdCBhdXN0aW4gPSBBc3NldHMuc3ByaXRlKEF0bGFzLkF1c3Rpbik7XG5cdFx0YXVzdGluLnBvc2l0aW9uLnNldCg2OTYsIDExMyk7XG5cdFx0dGhpcy5hZGRDaGlsZChhdXN0aW4pO1xuXG5cdFx0dGhpcy5jcmVhdGVIYW1tZXIoKTtcblx0XHR0aGlzLmNyZWF0ZU1lbnUoKTtcblx0XHR0aGlzLmNyZWF0ZVBvcHVwKCk7XG5cblx0XHRjb25zdCBsb2dvID0gQXNzZXRzLnNwcml0ZShBdGxhcy5sb2dvKTtcblx0XHRsb2dvLnBvc2l0aW9uLnNldCgzMiwgNSk7XG5cdFx0dGhpcy5hZGRDaGlsZChsb2dvKTtcblxuXHRcdHRoaXMuY3JlYXRlQnV0dG9uQ29udGludWUoKTtcblx0fVxuXG5cdC8qKiDQodC+0LfQtNCw0L3QuNC1INC4INCw0L3QuNC80LDRhtC40Y8g0LzQvtC70L7RgtC+0YfQutCwICovXG5cdHByaXZhdGUgY3JlYXRlSGFtbWVyKCkge1xuXHRcdGNvbnN0IGhhbW1lciA9IEFzc2V0cy5zcHJpdGUoQXRsYXMuaWNvbl9oYW1tZXIpO1xuXHRcdGhhbW1lci5wb3NpdGlvbi5zZXQoMTA4NywgMjU4KTtcblx0XHRoYW1tZXIuaW50ZXJhY3RpdmUgPSB0cnVlO1xuXHRcdGhhbW1lci5idXR0b25Nb2RlID0gdHJ1ZTtcblx0XHRoYW1tZXIuYWxwaGEgPSAwO1xuXHRcdGhhbW1lci52aXNpYmxlID0gZmFsc2U7XG5cdFx0aGFtbWVyLm9uKFwicG9pbnRlcmRvd25cIiwgKCkgPT4ge1xuXHRcdFx0dGhpcy5faGFtbWVyVGltZWxpbmU/LmtpbGwoKTtcblx0XHRcdHRoaXMuX2hhbW1lclRpbWVsaW5lID0gbmV3IFRpbWVsaW5lTWF4KCk7XG5cdFx0XHR0aGlzLl9tZW51LnNob3dCdXR0b25zKCk7XG5cdFx0XHR0aGlzLl9oYW1tZXJUaW1lbGluZS50byhoYW1tZXIsIDAuMywgeyBhbHBoYTogMCB9LCAwKTtcblx0XHRcdHRoaXMuX2hhbW1lclRpbWVsaW5lLnNldChoYW1tZXIsIHsgdmlzaWJsZTogZmFsc2UgfSwgMC4zKTtcblx0XHR9LCB0aGlzKTtcblx0XHR0aGlzLmFkZENoaWxkKGhhbW1lcik7XG5cblx0XHR0aGlzLl9oYW1tZXJUaW1lbGluZSA9IG5ldyBUaW1lbGluZU1heCgpO1xuXHRcdHRoaXMuX2hhbW1lclRpbWVsaW5lLmRlbGF5KDEuNSk7XG5cdFx0dGhpcy5faGFtbWVyVGltZWxpbmUuc2V0KGhhbW1lciwgeyB2aXNpYmxlOiB0cnVlIH0pO1xuXHRcdHRoaXMuX2hhbW1lclRpbWVsaW5lLnRvKGhhbW1lciwgMC40LCB7IGFscGhhOiAxIH0pO1xuXHR9XG5cblx0LyoqINCX0LDRgtC10LzQvdC10L3QuNC1ICsg0LLRgdC/0LvRi9GO0YnQtdC1INC+0LrQvdC+ICovXG5cdHByaXZhdGUgY3JlYXRlUG9wdXAoKSB7XG5cdFx0dGhpcy5fYmxhY2tMYXllciA9IG5ldyBQSVhJLkdyYXBoaWNzKCk7XG5cdFx0dGhpcy5fYmxhY2tMYXllci5iZWdpbkZpbGwoMHgwMDAsIDAuNTUpO1xuXHRcdHRoaXMuX2JsYWNrTGF5ZXIuZHJhd1JlY3QoMCwgMCwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuXHRcdHRoaXMuX2JsYWNrTGF5ZXIuZW5kRmlsbCgpO1xuXHRcdHRoaXMuX2JsYWNrTGF5ZXIuYWxwaGEgPSAwO1xuXHRcdHRoaXMuYWRkQ2hpbGQodGhpcy5fYmxhY2tMYXllcik7XG5cblx0XHR0aGlzLl9hcHBlYWxQb3B1cCA9IEFzc2V0cy5zcHJpdGUoQXRsYXMuYXBwZWFsX3BvcHVwKTtcblx0XHR0aGlzLl9hcHBlYWxQb3B1cC5hbmNob3Iuc2V0KDAuNSk7XG5cdFx0dGhpcy5fYXBwZWFsUG9wdXAucG9zaXRpb24uc2V0KE1hdGguZmxvb3IodGhpcy53aWR0aCAqIDAuNSksIDI1NSk7XG5cdFx0dGhpcy5fYXBwZWFsUG9wdXAuYWxwaGEgPSAwO1xuXHRcdHRoaXMuX2FwcGVhbFBvcHVwLnNjYWxlLnNldCgwKTtcblx0XHR0aGlzLmFkZENoaWxkKHRoaXMuX2FwcGVhbFBvcHVwKTtcblx0fVxuXG5cdC8qKiDQn9C+0LrQsNC30YvQstCw0LXRgiDRhNC40L3QsNC70YzQvdC+0LUg0L7QutC90L4gKi9cblx0cHJpdmF0ZSBzaG93QXBwZWFsUG9wdXAoKSB7XG5cdFx0dGhpcy5fcG9wdXBUaW1lbGluZSA9IG5ldyBUaW1lbGluZU1heCgpXG5cdFx0XHQuY2FsbCgoKSA9PiB0aGlzLl9zdGFpckNvbnRhaW5lci5sb3dlclN0YWlyKDAuMjUpLCBbXSwgMClcblx0XHRcdC50byh0aGlzLl9tZW51LCAwLjI1LCB7IHk6IC10aGlzLl9tZW51LmhlaWdodCB9LCAwKVxuXHRcdFx0LnRvKHRoaXMuX2JsYWNrTGF5ZXIsIDAuNCwgeyBhbHBoYTogMSB9LCAwLjI1KVxuXHRcdFx0LnRvKHRoaXMuX2FwcGVhbFBvcHVwLnNjYWxlLCAwLjQsIHsgeDogMSwgeTogMSB9LCAwLjU1KVxuXHRcdFx0LnRvKHRoaXMuX2FwcGVhbFBvcHVwLCAwLjQsIHsgYWxwaGE6IDEgfSwgMC41NSk7XG5cdH1cblxuXHRwcml2YXRlIGNyZWF0ZU1lbnUoKSB7XG5cdFx0dGhpcy5fbWVudSA9IG5ldyBNZW51KCk7XG5cdFx0dGhpcy5fbWVudS5wb3NpdGlvbi5zZXQoODUwLCAxMCk7XG5cdFx0dGhpcy5fbWVudS5vbih0aGlzLl9tZW51LkFDQ0VQVF9TVEFJUiwgdGhpcy5zaG93QXBwZWFsUG9wdXAsIHRoaXMpO1xuXHRcdHRoaXMuX21lbnUub24odGhpcy5fbWVudS5DSEFOR0VfU1RBSVIsIHRoaXMuX3N0YWlyQ29udGFpbmVyLmNoYW5nZVN0YWlyLmJpbmQodGhpcy5fc3RhaXJDb250YWluZXIpLCB0aGlzKTtcblx0XHR0aGlzLmFkZENoaWxkKHRoaXMuX21lbnUpO1xuXHR9XG5cblx0cHJpdmF0ZSBjcmVhdGVCdXR0b25Db250aW51ZSgpIHtcblx0XHRjb25zdCBidXR0b25Db250aW51ZSA9IEFzc2V0cy5zcHJpdGUoQXRsYXMuYnV0dG9uX2NvbnRpbnVlKTtcblx0XHRidXR0b25Db250aW51ZS5hbmNob3Iuc2V0KDAuNSk7XG5cdFx0YnV0dG9uQ29udGludWUucG9zaXRpb24uc2V0KE1hdGguZmxvb3IodGhpcy53aWR0aCAqIDAuNSksIDU2MCk7XG5cdFx0YnV0dG9uQ29udGludWUuaW50ZXJhY3RpdmUgPSB0cnVlO1xuXHRcdGJ1dHRvbkNvbnRpbnVlLmJ1dHRvbk1vZGUgPSB0cnVlO1xuXHRcdGJ1dHRvbkNvbnRpbnVlLm9uKFwicG9pbnRlcmRvd25cIiwgKCkgPT4gYWxlcnQoXCJjbGlja1wiKSwgdGhpcyk7XG5cdFx0dGhpcy5hZGRDaGlsZChidXR0b25Db250aW51ZSk7XG5cblx0XHR0aGlzLl9idXR0b25Db250aW51ZVRpbWVsaW5lID0gbmV3IFRpbWVsaW5lTWF4KHtcblx0XHRcdHJlcGVhdDogLTEsIG9uVXBkYXRlOiAoKSA9PiB7XG5cdFx0XHRcdGNvbnN0IHRpbWUgPSB0aGlzLl9idXR0b25Db250aW51ZVRpbWVsaW5lLnRvdGFsVGltZSgpO1xuXHRcdFx0XHRjb25zdCBzcGVlZCA9IDM7XG5cdFx0XHRcdGJ1dHRvbkNvbnRpbnVlLnJvdGF0aW9uID0gTWF0aC5zaW4odGltZSAqIHNwZWVkKSAqIDAuMDM7XG5cdFx0XHR9LFxuXHRcdH0pO1xuXHRcdHRoaXMuX2J1dHRvbkNvbnRpbnVlVGltZWxpbmVcblx0XHRcdC50byhidXR0b25Db250aW51ZS5zY2FsZSwgMC41LCB7IHg6IDEuMTUsIHk6IDEuMTUsIGVhc2U6IFNpbmUuZWFzZUluIH0pXG5cdFx0XHQudG8oYnV0dG9uQ29udGludWUuc2NhbGUsIDAuNSwgeyB4OiAxLCB5OiAxLCBlYXNlOiBTaW5lLmVhc2VPdXQgfSk7XG5cdH1cblxuXHRwcml2YXRlIGNyZWF0ZURlY29yKCkge1xuXHRcdGNvbnN0IHRhYmxlID0gQXNzZXRzLnNwcml0ZShBdGxhcy50YWJsZSk7XG5cdFx0dGFibGUucG9zaXRpb24uc2V0KDIwMCwgMTk4KTtcblx0XHR0aGlzLmFkZENoaWxkKHRhYmxlKTtcblxuXHRcdGNvbnN0IHNvZmEgPSBBc3NldHMuc3ByaXRlKEF0bGFzLnNvZmEpO1xuXHRcdHNvZmEucG9zaXRpb24uc2V0KDEyNywgMzI0KTtcblx0XHR0aGlzLmFkZENoaWxkKHNvZmEpO1xuXG5cdFx0Y29uc3QgYm9va1N0YW5kID0gQXNzZXRzLnNwcml0ZShBdGxhcy5ib29rX3N0YW5kKTtcblx0XHRib29rU3RhbmQucG9zaXRpb24uc2V0KDgzNCwgLTI1KTtcblx0XHR0aGlzLmFkZENoaWxkKGJvb2tTdGFuZCk7XG5cblx0XHRjb25zdCBnbG9iZSA9IEFzc2V0cy5zcHJpdGUoQXRsYXMuZ2xvYmUpO1xuXHRcdGdsb2JlLnBvc2l0aW9uLnNldCg4NywgMTA5KTtcblx0XHR0aGlzLmFkZENoaWxkKGdsb2JlKTtcblxuXHRcdGNvbnN0IHBsYW50MSA9IEFzc2V0cy5zcHJpdGUoQXRsYXMucGxhbnRfMik7XG5cdFx0cGxhbnQxLnBvc2l0aW9uLnNldCgxMTM1LCAxNjQpO1xuXHRcdHRoaXMuYWRkQ2hpbGQocGxhbnQxKTtcblxuXHRcdGNvbnN0IHBsYW50MiA9IEFzc2V0cy5zcHJpdGUoQXRsYXMucGxhbnRfMik7XG5cdFx0cGxhbnQyLnBvc2l0aW9uLnNldCg0NTYsIC00MCk7XG5cdFx0dGhpcy5hZGRDaGlsZChwbGFudDIpO1xuXG5cdFx0dGhpcy5fc3RhaXJDb250YWluZXIgPSBuZXcgU3RhaXJzQ29udGFpbmVyKCk7XG5cdFx0dGhpcy5hZGRDaGlsZCh0aGlzLl9zdGFpckNvbnRhaW5lcik7XG5cdFx0dGhpcy5fc3RhaXJDb250YWluZXIueCA9IHRoaXMud2lkdGggLSB0aGlzLl9zdGFpckNvbnRhaW5lci53aWR0aDtcblxuXHRcdGNvbnN0IHBsYW50MyA9IEFzc2V0cy5zcHJpdGUoQXRsYXMucGxhbnRfMSk7XG5cdFx0cGxhbnQzLnBvc2l0aW9uLnNldCgxMTIyLCA0MzgpO1xuXHRcdHRoaXMuYWRkQ2hpbGQocGxhbnQzKTtcblx0fVxuXG5cdHB1YmxpYyBkZXN0cm95KG9wdGlvbnM/OiB7IGNoaWxkcmVuPzogYm9vbGVhbjsgdGV4dHVyZT86IGJvb2xlYW47IGJhc2VUZXh0dXJlPzogYm9vbGVhbiB9KSB7XG5cdFx0dGhpcy5fcG9wdXBUaW1lbGluZT8ua2lsbCgpO1xuXHRcdHRoaXMuX2J1dHRvbkNvbnRpbnVlVGltZWxpbmU/LmtpbGwoKTtcblx0XHR0aGlzLl9oYW1tZXJUaW1lbGluZT8ua2lsbCgpO1xuXHRcdHN1cGVyLmRlc3Ryb3kob3B0aW9ucyk7XG5cdH1cbn1cbiIsImltcG9ydCAqIGFzIFBJWEkgZnJvbSBcInBpeGkuanNcIjtcbmltcG9ydCBBc3NldHMgZnJvbSBcIi4uL2NvcmUvQXNzZXRzXCI7XG5pbXBvcnQgeyBBdGxhcyB9IGZyb20gXCIuLi9BdGxhc2VzTWFwXCI7XG5pbXBvcnQgZ3NhcCwgeyBUaW1lbGluZU1heCB9IGZyb20gXCJnc2FwXCI7XG5cbmV4cG9ydCBlbnVtIFN0YWlycyB7XG5cdEJMVUUsXG5cdE9SQU5HRSxcblx0R1JFRU4sXG5cdE9MRCxcbn1cblxuZXhwb3J0IGNsYXNzIFN0YWlyc0NvbnRhaW5lciBleHRlbmRzIFBJWEkuQ29udGFpbmVyIHtcblx0cHJpdmF0ZSBfc3RhaXJzOiBNYXA8U3RhaXJzLCBQSVhJLlNwcml0ZT4gPSBuZXcgTWFwKCk7XG5cdC8qKiDQsNC90LjQvNCw0YbQuNGPINGB0LzQtdC90Ysg0LvQtdGB0YLQvdC40YYgKi9cblx0cHJpdmF0ZSBfc3RhaXJUaW1lbGluZTogVGltZWxpbmVNYXg7XG5cdC8qKiDQsNC60YLQuNCy0L3QsNGPINC70LXRgdGC0L3QuNGG0LAgKi9cblx0cHJpdmF0ZSBfYWN0aXZlU3RhaXI6IFN0YWlycyA9IFN0YWlycy5PTEQ7XG5cdHByaXZhdGUgX3k6IG51bWJlciA9IDA7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblxuXHRcdGNvbnN0IG9sZFN0YWlyID0gQXNzZXRzLnNwcml0ZShBdGxhcy5vbGRfc3RhaXIpO1xuXHRcdG9sZFN0YWlyLmFuY2hvci54ID0gMTtcblx0XHRvbGRTdGFpci5wb3NpdGlvbi5zZXQoMCwgMTI1KTtcblx0XHR0aGlzLl9zdGFpcnMuc2V0KFN0YWlycy5PTEQsIG9sZFN0YWlyKTtcblx0XHR0aGlzLmFkZENoaWxkKG9sZFN0YWlyKTtcblxuXHRcdGNvbnN0IGJsdWVTdGFpciA9IEFzc2V0cy5zcHJpdGUoQXRsYXMuYmx1ZV9zdGFpcik7XG5cdFx0Ymx1ZVN0YWlyLmFuY2hvci54ID0gMTtcblx0XHRibHVlU3RhaXIucG9zaXRpb24uc2V0KDAsIDE4KTtcblx0XHRibHVlU3RhaXIuYWxwaGEgPSAwO1xuXHRcdHRoaXMuX3N0YWlycy5zZXQoU3RhaXJzLkJMVUUsIGJsdWVTdGFpcik7XG5cdFx0dGhpcy5hZGRDaGlsZChibHVlU3RhaXIpO1xuXG5cdFx0Y29uc3Qgb3JhbmdlU3RhaXIgPSBBc3NldHMuc3ByaXRlKEF0bGFzLm9yYW5nZV9zdGFpcik7XG5cdFx0b3JhbmdlU3RhaXIuYW5jaG9yLnggPSAxO1xuXHRcdG9yYW5nZVN0YWlyLnBvc2l0aW9uLnNldCgwLCAyOCk7XG5cdFx0b3JhbmdlU3RhaXIuYWxwaGEgPSAwO1xuXHRcdHRoaXMuX3N0YWlycy5zZXQoU3RhaXJzLk9SQU5HRSwgb3JhbmdlU3RhaXIpO1xuXHRcdHRoaXMuYWRkQ2hpbGQob3JhbmdlU3RhaXIpO1xuXG5cdFx0Y29uc3QgZ3JlZW5TdGFpciA9IEFzc2V0cy5zcHJpdGUoQXRsYXMuZ3JlZW5fc3RhaXIpO1xuXHRcdGdyZWVuU3RhaXIuYW5jaG9yLnggPSAxO1xuXHRcdGdyZWVuU3RhaXIucG9zaXRpb24uc2V0KDAsIDI1KTtcblx0XHRncmVlblN0YWlyLmFscGhhID0gMDtcblx0XHR0aGlzLl9zdGFpcnMuc2V0KFN0YWlycy5HUkVFTiwgZ3JlZW5TdGFpcik7XG5cdFx0dGhpcy5hZGRDaGlsZChncmVlblN0YWlyKTtcblx0fVxuXG5cdHB1YmxpYyBjaGFuZ2VTdGFpcihrZXk6IFN0YWlycykge1xuXHRcdGNvbnN0IGN1cnJlbnRTdGFpciA9IFsuLi50aGlzLl9zdGFpcnNdLmZpbmQoc3RhaXIgPT4gc3RhaXJbMF0gPT09IHRoaXMuX2FjdGl2ZVN0YWlyKVsxXTtcblx0XHRjb25zdCBuZXh0U3RhaXIgPSB0aGlzLl9zdGFpcnMuZ2V0KGtleSk7XG5cdFx0Y29uc3Qgb2Zmc2V0WSA9IDY1O1xuXG5cdFx0dGhpcy5fc3RhaXJUaW1lbGluZT8ua2lsbCgpO1xuXHRcdHRoaXMuX3N0YWlyVGltZWxpbmUgPSBuZXcgVGltZWxpbmVNYXgoKTtcblxuXHRcdHRoaXMuX3N0YWlyVGltZWxpbmUudG8oY3VycmVudFN0YWlyLCAwLjMsIHsgYWxwaGE6IDAgfSwgMCk7XG5cdFx0dGhpcy5fc3RhaXJUaW1lbGluZS50byhjdXJyZW50U3RhaXIsIDAuMywgeyB5OiBjdXJyZW50U3RhaXIueSAtIG9mZnNldFkgfSwgMCk7XG5cdFx0dGhpcy5fc3RhaXJUaW1lbGluZS5zZXQoY3VycmVudFN0YWlyLCB7IHk6IHRoaXMuX3kgfSwgMC4zKTtcblxuXHRcdC8qKiDQt9Cw0L/QvtC80LjQvdCw0LXQvCDRgNC10LDQu9GM0L3Rg9GOINC/0L7Qt9C40YbQuNGOINC70LXRgdGC0L3QuNGG0YsgKi9cblx0XHR0aGlzLl95ID0gbmV4dFN0YWlyLnk7XG5cblx0XHR0aGlzLl9zdGFpclRpbWVsaW5lLnRvKG5leHRTdGFpciwgMC4zLCB7IGFscGhhOiAxIH0sIDAuMyk7XG5cdFx0dGhpcy5fc3RhaXJUaW1lbGluZS5mcm9tVG8obmV4dFN0YWlyLCAwLjMsIHsgeTogLW9mZnNldFkgfSwgeyB5OiAtMTUgfSwgMC4zKTtcblxuXHRcdHRoaXMuX2FjdGl2ZVN0YWlyID0ga2V5O1xuXHR9XG5cblx0LyoqINCe0L/Rg9GB0YLQuNGC0Ywg0LLRi9Cx0YDQsNC90L3Rg9GOINC70LXRgdGC0L3QuNGG0YMg0L3QsCDQuNGB0YXQvtC00L3Rg9GOINC/0L7Qt9C40YbQuNGOICovXG5cdHB1YmxpYyBsb3dlclN0YWlyKGR1cmF0aW9uOiBudW1iZXIpIHtcblx0XHRnc2FwLnRvKHRoaXMuX3N0YWlycy5nZXQodGhpcy5fYWN0aXZlU3RhaXIpLCBkdXJhdGlvbiwgeyB5OiB0aGlzLl95IH0pO1xuXHR9XG5cblx0cHVibGljIGRlc3Ryb3kob3B0aW9ucz86IHsgY2hpbGRyZW4/OiBib29sZWFuOyB0ZXh0dXJlPzogYm9vbGVhbjsgYmFzZVRleHR1cmU/OiBib29sZWFuIH0pIHtcblx0XHR0aGlzLl9zdGFpclRpbWVsaW5lPy5raWxsKCk7XG5cdFx0c3VwZXIuZGVzdHJveShvcHRpb25zKTtcblx0fVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==