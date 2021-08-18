var home;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Main.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Main": () => (/* binding */ Main)
/* harmony export */ });
/* harmony import */ var _core_PixiApp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/core/PixiApp.ts");
/* harmony import */ var _core_Stats__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/core/Stats.ts");
/* harmony import */ var _scenes_fire_FireEffectScene__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/scenes/fire/FireEffectScene.ts");
/* harmony import */ var _hud_HUD__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/hud/HUD.ts");
/* harmony import */ var _scenes_SceneNames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/scenes/SceneNames.ts");
/* harmony import */ var _scenes_cards_deck_CardsDeck__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/scenes/cards-deck/CardsDeck.ts");
/* harmony import */ var _core_views_stage_StageEvents__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/core/views/stage/StageEvents.ts");
/* harmony import */ var _scenes_text_TextScene__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/scenes/text/TextScene.ts");
/* harmony import */ var _core_Assets__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/core/Assets.ts");









class Main extends _core_PixiApp__WEBPACK_IMPORTED_MODULE_0__.PixiApp {
    onCreated() {
        const stats = new _core_Stats__WEBPACK_IMPORTED_MODULE_1__.Stats();
        stats.y = 60;
        document.body.appendChild(stats.dom);
        this.stage.ticker.add(() => {
            stats.update();
        });
        void this.show();
    }
    async show() {
        await _core_Assets__WEBPACK_IMPORTED_MODULE_8__.default.load();
        this.showScene(_scenes_SceneNames__WEBPACK_IMPORTED_MODULE_4__.SceneNames.FIRE);
        this._hud = new _hud_HUD__WEBPACK_IMPORTED_MODULE_3__.HUD();
        this.stage.addChild(this._hud);
        this._hud.position.set((this.stage.w - this._hud.width) * 0.5, 20);
        this.stage.on(_core_views_stage_StageEvents__WEBPACK_IMPORTED_MODULE_6__.StageEvents.RESIZE, () => {
            this._currentScene.setSize(this.stage.w, this.stage.h);
            this._hud.position.set((this.stage.w - this._hud.width) * 0.5, 20);
        }, this);
        this.stage.on(_core_views_stage_StageEvents__WEBPACK_IMPORTED_MODULE_6__.StageEvents.SWITCH_SCENE, this.showScene.bind(this));
    }
    showScene(sceneName) {
        if (this._currentScene) {
            this.stage.removeChild(this._currentScene);
        }
        switch (sceneName) {
            case _scenes_SceneNames__WEBPACK_IMPORTED_MODULE_4__.SceneNames.CARDS:
                this._currentScene = new _scenes_cards_deck_CardsDeck__WEBPACK_IMPORTED_MODULE_5__.CardsDeckScene();
                break;
            case _scenes_SceneNames__WEBPACK_IMPORTED_MODULE_4__.SceneNames.FIRE:
                this._currentScene = new _scenes_fire_FireEffectScene__WEBPACK_IMPORTED_MODULE_2__.FireEffectScene();
                break;
            case _scenes_SceneNames__WEBPACK_IMPORTED_MODULE_4__.SceneNames.TEXT:
                this._currentScene = new _scenes_text_TextScene__WEBPACK_IMPORTED_MODULE_7__.TextScene();
                break;
            default:
                break;
        }
        this.stage.addChildAt(this._currentScene, 0);
        this._currentScene.setSize(this.stage.w, this.stage.h);
    }
}


/***/ }),

/***/ "./src/Utils.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "lerp": () => (/* binding */ lerp),
/* harmony export */   "genInteger": () => (/* binding */ genInteger),
/* harmony export */   "getUniqueNumber": () => (/* binding */ getUniqueNumber)
/* harmony export */ });
const lerp = (start, end, t) => {
    return start * (1 - t) + end * t;
};
const genInteger = (min, max) => {
    return Math.floor(Math.random() * (max + 1 - min) + min);
};
const getUniqueNumber = (min, max, n) => {
    const res = new Set();
    while (res.size < n)
        res.add(genInteger(min, max));
    return Array.from(res);
};


/***/ }),

/***/ "./src/core/Assets.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var pixi_js_legacy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/pixi.js-legacy/lib/pixi-legacy.es.js");

class Assets {
    constructor() {
        this._textures = {};
    }
    texture(id) {
        return this._textures[id];
    }
    load() {
        const loader = new pixi_js_legacy__WEBPACK_IMPORTED_MODULE_0__.Loader();
        loader.defaultQueryString = `v=${Math.random()}`;
        ["coin.png"].forEach((name) => {
            loader.add(name, `img/${name}`, () => this.onLoaded(name, loader));
        });
        return new Promise((resolve) => loader.load(resolve));
    }
    onLoaded(id, loader) {
        this._textures[id] = loader.resources[id].texture;
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new Assets());


/***/ }),

/***/ "./src/core/PixiApp.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PixiApp": () => (/* binding */ PixiApp)
/* harmony export */ });
/* harmony import */ var pixi_js_legacy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/pixi.js-legacy/lib/pixi-legacy.es.js");
/* harmony import */ var _views_stage_Stage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/core/views/stage/Stage.ts");
/* harmony import */ var _views_View__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/core/views/View.ts");



class PixiApp {
    constructor(canvasId) {
        let canvas;
        if (canvasId) {
            canvas = document.getElementById(canvasId);
        }
        else {
            canvas = document.createElement("canvas");
            canvas.setAttribute("id", "gameCanvas");
            document.body.appendChild(canvas);
        }
        const renderer = (0,pixi_js_legacy__WEBPACK_IMPORTED_MODULE_0__.autoDetectRenderer)({
            backgroundColor: 0x0,
            view: canvas,
            // forceCanvas: true,
            // rounding resolution to avoid troubles with invisible fonts on some Android devices
            resolution: Math.ceil(devicePixelRatio),
        });
        const ticker = new pixi_js_legacy__WEBPACK_IMPORTED_MODULE_0__.Ticker();
        ticker.add(() => renderer.render(this._stage), undefined, pixi_js_legacy__WEBPACK_IMPORTED_MODULE_0__.UPDATE_PRIORITY.LOW);
        ticker.start();
        this._stage = new _views_stage_Stage__WEBPACK_IMPORTED_MODULE_1__.Stage(renderer, ticker);
        this._stage.resize();
        _views_View__WEBPACK_IMPORTED_MODULE_2__.View.Stage = this._stage;
        this.onCreated();
    }
    get stage() {
        return this._stage;
    }
    onCreated() {
        // override me
    }
}


/***/ }),

/***/ "./src/core/Stats.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Stats": () => (/* binding */ Stats)
/* harmony export */ });
/* eslint-disable max-classes-per-file */
/**
 * @author mrdoob / http://mrdoob.com/
 * github https://github.com/mrdoob/stats.js
 */
class Stats {
    constructor() {
        var _a;
        this._mode = 0;
        this._x = 0;
        this._y = 0;
        const style = `position:absolute;
		top:${this._x}px;
		left:${this._y}px;
		cursor:pointer;
		opacity:0.9;
		z-index:10000`;
        this._container = document.createElement("div");
        this._container.style.cssText = style;
        this._container.addEventListener("click", (event) => {
            event.preventDefault();
            this.showPanel(++this._mode % this._container.children.length);
        }, false);
        this._beginTime = (performance || Date).now();
        this._prevTime = this._beginTime;
        this._frames = 0;
        this._fpsPanel = this.addPanel(new Panel("FPS", "#0ff", "#002"));
        this._msPanel = this.addPanel(new Panel("MS", "#0f0", "#020"));
        this._performance = window.performance;
        if ((_a = this._performance) === null || _a === void 0 ? void 0 : _a.memory) {
            this._memPanel = this.addPanel(new Panel("MB", "#f08", "#201"));
        }
        this.showPanel(0);
    }
    get x() {
        return this._x;
    }
    set x(value) {
        this._x = value;
        // this._style.left = `${this._x}`;
        this._container.style.left = `${this._x}px`;
    }
    get y() {
        return this._y;
    }
    set y(value) {
        this._y = value;
        // this._style.top = `${this._y}`;
        this._container.style.top = `${this._y}px`;
    }
    get dom() {
        return this._container;
    }
    addPanel(panel) {
        this._container.appendChild(panel.dom);
        return panel;
    }
    showPanel(id) {
        for (let i = 0; i < this._container.children.length; i++) {
            const child = this._container.children[i];
            child.style.display = i === id ? "block" : "none";
        }
        this._mode = id;
    }
    begin() {
        this._beginTime = (this._performance || Date).now();
    }
    end() {
        this._frames++;
        const time = (this._performance || Date).now();
        this._msPanel.update(time - this._beginTime, 200);
        if (time >= this._prevTime + 1000) {
            this.updateFPS((this._frames * 1000) / (time - this._prevTime));
            this._prevTime = time;
            this._frames = 0;
            if (this._memPanel) {
                const memory = this._performance.memory;
                this._memPanel.update(memory.usedJSHeapSize / 1048576, memory.jsHeapSizeLimit / 1048576);
            }
        }
        return time;
    }
    update() {
        this._beginTime = this.end();
    }
    updateFPS(fps) {
        this._fpsPanel.update(fps, 100);
    }
}
class Panel {
    constructor(name, fg, bg) {
        this._min = Infinity;
        this._max = 0;
        this._name = name;
        this._fg = fg;
        this._bg = bg;
        this._scale = Math.round(window.devicePixelRatio || 1);
        this._width = 80 * this._scale;
        this._height = 48 * this._scale;
        this._textX = 3 * this._scale;
        this._textY = 2 * this._scale;
        this._graphX = 3 * this._scale;
        this._graphY = 15 * this._scale;
        this._graphWidth = 74 * this._scale;
        this._graphHeight = 30 * this._scale;
        this._canvas = document.createElement("canvas");
        this._canvas.width = this._width;
        this._canvas.height = this._height;
        this._canvas.style.cssText = "width:80px;height:48px";
        this._context = this._canvas.getContext("2d");
        this._context.font = `bold ${9 * this._scale}px Helvetica,Arial,sans-serif`;
        this._context.textBaseline = "top";
        this._context.fillStyle = this._bg;
        this._context.fillRect(0, 0, this._width, this._height);
        this._context.fillStyle = this._fg;
        this._context.fillText(this._name, this._textX, this._textY);
        this._context.fillRect(this._graphX, this._graphY, this._graphWidth, this._graphHeight);
        this._context.fillStyle = this._bg;
        this._context.globalAlpha = 0.9;
        this._context.fillRect(this._graphX, this._graphY, this._graphWidth, this._graphHeight);
        this.dom = this._canvas;
    }
    update(value, maxValue) {
        this._min = Math.min(this._min, value);
        this._max = Math.max(this._max, value);
        this._context.fillStyle = this._bg;
        this._context.globalAlpha = 1;
        this._context.fillRect(0, 0, this._width, this._graphY);
        this._context.fillStyle = this._fg;
        this._context.fillText(`${Math.round(value)} ${this._name} (${Math.round(this._min)}-${Math.round(this._max)})`, this._textX, this._textY);
        this._context.drawImage(this._canvas, this._graphX + this._scale, this._graphY, this._graphWidth - this._scale, this._graphHeight, this._graphX, this._graphY, this._graphWidth - this._scale, this._graphHeight);
        this._context.fillRect(this._graphX + this._graphWidth - this._scale, this._graphY, this._scale, this._graphHeight);
        this._context.fillStyle = this._bg;
        this._context.globalAlpha = 0.9;
        this._context.fillRect(this._graphX + this._graphWidth - this._scale, this._graphY, this._scale, Math.round((1 - (value / maxValue)) * this._graphHeight));
    }
}


/***/ }),

/***/ "./src/core/views/View.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "View": () => (/* binding */ View)
/* harmony export */ });
/* harmony import */ var pixi_js_legacy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/pixi.js-legacy/lib/pixi-legacy.es.js");

class View extends pixi_js_legacy__WEBPACK_IMPORTED_MODULE_0__.Container {
    constructor() {
        super(...arguments);
        this._w = 0;
        this._h = 0;
    }
    get stage() {
        return View.Stage;
    }
    onResize() {
        // override me
    }
    get w() {
        return this._w;
    }
    get h() {
        return this._h;
    }
    setSize(width, height) {
        this._w = width;
        this._h = height;
        this.onResize();
    }
}


/***/ }),

/***/ "./src/core/views/stage/Stage.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Stage": () => (/* binding */ Stage)
/* harmony export */ });
/* harmony import */ var pixi_js_legacy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/pixi.js-legacy/lib/pixi-legacy.es.js");
/* harmony import */ var _StageEvents__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/core/views/stage/StageEvents.ts");


class Stage extends pixi_js_legacy__WEBPACK_IMPORTED_MODULE_0__.Container {
    constructor(renderer, ticker) {
        super();
        this._maxWidth = Infinity;
        this._maxHeight = Infinity;
        this.onWindowResize = () => {
            let newWidth;
            let newHeight;
            if (window.outerHeight !== 0) {
                newWidth = window.innerWidth;
                newHeight = window.innerHeight;
            }
            else {
                // for iOS
                newWidth = document.body.scrollWidth;
                newHeight = document.body.scrollHeight;
            }
            this.setSize(newWidth, newHeight);
        };
        if (!renderer) {
            throw new ReferenceError("Renderer undefined!");
        }
        this._renderer = renderer;
        this._ticker = ticker;
        this._w = this._renderer.width;
        this._h = this._renderer.height;
        document.addEventListener("contextmenu", event => event.preventDefault());
        this.interactive = true;
    }
    get renderer() {
        return this._renderer;
    }
    get ticker() {
        return this._ticker;
    }
    resize() {
        window.addEventListener("resize", this.onWindowResize);
        this.onWindowResize();
    }
    get w() {
        return this._w;
    }
    get h() {
        return this._h;
    }
    setSize(width, height) {
        if (width !== this._w || height !== this._h) {
            this._w = Math.min(width, this._maxWidth);
            this._h = Math.min(height, this._maxHeight);
            this.applySize(this._w, this._h);
        }
    }
    applySize(width, height) {
        this._renderer.view.style.width = `${width}px`;
        this._renderer.view.style.height = `${height}px`;
        this._renderer.resize(width, height);
        this.emit(_StageEvents__WEBPACK_IMPORTED_MODULE_1__.StageEvents.RESIZE, this);
    }
}


/***/ }),

/***/ "./src/core/views/stage/StageEvents.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StageEvents": () => (/* binding */ StageEvents)
/* harmony export */ });
class StageEvents {
}
StageEvents.RESIZE = "resize";
StageEvents.SWITCH_SCENE = "switch_scene";


/***/ }),

/***/ "./src/hud/Button.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Button": () => (/* binding */ Button)
/* harmony export */ });
/* harmony import */ var pixi_js_legacy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/pixi.js-legacy/lib/pixi-legacy.es.js");
/* harmony import */ var _core_views_View__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/core/views/View.ts");


class Button extends _core_views_View__WEBPACK_IMPORTED_MODULE_1__.View {
    constructor(name) {
        super();
        this.interactive = true;
        this.buttonMode = true;
        this._bg = new pixi_js_legacy__WEBPACK_IMPORTED_MODULE_0__.Sprite(pixi_js_legacy__WEBPACK_IMPORTED_MODULE_0__.Texture.WHITE);
        this._bg.tint = 0x00ffee;
        this._bg.anchor.set(0.5);
        this.addChild(this._bg);
        this._text = new pixi_js_legacy__WEBPACK_IMPORTED_MODULE_0__.Text(name, {
            fontSize: 16,
        });
        this._text.anchor.set(0.5);
        this.addChild(this._text);
    }
    onResize() {
        super.onResize();
        this._bg.width = this.w;
        this._bg.height = this.h;
        this._bg.position.set(this.w * 0.5, this.h * 0.5);
        this._text.position.set(this.w * 0.5, this.h * 0.5);
    }
}


/***/ }),

/***/ "./src/hud/HUD.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HUD": () => (/* binding */ HUD)
/* harmony export */ });
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/hud/Button.ts");
/* harmony import */ var _core_views_View__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/core/views/View.ts");
/* harmony import */ var _core_views_stage_StageEvents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/core/views/stage/StageEvents.ts");
/* harmony import */ var _scenes_SceneNames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/scenes/SceneNames.ts");




class HUD extends _core_views_View__WEBPACK_IMPORTED_MODULE_1__.View {
    constructor() {
        super();
        const width = 100;
        const height = 42;
        const gap = 15;
        const cardsDeckButton = new _Button__WEBPACK_IMPORTED_MODULE_0__.Button("cards scene");
        this.addChild(cardsDeckButton);
        cardsDeckButton.setSize(width, height);
        cardsDeckButton.on("pointerup", () => this.stage.emit(_core_views_stage_StageEvents__WEBPACK_IMPORTED_MODULE_2__.StageEvents.SWITCH_SCENE, _scenes_SceneNames__WEBPACK_IMPORTED_MODULE_3__.SceneNames.CARDS));
        const fireButton = new _Button__WEBPACK_IMPORTED_MODULE_0__.Button("fire scene");
        this.addChild(fireButton);
        fireButton.setSize(width, height);
        fireButton.x = cardsDeckButton.x + cardsDeckButton.w + gap;
        fireButton.on("pointerup", () => this.stage.emit(_core_views_stage_StageEvents__WEBPACK_IMPORTED_MODULE_2__.StageEvents.SWITCH_SCENE, _scenes_SceneNames__WEBPACK_IMPORTED_MODULE_3__.SceneNames.FIRE));
        const textButton = new _Button__WEBPACK_IMPORTED_MODULE_0__.Button("text scene");
        this.addChild(textButton);
        textButton.setSize(width, height);
        textButton.x = fireButton.x + fireButton.w + gap;
        textButton.on("pointerup", () => this.stage.emit(_core_views_stage_StageEvents__WEBPACK_IMPORTED_MODULE_2__.StageEvents.SWITCH_SCENE, _scenes_SceneNames__WEBPACK_IMPORTED_MODULE_3__.SceneNames.TEXT));
    }
}


