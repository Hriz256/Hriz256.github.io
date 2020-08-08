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

/***/ "./App.ts":
/*!****************!*\
  !*** ./App.ts ***!
  \****************/
/*! exports provided: App */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "App", function() { return App; });
/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pixi.js */ "../node_modules/pixi.js/lib/pixi.es.js");
/* harmony import */ var _webfont__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./webfont */ "./webfont.js");
/* harmony import */ var _webfont__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_webfont__WEBPACK_IMPORTED_MODULE_1__);


class App extends pixi_js__WEBPACK_IMPORTED_MODULE_0__["Application"] {
    constructor(options) {
        super(options);
        document.addEventListener("contextmenu", e => e.preventDefault());
        document.body.append(this.view);
        this.stage.interactive = true;
        this.init();
        this.start();
    }
    init() {
        App._renderer = this.renderer;
        App._emitter = new pixi_js__WEBPACK_IMPORTED_MODULE_0__["utils"].EventEmitter();
    }
    async uploadResources() {
        await this.loadPictures();
        await this.loadFonts();
    }
    async loadPictures() {
        App._assets = await new Promise(resolve => {
            this.loader
                .add("sprites", "assets/sprites.json")
                .load(({ resources }) => resolve(resources));
        });
    }
    loadFonts() {
        return new Promise((resolve) => {
            _webfont__WEBPACK_IMPORTED_MODULE_1___default.a.load({
                custom: {
                    families: ["FB"],
                },
                active: resolve,
            });
        });
    }
    static get assets() {
        return this._assets.sprites.textures;
    }
    static get renderer() {
        return this._renderer;
    }
    static get emitter() {
        return this._emitter;
    }
}



/***/ }),

/***/ "./Main.ts":
/*!*****************!*\
  !*** ./Main.ts ***!
  \*****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pixi.js */ "../node_modules/pixi.js/lib/pixi.es.js");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap */ "../node_modules/gsap/index.js");
/* harmony import */ var gsap_PixiPlugin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap/PixiPlugin */ "../node_modules/gsap/PixiPlugin.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ "./App.ts");
/* harmony import */ var _scene_Scene__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scene/Scene */ "./scene/Scene.ts");





class Main {
    constructor() {
        this._app = new _App__WEBPACK_IMPORTED_MODULE_3__["App"]({
            width: window.innerWidth,
            height: window.innerHeight,
            backgroundColor: 0x1099bb,
            resolution: 1,
            resizeTo: window,
        });
        gsap_PixiPlugin__WEBPACK_IMPORTED_MODULE_2__["PixiPlugin"].registerPIXI(pixi_js__WEBPACK_IMPORTED_MODULE_0__);
        gsap__WEBPACK_IMPORTED_MODULE_1__["gsap"].registerPlugin(gsap_PixiPlugin__WEBPACK_IMPORTED_MODULE_2__["PixiPlugin"]);
        this._app.uploadResources().then(this.init.bind(this));
        window.addEventListener("resize", this.refreshSize.bind(this));
    }
    init() {
        this._scene = new _scene_Scene__WEBPACK_IMPORTED_MODULE_4__["Scene"]();
        this._app.stage.addChild(this._scene);
        this.refreshSize();
    }
    refreshSize() {
        const height = _App__WEBPACK_IMPORTED_MODULE_3__["App"].assets["background.png"].height + _App__WEBPACK_IMPORTED_MODULE_3__["App"].assets["ground.png"].height;
        const vpw = window.innerWidth;
        const vph = window.innerHeight;
        let nvw;
        let nvh;
        if (vph / vpw < height / _App__WEBPACK_IMPORTED_MODULE_3__["App"].assets["background.png"].width) {
            nvh = vph;
            nvw = (nvh * _App__WEBPACK_IMPORTED_MODULE_3__["App"].assets["background.png"].width) / height;
        }
        else {
            nvw = vpw;
            nvh = (nvw * height) / _App__WEBPACK_IMPORTED_MODULE_3__["App"].assets["background.png"].width;
        }
        _App__WEBPACK_IMPORTED_MODULE_3__["App"].renderer.resize(nvw, nvh);
        this._scene.scale.set(nvw / _App__WEBPACK_IMPORTED_MODULE_3__["App"].assets["background.png"].width, nvh / height);
        this._scene.position.x = this._app.view.width / 2;
    }
}
new Main();


/***/ }),

/***/ "./scene/Bird.ts":
/*!***********************!*\
  !*** ./scene/Bird.ts ***!
  \***********************/
/*! exports provided: Bird */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Bird", function() { return Bird; });
/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pixi.js */ "../node_modules/pixi.js/lib/pixi.es.js");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap */ "../node_modules/gsap/index.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../App */ "./App.ts");
/* harmony import */ var _Events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Events */ "./scene/Events.ts");




class Bird extends pixi_js__WEBPACK_IMPORTED_MODULE_0__["AnimatedSprite"] {
    constructor() {
        super(Array.from({ length: 3 }, (_, index) => _App__WEBPACK_IMPORTED_MODULE_2__["App"].assets[`bird-${index}.png`]));
        this._multiplier = 12;
        this._jumpHeight = this.height * 1.8;
        this.anchor.set(0.5);
        this.position.set(-this.width / 2, _App__WEBPACK_IMPORTED_MODULE_2__["App"].assets["background.png"].height / 2);
        this.animationSpeed = 0.1;
        this._upFunctionLink = this.up.bind(this);
        this.startFlight();
        this.createControlEvents();
    }
    startFlight() {
        this.play();
        gsap__WEBPACK_IMPORTED_MODULE_1__["TweenLite"].to(this, 0.4, {
            ease: gsap__WEBPACK_IMPORTED_MODULE_1__["Linear"].easeNone,
            y: `+=${this.height * 0.4}`,
            yoyo: true,
            repeat: -1,
        });
    }
    get vertexArray() {
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore
        return this.vertexData;
    }
    up(event) {
        if (event instanceof KeyboardEvent && event.code !== "Space") {
            return;
        }
        gsap__WEBPACK_IMPORTED_MODULE_1__["gsap"].killTweensOf(this);
        gsap__WEBPACK_IMPORTED_MODULE_1__["TweenLite"].to(this, 0.2, {
            ease: gsap__WEBPACK_IMPORTED_MODULE_1__["Sine"].easeOut,
            y: `-=${this.y > -this.height ? this._jumpHeight : 0}`,
            angle: -20,
            onComplete: () => this.down(),
        });
    }
    down() {
        gsap__WEBPACK_IMPORTED_MODULE_1__["gsap"].killTweensOf(this);
        const timeline = new gsap__WEBPACK_IMPORTED_MODULE_1__["TimelineMax"]();
        const speed = ((_App__WEBPACK_IMPORTED_MODULE_2__["App"].assets["background.png"].height - this.y) / this.height) / this._multiplier;
        const initY = this.y;
        let isComeback = false;
        timeline
            .to(this, speed, {
            ease: gsap__WEBPACK_IMPORTED_MODULE_1__["Sine"].easeIn,
            y: _App__WEBPACK_IMPORTED_MODULE_2__["App"].assets["background.png"].height - this.height / 3,
            onUpdate: () => {
                if (!isComeback && this.y - initY > this._jumpHeight) {
                    isComeback = true;
                    gsap__WEBPACK_IMPORTED_MODULE_1__["TweenLite"].to(this, 0.2, {
                        ease: gsap__WEBPACK_IMPORTED_MODULE_1__["Linear"].easeNone,
                        angle: 90,
                    });
                }
            },
            onComplete: () => {
                if (this.playing) {
                    _App__WEBPACK_IMPORTED_MODULE_2__["App"].emitter.emit(_Events__WEBPACK_IMPORTED_MODULE_3__["GAME_OVER"]);
                    gsap__WEBPACK_IMPORTED_MODULE_1__["gsap"].killTweensOf(this, "angle");
                }
            },
        });
    }
    gameOver() {
        this.stop();
        window.removeEventListener("pointerdown", this._upFunctionLink);
        window.removeEventListener("keydown", this._upFunctionLink);
    }
    createControlEvents() {
        window.addEventListener("pointerdown", this._upFunctionLink);
        window.addEventListener("keydown", this._upFunctionLink);
    }
    restart() {
        gsap__WEBPACK_IMPORTED_MODULE_1__["gsap"].killTweensOf(this);
        this.position.y = _App__WEBPACK_IMPORTED_MODULE_2__["App"].assets["background.png"].height / 2;
        this.angle = 0;
        this.startFlight();
        this.createControlEvents();
    }
}


/***/ }),

/***/ "./scene/Events.ts":
/*!*************************!*\
  !*** ./scene/Events.ts ***!
  \*************************/
/*! exports provided: GAME_OVER, RESTART, INCREASE_POINTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GAME_OVER", function() { return GAME_OVER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESTART", function() { return RESTART; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INCREASE_POINTS", function() { return INCREASE_POINTS; });
const GAME_OVER = Symbol();
const RESTART = Symbol();
const INCREASE_POINTS = Symbol();


/***/ }),

/***/ "./scene/Ground.ts":
/*!*************************!*\
  !*** ./scene/Ground.ts ***!
  \*************************/
/*! exports provided: Ground */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ground", function() { return Ground; });
/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pixi.js */ "../node_modules/pixi.js/lib/pixi.es.js");
/* harmony import */ var gsap_gsap_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap/gsap-core */ "../node_modules/gsap/gsap-core.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../App */ "./App.ts");



class Ground extends pixi_js__WEBPACK_IMPORTED_MODULE_0__["Container"] {
    constructor() {
        super();
        const container = new pixi_js__WEBPACK_IMPORTED_MODULE_0__["Container"]();
        const length = Math.ceil(_App__WEBPACK_IMPORTED_MODULE_2__["App"].assets["background.png"].width / _App__WEBPACK_IMPORTED_MODULE_2__["App"].assets["ground.png"].width);
        Array.from({ length }, (_, index) => {
            const img = new pixi_js__WEBPACK_IMPORTED_MODULE_0__["Sprite"](_App__WEBPACK_IMPORTED_MODULE_2__["App"].assets["ground.png"]);
            img.x = index * _App__WEBPACK_IMPORTED_MODULE_2__["App"].assets["ground.png"].width;
            container.addChild(img);
        });
        const newGroundTexture = new pixi_js__WEBPACK_IMPORTED_MODULE_0__["RenderTexture"](new pixi_js__WEBPACK_IMPORTED_MODULE_0__["BaseRenderTexture"]({
            width: _App__WEBPACK_IMPORTED_MODULE_2__["App"].assets["background.png"].width,
            height: _App__WEBPACK_IMPORTED_MODULE_2__["App"].assets["ground.png"].height,
        }));
        _App__WEBPACK_IMPORTED_MODULE_2__["App"].renderer.render(container, newGroundTexture);
        this._ground = new pixi_js__WEBPACK_IMPORTED_MODULE_0__["TilingSprite"](newGroundTexture, _App__WEBPACK_IMPORTED_MODULE_2__["App"].assets["background.png"].width, _App__WEBPACK_IMPORTED_MODULE_2__["App"].assets["ground.png"].height);
        this._ground.anchor.set(0.5, 0);
        this._ground.y = _App__WEBPACK_IMPORTED_MODULE_2__["App"].assets["background.png"].height;
        this.addChild(this._ground);
        this._tween = gsap_gsap_core__WEBPACK_IMPORTED_MODULE_1__["TweenLite"].to(this._ground, 3, {
            pixi: { tilePositionX: -_App__WEBPACK_IMPORTED_MODULE_2__["App"].assets["background.png"].width - _App__WEBPACK_IMPORTED_MODULE_2__["App"].assets["pipe.png"].width },
            ease: gsap_gsap_core__WEBPACK_IMPORTED_MODULE_1__["Linear"].easeNone,
            repeat: -1,
        });
    }
    gameOver() {
        this._tween.pause();
    }
    restart() {
        this._tween.resume();
    }
}


/***/ }),

/***/ "./scene/Pipe.ts":
/*!***********************!*\
  !*** ./scene/Pipe.ts ***!
  \***********************/
/*! exports provided: Pipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pipe", function() { return Pipe; });
/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pixi.js */ "../node_modules/pixi.js/lib/pixi.es.js");
/* harmony import */ var gsap_gsap_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap/gsap-core */ "../node_modules/gsap/gsap-core.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../App */ "./App.ts");
/* harmony import */ var _Events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Events */ "./scene/Events.ts");
/* harmony import */ var _utils_ConvertArrayToObjectsArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/ConvertArrayToObjectsArray */ "./scene/utils/ConvertArrayToObjectsArray.ts");
/* harmony import */ var _utils_DoPolygonsIntersect__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/DoPolygonsIntersect */ "./scene/utils/DoPolygonsIntersect.ts");






class Pipe extends pixi_js__WEBPACK_IMPORTED_MODULE_0__["Container"] {
    constructor(bird) {
        super();
        this._bird = bird;
        this._gap = _App__WEBPACK_IMPORTED_MODULE_2__["App"].assets["bird-0.png"].height;
        this._pipeMask = this.createMask();
        this._pipeMask.visible = false;
        this.addChild(this._pipeMask);
    }
    createPipeContainer() {
        this._pipeMask.visible = true;
        this._currentPipesContainer = new pixi_js__WEBPACK_IMPORTED_MODULE_0__["Container"]();
        this._currentPipesContainer.x = _App__WEBPACK_IMPORTED_MODULE_2__["App"].assets["background.png"].width / 2 + _App__WEBPACK_IMPORTED_MODULE_2__["App"].assets["pipe.png"].width / 2;
        this.addChild(this._currentPipesContainer);
        const upPipe = new pixi_js__WEBPACK_IMPORTED_MODULE_0__["Sprite"](_App__WEBPACK_IMPORTED_MODULE_2__["App"].assets["pipe.png"]);
        upPipe.anchor.set(0.5, 0);
        upPipe.angle = 180;
        upPipe.y = this.random(this._gap * 2, upPipe.height - this._gap * 4);
        upPipe.mask = this._pipeMask;
        this._currentPipesContainer.addChild(upPipe);
        const downPipe = new pixi_js__WEBPACK_IMPORTED_MODULE_0__["Sprite"](_App__WEBPACK_IMPORTED_MODULE_2__["App"].assets["pipe.png"]);
        downPipe.anchor.set(0.5, 0);
        downPipe.y = upPipe.y + this._gap * 4;
        downPipe.mask = this._pipeMask;
        this._currentPipesContainer.addChild(downPipe);
        let isHalfAnimation = false;
        gsap_gsap_core__WEBPACK_IMPORTED_MODULE_1__["TweenLite"].to(this._currentPipesContainer.children, 3, {
            x: -_App__WEBPACK_IMPORTED_MODULE_2__["App"].assets["background.png"].width - _App__WEBPACK_IMPORTED_MODULE_2__["App"].assets["pipe.png"].width,
            ease: gsap_gsap_core__WEBPACK_IMPORTED_MODULE_1__["Linear"].easeNone,
            onUpdate: () => {
                const progress = gsap_gsap_core__WEBPACK_IMPORTED_MODULE_1__["gsap"].getTweensOf(this._currentPipesContainer.children[0])[0].progress();
                if (!isHalfAnimation && +progress.toFixed(2) === 0.52) {
                    isHalfAnimation = true;
                    this._previousPipesContainer = this._currentPipesContainer;
                    this.createPipeContainer();
                    _App__WEBPACK_IMPORTED_MODULE_2__["App"].emitter.emit(_Events__WEBPACK_IMPORTED_MODULE_3__["INCREASE_POINTS"]);
                }
                let collisionArray = [...this._currentPipesContainer.children];
                if (this._previousPipesContainer) {
                    collisionArray = [...collisionArray, ...this._previousPipesContainer.children];
                }
                // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
                // @ts-ignore
                const vertexArray = collisionArray.map(sprite => sprite.vertexData);
                this.checkCollision(vertexArray) && _App__WEBPACK_IMPORTED_MODULE_2__["App"].emitter.emit(_Events__WEBPACK_IMPORTED_MODULE_3__["GAME_OVER"]);
            },
            onComplete: () => this._previousPipesContainer.destroy(),
        });
    }
    startMovement() {
        this._pipesCreateTimeout = window.setTimeout((this.createPipeContainer.bind(this)), 3500);
    }
    gameOver() {
        var _a, _b;
        gsap_gsap_core__WEBPACK_IMPORTED_MODULE_1__["gsap"].killTweensOf((_a = this._currentPipesContainer) === null || _a === void 0 ? void 0 : _a.children);
        gsap_gsap_core__WEBPACK_IMPORTED_MODULE_1__["gsap"].killTweensOf((_b = this._previousPipesContainer) === null || _b === void 0 ? void 0 : _b.children);
        clearTimeout(this._pipesCreateTimeout);
    }
    restart() {
        var _a, _b;
        (_a = this._currentPipesContainer) === null || _a === void 0 ? void 0 : _a.destroy();
        (_b = this._previousPipesContainer) === null || _b === void 0 ? void 0 : _b.destroy();
    }
    checkCollision(spritesVertexArray) {
        return spritesVertexArray.some(vertexArray => {
            return Object(_utils_DoPolygonsIntersect__WEBPACK_IMPORTED_MODULE_5__["doPolygonsIntersect"])(Object(_utils_ConvertArrayToObjectsArray__WEBPACK_IMPORTED_MODULE_4__["convertArrayToObjectsArray"])(this._bird.vertexArray), Object(_utils_ConvertArrayToObjectsArray__WEBPACK_IMPORTED_MODULE_4__["convertArrayToObjectsArray"])(vertexArray));
        });
    }
    createMask() {
        return new pixi_js__WEBPACK_IMPORTED_MODULE_0__["Graphics"]()
            .beginFill(0xFFF)
            .drawRect(-_App__WEBPACK_IMPORTED_MODULE_2__["App"].assets["background.png"].width / 2, 0, _App__WEBPACK_IMPORTED_MODULE_2__["App"].assets["background.png"].width, _App__WEBPACK_IMPORTED_MODULE_2__["App"].assets["background.png"].height)
            .endFill();
    }
    random(min, max) {
        return Math.floor(min + Math.random() * (max + 1 - min));
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
/* harmony import */ var _Ground__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Ground */ "./scene/Ground.ts");
/* harmony import */ var _Pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Pipe */ "./scene/Pipe.ts");
/* harmony import */ var _Bird__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Bird */ "./scene/Bird.ts");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../App */ "./App.ts");
/* harmony import */ var _UI_Menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./UI/Menu */ "./scene/UI/Menu.ts");
/* harmony import */ var _UI_ScorePointsText__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./UI/ScorePointsText */ "./scene/UI/ScorePointsText.ts");
/* harmony import */ var _Events__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Events */ "./scene/Events.ts");