/***/ }),

/***/ "./src/scenes/SceneNames.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SceneNames": () => (/* binding */ SceneNames)
/* harmony export */ });
var SceneNames;
(function (SceneNames) {
    SceneNames[SceneNames["FIRE"] = 0] = "FIRE";
    SceneNames[SceneNames["CARDS"] = 1] = "CARDS";
    SceneNames[SceneNames["TEXT"] = 2] = "TEXT";
})(SceneNames || (SceneNames = {}));


/***/ }),

/***/ "./src/scenes/cards-deck/CardsDeck.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CardsDeckScene": () => (/* binding */ CardsDeckScene)
/* harmony export */ });
/* harmony import */ var _core_views_View__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/core/views/View.ts");
/* harmony import */ var pixi_js_legacy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/pixi.js-legacy/lib/pixi-legacy.es.js");
/* harmony import */ var _PlaneRotation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/scenes/cards-deck/PlaneRotation.ts");
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/Utils.ts");




class CardsDeckScene extends _core_views_View__WEBPACK_IMPORTED_MODULE_0__.View {
    constructor() {
        super();
        this._cardW = 140;
        this._cardH = 190;
        this._gap = 2;
        this._cardsContainer = new pixi_js_legacy__WEBPACK_IMPORTED_MODULE_1__.Container();
        this._cardsContainer.sortableChildren = true;
        this.addChild(this._cardsContainer);
        const texture = this.generateCardTexture();
        for (let i = 0; i < 144; i++) {
            const card = new _PlaneRotation__WEBPACK_IMPORTED_MODULE_2__.PlaneRotation(texture);
            card.pivot.set(card.width * 0.5, card.height * 0.5);
            card.tint = Math.random() * 0xFFFFFF;
            this._cardsContainer.addChild(card);
            card.position.set((0,_Utils__WEBPACK_IMPORTED_MODULE_3__.genInteger)(-5, 5) - this.stage.w * 0.2, -i * this._gap);
            card.projRotationX = Math.PI / 5;
            card.rotate();
        }
        this.moveCard(0);
    }
    moveCard(cardIndex) {
        const startTime = this.stage.ticker.lastTime;
        const duration = 2000;
        const reverseIndex = this._cardsContainer.children.length - cardIndex - 1;
        const card = this._cardsContainer.children[reverseIndex];
        if (this._lastTweenUpdateFunc) {
            this.stage.ticker.remove(this._lastTweenUpdateFunc);
            this._lastTweenUpdateFunc = undefined;
        }
        if (card) {
            card.zIndex = cardIndex;
            const offset = card.x;
            this._lastTweenUpdateFunc = () => {
                // console.log(this.stage.ticker.lastTime)
                const progress = (this.stage.ticker.lastTime - startTime) / duration;
                if (progress >= 1) {
                    this.moveCard(++cardIndex);
                }
                else {
                    card.x = (0,_Utils__WEBPACK_IMPORTED_MODULE_3__.lerp)(offset, Math.abs(offset), progress % 1);
                    card.y = (0,_Utils__WEBPACK_IMPORTED_MODULE_3__.lerp)(-reverseIndex * this._gap, -cardIndex * this._gap, progress % 1);
                }
            };
            this.stage.ticker.add(this._lastTweenUpdateFunc);
        }
    }
    generateCardTexture() {
        const container = new pixi_js_legacy__WEBPACK_IMPORTED_MODULE_1__.Container();
        const bg = new pixi_js_legacy__WEBPACK_IMPORTED_MODULE_1__.Sprite(pixi_js_legacy__WEBPACK_IMPORTED_MODULE_1__.Texture.WHITE);
        bg.width = this._cardW;
        bg.height = this._cardH;
        container.addChild(bg);
        const g = new pixi_js_legacy__WEBPACK_IMPORTED_MODULE_1__.Graphics();
        g.position.set(bg.width * 0.5, bg.height * 0.5);
        container.addChild(g);
        g.beginFill(0x000000);
        g.drawCircle(0, 0, 50);
        g.endFill();
        const resolution = this.stage.renderer.resolution;
        return this.stage.renderer.generateTexture(container, pixi_js_legacy__WEBPACK_IMPORTED_MODULE_1__.SCALE_MODES.LINEAR, resolution);
    }
    onResize() {
        super.onResize();
        this._cardsContainer.position.set(this.w * 0.5, (this.h - -this._cardsContainer.height - this._cardH) * 0.5);
    }
    destroy(options) {
        this.stage.ticker.remove(this._lastTweenUpdateFunc);
        super.destroy(options);
    }
}


/***/ }),

/***/ "./src/scenes/cards-deck/PlaneRotation.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlaneRotation": () => (/* binding */ PlaneRotation)
/* harmony export */ });
/* harmony import */ var pixi_js_legacy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/pixi.js-legacy/lib/pixi-legacy.es.js");

class PlaneRotation extends pixi_js_legacy__WEBPACK_IMPORTED_MODULE_0__.SimplePlane {
    constructor(texture, perspective = 0.1, verticesX = 5, verticesY = 5) {
        super(texture, verticesX, verticesY);
        this.verticesX = verticesX;
        this.verticesY = verticesY;
        this.projRotationX = Math.PI / 2;
        this._perspective = perspective;
        this.setParams();
    }
    setParams() {
        const segments = new pixi_js_legacy__WEBPACK_IMPORTED_MODULE_0__.Point(this.verticesX - 1, this.verticesY - 1);
        this._center = new pixi_js_legacy__WEBPACK_IMPORTED_MODULE_0__.Point(segments.x * 0.5, segments.y * 0.5);
        this._size = new pixi_js_legacy__WEBPACK_IMPORTED_MODULE_0__.Point(this.texture.width / segments.x, this.texture.height / segments.y);
        this._total = this.verticesX * this.verticesY;
    }
    changeTexture(texture) {
        this.texture = texture;
        this.setParams();
    }
    rotate() {
        const verts = [];
        for (let i = 0; i < this._total; i++) {
            const x = (i % this.verticesX);
            const y = ((i / this.verticesX) | 0);
            const lenY = (y - this._center.y);
            const w = (x - this._center.x) * this._perspective;
            const newX = Math.cos(this.projRotationX) * lenY * w + x;
            const newY = Math.sin(this.projRotationX) * lenY + this._center.y;
            verts.push(newX * this._size.x, newY * this._size.y);
        }
        this.verticesBuffer.update(new Float32Array(verts));
    }
}


/***/ }),

/***/ "./src/scenes/fire/FireEffectScene.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FireEffectScene": () => (/* binding */ FireEffectScene)
/* harmony export */ });
/* harmony import */ var _core_views_View__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/core/views/View.ts");
/* harmony import */ var pixi_js_legacy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/pixi.js-legacy/lib/pixi-legacy.es.js");
/* harmony import */ var _Particle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/scenes/fire/Particle.ts");
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/Utils.ts");




class FireEffectScene extends _core_views_View__WEBPACK_IMPORTED_MODULE_0__.View {
    constructor() {
        super();
        this._particles = [];
        this._speed = 20;
        this._size = 40;
        this._max = 10;
        this._pointer = new pixi_js_legacy__WEBPACK_IMPORTED_MODULE_1__.Point();
        this._container = new pixi_js_legacy__WEBPACK_IMPORTED_MODULE_1__.Container();
        this.addChild(this._container);
        this._canvas = document.createElement("canvas");
        this._canvas.width = 200 * this.stage.renderer.resolution;
        this._canvas.height = 500 * this.stage.renderer.resolution;
        this._canvas.style.width = "200px";
        this._canvas.style.height = "500px";
        this._ctx = this._canvas.getContext("2d");
        this._ctx.globalCompositeOperation = "lighter";
        this.interactive = true;
        this.on("pointermove", (e) => this._pointer.copyFrom(e.data.global));
        this._pointer.set(this.stage.w * 0.5, this.stage.h * 0.5);
        this._linkToFunc = this.update.bind(this);
        this.stage.ticker.add(this._linkToFunc);
        this._texture = pixi_js_legacy__WEBPACK_IMPORTED_MODULE_1__.Texture.from(this._canvas);
        for (let i = 0; i < 10; i++) {
            const sprite = new pixi_js_legacy__WEBPACK_IMPORTED_MODULE_1__.Sprite(this._texture);
            sprite.blendMode = pixi_js_legacy__WEBPACK_IMPORTED_MODULE_1__.BLEND_MODES.ADD;
            sprite.position.set((0,_Utils__WEBPACK_IMPORTED_MODULE_3__.genInteger)(-20, 20), (0,_Utils__WEBPACK_IMPORTED_MODULE_3__.genInteger)(-50, 20));
            this._container.addChild(sprite);
            this._container.pivot.set(this._container.width * 0.5, this._container.height * 0.9);
        }
    }
    createNewParticle() {
        const vx = this._speed * (Math.random() * 2 - 1) / 2;
        const vy = -Math.random() * 2 * this._speed;
        const x = this._canvas.width * 0.5 + (0,_Utils__WEBPACK_IMPORTED_MODULE_3__.genInteger)(-30, 30);
        const y = this._canvas.height - (0,_Utils__WEBPACK_IMPORTED_MODULE_3__.genInteger)(0, 20) - 50;
        const p = new _Particle__WEBPACK_IMPORTED_MODULE_2__.Particle(x, y, vx, vy, (0,_Utils__WEBPACK_IMPORTED_MODULE_3__.genInteger)(this._size * 0.1, this._size));
        this._particles.push(p);
    }
    update() {
        this.updateCanvas();
        this._texture.update();
        this._container.position.copyFrom(this._pointer);
    }
    updateCanvas() {
        for (let i = 0; i < 20; i++) {
            this.createNewParticle();
        }
        this._ctx.clearRect(0, 0, this._canvas.width, this._canvas.height);
        for (let i = 0; i < this._particles.length; i++) {
            const p = this._particles[i];
            this._ctx.fillStyle = `rgba(
				${255 - p.life * 2},${(p.life * 2) + 50}, ${p.life * 2}, ${((this._max - p.life) / this._max) * 0.4}
			)`;
            const radius = (this._max - p.life) / this._max * (p.size * 0.5) + (p.size * 0.5);
            this._ctx.beginPath();
            this._ctx.arc(p.x, p.y, radius, 0, 2 * Math.PI);
            this._ctx.closePath();
            this._ctx.fill();
            p.update();
            if (p.life >= this._max) {
                this._particles.splice(i, 1);
                i--;
            }
        }
    }
    destroy(options) {
        this.stage.ticker.remove(this._linkToFunc);
        this.off("pointermove");
        super.destroy(options);
    }
}


/***/ }),

/***/ "./src/scenes/fire/Particle.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Particle": () => (/* binding */ Particle)
/* harmony export */ });
class Particle {
    constructor(x, y, vx, vy, size) {
        this.x = x;
        this.y = y;
        this.vx = vx;
        this.vy = vy;
        this.size = size;
        this.life = 0;
    }
    update() {
        this.x += this.vx;
        this.y += this.vy;
        this.life++;
    }
}


/***/ }),

/***/ "./src/scenes/text/ImageText.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImageText": () => (/* binding */ ImageText)
/* harmony export */ });
/* harmony import */ var pixi_js_legacy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/pixi.js-legacy/lib/pixi-legacy.es.js");
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/Utils.ts");


class ImageText extends pixi_js_legacy__WEBPACK_IMPORTED_MODULE_0__.Text {
    constructor() {
        super(...arguments);
        this.imgCountInLine = 1;
    }
    //@ts-ignore
    updateText(respectDirty) {
        //@ts-ignore
        const style = this._style;
        // check if style has changed..
        //@ts-ignore
        if (this.localStyleID !== style.styleID) {
            //@ts-ignore
            this.dirty = true;
            //@ts-ignore
            this.localStyleID = style.styleID;
        }
        //@ts-ignore
        if (!this.dirty && respectDirty) {
            return;
        }
        //@ts-ignore
        //@ts-ignore
        this._font = this._style.toFontString();
        const context = this.context;
        //@ts-ignore
        const measured = pixi_js_legacy__WEBPACK_IMPORTED_MODULE_0__.TextMetrics.measureText(this._text, this._style, this._style.wordWrap, this.canvas);
        const imgsWidth = this.imgW * (this.imgCountInLine + 1);
        const width = measured.width + imgsWidth;
        const height = measured.height;
        const lines = measured.lines;
        const lineHeight = measured.lineHeight;
        const lineWidths = measured.lineWidths.map(width => width + imgsWidth);
        const maxLineWidth = Math.max(...lineWidths);
        const fontProperties = measured.fontProperties;
        this.canvas.width = Math.ceil((Math.max(1, width) + (style.padding * 2)) * this.resolution);
        this.canvas.height = Math.ceil((Math.max(1, height) + (style.padding * 2)) * this.resolution);
        context.scale(this.resolution, this.resolution);
        context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        //@ts-ignore
        context.font = this._font;
        context.strokeStyle = style.stroke;
        context.lineWidth = style.strokeThickness;
        context.textBaseline = style.textBaseline;
        context.lineJoin = style.lineJoin;
        context.miterLimit = style.miterLimit;
        let linePositionX;
        let linePositionY;
        if (style.dropShadow) {
            context.fillStyle = style.dropShadowColor;
            context.globalAlpha = style.dropShadowAlpha;
            context.shadowBlur = style.dropShadowBlur;
            if (style.dropShadowBlur > 0) {
                context.shadowColor = style.dropShadowColor;
            }
            const xShadowOffset = Math.cos(style.dropShadowAngle) * style.dropShadowDistance;
            const yShadowOffset = Math.sin(style.dropShadowAngle) * style.dropShadowDistance;
            for (let i = 0; i < lines.length; i++) {
                linePositionX = style.strokeThickness / 2;
                linePositionY = ((style.strokeThickness / 2) + (i * lineHeight)) + fontProperties.ascent;
                if (style.align === "right") {
                    linePositionX += maxLineWidth - lineWidths[i];
                }
                else if (style.align === "center") {
                    linePositionX += (maxLineWidth - lineWidths[i]) / 2;
                }
                if (style.fill) {
                    this.drawLetterSpacing(lines[i], linePositionX + xShadowOffset + style.padding, linePositionY + yShadowOffset + style.padding);
                    if (style.stroke && style.strokeThickness) {
                        context.strokeStyle = style.dropShadowColor;
                        this.drawLetterSpacing(lines[i], linePositionX + xShadowOffset + style.padding, linePositionY + yShadowOffset + style.padding, true);
                        context.strokeStyle = style.stroke;
                    }
                }
            }
        }
        // reset the shadow blur and alpha that was set by the drop shadow, for the regular text
        context.shadowBlur = 0;
        context.globalAlpha = 1;
        // set canvas text styles
        //@ts-ignore
        context.fillStyle = this._generateFillStyle(style, lines);
        // draw lines line by line
        for (let i = 0; i < lines.length; i++) {
            linePositionX = style.strokeThickness / 2;
            linePositionY = ((style.strokeThickness / 2) + (i * lineHeight)) + fontProperties.ascent;
            if (style.align === "right") {
                linePositionX += maxLineWidth - lineWidths[i];
            }
            else if (style.align === "center") {
                linePositionX += (maxLineWidth - lineWidths[i]) / 2;
            }
            if (style.stroke && style.strokeThickness) {
                this.drawLetterSpacing(lines[i], linePositionX + style.padding, linePositionY + style.padding, true);
            }
            if (style.fill) {
                this.drawLetterSpacing(lines[i], linePositionX + style.padding, linePositionY + style.padding);
            }
        }
        //@ts-ignore
        this.updateTexture();
    }
    drawLetterSpacing(text, x, y, isStroke = false) {
        const indexes = (0,_Utils__WEBPACK_IMPORTED_MODULE_1__.getUniqueNumber)(0, text.length, this.imgCountInLine);
        indexes.sort((a, b) => a - b);
        const texts = [];
        for (let i = 0; i < indexes.length; i++) {
            texts.push(text.slice(indexes[i - 1] || 0, indexes[i]));
        }
        texts.push(text.slice(indexes[indexes.length - 1], text.length));
        let offset = x;
        texts.forEach(text => {
            this.drawText(text, offset, y, isStroke);
            offset += this.context.measureText(text).width;
            const imgW = this.drawImg(offset, y);
            offset += imgW;
        });
    }
    drawText(text, x, y, isStroke = false) {
        //@ts-ignore
        const style = this._style;
        // letterSpacing of 0 means normal
        const letterSpacing = style.letterSpacing;
        if (letterSpacing === 0) {
            if (isStroke) {
                this.context.strokeText(text, x, y);
            }
            else {
                this.context.fillText(text, x, y);
            }
            return;
        }
        const characters = String.prototype.split.call(text, "");
        let currentPosition = x;
        let index = 0;
        let current = "";
        while (index < text.length) {
            current = characters[index++];
            if (isStroke) {
                this.context.strokeText(current, currentPosition, y);
            }
            else {
                this.context.fillText(current, currentPosition, y);
            }
            currentPosition += this.context.measureText(current).width + letterSpacing;
        }
    }
    get imgW() {
        const h = this.style.fontSize;
        return this.img.width * (h / this.img.height);
    }
    drawImg(x, y) {
        const h = this.style.fontSize;
        const w = this.img.width * (h / this.img.height);
        const resource = this.img.baseTexture.resource;
        if (resource instanceof pixi_js_legacy__WEBPACK_IMPORTED_MODULE_0__.resources.ImageResource) {
            this.context.drawImage(this.img.baseTexture.resource.source, x, y - h + 5, w, h);
        }
        return w;
    }
}