class Scene extends pixi_js__WEBPACK_IMPORTED_MODULE_0__["Container"] {
    constructor() {
        super();
        this.interactive = true;
        this._bg = new pixi_js__WEBPACK_IMPORTED_MODULE_0__["Sprite"](_App__WEBPACK_IMPORTED_MODULE_4__["App"].assets["background.png"]);
        this._bg.anchor.set(0.5, 0);
        this.addChild(this._bg);
        this._bird = new _Bird__WEBPACK_IMPORTED_MODULE_3__["Bird"]();
        this._pipe = new _Pipe__WEBPACK_IMPORTED_MODULE_2__["Pipe"](this._bird);
        this.addChild(this._pipe, this._bird);
        this._ground = new _Ground__WEBPACK_IMPORTED_MODULE_1__["Ground"]();
        this.addChild(this._ground);
        this._currentPoints = new _UI_ScorePointsText__WEBPACK_IMPORTED_MODULE_6__["ScorePointsText"](70);
        this._currentPoints.y = _App__WEBPACK_IMPORTED_MODULE_4__["App"].assets["background.png"].height * 0.15;
        this._currentPoints.visible = false;
        this.addChild(this._currentPoints);
        _App__WEBPACK_IMPORTED_MODULE_4__["App"].emitter.on(_Events__WEBPACK_IMPORTED_MODULE_7__["INCREASE_POINTS"], this.increasePoints.bind(this));
        _App__WEBPACK_IMPORTED_MODULE_4__["App"].emitter.on(_Events__WEBPACK_IMPORTED_MODULE_7__["GAME_OVER"], this.gameOver.bind(this));
        _App__WEBPACK_IMPORTED_MODULE_4__["App"].emitter.on(_Events__WEBPACK_IMPORTED_MODULE_7__["RESTART"], this.restart.bind(this));
        this._startGameFunctionLink = this.startGame.bind(this);
        this.createStartEvents();
    }
    increasePoints() {
        this._currentPoints.text = `${+this._currentPoints.text + 1}`;
    }
    gameOver() {
        this.addChild(new _UI_Menu__WEBPACK_IMPORTED_MODULE_5__["Menu"](this._currentPoints.text, `${Math.max(+localStorage.getItem("record"), +this._currentPoints.text)}`));
        if (+this._currentPoints.text > +localStorage.getItem("record")) {
            localStorage.setItem("record", this._currentPoints.text);
        }
        this._currentPoints.visible = false;
        [this._bird, this._pipe, this._ground].forEach(item => item.gameOver());
    }
    restart() {
        [this._bird, this._pipe, this._ground].forEach(item => item.restart());
        this._currentPoints.text = "0";
        this.createStartEvents();
    }
    startGame(event) {
        if (event instanceof KeyboardEvent && event.code !== "Space") {
            return;
        }
        this._currentPoints.visible = true;
        this._pipe.startMovement();
        window.removeEventListener("keydown", this._startGameFunctionLink);
        window.removeEventListener("pointerdown", this._startGameFunctionLink);
    }
    createStartEvents() {
        window.addEventListener("keydown", this._startGameFunctionLink);
        window.addEventListener("pointerdown", this._startGameFunctionLink);
    }
}


/***/ }),

/***/ "./scene/UI/Menu.ts":
/*!**************************!*\
  !*** ./scene/UI/Menu.ts ***!
  \**************************/
/*! exports provided: Menu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Menu", function() { return Menu; });
/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pixi.js */ "../node_modules/pixi.js/lib/pixi.es.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../App */ "./App.ts");
/* harmony import */ var _ScorePointsText__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ScorePointsText */ "./scene/UI/ScorePointsText.ts");
/* harmony import */ var _Events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Events */ "./scene/Events.ts");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gsap */ "../node_modules/gsap/index.js");





class Menu extends pixi_js__WEBPACK_IMPORTED_MODULE_0__["Container"] {
    constructor(_currentPointsText, _recordPointsText) {
        super();
        this._currentPointsText = _currentPointsText;
        this._recordPointsText = _recordPointsText;
        this._scoreboard = new pixi_js__WEBPACK_IMPORTED_MODULE_0__["Sprite"](_App__WEBPACK_IMPORTED_MODULE_1__["App"].assets["score.png"]);
        this._scoreboard.anchor.set(0.5, 1);
        this._scoreboard.y = _App__WEBPACK_IMPORTED_MODULE_1__["App"].assets["background.png"].height * 0.55;
        this.addChild(this._scoreboard);
        this._restartButton = new pixi_js__WEBPACK_IMPORTED_MODULE_0__["Sprite"](_App__WEBPACK_IMPORTED_MODULE_1__["App"].assets["restart.png"]);
        this._restartButton.anchor.set(0.5, 0);
        this._restartButton.y = this._scoreboard.y + this._restartButton.height * 0.6;
        this._restartButton.interactive = true;
        this._restartButton.buttonMode = true;
        this.addChild(this._restartButton);
        this._currentPoints = new _ScorePointsText__WEBPACK_IMPORTED_MODULE_2__["ScorePointsText"](50, this._currentPointsText);
        this._currentPoints.anchor.y = 1;
        this._currentPoints.y = this._scoreboard.y - this._scoreboard.height * 0.47;
        this.addChild(this._currentPoints);
        this._recordOfScoredPoints = new _ScorePointsText__WEBPACK_IMPORTED_MODULE_2__["ScorePointsText"](50, this._recordPointsText);
        this._recordOfScoredPoints.y = _App__WEBPACK_IMPORTED_MODULE_1__["App"].assets["background.png"].height * 0.49;
        this.addChild(this._recordOfScoredPoints);
        this._restartFunctionLink = this.restart.bind(this);
        gsap__WEBPACK_IMPORTED_MODULE_4__["TweenLite"].fromTo(this, 0.5, { y: "-=100" }, { y: "+=100", onComplete: () => this.createControlEvents() });
    }
    createControlEvents() {
        window.addEventListener("keydown", this._restartFunctionLink);
        this._restartButton.once("pointerdown", this._restartFunctionLink);
    }
    restart(event) {
        if (event instanceof KeyboardEvent && event.code !== "Space") {
            return;
        }
        _App__WEBPACK_IMPORTED_MODULE_1__["App"].emitter.emit(_Events__WEBPACK_IMPORTED_MODULE_3__["RESTART"]);
        window.removeEventListener("keydown", this._restartFunctionLink);
        this.destroy();
    }
}


/***/ }),

/***/ "./scene/UI/ScorePointsText.ts":
/*!*************************************!*\
  !*** ./scene/UI/ScorePointsText.ts ***!
  \*************************************/
/*! exports provided: ScorePointsText */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScorePointsText", function() { return ScorePointsText; });
/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pixi.js */ "../node_modules/pixi.js/lib/pixi.es.js");

class ScorePointsText extends pixi_js__WEBPACK_IMPORTED_MODULE_0__["Text"] {
    constructor(fontSize, text = "0") {
        super(text, {
            fontFamily: "FB",
            fontSize,
            fill: 0xFFFFFF,
            stroke: 0x000000,
            strokeThickness: 10,
        });
        this.fontSize = fontSize;
        this.text = text;
        this.anchor.set(0.5);
    }
}


/***/ }),

/***/ "./scene/utils/ConvertArrayToObjectsArray.ts":
/*!***************************************************!*\
  !*** ./scene/utils/ConvertArrayToObjectsArray.ts ***!
  \***************************************************/
/*! exports provided: convertArrayToObjectsArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertArrayToObjectsArray", function() { return convertArrayToObjectsArray; });
const convertArrayToObjectsArray = (array) => {
    return array.reduce((acc, item, index) => {
        if (index % 2 !== 0) {
            acc[acc.length - 1].y = item;
            return [...acc];
        }
        else {
            return [...acc, { x: item }];
        }
    }, []);
};


/***/ }),

/***/ "./scene/utils/DoPolygonsIntersect.ts":
/*!********************************************!*\
  !*** ./scene/utils/DoPolygonsIntersect.ts ***!
  \********************************************/
/*! exports provided: doPolygonsIntersect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doPolygonsIntersect", function() { return doPolygonsIntersect; });
const doPolygonsIntersect = (a, b) => {
    const polygons = [a, b];
    let minA, maxA, projected, j, minB, maxB;
    for (let i = 0; i < polygons.length; i++) {
        const polygon = polygons[i];
        for (let i1 = 0; i1 < polygon.length; i1++) {
            const i2 = (i1 + 1) % polygon.length;
            const p1 = polygon[i1];
            const p2 = polygon[i2];
            const normal = { x: p2.y - p1.y, y: p1.x - p2.x };
            minA = undefined;
            maxA = undefined;
            for (j = 0; j < a.length; j++) {
                projected = normal.x * a[j].x + normal.y * a[j].y;
                if (minA === undefined || projected < minA) {
                    minA = projected;
                }
                if (maxA === undefined || projected > maxA) {
                    maxA = projected;
                }
            }
            minB = undefined;
            maxB = undefined;
            for (j = 0; j < b.length; j++) {
                projected = normal.x * b[j].x + normal.y * b[j].y;
                if (minB === undefined || projected < minB) {
                    minB = projected;
                }
                if (maxB === undefined || projected > maxB) {
                    maxB = projected;
                }
            }
            if (maxA < minB || maxB < minA) {
                return false;
            }
        }
    }
    return true;
};


/***/ }),

/***/ "./webfont.js":
/*!********************!*\
  !*** ./webfont.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*
 * Copyright 2016 Small Batch, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */
/* Web Font Loader v1.6.26 - (c) Adobe Systems, Google. License: Apache 2.0 */(function(){function aa(a,b,c){return a.call.apply(a.bind,arguments)}function ba(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function p(a,b,c){p=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?aa:ba;return p.apply(null,arguments)}var q=Date.now||function(){return+new Date};function ca(a,b){this.a=a;this.m=b||a;this.c=this.m.document}var da=!!window.FontFace;function t(a,b,c,d){b=a.c.createElement(b);if(c)for(var e in c)c.hasOwnProperty(e)&&("style"==e?b.style.cssText=c[e]:b.setAttribute(e,c[e]));d&&b.appendChild(a.c.createTextNode(d));return b}function u(a,b,c){a=a.c.getElementsByTagName(b)[0];a||(a=document.documentElement);a.insertBefore(c,a.lastChild)}function v(a){a.parentNode&&a.parentNode.removeChild(a)}
function w(a,b,c){b=b||[];c=c||[];for(var d=a.className.split(/\s+/),e=0;e<b.length;e+=1){for(var f=!1,g=0;g<d.length;g+=1)if(b[e]===d[g]){f=!0;break}f||d.push(b[e])}b=[];for(e=0;e<d.length;e+=1){f=!1;for(g=0;g<c.length;g+=1)if(d[e]===c[g]){f=!0;break}f||b.push(d[e])}a.className=b.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function y(a,b){for(var c=a.className.split(/\s+/),d=0,e=c.length;d<e;d++)if(c[d]==b)return!0;return!1}
function z(a){if("string"===typeof a.f)return a.f;var b=a.m.location.protocol;"about:"==b&&(b=a.a.location.protocol);return"https:"==b?"https:":"http:"}function ea(a){return a.m.location.hostname||a.a.location.hostname}
function A(a,b,c){function d(){k&&e&&f&&(k(g),k=null)}b=t(a,"link",{rel:"stylesheet",href:b,media:"all"});var e=!1,f=!0,g=null,k=c||null;da?(b.onload=function(){e=!0;d()},b.onerror=function(){e=!0;g=Error("Stylesheet failed to load");d()}):setTimeout(function(){e=!0;d()},0);u(a,"head",b)}
function B(a,b,c,d){var e=a.c.getElementsByTagName("head")[0];if(e){var f=t(a,"script",{src:b}),g=!1;f.onload=f.onreadystatechange=function(){g||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(g=!0,c&&c(null),f.onload=f.onreadystatechange=null,"HEAD"==f.parentNode.tagName&&e.removeChild(f))};e.appendChild(f);setTimeout(function(){g||(g=!0,c&&c(Error("Script load timeout")))},d||5E3);return f}return null};function C(){this.a=0;this.c=null}function D(a){a.a++;return function(){a.a--;E(a)}}function F(a,b){a.c=b;E(a)}function E(a){0==a.a&&a.c&&(a.c(),a.c=null)};function G(a){this.a=a||"-"}G.prototype.c=function(a){for(var b=[],c=0;c<arguments.length;c++)b.push(arguments[c].replace(/[\W_]+/g,"").toLowerCase());return b.join(this.a)};function H(a,b){this.c=a;this.f=4;this.a="n";var c=(b||"n4").match(/^([nio])([1-9])$/i);c&&(this.a=c[1],this.f=parseInt(c[2],10))}function fa(a){return I(a)+" "+(a.f+"00")+" 300px "+J(a.c)}function J(a){var b=[];a=a.split(/,\s*/);for(var c=0;c<a.length;c++){var d=a[c].replace(/['"]/g,"");-1!=d.indexOf(" ")||/^\d/.test(d)?b.push("'"+d+"'"):b.push(d)}return b.join(",")}function K(a){return a.a+a.f}function I(a){var b="normal";"o"===a.a?b="oblique":"i"===a.a&&(b="italic");return b}
function ga(a){var b=4,c="n",d=null;a&&((d=a.match(/(normal|oblique|italic)/i))&&d[1]&&(c=d[1].substr(0,1).toLowerCase()),(d=a.match(/([1-9]00|normal|bold)/i))&&d[1]&&(/bold/i.test(d[1])?b=7:/[1-9]00/.test(d[1])&&(b=parseInt(d[1].substr(0,1),10))));return c+b};function ha(a,b){this.c=a;this.f=a.m.document.documentElement;this.h=b;this.a=new G("-");this.j=!1!==b.events;this.g=!1!==b.classes}function ia(a){a.g&&w(a.f,[a.a.c("wf","loading")]);L(a,"loading")}function M(a){if(a.g){var b=y(a.f,a.a.c("wf","active")),c=[],d=[a.a.c("wf","loading")];b||c.push(a.a.c("wf","inactive"));w(a.f,c,d)}L(a,"inactive")}function L(a,b,c){if(a.j&&a.h[b])if(c)a.h[b](c.c,K(c));else a.h[b]()};function ja(){this.c={}}function ka(a,b,c){var d=[],e;for(e in b)if(b.hasOwnProperty(e)){var f=a.c[e];f&&d.push(f(b[e],c))}return d};function N(a,b){this.c=a;this.f=b;this.a=t(this.c,"span",{"aria-hidden":"true"},this.f)}function O(a){u(a.c,"body",a.a)}function P(a){return"display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+J(a.c)+";"+("font-style:"+I(a)+";font-weight:"+(a.f+"00")+";")};function Q(a,b,c,d,e,f){this.g=a;this.j=b;this.a=d;this.c=c;this.f=e||3E3;this.h=f||void 0}Q.prototype.start=function(){var a=this.c.m.document,b=this,c=q(),d=new Promise(function(d,e){function k(){q()-c>=b.f?e():a.fonts.load(fa(b.a),b.h).then(function(a){1<=a.length?d():setTimeout(k,25)},function(){e()})}k()}),e=new Promise(function(a,d){setTimeout(d,b.f)});Promise.race([e,d]).then(function(){b.g(b.a)},function(){b.j(b.a)})};function R(a,b,c,d,e,f,g){this.v=a;this.B=b;this.c=c;this.a=d;this.s=g||"BESbswy";this.f={};this.w=e||3E3;this.u=f||null;this.o=this.j=this.h=this.g=null;this.g=new N(this.c,this.s);this.h=new N(this.c,this.s);this.j=new N(this.c,this.s);this.o=new N(this.c,this.s);a=new H(this.a.c+",serif",K(this.a));a=P(a);this.g.a.style.cssText=a;a=new H(this.a.c+",sans-serif",K(this.a));a=P(a);this.h.a.style.cssText=a;a=new H("serif",K(this.a));a=P(a);this.j.a.style.cssText=a;a=new H("sans-serif",K(this.a));a=
P(a);this.o.a.style.cssText=a;O(this.g);O(this.h);O(this.j);O(this.o)}var S={D:"serif",C:"sans-serif"},T=null;function U(){if(null===T){var a=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);T=!!a&&(536>parseInt(a[1],10)||536===parseInt(a[1],10)&&11>=parseInt(a[2],10))}return T}R.prototype.start=function(){this.f.serif=this.j.a.offsetWidth;this.f["sans-serif"]=this.o.a.offsetWidth;this.A=q();la(this)};
function ma(a,b,c){for(var d in S)if(S.hasOwnProperty(d)&&b===a.f[S[d]]&&c===a.f[S[d]])return!0;return!1}function la(a){var b=a.g.a.offsetWidth,c=a.h.a.offsetWidth,d;(d=b===a.f.serif&&c===a.f["sans-serif"])||(d=U()&&ma(a,b,c));d?q()-a.A>=a.w?U()&&ma(a,b,c)&&(null===a.u||a.u.hasOwnProperty(a.a.c))?V(a,a.v):V(a,a.B):na(a):V(a,a.v)}function na(a){setTimeout(p(function(){la(this)},a),50)}function V(a,b){setTimeout(p(function(){v(this.g.a);v(this.h.a);v(this.j.a);v(this.o.a);b(this.a)},a),0)};function W(a,b,c){this.c=a;this.a=b;this.f=0;this.o=this.j=!1;this.s=c}var X=null;W.prototype.g=function(a){var b=this.a;b.g&&w(b.f,[b.a.c("wf",a.c,K(a).toString(),"active")],[b.a.c("wf",a.c,K(a).toString(),"loading"),b.a.c("wf",a.c,K(a).toString(),"inactive")]);L(b,"fontactive",a);this.o=!0;oa(this)};
W.prototype.h=function(a){var b=this.a;if(b.g){var c=y(b.f,b.a.c("wf",a.c,K(a).toString(),"active")),d=[],e=[b.a.c("wf",a.c,K(a).toString(),"loading")];c||d.push(b.a.c("wf",a.c,K(a).toString(),"inactive"));w(b.f,d,e)}L(b,"fontinactive",a);oa(this)};function oa(a){0==--a.f&&a.j&&(a.o?(a=a.a,a.g&&w(a.f,[a.a.c("wf","active")],[a.a.c("wf","loading"),a.a.c("wf","inactive")]),L(a,"active")):M(a.a))};function pa(a){this.j=a;this.a=new ja;this.h=0;this.f=this.g=!0}pa.prototype.load=function(a){this.c=new ca(this.j,a.context||this.j);this.g=!1!==a.events;this.f=!1!==a.classes;qa(this,new ha(this.c,a),a)};
function ra(a,b,c,d,e){var f=0==--a.h;(a.f||a.g)&&setTimeout(function(){var a=e||null,k=d||null||{};if(0===c.length&&f)M(b.a);else{b.f+=c.length;f&&(b.j=f);var h,m=[];for(h=0;h<c.length;h++){var l=c[h],n=k[l.c],r=b.a,x=l;r.g&&w(r.f,[r.a.c("wf",x.c,K(x).toString(),"loading")]);L(r,"fontloading",x);r=null;null===X&&(X=window.FontFace?(x=/Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent))?42<parseInt(x[1],10):!0:!1);X?r=new Q(p(b.g,b),p(b.h,b),b.c,l,b.s,n):r=new R(p(b.g,b),p(b.h,b),b.c,l,b.s,a,
n);m.push(r)}for(h=0;h<m.length;h++)m[h].start()}},0)}function qa(a,b,c){var d=[],e=c.timeout;ia(b);var d=ka(a.a,c,a.c),f=new W(a.c,b,e);a.h=d.length;b=0;for(c=d.length;b<c;b++)d[b].load(function(b,d,c){ra(a,f,b,d,c)})};function sa(a,b){this.c=a;this.a=b}function ta(a,b,c){var d=z(a.c);a=(a.a.api||"fast.fonts.net/jsapi").replace(/^.*http(s?):(\/\/)?/,"");return d+"//"+a+"/"+b+".js"+(c?"?v="+c:"")}
sa.prototype.load=function(a){function b(){if(f["__mti_fntLst"+d]){var c=f["__mti_fntLst"+d](),e=[],h;if(c)for(var m=0;m<c.length;m++){var l=c[m].fontfamily;void 0!=c[m].fontStyle&&void 0!=c[m].fontWeight?(h=c[m].fontStyle+c[m].fontWeight,e.push(new H(l,h))):e.push(new H(l))}a(e)}else setTimeout(function(){b()},50)}var c=this,d=c.a.projectId,e=c.a.version;if(d){var f=c.c.m;B(this.c,ta(c,d,e),function(e){e?a([]):(f["__MonotypeConfiguration__"+d]=function(){return c.a},b())}).id="__MonotypeAPIScript__"+
d}else a([])};function ua(a,b){this.c=a;this.a=b}ua.prototype.load=function(a){var b,c,d=this.a.urls||[],e=this.a.families||[],f=this.a.testStrings||{},g=new C;b=0;for(c=d.length;b<c;b++)A(this.c,d[b],D(g));var k=[];b=0;for(c=e.length;b<c;b++)if(d=e[b].split(":"),d[1])for(var h=d[1].split(","),m=0;m<h.length;m+=1)k.push(new H(d[0],h[m]));else k.push(new H(d[0]));F(g,function(){a(k,f)})};function va(a,b,c){a?this.c=a:this.c=b+wa;this.a=[];this.f=[];this.g=c||""}var wa="//fonts.googleapis.com/css";function xa(a,b){for(var c=b.length,d=0;d<c;d++){var e=b[d].split(":");3==e.length&&a.f.push(e.pop());var f="";2==e.length&&""!=e[1]&&(f=":");a.a.push(e.join(f))}}
function ya(a){if(0==a.a.length)throw Error("No fonts to load!");if(-1!=a.c.indexOf("kit="))return a.c;for(var b=a.a.length,c=[],d=0;d<b;d++)c.push(a.a[d].replace(/ /g,"+"));b=a.c+"?family="+c.join("%7C");0<a.f.length&&(b+="&subset="+a.f.join(","));0<a.g.length&&(b+="&text="+encodeURIComponent(a.g));return b};function za(a){this.f=a;this.a=[];this.c={}}
var Aa={latin:"BESbswy","latin-ext":"\u00e7\u00f6\u00fc\u011f\u015f",cyrillic:"\u0439\u044f\u0416",greek:"\u03b1\u03b2\u03a3",khmer:"\u1780\u1781\u1782",Hanuman:"\u1780\u1781\u1782"},Ba={thin:"1",extralight:"2","extra-light":"2",ultralight:"2","ultra-light":"2",light:"3",regular:"4",book:"4",medium:"5","semi-bold":"6",semibold:"6","demi-bold":"6",demibold:"6",bold:"7","extra-bold":"8",extrabold:"8","ultra-bold":"8",ultrabold:"8",black:"9",heavy:"9",l:"3",r:"4",b:"7"},Ca={i:"i",italic:"i",n:"n",normal:"n"},
Da=/^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;
function Ea(a){for(var b=a.f.length,c=0;c<b;c++){var d=a.f[c].split(":"),e=d[0].replace(/\+/g," "),f=["n4"];if(2<=d.length){var g;var k=d[1];g=[];if(k)for(var k=k.split(","),h=k.length,m=0;m<h;m++){var l;l=k[m];if(l.match(/^[\w-]+$/)){var n=Da.exec(l.toLowerCase());if(null==n)l="";else{l=n[2];l=null==l||""==l?"n":Ca[l];n=n[1];if(null==n||""==n)n="4";else var r=Ba[n],n=r?r:isNaN(n)?"4":n.substr(0,1);l=[l,n].join("")}}else l="";l&&g.push(l)}0<g.length&&(f=g);3==d.length&&(d=d[2],g=[],d=d?d.split(","):
g,0<d.length&&(d=Aa[d[0]])&&(a.c[e]=d))}a.c[e]||(d=Aa[e])&&(a.c[e]=d);for(d=0;d<f.length;d+=1)a.a.push(new H(e,f[d]))}};function Fa(a,b){this.c=a;this.a=b}var Ga={Arimo:!0,Cousine:!0,Tinos:!0};Fa.prototype.load=function(a){var b=new C,c=this.c,d=new va(this.a.api,z(c),this.a.text),e=this.a.families;xa(d,e);var f=new za(e);Ea(f);A(c,ya(d),D(b));F(b,function(){a(f.a,f.c,Ga)})};function Ha(a,b){this.c=a;this.a=b}Ha.prototype.load=function(a){var b=this.a.id,c=this.c.m;b?B(this.c,(this.a.api||"https://use.typekit.net")+"/"+b+".js",function(b){if(b)a([]);else if(c.Typekit&&c.Typekit.config&&c.Typekit.config.fn){b=c.Typekit.config.fn;for(var e=[],f=0;f<b.length;f+=2)for(var g=b[f],k=b[f+1],h=0;h<k.length;h++)e.push(new H(g,k[h]));try{c.Typekit.load({events:!1,classes:!1,async:!0})}catch(m){}a(e)}},2E3):a([])};function Ia(a,b){this.c=a;this.f=b;this.a=[]}Ia.prototype.load=function(a){var b=this.f.id,c=this.c.m,d=this;b?(c.__webfontfontdeckmodule__||(c.__webfontfontdeckmodule__={}),c.__webfontfontdeckmodule__[b]=function(b,c){for(var g=0,k=c.fonts.length;g<k;++g){var h=c.fonts[g];d.a.push(new H(h.name,ga("font-weight:"+h.weight+";font-style:"+h.style)))}a(d.a)},B(this.c,z(this.c)+(this.f.api||"//f.fontdeck.com/s/css/js/")+ea(this.c)+"/"+b+".js",function(b){b&&a([])})):a([])};var Y=new pa(window);Y.a.c.custom=function(a,b){return new ua(b,a)};Y.a.c.fontdeck=function(a,b){return new Ia(b,a)};Y.a.c.monotype=function(a,b){return new sa(b,a)};Y.a.c.typekit=function(a,b){return new Ha(b,a)};Y.a.c.google=function(a,b){return new Fa(b,a)};var Z={load:p(Y.load,Y)}; true?!(__WEBPACK_AMD_DEFINE_RESULT__ = (function(){return Z}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):undefined;}());


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vQXBwLnRzIiwid2VicGFjazovLy8uL01haW4udHMiLCJ3ZWJwYWNrOi8vLy4vc2NlbmUvQmlyZC50cyIsIndlYnBhY2s6Ly8vLi9zY2VuZS9FdmVudHMudHMiLCJ3ZWJwYWNrOi8vLy4vc2NlbmUvR3JvdW5kLnRzIiwid2VicGFjazovLy8uL3NjZW5lL1BpcGUudHMiLCJ3ZWJwYWNrOi8vLy4vc2NlbmUvU2NlbmUudHMiLCJ3ZWJwYWNrOi8vLy4vc2NlbmUvVUkvTWVudS50cyIsIndlYnBhY2s6Ly8vLi9zY2VuZS9VSS9TY29yZVBvaW50c1RleHQudHMiLCJ3ZWJwYWNrOi8vLy4vc2NlbmUvdXRpbHMvQ29udmVydEFycmF5VG9PYmplY3RzQXJyYXkudHMiLCJ3ZWJwYWNrOi8vLy4vc2NlbmUvdXRpbHMvRG9Qb2x5Z29uc0ludGVyc2VjdC50cyIsIndlYnBhY2s6Ly8vLi93ZWJmb250LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLFFBQVEsb0JBQW9CO1FBQzVCO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsaUJBQWlCLDRCQUE0QjtRQUM3QztRQUNBO1FBQ0Esa0JBQWtCLDJCQUEyQjtRQUM3QztRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtR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dXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJtYWluXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goW1wiLi9NYWluLnRzXCIsXCJ2ZW5kb3Jzfm1haW5cIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJpbXBvcnQgeyBBcHBsaWNhdGlvbiwgTG9hZGVyUmVzb3VyY2UsIHV0aWxzIH0gZnJvbSBcInBpeGkuanNcIjtcclxuaW1wb3J0IFdlYkZvbnQgZnJvbSBcIi4vd2ViZm9udFwiO1xyXG5cclxuY2xhc3MgQXBwIGV4dGVuZHMgQXBwbGljYXRpb24ge1xyXG5cdHByaXZhdGUgc3RhdGljIF9hc3NldHM6IFBhcnRpYWw8UmVjb3JkPHN0cmluZywgTG9hZGVyUmVzb3VyY2U+PjtcclxuXHRwcml2YXRlIHN0YXRpYyBfcmVuZGVyZXI6IFBJWEkuUmVuZGVyZXI7XHJcblx0cHJpdmF0ZSBzdGF0aWMgX2VtaXR0ZXI6IFBJWEkudXRpbHMuRXZlbnRFbWl0dGVyO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihvcHRpb25zOiBhbnkpIHtcclxuXHRcdHN1cGVyKG9wdGlvbnMpO1xyXG5cclxuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjb250ZXh0bWVudVwiLCBlID0+IGUucHJldmVudERlZmF1bHQoKSk7XHJcblx0XHRkb2N1bWVudC5ib2R5LmFwcGVuZCh0aGlzLnZpZXcpO1xyXG5cclxuXHRcdHRoaXMuc3RhZ2UuaW50ZXJhY3RpdmUgPSB0cnVlO1xyXG5cdFx0dGhpcy5pbml0KCk7XHJcblx0XHR0aGlzLnN0YXJ0KCk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGluaXQoKSB7XHJcblx0XHRBcHAuX3JlbmRlcmVyID0gdGhpcy5yZW5kZXJlcjtcclxuXHRcdEFwcC5fZW1pdHRlciA9IG5ldyB1dGlscy5FdmVudEVtaXR0ZXIoKTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBhc3luYyB1cGxvYWRSZXNvdXJjZXMoKSB7XHJcblx0XHRhd2FpdCB0aGlzLmxvYWRQaWN0dXJlcygpO1xyXG5cdFx0YXdhaXQgdGhpcy5sb2FkRm9udHMoKTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgYXN5bmMgbG9hZFBpY3R1cmVzKCkge1xyXG5cdFx0QXBwLl9hc3NldHMgPSBhd2FpdCBuZXcgUHJvbWlzZTxQYXJ0aWFsPFJlY29yZDxzdHJpbmcsIExvYWRlclJlc291cmNlPj4+KHJlc29sdmUgPT4ge1xyXG5cdFx0XHR0aGlzLmxvYWRlclxyXG5cdFx0XHRcdC5hZGQoXCJzcHJpdGVzXCIsIFwiYXNzZXRzL3Nwcml0ZXMuanNvblwiKVxyXG5cdFx0XHRcdC5sb2FkKCh7IHJlc291cmNlcyB9KSA9PiByZXNvbHZlKHJlc291cmNlcykpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGxvYWRGb250cygpIHtcclxuXHRcdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG5cdFx0XHRXZWJGb250LmxvYWQoe1xyXG5cdFx0XHRcdGN1c3RvbToge1xyXG5cdFx0XHRcdFx0ZmFtaWxpZXM6IFtcIkZCXCJdLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0YWN0aXZlOiByZXNvbHZlLFxyXG5cdFx0XHR9KTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHN0YXRpYyBnZXQgYXNzZXRzKCk6IHsgW2tleTogc3RyaW5nXTogUElYSS5UZXh0dXJlIH0ge1xyXG5cdFx0cmV0dXJuIHRoaXMuX2Fzc2V0cy5zcHJpdGVzLnRleHR1cmVzO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHN0YXRpYyBnZXQgcmVuZGVyZXIoKTogUElYSS5SZW5kZXJlciB7XHJcblx0XHRyZXR1cm4gdGhpcy5fcmVuZGVyZXI7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc3RhdGljIGdldCBlbWl0dGVyKCk6IFBJWEkudXRpbHMuRXZlbnRFbWl0dGVyIHtcclxuXHRcdHJldHVybiB0aGlzLl9lbWl0dGVyO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IHsgQXBwIH07XHJcblxyXG4iLCJpbXBvcnQgKiBhcyBQSVhJIGZyb20gXCJwaXhpLmpzXCI7XHJcbmltcG9ydCB7IGdzYXAgfSBmcm9tIFwiZ3NhcFwiO1xyXG5pbXBvcnQgeyBQaXhpUGx1Z2luIH0gZnJvbSBcImdzYXAvUGl4aVBsdWdpblwiO1xyXG5pbXBvcnQgeyBBcHAgfSBmcm9tIFwiLi9BcHBcIjtcclxuaW1wb3J0IHsgU2NlbmUgfSBmcm9tIFwiLi9zY2VuZS9TY2VuZVwiO1xyXG5cclxuY2xhc3MgTWFpbiB7XHJcblx0cHJpdmF0ZSByZWFkb25seSBfYXBwOiBBcHA7XHJcblx0cHJpdmF0ZSBfc2NlbmU6IFNjZW5lO1xyXG5cclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHRoaXMuX2FwcCA9IG5ldyBBcHAoe1xyXG5cdFx0XHR3aWR0aDogd2luZG93LmlubmVyV2lkdGgsXHJcblx0XHRcdGhlaWdodDogd2luZG93LmlubmVySGVpZ2h0LFxyXG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IDB4MTA5OWJiLFxyXG5cdFx0XHRyZXNvbHV0aW9uOiAxLFxyXG5cdFx0XHRyZXNpemVUbzogd2luZG93LFxyXG5cdFx0fSk7XHJcblxyXG5cdFx0UGl4aVBsdWdpbi5yZWdpc3RlclBJWEkoUElYSSk7XHJcblx0XHRnc2FwLnJlZ2lzdGVyUGx1Z2luKFBpeGlQbHVnaW4pO1xyXG5cclxuXHRcdHRoaXMuX2FwcC51cGxvYWRSZXNvdXJjZXMoKS50aGVuKHRoaXMuaW5pdC5iaW5kKHRoaXMpKTtcclxuXHJcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB0aGlzLnJlZnJlc2hTaXplLmJpbmQodGhpcykpO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBpbml0KCkge1xyXG5cdFx0dGhpcy5fc2NlbmUgPSBuZXcgU2NlbmUoKTtcclxuXHRcdHRoaXMuX2FwcC5zdGFnZS5hZGRDaGlsZCh0aGlzLl9zY2VuZSk7XHJcblx0XHR0aGlzLnJlZnJlc2hTaXplKCk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIHJlZnJlc2hTaXplKCk6IHZvaWQge1xyXG5cdFx0Y29uc3QgaGVpZ2h0ID0gQXBwLmFzc2V0c1tcImJhY2tncm91bmQucG5nXCJdLmhlaWdodCArIEFwcC5hc3NldHNbXCJncm91bmQucG5nXCJdLmhlaWdodDtcclxuXHJcblx0XHRjb25zdCB2cHcgPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuXHRcdGNvbnN0IHZwaCA9IHdpbmRvdy5pbm5lckhlaWdodDtcclxuXHRcdGxldCBudnc7XHJcblx0XHRsZXQgbnZoO1xyXG5cclxuXHRcdGlmICh2cGggLyB2cHcgPCBoZWlnaHQgLyBBcHAuYXNzZXRzW1wiYmFja2dyb3VuZC5wbmdcIl0ud2lkdGgpIHtcclxuXHRcdFx0bnZoID0gdnBoO1xyXG5cdFx0XHRudncgPSAobnZoICogQXBwLmFzc2V0c1tcImJhY2tncm91bmQucG5nXCJdLndpZHRoKSAvIGhlaWdodDtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdG52dyA9IHZwdztcclxuXHRcdFx0bnZoID0gKG52dyAqIGhlaWdodCkgLyBBcHAuYXNzZXRzW1wiYmFja2dyb3VuZC5wbmdcIl0ud2lkdGg7XHJcblx0XHR9XHJcblxyXG5cdFx0QXBwLnJlbmRlcmVyLnJlc2l6ZShudncsIG52aCk7XHJcblx0XHR0aGlzLl9zY2VuZS5zY2FsZS5zZXQobnZ3IC8gQXBwLmFzc2V0c1tcImJhY2tncm91bmQucG5nXCJdLndpZHRoLCBudmggLyBoZWlnaHQpO1xyXG5cdFx0dGhpcy5fc2NlbmUucG9zaXRpb24ueCA9IHRoaXMuX2FwcC52aWV3LndpZHRoIC8gMjtcclxuXHR9XHJcbn1cclxuXHJcbm5ldyBNYWluKCk7XHJcblxyXG4iLCJpbXBvcnQgeyBBbmltYXRlZFNwcml0ZSB9IGZyb20gXCJwaXhpLmpzXCI7XHJcbmltcG9ydCB7IFR3ZWVuTGl0ZSwgZ3NhcCwgVGltZWxpbmVNYXgsIExpbmVhciwgU2luZSB9IGZyb20gXCJnc2FwXCI7XHJcbmltcG9ydCB7IEFwcCB9IGZyb20gXCIuLi9BcHBcIjtcclxuaW1wb3J0IHsgR0FNRV9PVkVSIH0gZnJvbSBcIi4vRXZlbnRzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQmlyZCBleHRlbmRzIEFuaW1hdGVkU3ByaXRlIHtcclxuXHRwcml2YXRlIHJlYWRvbmx5IF9tdWx0aXBsaWVyOiBudW1iZXIgPSAxMjtcclxuXHRwcml2YXRlIHJlYWRvbmx5IF9qdW1wSGVpZ2h0OiBudW1iZXIgPSB0aGlzLmhlaWdodCAqIDEuODtcclxuXHRwcml2YXRlIHJlYWRvbmx5IF91cEZ1bmN0aW9uTGluazogKGV2ZW50OiBLZXlib2FyZEV2ZW50IHwgTW91c2VFdmVudCkgPT4gdm9pZDtcclxuXHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHRzdXBlcihBcnJheS5mcm9tKHsgbGVuZ3RoOiAzIH0sIChfLCBpbmRleCkgPT4gQXBwLmFzc2V0c1tgYmlyZC0ke2luZGV4fS5wbmdgXSkpO1xyXG5cclxuXHRcdHRoaXMuYW5jaG9yLnNldCgwLjUpO1xyXG5cdFx0dGhpcy5wb3NpdGlvbi5zZXQoLXRoaXMud2lkdGggLyAyLCBBcHAuYXNzZXRzW1wiYmFja2dyb3VuZC5wbmdcIl0uaGVpZ2h0IC8gMik7XHJcblx0XHR0aGlzLmFuaW1hdGlvblNwZWVkID0gMC4xO1xyXG5cclxuXHRcdHRoaXMuX3VwRnVuY3Rpb25MaW5rID0gdGhpcy51cC5iaW5kKHRoaXMpO1xyXG5cdFx0dGhpcy5zdGFydEZsaWdodCgpO1xyXG5cdFx0dGhpcy5jcmVhdGVDb250cm9sRXZlbnRzKCk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIHN0YXJ0RmxpZ2h0KCk6IHZvaWQge1xyXG5cdFx0dGhpcy5wbGF5KCk7XHJcblxyXG5cdFx0VHdlZW5MaXRlLnRvKHRoaXMsIDAuNCwge1xyXG5cdFx0XHRlYXNlOiBMaW5lYXIuZWFzZU5vbmUsXHJcblx0XHRcdHk6IGArPSR7dGhpcy5oZWlnaHQgKiAwLjR9YCxcclxuXHRcdFx0eW95bzogdHJ1ZSxcclxuXHRcdFx0cmVwZWF0OiAtMSxcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGdldCB2ZXJ0ZXhBcnJheSgpIHtcclxuXHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXRzLWlnbm9yZVxyXG5cdFx0Ly8gQHRzLWlnbm9yZVxyXG5cdFx0cmV0dXJuIHRoaXMudmVydGV4RGF0YTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgdXAoZXZlbnQ6IEtleWJvYXJkRXZlbnQgfCBNb3VzZUV2ZW50KTogdm9pZCB7XHJcblx0XHRpZiAoZXZlbnQgaW5zdGFuY2VvZiBLZXlib2FyZEV2ZW50ICYmIGV2ZW50LmNvZGUgIT09IFwiU3BhY2VcIikge1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0Z3NhcC5raWxsVHdlZW5zT2YodGhpcyk7XHJcblxyXG5cdFx0VHdlZW5MaXRlLnRvKHRoaXMsIDAuMiwge1xyXG5cdFx0XHRlYXNlOiBTaW5lLmVhc2VPdXQsXHJcblx0XHRcdHk6IGAtPSR7dGhpcy55ID4gLXRoaXMuaGVpZ2h0ID8gdGhpcy5fanVtcEhlaWdodCA6IDB9YCxcclxuXHRcdFx0YW5nbGU6IC0yMCxcclxuXHRcdFx0b25Db21wbGV0ZTogKCkgPT4gdGhpcy5kb3duKCksXHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBkb3duKCk6IHZvaWQge1xyXG5cdFx0Z3NhcC5raWxsVHdlZW5zT2YodGhpcyk7XHJcblxyXG5cdFx0Y29uc3QgdGltZWxpbmUgPSBuZXcgVGltZWxpbmVNYXgoKTtcclxuXHRcdGNvbnN0IHNwZWVkID0gKChBcHAuYXNzZXRzW1wiYmFja2dyb3VuZC5wbmdcIl0uaGVpZ2h0IC0gdGhpcy55KSAvIHRoaXMuaGVpZ2h0KSAvIHRoaXMuX211bHRpcGxpZXI7XHJcblxyXG5cdFx0Y29uc3QgaW5pdFkgPSB0aGlzLnk7XHJcblx0XHRsZXQgaXNDb21lYmFjayA9IGZhbHNlO1xyXG5cclxuXHRcdHRpbWVsaW5lXHJcblx0XHRcdC50byh0aGlzLCBzcGVlZCwge1xyXG5cdFx0XHRcdGVhc2U6IFNpbmUuZWFzZUluLFxyXG5cdFx0XHRcdHk6IEFwcC5hc3NldHNbXCJiYWNrZ3JvdW5kLnBuZ1wiXS5oZWlnaHQgLSB0aGlzLmhlaWdodCAvIDMsXHJcblxyXG5cdFx0XHRcdG9uVXBkYXRlOiAoKSA9PiB7XHJcblx0XHRcdFx0XHRpZiAoIWlzQ29tZWJhY2sgJiYgdGhpcy55IC0gaW5pdFkgPiB0aGlzLl9qdW1wSGVpZ2h0KSB7XHJcblx0XHRcdFx0XHRcdGlzQ29tZWJhY2sgPSB0cnVlO1xyXG5cclxuXHRcdFx0XHRcdFx0VHdlZW5MaXRlLnRvKHRoaXMsIDAuMiwge1xyXG5cdFx0XHRcdFx0XHRcdGVhc2U6IExpbmVhci5lYXNlTm9uZSxcclxuXHRcdFx0XHRcdFx0XHRhbmdsZTogOTAsXHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0sXHJcblxyXG5cdFx0XHRcdG9uQ29tcGxldGU6ICgpID0+IHtcclxuXHRcdFx0XHRcdGlmICh0aGlzLnBsYXlpbmcpIHtcclxuXHRcdFx0XHRcdFx0QXBwLmVtaXR0ZXIuZW1pdChHQU1FX09WRVIpO1xyXG5cdFx0XHRcdFx0XHRnc2FwLmtpbGxUd2VlbnNPZih0aGlzLCBcImFuZ2xlXCIpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdH0pO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGdhbWVPdmVyKCk6IHZvaWQge1xyXG5cdFx0dGhpcy5zdG9wKCk7XHJcblx0XHR3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJkb3duXCIsIHRoaXMuX3VwRnVuY3Rpb25MaW5rKTtcclxuXHRcdHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLl91cEZ1bmN0aW9uTGluayk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGNyZWF0ZUNvbnRyb2xFdmVudHMoKTogdm9pZCB7XHJcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJkb3duXCIsIHRoaXMuX3VwRnVuY3Rpb25MaW5rKTtcclxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLl91cEZ1bmN0aW9uTGluayk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgcmVzdGFydCgpOiB2b2lkIHtcclxuXHRcdGdzYXAua2lsbFR3ZWVuc09mKHRoaXMpO1xyXG5cclxuXHRcdHRoaXMucG9zaXRpb24ueSA9IEFwcC5hc3NldHNbXCJiYWNrZ3JvdW5kLnBuZ1wiXS5oZWlnaHQgLyAyO1xyXG5cdFx0dGhpcy5hbmdsZSA9IDA7XHJcblx0XHR0aGlzLnN0YXJ0RmxpZ2h0KCk7XHJcblx0XHR0aGlzLmNyZWF0ZUNvbnRyb2xFdmVudHMoKTtcclxuXHR9XHJcbn1cclxuIiwiZXhwb3J0IGNvbnN0IEdBTUVfT1ZFUiA9IFN5bWJvbCgpO1xyXG5leHBvcnQgY29uc3QgUkVTVEFSVCA9IFN5bWJvbCgpO1xyXG5leHBvcnQgY29uc3QgSU5DUkVBU0VfUE9JTlRTID0gU3ltYm9sKCk7XHJcbiIsImltcG9ydCB7IEJhc2VSZW5kZXJUZXh0dXJlLCBDb250YWluZXIsIFJlbmRlclRleHR1cmUsIFNwcml0ZSwgVGlsaW5nU3ByaXRlIH0gZnJvbSBcInBpeGkuanNcIjtcclxuaW1wb3J0IHsgTGluZWFyLCBUd2VlbkxpdGUgfSBmcm9tIFwiZ3NhcC9nc2FwLWNvcmVcIjtcclxuaW1wb3J0IHsgQXBwIH0gZnJvbSBcIi4uL0FwcFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEdyb3VuZCBleHRlbmRzIENvbnRhaW5lciB7XHJcblx0cHJpdmF0ZSByZWFkb25seSBfZ3JvdW5kOiBQSVhJLlRpbGluZ1Nwcml0ZTtcclxuXHRwcml2YXRlIHJlYWRvbmx5IF90d2VlbjogVHdlZW5MaXRlO1xyXG5cclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHN1cGVyKCk7XHJcblxyXG5cdFx0Y29uc3QgY29udGFpbmVyID0gbmV3IENvbnRhaW5lcigpO1xyXG5cdFx0Y29uc3QgbGVuZ3RoID0gTWF0aC5jZWlsKEFwcC5hc3NldHNbXCJiYWNrZ3JvdW5kLnBuZ1wiXS53aWR0aCAvIEFwcC5hc3NldHNbXCJncm91bmQucG5nXCJdLndpZHRoKTtcclxuXHJcblx0XHRBcnJheS5mcm9tKHsgbGVuZ3RoIH0sIChfLCBpbmRleCkgPT4ge1xyXG5cdFx0XHRjb25zdCBpbWcgPSBuZXcgU3ByaXRlKEFwcC5hc3NldHNbXCJncm91bmQucG5nXCJdKTtcclxuXHRcdFx0aW1nLnggPSBpbmRleCAqIEFwcC5hc3NldHNbXCJncm91bmQucG5nXCJdLndpZHRoO1xyXG5cdFx0XHRjb250YWluZXIuYWRkQ2hpbGQoaW1nKTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdGNvbnN0IG5ld0dyb3VuZFRleHR1cmUgPSBuZXcgUmVuZGVyVGV4dHVyZShcclxuXHRcdFx0bmV3IEJhc2VSZW5kZXJUZXh0dXJlKHtcclxuXHRcdFx0XHR3aWR0aDogQXBwLmFzc2V0c1tcImJhY2tncm91bmQucG5nXCJdLndpZHRoLFxyXG5cdFx0XHRcdGhlaWdodDogQXBwLmFzc2V0c1tcImdyb3VuZC5wbmdcIl0uaGVpZ2h0LFxyXG5cdFx0XHR9KSxcclxuXHRcdCk7XHJcblxyXG5cdFx0QXBwLnJlbmRlcmVyLnJlbmRlcihjb250YWluZXIsIG5ld0dyb3VuZFRleHR1cmUpO1xyXG5cclxuXHRcdHRoaXMuX2dyb3VuZCA9IG5ldyBUaWxpbmdTcHJpdGUoXHJcblx0XHRcdG5ld0dyb3VuZFRleHR1cmUsIEFwcC5hc3NldHNbXCJiYWNrZ3JvdW5kLnBuZ1wiXS53aWR0aCwgQXBwLmFzc2V0c1tcImdyb3VuZC5wbmdcIl0uaGVpZ2h0LFxyXG5cdFx0KTtcclxuXHRcdHRoaXMuX2dyb3VuZC5hbmNob3Iuc2V0KDAuNSwgMCk7XHJcblx0XHR0aGlzLl9ncm91bmQueSA9IEFwcC5hc3NldHNbXCJiYWNrZ3JvdW5kLnBuZ1wiXS5oZWlnaHQ7XHJcblx0XHR0aGlzLmFkZENoaWxkKHRoaXMuX2dyb3VuZCk7XHJcblxyXG5cdFx0dGhpcy5fdHdlZW4gPSBUd2VlbkxpdGUudG8odGhpcy5fZ3JvdW5kLCAzLCB7XHJcblx0XHRcdHBpeGk6IHsgdGlsZVBvc2l0aW9uWDogLUFwcC5hc3NldHNbXCJiYWNrZ3JvdW5kLnBuZ1wiXS53aWR0aCAtIEFwcC5hc3NldHNbXCJwaXBlLnBuZ1wiXS53aWR0aCB9LFxyXG5cdFx0XHRlYXNlOiBMaW5lYXIuZWFzZU5vbmUsXHJcblx0XHRcdHJlcGVhdDogLTEsXHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBnYW1lT3ZlcigpOiB2b2lkIHtcclxuXHRcdHRoaXMuX3R3ZWVuLnBhdXNlKCk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgcmVzdGFydCgpOiB2b2lkIHtcclxuXHRcdHRoaXMuX3R3ZWVuLnJlc3VtZSgpO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb250YWluZXIsIFNwcml0ZSwgR3JhcGhpY3MgfSBmcm9tIFwicGl4aS5qc1wiO1xyXG5pbXBvcnQgeyBUd2VlbkxpdGUsIExpbmVhciwgZ3NhcCB9IGZyb20gXCJnc2FwL2dzYXAtY29yZVwiO1xyXG5pbXBvcnQgeyBCaXJkIH0gZnJvbSBcIi4vQmlyZFwiO1xyXG5pbXBvcnQgeyBBcHAgfSBmcm9tIFwiLi4vQXBwXCI7XHJcbmltcG9ydCB7IEdBTUVfT1ZFUiwgSU5DUkVBU0VfUE9JTlRTIH0gZnJvbSBcIi4vRXZlbnRzXCI7XHJcbmltcG9ydCB7IGNvbnZlcnRBcnJheVRvT2JqZWN0c0FycmF5IH0gZnJvbSBcIi4vdXRpbHMvQ29udmVydEFycmF5VG9PYmplY3RzQXJyYXlcIjtcclxuaW1wb3J0IHsgZG9Qb2x5Z29uc0ludGVyc2VjdCB9IGZyb20gXCIuL3V0aWxzL0RvUG9seWdvbnNJbnRlcnNlY3RcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBQaXBlIGV4dGVuZHMgQ29udGFpbmVyIHtcclxuXHRwcml2YXRlIHJlYWRvbmx5IF9waXBlTWFzazogR3JhcGhpY3M7XHJcblx0cHJpdmF0ZSByZWFkb25seSBfZ2FwOiBudW1iZXI7XHJcblx0cHJpdmF0ZSByZWFkb25seSBfYmlyZDogQmlyZDtcclxuXHRwcml2YXRlIF9jdXJyZW50UGlwZXNDb250YWluZXI6IENvbnRhaW5lcjtcclxuXHRwcml2YXRlIF9wcmV2aW91c1BpcGVzQ29udGFpbmVyOiBDb250YWluZXI7XHJcblx0cHJpdmF0ZSBfcGlwZXNDcmVhdGVUaW1lb3V0OiBudW1iZXI7XHJcblxyXG5cdGNvbnN0cnVjdG9yKGJpcmQ6IEJpcmQpIHtcclxuXHRcdHN1cGVyKCk7XHJcblxyXG5cdFx0dGhpcy5fYmlyZCA9IGJpcmQ7XHJcblx0XHR0aGlzLl9nYXAgPSBBcHAuYXNzZXRzW1wiYmlyZC0wLnBuZ1wiXS5oZWlnaHQ7XHJcblxyXG5cdFx0dGhpcy5fcGlwZU1hc2sgPSB0aGlzLmNyZWF0ZU1hc2soKTtcclxuXHRcdHRoaXMuX3BpcGVNYXNrLnZpc2libGUgPSBmYWxzZTtcclxuXHRcdHRoaXMuYWRkQ2hpbGQodGhpcy5fcGlwZU1hc2spO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBjcmVhdGVQaXBlQ29udGFpbmVyKCk6IHZvaWQge1xyXG5cdFx0dGhpcy5fcGlwZU1hc2sudmlzaWJsZSA9IHRydWU7XHJcblxyXG5cdFx0dGhpcy5fY3VycmVudFBpcGVzQ29udGFpbmVyID0gbmV3IENvbnRhaW5lcigpO1xyXG5cdFx0dGhpcy5fY3VycmVudFBpcGVzQ29udGFpbmVyLnggPSBBcHAuYXNzZXRzW1wiYmFja2dyb3VuZC5wbmdcIl0ud2lkdGggLyAyICsgQXBwLmFzc2V0c1tcInBpcGUucG5nXCJdLndpZHRoIC8gMjtcclxuXHRcdHRoaXMuYWRkQ2hpbGQodGhpcy5fY3VycmVudFBpcGVzQ29udGFpbmVyKTtcclxuXHJcblx0XHRjb25zdCB1cFBpcGUgPSBuZXcgU3ByaXRlKEFwcC5hc3NldHNbXCJwaXBlLnBuZ1wiXSk7XHJcblx0XHR1cFBpcGUuYW5jaG9yLnNldCgwLjUsIDApO1xyXG5cdFx0dXBQaXBlLmFuZ2xlID0gMTgwO1xyXG5cdFx0dXBQaXBlLnkgPSB0aGlzLnJhbmRvbSh0aGlzLl9nYXAgKiAyLCB1cFBpcGUuaGVpZ2h0IC0gdGhpcy5fZ2FwICogNCk7XHJcblx0XHR1cFBpcGUubWFzayA9IHRoaXMuX3BpcGVNYXNrO1xyXG5cdFx0dGhpcy5fY3VycmVudFBpcGVzQ29udGFpbmVyLmFkZENoaWxkKHVwUGlwZSk7XHJcblxyXG5cdFx0Y29uc3QgZG93blBpcGUgPSBuZXcgU3ByaXRlKEFwcC5hc3NldHNbXCJwaXBlLnBuZ1wiXSk7XHJcblx0XHRkb3duUGlwZS5hbmNob3Iuc2V0KDAuNSwgMCk7XHJcblx0XHRkb3duUGlwZS55ID0gdXBQaXBlLnkgKyB0aGlzLl9nYXAgKiA0O1xyXG5cdFx0ZG93blBpcGUubWFzayA9IHRoaXMuX3BpcGVNYXNrO1xyXG5cdFx0dGhpcy5fY3VycmVudFBpcGVzQ29udGFpbmVyLmFkZENoaWxkKGRvd25QaXBlKTtcclxuXHJcblx0XHRsZXQgaXNIYWxmQW5pbWF0aW9uID0gZmFsc2U7XHJcblxyXG5cdFx0VHdlZW5MaXRlLnRvKHRoaXMuX2N1cnJlbnRQaXBlc0NvbnRhaW5lci5jaGlsZHJlbiwgMywge1xyXG5cdFx0XHR4OiAtQXBwLmFzc2V0c1tcImJhY2tncm91bmQucG5nXCJdLndpZHRoIC0gQXBwLmFzc2V0c1tcInBpcGUucG5nXCJdLndpZHRoLFxyXG5cdFx0XHRlYXNlOiBMaW5lYXIuZWFzZU5vbmUsXHJcblxyXG5cdFx0XHRvblVwZGF0ZTogKCkgPT4ge1xyXG5cdFx0XHRcdGNvbnN0IHByb2dyZXNzID0gZ3NhcC5nZXRUd2VlbnNPZih0aGlzLl9jdXJyZW50UGlwZXNDb250YWluZXIuY2hpbGRyZW5bMF0pWzBdLnByb2dyZXNzKCk7XHJcblxyXG5cdFx0XHRcdGlmICghaXNIYWxmQW5pbWF0aW9uICYmICtwcm9ncmVzcy50b0ZpeGVkKDIpID09PSAwLjUyKSB7XHJcblx0XHRcdFx0XHRpc0hhbGZBbmltYXRpb24gPSB0cnVlO1xyXG5cdFx0XHRcdFx0dGhpcy5fcHJldmlvdXNQaXBlc0NvbnRhaW5lciA9IHRoaXMuX2N1cnJlbnRQaXBlc0NvbnRhaW5lcjtcclxuXHRcdFx0XHRcdHRoaXMuY3JlYXRlUGlwZUNvbnRhaW5lcigpO1xyXG5cdFx0XHRcdFx0QXBwLmVtaXR0ZXIuZW1pdChJTkNSRUFTRV9QT0lOVFMpO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0bGV0IGNvbGxpc2lvbkFycmF5ID0gWy4uLnRoaXMuX2N1cnJlbnRQaXBlc0NvbnRhaW5lci5jaGlsZHJlbl07XHJcblxyXG5cdFx0XHRcdGlmICh0aGlzLl9wcmV2aW91c1BpcGVzQ29udGFpbmVyKSB7XHJcblx0XHRcdFx0XHRjb2xsaXNpb25BcnJheSA9IFsuLi5jb2xsaXNpb25BcnJheSwgLi4udGhpcy5fcHJldmlvdXNQaXBlc0NvbnRhaW5lci5jaGlsZHJlbl07XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1pZ25vcmVcclxuXHRcdFx0XHQvLyBAdHMtaWdub3JlXHJcblx0XHRcdFx0Y29uc3QgdmVydGV4QXJyYXkgPSBjb2xsaXNpb25BcnJheS5tYXAoc3ByaXRlID0+IHNwcml0ZS52ZXJ0ZXhEYXRhKTtcclxuXHJcblx0XHRcdFx0dGhpcy5jaGVja0NvbGxpc2lvbih2ZXJ0ZXhBcnJheSkgJiYgQXBwLmVtaXR0ZXIuZW1pdChHQU1FX09WRVIpO1xyXG5cdFx0XHR9LFxyXG5cclxuXHRcdFx0b25Db21wbGV0ZTogKCkgPT4gdGhpcy5fcHJldmlvdXNQaXBlc0NvbnRhaW5lci5kZXN0cm95KCksXHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzdGFydE1vdmVtZW50KCk6IHZvaWQge1xyXG5cdFx0dGhpcy5fcGlwZXNDcmVhdGVUaW1lb3V0ID0gd2luZG93LnNldFRpbWVvdXQoKHRoaXMuY3JlYXRlUGlwZUNvbnRhaW5lci5iaW5kKHRoaXMpKSwgMzUwMCk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgZ2FtZU92ZXIoKTogdm9pZCB7XHJcblx0XHRnc2FwLmtpbGxUd2VlbnNPZih0aGlzLl9jdXJyZW50UGlwZXNDb250YWluZXI/LmNoaWxkcmVuKTtcclxuXHRcdGdzYXAua2lsbFR3ZWVuc09mKHRoaXMuX3ByZXZpb3VzUGlwZXNDb250YWluZXI/LmNoaWxkcmVuKTtcclxuXHRcdGNsZWFyVGltZW91dCh0aGlzLl9waXBlc0NyZWF0ZVRpbWVvdXQpO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHJlc3RhcnQoKTogdm9pZCB7XHJcblx0XHR0aGlzLl9jdXJyZW50UGlwZXNDb250YWluZXI/LmRlc3Ryb3koKTtcclxuXHRcdHRoaXMuX3ByZXZpb3VzUGlwZXNDb250YWluZXI/LmRlc3Ryb3koKTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgY2hlY2tDb2xsaXNpb24oc3ByaXRlc1ZlcnRleEFycmF5OiBudW1iZXJbXVtdKTogYm9vbGVhbiB7XHJcblx0XHRyZXR1cm4gc3ByaXRlc1ZlcnRleEFycmF5LnNvbWUodmVydGV4QXJyYXkgPT4ge1xyXG5cdFx0XHRyZXR1cm4gZG9Qb2x5Z29uc0ludGVyc2VjdChcclxuXHRcdFx0XHRjb252ZXJ0QXJyYXlUb09iamVjdHNBcnJheSh0aGlzLl9iaXJkLnZlcnRleEFycmF5KSxcclxuXHRcdFx0XHRjb252ZXJ0QXJyYXlUb09iamVjdHNBcnJheSh2ZXJ0ZXhBcnJheSksXHJcblx0XHRcdCk7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgY3JlYXRlTWFzaygpOiBHcmFwaGljcyB7XHJcblx0XHRyZXR1cm4gbmV3IEdyYXBoaWNzKClcclxuXHRcdFx0LmJlZ2luRmlsbCgweEZGRilcclxuXHRcdFx0LmRyYXdSZWN0KFxyXG5cdFx0XHRcdC1BcHAuYXNzZXRzW1wiYmFja2dyb3VuZC5wbmdcIl0ud2lkdGggLyAyLCAwLFxyXG5cdFx0XHRcdEFwcC5hc3NldHNbXCJiYWNrZ3JvdW5kLnBuZ1wiXS53aWR0aCwgQXBwLmFzc2V0c1tcImJhY2tncm91bmQucG5nXCJdLmhlaWdodCxcclxuXHRcdFx0KVxyXG5cdFx0XHQuZW5kRmlsbCgpO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSByYW5kb20obWluOiBudW1iZXIsIG1heDogbnVtYmVyKTogbnVtYmVyIHtcclxuXHRcdHJldHVybiBNYXRoLmZsb29yKG1pbiArIE1hdGgucmFuZG9tKCkgKiAobWF4ICsgMSAtIG1pbikpO1xyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb250YWluZXIsIFNwcml0ZSB9IGZyb20gXCJwaXhpLmpzXCI7XHJcbmltcG9ydCB7IEdyb3VuZCB9IGZyb20gXCIuL0dyb3VuZFwiO1xyXG5pbXBvcnQgeyBQaXBlIH0gZnJvbSBcIi4vUGlwZVwiO1xyXG5pbXBvcnQgeyBCaXJkIH0gZnJvbSBcIi4vQmlyZFwiO1xyXG5pbXBvcnQgeyBBcHAgfSBmcm9tIFwiLi4vQXBwXCI7XHJcbmltcG9ydCB7IE1lbnUgfSBmcm9tIFwiLi9VSS9NZW51XCI7XHJcbmltcG9ydCB7IFNjb3JlUG9pbnRzVGV4dCB9IGZyb20gXCIuL1VJL1Njb3JlUG9pbnRzVGV4dFwiO1xyXG5pbXBvcnQgeyBHQU1FX09WRVIsIElOQ1JFQVNFX1BPSU5UUywgUkVTVEFSVCB9IGZyb20gXCIuL0V2ZW50c1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNjZW5lIGV4dGVuZHMgQ29udGFpbmVyIHtcclxuXHRwcml2YXRlIHJlYWRvbmx5IF9iZzogUElYSS5TcHJpdGU7XHJcblx0cHJpdmF0ZSByZWFkb25seSBfZ3JvdW5kOiBHcm91bmQ7XHJcblx0cHJpdmF0ZSByZWFkb25seSBfcGlwZTogUGlwZTtcclxuXHRwcml2YXRlIHJlYWRvbmx5IF9iaXJkOiBCaXJkO1xyXG5cdHByaXZhdGUgcmVhZG9ubHkgX2N1cnJlbnRQb2ludHM6IFNjb3JlUG9pbnRzVGV4dDtcclxuXHRwcml2YXRlIHJlYWRvbmx5IF9zdGFydEdhbWVGdW5jdGlvbkxpbms6IChldmVudDogS2V5Ym9hcmRFdmVudCB8IE1vdXNlRXZlbnQpID0+IHZvaWQ7XHJcblxyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0c3VwZXIoKTtcclxuXHJcblx0XHR0aGlzLmludGVyYWN0aXZlID0gdHJ1ZTtcclxuXHJcblx0XHR0aGlzLl9iZyA9IG5ldyBTcHJpdGUoQXBwLmFzc2V0c1tcImJhY2tncm91bmQucG5nXCJdKTtcclxuXHRcdHRoaXMuX2JnLmFuY2hvci5zZXQoMC41LCAwKTtcclxuXHRcdHRoaXMuYWRkQ2hpbGQodGhpcy5fYmcpO1xyXG5cclxuXHRcdHRoaXMuX2JpcmQgPSBuZXcgQmlyZCgpO1xyXG5cdFx0dGhpcy5fcGlwZSA9IG5ldyBQaXBlKHRoaXMuX2JpcmQpO1xyXG5cdFx0dGhpcy5hZGRDaGlsZCh0aGlzLl9waXBlLCB0aGlzLl9iaXJkKTtcclxuXHJcblx0XHR0aGlzLl9ncm91bmQgPSBuZXcgR3JvdW5kKCk7XHJcblx0XHR0aGlzLmFkZENoaWxkKHRoaXMuX2dyb3VuZCk7XHJcblxyXG5cdFx0dGhpcy5fY3VycmVudFBvaW50cyA9IG5ldyBTY29yZVBvaW50c1RleHQoNzApO1xyXG5cdFx0dGhpcy5fY3VycmVudFBvaW50cy55ID0gQXBwLmFzc2V0c1tcImJhY2tncm91bmQucG5nXCJdLmhlaWdodCAqIDAuMTU7XHJcblx0XHR0aGlzLl9jdXJyZW50UG9pbnRzLnZpc2libGUgPSBmYWxzZTtcclxuXHRcdHRoaXMuYWRkQ2hpbGQodGhpcy5fY3VycmVudFBvaW50cyk7XHJcblxyXG5cdFx0QXBwLmVtaXR0ZXIub24oSU5DUkVBU0VfUE9JTlRTLCB0aGlzLmluY3JlYXNlUG9pbnRzLmJpbmQodGhpcykpO1xyXG5cdFx0QXBwLmVtaXR0ZXIub24oR0FNRV9PVkVSLCB0aGlzLmdhbWVPdmVyLmJpbmQodGhpcykpO1xyXG5cdFx0QXBwLmVtaXR0ZXIub24oUkVTVEFSVCwgdGhpcy5yZXN0YXJ0LmJpbmQodGhpcykpO1xyXG5cclxuXHRcdHRoaXMuX3N0YXJ0R2FtZUZ1bmN0aW9uTGluayA9IHRoaXMuc3RhcnRHYW1lLmJpbmQodGhpcyk7XHJcblx0XHR0aGlzLmNyZWF0ZVN0YXJ0RXZlbnRzKCk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGluY3JlYXNlUG9pbnRzKCk6IHZvaWQge1xyXG5cdFx0dGhpcy5fY3VycmVudFBvaW50cy50ZXh0ID0gYCR7K3RoaXMuX2N1cnJlbnRQb2ludHMudGV4dCArIDF9YDtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgZ2FtZU92ZXIoKTogdm9pZCB7XHJcblx0XHR0aGlzLmFkZENoaWxkKFxyXG5cdFx0XHRuZXcgTWVudShcclxuXHRcdFx0XHR0aGlzLl9jdXJyZW50UG9pbnRzLnRleHQsXHJcblx0XHRcdFx0YCR7TWF0aC5tYXgoK2xvY2FsU3RvcmFnZS5nZXRJdGVtKFwicmVjb3JkXCIpLCArdGhpcy5fY3VycmVudFBvaW50cy50ZXh0KX1gLFxyXG5cdFx0XHQpLFxyXG5cdFx0KTtcclxuXHJcblx0XHRpZiAoK3RoaXMuX2N1cnJlbnRQb2ludHMudGV4dCA+ICtsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInJlY29yZFwiKSkge1xyXG5cdFx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInJlY29yZFwiLCB0aGlzLl9jdXJyZW50UG9pbnRzLnRleHQpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuX2N1cnJlbnRQb2ludHMudmlzaWJsZSA9IGZhbHNlO1xyXG5cdFx0W3RoaXMuX2JpcmQsIHRoaXMuX3BpcGUsIHRoaXMuX2dyb3VuZF0uZm9yRWFjaChpdGVtID0+IGl0ZW0uZ2FtZU92ZXIoKSk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIHJlc3RhcnQoKTogdm9pZCB7XHJcblx0XHRbdGhpcy5fYmlyZCwgdGhpcy5fcGlwZSwgdGhpcy5fZ3JvdW5kXS5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5yZXN0YXJ0KCkpO1xyXG5cdFx0dGhpcy5fY3VycmVudFBvaW50cy50ZXh0ID0gXCIwXCI7XHJcblx0XHR0aGlzLmNyZWF0ZVN0YXJ0RXZlbnRzKCk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIHN0YXJ0R2FtZShldmVudDogS2V5Ym9hcmRFdmVudCB8IE1vdXNlRXZlbnQpIHtcclxuXHRcdGlmIChldmVudCBpbnN0YW5jZW9mIEtleWJvYXJkRXZlbnQgJiYgZXZlbnQuY29kZSAhPT0gXCJTcGFjZVwiKSB7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLl9jdXJyZW50UG9pbnRzLnZpc2libGUgPSB0cnVlO1xyXG5cdFx0dGhpcy5fcGlwZS5zdGFydE1vdmVtZW50KCk7XHJcblxyXG5cdFx0d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMuX3N0YXJ0R2FtZUZ1bmN0aW9uTGluayk7XHJcblx0XHR3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJkb3duXCIsIHRoaXMuX3N0YXJ0R2FtZUZ1bmN0aW9uTGluayk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGNyZWF0ZVN0YXJ0RXZlbnRzKCk6IHZvaWQge1xyXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMuX3N0YXJ0R2FtZUZ1bmN0aW9uTGluayk7XHJcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJkb3duXCIsIHRoaXMuX3N0YXJ0R2FtZUZ1bmN0aW9uTGluayk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IENvbnRhaW5lciwgU3ByaXRlIH0gZnJvbSBcInBpeGkuanNcIjtcclxuaW1wb3J0IHsgQXBwIH0gZnJvbSBcIi4uLy4uL0FwcFwiO1xyXG5pbXBvcnQgeyBTY29yZVBvaW50c1RleHQgfSBmcm9tIFwiLi9TY29yZVBvaW50c1RleHRcIjtcclxuaW1wb3J0IHsgUkVTVEFSVCB9IGZyb20gXCIuLi9FdmVudHNcIjtcclxuaW1wb3J0IHsgVHdlZW5MaXRlIH0gZnJvbSBcImdzYXBcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBNZW51IGV4dGVuZHMgQ29udGFpbmVyIHtcclxuXHRwcml2YXRlIHJlYWRvbmx5IF9zY29yZWJvYXJkOiBQSVhJLlNwcml0ZTtcclxuXHRwcml2YXRlIHJlYWRvbmx5IF9yZXN0YXJ0QnV0dG9uOiBQSVhJLlNwcml0ZTtcclxuXHRwcml2YXRlIHJlYWRvbmx5IF9jdXJyZW50UG9pbnRzOiBTY29yZVBvaW50c1RleHQ7XHJcblx0cHJpdmF0ZSByZWFkb25seSBfcmVjb3JkT2ZTY29yZWRQb2ludHM6IFNjb3JlUG9pbnRzVGV4dDtcclxuXHRwcml2YXRlIHJlYWRvbmx5IF9yZXN0YXJ0RnVuY3Rpb25MaW5rOiAoZXZlbnQ6IEtleWJvYXJkRXZlbnQgfCBNb3VzZUV2ZW50KSA9PiB2b2lkO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHByaXZhdGUgcmVhZG9ubHkgX2N1cnJlbnRQb2ludHNUZXh0OiBzdHJpbmcsXHJcblx0XHRwcml2YXRlIHJlYWRvbmx5IF9yZWNvcmRQb2ludHNUZXh0OiBzdHJpbmcsXHJcblx0KSB7XHJcblx0XHRzdXBlcigpO1xyXG5cclxuXHRcdHRoaXMuX3Njb3JlYm9hcmQgPSBuZXcgU3ByaXRlKEFwcC5hc3NldHNbXCJzY29yZS5wbmdcIl0pO1xyXG5cdFx0dGhpcy5fc2NvcmVib2FyZC5hbmNob3Iuc2V0KDAuNSwgMSk7XHJcblx0XHR0aGlzLl9zY29yZWJvYXJkLnkgPSBBcHAuYXNzZXRzW1wiYmFja2dyb3VuZC5wbmdcIl0uaGVpZ2h0ICogMC41NTtcclxuXHRcdHRoaXMuYWRkQ2hpbGQodGhpcy5fc2NvcmVib2FyZCk7XHJcblxyXG5cdFx0dGhpcy5fcmVzdGFydEJ1dHRvbiA9IG5ldyBTcHJpdGUoQXBwLmFzc2V0c1tcInJlc3RhcnQucG5nXCJdKTtcclxuXHRcdHRoaXMuX3Jlc3RhcnRCdXR0b24uYW5jaG9yLnNldCgwLjUsIDApO1xyXG5cdFx0dGhpcy5fcmVzdGFydEJ1dHRvbi55ID0gdGhpcy5fc2NvcmVib2FyZC55ICsgdGhpcy5fcmVzdGFydEJ1dHRvbi5oZWlnaHQgKiAwLjY7XHJcblx0XHR0aGlzLl9yZXN0YXJ0QnV0dG9uLmludGVyYWN0aXZlID0gdHJ1ZTtcclxuXHRcdHRoaXMuX3Jlc3RhcnRCdXR0b24uYnV0dG9uTW9kZSA9IHRydWU7XHJcblx0XHR0aGlzLmFkZENoaWxkKHRoaXMuX3Jlc3RhcnRCdXR0b24pO1xyXG5cclxuXHRcdHRoaXMuX2N1cnJlbnRQb2ludHMgPSBuZXcgU2NvcmVQb2ludHNUZXh0KDUwLCB0aGlzLl9jdXJyZW50UG9pbnRzVGV4dCk7XHJcblx0XHR0aGlzLl9jdXJyZW50UG9pbnRzLmFuY2hvci55ID0gMTtcclxuXHRcdHRoaXMuX2N1cnJlbnRQb2ludHMueSA9IHRoaXMuX3Njb3JlYm9hcmQueSAtIHRoaXMuX3Njb3JlYm9hcmQuaGVpZ2h0ICogMC40NztcclxuXHRcdHRoaXMuYWRkQ2hpbGQodGhpcy5fY3VycmVudFBvaW50cyk7XHJcblxyXG5cdFx0dGhpcy5fcmVjb3JkT2ZTY29yZWRQb2ludHMgPSBuZXcgU2NvcmVQb2ludHNUZXh0KDUwLCB0aGlzLl9yZWNvcmRQb2ludHNUZXh0KTtcclxuXHRcdHRoaXMuX3JlY29yZE9mU2NvcmVkUG9pbnRzLnkgPSBBcHAuYXNzZXRzW1wiYmFja2dyb3VuZC5wbmdcIl0uaGVpZ2h0ICogMC40OTtcclxuXHRcdHRoaXMuYWRkQ2hpbGQodGhpcy5fcmVjb3JkT2ZTY29yZWRQb2ludHMpO1xyXG5cclxuXHRcdHRoaXMuX3Jlc3RhcnRGdW5jdGlvbkxpbmsgPSB0aGlzLnJlc3RhcnQuYmluZCh0aGlzKTtcclxuXHJcblx0XHRUd2VlbkxpdGUuZnJvbVRvKFxyXG5cdFx0XHR0aGlzLFxyXG5cdFx0XHQwLjUsXHJcblx0XHRcdHsgeTogXCItPTEwMFwiIH0sXHJcblx0XHRcdHsgeTogXCIrPTEwMFwiLCBvbkNvbXBsZXRlOiAoKSA9PiB0aGlzLmNyZWF0ZUNvbnRyb2xFdmVudHMoKSB9LFxyXG5cdFx0KTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgY3JlYXRlQ29udHJvbEV2ZW50cygpIHtcclxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLl9yZXN0YXJ0RnVuY3Rpb25MaW5rKTtcclxuXHRcdHRoaXMuX3Jlc3RhcnRCdXR0b24ub25jZShcInBvaW50ZXJkb3duXCIsIHRoaXMuX3Jlc3RhcnRGdW5jdGlvbkxpbmspO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSByZXN0YXJ0KGV2ZW50OiBLZXlib2FyZEV2ZW50IHwgTW91c2VFdmVudCkge1xyXG5cdFx0aWYgKGV2ZW50IGluc3RhbmNlb2YgS2V5Ym9hcmRFdmVudCAmJiBldmVudC5jb2RlICE9PSBcIlNwYWNlXCIpIHtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cclxuXHRcdEFwcC5lbWl0dGVyLmVtaXQoUkVTVEFSVCk7XHJcblx0XHR3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5fcmVzdGFydEZ1bmN0aW9uTGluayk7XHJcblx0XHR0aGlzLmRlc3Ryb3koKTtcclxuXHR9XHJcbn1cclxuXHJcbiIsImltcG9ydCB7IFRleHQgfSBmcm9tIFwicGl4aS5qc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNjb3JlUG9pbnRzVGV4dCBleHRlbmRzIFRleHQge1xyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0cHJpdmF0ZSBmb250U2l6ZTogbnVtYmVyLFxyXG5cdFx0cHVibGljIHRleHQ6IHN0cmluZyA9IFwiMFwiLFxyXG5cdCkge1xyXG5cdFx0c3VwZXIoXHJcblx0XHRcdHRleHQsXHJcblx0XHRcdHtcclxuXHRcdFx0XHRmb250RmFtaWx5OiBcIkZCXCIsXHJcblx0XHRcdFx0Zm9udFNpemUsXHJcblx0XHRcdFx0ZmlsbDogMHhGRkZGRkYsXHJcblx0XHRcdFx0c3Ryb2tlOiAweDAwMDAwMCxcclxuXHRcdFx0XHRzdHJva2VUaGlja25lc3M6IDEwLFxyXG5cdFx0XHR9LFxyXG5cdFx0KTtcclxuXHJcblx0XHR0aGlzLmFuY2hvci5zZXQoMC41KTtcclxuXHR9XHJcbn1cclxuIiwiZXhwb3J0IGNvbnN0IGNvbnZlcnRBcnJheVRvT2JqZWN0c0FycmF5ID0gKGFycmF5OiBudW1iZXJbXSkgPT4ge1xyXG5cdHJldHVybiBhcnJheS5yZWR1Y2UoKGFjYywgaXRlbSwgaW5kZXgpID0+IHtcclxuXHRcdGlmIChpbmRleCAlIDIgIT09IDApIHtcclxuXHRcdFx0YWNjW2FjYy5sZW5ndGggLSAxXS55ID0gaXRlbTtcclxuXHJcblx0XHRcdHJldHVybiBbLi4uYWNjXTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHJldHVybiBbLi4uYWNjLCB7IHg6IGl0ZW0gfV07XHJcblx0XHR9XHJcblx0fSwgW10pO1xyXG59O1xyXG4iLCJleHBvcnQgY29uc3QgZG9Qb2x5Z29uc0ludGVyc2VjdCA9IChhOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH1bXSwgYjogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9W10pID0+IHtcclxuXHRjb25zdCBwb2x5Z29ucyA9IFthLCBiXTtcclxuXHRsZXQgbWluQSwgbWF4QSwgcHJvamVjdGVkLCBqLCBtaW5CLCBtYXhCO1xyXG5cclxuXHRmb3IgKGxldCBpID0gMDsgaSA8IHBvbHlnb25zLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRjb25zdCBwb2x5Z29uID0gcG9seWdvbnNbaV07XHJcblxyXG5cdFx0Zm9yIChsZXQgaTEgPSAwOyBpMSA8IHBvbHlnb24ubGVuZ3RoOyBpMSsrKSB7XHJcblx0XHRcdGNvbnN0IGkyID0gKGkxICsgMSkgJSBwb2x5Z29uLmxlbmd0aDtcclxuXHRcdFx0Y29uc3QgcDEgPSBwb2x5Z29uW2kxXTtcclxuXHRcdFx0Y29uc3QgcDIgPSBwb2x5Z29uW2kyXTtcclxuXHJcblx0XHRcdGNvbnN0IG5vcm1hbCA9IHsgeDogcDIueSAtIHAxLnksIHk6IHAxLnggLSBwMi54IH07XHJcblxyXG5cdFx0XHRtaW5BID0gdW5kZWZpbmVkO1xyXG5cdFx0XHRtYXhBID0gdW5kZWZpbmVkO1xyXG5cclxuXHRcdFx0Zm9yIChqID0gMDsgaiA8IGEubGVuZ3RoOyBqKyspIHtcclxuXHRcdFx0XHRwcm9qZWN0ZWQgPSBub3JtYWwueCAqIGFbal0ueCArIG5vcm1hbC55ICogYVtqXS55O1xyXG5cdFx0XHRcdGlmIChtaW5BID09PSB1bmRlZmluZWQgfHwgcHJvamVjdGVkIDwgbWluQSkge1xyXG5cdFx0XHRcdFx0bWluQSA9IHByb2plY3RlZDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aWYgKG1heEEgPT09IHVuZGVmaW5lZCB8fCBwcm9qZWN0ZWQgPiBtYXhBKSB7XHJcblx0XHRcdFx0XHRtYXhBID0gcHJvamVjdGVkO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0bWluQiA9IHVuZGVmaW5lZDtcclxuXHRcdFx0bWF4QiA9IHVuZGVmaW5lZDtcclxuXHJcblx0XHRcdGZvciAoaiA9IDA7IGogPCBiLmxlbmd0aDsgaisrKSB7XHJcblx0XHRcdFx0cHJvamVjdGVkID0gbm9ybWFsLnggKiBiW2pdLnggKyBub3JtYWwueSAqIGJbal0ueTtcclxuXHRcdFx0XHRpZiAobWluQiA9PT0gdW5kZWZpbmVkIHx8IHByb2plY3RlZCA8IG1pbkIpIHtcclxuXHRcdFx0XHRcdG1pbkIgPSBwcm9qZWN0ZWQ7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmIChtYXhCID09PSB1bmRlZmluZWQgfHwgcHJvamVjdGVkID4gbWF4Qikge1xyXG5cdFx0XHRcdFx0bWF4QiA9IHByb2plY3RlZDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmIChtYXhBIDwgbWluQiB8fCBtYXhCIDwgbWluQSkge1xyXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cmV0dXJuIHRydWU7XHJcbn1cclxuIiwiLypcbiAqIENvcHlyaWdodCAyMDE2IFNtYWxsIEJhdGNoLCBJbmMuXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3RcbiAqIHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mXG4gKiB0aGUgTGljZW5zZSBhdFxuICpcbiAqIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVFxuICogV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlXG4gKiBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlclxuICogdGhlIExpY2Vuc2UuXG4gKi9cbi8qIFdlYiBGb250IExvYWRlciB2MS42LjI2IC0gKGMpIEFkb2JlIFN5c3RlbXMsIEdvb2dsZS4gTGljZW5zZTogQXBhY2hlIDIuMCAqLyhmdW5jdGlvbigpe2Z1bmN0aW9uIGFhKGEsYixjKXtyZXR1cm4gYS5jYWxsLmFwcGx5KGEuYmluZCxhcmd1bWVudHMpfWZ1bmN0aW9uIGJhKGEsYixjKXtpZighYSl0aHJvdyBFcnJvcigpO2lmKDI8YXJndW1lbnRzLmxlbmd0aCl7dmFyIGQ9QXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLDIpO3JldHVybiBmdW5jdGlvbigpe3ZhciBjPUFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7QXJyYXkucHJvdG90eXBlLnVuc2hpZnQuYXBwbHkoYyxkKTtyZXR1cm4gYS5hcHBseShiLGMpfX1yZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4gYS5hcHBseShiLGFyZ3VtZW50cyl9fWZ1bmN0aW9uIHAoYSxiLGMpe3A9RnVuY3Rpb24ucHJvdG90eXBlLmJpbmQmJi0xIT1GdW5jdGlvbi5wcm90b3R5cGUuYmluZC50b1N0cmluZygpLmluZGV4T2YoXCJuYXRpdmUgY29kZVwiKT9hYTpiYTtyZXR1cm4gcC5hcHBseShudWxsLGFyZ3VtZW50cyl9dmFyIHE9RGF0ZS5ub3d8fGZ1bmN0aW9uKCl7cmV0dXJuK25ldyBEYXRlfTtmdW5jdGlvbiBjYShhLGIpe3RoaXMuYT1hO3RoaXMubT1ifHxhO3RoaXMuYz10aGlzLm0uZG9jdW1lbnR9dmFyIGRhPSEhd2luZG93LkZvbnRGYWNlO2Z1bmN0aW9uIHQoYSxiLGMsZCl7Yj1hLmMuY3JlYXRlRWxlbWVudChiKTtpZihjKWZvcih2YXIgZSBpbiBjKWMuaGFzT3duUHJvcGVydHkoZSkmJihcInN0eWxlXCI9PWU/Yi5zdHlsZS5jc3NUZXh0PWNbZV06Yi5zZXRBdHRyaWJ1dGUoZSxjW2VdKSk7ZCYmYi5hcHBlbmRDaGlsZChhLmMuY3JlYXRlVGV4dE5vZGUoZCkpO3JldHVybiBifWZ1bmN0aW9uIHUoYSxiLGMpe2E9YS5jLmdldEVsZW1lbnRzQnlUYWdOYW1lKGIpWzBdO2F8fChhPWRvY3VtZW50LmRvY3VtZW50RWxlbWVudCk7YS5pbnNlcnRCZWZvcmUoYyxhLmxhc3RDaGlsZCl9ZnVuY3Rpb24gdihhKXthLnBhcmVudE5vZGUmJmEucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChhKX1cbmZ1bmN0aW9uIHcoYSxiLGMpe2I9Ynx8W107Yz1jfHxbXTtmb3IodmFyIGQ9YS5jbGFzc05hbWUuc3BsaXQoL1xccysvKSxlPTA7ZTxiLmxlbmd0aDtlKz0xKXtmb3IodmFyIGY9ITEsZz0wO2c8ZC5sZW5ndGg7Zys9MSlpZihiW2VdPT09ZFtnXSl7Zj0hMDticmVha31mfHxkLnB1c2goYltlXSl9Yj1bXTtmb3IoZT0wO2U8ZC5sZW5ndGg7ZSs9MSl7Zj0hMTtmb3IoZz0wO2c8Yy5sZW5ndGg7Zys9MSlpZihkW2VdPT09Y1tnXSl7Zj0hMDticmVha31mfHxiLnB1c2goZFtlXSl9YS5jbGFzc05hbWU9Yi5qb2luKFwiIFwiKS5yZXBsYWNlKC9cXHMrL2csXCIgXCIpLnJlcGxhY2UoL15cXHMrfFxccyskLyxcIlwiKX1mdW5jdGlvbiB5KGEsYil7Zm9yKHZhciBjPWEuY2xhc3NOYW1lLnNwbGl0KC9cXHMrLyksZD0wLGU9Yy5sZW5ndGg7ZDxlO2QrKylpZihjW2RdPT1iKXJldHVybiEwO3JldHVybiExfVxuZnVuY3Rpb24geihhKXtpZihcInN0cmluZ1wiPT09dHlwZW9mIGEuZilyZXR1cm4gYS5mO3ZhciBiPWEubS5sb2NhdGlvbi5wcm90b2NvbDtcImFib3V0OlwiPT1iJiYoYj1hLmEubG9jYXRpb24ucHJvdG9jb2wpO3JldHVyblwiaHR0cHM6XCI9PWI/XCJodHRwczpcIjpcImh0dHA6XCJ9ZnVuY3Rpb24gZWEoYSl7cmV0dXJuIGEubS5sb2NhdGlvbi5ob3N0bmFtZXx8YS5hLmxvY2F0aW9uLmhvc3RuYW1lfVxuZnVuY3Rpb24gQShhLGIsYyl7ZnVuY3Rpb24gZCgpe2smJmUmJmYmJihrKGcpLGs9bnVsbCl9Yj10KGEsXCJsaW5rXCIse3JlbDpcInN0eWxlc2hlZXRcIixocmVmOmIsbWVkaWE6XCJhbGxcIn0pO3ZhciBlPSExLGY9ITAsZz1udWxsLGs9Y3x8bnVsbDtkYT8oYi5vbmxvYWQ9ZnVuY3Rpb24oKXtlPSEwO2QoKX0sYi5vbmVycm9yPWZ1bmN0aW9uKCl7ZT0hMDtnPUVycm9yKFwiU3R5bGVzaGVldCBmYWlsZWQgdG8gbG9hZFwiKTtkKCl9KTpzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7ZT0hMDtkKCl9LDApO3UoYSxcImhlYWRcIixiKX1cbmZ1bmN0aW9uIEIoYSxiLGMsZCl7dmFyIGU9YS5jLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaGVhZFwiKVswXTtpZihlKXt2YXIgZj10KGEsXCJzY3JpcHRcIix7c3JjOmJ9KSxnPSExO2Yub25sb2FkPWYub25yZWFkeXN0YXRlY2hhbmdlPWZ1bmN0aW9uKCl7Z3x8dGhpcy5yZWFkeVN0YXRlJiZcImxvYWRlZFwiIT10aGlzLnJlYWR5U3RhdGUmJlwiY29tcGxldGVcIiE9dGhpcy5yZWFkeVN0YXRlfHwoZz0hMCxjJiZjKG51bGwpLGYub25sb2FkPWYub25yZWFkeXN0YXRlY2hhbmdlPW51bGwsXCJIRUFEXCI9PWYucGFyZW50Tm9kZS50YWdOYW1lJiZlLnJlbW92ZUNoaWxkKGYpKX07ZS5hcHBlbmRDaGlsZChmKTtzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7Z3x8KGc9ITAsYyYmYyhFcnJvcihcIlNjcmlwdCBsb2FkIHRpbWVvdXRcIikpKX0sZHx8NUUzKTtyZXR1cm4gZn1yZXR1cm4gbnVsbH07ZnVuY3Rpb24gQygpe3RoaXMuYT0wO3RoaXMuYz1udWxsfWZ1bmN0aW9uIEQoYSl7YS5hKys7cmV0dXJuIGZ1bmN0aW9uKCl7YS5hLS07RShhKX19ZnVuY3Rpb24gRihhLGIpe2EuYz1iO0UoYSl9ZnVuY3Rpb24gRShhKXswPT1hLmEmJmEuYyYmKGEuYygpLGEuYz1udWxsKX07ZnVuY3Rpb24gRyhhKXt0aGlzLmE9YXx8XCItXCJ9Ry5wcm90b3R5cGUuYz1mdW5jdGlvbihhKXtmb3IodmFyIGI9W10sYz0wO2M8YXJndW1lbnRzLmxlbmd0aDtjKyspYi5wdXNoKGFyZ3VtZW50c1tjXS5yZXBsYWNlKC9bXFxXX10rL2csXCJcIikudG9Mb3dlckNhc2UoKSk7cmV0dXJuIGIuam9pbih0aGlzLmEpfTtmdW5jdGlvbiBIKGEsYil7dGhpcy5jPWE7dGhpcy5mPTQ7dGhpcy5hPVwiblwiO3ZhciBjPShifHxcIm40XCIpLm1hdGNoKC9eKFtuaW9dKShbMS05XSkkL2kpO2MmJih0aGlzLmE9Y1sxXSx0aGlzLmY9cGFyc2VJbnQoY1syXSwxMCkpfWZ1bmN0aW9uIGZhKGEpe3JldHVybiBJKGEpK1wiIFwiKyhhLmYrXCIwMFwiKStcIiAzMDBweCBcIitKKGEuYyl9ZnVuY3Rpb24gSihhKXt2YXIgYj1bXTthPWEuc3BsaXQoLyxcXHMqLyk7Zm9yKHZhciBjPTA7YzxhLmxlbmd0aDtjKyspe3ZhciBkPWFbY10ucmVwbGFjZSgvWydcIl0vZyxcIlwiKTstMSE9ZC5pbmRleE9mKFwiIFwiKXx8L15cXGQvLnRlc3QoZCk/Yi5wdXNoKFwiJ1wiK2QrXCInXCIpOmIucHVzaChkKX1yZXR1cm4gYi5qb2luKFwiLFwiKX1mdW5jdGlvbiBLKGEpe3JldHVybiBhLmErYS5mfWZ1bmN0aW9uIEkoYSl7dmFyIGI9XCJub3JtYWxcIjtcIm9cIj09PWEuYT9iPVwib2JsaXF1ZVwiOlwiaVwiPT09YS5hJiYoYj1cIml0YWxpY1wiKTtyZXR1cm4gYn1cbmZ1bmN0aW9uIGdhKGEpe3ZhciBiPTQsYz1cIm5cIixkPW51bGw7YSYmKChkPWEubWF0Y2goLyhub3JtYWx8b2JsaXF1ZXxpdGFsaWMpL2kpKSYmZFsxXSYmKGM9ZFsxXS5zdWJzdHIoMCwxKS50b0xvd2VyQ2FzZSgpKSwoZD1hLm1hdGNoKC8oWzEtOV0wMHxub3JtYWx8Ym9sZCkvaSkpJiZkWzFdJiYoL2JvbGQvaS50ZXN0KGRbMV0pP2I9NzovWzEtOV0wMC8udGVzdChkWzFdKSYmKGI9cGFyc2VJbnQoZFsxXS5zdWJzdHIoMCwxKSwxMCkpKSk7cmV0dXJuIGMrYn07ZnVuY3Rpb24gaGEoYSxiKXt0aGlzLmM9YTt0aGlzLmY9YS5tLmRvY3VtZW50LmRvY3VtZW50RWxlbWVudDt0aGlzLmg9Yjt0aGlzLmE9bmV3IEcoXCItXCIpO3RoaXMuaj0hMSE9PWIuZXZlbnRzO3RoaXMuZz0hMSE9PWIuY2xhc3Nlc31mdW5jdGlvbiBpYShhKXthLmcmJncoYS5mLFthLmEuYyhcIndmXCIsXCJsb2FkaW5nXCIpXSk7TChhLFwibG9hZGluZ1wiKX1mdW5jdGlvbiBNKGEpe2lmKGEuZyl7dmFyIGI9eShhLmYsYS5hLmMoXCJ3ZlwiLFwiYWN0aXZlXCIpKSxjPVtdLGQ9W2EuYS5jKFwid2ZcIixcImxvYWRpbmdcIildO2J8fGMucHVzaChhLmEuYyhcIndmXCIsXCJpbmFjdGl2ZVwiKSk7dyhhLmYsYyxkKX1MKGEsXCJpbmFjdGl2ZVwiKX1mdW5jdGlvbiBMKGEsYixjKXtpZihhLmomJmEuaFtiXSlpZihjKWEuaFtiXShjLmMsSyhjKSk7ZWxzZSBhLmhbYl0oKX07ZnVuY3Rpb24gamEoKXt0aGlzLmM9e319ZnVuY3Rpb24ga2EoYSxiLGMpe3ZhciBkPVtdLGU7Zm9yKGUgaW4gYilpZihiLmhhc093blByb3BlcnR5KGUpKXt2YXIgZj1hLmNbZV07ZiYmZC5wdXNoKGYoYltlXSxjKSl9cmV0dXJuIGR9O2Z1bmN0aW9uIE4oYSxiKXt0aGlzLmM9YTt0aGlzLmY9Yjt0aGlzLmE9dCh0aGlzLmMsXCJzcGFuXCIse1wiYXJpYS1oaWRkZW5cIjpcInRydWVcIn0sdGhpcy5mKX1mdW5jdGlvbiBPKGEpe3UoYS5jLFwiYm9keVwiLGEuYSl9ZnVuY3Rpb24gUChhKXtyZXR1cm5cImRpc3BsYXk6YmxvY2s7cG9zaXRpb246YWJzb2x1dGU7dG9wOi05OTk5cHg7bGVmdDotOTk5OXB4O2ZvbnQtc2l6ZTozMDBweDt3aWR0aDphdXRvO2hlaWdodDphdXRvO2xpbmUtaGVpZ2h0Om5vcm1hbDttYXJnaW46MDtwYWRkaW5nOjA7Zm9udC12YXJpYW50Om5vcm1hbDt3aGl0ZS1zcGFjZTpub3dyYXA7Zm9udC1mYW1pbHk6XCIrSihhLmMpK1wiO1wiKyhcImZvbnQtc3R5bGU6XCIrSShhKStcIjtmb250LXdlaWdodDpcIisoYS5mK1wiMDBcIikrXCI7XCIpfTtmdW5jdGlvbiBRKGEsYixjLGQsZSxmKXt0aGlzLmc9YTt0aGlzLmo9Yjt0aGlzLmE9ZDt0aGlzLmM9Yzt0aGlzLmY9ZXx8M0UzO3RoaXMuaD1mfHx2b2lkIDB9US5wcm90b3R5cGUuc3RhcnQ9ZnVuY3Rpb24oKXt2YXIgYT10aGlzLmMubS5kb2N1bWVudCxiPXRoaXMsYz1xKCksZD1uZXcgUHJvbWlzZShmdW5jdGlvbihkLGUpe2Z1bmN0aW9uIGsoKXtxKCktYz49Yi5mP2UoKTphLmZvbnRzLmxvYWQoZmEoYi5hKSxiLmgpLnRoZW4oZnVuY3Rpb24oYSl7MTw9YS5sZW5ndGg/ZCgpOnNldFRpbWVvdXQoaywyNSl9LGZ1bmN0aW9uKCl7ZSgpfSl9aygpfSksZT1uZXcgUHJvbWlzZShmdW5jdGlvbihhLGQpe3NldFRpbWVvdXQoZCxiLmYpfSk7UHJvbWlzZS5yYWNlKFtlLGRdKS50aGVuKGZ1bmN0aW9uKCl7Yi5nKGIuYSl9LGZ1bmN0aW9uKCl7Yi5qKGIuYSl9KX07ZnVuY3Rpb24gUihhLGIsYyxkLGUsZixnKXt0aGlzLnY9YTt0aGlzLkI9Yjt0aGlzLmM9Yzt0aGlzLmE9ZDt0aGlzLnM9Z3x8XCJCRVNic3d5XCI7dGhpcy5mPXt9O3RoaXMudz1lfHwzRTM7dGhpcy51PWZ8fG51bGw7dGhpcy5vPXRoaXMuaj10aGlzLmg9dGhpcy5nPW51bGw7dGhpcy5nPW5ldyBOKHRoaXMuYyx0aGlzLnMpO3RoaXMuaD1uZXcgTih0aGlzLmMsdGhpcy5zKTt0aGlzLmo9bmV3IE4odGhpcy5jLHRoaXMucyk7dGhpcy5vPW5ldyBOKHRoaXMuYyx0aGlzLnMpO2E9bmV3IEgodGhpcy5hLmMrXCIsc2VyaWZcIixLKHRoaXMuYSkpO2E9UChhKTt0aGlzLmcuYS5zdHlsZS5jc3NUZXh0PWE7YT1uZXcgSCh0aGlzLmEuYytcIixzYW5zLXNlcmlmXCIsSyh0aGlzLmEpKTthPVAoYSk7dGhpcy5oLmEuc3R5bGUuY3NzVGV4dD1hO2E9bmV3IEgoXCJzZXJpZlwiLEsodGhpcy5hKSk7YT1QKGEpO3RoaXMuai5hLnN0eWxlLmNzc1RleHQ9YTthPW5ldyBIKFwic2Fucy1zZXJpZlwiLEsodGhpcy5hKSk7YT1cblAoYSk7dGhpcy5vLmEuc3R5bGUuY3NzVGV4dD1hO08odGhpcy5nKTtPKHRoaXMuaCk7Tyh0aGlzLmopO08odGhpcy5vKX12YXIgUz17RDpcInNlcmlmXCIsQzpcInNhbnMtc2VyaWZcIn0sVD1udWxsO2Z1bmN0aW9uIFUoKXtpZihudWxsPT09VCl7dmFyIGE9L0FwcGxlV2ViS2l0XFwvKFswLTldKykoPzpcXC4oWzAtOV0rKSkvLmV4ZWMod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQpO1Q9ISFhJiYoNTM2PnBhcnNlSW50KGFbMV0sMTApfHw1MzY9PT1wYXJzZUludChhWzFdLDEwKSYmMTE+PXBhcnNlSW50KGFbMl0sMTApKX1yZXR1cm4gVH1SLnByb3RvdHlwZS5zdGFydD1mdW5jdGlvbigpe3RoaXMuZi5zZXJpZj10aGlzLmouYS5vZmZzZXRXaWR0aDt0aGlzLmZbXCJzYW5zLXNlcmlmXCJdPXRoaXMuby5hLm9mZnNldFdpZHRoO3RoaXMuQT1xKCk7bGEodGhpcyl9O1xuZnVuY3Rpb24gbWEoYSxiLGMpe2Zvcih2YXIgZCBpbiBTKWlmKFMuaGFzT3duUHJvcGVydHkoZCkmJmI9PT1hLmZbU1tkXV0mJmM9PT1hLmZbU1tkXV0pcmV0dXJuITA7cmV0dXJuITF9ZnVuY3Rpb24gbGEoYSl7dmFyIGI9YS5nLmEub2Zmc2V0V2lkdGgsYz1hLmguYS5vZmZzZXRXaWR0aCxkOyhkPWI9PT1hLmYuc2VyaWYmJmM9PT1hLmZbXCJzYW5zLXNlcmlmXCJdKXx8KGQ9VSgpJiZtYShhLGIsYykpO2Q/cSgpLWEuQT49YS53P1UoKSYmbWEoYSxiLGMpJiYobnVsbD09PWEudXx8YS51Lmhhc093blByb3BlcnR5KGEuYS5jKSk/VihhLGEudik6VihhLGEuQik6bmEoYSk6VihhLGEudil9ZnVuY3Rpb24gbmEoYSl7c2V0VGltZW91dChwKGZ1bmN0aW9uKCl7bGEodGhpcyl9LGEpLDUwKX1mdW5jdGlvbiBWKGEsYil7c2V0VGltZW91dChwKGZ1bmN0aW9uKCl7dih0aGlzLmcuYSk7dih0aGlzLmguYSk7dih0aGlzLmouYSk7dih0aGlzLm8uYSk7Yih0aGlzLmEpfSxhKSwwKX07ZnVuY3Rpb24gVyhhLGIsYyl7dGhpcy5jPWE7dGhpcy5hPWI7dGhpcy5mPTA7dGhpcy5vPXRoaXMuaj0hMTt0aGlzLnM9Y312YXIgWD1udWxsO1cucHJvdG90eXBlLmc9ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcy5hO2IuZyYmdyhiLmYsW2IuYS5jKFwid2ZcIixhLmMsSyhhKS50b1N0cmluZygpLFwiYWN0aXZlXCIpXSxbYi5hLmMoXCJ3ZlwiLGEuYyxLKGEpLnRvU3RyaW5nKCksXCJsb2FkaW5nXCIpLGIuYS5jKFwid2ZcIixhLmMsSyhhKS50b1N0cmluZygpLFwiaW5hY3RpdmVcIildKTtMKGIsXCJmb250YWN0aXZlXCIsYSk7dGhpcy5vPSEwO29hKHRoaXMpfTtcblcucHJvdG90eXBlLmg9ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcy5hO2lmKGIuZyl7dmFyIGM9eShiLmYsYi5hLmMoXCJ3ZlwiLGEuYyxLKGEpLnRvU3RyaW5nKCksXCJhY3RpdmVcIikpLGQ9W10sZT1bYi5hLmMoXCJ3ZlwiLGEuYyxLKGEpLnRvU3RyaW5nKCksXCJsb2FkaW5nXCIpXTtjfHxkLnB1c2goYi5hLmMoXCJ3ZlwiLGEuYyxLKGEpLnRvU3RyaW5nKCksXCJpbmFjdGl2ZVwiKSk7dyhiLmYsZCxlKX1MKGIsXCJmb250aW5hY3RpdmVcIixhKTtvYSh0aGlzKX07ZnVuY3Rpb24gb2EoYSl7MD09LS1hLmYmJmEuaiYmKGEubz8oYT1hLmEsYS5nJiZ3KGEuZixbYS5hLmMoXCJ3ZlwiLFwiYWN0aXZlXCIpXSxbYS5hLmMoXCJ3ZlwiLFwibG9hZGluZ1wiKSxhLmEuYyhcIndmXCIsXCJpbmFjdGl2ZVwiKV0pLEwoYSxcImFjdGl2ZVwiKSk6TShhLmEpKX07ZnVuY3Rpb24gcGEoYSl7dGhpcy5qPWE7dGhpcy5hPW5ldyBqYTt0aGlzLmg9MDt0aGlzLmY9dGhpcy5nPSEwfXBhLnByb3RvdHlwZS5sb2FkPWZ1bmN0aW9uKGEpe3RoaXMuYz1uZXcgY2EodGhpcy5qLGEuY29udGV4dHx8dGhpcy5qKTt0aGlzLmc9ITEhPT1hLmV2ZW50czt0aGlzLmY9ITEhPT1hLmNsYXNzZXM7cWEodGhpcyxuZXcgaGEodGhpcy5jLGEpLGEpfTtcbmZ1bmN0aW9uIHJhKGEsYixjLGQsZSl7dmFyIGY9MD09LS1hLmg7KGEuZnx8YS5nKSYmc2V0VGltZW91dChmdW5jdGlvbigpe3ZhciBhPWV8fG51bGwsaz1kfHxudWxsfHx7fTtpZigwPT09Yy5sZW5ndGgmJmYpTShiLmEpO2Vsc2V7Yi5mKz1jLmxlbmd0aDtmJiYoYi5qPWYpO3ZhciBoLG09W107Zm9yKGg9MDtoPGMubGVuZ3RoO2grKyl7dmFyIGw9Y1toXSxuPWtbbC5jXSxyPWIuYSx4PWw7ci5nJiZ3KHIuZixbci5hLmMoXCJ3ZlwiLHguYyxLKHgpLnRvU3RyaW5nKCksXCJsb2FkaW5nXCIpXSk7TChyLFwiZm9udGxvYWRpbmdcIix4KTtyPW51bGw7bnVsbD09PVgmJihYPXdpbmRvdy5Gb250RmFjZT8oeD0vR2Vja28uKkZpcmVmb3hcXC8oXFxkKykvLmV4ZWMod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQpKT80MjxwYXJzZUludCh4WzFdLDEwKTohMDohMSk7WD9yPW5ldyBRKHAoYi5nLGIpLHAoYi5oLGIpLGIuYyxsLGIucyxuKTpyPW5ldyBSKHAoYi5nLGIpLHAoYi5oLGIpLGIuYyxsLGIucyxhLFxubik7bS5wdXNoKHIpfWZvcihoPTA7aDxtLmxlbmd0aDtoKyspbVtoXS5zdGFydCgpfX0sMCl9ZnVuY3Rpb24gcWEoYSxiLGMpe3ZhciBkPVtdLGU9Yy50aW1lb3V0O2lhKGIpO3ZhciBkPWthKGEuYSxjLGEuYyksZj1uZXcgVyhhLmMsYixlKTthLmg9ZC5sZW5ndGg7Yj0wO2ZvcihjPWQubGVuZ3RoO2I8YztiKyspZFtiXS5sb2FkKGZ1bmN0aW9uKGIsZCxjKXtyYShhLGYsYixkLGMpfSl9O2Z1bmN0aW9uIHNhKGEsYil7dGhpcy5jPWE7dGhpcy5hPWJ9ZnVuY3Rpb24gdGEoYSxiLGMpe3ZhciBkPXooYS5jKTthPShhLmEuYXBpfHxcImZhc3QuZm9udHMubmV0L2pzYXBpXCIpLnJlcGxhY2UoL14uKmh0dHAocz8pOihcXC9cXC8pPy8sXCJcIik7cmV0dXJuIGQrXCIvL1wiK2ErXCIvXCIrYitcIi5qc1wiKyhjP1wiP3Y9XCIrYzpcIlwiKX1cbnNhLnByb3RvdHlwZS5sb2FkPWZ1bmN0aW9uKGEpe2Z1bmN0aW9uIGIoKXtpZihmW1wiX19tdGlfZm50THN0XCIrZF0pe3ZhciBjPWZbXCJfX210aV9mbnRMc3RcIitkXSgpLGU9W10saDtpZihjKWZvcih2YXIgbT0wO208Yy5sZW5ndGg7bSsrKXt2YXIgbD1jW21dLmZvbnRmYW1pbHk7dm9pZCAwIT1jW21dLmZvbnRTdHlsZSYmdm9pZCAwIT1jW21dLmZvbnRXZWlnaHQ/KGg9Y1ttXS5mb250U3R5bGUrY1ttXS5mb250V2VpZ2h0LGUucHVzaChuZXcgSChsLGgpKSk6ZS5wdXNoKG5ldyBIKGwpKX1hKGUpfWVsc2Ugc2V0VGltZW91dChmdW5jdGlvbigpe2IoKX0sNTApfXZhciBjPXRoaXMsZD1jLmEucHJvamVjdElkLGU9Yy5hLnZlcnNpb247aWYoZCl7dmFyIGY9Yy5jLm07Qih0aGlzLmMsdGEoYyxkLGUpLGZ1bmN0aW9uKGUpe2U/YShbXSk6KGZbXCJfX01vbm90eXBlQ29uZmlndXJhdGlvbl9fXCIrZF09ZnVuY3Rpb24oKXtyZXR1cm4gYy5hfSxiKCkpfSkuaWQ9XCJfX01vbm90eXBlQVBJU2NyaXB0X19cIitcbmR9ZWxzZSBhKFtdKX07ZnVuY3Rpb24gdWEoYSxiKXt0aGlzLmM9YTt0aGlzLmE9Yn11YS5wcm90b3R5cGUubG9hZD1mdW5jdGlvbihhKXt2YXIgYixjLGQ9dGhpcy5hLnVybHN8fFtdLGU9dGhpcy5hLmZhbWlsaWVzfHxbXSxmPXRoaXMuYS50ZXN0U3RyaW5nc3x8e30sZz1uZXcgQztiPTA7Zm9yKGM9ZC5sZW5ndGg7YjxjO2IrKylBKHRoaXMuYyxkW2JdLEQoZykpO3ZhciBrPVtdO2I9MDtmb3IoYz1lLmxlbmd0aDtiPGM7YisrKWlmKGQ9ZVtiXS5zcGxpdChcIjpcIiksZFsxXSlmb3IodmFyIGg9ZFsxXS5zcGxpdChcIixcIiksbT0wO208aC5sZW5ndGg7bSs9MSlrLnB1c2gobmV3IEgoZFswXSxoW21dKSk7ZWxzZSBrLnB1c2gobmV3IEgoZFswXSkpO0YoZyxmdW5jdGlvbigpe2EoayxmKX0pfTtmdW5jdGlvbiB2YShhLGIsYyl7YT90aGlzLmM9YTp0aGlzLmM9Yit3YTt0aGlzLmE9W107dGhpcy5mPVtdO3RoaXMuZz1jfHxcIlwifXZhciB3YT1cIi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzXCI7ZnVuY3Rpb24geGEoYSxiKXtmb3IodmFyIGM9Yi5sZW5ndGgsZD0wO2Q8YztkKyspe3ZhciBlPWJbZF0uc3BsaXQoXCI6XCIpOzM9PWUubGVuZ3RoJiZhLmYucHVzaChlLnBvcCgpKTt2YXIgZj1cIlwiOzI9PWUubGVuZ3RoJiZcIlwiIT1lWzFdJiYoZj1cIjpcIik7YS5hLnB1c2goZS5qb2luKGYpKX19XG5mdW5jdGlvbiB5YShhKXtpZigwPT1hLmEubGVuZ3RoKXRocm93IEVycm9yKFwiTm8gZm9udHMgdG8gbG9hZCFcIik7aWYoLTEhPWEuYy5pbmRleE9mKFwia2l0PVwiKSlyZXR1cm4gYS5jO2Zvcih2YXIgYj1hLmEubGVuZ3RoLGM9W10sZD0wO2Q8YjtkKyspYy5wdXNoKGEuYVtkXS5yZXBsYWNlKC8gL2csXCIrXCIpKTtiPWEuYytcIj9mYW1pbHk9XCIrYy5qb2luKFwiJTdDXCIpOzA8YS5mLmxlbmd0aCYmKGIrPVwiJnN1YnNldD1cIithLmYuam9pbihcIixcIikpOzA8YS5nLmxlbmd0aCYmKGIrPVwiJnRleHQ9XCIrZW5jb2RlVVJJQ29tcG9uZW50KGEuZykpO3JldHVybiBifTtmdW5jdGlvbiB6YShhKXt0aGlzLmY9YTt0aGlzLmE9W107dGhpcy5jPXt9fVxudmFyIEFhPXtsYXRpbjpcIkJFU2Jzd3lcIixcImxhdGluLWV4dFwiOlwiXFx1MDBlN1xcdTAwZjZcXHUwMGZjXFx1MDExZlxcdTAxNWZcIixjeXJpbGxpYzpcIlxcdTA0MzlcXHUwNDRmXFx1MDQxNlwiLGdyZWVrOlwiXFx1MDNiMVxcdTAzYjJcXHUwM2EzXCIsa2htZXI6XCJcXHUxNzgwXFx1MTc4MVxcdTE3ODJcIixIYW51bWFuOlwiXFx1MTc4MFxcdTE3ODFcXHUxNzgyXCJ9LEJhPXt0aGluOlwiMVwiLGV4dHJhbGlnaHQ6XCIyXCIsXCJleHRyYS1saWdodFwiOlwiMlwiLHVsdHJhbGlnaHQ6XCIyXCIsXCJ1bHRyYS1saWdodFwiOlwiMlwiLGxpZ2h0OlwiM1wiLHJlZ3VsYXI6XCI0XCIsYm9vazpcIjRcIixtZWRpdW06XCI1XCIsXCJzZW1pLWJvbGRcIjpcIjZcIixzZW1pYm9sZDpcIjZcIixcImRlbWktYm9sZFwiOlwiNlwiLGRlbWlib2xkOlwiNlwiLGJvbGQ6XCI3XCIsXCJleHRyYS1ib2xkXCI6XCI4XCIsZXh0cmFib2xkOlwiOFwiLFwidWx0cmEtYm9sZFwiOlwiOFwiLHVsdHJhYm9sZDpcIjhcIixibGFjazpcIjlcIixoZWF2eTpcIjlcIixsOlwiM1wiLHI6XCI0XCIsYjpcIjdcIn0sQ2E9e2k6XCJpXCIsaXRhbGljOlwiaVwiLG46XCJuXCIsbm9ybWFsOlwiblwifSxcbkRhPS9eKHRoaW58KD86KD86ZXh0cmF8dWx0cmEpLT8pP2xpZ2h0fHJlZ3VsYXJ8Ym9va3xtZWRpdW18KD86KD86c2VtaXxkZW1pfGV4dHJhfHVsdHJhKS0/KT9ib2xkfGJsYWNrfGhlYXZ5fGx8cnxifFsxLTldMDApPyhufGl8bm9ybWFsfGl0YWxpYyk/JC87XG5mdW5jdGlvbiBFYShhKXtmb3IodmFyIGI9YS5mLmxlbmd0aCxjPTA7YzxiO2MrKyl7dmFyIGQ9YS5mW2NdLnNwbGl0KFwiOlwiKSxlPWRbMF0ucmVwbGFjZSgvXFwrL2csXCIgXCIpLGY9W1wibjRcIl07aWYoMjw9ZC5sZW5ndGgpe3ZhciBnO3ZhciBrPWRbMV07Zz1bXTtpZihrKWZvcih2YXIgaz1rLnNwbGl0KFwiLFwiKSxoPWsubGVuZ3RoLG09MDttPGg7bSsrKXt2YXIgbDtsPWtbbV07aWYobC5tYXRjaCgvXltcXHctXSskLykpe3ZhciBuPURhLmV4ZWMobC50b0xvd2VyQ2FzZSgpKTtpZihudWxsPT1uKWw9XCJcIjtlbHNle2w9blsyXTtsPW51bGw9PWx8fFwiXCI9PWw/XCJuXCI6Q2FbbF07bj1uWzFdO2lmKG51bGw9PW58fFwiXCI9PW4pbj1cIjRcIjtlbHNlIHZhciByPUJhW25dLG49cj9yOmlzTmFOKG4pP1wiNFwiOm4uc3Vic3RyKDAsMSk7bD1bbCxuXS5qb2luKFwiXCIpfX1lbHNlIGw9XCJcIjtsJiZnLnB1c2gobCl9MDxnLmxlbmd0aCYmKGY9Zyk7Mz09ZC5sZW5ndGgmJihkPWRbMl0sZz1bXSxkPWQ/ZC5zcGxpdChcIixcIik6XG5nLDA8ZC5sZW5ndGgmJihkPUFhW2RbMF1dKSYmKGEuY1tlXT1kKSl9YS5jW2VdfHwoZD1BYVtlXSkmJihhLmNbZV09ZCk7Zm9yKGQ9MDtkPGYubGVuZ3RoO2QrPTEpYS5hLnB1c2gobmV3IEgoZSxmW2RdKSl9fTtmdW5jdGlvbiBGYShhLGIpe3RoaXMuYz1hO3RoaXMuYT1ifXZhciBHYT17QXJpbW86ITAsQ291c2luZTohMCxUaW5vczohMH07RmEucHJvdG90eXBlLmxvYWQ9ZnVuY3Rpb24oYSl7dmFyIGI9bmV3IEMsYz10aGlzLmMsZD1uZXcgdmEodGhpcy5hLmFwaSx6KGMpLHRoaXMuYS50ZXh0KSxlPXRoaXMuYS5mYW1pbGllczt4YShkLGUpO3ZhciBmPW5ldyB6YShlKTtFYShmKTtBKGMseWEoZCksRChiKSk7RihiLGZ1bmN0aW9uKCl7YShmLmEsZi5jLEdhKX0pfTtmdW5jdGlvbiBIYShhLGIpe3RoaXMuYz1hO3RoaXMuYT1ifUhhLnByb3RvdHlwZS5sb2FkPWZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMuYS5pZCxjPXRoaXMuYy5tO2I/Qih0aGlzLmMsKHRoaXMuYS5hcGl8fFwiaHR0cHM6Ly91c2UudHlwZWtpdC5uZXRcIikrXCIvXCIrYitcIi5qc1wiLGZ1bmN0aW9uKGIpe2lmKGIpYShbXSk7ZWxzZSBpZihjLlR5cGVraXQmJmMuVHlwZWtpdC5jb25maWcmJmMuVHlwZWtpdC5jb25maWcuZm4pe2I9Yy5UeXBla2l0LmNvbmZpZy5mbjtmb3IodmFyIGU9W10sZj0wO2Y8Yi5sZW5ndGg7Zis9Milmb3IodmFyIGc9YltmXSxrPWJbZisxXSxoPTA7aDxrLmxlbmd0aDtoKyspZS5wdXNoKG5ldyBIKGcsa1toXSkpO3RyeXtjLlR5cGVraXQubG9hZCh7ZXZlbnRzOiExLGNsYXNzZXM6ITEsYXN5bmM6ITB9KX1jYXRjaChtKXt9YShlKX19LDJFMyk6YShbXSl9O2Z1bmN0aW9uIElhKGEsYil7dGhpcy5jPWE7dGhpcy5mPWI7dGhpcy5hPVtdfUlhLnByb3RvdHlwZS5sb2FkPWZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMuZi5pZCxjPXRoaXMuYy5tLGQ9dGhpcztiPyhjLl9fd2ViZm9udGZvbnRkZWNrbW9kdWxlX198fChjLl9fd2ViZm9udGZvbnRkZWNrbW9kdWxlX189e30pLGMuX193ZWJmb250Zm9udGRlY2ttb2R1bGVfX1tiXT1mdW5jdGlvbihiLGMpe2Zvcih2YXIgZz0wLGs9Yy5mb250cy5sZW5ndGg7ZzxrOysrZyl7dmFyIGg9Yy5mb250c1tnXTtkLmEucHVzaChuZXcgSChoLm5hbWUsZ2EoXCJmb250LXdlaWdodDpcIitoLndlaWdodCtcIjtmb250LXN0eWxlOlwiK2guc3R5bGUpKSl9YShkLmEpfSxCKHRoaXMuYyx6KHRoaXMuYykrKHRoaXMuZi5hcGl8fFwiLy9mLmZvbnRkZWNrLmNvbS9zL2Nzcy9qcy9cIikrZWEodGhpcy5jKStcIi9cIitiK1wiLmpzXCIsZnVuY3Rpb24oYil7YiYmYShbXSl9KSk6YShbXSl9O3ZhciBZPW5ldyBwYSh3aW5kb3cpO1kuYS5jLmN1c3RvbT1mdW5jdGlvbihhLGIpe3JldHVybiBuZXcgdWEoYixhKX07WS5hLmMuZm9udGRlY2s9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gbmV3IElhKGIsYSl9O1kuYS5jLm1vbm90eXBlPWZ1bmN0aW9uKGEsYil7cmV0dXJuIG5ldyBzYShiLGEpfTtZLmEuYy50eXBla2l0PWZ1bmN0aW9uKGEsYil7cmV0dXJuIG5ldyBIYShiLGEpfTtZLmEuYy5nb29nbGU9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gbmV3IEZhKGIsYSl9O3ZhciBaPXtsb2FkOnAoWS5sb2FkLFkpfTtcImZ1bmN0aW9uXCI9PT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShmdW5jdGlvbigpe3JldHVybiBafSk6XCJ1bmRlZmluZWRcIiE9PXR5cGVvZiBtb2R1bGUmJm1vZHVsZS5leHBvcnRzP21vZHVsZS5leHBvcnRzPVo6KHdpbmRvdy5XZWJGb250PVosd2luZG93LldlYkZvbnRDb25maWcmJlkubG9hZCh3aW5kb3cuV2ViRm9udENvbmZpZykpO30oKSk7XG4iXSwic291cmNlUm9vdCI6IiJ9