/***/ }),

/***/ "./src/scenes/text/TextScene.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TextScene": () => (/* binding */ TextScene)
/* harmony export */ });
/* harmony import */ var _core_views_View__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/core/views/View.ts");
/* harmony import */ var _ImageText__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/scenes/text/ImageText.ts");
/* harmony import */ var _core_Assets__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/core/Assets.ts");
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/Utils.ts");




class TextScene extends _core_views_View__WEBPACK_IMPORTED_MODULE_0__.View {
    constructor() {
        super();
        const texture = _core_Assets__WEBPACK_IMPORTED_MODULE_2__.default.texture("coin.png");
        const text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has "
            + "been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of "
            + "type and scrambled it to make a type specimen book. It has survived not only five centuries, but also "
            + "the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s "
            + "with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop"
            + " publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
        this._text = new _ImageText__WEBPACK_IMPORTED_MODULE_1__.ImageText(text, {
            fontSize: 24,
            fill: 0xffffff,
            breakWords: true,
            wordWrap: true,
            wordWrapWidth: this.stage.w,
            align: "center",
        });
        this._text.img = texture;
        this._text.imgCountInLine = 3;
        this._text.anchor.set(0.5);
        this.addChild(this._text);
        this._interval = setInterval(() => this.changeText(), 2000);
    }
    changeText() {
        this._text.imgCountInLine = (0,_Utils__WEBPACK_IMPORTED_MODULE_3__.genInteger)(0, 5);
        this._text.style.fontSize = (0,_Utils__WEBPACK_IMPORTED_MODULE_3__.genInteger)(12, 24);
    }
    onResize() {
        super.onResize();
        this._text.position.set(this.w * 0.5, this.h * 0.5);
    }
    destroy(options) {
        clearInterval(this._interval);
        super.destroy(options);
    }
}


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
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) var result = runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkhome"] = self["webpackChunkhome"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendor"], () => (__webpack_require__("./src/Main.ts")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	home = __webpack_exports__;
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLE1BQU0scUJBQXFCO1dBQzNCO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBOzs7OztVRTlDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaG9tZS8uL3NyYy9NYWluLnRzIiwid2VicGFjazovL2hvbWUvLi9zcmMvVXRpbHMudHMiLCJ3ZWJwYWNrOi8vaG9tZS8uL3NyYy9jb3JlL0Fzc2V0cy50cyIsIndlYnBhY2s6Ly9ob21lLy4vc3JjL2NvcmUvUGl4aUFwcC50cyIsIndlYnBhY2s6Ly9ob21lLy4vc3JjL2NvcmUvU3RhdHMudHMiLCJ3ZWJwYWNrOi8vaG9tZS8uL3NyYy9jb3JlL3ZpZXdzL1ZpZXcudHMiLCJ3ZWJwYWNrOi8vaG9tZS8uL3NyYy9jb3JlL3ZpZXdzL3N0YWdlL1N0YWdlLnRzIiwid2VicGFjazovL2hvbWUvLi9zcmMvY29yZS92aWV3cy9zdGFnZS9TdGFnZUV2ZW50cy50cyIsIndlYnBhY2s6Ly9ob21lLy4vc3JjL2h1ZC9CdXR0b24udHMiLCJ3ZWJwYWNrOi8vaG9tZS8uL3NyYy9odWQvSFVELnRzIiwid2VicGFjazovL2hvbWUvLi9zcmMvc2NlbmVzL1NjZW5lTmFtZXMudHMiLCJ3ZWJwYWNrOi8vaG9tZS8uL3NyYy9zY2VuZXMvY2FyZHMtZGVjay9DYXJkc0RlY2sudHMiLCJ3ZWJwYWNrOi8vaG9tZS8uL3NyYy9zY2VuZXMvY2FyZHMtZGVjay9QbGFuZVJvdGF0aW9uLnRzIiwid2VicGFjazovL2hvbWUvLi9zcmMvc2NlbmVzL2ZpcmUvRmlyZUVmZmVjdFNjZW5lLnRzIiwid2VicGFjazovL2hvbWUvLi9zcmMvc2NlbmVzL2ZpcmUvUGFydGljbGUudHMiLCJ3ZWJwYWNrOi8vaG9tZS8uL3NyYy9zY2VuZXMvdGV4dC9JbWFnZVRleHQudHMiLCJ3ZWJwYWNrOi8vaG9tZS8uL3NyYy9zY2VuZXMvdGV4dC9UZXh0U2NlbmUudHMiLCJ3ZWJwYWNrOi8vaG9tZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9ob21lL3dlYnBhY2svcnVudGltZS9jaHVuayBsb2FkZWQiLCJ3ZWJwYWNrOi8vaG9tZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9ob21lL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9ob21lL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vaG9tZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2hvbWUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9ob21lL3dlYnBhY2svcnVudGltZS9ub2RlIG1vZHVsZSBkZWNvcmF0b3IiLCJ3ZWJwYWNrOi8vaG9tZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9ob21lL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vaG9tZS93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vaG9tZS93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGl4aUFwcCB9IGZyb20gXCIuL2NvcmUvUGl4aUFwcFwiO1xuaW1wb3J0IHsgU3RhdHMgfSBmcm9tIFwiLi9jb3JlL1N0YXRzXCI7XG5pbXBvcnQgeyBGaXJlRWZmZWN0U2NlbmUgfSBmcm9tIFwiLi9zY2VuZXMvZmlyZS9GaXJlRWZmZWN0U2NlbmVcIjtcbmltcG9ydCB7IEhVRCB9IGZyb20gXCIuL2h1ZC9IVURcIjtcbmltcG9ydCB7IFZpZXcgfSBmcm9tIFwiLi9jb3JlL3ZpZXdzL1ZpZXdcIjtcbmltcG9ydCB7IFNjZW5lTmFtZXMgfSBmcm9tIFwiLi9zY2VuZXMvU2NlbmVOYW1lc1wiO1xuaW1wb3J0IHsgQ2FyZHNEZWNrU2NlbmUgfSBmcm9tIFwiLi9zY2VuZXMvY2FyZHMtZGVjay9DYXJkc0RlY2tcIjtcbmltcG9ydCB7IFN0YWdlRXZlbnRzIH0gZnJvbSBcIi4vY29yZS92aWV3cy9zdGFnZS9TdGFnZUV2ZW50c1wiO1xuaW1wb3J0IHsgVGV4dFNjZW5lIH0gZnJvbSBcIi4vc2NlbmVzL3RleHQvVGV4dFNjZW5lXCI7XG5pbXBvcnQgQXNzZXRzIGZyb20gXCIuL2NvcmUvQXNzZXRzXCI7XG5cbmV4cG9ydCBjbGFzcyBNYWluIGV4dGVuZHMgUGl4aUFwcCB7XG5cdHByaXZhdGUgX2N1cnJlbnRTY2VuZTogVmlldztcblx0cHJpdmF0ZSBfaHVkOiBIVUQ7XG5cblx0cHJvdGVjdGVkIG9uQ3JlYXRlZCgpIHtcblx0XHRjb25zdCBzdGF0cyA9IG5ldyBTdGF0cygpO1xuXHRcdHN0YXRzLnkgPSA2MDtcblx0XHRkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHN0YXRzLmRvbSk7XG5cblx0XHR0aGlzLnN0YWdlLnRpY2tlci5hZGQoKCkgPT4ge1xuXHRcdFx0c3RhdHMudXBkYXRlKCk7XG5cdFx0fSk7XG5cblx0XHR2b2lkIHRoaXMuc2hvdygpO1xuXHR9XG5cblx0cHJpdmF0ZSBhc3luYyBzaG93KCkge1xuXHRcdGF3YWl0IEFzc2V0cy5sb2FkKCk7XG5cblx0XHR0aGlzLnNob3dTY2VuZShTY2VuZU5hbWVzLkZJUkUpO1xuXG5cdFx0dGhpcy5faHVkID0gbmV3IEhVRCgpO1xuXHRcdHRoaXMuc3RhZ2UuYWRkQ2hpbGQodGhpcy5faHVkKTtcblx0XHR0aGlzLl9odWQucG9zaXRpb24uc2V0KCh0aGlzLnN0YWdlLncgLSB0aGlzLl9odWQud2lkdGgpICogMC41LCAyMCk7XG5cblx0XHR0aGlzLnN0YWdlLm9uKFN0YWdlRXZlbnRzLlJFU0laRSwgKCkgPT4ge1xuXHRcdFx0dGhpcy5fY3VycmVudFNjZW5lLnNldFNpemUodGhpcy5zdGFnZS53LCB0aGlzLnN0YWdlLmgpO1xuXHRcdFx0dGhpcy5faHVkLnBvc2l0aW9uLnNldCgodGhpcy5zdGFnZS53IC0gdGhpcy5faHVkLndpZHRoKSAqIDAuNSwgMjApO1xuXHRcdH0sIHRoaXMpO1xuXHRcdHRoaXMuc3RhZ2Uub24oU3RhZ2VFdmVudHMuU1dJVENIX1NDRU5FLCB0aGlzLnNob3dTY2VuZS5iaW5kKHRoaXMpKTtcblx0fVxuXG5cdHByaXZhdGUgc2hvd1NjZW5lKHNjZW5lTmFtZTogU2NlbmVOYW1lcykge1xuXHRcdGlmICh0aGlzLl9jdXJyZW50U2NlbmUpIHtcblx0XHRcdHRoaXMuc3RhZ2UucmVtb3ZlQ2hpbGQodGhpcy5fY3VycmVudFNjZW5lKTtcblx0XHR9XG5cblx0XHRzd2l0Y2ggKHNjZW5lTmFtZSkge1xuXHRcdFx0Y2FzZSBTY2VuZU5hbWVzLkNBUkRTOlxuXHRcdFx0XHR0aGlzLl9jdXJyZW50U2NlbmUgPSBuZXcgQ2FyZHNEZWNrU2NlbmUoKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIFNjZW5lTmFtZXMuRklSRTpcblx0XHRcdFx0dGhpcy5fY3VycmVudFNjZW5lID0gbmV3IEZpcmVFZmZlY3RTY2VuZSgpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgU2NlbmVOYW1lcy5URVhUOlxuXHRcdFx0XHR0aGlzLl9jdXJyZW50U2NlbmUgPSBuZXcgVGV4dFNjZW5lKCk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0YnJlYWs7XG5cdFx0fVxuXG5cdFx0dGhpcy5zdGFnZS5hZGRDaGlsZEF0KHRoaXMuX2N1cnJlbnRTY2VuZSwgMCk7XG5cdFx0dGhpcy5fY3VycmVudFNjZW5lLnNldFNpemUodGhpcy5zdGFnZS53LCB0aGlzLnN0YWdlLmgpO1xuXHR9XG59XG4iLCJleHBvcnQgY29uc3QgbGVycCA9IChzdGFydDogbnVtYmVyLCBlbmQ6IG51bWJlciwgdDogbnVtYmVyKSA9PiB7XG5cdHJldHVybiBzdGFydCAqICgxIC0gdCkgKyBlbmQgKiB0O1xufTtcblxuZXhwb3J0IGNvbnN0IGdlbkludGVnZXIgPSAobWluOiBudW1iZXIsIG1heDogbnVtYmVyKSA9PiB7XG5cdHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4ICsgMSAtIG1pbikgKyBtaW4pO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFVuaXF1ZU51bWJlciA9IChtaW46IG51bWJlciwgbWF4OiBudW1iZXIsIG46IG51bWJlcikgPT4ge1xuXHRjb25zdCByZXMgPSBuZXcgU2V0PG51bWJlcj4oKTtcblx0d2hpbGUgKHJlcy5zaXplIDwgbikgcmVzLmFkZChnZW5JbnRlZ2VyKG1pbiwgbWF4KSk7XG5cdHJldHVybiBBcnJheS5mcm9tKHJlcyk7XG59O1xuXG4iLCJpbXBvcnQgeyBMb2FkZXIsIFRleHR1cmUgfSBmcm9tIFwicGl4aS5qcy1sZWdhY3lcIjtcblxuY2xhc3MgQXNzZXRzIHtcblx0cHJpdmF0ZSBfdGV4dHVyZXM6IHsgW2tleTogc3RyaW5nXTogVGV4dHVyZSB9ID0ge307XG5cblx0cHVibGljIHRleHR1cmUoaWQ6IHN0cmluZykge1xuXHRcdHJldHVybiB0aGlzLl90ZXh0dXJlc1tpZF07XG5cdH1cblxuXHRwdWJsaWMgbG9hZCgpIHtcblx0XHRjb25zdCBsb2FkZXIgPSBuZXcgTG9hZGVyKCk7XG5cdFx0bG9hZGVyLmRlZmF1bHRRdWVyeVN0cmluZyA9IGB2PSR7TWF0aC5yYW5kb20oKX1gO1xuXHRcdFtcImNvaW4ucG5nXCJdLmZvckVhY2goKG5hbWUpID0+IHtcblx0XHRcdGxvYWRlci5hZGQobmFtZSwgYGltZy8ke25hbWV9YCwgKCkgPT4gdGhpcy5vbkxvYWRlZChuYW1lLCBsb2FkZXIpKTtcblx0XHR9KTtcblxuXHRcdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gbG9hZGVyLmxvYWQocmVzb2x2ZSkpO1xuXHR9XG5cblx0cHJpdmF0ZSBvbkxvYWRlZChpZDogc3RyaW5nLCBsb2FkZXI6IExvYWRlcikge1xuXHRcdHRoaXMuX3RleHR1cmVzW2lkXSA9IGxvYWRlci5yZXNvdXJjZXNbaWRdLnRleHR1cmU7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IEFzc2V0cygpO1xuIiwiaW1wb3J0IHsgYXV0b0RldGVjdFJlbmRlcmVyLCBUaWNrZXIsIFVQREFURV9QUklPUklUWSB9IGZyb20gXCJwaXhpLmpzLWxlZ2FjeVwiO1xuaW1wb3J0IHsgU3RhZ2UgfSBmcm9tIFwiLi92aWV3cy9zdGFnZS9TdGFnZVwiO1xuaW1wb3J0IHsgVmlldyB9IGZyb20gXCIuL3ZpZXdzL1ZpZXdcIjtcblxuZXhwb3J0IGNsYXNzIFBpeGlBcHAge1xuXHRwcml2YXRlIF9zdGFnZTogU3RhZ2U7XG5cblx0Y29uc3RydWN0b3IoY2FudmFzSWQ/OiBzdHJpbmcpIHtcblx0XHRsZXQgY2FudmFzO1xuXHRcdGlmIChjYW52YXNJZCkge1xuXHRcdFx0Y2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY2FudmFzSWQpIGFzIEhUTUxDYW52YXNFbGVtZW50O1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xuXHRcdFx0Y2FudmFzLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZ2FtZUNhbnZhc1wiKTtcblx0XHRcdGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY2FudmFzKTtcblx0XHR9XG5cblx0XHRjb25zdCByZW5kZXJlciA9IGF1dG9EZXRlY3RSZW5kZXJlcih7XG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IDB4MCxcblx0XHRcdHZpZXc6IGNhbnZhcyxcblx0XHRcdC8vIGZvcmNlQ2FudmFzOiB0cnVlLFxuXHRcdFx0Ly8gcm91bmRpbmcgcmVzb2x1dGlvbiB0byBhdm9pZCB0cm91YmxlcyB3aXRoIGludmlzaWJsZSBmb250cyBvbiBzb21lIEFuZHJvaWQgZGV2aWNlc1xuXHRcdFx0cmVzb2x1dGlvbjogTWF0aC5jZWlsKGRldmljZVBpeGVsUmF0aW8pLFxuXHRcdH0pO1xuXG5cdFx0Y29uc3QgdGlja2VyID0gbmV3IFRpY2tlcigpO1xuXHRcdHRpY2tlci5hZGQoKCkgPT4gcmVuZGVyZXIucmVuZGVyKHRoaXMuX3N0YWdlKSwgdW5kZWZpbmVkLCBVUERBVEVfUFJJT1JJVFkuTE9XKTtcblx0XHR0aWNrZXIuc3RhcnQoKTtcblxuXHRcdHRoaXMuX3N0YWdlID0gbmV3IFN0YWdlKHJlbmRlcmVyLCB0aWNrZXIpO1xuXHRcdHRoaXMuX3N0YWdlLnJlc2l6ZSgpO1xuXG5cdFx0Vmlldy5TdGFnZSA9IHRoaXMuX3N0YWdlO1xuXG5cdFx0dGhpcy5vbkNyZWF0ZWQoKTtcblx0fVxuXG5cdHByb3RlY3RlZCBnZXQgc3RhZ2UoKSB7XG5cdFx0cmV0dXJuIHRoaXMuX3N0YWdlO1xuXHR9XG5cblx0cHJvdGVjdGVkIG9uQ3JlYXRlZCgpIHtcblx0XHQvLyBvdmVycmlkZSBtZVxuXHR9XG59XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBtYXgtY2xhc3Nlcy1wZXItZmlsZSAqL1xuLyoqXG4gKiBAYXV0aG9yIG1yZG9vYiAvIGh0dHA6Ly9tcmRvb2IuY29tL1xuICogZ2l0aHViIGh0dHBzOi8vZ2l0aHViLmNvbS9tcmRvb2Ivc3RhdHMuanNcbiAqL1xuXG5leHBvcnQgY2xhc3MgU3RhdHMge1xuXG5cdHByaXZhdGUgX2NvbnRhaW5lcjogSFRNTERpdkVsZW1lbnQ7XG5cblx0cHJpdmF0ZSBfbW9kZTogbnVtYmVyID0gMDtcblxuXHRwcml2YXRlIF9iZWdpblRpbWU6IG51bWJlcjtcblx0cHJpdmF0ZSBfcHJldlRpbWU6IG51bWJlcjtcblx0cHJpdmF0ZSBfZnJhbWVzOiBudW1iZXI7XG5cblx0cHJpdmF0ZSBfbWVtUGFuZWw6IFBhbmVsO1xuXHRwcml2YXRlIF9mcHNQYW5lbDogUGFuZWw7XG5cdHByaXZhdGUgX21zUGFuZWw6IFBhbmVsO1xuXG5cdHByaXZhdGUgX3g6IG51bWJlciA9IDA7XG5cdHByaXZhdGUgX3k6IG51bWJlciA9IDA7XG5cblx0cHJpdmF0ZSBfcGVyZm9ybWFuY2U6IFJlY29yZDxzdHJpbmcsIGFueT47XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0Y29uc3Qgc3R5bGUgPSBgcG9zaXRpb246YWJzb2x1dGU7XG5cdFx0dG9wOiR7dGhpcy5feH1weDtcblx0XHRsZWZ0OiR7dGhpcy5feX1weDtcblx0XHRjdXJzb3I6cG9pbnRlcjtcblx0XHRvcGFjaXR5OjAuOTtcblx0XHR6LWluZGV4OjEwMDAwYDtcblx0XHR0aGlzLl9jb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRcdHRoaXMuX2NvbnRhaW5lci5zdHlsZS5jc3NUZXh0ID0gc3R5bGU7XG5cdFx0dGhpcy5fY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHR0aGlzLnNob3dQYW5lbCgrK3RoaXMuX21vZGUgJSB0aGlzLl9jb250YWluZXIuY2hpbGRyZW4ubGVuZ3RoKTtcblx0XHR9LCBmYWxzZSk7XG5cblx0XHR0aGlzLl9iZWdpblRpbWUgPSAocGVyZm9ybWFuY2UgfHwgRGF0ZSkubm93KCk7XG5cdFx0dGhpcy5fcHJldlRpbWUgPSB0aGlzLl9iZWdpblRpbWU7XG5cdFx0dGhpcy5fZnJhbWVzID0gMDtcblxuXHRcdHRoaXMuX2Zwc1BhbmVsID0gdGhpcy5hZGRQYW5lbChuZXcgUGFuZWwoXCJGUFNcIiwgXCIjMGZmXCIsIFwiIzAwMlwiKSk7XG5cdFx0dGhpcy5fbXNQYW5lbCA9IHRoaXMuYWRkUGFuZWwobmV3IFBhbmVsKFwiTVNcIiwgXCIjMGYwXCIsIFwiIzAyMFwiKSk7XG5cblx0XHR0aGlzLl9wZXJmb3JtYW5jZSA9IHdpbmRvdy5wZXJmb3JtYW5jZTtcblxuXHRcdGlmICh0aGlzLl9wZXJmb3JtYW5jZT8ubWVtb3J5KSB7XG5cdFx0XHR0aGlzLl9tZW1QYW5lbCA9IHRoaXMuYWRkUGFuZWwobmV3IFBhbmVsKFwiTUJcIiwgXCIjZjA4XCIsIFwiIzIwMVwiKSk7XG5cdFx0fVxuXG5cdFx0dGhpcy5zaG93UGFuZWwoMCk7XG5cdH1cblxuXHRwdWJsaWMgZ2V0IHgoKSB7XG5cdFx0cmV0dXJuIHRoaXMuX3g7XG5cdH1cblxuXHRwdWJsaWMgc2V0IHgodmFsdWU6IG51bWJlcikge1xuXHRcdHRoaXMuX3ggPSB2YWx1ZTtcblx0XHQvLyB0aGlzLl9zdHlsZS5sZWZ0ID0gYCR7dGhpcy5feH1gO1xuXHRcdHRoaXMuX2NvbnRhaW5lci5zdHlsZS5sZWZ0ID0gYCR7dGhpcy5feH1weGA7XG5cdH1cblxuXHRwdWJsaWMgZ2V0IHkoKSB7XG5cdFx0cmV0dXJuIHRoaXMuX3k7XG5cdH1cblxuXHRwdWJsaWMgc2V0IHkodmFsdWU6IG51bWJlcikge1xuXHRcdHRoaXMuX3kgPSB2YWx1ZTtcblx0XHQvLyB0aGlzLl9zdHlsZS50b3AgPSBgJHt0aGlzLl95fWA7XG5cdFx0dGhpcy5fY29udGFpbmVyLnN0eWxlLnRvcCA9IGAke3RoaXMuX3l9cHhgO1xuXHR9XG5cblx0cHVibGljIGdldCBkb20oKSB7XG5cdFx0cmV0dXJuIHRoaXMuX2NvbnRhaW5lcjtcblx0fVxuXG5cdHB1YmxpYyBhZGRQYW5lbChwYW5lbDogUGFuZWwpIHtcblx0XHR0aGlzLl9jb250YWluZXIuYXBwZW5kQ2hpbGQocGFuZWwuZG9tKTtcblx0XHRyZXR1cm4gcGFuZWw7XG5cdH1cblxuXHRwdWJsaWMgc2hvd1BhbmVsKGlkOiBudW1iZXIpIHtcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX2NvbnRhaW5lci5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuXHRcdFx0Y29uc3QgY2hpbGQ6IGFueSA9IHRoaXMuX2NvbnRhaW5lci5jaGlsZHJlbltpXTtcblx0XHRcdChjaGlsZCBhcyBIVE1MRWxlbWVudCkuc3R5bGUuZGlzcGxheSA9IGkgPT09IGlkID8gXCJibG9ja1wiIDogXCJub25lXCI7XG5cdFx0fVxuXHRcdHRoaXMuX21vZGUgPSBpZDtcblx0fVxuXG5cdHB1YmxpYyBiZWdpbigpIHtcblx0XHR0aGlzLl9iZWdpblRpbWUgPSAodGhpcy5fcGVyZm9ybWFuY2UgfHwgRGF0ZSkubm93KCk7XG5cdH1cblxuXHRwdWJsaWMgZW5kKCkge1xuXHRcdHRoaXMuX2ZyYW1lcysrO1xuXG5cdFx0Y29uc3QgdGltZTogbnVtYmVyID0gKHRoaXMuX3BlcmZvcm1hbmNlIHx8IERhdGUpLm5vdygpO1xuXG5cdFx0dGhpcy5fbXNQYW5lbC51cGRhdGUodGltZSAtIHRoaXMuX2JlZ2luVGltZSwgMjAwKTtcblxuXHRcdGlmICh0aW1lID49IHRoaXMuX3ByZXZUaW1lICsgMTAwMCkge1xuXHRcdFx0dGhpcy51cGRhdGVGUFMoKHRoaXMuX2ZyYW1lcyAqIDEwMDApIC8gKHRpbWUgLSB0aGlzLl9wcmV2VGltZSkpO1xuXG5cdFx0XHR0aGlzLl9wcmV2VGltZSA9IHRpbWU7XG5cdFx0XHR0aGlzLl9mcmFtZXMgPSAwO1xuXG5cdFx0XHRpZiAodGhpcy5fbWVtUGFuZWwpIHtcblx0XHRcdFx0Y29uc3QgbWVtb3J5OiBSZWNvcmQ8c3RyaW5nLCBhbnk+ID0gdGhpcy5fcGVyZm9ybWFuY2UubWVtb3J5O1xuXHRcdFx0XHR0aGlzLl9tZW1QYW5lbC51cGRhdGUobWVtb3J5LnVzZWRKU0hlYXBTaXplIC8gMTA0ODU3NiwgbWVtb3J5LmpzSGVhcFNpemVMaW1pdCAvIDEwNDg1NzYpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gdGltZTtcblxuXHR9XG5cblx0cHVibGljIHVwZGF0ZSgpIHtcblx0XHR0aGlzLl9iZWdpblRpbWUgPSB0aGlzLmVuZCgpO1xuXHR9XG5cblx0cHVibGljIHVwZGF0ZUZQUyhmcHM6IG51bWJlcikge1xuXHRcdHRoaXMuX2Zwc1BhbmVsLnVwZGF0ZShmcHMsIDEwMCk7XG5cdH1cbn1cblxuY2xhc3MgUGFuZWwge1xuXHRwdWJsaWMgZG9tOiBIVE1MQ2FudmFzRWxlbWVudDtcblxuXHRwcml2YXRlIF9jYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xuXHRwcml2YXRlIF9jb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XG5cdHByaXZhdGUgX21pbiA9IEluZmluaXR5O1xuXHRwcml2YXRlIF9tYXggPSAwO1xuXHRwcml2YXRlIF9uYW1lOiBzdHJpbmc7XG5cdHByaXZhdGUgX2ZnOiBzdHJpbmcgfCBDYW52YXNHcmFkaWVudCB8IENhbnZhc1BhdHRlcm47XG5cdHByaXZhdGUgX2JnOiBzdHJpbmcgfCBDYW52YXNHcmFkaWVudCB8IENhbnZhc1BhdHRlcm47XG5cblx0cHJpdmF0ZSBfd2lkdGg6IG51bWJlcjtcblx0cHJpdmF0ZSBfaGVpZ2h0OiBudW1iZXI7XG5cdHByaXZhdGUgX3NjYWxlOiBudW1iZXI7XG5cdHByaXZhdGUgX3RleHRYOiBudW1iZXI7XG5cdHByaXZhdGUgX3RleHRZOiBudW1iZXI7XG5cdHByaXZhdGUgX2dyYXBoWDogbnVtYmVyO1xuXHRwcml2YXRlIF9ncmFwaFk6IG51bWJlcjtcblx0cHJpdmF0ZSBfZ3JhcGhXaWR0aDogbnVtYmVyO1xuXHRwcml2YXRlIF9ncmFwaEhlaWdodDogbnVtYmVyO1xuXG5cdGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgZmc6IHN0cmluZywgYmc6IHN0cmluZykge1xuXHRcdHRoaXMuX25hbWUgPSBuYW1lO1xuXHRcdHRoaXMuX2ZnID0gZmc7XG5cdFx0dGhpcy5fYmcgPSBiZztcblxuXHRcdHRoaXMuX3NjYWxlID0gTWF0aC5yb3VuZCh3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyB8fCAxKTtcblxuXHRcdHRoaXMuX3dpZHRoID0gODAgKiB0aGlzLl9zY2FsZTtcblx0XHR0aGlzLl9oZWlnaHQgPSA0OCAqIHRoaXMuX3NjYWxlO1xuXHRcdHRoaXMuX3RleHRYID0gMyAqIHRoaXMuX3NjYWxlO1xuXHRcdHRoaXMuX3RleHRZID0gMiAqIHRoaXMuX3NjYWxlO1xuXHRcdHRoaXMuX2dyYXBoWCA9IDMgKiB0aGlzLl9zY2FsZTtcblx0XHR0aGlzLl9ncmFwaFkgPSAxNSAqIHRoaXMuX3NjYWxlO1xuXHRcdHRoaXMuX2dyYXBoV2lkdGggPSA3NCAqIHRoaXMuX3NjYWxlO1xuXHRcdHRoaXMuX2dyYXBoSGVpZ2h0ID0gMzAgKiB0aGlzLl9zY2FsZTtcblxuXHRcdHRoaXMuX2NhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XG5cdFx0dGhpcy5fY2FudmFzLndpZHRoID0gdGhpcy5fd2lkdGg7XG5cdFx0dGhpcy5fY2FudmFzLmhlaWdodCA9IHRoaXMuX2hlaWdodDtcblx0XHR0aGlzLl9jYW52YXMuc3R5bGUuY3NzVGV4dCA9IFwid2lkdGg6ODBweDtoZWlnaHQ6NDhweFwiO1xuXG5cdFx0dGhpcy5fY29udGV4dCA9IHRoaXMuX2NhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG5cdFx0dGhpcy5fY29udGV4dC5mb250ID0gYGJvbGQgJHs5ICogdGhpcy5fc2NhbGV9cHggSGVsdmV0aWNhLEFyaWFsLHNhbnMtc2VyaWZgO1xuXHRcdHRoaXMuX2NvbnRleHQudGV4dEJhc2VsaW5lID0gXCJ0b3BcIjtcblxuXHRcdHRoaXMuX2NvbnRleHQuZmlsbFN0eWxlID0gdGhpcy5fYmc7XG5cdFx0dGhpcy5fY29udGV4dC5maWxsUmVjdCgwLCAwLCB0aGlzLl93aWR0aCwgdGhpcy5faGVpZ2h0KTtcblxuXHRcdHRoaXMuX2NvbnRleHQuZmlsbFN0eWxlID0gdGhpcy5fZmc7XG5cdFx0dGhpcy5fY29udGV4dC5maWxsVGV4dCh0aGlzLl9uYW1lLCB0aGlzLl90ZXh0WCwgdGhpcy5fdGV4dFkpO1xuXHRcdHRoaXMuX2NvbnRleHQuZmlsbFJlY3QodGhpcy5fZ3JhcGhYLCB0aGlzLl9ncmFwaFksIHRoaXMuX2dyYXBoV2lkdGgsIHRoaXMuX2dyYXBoSGVpZ2h0KTtcblxuXHRcdHRoaXMuX2NvbnRleHQuZmlsbFN0eWxlID0gdGhpcy5fYmc7XG5cdFx0dGhpcy5fY29udGV4dC5nbG9iYWxBbHBoYSA9IDAuOTtcblx0XHR0aGlzLl9jb250ZXh0LmZpbGxSZWN0KHRoaXMuX2dyYXBoWCwgdGhpcy5fZ3JhcGhZLCB0aGlzLl9ncmFwaFdpZHRoLCB0aGlzLl9ncmFwaEhlaWdodCk7XG5cblx0XHR0aGlzLmRvbSA9IHRoaXMuX2NhbnZhcztcblx0fVxuXG5cdHB1YmxpYyB1cGRhdGUodmFsdWU6IG51bWJlciwgbWF4VmFsdWU6IG51bWJlcikge1xuXHRcdHRoaXMuX21pbiA9IE1hdGgubWluKHRoaXMuX21pbiwgdmFsdWUpO1xuXHRcdHRoaXMuX21heCA9IE1hdGgubWF4KHRoaXMuX21heCwgdmFsdWUpO1xuXG5cdFx0dGhpcy5fY29udGV4dC5maWxsU3R5bGUgPSB0aGlzLl9iZztcblx0XHR0aGlzLl9jb250ZXh0Lmdsb2JhbEFscGhhID0gMTtcblx0XHR0aGlzLl9jb250ZXh0LmZpbGxSZWN0KDAsIDAsIHRoaXMuX3dpZHRoLCB0aGlzLl9ncmFwaFkpO1xuXHRcdHRoaXMuX2NvbnRleHQuZmlsbFN0eWxlID0gdGhpcy5fZmc7XG5cdFx0dGhpcy5fY29udGV4dC5maWxsVGV4dChgJHtNYXRoLnJvdW5kKHZhbHVlKX0gJHt0aGlzLl9uYW1lfSAoJHtNYXRoLnJvdW5kKHRoaXMuX21pbil9LSR7TWF0aC5yb3VuZCh0aGlzLl9tYXgpfSlgLFxuXHRcdFx0dGhpcy5fdGV4dFgsXG5cdFx0XHR0aGlzLl90ZXh0WSxcblx0XHQpO1xuXG5cdFx0dGhpcy5fY29udGV4dC5kcmF3SW1hZ2UoXG5cdFx0XHR0aGlzLl9jYW52YXMsXG5cdFx0XHR0aGlzLl9ncmFwaFggKyB0aGlzLl9zY2FsZSxcblx0XHRcdHRoaXMuX2dyYXBoWSxcblx0XHRcdHRoaXMuX2dyYXBoV2lkdGggLSB0aGlzLl9zY2FsZSxcblx0XHRcdHRoaXMuX2dyYXBoSGVpZ2h0LFxuXHRcdFx0dGhpcy5fZ3JhcGhYLFxuXHRcdFx0dGhpcy5fZ3JhcGhZLFxuXHRcdFx0dGhpcy5fZ3JhcGhXaWR0aCAtIHRoaXMuX3NjYWxlLFxuXHRcdFx0dGhpcy5fZ3JhcGhIZWlnaHQsXG5cdFx0KTtcblxuXHRcdHRoaXMuX2NvbnRleHQuZmlsbFJlY3QoXG5cdFx0XHR0aGlzLl9ncmFwaFggKyB0aGlzLl9ncmFwaFdpZHRoIC0gdGhpcy5fc2NhbGUsXG5cdFx0XHR0aGlzLl9ncmFwaFksXG5cdFx0XHR0aGlzLl9zY2FsZSxcblx0XHRcdHRoaXMuX2dyYXBoSGVpZ2h0LFxuXHRcdCk7XG5cblx0XHR0aGlzLl9jb250ZXh0LmZpbGxTdHlsZSA9IHRoaXMuX2JnO1xuXHRcdHRoaXMuX2NvbnRleHQuZ2xvYmFsQWxwaGEgPSAwLjk7XG5cdFx0dGhpcy5fY29udGV4dC5maWxsUmVjdChcblx0XHRcdHRoaXMuX2dyYXBoWCArIHRoaXMuX2dyYXBoV2lkdGggLSB0aGlzLl9zY2FsZSxcblx0XHRcdHRoaXMuX2dyYXBoWSxcblx0XHRcdHRoaXMuX3NjYWxlLFxuXHRcdFx0TWF0aC5yb3VuZCgoMSAtICh2YWx1ZSAvIG1heFZhbHVlKSkgKiB0aGlzLl9ncmFwaEhlaWdodCksXG5cdFx0KTtcblx0fVxufVxuIiwiaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSBcInBpeGkuanMtbGVnYWN5XCI7XG5pbXBvcnQgeyBJU3RhZ2UgfSBmcm9tIFwiLi9zdGFnZS9JU3RhZ2VcIjtcblxuZXhwb3J0IGNsYXNzIFZpZXcgZXh0ZW5kcyBDb250YWluZXIge1xuXHRwdWJsaWMgc3RhdGljIFN0YWdlOiBJU3RhZ2U7XG5cdHByaXZhdGUgX3cgPSAwO1xuXHRwcml2YXRlIF9oID0gMDtcblxuXHRwdWJsaWMgZ2V0IHN0YWdlKCk6IElTdGFnZSB7XG5cdFx0cmV0dXJuIFZpZXcuU3RhZ2U7XG5cdH1cblxuXHRwcm90ZWN0ZWQgb25SZXNpemUoKSB7XG5cdFx0Ly8gb3ZlcnJpZGUgbWVcblx0fVxuXG5cdHB1YmxpYyBnZXQgdygpIHtcblx0XHRyZXR1cm4gdGhpcy5fdztcblx0fVxuXG5cdHB1YmxpYyBnZXQgaCgpIHtcblx0XHRyZXR1cm4gdGhpcy5faDtcblx0fVxuXG5cdHB1YmxpYyBzZXRTaXplKHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKSB7XG5cdFx0dGhpcy5fdyA9IHdpZHRoO1xuXHRcdHRoaXMuX2ggPSBoZWlnaHQ7XG5cdFx0dGhpcy5vblJlc2l6ZSgpO1xuXHR9XG59XG4iLCJpbXBvcnQgeyBUaWNrZXIsIENvbnRhaW5lciwgUmVuZGVyZXIsIENhbnZhc1JlbmRlcmVyIH0gZnJvbSBcInBpeGkuanMtbGVnYWN5XCI7XG5pbXBvcnQgeyBJU3RhZ2UgfSBmcm9tIFwiLi9JU3RhZ2VcIjtcbmltcG9ydCB7IFN0YWdlRXZlbnRzIH0gZnJvbSBcIi4vU3RhZ2VFdmVudHNcIjtcblxuZXhwb3J0IGNsYXNzIFN0YWdlIGV4dGVuZHMgQ29udGFpbmVyIGltcGxlbWVudHMgSVN0YWdlIHtcblx0cHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyIHwgQ2FudmFzUmVuZGVyZXI7XG5cdHByaXZhdGUgX3RpY2tlcjogVGlja2VyO1xuXHRwcml2YXRlIF93OiBudW1iZXI7XG5cdHByaXZhdGUgX2g6IG51bWJlcjtcblxuXHRwcml2YXRlIF9tYXhXaWR0aDogbnVtYmVyID0gSW5maW5pdHk7XG5cdHByaXZhdGUgX21heEhlaWdodDogbnVtYmVyID0gSW5maW5pdHk7XG5cblx0Y29uc3RydWN0b3IocmVuZGVyZXI6IFJlbmRlcmVyIHwgQ2FudmFzUmVuZGVyZXIsIHRpY2tlcjogVGlja2VyKSB7XG5cdFx0c3VwZXIoKTtcblxuXHRcdGlmICghcmVuZGVyZXIpIHtcblx0XHRcdHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcIlJlbmRlcmVyIHVuZGVmaW5lZCFcIik7XG5cdFx0fVxuXG5cdFx0dGhpcy5fcmVuZGVyZXIgPSByZW5kZXJlcjtcblx0XHR0aGlzLl90aWNrZXIgPSB0aWNrZXI7XG5cdFx0dGhpcy5fdyA9IHRoaXMuX3JlbmRlcmVyLndpZHRoO1xuXHRcdHRoaXMuX2ggPSB0aGlzLl9yZW5kZXJlci5oZWlnaHQ7XG5cblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY29udGV4dG1lbnVcIiwgZXZlbnQgPT4gZXZlbnQucHJldmVudERlZmF1bHQoKSk7XG5cdFx0dGhpcy5pbnRlcmFjdGl2ZSA9IHRydWU7XG5cdH1cblxuXHRwcml2YXRlIG9uV2luZG93UmVzaXplID0gKCkgPT4ge1xuXHRcdGxldCBuZXdXaWR0aDogbnVtYmVyO1xuXHRcdGxldCBuZXdIZWlnaHQ6IG51bWJlcjtcblxuXHRcdGlmICh3aW5kb3cub3V0ZXJIZWlnaHQgIT09IDApIHtcblx0XHRcdG5ld1dpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG5cdFx0XHRuZXdIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIGZvciBpT1Ncblx0XHRcdG5ld1dpZHRoID0gZG9jdW1lbnQuYm9keS5zY3JvbGxXaWR0aDtcblx0XHRcdG5ld0hlaWdodCA9IGRvY3VtZW50LmJvZHkuc2Nyb2xsSGVpZ2h0O1xuXHRcdH1cblxuXHRcdHRoaXMuc2V0U2l6ZShuZXdXaWR0aCwgbmV3SGVpZ2h0KTtcblx0fTtcblxuXHRwdWJsaWMgZ2V0IHJlbmRlcmVyKCkge1xuXHRcdHJldHVybiB0aGlzLl9yZW5kZXJlcjtcblx0fVxuXG5cdHB1YmxpYyBnZXQgdGlja2VyKCk6IFRpY2tlciB7XG5cdFx0cmV0dXJuIHRoaXMuX3RpY2tlcjtcblx0fVxuXG5cdHB1YmxpYyByZXNpemUoKSB7XG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgdGhpcy5vbldpbmRvd1Jlc2l6ZSk7XG5cdFx0dGhpcy5vbldpbmRvd1Jlc2l6ZSgpO1xuXHR9XG5cblx0cHVibGljIGdldCB3KCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMuX3c7XG5cdH1cblxuXHRwdWJsaWMgZ2V0IGgoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5faDtcblx0fVxuXG5cdHB1YmxpYyBzZXRTaXplKHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKTogdm9pZCB7XG5cdFx0aWYgKHdpZHRoICE9PSB0aGlzLl93IHx8IGhlaWdodCAhPT0gdGhpcy5faCkge1xuXHRcdFx0dGhpcy5fdyA9IE1hdGgubWluKHdpZHRoLCB0aGlzLl9tYXhXaWR0aCk7XG5cdFx0XHR0aGlzLl9oID0gTWF0aC5taW4oaGVpZ2h0LCB0aGlzLl9tYXhIZWlnaHQpO1xuXHRcdFx0dGhpcy5hcHBseVNpemUodGhpcy5fdywgdGhpcy5faCk7XG5cdFx0fVxuXHR9XG5cblx0cHJvdGVjdGVkIGFwcGx5U2l6ZSh3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcik6IHZvaWQge1xuXHRcdHRoaXMuX3JlbmRlcmVyLnZpZXcuc3R5bGUud2lkdGggPSBgJHt3aWR0aH1weGA7XG5cdFx0dGhpcy5fcmVuZGVyZXIudmlldy5zdHlsZS5oZWlnaHQgPSBgJHtoZWlnaHR9cHhgO1xuXHRcdHRoaXMuX3JlbmRlcmVyLnJlc2l6ZSh3aWR0aCwgaGVpZ2h0KTtcblx0XHR0aGlzLmVtaXQoU3RhZ2VFdmVudHMuUkVTSVpFLCB0aGlzKTtcblx0fVxufVxuIiwiZXhwb3J0IGNsYXNzIFN0YWdlRXZlbnRzIHtcblx0cHVibGljIHN0YXRpYyBSRVNJWkUgPSBcInJlc2l6ZVwiO1xuXHRwdWJsaWMgc3RhdGljIFNXSVRDSF9TQ0VORSA9IFwic3dpdGNoX3NjZW5lXCI7XG59XG4iLCJpbXBvcnQgeyBTcHJpdGUsIFRleHQsIFRleHR1cmUgfSBmcm9tIFwicGl4aS5qcy1sZWdhY3lcIjtcbmltcG9ydCB7IFZpZXcgfSBmcm9tIFwiLi4vY29yZS92aWV3cy9WaWV3XCI7XG5cbmV4cG9ydCBjbGFzcyBCdXR0b24gZXh0ZW5kcyBWaWV3IHtcblx0cHJpdmF0ZSBfYmc6IFNwcml0ZTtcblx0cHJpdmF0ZSBfdGV4dDogVGV4dDtcblxuXHRjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcpIHtcblx0XHRzdXBlcigpO1xuXG5cdFx0dGhpcy5pbnRlcmFjdGl2ZSA9IHRydWU7XG5cdFx0dGhpcy5idXR0b25Nb2RlID0gdHJ1ZTtcblxuXHRcdHRoaXMuX2JnID0gbmV3IFNwcml0ZShUZXh0dXJlLldISVRFKTtcblx0XHR0aGlzLl9iZy50aW50ID0gMHgwMGZmZWU7XG5cdFx0dGhpcy5fYmcuYW5jaG9yLnNldCgwLjUpO1xuXHRcdHRoaXMuYWRkQ2hpbGQodGhpcy5fYmcpO1xuXG5cdFx0dGhpcy5fdGV4dCA9IG5ldyBUZXh0KG5hbWUsIHtcblx0XHRcdGZvbnRTaXplOiAxNixcblx0XHR9KTtcblx0XHR0aGlzLl90ZXh0LmFuY2hvci5zZXQoMC41KTtcblx0XHR0aGlzLmFkZENoaWxkKHRoaXMuX3RleHQpO1xuXHR9XG5cblx0cHJvdGVjdGVkIG9uUmVzaXplKCkge1xuXHRcdHN1cGVyLm9uUmVzaXplKCk7XG5cblx0XHR0aGlzLl9iZy53aWR0aCA9IHRoaXMudztcblx0XHR0aGlzLl9iZy5oZWlnaHQgPSB0aGlzLmg7XG5cblx0XHR0aGlzLl9iZy5wb3NpdGlvbi5zZXQodGhpcy53ICogMC41LCB0aGlzLmggKiAwLjUpO1xuXHRcdHRoaXMuX3RleHQucG9zaXRpb24uc2V0KHRoaXMudyAqIDAuNSwgdGhpcy5oICogMC41KTtcblx0fVxufVxuIiwiaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIi4vQnV0dG9uXCI7XG5pbXBvcnQgeyBWaWV3IH0gZnJvbSBcIi4uL2NvcmUvdmlld3MvVmlld1wiO1xuaW1wb3J0IHsgU3RhZ2VFdmVudHMgfSBmcm9tIFwiLi4vY29yZS92aWV3cy9zdGFnZS9TdGFnZUV2ZW50c1wiO1xuaW1wb3J0IHsgU2NlbmVOYW1lcyB9IGZyb20gXCIuLi9zY2VuZXMvU2NlbmVOYW1lc1wiO1xuXG5leHBvcnQgY2xhc3MgSFVEIGV4dGVuZHMgVmlldyB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cblx0XHRjb25zdCB3aWR0aCA9IDEwMDtcblx0XHRjb25zdCBoZWlnaHQgPSA0Mjtcblx0XHRjb25zdCBnYXAgPSAxNTtcblxuXHRcdGNvbnN0IGNhcmRzRGVja0J1dHRvbiA9IG5ldyBCdXR0b24oXCJjYXJkcyBzY2VuZVwiKTtcblx0XHR0aGlzLmFkZENoaWxkKGNhcmRzRGVja0J1dHRvbik7XG5cdFx0Y2FyZHNEZWNrQnV0dG9uLnNldFNpemUod2lkdGgsIGhlaWdodCk7XG5cdFx0Y2FyZHNEZWNrQnV0dG9uLm9uKFwicG9pbnRlcnVwXCIsICgpID0+IHRoaXMuc3RhZ2UuZW1pdChTdGFnZUV2ZW50cy5TV0lUQ0hfU0NFTkUsIFNjZW5lTmFtZXMuQ0FSRFMpKTtcblxuXHRcdGNvbnN0IGZpcmVCdXR0b24gPSBuZXcgQnV0dG9uKFwiZmlyZSBzY2VuZVwiKTtcblx0XHR0aGlzLmFkZENoaWxkKGZpcmVCdXR0b24pO1xuXHRcdGZpcmVCdXR0b24uc2V0U2l6ZSh3aWR0aCwgaGVpZ2h0KTtcblx0XHRmaXJlQnV0dG9uLnggPSBjYXJkc0RlY2tCdXR0b24ueCArIGNhcmRzRGVja0J1dHRvbi53ICsgZ2FwO1xuXHRcdGZpcmVCdXR0b24ub24oXCJwb2ludGVydXBcIiwgKCkgPT4gdGhpcy5zdGFnZS5lbWl0KFN0YWdlRXZlbnRzLlNXSVRDSF9TQ0VORSwgU2NlbmVOYW1lcy5GSVJFKSk7XG5cblx0XHRjb25zdCB0ZXh0QnV0dG9uID0gbmV3IEJ1dHRvbihcInRleHQgc2NlbmVcIik7XG5cdFx0dGhpcy5hZGRDaGlsZCh0ZXh0QnV0dG9uKTtcblx0XHR0ZXh0QnV0dG9uLnNldFNpemUod2lkdGgsIGhlaWdodCk7XG5cdFx0dGV4dEJ1dHRvbi54ID0gZmlyZUJ1dHRvbi54ICsgZmlyZUJ1dHRvbi53ICsgZ2FwO1xuXHRcdHRleHRCdXR0b24ub24oXCJwb2ludGVydXBcIiwgKCkgPT4gdGhpcy5zdGFnZS5lbWl0KFN0YWdlRXZlbnRzLlNXSVRDSF9TQ0VORSwgU2NlbmVOYW1lcy5URVhUKSk7XG5cdH1cbn1cbiIsImV4cG9ydCBlbnVtIFNjZW5lTmFtZXMge1xuXHRGSVJFLFxuXHRDQVJEUyxcblx0VEVYVCxcbn1cbiIsImltcG9ydCB7IFZpZXcgfSBmcm9tIFwiLi4vLi4vY29yZS92aWV3cy9WaWV3XCI7XG5pbXBvcnQgeyBDb250YWluZXIsIEdyYXBoaWNzLCBTQ0FMRV9NT0RFUywgU3ByaXRlLCBUZXh0dXJlIH0gZnJvbSBcInBpeGkuanMtbGVnYWN5XCI7XG5pbXBvcnQgeyBQbGFuZVJvdGF0aW9uIH0gZnJvbSBcIi4vUGxhbmVSb3RhdGlvblwiO1xuaW1wb3J0IHsgZ2VuSW50ZWdlciwgbGVycCB9IGZyb20gXCIuLi8uLi9VdGlsc1wiO1xuXG5leHBvcnQgY2xhc3MgQ2FyZHNEZWNrU2NlbmUgZXh0ZW5kcyBWaWV3IHtcblx0cHJpdmF0ZSBfY2FyZHNDb250YWluZXI6IENvbnRhaW5lcjtcblx0cHJpdmF0ZSBfbGFzdFR3ZWVuVXBkYXRlRnVuYzogKCkgPT4gdm9pZDtcblxuXHRwcml2YXRlIF9jYXJkVyA9IDE0MDtcblx0cHJpdmF0ZSBfY2FyZEggPSAxOTA7XG5cdHByaXZhdGUgX2dhcCA9IDI7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblxuXHRcdHRoaXMuX2NhcmRzQ29udGFpbmVyID0gbmV3IENvbnRhaW5lcigpO1xuXHRcdHRoaXMuX2NhcmRzQ29udGFpbmVyLnNvcnRhYmxlQ2hpbGRyZW4gPSB0cnVlO1xuXHRcdHRoaXMuYWRkQ2hpbGQodGhpcy5fY2FyZHNDb250YWluZXIpO1xuXG5cdFx0Y29uc3QgdGV4dHVyZSA9IHRoaXMuZ2VuZXJhdGVDYXJkVGV4dHVyZSgpO1xuXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCAxNDQ7IGkrKykge1xuXHRcdFx0Y29uc3QgY2FyZCA9IG5ldyBQbGFuZVJvdGF0aW9uKHRleHR1cmUpO1xuXHRcdFx0Y2FyZC5waXZvdC5zZXQoY2FyZC53aWR0aCAqIDAuNSwgY2FyZC5oZWlnaHQgKiAwLjUpO1xuXHRcdFx0Y2FyZC50aW50ID0gTWF0aC5yYW5kb20oKSAqIDB4RkZGRkZGO1xuXHRcdFx0dGhpcy5fY2FyZHNDb250YWluZXIuYWRkQ2hpbGQoY2FyZCk7XG5cdFx0XHRjYXJkLnBvc2l0aW9uLnNldChnZW5JbnRlZ2VyKC01LCA1KSAtIHRoaXMuc3RhZ2UudyAqIDAuMiwgLWkgKiB0aGlzLl9nYXApO1xuXG5cdFx0XHRjYXJkLnByb2pSb3RhdGlvblggPSBNYXRoLlBJIC8gNTtcblx0XHRcdGNhcmQucm90YXRlKCk7XG5cdFx0fVxuXG5cdFx0dGhpcy5tb3ZlQ2FyZCgwKTtcblx0fVxuXG5cdHByaXZhdGUgbW92ZUNhcmQoY2FyZEluZGV4OiBudW1iZXIpIHtcblx0XHRjb25zdCBzdGFydFRpbWUgPSB0aGlzLnN0YWdlLnRpY2tlci5sYXN0VGltZTtcblx0XHRjb25zdCBkdXJhdGlvbiA9IDIwMDA7XG5cblx0XHRjb25zdCByZXZlcnNlSW5kZXggPSB0aGlzLl9jYXJkc0NvbnRhaW5lci5jaGlsZHJlbi5sZW5ndGggLSBjYXJkSW5kZXggLSAxO1xuXHRcdGNvbnN0IGNhcmQgPSB0aGlzLl9jYXJkc0NvbnRhaW5lci5jaGlsZHJlbltyZXZlcnNlSW5kZXhdO1xuXG5cdFx0aWYgKHRoaXMuX2xhc3RUd2VlblVwZGF0ZUZ1bmMpIHtcblx0XHRcdHRoaXMuc3RhZ2UudGlja2VyLnJlbW92ZSh0aGlzLl9sYXN0VHdlZW5VcGRhdGVGdW5jKTtcblx0XHRcdHRoaXMuX2xhc3RUd2VlblVwZGF0ZUZ1bmMgPSB1bmRlZmluZWQ7XG5cdFx0fVxuXG5cdFx0aWYgKGNhcmQpIHtcblx0XHRcdGNhcmQuekluZGV4ID0gY2FyZEluZGV4O1xuXG5cdFx0XHRjb25zdCBvZmZzZXQgPSBjYXJkLng7XG5cdFx0XHR0aGlzLl9sYXN0VHdlZW5VcGRhdGVGdW5jID0gKCkgPT4ge1xuXHRcdFx0XHQvLyBjb25zb2xlLmxvZyh0aGlzLnN0YWdlLnRpY2tlci5sYXN0VGltZSlcblx0XHRcdFx0Y29uc3QgcHJvZ3Jlc3MgPSAodGhpcy5zdGFnZS50aWNrZXIubGFzdFRpbWUgLSBzdGFydFRpbWUpIC8gZHVyYXRpb247XG5cdFx0XHRcdGlmIChwcm9ncmVzcyA+PSAxKSB7XG5cdFx0XHRcdFx0dGhpcy5tb3ZlQ2FyZCgrK2NhcmRJbmRleCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Y2FyZC54ID0gbGVycChvZmZzZXQsIE1hdGguYWJzKG9mZnNldCksIHByb2dyZXNzICUgMSk7XG5cdFx0XHRcdFx0Y2FyZC55ID0gbGVycCgtcmV2ZXJzZUluZGV4ICogdGhpcy5fZ2FwLCAtY2FyZEluZGV4ICogdGhpcy5fZ2FwLCBwcm9ncmVzcyAlIDEpO1xuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXHRcdFx0dGhpcy5zdGFnZS50aWNrZXIuYWRkKHRoaXMuX2xhc3RUd2VlblVwZGF0ZUZ1bmMpO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgZ2VuZXJhdGVDYXJkVGV4dHVyZSgpIHtcblx0XHRjb25zdCBjb250YWluZXIgPSBuZXcgQ29udGFpbmVyKCk7XG5cblx0XHRjb25zdCBiZyA9IG5ldyBTcHJpdGUoVGV4dHVyZS5XSElURSk7XG5cdFx0Ymcud2lkdGggPSB0aGlzLl9jYXJkVztcblx0XHRiZy5oZWlnaHQgPSB0aGlzLl9jYXJkSDtcblx0XHRjb250YWluZXIuYWRkQ2hpbGQoYmcpO1xuXG5cdFx0Y29uc3QgZyA9IG5ldyBHcmFwaGljcygpO1xuXHRcdGcucG9zaXRpb24uc2V0KGJnLndpZHRoICogMC41LCBiZy5oZWlnaHQgKiAwLjUpO1xuXHRcdGNvbnRhaW5lci5hZGRDaGlsZChnKTtcblx0XHRnLmJlZ2luRmlsbCgweDAwMDAwMCk7XG5cdFx0Zy5kcmF3Q2lyY2xlKDAsIDAsIDUwKTtcblx0XHRnLmVuZEZpbGwoKTtcblxuXHRcdGNvbnN0IHJlc29sdXRpb24gPSB0aGlzLnN0YWdlLnJlbmRlcmVyLnJlc29sdXRpb247XG5cdFx0cmV0dXJuIHRoaXMuc3RhZ2UucmVuZGVyZXIuZ2VuZXJhdGVUZXh0dXJlKGNvbnRhaW5lciwgU0NBTEVfTU9ERVMuTElORUFSLCByZXNvbHV0aW9uKTtcblx0fVxuXG5cdHByb3RlY3RlZCBvblJlc2l6ZSgpIHtcblx0XHRzdXBlci5vblJlc2l6ZSgpO1xuXHRcdHRoaXMuX2NhcmRzQ29udGFpbmVyLnBvc2l0aW9uLnNldCh0aGlzLncgKiAwLjUsICh0aGlzLmggLSAtdGhpcy5fY2FyZHNDb250YWluZXIuaGVpZ2h0IC0gdGhpcy5fY2FyZEgpICogMC41KTtcblx0fVxuXG5cdHB1YmxpYyBkZXN0cm95KG9wdGlvbnM/OiB7IGNoaWxkcmVuPzogYm9vbGVhbjsgdGV4dHVyZT86IGJvb2xlYW47IGJhc2VUZXh0dXJlPzogYm9vbGVhbiB9KSB7XG5cdFx0dGhpcy5zdGFnZS50aWNrZXIucmVtb3ZlKHRoaXMuX2xhc3RUd2VlblVwZGF0ZUZ1bmMpO1xuXHRcdHN1cGVyLmRlc3Ryb3kob3B0aW9ucyk7XG5cdH1cbn1cbiIsImltcG9ydCB7IFBvaW50LCBTaW1wbGVQbGFuZSwgVGV4dHVyZSB9IGZyb20gXCJwaXhpLmpzLWxlZ2FjeVwiO1xuXG5leHBvcnQgY2xhc3MgUGxhbmVSb3RhdGlvbiBleHRlbmRzIFNpbXBsZVBsYW5lIHtcblx0cHJpdmF0ZSBfY2VudGVyOiBQb2ludDtcblx0cHJpdmF0ZSBfc2l6ZTogUG9pbnQ7XG5cdHByaXZhdGUgX3RvdGFsOiBudW1iZXI7XG5cdHByaXZhdGUgX3BlcnNwZWN0aXZlOiBudW1iZXI7XG5cblx0cHVibGljIHByb2pSb3RhdGlvblggPSBNYXRoLlBJIC8gMjtcblxuXHRjb25zdHJ1Y3Rvcih0ZXh0dXJlOiBUZXh0dXJlLCBwZXJzcGVjdGl2ZSA9IDAuMSwgcHJpdmF0ZSB2ZXJ0aWNlc1ggPSA1LCBwcml2YXRlIHZlcnRpY2VzWSA9IDUpIHtcblx0XHRzdXBlcih0ZXh0dXJlLCB2ZXJ0aWNlc1gsIHZlcnRpY2VzWSk7XG5cblx0XHR0aGlzLl9wZXJzcGVjdGl2ZSA9IHBlcnNwZWN0aXZlO1xuXHRcdHRoaXMuc2V0UGFyYW1zKCk7XG5cdH1cblxuXHRwcml2YXRlIHNldFBhcmFtcygpIHtcblx0XHRjb25zdCBzZWdtZW50cyA9IG5ldyBQb2ludCh0aGlzLnZlcnRpY2VzWCAtIDEsIHRoaXMudmVydGljZXNZIC0gMSk7XG5cdFx0dGhpcy5fY2VudGVyID0gbmV3IFBvaW50KHNlZ21lbnRzLnggKiAwLjUsIHNlZ21lbnRzLnkgKiAwLjUpO1xuXHRcdHRoaXMuX3NpemUgPSBuZXcgUG9pbnQodGhpcy50ZXh0dXJlLndpZHRoIC8gc2VnbWVudHMueCwgdGhpcy50ZXh0dXJlLmhlaWdodCAvIHNlZ21lbnRzLnkpO1xuXHRcdHRoaXMuX3RvdGFsID0gdGhpcy52ZXJ0aWNlc1ggKiB0aGlzLnZlcnRpY2VzWTtcblx0fVxuXG5cdHB1YmxpYyBjaGFuZ2VUZXh0dXJlKHRleHR1cmU6IFRleHR1cmUpIHtcblx0XHR0aGlzLnRleHR1cmUgPSB0ZXh0dXJlO1xuXHRcdHRoaXMuc2V0UGFyYW1zKCk7XG5cdH1cblxuXHRwdWJsaWMgcm90YXRlKCkge1xuXHRcdGNvbnN0IHZlcnRzID0gW107XG5cblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX3RvdGFsOyBpKyspIHtcblx0XHRcdGNvbnN0IHggPSAoaSAlIHRoaXMudmVydGljZXNYKTtcblx0XHRcdGNvbnN0IHkgPSAoKGkgLyB0aGlzLnZlcnRpY2VzWCkgfCAwKTtcblxuXHRcdFx0Y29uc3QgbGVuWSA9ICh5IC0gdGhpcy5fY2VudGVyLnkpO1xuXHRcdFx0Y29uc3QgdyA9ICh4IC0gdGhpcy5fY2VudGVyLngpICogdGhpcy5fcGVyc3BlY3RpdmU7XG5cblx0XHRcdGNvbnN0IG5ld1ggPSBNYXRoLmNvcyh0aGlzLnByb2pSb3RhdGlvblgpICogbGVuWSAqIHcgKyB4O1xuXHRcdFx0Y29uc3QgbmV3WSA9IE1hdGguc2luKHRoaXMucHJvalJvdGF0aW9uWCkgKiBsZW5ZICsgdGhpcy5fY2VudGVyLnk7XG5cblx0XHRcdHZlcnRzLnB1c2gobmV3WCAqIHRoaXMuX3NpemUueCwgbmV3WSAqIHRoaXMuX3NpemUueSk7XG5cdFx0fVxuXG5cdFx0dGhpcy52ZXJ0aWNlc0J1ZmZlci51cGRhdGUobmV3IEZsb2F0MzJBcnJheSh2ZXJ0cykpO1xuXHR9XG59XG4iLCJpbXBvcnQgeyBWaWV3IH0gZnJvbSBcIi4uLy4uL2NvcmUvdmlld3MvVmlld1wiO1xuaW1wb3J0IHsgQkxFTkRfTU9ERVMsIENvbnRhaW5lciwgSW50ZXJhY3Rpb25FdmVudCwgUG9pbnQsIFNwcml0ZSwgVGV4dHVyZSB9IGZyb20gXCJwaXhpLmpzLWxlZ2FjeVwiO1xuaW1wb3J0IHsgUGFydGljbGUgfSBmcm9tIFwiLi9QYXJ0aWNsZVwiO1xuaW1wb3J0IHsgZ2VuSW50ZWdlciB9IGZyb20gXCIuLi8uLi9VdGlsc1wiO1xuXG5leHBvcnQgY2xhc3MgRmlyZUVmZmVjdFNjZW5lIGV4dGVuZHMgVmlldyB7XG5cdHByaXZhdGUgX2NvbnRhaW5lcjogQ29udGFpbmVyO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgX3BhcnRpY2xlczogUGFydGljbGVbXSA9IFtdO1xuXHRwcml2YXRlIHJlYWRvbmx5IF9zcGVlZCA9IDIwO1xuXHRwcml2YXRlIHJlYWRvbmx5IF9zaXplID0gNDA7XG5cdHByaXZhdGUgcmVhZG9ubHkgX21heCA9IDEwO1xuXG5cdHByaXZhdGUgX2NhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XG5cdHByaXZhdGUgX2N0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xuXHRwcml2YXRlIF90ZXh0dXJlOiBUZXh0dXJlO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgX3BvaW50ZXIgPSBuZXcgUG9pbnQoKTtcblx0cHJpdmF0ZSByZWFkb25seSBfbGlua1RvRnVuYzogKCkgPT4gdm9pZDtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXG5cdFx0dGhpcy5fY29udGFpbmVyID0gbmV3IENvbnRhaW5lcigpO1xuXHRcdHRoaXMuYWRkQ2hpbGQodGhpcy5fY29udGFpbmVyKTtcblxuXHRcdHRoaXMuX2NhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XG5cdFx0dGhpcy5fY2FudmFzLndpZHRoID0gMjAwICogdGhpcy5zdGFnZS5yZW5kZXJlci5yZXNvbHV0aW9uO1xuXHRcdHRoaXMuX2NhbnZhcy5oZWlnaHQgPSA1MDAgKiB0aGlzLnN0YWdlLnJlbmRlcmVyLnJlc29sdXRpb247XG5cdFx0dGhpcy5fY2FudmFzLnN0eWxlLndpZHRoID0gXCIyMDBweFwiO1xuXHRcdHRoaXMuX2NhbnZhcy5zdHlsZS5oZWlnaHQgPSBcIjUwMHB4XCI7XG5cblx0XHR0aGlzLl9jdHggPSB0aGlzLl9jYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuXHRcdHRoaXMuX2N0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSBcImxpZ2h0ZXJcIjtcblxuXHRcdHRoaXMuaW50ZXJhY3RpdmUgPSB0cnVlO1xuXHRcdHRoaXMub24oXCJwb2ludGVybW92ZVwiLCAoZTogSW50ZXJhY3Rpb25FdmVudCkgPT4gdGhpcy5fcG9pbnRlci5jb3B5RnJvbShlLmRhdGEuZ2xvYmFsKSk7XG5cblx0XHR0aGlzLl9wb2ludGVyLnNldCh0aGlzLnN0YWdlLncgKiAwLjUsIHRoaXMuc3RhZ2UuaCAqIDAuNSk7XG5cblx0XHR0aGlzLl9saW5rVG9GdW5jID0gdGhpcy51cGRhdGUuYmluZCh0aGlzKTtcblx0XHR0aGlzLnN0YWdlLnRpY2tlci5hZGQodGhpcy5fbGlua1RvRnVuYyk7XG5cblx0XHR0aGlzLl90ZXh0dXJlID0gVGV4dHVyZS5mcm9tKHRoaXMuX2NhbnZhcyk7XG5cblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcblx0XHRcdGNvbnN0IHNwcml0ZSA9IG5ldyBTcHJpdGUodGhpcy5fdGV4dHVyZSk7XG5cdFx0XHRzcHJpdGUuYmxlbmRNb2RlID0gQkxFTkRfTU9ERVMuQUREO1xuXHRcdFx0c3ByaXRlLnBvc2l0aW9uLnNldChnZW5JbnRlZ2VyKC0yMCwgMjApLCBnZW5JbnRlZ2VyKC01MCwgMjApKTtcblx0XHRcdHRoaXMuX2NvbnRhaW5lci5hZGRDaGlsZChzcHJpdGUpO1xuXHRcdFx0dGhpcy5fY29udGFpbmVyLnBpdm90LnNldCh0aGlzLl9jb250YWluZXIud2lkdGggKiAwLjUsIHRoaXMuX2NvbnRhaW5lci5oZWlnaHQgKiAwLjkpO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgY3JlYXRlTmV3UGFydGljbGUoKSB7XG5cdFx0Y29uc3QgdnggPSB0aGlzLl9zcGVlZCAqIChNYXRoLnJhbmRvbSgpICogMiAtIDEpIC8gMjtcblx0XHRjb25zdCB2eSA9IC1NYXRoLnJhbmRvbSgpICogMiAqIHRoaXMuX3NwZWVkO1xuXG5cdFx0Y29uc3QgeCA9IHRoaXMuX2NhbnZhcy53aWR0aCAqIDAuNSArIGdlbkludGVnZXIoLTMwLCAzMCk7XG5cdFx0Y29uc3QgeSA9IHRoaXMuX2NhbnZhcy5oZWlnaHQgLSBnZW5JbnRlZ2VyKDAsIDIwKSAtIDUwO1xuXHRcdGNvbnN0IHAgPSBuZXcgUGFydGljbGUoeCwgeSwgdngsIHZ5LCBnZW5JbnRlZ2VyKHRoaXMuX3NpemUgKiAwLjEsIHRoaXMuX3NpemUpKTtcblx0XHR0aGlzLl9wYXJ0aWNsZXMucHVzaChwKTtcblx0fVxuXG5cdHByaXZhdGUgdXBkYXRlKCkge1xuXHRcdHRoaXMudXBkYXRlQ2FudmFzKCk7XG5cdFx0dGhpcy5fdGV4dHVyZS51cGRhdGUoKTtcblx0XHR0aGlzLl9jb250YWluZXIucG9zaXRpb24uY29weUZyb20odGhpcy5fcG9pbnRlcik7XG5cdH1cblxuXHRwcml2YXRlIHVwZGF0ZUNhbnZhcygpIHtcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IDIwOyBpKyspIHtcblx0XHRcdHRoaXMuY3JlYXRlTmV3UGFydGljbGUoKTtcblx0XHR9XG5cblx0XHR0aGlzLl9jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuX2NhbnZhcy53aWR0aCwgdGhpcy5fY2FudmFzLmhlaWdodCk7XG5cblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX3BhcnRpY2xlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0Y29uc3QgcCA9IHRoaXMuX3BhcnRpY2xlc1tpXTtcblx0XHRcdHRoaXMuX2N0eC5maWxsU3R5bGUgPSBgcmdiYShcblx0XHRcdFx0JHsyNTUgLSBwLmxpZmUgKiAyfSwkeyhwLmxpZmUgKiAyKSArIDUwfSwgJHtwLmxpZmUgKiAyfSwgJHsoKHRoaXMuX21heCAtIHAubGlmZSkgLyB0aGlzLl9tYXgpICogMC40fVxuXHRcdFx0KWA7XG5cblx0XHRcdGNvbnN0IHJhZGl1cyA9ICh0aGlzLl9tYXggLSBwLmxpZmUpIC8gdGhpcy5fbWF4ICogKHAuc2l6ZSAqIDAuNSkgKyAocC5zaXplICogMC41KTtcblx0XHRcdHRoaXMuX2N0eC5iZWdpblBhdGgoKTtcblx0XHRcdHRoaXMuX2N0eC5hcmMocC54LCBwLnksIHJhZGl1cywgMCwgMiAqIE1hdGguUEkpO1xuXHRcdFx0dGhpcy5fY3R4LmNsb3NlUGF0aCgpO1xuXHRcdFx0dGhpcy5fY3R4LmZpbGwoKTtcblxuXHRcdFx0cC51cGRhdGUoKTtcblxuXHRcdFx0aWYgKHAubGlmZSA+PSB0aGlzLl9tYXgpIHtcblx0XHRcdFx0dGhpcy5fcGFydGljbGVzLnNwbGljZShpLCAxKTtcblx0XHRcdFx0aS0tO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHB1YmxpYyBkZXN0cm95KG9wdGlvbnM/OiB7IGNoaWxkcmVuPzogYm9vbGVhbjsgdGV4dHVyZT86IGJvb2xlYW47IGJhc2VUZXh0dXJlPzogYm9vbGVhbiB9KSB7XG5cdFx0dGhpcy5zdGFnZS50aWNrZXIucmVtb3ZlKHRoaXMuX2xpbmtUb0Z1bmMpO1xuXHRcdHRoaXMub2ZmKFwicG9pbnRlcm1vdmVcIik7XG5cdFx0c3VwZXIuZGVzdHJveShvcHRpb25zKTtcblx0fVxufVxuIiwiZXhwb3J0IGNsYXNzIFBhcnRpY2xlIHtcblx0cHVibGljIHg6IG51bWJlcjtcblx0cHVibGljIHk6IG51bWJlcjtcblx0cHVibGljIHZ4OiBudW1iZXI7XG5cdHB1YmxpYyB2eTogbnVtYmVyO1xuXHRwdWJsaWMgbGlmZTogbnVtYmVyO1xuXHRwdWJsaWMgc2l6ZTogbnVtYmVyO1xuXG5cdGNvbnN0cnVjdG9yKHg6IG51bWJlciwgeTogbnVtYmVyLCB2eDogbnVtYmVyLCB2eTogbnVtYmVyLCBzaXplOiBudW1iZXIpIHtcblx0XHR0aGlzLnggPSB4O1xuXHRcdHRoaXMueSA9IHk7XG5cdFx0dGhpcy52eCA9IHZ4O1xuXHRcdHRoaXMudnkgPSB2eTtcblx0XHR0aGlzLnNpemUgPSBzaXplO1xuXHRcdHRoaXMubGlmZSA9IDA7XG5cdH1cblxuXHRwdWJsaWMgdXBkYXRlKCkge1xuXHRcdHRoaXMueCArPSB0aGlzLnZ4O1xuXHRcdHRoaXMueSArPSB0aGlzLnZ5O1xuXHRcdHRoaXMubGlmZSsrO1xuXHR9XG59XG4iLCJpbXBvcnQgeyByZXNvdXJjZXMsIFRleHQsIFRleHRNZXRyaWNzLCBUZXh0dXJlIH0gZnJvbSBcInBpeGkuanMtbGVnYWN5XCI7XG5pbXBvcnQgeyBnZXRVbmlxdWVOdW1iZXIgfSBmcm9tIFwiLi4vLi4vVXRpbHNcIjtcblxuZXhwb3J0IGNsYXNzIEltYWdlVGV4dCBleHRlbmRzIFRleHQge1xuXHRwdWJsaWMgaW1nOiBUZXh0dXJlO1xuXHRwdWJsaWMgaW1nQ291bnRJbkxpbmUgPSAxO1xuXG5cdC8vQHRzLWlnbm9yZVxuXHR1cGRhdGVUZXh0KHJlc3BlY3REaXJ0eSkge1xuXHRcdC8vQHRzLWlnbm9yZVxuXHRcdGNvbnN0IHN0eWxlID0gdGhpcy5fc3R5bGU7XG5cdFx0Ly8gY2hlY2sgaWYgc3R5bGUgaGFzIGNoYW5nZWQuLlxuXHRcdC8vQHRzLWlnbm9yZVxuXHRcdGlmICh0aGlzLmxvY2FsU3R5bGVJRCAhPT0gc3R5bGUuc3R5bGVJRCkge1xuXHRcdFx0Ly9AdHMtaWdub3JlXG5cdFx0XHR0aGlzLmRpcnR5ID0gdHJ1ZTtcblx0XHRcdC8vQHRzLWlnbm9yZVxuXHRcdFx0dGhpcy5sb2NhbFN0eWxlSUQgPSBzdHlsZS5zdHlsZUlEO1xuXHRcdH1cblx0XHQvL0B0cy1pZ25vcmVcblx0XHRpZiAoIXRoaXMuZGlydHkgJiYgcmVzcGVjdERpcnR5KSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdC8vQHRzLWlnbm9yZVxuXHRcdC8vQHRzLWlnbm9yZVxuXHRcdHRoaXMuX2ZvbnQgPSB0aGlzLl9zdHlsZS50b0ZvbnRTdHJpbmcoKTtcblx0XHRjb25zdCBjb250ZXh0ID0gdGhpcy5jb250ZXh0O1xuXHRcdC8vQHRzLWlnbm9yZVxuXHRcdGNvbnN0IG1lYXN1cmVkID0gVGV4dE1ldHJpY3MubWVhc3VyZVRleHQodGhpcy5fdGV4dCwgdGhpcy5fc3R5bGUsIHRoaXMuX3N0eWxlLndvcmRXcmFwLCB0aGlzLmNhbnZhcyk7XG5cdFx0Y29uc3QgaW1nc1dpZHRoID0gdGhpcy5pbWdXICogKHRoaXMuaW1nQ291bnRJbkxpbmUgKyAxKTtcblx0XHRjb25zdCB3aWR0aCA9IG1lYXN1cmVkLndpZHRoICsgaW1nc1dpZHRoO1xuXHRcdGNvbnN0IGhlaWdodCA9IG1lYXN1cmVkLmhlaWdodDtcblx0XHRjb25zdCBsaW5lcyA9IG1lYXN1cmVkLmxpbmVzO1xuXHRcdGNvbnN0IGxpbmVIZWlnaHQgPSBtZWFzdXJlZC5saW5lSGVpZ2h0O1xuXHRcdGNvbnN0IGxpbmVXaWR0aHMgPSBtZWFzdXJlZC5saW5lV2lkdGhzLm1hcCh3aWR0aCA9PiB3aWR0aCArIGltZ3NXaWR0aCk7XG5cblx0XHRjb25zdCBtYXhMaW5lV2lkdGggPSBNYXRoLm1heCguLi5saW5lV2lkdGhzKTtcblx0XHRjb25zdCBmb250UHJvcGVydGllcyA9IG1lYXN1cmVkLmZvbnRQcm9wZXJ0aWVzO1xuXHRcdHRoaXMuY2FudmFzLndpZHRoID0gTWF0aC5jZWlsKChNYXRoLm1heCgxLCB3aWR0aCkgKyAoc3R5bGUucGFkZGluZyAqIDIpKSAqIHRoaXMucmVzb2x1dGlvbik7XG5cdFx0dGhpcy5jYW52YXMuaGVpZ2h0ID0gTWF0aC5jZWlsKChNYXRoLm1heCgxLCBoZWlnaHQpICsgKHN0eWxlLnBhZGRpbmcgKiAyKSkgKiB0aGlzLnJlc29sdXRpb24pO1xuXHRcdGNvbnRleHQuc2NhbGUodGhpcy5yZXNvbHV0aW9uLCB0aGlzLnJlc29sdXRpb24pO1xuXHRcdGNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuXHRcdC8vQHRzLWlnbm9yZVxuXHRcdGNvbnRleHQuZm9udCA9IHRoaXMuX2ZvbnQ7XG5cdFx0Y29udGV4dC5zdHJva2VTdHlsZSA9IHN0eWxlLnN0cm9rZTtcblx0XHRjb250ZXh0LmxpbmVXaWR0aCA9IHN0eWxlLnN0cm9rZVRoaWNrbmVzcztcblx0XHRjb250ZXh0LnRleHRCYXNlbGluZSA9IHN0eWxlLnRleHRCYXNlbGluZTtcblx0XHRjb250ZXh0LmxpbmVKb2luID0gc3R5bGUubGluZUpvaW47XG5cdFx0Y29udGV4dC5taXRlckxpbWl0ID0gc3R5bGUubWl0ZXJMaW1pdDtcblx0XHRsZXQgbGluZVBvc2l0aW9uWDtcblx0XHRsZXQgbGluZVBvc2l0aW9uWTtcblx0XHRpZiAoc3R5bGUuZHJvcFNoYWRvdykge1xuXHRcdFx0Y29udGV4dC5maWxsU3R5bGUgPSBzdHlsZS5kcm9wU2hhZG93Q29sb3I7XG5cdFx0XHRjb250ZXh0Lmdsb2JhbEFscGhhID0gc3R5bGUuZHJvcFNoYWRvd0FscGhhO1xuXHRcdFx0Y29udGV4dC5zaGFkb3dCbHVyID0gc3R5bGUuZHJvcFNoYWRvd0JsdXI7XG5cdFx0XHRpZiAoc3R5bGUuZHJvcFNoYWRvd0JsdXIgPiAwKSB7XG5cdFx0XHRcdGNvbnRleHQuc2hhZG93Q29sb3IgPSBzdHlsZS5kcm9wU2hhZG93Q29sb3I7XG5cdFx0XHR9XG5cdFx0XHRjb25zdCB4U2hhZG93T2Zmc2V0ID0gTWF0aC5jb3Moc3R5bGUuZHJvcFNoYWRvd0FuZ2xlKSAqIHN0eWxlLmRyb3BTaGFkb3dEaXN0YW5jZTtcblx0XHRcdGNvbnN0IHlTaGFkb3dPZmZzZXQgPSBNYXRoLnNpbihzdHlsZS5kcm9wU2hhZG93QW5nbGUpICogc3R5bGUuZHJvcFNoYWRvd0Rpc3RhbmNlO1xuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBsaW5lcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRsaW5lUG9zaXRpb25YID0gc3R5bGUuc3Ryb2tlVGhpY2tuZXNzIC8gMjtcblx0XHRcdFx0bGluZVBvc2l0aW9uWSA9ICgoc3R5bGUuc3Ryb2tlVGhpY2tuZXNzIC8gMikgKyAoaSAqIGxpbmVIZWlnaHQpKSArIGZvbnRQcm9wZXJ0aWVzLmFzY2VudDtcblx0XHRcdFx0aWYgKHN0eWxlLmFsaWduID09PSBcInJpZ2h0XCIpIHtcblx0XHRcdFx0XHRsaW5lUG9zaXRpb25YICs9IG1heExpbmVXaWR0aCAtIGxpbmVXaWR0aHNbaV07XG5cdFx0XHRcdH0gZWxzZSBpZiAoc3R5bGUuYWxpZ24gPT09IFwiY2VudGVyXCIpIHtcblx0XHRcdFx0XHRsaW5lUG9zaXRpb25YICs9IChtYXhMaW5lV2lkdGggLSBsaW5lV2lkdGhzW2ldKSAvIDI7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKHN0eWxlLmZpbGwpIHtcblx0XHRcdFx0XHR0aGlzLmRyYXdMZXR0ZXJTcGFjaW5nKFxuXHRcdFx0XHRcdFx0bGluZXNbaV0sXG5cdFx0XHRcdFx0XHRsaW5lUG9zaXRpb25YICsgeFNoYWRvd09mZnNldCArIHN0eWxlLnBhZGRpbmcsIGxpbmVQb3NpdGlvblkgKyB5U2hhZG93T2Zmc2V0ICsgc3R5bGUucGFkZGluZyxcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdGlmIChzdHlsZS5zdHJva2UgJiYgc3R5bGUuc3Ryb2tlVGhpY2tuZXNzKSB7XG5cdFx0XHRcdFx0XHRjb250ZXh0LnN0cm9rZVN0eWxlID0gc3R5bGUuZHJvcFNoYWRvd0NvbG9yO1xuXHRcdFx0XHRcdFx0dGhpcy5kcmF3TGV0dGVyU3BhY2luZyhcblx0XHRcdFx0XHRcdFx0bGluZXNbaV0sXG5cdFx0XHRcdFx0XHRcdGxpbmVQb3NpdGlvblggKyB4U2hhZG93T2Zmc2V0ICsgc3R5bGUucGFkZGluZywgbGluZVBvc2l0aW9uWSArIHlTaGFkb3dPZmZzZXQgKyBzdHlsZS5wYWRkaW5nLFxuXHRcdFx0XHRcdFx0XHR0cnVlLFxuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdGNvbnRleHQuc3Ryb2tlU3R5bGUgPSBzdHlsZS5zdHJva2U7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdC8vIHJlc2V0IHRoZSBzaGFkb3cgYmx1ciBhbmQgYWxwaGEgdGhhdCB3YXMgc2V0IGJ5IHRoZSBkcm9wIHNoYWRvdywgZm9yIHRoZSByZWd1bGFyIHRleHRcblx0XHRjb250ZXh0LnNoYWRvd0JsdXIgPSAwO1xuXHRcdGNvbnRleHQuZ2xvYmFsQWxwaGEgPSAxO1xuXHRcdC8vIHNldCBjYW52YXMgdGV4dCBzdHlsZXNcblx0XHQvL0B0cy1pZ25vcmVcblx0XHRjb250ZXh0LmZpbGxTdHlsZSA9IHRoaXMuX2dlbmVyYXRlRmlsbFN0eWxlKHN0eWxlLCBsaW5lcyk7XG5cdFx0Ly8gZHJhdyBsaW5lcyBsaW5lIGJ5IGxpbmVcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGxpbmVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRsaW5lUG9zaXRpb25YID0gc3R5bGUuc3Ryb2tlVGhpY2tuZXNzIC8gMjtcblx0XHRcdGxpbmVQb3NpdGlvblkgPSAoKHN0eWxlLnN0cm9rZVRoaWNrbmVzcyAvIDIpICsgKGkgKiBsaW5lSGVpZ2h0KSkgKyBmb250UHJvcGVydGllcy5hc2NlbnQ7XG5cdFx0XHRpZiAoc3R5bGUuYWxpZ24gPT09IFwicmlnaHRcIikge1xuXHRcdFx0XHRsaW5lUG9zaXRpb25YICs9IG1heExpbmVXaWR0aCAtIGxpbmVXaWR0aHNbaV07XG5cdFx0XHR9IGVsc2UgaWYgKHN0eWxlLmFsaWduID09PSBcImNlbnRlclwiKSB7XG5cdFx0XHRcdGxpbmVQb3NpdGlvblggKz0gKG1heExpbmVXaWR0aCAtIGxpbmVXaWR0aHNbaV0pIC8gMjtcblx0XHRcdH1cblx0XHRcdGlmIChzdHlsZS5zdHJva2UgJiYgc3R5bGUuc3Ryb2tlVGhpY2tuZXNzKSB7XG5cdFx0XHRcdHRoaXMuZHJhd0xldHRlclNwYWNpbmcoXG5cdFx0XHRcdFx0bGluZXNbaV0sXG5cdFx0XHRcdFx0bGluZVBvc2l0aW9uWCArIHN0eWxlLnBhZGRpbmcsXG5cdFx0XHRcdFx0bGluZVBvc2l0aW9uWSArIHN0eWxlLnBhZGRpbmcsXG5cdFx0XHRcdFx0dHJ1ZSxcblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHRcdGlmIChzdHlsZS5maWxsKSB7XG5cdFx0XHRcdHRoaXMuZHJhd0xldHRlclNwYWNpbmcoXG5cdFx0XHRcdFx0bGluZXNbaV0sXG5cdFx0XHRcdFx0bGluZVBvc2l0aW9uWCArIHN0eWxlLnBhZGRpbmcsXG5cdFx0XHRcdFx0bGluZVBvc2l0aW9uWSArIHN0eWxlLnBhZGRpbmcsXG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdC8vQHRzLWlnbm9yZVxuXHRcdHRoaXMudXBkYXRlVGV4dHVyZSgpO1xuXHR9XG5cblx0ZHJhd0xldHRlclNwYWNpbmcodGV4dDogc3RyaW5nLCB4OiBudW1iZXIsIHk6IG51bWJlciwgaXNTdHJva2UgPSBmYWxzZSkge1xuXHRcdGNvbnN0IGluZGV4ZXMgPSBnZXRVbmlxdWVOdW1iZXIoMCwgdGV4dC5sZW5ndGgsIHRoaXMuaW1nQ291bnRJbkxpbmUpO1xuXHRcdGluZGV4ZXMuc29ydCgoYSwgYikgPT4gYSAtIGIpO1xuXG5cdFx0Y29uc3QgdGV4dHMgPSBbXTtcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGluZGV4ZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHRleHRzLnB1c2godGV4dC5zbGljZShpbmRleGVzW2kgLSAxXSB8fCAwLCBpbmRleGVzW2ldKSk7XG5cdFx0fVxuXHRcdHRleHRzLnB1c2godGV4dC5zbGljZShpbmRleGVzW2luZGV4ZXMubGVuZ3RoIC0gMV0sIHRleHQubGVuZ3RoKSk7XG5cblx0XHRsZXQgb2Zmc2V0ID0geDtcblx0XHR0ZXh0cy5mb3JFYWNoKHRleHQgPT4ge1xuXHRcdFx0dGhpcy5kcmF3VGV4dCh0ZXh0LCBvZmZzZXQsIHksIGlzU3Ryb2tlKTtcblx0XHRcdG9mZnNldCArPSB0aGlzLmNvbnRleHQubWVhc3VyZVRleHQodGV4dCkud2lkdGg7XG5cdFx0XHRjb25zdCBpbWdXID0gdGhpcy5kcmF3SW1nKG9mZnNldCwgeSk7XG5cdFx0XHRvZmZzZXQgKz0gaW1nVztcblx0XHR9KTtcblx0fVxuXG5cdHByaXZhdGUgZHJhd1RleHQodGV4dDogc3RyaW5nLCB4OiBudW1iZXIsIHk6IG51bWJlciwgaXNTdHJva2UgPSBmYWxzZSkge1xuXHRcdC8vQHRzLWlnbm9yZVxuXHRcdGNvbnN0IHN0eWxlID0gdGhpcy5fc3R5bGU7XG5cdFx0Ly8gbGV0dGVyU3BhY2luZyBvZiAwIG1lYW5zIG5vcm1hbFxuXHRcdGNvbnN0IGxldHRlclNwYWNpbmcgPSBzdHlsZS5sZXR0ZXJTcGFjaW5nO1xuXHRcdGlmIChsZXR0ZXJTcGFjaW5nID09PSAwKSB7XG5cdFx0XHRpZiAoaXNTdHJva2UpIHtcblx0XHRcdFx0dGhpcy5jb250ZXh0LnN0cm9rZVRleHQodGV4dCwgeCwgeSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLmNvbnRleHQuZmlsbFRleHQodGV4dCwgeCwgeSk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGNvbnN0IGNoYXJhY3RlcnMgPSBTdHJpbmcucHJvdG90eXBlLnNwbGl0LmNhbGwodGV4dCwgXCJcIik7XG5cdFx0bGV0IGN1cnJlbnRQb3NpdGlvbiA9IHg7XG5cdFx0bGV0IGluZGV4ID0gMDtcblx0XHRsZXQgY3VycmVudCA9IFwiXCI7XG5cdFx0d2hpbGUgKGluZGV4IDwgdGV4dC5sZW5ndGgpIHtcblx0XHRcdGN1cnJlbnQgPSBjaGFyYWN0ZXJzW2luZGV4KytdO1xuXHRcdFx0aWYgKGlzU3Ryb2tlKSB7XG5cdFx0XHRcdHRoaXMuY29udGV4dC5zdHJva2VUZXh0KGN1cnJlbnQsIGN1cnJlbnRQb3NpdGlvbiwgeSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLmNvbnRleHQuZmlsbFRleHQoY3VycmVudCwgY3VycmVudFBvc2l0aW9uLCB5KTtcblx0XHRcdH1cblx0XHRcdGN1cnJlbnRQb3NpdGlvbiArPSB0aGlzLmNvbnRleHQubWVhc3VyZVRleHQoY3VycmVudCkud2lkdGggKyBsZXR0ZXJTcGFjaW5nO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgZ2V0IGltZ1coKSB7XG5cdFx0Y29uc3QgaCA9IHRoaXMuc3R5bGUuZm9udFNpemU7XG5cdFx0cmV0dXJuIHRoaXMuaW1nLndpZHRoICogKGggLyB0aGlzLmltZy5oZWlnaHQpO1xuXHR9XG5cblx0cHJpdmF0ZSBkcmF3SW1nKHg6IG51bWJlciwgeTogbnVtYmVyKSB7XG5cdFx0Y29uc3QgaCA9IHRoaXMuc3R5bGUuZm9udFNpemU7XG5cdFx0Y29uc3QgdyA9IHRoaXMuaW1nLndpZHRoICogKGggLyB0aGlzLmltZy5oZWlnaHQpO1xuXHRcdGNvbnN0IHJlc291cmNlID0gdGhpcy5pbWcuYmFzZVRleHR1cmUucmVzb3VyY2U7XG5cdFx0aWYgKHJlc291cmNlIGluc3RhbmNlb2YgcmVzb3VyY2VzLkltYWdlUmVzb3VyY2UpIHtcblx0XHRcdHRoaXMuY29udGV4dC5kcmF3SW1hZ2UoKHRoaXMuaW1nLmJhc2VUZXh0dXJlLnJlc291cmNlIGFzIGFueSkuc291cmNlLCB4LCB5IC0gaCArIDUsIHcsIGgpO1xuXHRcdH1cblxuXHRcdHJldHVybiB3O1xuXHR9XG59XG4iLCJpbXBvcnQgeyBWaWV3IH0gZnJvbSBcIi4uLy4uL2NvcmUvdmlld3MvVmlld1wiO1xuaW1wb3J0IHsgSW1hZ2VUZXh0IH0gZnJvbSBcIi4vSW1hZ2VUZXh0XCI7XG5pbXBvcnQgQXNzZXRzIGZyb20gXCIuLi8uLi9jb3JlL0Fzc2V0c1wiO1xuaW1wb3J0IHsgZ2VuSW50ZWdlciB9IGZyb20gXCIuLi8uLi9VdGlsc1wiO1xuaW1wb3J0IHsgVGV4dFN0eWxlIH0gZnJvbSBcInBpeGkuanMtbGVnYWN5XCI7XG5cbmV4cG9ydCBjbGFzcyBUZXh0U2NlbmUgZXh0ZW5kcyBWaWV3IHtcblx0cHJpdmF0ZSBfdGV4dDogSW1hZ2VUZXh0O1xuXHRwcml2YXRlIF9pbnRlcnZhbDogTm9kZUpTLlRpbWVvdXQ7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblxuXHRcdGNvbnN0IHRleHR1cmUgPSBBc3NldHMudGV4dHVyZShcImNvaW4ucG5nXCIpO1xuXG5cdFx0Y29uc3QgdGV4dCA9IFwiTG9yZW0gSXBzdW0gaXMgc2ltcGx5IGR1bW15IHRleHQgb2YgdGhlIHByaW50aW5nIGFuZCB0eXBlc2V0dGluZyBpbmR1c3RyeS4gTG9yZW0gSXBzdW0gaGFzIFwiXG5cdFx0XHQrIFwiYmVlbiB0aGUgaW5kdXN0cnkncyBzdGFuZGFyZCBkdW1teSB0ZXh0IGV2ZXIgc2luY2UgdGhlIDE1MDBzLCB3aGVuIGFuIHVua25vd24gcHJpbnRlciB0b29rIGEgZ2FsbGV5IG9mIFwiXG5cdFx0XHQrIFwidHlwZSBhbmQgc2NyYW1ibGVkIGl0IHRvIG1ha2UgYSB0eXBlIHNwZWNpbWVuIGJvb2suIEl0IGhhcyBzdXJ2aXZlZCBub3Qgb25seSBmaXZlIGNlbnR1cmllcywgYnV0IGFsc28gXCJcblx0XHRcdCsgXCJ0aGUgbGVhcCBpbnRvIGVsZWN0cm9uaWMgdHlwZXNldHRpbmcsIHJlbWFpbmluZyBlc3NlbnRpYWxseSB1bmNoYW5nZWQuIEl0IHdhcyBwb3B1bGFyaXNlZCBpbiB0aGUgMTk2MHMgXCJcblx0XHRcdCsgXCJ3aXRoIHRoZSByZWxlYXNlIG9mIExldHJhc2V0IHNoZWV0cyBjb250YWluaW5nIExvcmVtIElwc3VtIHBhc3NhZ2VzLCBhbmQgbW9yZSByZWNlbnRseSB3aXRoIGRlc2t0b3BcIlxuXHRcdFx0KyBcIiBwdWJsaXNoaW5nIHNvZnR3YXJlIGxpa2UgQWxkdXMgUGFnZU1ha2VyIGluY2x1ZGluZyB2ZXJzaW9ucyBvZiBMb3JlbSBJcHN1bS5cIjtcblx0XHR0aGlzLl90ZXh0ID0gbmV3IEltYWdlVGV4dCh0ZXh0LCB7XG5cdFx0XHRmb250U2l6ZTogMjQsXG5cdFx0XHRmaWxsOiAweGZmZmZmZixcblx0XHRcdGJyZWFrV29yZHM6IHRydWUsXG5cdFx0XHR3b3JkV3JhcDogdHJ1ZSxcblx0XHRcdHdvcmRXcmFwV2lkdGg6IHRoaXMuc3RhZ2Uudyxcblx0XHRcdGFsaWduOiBcImNlbnRlclwiLFxuXHRcdH0pO1xuXHRcdHRoaXMuX3RleHQuaW1nID0gdGV4dHVyZTtcblx0XHR0aGlzLl90ZXh0LmltZ0NvdW50SW5MaW5lID0gMztcblx0XHR0aGlzLl90ZXh0LmFuY2hvci5zZXQoMC41KTtcblx0XHR0aGlzLmFkZENoaWxkKHRoaXMuX3RleHQpO1xuXG5cdFx0dGhpcy5faW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB0aGlzLmNoYW5nZVRleHQoKSwgMjAwMCk7XG5cdH1cblxuXHRwcml2YXRlIGNoYW5nZVRleHQoKSB7XG5cdFx0dGhpcy5fdGV4dC5pbWdDb3VudEluTGluZSA9IGdlbkludGVnZXIoMCwgNSk7XG5cdFx0KHRoaXMuX3RleHQuc3R5bGUgYXMgVGV4dFN0eWxlKS5mb250U2l6ZSA9IGdlbkludGVnZXIoMTIsIDI0KTtcblx0fVxuXG5cdHByb3RlY3RlZCBvblJlc2l6ZSgpIHtcblx0XHRzdXBlci5vblJlc2l6ZSgpO1xuXHRcdHRoaXMuX3RleHQucG9zaXRpb24uc2V0KHRoaXMudyAqIDAuNSwgdGhpcy5oICogMC41KTtcblx0fVxuXG5cdHB1YmxpYyBkZXN0cm95KG9wdGlvbnM/OiB7IGNoaWxkcmVuPzogYm9vbGVhbjsgdGV4dHVyZT86IGJvb2xlYW47IGJhc2VUZXh0dXJlPzogYm9vbGVhbiB9KSB7XG5cdFx0Y2xlYXJJbnRlcnZhbCh0aGlzLl9pbnRlcnZhbCk7XG5cdFx0c3VwZXIuZGVzdHJveShvcHRpb25zKTtcblx0fVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0bG9hZGVkOiBmYWxzZSxcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG5cdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsInZhciBkZWZlcnJlZCA9IFtdO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5PID0gKHJlc3VsdCwgY2h1bmtJZHMsIGZuLCBwcmlvcml0eSkgPT4ge1xuXHRpZihjaHVua0lkcykge1xuXHRcdHByaW9yaXR5ID0gcHJpb3JpdHkgfHwgMDtcblx0XHRmb3IodmFyIGkgPSBkZWZlcnJlZC5sZW5ndGg7IGkgPiAwICYmIGRlZmVycmVkW2kgLSAxXVsyXSA+IHByaW9yaXR5OyBpLS0pIGRlZmVycmVkW2ldID0gZGVmZXJyZWRbaSAtIDFdO1xuXHRcdGRlZmVycmVkW2ldID0gW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldO1xuXHRcdHJldHVybjtcblx0fVxuXHR2YXIgbm90RnVsZmlsbGVkID0gSW5maW5pdHk7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWQubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldID0gZGVmZXJyZWRbaV07XG5cdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG5cdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBjaHVua0lkcy5sZW5ndGg7IGorKykge1xuXHRcdFx0aWYgKChwcmlvcml0eSAmIDEgPT09IDAgfHwgbm90RnVsZmlsbGVkID49IHByaW9yaXR5KSAmJiBPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLk8pLmV2ZXJ5KChrZXkpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fLk9ba2V5XShjaHVua0lkc1tqXSkpKSkge1xuXHRcdFx0XHRjaHVua0lkcy5zcGxpY2Uoai0tLCAxKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZ1bGZpbGxlZCA9IGZhbHNlO1xuXHRcdFx0XHRpZihwcmlvcml0eSA8IG5vdEZ1bGZpbGxlZCkgbm90RnVsZmlsbGVkID0gcHJpb3JpdHk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKGZ1bGZpbGxlZCkge1xuXHRcdFx0ZGVmZXJyZWQuc3BsaWNlKGktLSwgMSlcblx0XHRcdHZhciByID0gZm4oKTtcblx0XHRcdGlmIChyICE9PSB1bmRlZmluZWQpIHJlc3VsdCA9IHI7XG5cdFx0fVxuXHR9XG5cdHJldHVybiByZXN1bHQ7XG59OyIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5ubWQgPSAobW9kdWxlKSA9PiB7XG5cdG1vZHVsZS5wYXRocyA9IFtdO1xuXHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdHJldHVybiBtb2R1bGU7XG59OyIsIi8vIG5vIGJhc2VVUklcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5PLmogPSAoY2h1bmtJZCkgPT4gKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9PT0gMCk7XG5cbi8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xudmFyIHdlYnBhY2tKc29ucENhbGxiYWNrID0gKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uLCBkYXRhKSA9PiB7XG5cdHZhciBbY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBydW50aW1lXSA9IGRhdGE7XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0fVxuXHR9XG5cdGlmKHJ1bnRpbWUpIHZhciByZXN1bHQgPSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHRpZihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbikgcGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG5cdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKCk7XG5cdFx0fVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkc1tpXV0gPSAwO1xuXHR9XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLk8ocmVzdWx0KTtcbn1cblxudmFyIGNodW5rTG9hZGluZ0dsb2JhbCA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtob21lXCJdID0gc2VsZltcIndlYnBhY2tDaHVua2hvbWVcIl0gfHwgW107XG5jaHVua0xvYWRpbmdHbG9iYWwuZm9yRWFjaCh3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIDApKTtcbmNodW5rTG9hZGluZ0dsb2JhbC5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCBjaHVua0xvYWRpbmdHbG9iYWwucHVzaC5iaW5kKGNodW5rTG9hZGluZ0dsb2JhbCkpOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgZGVwZW5kcyBvbiBvdGhlciBsb2FkZWQgY2h1bmtzIGFuZCBleGVjdXRpb24gbmVlZCB0byBiZSBkZWxheWVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFtcInZlbmRvclwiXSwgKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9NYWluLnRzXCIpKSlcbl9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8oX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=