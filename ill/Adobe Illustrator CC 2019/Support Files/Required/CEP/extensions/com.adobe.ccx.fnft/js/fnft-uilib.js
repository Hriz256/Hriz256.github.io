/**
 * ADOBE CONFIDENTIAL
 *  _________________
 *  Copyright 2016 Adobe Systems Incorporated
 *  All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Adobe Systems Incorporated and its suppliers,
 * if any.  The intellectual and technical concepts contained
 * herein are proprietary to Adobe Systems Incorporated and its
 * suppliers and are protected by all applicable intellectual property
 * laws, including trade secret and copyright laws.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe Systems Incorporated.
 */
!function(window, undefined) {
    "use strict";
    function mkitem(expr, key, val) {
        var item = {};
        return item[expr.key] = key, expr.pos && (item[expr.pos] = val), item;
    }
    function unmountRedundant(items, tags) {
        for (var t, i = tags.length, j = items.length; i > j; ) t = tags[--i], tags.splice(i, 1), 
        t.unmount();
    }
    function moveNestedTags(child, i) {
        Object.keys(child.tags).forEach(function(tagName) {
            var tag = child.tags[tagName];
            isArray(tag) ? each(tag, function(t) {
                moveChildTag(t, tagName, i);
            }) : moveChildTag(tag, tagName, i);
        });
    }
    function addVirtual(tag, src, target) {
        var sib, el = tag._root;
        for (tag._virts = []; el; ) sib = el.nextSibling, target ? src.insertBefore(el, target._root) : src.appendChild(el), 
        tag._virts.push(el), el = sib;
    }
    function moveVirtual(tag, src, target, len) {
        for (var sib, el = tag._root, i = 0; i < len; i++) sib = el.nextSibling, src.insertBefore(el, target._root), 
        el = sib;
    }
    function insertTag(isVirtual, prevTag, newTag, root, tags, virtualFn, dom, domToInsert) {
        isInStub(prevTag.root) || (isVirtual ? virtualFn(prevTag, root, newTag, dom.childNodes.length) : root.insertBefore(domToInsert, newTag.root));
    }
    function _each(dom, parent, expr) {
        remAttr(dom, "each");
        var hasKeys, mustReorder = typeof getAttr(dom, "no-reorder") !== T_STRING || remAttr(dom, "no-reorder"), tagName = getTagName(dom), impl = __tagImpl[tagName] || {
            tmpl: getOuterHTML(dom)
        }, useRoot = SPECIAL_TAGS_REGEX.test(tagName), root = dom.parentNode, ref = document.createTextNode(""), child = getTag(dom), isOption = "option" === tagName.toLowerCase(), tags = [], oldItems = [], isVirtual = "VIRTUAL" == dom.tagName;
        return expr = tmpl.loopKeys(expr), expr.isLoop = !0, root.insertBefore(ref, dom), 
        parent.one("before-mount", function() {
            dom.parentNode.removeChild(dom), root.stub && (root = parent.root);
        }), expr.update = function() {
            var items = tmpl(expr.val, parent), frag = document.createDocumentFragment();
            isArray(items) || (hasKeys = items || !1, items = hasKeys ? Object.keys(items).map(function(key) {
                return mkitem(expr, key, items[key]);
            }) : []);
            for (var i = 0, itemsLength = items.length; i < itemsLength; i++) {
                var domToInsert, item = items[i], _mustReorder = mustReorder && typeof item == T_OBJECT && !hasKeys, oldPos = oldItems.indexOf(item), pos = ~oldPos && _mustReorder ? oldPos : i, tag = tags[pos];
                item = !hasKeys && expr.key ? mkitem(expr, item, i) : item, !_mustReorder && !tag || _mustReorder && !~oldPos || !tag ? (tag = new Tag(impl, {
                    parent: parent,
                    isLoop: !0,
                    hasImpl: !!__tagImpl[tagName],
                    root: useRoot ? root : dom.cloneNode(),
                    item: item
                }, dom.innerHTML), tag.mount(), domToInsert = tag.stub || tag.root, isVirtual && (tag._root = tag.root.firstChild), 
                i != tags.length && tags[i] ? (insertTag(isVirtual, tag, tags[i], root, tags, addVirtual, dom, domToInsert), 
                oldItems.splice(i, 0, item)) : isVirtual ? addVirtual(tag, frag) : frag.appendChild(domToInsert), 
                tags.splice(i, 0, tag), pos = i) : tag.update(item, !0), pos !== i && _mustReorder && tags[i] && (contains(items, oldItems[i]) && insertTag(isVirtual, tag, tags[i], root, tags, moveVirtual, dom, domToInsert), 
                expr.pos && (tag[expr.pos] = i), tags.splice(i, 0, tags.splice(pos, 1)[0]), oldItems.splice(i, 0, oldItems.splice(pos, 1)[0]), 
                !child && tag.tags && moveNestedTags(tag, i)), tag._item = item, defineProperty(tag, "_parent", parent);
            }
            if (unmountRedundant(items, tags), root.insertBefore(frag, ref), isOption && FIREFOX && !root.multiple) for (var n = 0; n < root.length; n++) if (root[n].__riot1374) {
                root.selectedIndex = n, delete root[n].__riot1374;
                break;
            }
            child && (parent.tags[tagName] = tags), oldItems = items.slice();
        }, expr;
    }
    function parseExpressions(root, tag, expressions) {
        var base = {
            parent: {
                children: expressions
            }
        };
        walk(root, function(dom, ctx) {
            var attr, expr, type = dom.nodeType, parent = ctx.parent;
            if (3 == type && "STYLE" != dom.parentNode.tagName && tmpl.hasExpr(dom.nodeValue) && parent.children.push({
                dom: dom,
                expr: dom.nodeValue
            }), 1 != type) return ctx;
            if (attr = getAttr(dom, "each")) return parent.children.push(_each(dom, tag, attr)), 
            !1;
            (expr = getAttr(dom, "if")) && (remAttr(dom, "if"), attr = {
                isIf: !0,
                expr: expr,
                dom: dom,
                children: []
            }, parent.children.push(attr), parent = attr), (expr = getNamedKey(dom)) && parent.children.push({
                isNamed: !0,
                dom: dom,
                expr: expr
            });
            var tagImpl = getTag(dom);
            return tagImpl && dom !== root ? (parent.children.push({
                isTag: !0,
                dom: dom,
                impl: tagImpl
            }), !1) : (each(dom.attributes, function(attr) {
                var name = attr.name, bool = name.split("__")[1];
                if (tmpl.hasExpr(attr.value)) return expr = {
                    dom: dom,
                    expr: attr.value,
                    attr: bool || attr.name,
                    bool: bool
                }, parent.children.push(expr), bool ? (remAttr(dom, name), !1) : void 0;
            }), {
                parent: parent
            });
        }, base);
    }
    function Tag(impl, conf, innerHTML) {
        function updateOpts() {
            var ctx = hasImpl && isLoop ? self : parent || self;
            each(root.attributes, function(el) {
                var val = el.value;
                opts[toCamel(el.name)] = tmpl.hasExpr(val) ? tmpl(val, ctx) : val;
            }), each(Object.keys(attr), function(name) {
                opts[toCamel(name)] = tmpl(attr[name], ctx);
            });
        }
        function normalizeData(data) {
            for (var key in item) typeof self[key] !== T_UNDEF && isWritable(self, key) && (self[key] = data[key]);
        }
        function inheritFrom(target) {
            each(Object.keys(target), function(k) {
                var mustSync = !RESERVED_WORDS_BLACKLIST.test(k) && contains(propsInSyncWithParent, k);
                (typeof self[k] === T_UNDEF || mustSync) && (mustSync || propsInSyncWithParent.push(k), 
                self[k] = target[k]);
            });
        }
        var dom, self = riot.observable(this), opts = inherit(conf.opts) || {}, parent = conf.parent, isLoop = conf.isLoop, hasImpl = conf.hasImpl, item = cleanUpData(conf.item), expressions = [], root = conf.root, tagName = root.tagName.toLowerCase(), attr = {}, propsInSyncWithParent = [];
        impl.name && root._tag && root._tag.unmount(!0), this.isMounted = !1, root.isLoop = isLoop, 
        root._tag = this, defineProperty(this, "_riot_id", ++__uid), extend(this, {
            parent: parent,
            root: root,
            opts: opts
        }, item), defineProperty(this, "tags", {}), each(root.attributes, function(el) {
            var val = el.value;
            tmpl.hasExpr(val) && (attr[el.name] = val);
        }), dom = mkdom(impl.tmpl, innerHTML, isLoop), defineProperty(this, "update", function(data, isInherited) {
            return data = cleanUpData(data), isLoop && inheritFrom(self.parent), data && isObject(item) && (normalizeData(data), 
            item = data), extend(self, data), updateOpts(), self.trigger("update", data), update(expressions, self), 
            isInherited && self.parent ? self.parent.one("updated", function() {
                self.trigger("updated");
            }) : rAF(function() {
                self.trigger("updated");
            }), this;
        }), defineProperty(this, "mixin", function() {
            return each(arguments, function(mix) {
                var instance, obj, props = [];
                mix = typeof mix === T_STRING ? riot.mixin(mix) : mix, instance = isFunction(mix) ? new mix() : mix;
                var proto = Object.getPrototypeOf(instance);
                do props = props.concat(Object.getOwnPropertyNames(obj || instance)); while (obj = Object.getPrototypeOf(obj || instance));
                each(props, function(key) {
                    if ("init" != key) {
                        var descriptor = Object.getOwnPropertyDescriptor(instance, key) || Object.getOwnPropertyDescriptor(proto, key), hasGetterSetter = descriptor && (descriptor.get || descriptor.set);
                        !self.hasOwnProperty(key) && hasGetterSetter ? Object.defineProperty(self, key, descriptor) : self[key] = isFunction(instance[key]) ? instance[key].bind(self) : instance[key];
                    }
                }), instance.init && instance.init.bind(self)();
            }), this;
        }), defineProperty(this, "mount", function() {
            updateOpts();
            var globalMixin = riot.mixin(GLOBAL_MIXIN);
            if (globalMixin) for (var i in globalMixin) globalMixin.hasOwnProperty(i) && self.mixin(globalMixin[i]);
            if (self._parent && self._parent.root.isLoop && inheritFrom(self._parent), impl.fn && impl.fn.call(self, opts), 
            (impl.attrs || hasImpl) && (walkAttributes(impl.attrs, function(k, v) {
                setAttr(root, k, v);
            }), parseExpressions(self.root, self, expressions)), parseExpressions(dom, self, expressions), 
            parent && parent.on("unmount", self.unmount), self.parent && !isLoop || self.update(item), 
            self.trigger("before-mount"), isLoop && !hasImpl) root = dom.firstChild; else {
                for (;dom.firstChild; ) root.appendChild(dom.firstChild);
                root.stub && (root = parent.root);
            }
            defineProperty(self, "root", root), !self.parent || self.parent.isMounted ? (self.isMounted = !0, 
            self.trigger("mount")) : self.parent.one("mount", function() {
                isInStub(self.root) || (self.parent.isMounted = self.isMounted = !0, self.trigger("mount"));
            });
        }), defineProperty(this, "unmount", function(keepRootTag) {
            var ptag, el = root, p = el.parentNode, tagIndex = __virtualDom.indexOf(self);
            if (self.trigger("before-unmount"), ~tagIndex && __virtualDom.splice(tagIndex, 1), 
            p) {
                if (parent) ptag = getImmediateCustomParentTag(parent), isArray(ptag.tags[tagName]) ? each(ptag.tags[tagName], function(tag, i) {
                    tag._riot_id == self._riot_id && ptag.tags[tagName].splice(i, 1);
                }) : ptag.tags[tagName] = undefined; else for (;el.firstChild; ) el.removeChild(el.firstChild);
                keepRootTag ? (remAttr(p, RIOT_TAG_IS), remAttr(p, RIOT_TAG)) : p.removeChild(el);
            }
            this._virts && each(this._virts, function(v) {
                v.parentNode && v.parentNode.removeChild(v);
            }), self.trigger("unmount"), parent && parent.off("unmount", self.unmount), self.off("*"), 
            self.isMounted = !1, delete root._tag;
        });
    }
    function setEventHandler(name, handler, dom, tag) {
        dom[name] = function(e) {
            var el, ptag = tag._parent, item = tag._item;
            if (!item) for (;ptag && !item; ) item = ptag._item, ptag = ptag._parent;
            e = e || window.event, isWritable(e, "currentTarget") && (e.currentTarget = dom), 
            isWritable(e, "target") && (e.target = e.srcElement), isWritable(e, "which") && (e.which = e.charCode || e.keyCode), 
            e.item = item, handler.call(tag, e) === !0 || /radio|check/.test(dom.type) || (e.preventDefault && e.preventDefault(), 
            e.returnValue = !1), e.preventUpdate || (el = item ? getImmediateCustomParentTag(ptag) : tag, 
            el.update());
        };
    }
    function insertTo(root, node, before) {
        root && (root.insertBefore(before, node), root.removeChild(node));
    }
    function update(expressions, tag) {
        each(expressions, function(expr, i) {
            var dom = expr.dom, attrName = expr.attr, value = tmpl(expr.expr, tag), parent = expr.dom && expr.dom.parentNode;
            expr.bool ? value = !!value : null == value && (value = "");
            var old = expr.value;
            if (expr.value = value, expr.isIf) return updateIf(expr, old, value, tag);
            if (expr.isTag) return updateTagRef(expr, tag);
            if (expr.isLoop) return expr.update();
            if (expr.isNamed) return updateNamed(expr, old, value, tag);
            if (old !== value) {
                if (!attrName) return value += "", void (parent && (expr.parent = parent, "TEXTAREA" === parent.tagName ? (parent.value = value, 
                IE_VERSION || (dom.nodeValue = value)) : dom.nodeValue = value));
                if ("value" === attrName) return void (dom.value !== value && (dom.value = value, 
                setAttr(dom, attrName, value)));
                remAttr(dom, attrName), isFunction(value) ? setEventHandler(attrName, value, dom, tag) : "show" === attrName ? dom.style.display = value ? "" : "none" : "hide" === attrName ? dom.style.display = value ? "none" : "" : expr.bool ? (dom[attrName] = value, 
                value && setAttr(dom, attrName, attrName), FIREFOX && "selected" === attrName && "OPTION" === dom.tagName && (dom.__riot1374 = value)) : (0 === value || value && typeof value !== T_OBJECT) && (startsWith(attrName, RIOT_PREFIX) && attrName != RIOT_TAG && (attrName = attrName.slice(RIOT_PREFIX.length)), 
                setAttr(dom, attrName, value));
            }
        });
    }
    function updateNamed(expr, old, value, tag) {
        if (!expr.done) {
            var parent = getImmediateCustomParentTag(tag);
            setNamed(expr.dom, parent, value), expr.done = !0;
        }
    }
    function updateTagRef(expr, parent) {
        if (expr.tag) return void expr.tag.update();
        var conf = {
            root: expr.dom,
            parent: parent,
            hasImpl: !0
        };
        expr.tag = initChildTag(expr.impl, conf, expr.dom.innerHTML, parent), expr.tag.mount(), 
        expr.tag.update();
    }
    function updateIf(expr, old, value, tag) {
        if (expr.started && !value == !old) return void (value && update(expr.children, tag));
        var stub, dom = expr.dom;
        stub = expr.stub = expr.stub || document.createTextNode(""), value ? (update(expr.children, tag), 
        insertTo(stub.parentNode, stub, dom)) : dom.parentNode ? insertTo(dom.parentNode, dom, stub) : tag.stub = stub, 
        expr.started = !0;
    }
    function each(els, fn) {
        for (var el, len = els ? els.length : 0, i = 0; i < len; i++) el = els[i], null != el && fn(el, i) === !1 && i--;
        return els;
    }
    function isFunction(v) {
        return typeof v === T_FUNCTION || !1;
    }
    function getOuterHTML(el) {
        if (el.outerHTML) return el.outerHTML;
        var container = mkEl("div");
        return container.appendChild(el.cloneNode(!0)), container.innerHTML;
    }
    function setInnerHTML(container, html) {
        if (typeof container.innerHTML != T_UNDEF) container.innerHTML = html; else {
            var doc = new DOMParser().parseFromString(html, "application/xml");
            container.appendChild(container.ownerDocument.importNode(doc.documentElement, !0));
        }
    }
    function isSVGTag(name) {
        return ~SVG_TAGS_LIST.indexOf(name);
    }
    function isObject(v) {
        return v && typeof v === T_OBJECT;
    }
    function remAttr(dom, name) {
        dom.removeAttribute(name);
    }
    function toCamel(string) {
        return string.replace(/-(\w)/g, function(_, c) {
            return c.toUpperCase();
        });
    }
    function getAttr(dom, name) {
        return dom.getAttribute(name);
    }
    function setAttr(dom, name, val) {
        var xlink = XLINK_REGEX.exec(name);
        xlink && xlink[1] ? dom.setAttributeNS(XLINK_NS, xlink[1], val) : dom.setAttribute(name, val);
    }
    function getTag(dom) {
        return dom.tagName && __tagImpl[getAttr(dom, RIOT_TAG_IS) || getAttr(dom, RIOT_TAG) || dom.tagName.toLowerCase()];
    }
    function addChildTag(tag, tagName, parent) {
        var cachedTag = parent.tags[tagName];
        cachedTag ? (isArray(cachedTag) || cachedTag !== tag && (parent.tags[tagName] = [ cachedTag ]), 
        contains(parent.tags[tagName], tag) || parent.tags[tagName].push(tag)) : parent.tags[tagName] = tag;
    }
    function moveChildTag(tag, tagName, newPos) {
        var tags, parent = tag.parent;
        parent && (tags = parent.tags[tagName], isArray(tags) ? tags.splice(newPos, 0, tags.splice(tags.indexOf(tag), 1)[0]) : addChildTag(tag, tagName, parent));
    }
    function initChildTag(child, opts, innerHTML, parent) {
        var tag = new Tag(child, opts, innerHTML), tagName = getTagName(opts.root), ptag = getImmediateCustomParentTag(parent);
        return tag.parent = ptag, tag._parent = parent, addChildTag(tag, tagName, ptag), 
        ptag !== parent && addChildTag(tag, tagName, parent), opts.root.innerHTML = "", 
        tag;
    }
    function getImmediateCustomParentTag(tag) {
        for (var ptag = tag; !getTag(ptag.root) && ptag.parent; ) ptag = ptag.parent;
        return ptag;
    }
    function defineProperty(el, key, value, options) {
        return Object.defineProperty(el, key, extend({
            value: value,
            enumerable: !1,
            writable: !1,
            configurable: !0
        }, options)), el;
    }
    function getTagName(dom) {
        var child = getTag(dom), namedTag = getAttr(dom, "name"), tagName = namedTag && !tmpl.hasExpr(namedTag) ? namedTag : child ? child.name : dom.tagName.toLowerCase();
        return tagName;
    }
    function extend(src) {
        for (var obj, args = arguments, i = 1; i < args.length; ++i) if (obj = args[i]) for (var key in obj) isWritable(src, key) && (src[key] = obj[key]);
        return src;
    }
    function contains(arr, item) {
        return ~arr.indexOf(item);
    }
    function isArray(a) {
        return Array.isArray(a) || a instanceof Array;
    }
    function isWritable(obj, key) {
        var props = Object.getOwnPropertyDescriptor(obj, key);
        return typeof obj[key] === T_UNDEF || props && props.writable;
    }
    function cleanUpData(data) {
        if (!(data instanceof Tag || data && typeof data.trigger == T_FUNCTION)) return data;
        var o = {};
        for (var key in data) RESERVED_WORDS_BLACKLIST.test(key) || (o[key] = data[key]);
        return o;
    }
    function walk(dom, fn, context) {
        if (dom) {
            var res = fn(dom, context);
            if (res === !1) return;
            for (dom = dom.firstChild; dom; ) walk(dom, fn, res), dom = dom.nextSibling;
        }
    }
    function walkAttributes(html, fn) {
        for (var m, re = /([-\w]+) ?= ?(?:"([^"]*)|'([^']*)|({[^}]*}))/g; m = re.exec(html); ) fn(m[1].toLowerCase(), m[2] || m[3] || m[4]);
    }
    function isInStub(dom) {
        for (;dom; ) {
            if (dom.inStub) return !0;
            dom = dom.parentNode;
        }
        return !1;
    }
    function mkEl(name, isSvg) {
        return isSvg ? document.createElementNS("http://www.w3.org/2000/svg", "svg") : document.createElement(name);
    }
    function $$(selector, ctx) {
        return (ctx || document).querySelectorAll(selector);
    }
    function $(selector, ctx) {
        return (ctx || document).querySelector(selector);
    }
    function inherit(parent) {
        return Object.create(parent || null);
    }
    function getNamedKey(dom) {
        return getAttr(dom, "id") || getAttr(dom, "name");
    }
    function setNamed(dom, parent, key) {
        if (key = key || getNamedKey(dom)) {
            var dest = parent[key], isArr = isArray(dest);
            dest ? (!isArr || isArr && !contains(dest, dom)) && (isArr ? dest.push(dom) : parent[key] = [ dest, dom ]) : parent[key] = dom;
        }
    }
    function startsWith(src, str) {
        return src.slice(0, str.length) === str;
    }
    function mountTo(root, tagName, opts) {
        var tag = __tagImpl[tagName], innerHTML = root._innerHTML = root._innerHTML || root.innerHTML;
        return root.innerHTML = "", tag && root && (tag = new Tag(tag, {
            root: root,
            opts: opts
        }, innerHTML)), tag && tag.mount && (tag.mount(), contains(__virtualDom, tag) || __virtualDom.push(tag)), 
        tag;
    }
    var riot = {
        version: "v2.6.7custom",
        settings: {}
    }, __uid = 0, __virtualDom = [], __tagImpl = {}, GLOBAL_MIXIN = "__global_mixin", RIOT_PREFIX = "riot-", RIOT_TAG = RIOT_PREFIX + "tag", RIOT_TAG_IS = "data-is", T_STRING = "string", T_OBJECT = "object", T_UNDEF = "undefined", T_FUNCTION = "function", XLINK_NS = "http://www.w3.org/1999/xlink", XLINK_REGEX = /^xlink:(\w+)/, SPECIAL_TAGS_REGEX = /^(?:t(?:body|head|foot|[rhd])|caption|col(?:group)?|opt(?:ion|group))$/, RESERVED_WORDS_BLACKLIST = /^(?:_(?:item|id|parent)|update|root|(?:un)?mount|mixin|is(?:Mounted|Loop)|tags|parent|opts|trigger|o(?:n|ff|ne))$/, SVG_TAGS_LIST = [ "altGlyph", "animate", "animateColor", "circle", "clipPath", "defs", "ellipse", "feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feFlood", "feGaussianBlur", "feImage", "feMerge", "feMorphology", "feOffset", "feSpecularLighting", "feTile", "feTurbulence", "filter", "font", "foreignObject", "g", "glyph", "glyphRef", "image", "line", "linearGradient", "marker", "mask", "missing-glyph", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "switch", "symbol", "text", "textPath", "tref", "tspan", "use" ], IE_VERSION = 0 | (window && window.document || {}).documentMode, FIREFOX = window && !!window.InstallTrigger;
    riot.observable = function(el) {
        function onEachEvent(e, fn) {
            for (var es = e.split(" "), l = es.length, i = 0; i < l; i++) {
                var name = es[i];
                name && fn(name, i);
            }
        }
        el = el || {};
        var callbacks = {}, slice = Array.prototype.slice;
        return Object.defineProperties(el, {
            on: {
                value: function(events, fn) {
                    return "function" != typeof fn ? el : (onEachEvent(events, function(name, pos) {
                        (callbacks[name] = callbacks[name] || []).push(fn), fn.typed = pos > 0;
                    }), el);
                },
                enumerable: !1,
                writable: !1,
                configurable: !1
            },
            off: {
                value: function(events, fn) {
                    return "*" != events || fn ? onEachEvent(events, function(name, pos) {
                        if (fn) for (var cb, arr = callbacks[name], i = 0; cb = arr && arr[i]; ++i) cb == fn && arr.splice(i--, 1); else delete callbacks[name];
                    }) : callbacks = {}, el;
                },
                enumerable: !1,
                writable: !1,
                configurable: !1
            },
            one: {
                value: function(events, fn) {
                    function on() {
                        el.off(events, on), fn.apply(el, arguments);
                    }
                    return el.on(events, on);
                },
                enumerable: !1,
                writable: !1,
                configurable: !1
            },
            trigger: {
                value: function(events) {
                    for (var fns, arglen = arguments.length - 1, args = new Array(arglen), i = 0; i < arglen; i++) args[i] = arguments[i + 1];
                    return onEachEvent(events, function(name, pos) {
                        fns = slice.call(callbacks[name] || [], 0);
                        for (var fn, i = 0; fn = fns[i]; ++i) fn.busy || (fn.busy = 1, fn.apply(el, fn.typed ? [ name ].concat(args) : args), 
                        fns[i] !== fn && i--, fn.busy = 0);
                        callbacks["*"] && "*" != name && el.trigger.apply(el, [ "*", name ].concat(args));
                    }), el;
                },
                enumerable: !1,
                writable: !1,
                configurable: !1
            }
        }), el;
    }, function(riot) {
        function DEFAULT_PARSER(path) {
            return path.split(/[\/?#]/);
        }
        function DEFAULT_SECOND_PARSER(path, filter) {
            var re = new RegExp("^" + filter[REPLACE](/\*/g, "([^/?#]+?)")[REPLACE](/\.\./, ".*") + "$"), args = path.match(re);
            if (args) return args.slice(1);
        }
        function debounce(fn, delay) {
            var t;
            return function() {
                clearTimeout(t), t = setTimeout(fn, delay);
            };
        }
        function start(autoExec) {
            debouncedEmit = debounce(emit, 1), win[ADD_EVENT_LISTENER](POPSTATE, debouncedEmit), 
            win[ADD_EVENT_LISTENER](HASHCHANGE, debouncedEmit), doc[ADD_EVENT_LISTENER](clickEvent, click), 
            autoExec && emit(!0);
        }
        function Router() {
            this.$ = [], riot.observable(this), central.on("stop", this.s.bind(this)), central.on("emit", this.e.bind(this));
        }
        function normalize(path) {
            return path[REPLACE](/^\/|\/$/, "");
        }
        function isString(str) {
            return "string" == typeof str;
        }
        function getPathFromRoot(href) {
            return (href || loc.href)[REPLACE](RE_ORIGIN, "");
        }
        function getPathFromBase(href) {
            return "#" == base[0] ? (href || loc.href || "").split(base)[1] || "" : (loc ? getPathFromRoot(href) : href || "")[REPLACE](base, "");
        }
        function emit(force) {
            var first, isRoot = 0 == emitStackLevel;
            if (!(MAX_EMIT_STACK_LEVEL <= emitStackLevel) && (emitStackLevel++, emitStack.push(function() {
                var path = getPathFromBase();
                (force || path != current) && (central[TRIGGER]("emit", path), current = path);
            }), isRoot)) {
                for (;first = emitStack.shift(); ) first();
                emitStackLevel = 0;
            }
        }
        function click(e) {
            if (!(1 != e.which || e.metaKey || e.ctrlKey || e.shiftKey || e.defaultPrevented)) {
                for (var el = e.target; el && "A" != el.nodeName; ) el = el.parentNode;
                !el || "A" != el.nodeName || el[HAS_ATTRIBUTE]("download") || !el[HAS_ATTRIBUTE]("href") || el.target && "_self" != el.target || el.href.indexOf(loc.href.match(RE_ORIGIN)[0]) == -1 || el.href != loc.href && (el.href.split("#")[0] == loc.href.split("#")[0] || "#" != base[0] && 0 !== getPathFromRoot(el.href).indexOf(base) || "#" == base[0] && el.href.split(base)[0] != loc.href.split(base)[0] || !go(getPathFromBase(el.href), el.title || doc.title)) || e.preventDefault();
            }
        }
        function go(path, title, shouldReplace) {
            return hist ? (path = base + normalize(path), title = title || doc.title, shouldReplace ? hist.replaceState(null, title, path) : hist.pushState(null, title, path), 
            doc.title = title, routeFound = !1, emit(), routeFound) : central[TRIGGER]("emit", getPathFromBase(path));
        }
        var debouncedEmit, base, current, parser, secondParser, RE_ORIGIN = /^.+?\/\/+[^\/]+/, EVENT_LISTENER = "EventListener", REMOVE_EVENT_LISTENER = "remove" + EVENT_LISTENER, ADD_EVENT_LISTENER = "add" + EVENT_LISTENER, HAS_ATTRIBUTE = "hasAttribute", REPLACE = "replace", POPSTATE = "popstate", HASHCHANGE = "hashchange", TRIGGER = "trigger", MAX_EMIT_STACK_LEVEL = 3, win = "undefined" != typeof window && window, doc = "undefined" != typeof document && document, hist = win && history, loc = win && (hist.location || win.location), prot = Router.prototype, clickEvent = doc && doc.ontouchstart ? "touchstart" : "click", started = !1, central = riot.observable(), routeFound = !1, emitStack = [], emitStackLevel = 0;
        prot.m = function(first, second, third) {
            !isString(first) || second && !isString(second) ? second ? this.r(first, second) : this.r("@", first) : go(first, second, third || !1);
        }, prot.s = function() {
            this.off("*"), this.$ = [];
        }, prot.e = function(path) {
            this.$.concat("@").some(function(filter) {
                var args = ("@" == filter ? parser : secondParser)(normalize(path), normalize(filter));
                if ("undefined" != typeof args) return this[TRIGGER].apply(null, [ filter ].concat(args)), 
                routeFound = !0;
            }, this);
        }, prot.r = function(filter, action) {
            "@" != filter && (filter = "/" + normalize(filter), this.$.push(filter)), this.on(filter, action);
        };
        var mainRouter = new Router(), route = mainRouter.m.bind(mainRouter);
        route.create = function() {
            var newSubRouter = new Router(), router = newSubRouter.m.bind(newSubRouter);
            return router.stop = newSubRouter.s.bind(newSubRouter), router;
        }, route.base = function(arg) {
            base = arg || "#", current = getPathFromBase();
        }, route.exec = function() {
            emit(!0);
        }, route.parser = function(fn, fn2) {
            fn || fn2 || (parser = DEFAULT_PARSER, secondParser = DEFAULT_SECOND_PARSER), fn && (parser = fn), 
            fn2 && (secondParser = fn2);
        }, route.query = function() {
            var q = {}, href = loc.href || current;
            return href[REPLACE](/[?&](.+?)=([^&]*)/g, function(_, k, v) {
                q[k] = v;
            }), q;
        }, route.stop = function() {
            started && (win && (win[REMOVE_EVENT_LISTENER](POPSTATE, debouncedEmit), win[REMOVE_EVENT_LISTENER](HASHCHANGE, debouncedEmit), 
            doc[REMOVE_EVENT_LISTENER](clickEvent, click)), central[TRIGGER]("stop"), started = !1);
        }, route.start = function(autoExec) {
            started || (win && ("complete" == document.readyState ? start(autoExec) : win[ADD_EVENT_LISTENER]("load", function() {
                setTimeout(function() {
                    start(autoExec);
                }, 1);
            })), started = !0);
        }, route.base(), route.parser(), riot.route = route;
    }(riot);
    var brackets = function(UNDEF) {
        function _loopback(re) {
            return re;
        }
        function _rewrite(re, bp) {
            return bp || (bp = _cache), new RegExp(re.source.replace(/{/g, bp[2]).replace(/}/g, bp[3]), re.global ? REGLOB : "");
        }
        function _create(pair) {
            if (pair === DEFAULT) return _pairs;
            var arr = pair.split(" ");
            if (2 !== arr.length || UNSUPPORTED.test(pair)) throw new Error('Unsupported brackets "' + pair + '"');
            return arr = arr.concat(pair.replace(NEED_ESCAPE, "\\").split(" ")), arr[4] = _rewrite(arr[1].length > 1 ? /{[\S\s]*?}/ : _pairs[4], arr), 
            arr[5] = _rewrite(pair.length > 3 ? /\\({|})/g : _pairs[5], arr), arr[6] = _rewrite(_pairs[6], arr), 
            arr[7] = RegExp("\\\\(" + arr[3] + ")|([[({])|(" + arr[3] + ")|" + S_QBLOCKS, REGLOB), 
            arr[8] = pair, arr;
        }
        function _brackets(reOrIdx) {
            return reOrIdx instanceof RegExp ? _regex(reOrIdx) : _cache[reOrIdx];
        }
        function _reset(pair) {
            (pair || (pair = DEFAULT)) !== _cache[8] && (_cache = _create(pair), _regex = pair === DEFAULT ? _loopback : _rewrite, 
            _cache[9] = _regex(_pairs[9])), cachedBrackets = pair;
        }
        function _setSettings(o) {
            var b;
            o = o || {}, b = o.brackets, Object.defineProperty(o, "brackets", {
                set: _reset,
                get: function() {
                    return cachedBrackets;
                },
                enumerable: !0
            }), _settings = o, _reset(b);
        }
        var _regex, _settings, REGLOB = "g", R_MLCOMMS = /\/\*[^*]*\*+(?:[^*\/][^*]*\*+)*\//g, R_STRINGS = /"[^"\\]*(?:\\[\S\s][^"\\]*)*"|'[^'\\]*(?:\\[\S\s][^'\\]*)*'/g, S_QBLOCKS = R_STRINGS.source + "|" + /(?:\breturn\s+|(?:[$\w\)\]]|\+\+|--)\s*(\/)(?![*\/]))/.source + "|" + /\/(?=[^*\/])[^[\/\\]*(?:(?:\[(?:\\.|[^\]\\]*)*\]|\\.)[^[\/\\]*)*?(\/)[gim]*/.source, UNSUPPORTED = RegExp("[\\x00-\\x1F<>a-zA-Z0-9'\",;\\\\]"), NEED_ESCAPE = /(?=[[\]()*+?.^$|])/g, FINDBRACES = {
            "(": RegExp("([()])|" + S_QBLOCKS, REGLOB),
            "[": RegExp("([[\\]])|" + S_QBLOCKS, REGLOB),
            "{": RegExp("([{}])|" + S_QBLOCKS, REGLOB)
        }, DEFAULT = "{ }", _pairs = [ "{", "}", "{", "}", /{[^}]*}/, /\\([{}])/g, /\\({)|{/g, RegExp("\\\\(})|([[({])|(})|" + S_QBLOCKS, REGLOB), DEFAULT, /^\s*{\^?\s*([$\w]+)(?:\s*,\s*(\S+))?\s+in\s+(\S.*)\s*}/, /(^|[^\\]){=[\S\s]*?}/ ], cachedBrackets = UNDEF, _cache = [];
        return _brackets.split = function(str, tmpl, _bp) {
            function unescapeStr(s) {
                tmpl || isexpr ? parts.push(s && s.replace(_bp[5], "$1")) : parts.push(s);
            }
            function skipBraces(s, ch, ix) {
                var match, recch = FINDBRACES[ch];
                for (recch.lastIndex = ix, ix = 1; (match = recch.exec(s)) && (!match[1] || (match[1] === ch ? ++ix : --ix)); ) ;
                return ix ? s.length : recch.lastIndex;
            }
            _bp || (_bp = _cache);
            var match, isexpr, start, pos, parts = [], re = _bp[6];
            for (isexpr = start = re.lastIndex = 0; match = re.exec(str); ) {
                if (pos = match.index, isexpr) {
                    if (match[2]) {
                        re.lastIndex = skipBraces(str, match[2], re.lastIndex);
                        continue;
                    }
                    if (!match[3]) continue;
                }
                match[1] || (unescapeStr(str.slice(start, pos)), start = re.lastIndex, re = _bp[6 + (isexpr ^= 1)], 
                re.lastIndex = start);
            }
            return str && start < str.length && unescapeStr(str.slice(start)), parts;
        }, _brackets.hasExpr = function(str) {
            return _cache[4].test(str);
        }, _brackets.loopKeys = function(expr) {
            var m = expr.match(_cache[9]);
            return m ? {
                key: m[1],
                pos: m[2],
                val: _cache[0] + m[3].trim() + _cache[1]
            } : {
                val: expr.trim()
            };
        }, _brackets.array = function(pair) {
            return pair ? _create(pair) : _cache;
        }, Object.defineProperty(_brackets, "settings", {
            set: _setSettings,
            get: function() {
                return _settings;
            }
        }), _brackets.settings = "undefined" != typeof riot && riot.settings || {}, _brackets.set = _reset, 
        _brackets.R_STRINGS = R_STRINGS, _brackets.R_MLCOMMS = R_MLCOMMS, _brackets.S_QBLOCKS = S_QBLOCKS, 
        _brackets;
    }(), tmpl = function() {
        function _tmpl(str, data) {
            return str ? (_cache[str] || (_cache[str] = _create(str))).call(data, _logErr) : str;
        }
        function _logErr(err, ctx) {
            _tmpl.errorHandler && (err.riotData = {
                tagName: ctx && ctx.root && ctx.root.tagName,
                _riot_id: ctx && ctx._riot_id
            }, _tmpl.errorHandler(err));
        }
        function _create(str) {
            var expr = _getTmpl(str);
            return "try{return " !== expr.slice(0, 11) && (expr = "return " + expr), new Function("E", expr + ";");
        }
        function _getTmpl(str) {
            var expr, qstr = [], parts = brackets.split(str.replace(RE_DQUOTE, '"'), 1);
            if (parts.length > 2 || parts[0]) {
                var i, j, list = [];
                for (i = j = 0; i < parts.length; ++i) expr = parts[i], expr && (expr = 1 & i ? _parseExpr(expr, 1, qstr) : '"' + expr.replace(/\\/g, "\\\\").replace(/\r\n?|\n/g, "\\n").replace(/"/g, '\\"') + '"') && (list[j++] = expr);
                expr = j < 2 ? list[0] : "[" + list.join(",") + '].join("")';
            } else expr = _parseExpr(parts[1], 0, qstr);
            return qstr[0] && (expr = expr.replace(RE_QBMARK, function(_, pos) {
                return qstr[pos].replace(/\r/g, "\\r").replace(/\n/g, "\\n");
            })), expr;
        }
        function _parseExpr(expr, asText, qstr) {
            function skipBraces(ch, re) {
                var mm, lv = 1, ir = RE_BREND[ch];
                for (ir.lastIndex = re.lastIndex; mm = ir.exec(expr); ) if (mm[0] === ch) ++lv; else if (!--lv) break;
                re.lastIndex = lv ? expr.length : ir.lastIndex;
            }
            if (expr = expr.replace(RE_QBLOCK, function(s, div) {
                return s.length > 2 && !div ? CH_IDEXPR + (qstr.push(s) - 1) + "~" : s;
            }).replace(/\s+/g, " ").trim().replace(/\ ?([[\({},?\.:])\ ?/g, "$1")) {
                for (var match, list = [], cnt = 0; expr && (match = expr.match(RE_CSNAME)) && !match.index; ) {
                    var key, jsb, re = /,|([[{(])|$/g;
                    for (expr = RegExp.rightContext, key = match[2] ? qstr[match[2]].slice(1, -1).trim().replace(/\s+/g, " ") : match[1]; jsb = (match = re.exec(expr))[1]; ) skipBraces(jsb, re);
                    jsb = expr.slice(0, match.index), expr = RegExp.rightContext, list[cnt++] = _wrapExpr(jsb, 1, key);
                }
                expr = cnt ? cnt > 1 ? "[" + list.join(",") + '].join(" ").trim()' : list[0] : _wrapExpr(expr, asText);
            }
            return expr;
        }
        function _wrapExpr(expr, asText, key) {
            var tb;
            return expr = expr.replace(JS_VARNAME, function(match, p, mvar, pos, s) {
                return mvar && (pos = tb ? 0 : pos + match.length, "this" !== mvar && "global" !== mvar && "window" !== mvar ? (match = p + '("' + mvar + JS_CONTEXT + mvar, 
                pos && (tb = "." === (s = s[pos]) || "(" === s || "[" === s)) : pos && (tb = !JS_NOPROPS.test(s.slice(pos)))), 
                match;
            }), tb && (expr = "try{return " + expr + "}catch(e){E(e,this)}"), key ? expr = (tb ? "function(){" + expr + "}.call(this)" : "(" + expr + ")") + '?"' + key + '":""' : asText && (expr = "function(v){" + (tb ? expr.replace("return ", "v=") : "v=(" + expr + ")") + ';return v||v===0?v:""}.call(this)'), 
            expr;
        }
        var _cache = {};
        _tmpl.haveRaw = brackets.hasRaw, _tmpl.hasExpr = brackets.hasExpr, _tmpl.loopKeys = brackets.loopKeys, 
        _tmpl.clearCache = function() {
            _cache = {};
        }, _tmpl.errorHandler = null;
        var CH_IDEXPR = String.fromCharCode(8279), RE_CSNAME = /^(?:(-?[_A-Za-z\xA0-\xFF][-\w\xA0-\xFF]*)|\u2057(\d+)~):/, RE_QBLOCK = RegExp(brackets.S_QBLOCKS, "g"), RE_DQUOTE = /\u2057/g, RE_QBMARK = /\u2057(\d+)~/g, RE_BREND = {
            "(": /[()]/g,
            "[": /[[\]]/g,
            "{": /[{}]/g
        }, JS_CONTEXT = '"in this?this:' + ("object" != typeof window ? "global" : "window") + ").", JS_VARNAME = /[,{][\$\w]+(?=:)|(^ *|[^$\w\.{])(?!(?:typeof|true|false|null|undefined|in|instanceof|is(?:Finite|NaN)|void|NaN|new|Date|RegExp|Math)(?![$\w]))([$_A-Za-z][$\w]*)/g, JS_NOPROPS = /^(?=(\.[$\w]+))\1(?:[^.[(]|$)/;
        return _tmpl.version = brackets.version = "v2.4.2", _tmpl;
    }(), mkdom = function _mkdom() {
        function _mkdom(templ, html, checkSvg) {
            var key = html ? templ + ":yield:" + html : templ, cachedItem = templateCache[key];
            if (!cachedItem) {
                var match = templ && templ.match(/^\s*<([-\w]+)/), tagName = match && match[1].toLowerCase(), el = mkEl("div", checkSvg && isSVGTag(tagName));
                templ = replaceYield(templ, html), tblTags.test(tagName) ? el = specialTags(el, templ, tagName) : setInnerHTML(el, templ), 
                cachedItem = el, templateCache[key] = cachedItem;
            }
            return el = cachedItem.cloneNode(!0), el.stub = !0, el;
        }
        function specialTags(el, templ, tagName) {
            var select = "o" === tagName[0], parent = select ? "select>" : "table>";
            if (el.innerHTML = "<" + parent + templ.trim() + "</" + parent, parent = el.firstChild, 
            select) parent.selectedIndex = -1; else {
                var tname = rootEls[tagName];
                tname && 1 === parent.childElementCount && (parent = $(tname, parent));
            }
            return parent;
        }
        function replaceYield(templ, html) {
            if (!reHasYield.test(templ)) return templ;
            var src = {};
            return html = html && html.replace(reYieldSrc, function(_, ref, text) {
                return src[ref] = src[ref] || text, "";
            }).trim(), templ.replace(reYieldDest, function(_, ref, def) {
                return src[ref] || def || "";
            }).replace(reYieldAll, function(_, def) {
                return html || def || "";
            });
        }
        var reHasYield = /<yield\b/i, reYieldAll = /<yield\s*(?:\/>|>([\S\s]*?)<\/yield\s*>|>)/gi, reYieldSrc = /<yield\s+to=['"]([^'">]*)['"]\s*>([\S\s]*?)<\/yield\s*>/gi, reYieldDest = /<yield\s+from=['"]?([-\w]+)['"]?\s*(?:\/>|>([\S\s]*?)<\/yield\s*>)/gi, rootEls = {
            tr: "tbody",
            th: "tr",
            td: "tr",
            col: "colgroup"
        }, tblTags = IE_VERSION && IE_VERSION < 10 ? SPECIAL_TAGS_REGEX : /^(?:t(?:body|head|foot|[rhd])|caption|col(?:group)?)$/, templateCache = {};
        return _mkdom;
    }(), styleManager = function(_riot) {
        if (!window) return {
            add: function() {},
            inject: function() {}
        };
        var styleNode = function() {
            var newNode = mkEl("style");
            setAttr(newNode, "type", "text/css");
            var userNode = $("style[type=riot]");
            return userNode ? (userNode.id && (newNode.id = userNode.id), userNode.parentNode.replaceChild(newNode, userNode)) : document.getElementsByTagName("head")[0].appendChild(newNode), 
            newNode;
        }(), cssTextProp = styleNode.styleSheet, stylesToInject = "";
        return Object.defineProperty(_riot, "styleNode", {
            value: styleNode,
            writable: !0
        }), {
            add: function(css) {
                stylesToInject += css;
            },
            inject: function() {
                stylesToInject && (cssTextProp ? cssTextProp.cssText += stylesToInject : styleNode.innerHTML += stylesToInject, 
                stylesToInject = "");
            }
        };
    }(riot), rAF = function(w) {
        var raf = w.requestAnimationFrame || w.mozRequestAnimationFrame || w.webkitRequestAnimationFrame;
        if (!raf || /iP(ad|hone|od).*OS 6/.test(w.navigator.userAgent)) {
            var lastTime = 0;
            raf = function(cb) {
                var nowtime = Date.now(), timeout = Math.max(16 - (nowtime - lastTime), 0);
                setTimeout(function() {
                    cb(lastTime = nowtime + timeout);
                }, timeout);
            };
        }
        return raf;
    }(window || {});
    riot.util = {
        brackets: brackets,
        tmpl: tmpl
    }, riot.mixin = function() {
        var mixins = {}, globals = mixins[GLOBAL_MIXIN] = {}, _id = 0;
        return function(name, mixin, g) {
            if (isObject(name)) return void riot.mixin("__unnamed_" + _id++, name, !0);
            var store = g ? globals : mixins;
            if (!mixin) {
                if (typeof store[name] === T_UNDEF) throw new Error("Unregistered mixin: " + name);
                return store[name];
            }
            isFunction(mixin) ? (extend(mixin.prototype, store[name] || {}), store[name] = mixin) : store[name] = extend(store[name] || {}, mixin);
        };
    }(), riot.tag = function(name, html, css, attrs, fn) {
        return isFunction(attrs) && (fn = attrs, /^[\w\-]+\s?=/.test(css) ? (attrs = css, 
        css = "") : attrs = ""), css && (isFunction(css) ? fn = css : styleManager.add(css)), 
        name = name.toLowerCase(), __tagImpl[name] = {
            name: name,
            tmpl: html,
            attrs: attrs,
            fn: fn
        }, name;
    }, riot.tag2 = function(name, html, css, attrs, fn) {
        return css && styleManager.add(css), __tagImpl[name] = {
            name: name,
            tmpl: html,
            attrs: attrs,
            fn: fn
        }, name;
    }, riot.mount = function(selector, tagName, opts) {
        function addRiotTags(arr) {
            var list = "";
            return each(arr, function(e) {
                /[^-\w]/.test(e) || (e = e.trim().toLowerCase(), list += ",[" + RIOT_TAG_IS + '="' + e + '"],[' + RIOT_TAG + '="' + e + '"]');
            }), list;
        }
        function selectAllTags() {
            var keys = Object.keys(__tagImpl);
            return keys + addRiotTags(keys);
        }
        function pushTags(root) {
            if (root.tagName) {
                var riotTag = getAttr(root, RIOT_TAG_IS) || getAttr(root, RIOT_TAG);
                tagName && riotTag !== tagName && (riotTag = tagName, setAttr(root, RIOT_TAG_IS, tagName), 
                setAttr(root, RIOT_TAG, tagName));
                var tag = mountTo(root, riotTag || root.tagName.toLowerCase(), opts);
                tag && tags.push(tag);
            } else root.length && each(root, pushTags);
        }
        var els, allTags, tags = [];
        if (styleManager.inject(), isObject(tagName) && (opts = tagName, tagName = 0), typeof selector === T_STRING ? ("*" === selector ? selector = allTags = selectAllTags() : selector += addRiotTags(selector.split(/, */)), 
        els = selector ? $$(selector) : []) : els = selector, "*" === tagName) {
            if (tagName = allTags || selectAllTags(), els.tagName) els = $$(tagName, els); else {
                var nodeList = [];
                each(els, function(_el) {
                    nodeList.push($$(tagName, _el));
                }), els = nodeList;
            }
            tagName = 0;
        }
        return pushTags(els), tags;
    }, riot.update = function() {
        return each(__virtualDom, function(tag) {
            tag.update();
        });
    }, riot.vdom = __virtualDom, riot.Tag = Tag, typeof exports === T_OBJECT ? module.exports = riot : typeof define === T_FUNCTION && typeof define.amd !== T_UNDEF ? define(function() {
        return riot;
    }) : window.riot = riot;
}("undefined" != typeof window ? window : void 0);
!function(global) {
    "use strict";
    function bigFactory() {
        function Big(n) {
            var x = this;
            return x instanceof Big ? (n instanceof Big ? (x.s = n.s, x.e = n.e, x.c = n.c.slice()) : parse(x, n), 
            void (x.constructor = Big)) : void 0 === n ? bigFactory() : new Big(n);
        }
        return Big.prototype = P, Big.DP = DP, Big.RM = RM, Big.E_NEG = E_NEG, Big.E_POS = E_POS, 
        Big;
    }
    function format(x, dp, toE) {
        var Big = x.constructor, i = dp - (x = new Big(x)).e, c = x.c;
        for (c.length > ++dp && rnd(x, i, Big.RM), c[0] ? toE ? i = dp : (c = x.c, i = x.e + i + 1) : ++i; c.length < i; c.push(0)) ;
        return i = x.e, 1 === toE || toE && (dp <= i || i <= Big.E_NEG) ? (x.s < 0 && c[0] ? "-" : "") + (c.length > 1 ? c[0] + "." + c.join("").slice(1) : c[0]) + (i < 0 ? "e" : "e+") + i : x.toString();
    }
    function parse(x, n) {
        var e, i, nL;
        for (0 === n && 1 / n < 0 ? n = "-0" : isValid.test(n += "") || throwErr(NaN), x.s = "-" == n.charAt(0) ? (n = n.slice(1), 
        -1) : 1, (e = n.indexOf(".")) > -1 && (n = n.replace(".", "")), (i = n.search(/e/i)) > 0 ? (e < 0 && (e = i), 
        e += +n.slice(i + 1), n = n.substring(0, i)) : e < 0 && (e = n.length), i = 0; "0" == n.charAt(i); i++) ;
        if (i == (nL = n.length)) x.c = [ x.e = 0 ]; else {
            for (;"0" == n.charAt(--nL); ) ;
            for (x.e = e - i - 1, x.c = [], e = 0; i <= nL; x.c[e++] = +n.charAt(i++)) ;
        }
        return x;
    }
    function rnd(x, dp, rm, more) {
        var u, xc = x.c, i = x.e + dp + 1;
        if (1 === rm ? more = xc[i] >= 5 : 2 === rm ? more = xc[i] > 5 || 5 == xc[i] && (more || i < 0 || xc[i + 1] !== u || 1 & xc[i - 1]) : 3 === rm ? more = more || xc[i] !== u || i < 0 : (more = !1, 
        0 !== rm && throwErr("!Big.RM!")), i < 1 || !xc[0]) more ? (x.e = -dp, x.c = [ 1 ]) : x.c = [ x.e = 0 ]; else {
            if (xc.length = i--, more) for (;++xc[i] > 9; ) xc[i] = 0, i-- || (++x.e, xc.unshift(1));
            for (i = xc.length; !xc[--i]; xc.pop()) ;
        }
        return x;
    }
    function throwErr(message) {
        var err = new Error(message);
        throw err.name = "BigError", err;
    }
    var Big, DP = 20, RM = 1, MAX_DP = 1e6, MAX_POWER = 1e6, E_NEG = -7, E_POS = 21, P = {}, isValid = /^-?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;
    P.abs = function() {
        var x = new this.constructor(this);
        return x.s = 1, x;
    }, P.cmp = function(y) {
        var xNeg, x = this, xc = x.c, yc = (y = new x.constructor(y)).c, i = x.s, j = y.s, k = x.e, l = y.e;
        if (!xc[0] || !yc[0]) return xc[0] ? i : yc[0] ? -j : 0;
        if (i != j) return i;
        if (xNeg = i < 0, k != l) return k > l ^ xNeg ? 1 : -1;
        for (i = -1, j = (k = xc.length) < (l = yc.length) ? k : l; ++i < j; ) if (xc[i] != yc[i]) return xc[i] > yc[i] ^ xNeg ? 1 : -1;
        return k == l ? 0 : k > l ^ xNeg ? 1 : -1;
    }, P.div = function(y) {
        var x = this, Big = x.constructor, dvd = x.c, dvs = (y = new Big(y)).c, s = x.s == y.s ? 1 : -1, dp = Big.DP;
        if ((dp !== ~~dp || dp < 0 || dp > MAX_DP) && throwErr("!Big.DP!"), !dvd[0] || !dvs[0]) return dvd[0] == dvs[0] && throwErr(NaN), 
        dvs[0] || throwErr(s / 0), new Big(0 * s);
        var dvsL, dvsT, next, cmp, remI, u, dvsZ = dvs.slice(), dvdI = dvsL = dvs.length, dvdL = dvd.length, rem = dvd.slice(0, dvsL), remL = rem.length, q = y, qc = q.c = [], qi = 0, digits = dp + (q.e = x.e - y.e) + 1;
        for (q.s = s, s = digits < 0 ? 0 : digits, dvsZ.unshift(0); remL++ < dvsL; rem.push(0)) ;
        do {
            for (next = 0; next < 10; next++) {
                if (dvsL != (remL = rem.length)) cmp = dvsL > remL ? 1 : -1; else for (remI = -1, 
                cmp = 0; ++remI < dvsL; ) if (dvs[remI] != rem[remI]) {
                    cmp = dvs[remI] > rem[remI] ? 1 : -1;
                    break;
                }
                if (!(cmp < 0)) break;
                for (dvsT = remL == dvsL ? dvs : dvsZ; remL; ) {
                    if (rem[--remL] < dvsT[remL]) {
                        for (remI = remL; remI && !rem[--remI]; rem[remI] = 9) ;
                        --rem[remI], rem[remL] += 10;
                    }
                    rem[remL] -= dvsT[remL];
                }
                for (;!rem[0]; rem.shift()) ;
            }
            qc[qi++] = cmp ? next : ++next, rem[0] && cmp ? rem[remL] = dvd[dvdI] || 0 : rem = [ dvd[dvdI] ];
        } while ((dvdI++ < dvdL || rem[0] !== u) && s--);
        return qc[0] || 1 == qi || (qc.shift(), q.e--), qi > digits && rnd(q, dp, Big.RM, rem[0] !== u), 
        q;
    }, P.eq = function(y) {
        return !this.cmp(y);
    }, P.gt = function(y) {
        return this.cmp(y) > 0;
    }, P.gte = function(y) {
        return this.cmp(y) > -1;
    }, P.lt = function(y) {
        return this.cmp(y) < 0;
    }, P.lte = function(y) {
        return this.cmp(y) < 1;
    }, P.sub = P.minus = function(y) {
        var i, j, t, xLTy, x = this, Big = x.constructor, a = x.s, b = (y = new Big(y)).s;
        if (a != b) return y.s = -b, x.plus(y);
        var xc = x.c.slice(), xe = x.e, yc = y.c, ye = y.e;
        if (!xc[0] || !yc[0]) return yc[0] ? (y.s = -b, y) : new Big(xc[0] ? x : 0);
        if (a = xe - ye) {
            for ((xLTy = a < 0) ? (a = -a, t = xc) : (ye = xe, t = yc), t.reverse(), b = a; b--; t.push(0)) ;
            t.reverse();
        } else for (j = ((xLTy = xc.length < yc.length) ? xc : yc).length, a = b = 0; b < j; b++) if (xc[b] != yc[b]) {
            xLTy = xc[b] < yc[b];
            break;
        }
        if (xLTy && (t = xc, xc = yc, yc = t, y.s = -y.s), (b = (j = yc.length) - (i = xc.length)) > 0) for (;b--; xc[i++] = 0) ;
        for (b = i; j > a; ) {
            if (xc[--j] < yc[j]) {
                for (i = j; i && !xc[--i]; xc[i] = 9) ;
                --xc[i], xc[j] += 10;
            }
            xc[j] -= yc[j];
        }
        for (;0 === xc[--b]; xc.pop()) ;
        for (;0 === xc[0]; ) xc.shift(), --ye;
        return xc[0] || (y.s = 1, xc = [ ye = 0 ]), y.c = xc, y.e = ye, y;
    }, P.mod = function(y) {
        var yGTx, x = this, Big = x.constructor, a = x.s, b = (y = new Big(y)).s;
        return y.c[0] || throwErr(NaN), x.s = y.s = 1, yGTx = 1 == y.cmp(x), x.s = a, y.s = b, 
        yGTx ? new Big(x) : (a = Big.DP, b = Big.RM, Big.DP = Big.RM = 0, x = x.div(y), 
        Big.DP = a, Big.RM = b, this.minus(x.times(y)));
    }, P.add = P.plus = function(y) {
        var t, x = this, Big = x.constructor, a = x.s, b = (y = new Big(y)).s;
        if (a != b) return y.s = -b, x.minus(y);
        var xe = x.e, xc = x.c, ye = y.e, yc = y.c;
        if (!xc[0] || !yc[0]) return yc[0] ? y : new Big(xc[0] ? x : 0 * a);
        if (xc = xc.slice(), a = xe - ye) {
            for (a > 0 ? (ye = xe, t = yc) : (a = -a, t = xc), t.reverse(); a--; t.push(0)) ;
            t.reverse();
        }
        for (xc.length - yc.length < 0 && (t = yc, yc = xc, xc = t), a = yc.length, b = 0; a; ) b = (xc[--a] = xc[a] + yc[a] + b) / 10 | 0, 
        xc[a] %= 10;
        for (b && (xc.unshift(b), ++ye), a = xc.length; 0 === xc[--a]; xc.pop()) ;
        return y.c = xc, y.e = ye, y;
    }, P.pow = function(n) {
        var x = this, one = new x.constructor(1), y = one, isNeg = n < 0;
        for ((n !== ~~n || n < -MAX_POWER || n > MAX_POWER) && throwErr("!pow!"), n = isNeg ? -n : n; 1 & n && (y = y.times(x)), 
        n >>= 1, n; ) x = x.times(x);
        return isNeg ? one.div(y) : y;
    }, P.round = function(dp, rm) {
        var x = this, Big = x.constructor;
        return null == dp ? dp = 0 : (dp !== ~~dp || dp < 0 || dp > MAX_DP) && throwErr("!round!"), 
        rnd(x = new Big(x), dp, null == rm ? Big.RM : rm), x;
    }, P.sqrt = function() {
        var estimate, r, approx, x = this, Big = x.constructor, xc = x.c, i = x.s, e = x.e, half = new Big("0.5");
        if (!xc[0]) return new Big(x);
        i < 0 && throwErr(NaN), i = Math.sqrt(x.toString()), 0 === i || i === 1 / 0 ? (estimate = xc.join(""), 
        estimate.length + e & 1 || (estimate += "0"), r = new Big(Math.sqrt(estimate).toString()), 
        r.e = ((e + 1) / 2 | 0) - (e < 0 || 1 & e)) : r = new Big(i.toString()), i = r.e + (Big.DP += 4);
        do approx = r, r = half.times(approx.plus(x.div(approx))); while (approx.c.slice(0, i).join("") !== r.c.slice(0, i).join(""));
        return rnd(r, Big.DP -= 4, Big.RM), r;
    }, P.mul = P.times = function(y) {
        var c, x = this, Big = x.constructor, xc = x.c, yc = (y = new Big(y)).c, a = xc.length, b = yc.length, i = x.e, j = y.e;
        if (y.s = x.s == y.s ? 1 : -1, !xc[0] || !yc[0]) return new Big(0 * y.s);
        for (y.e = i + j, a < b && (c = xc, xc = yc, yc = c, j = a, a = b, b = j), c = new Array(j = a + b); j--; c[j] = 0) ;
        for (i = b; i--; ) {
            for (b = 0, j = a + i; j > i; ) b = c[j] + yc[i] * xc[j - i - 1] + b, c[j--] = b % 10, 
            b = b / 10 | 0;
            c[j] = (c[j] + b) % 10;
        }
        for (b && ++y.e, c[0] || c.shift(), i = c.length; !c[--i]; c.pop()) ;
        return y.c = c, y;
    }, P.toString = P.valueOf = P.toJSON = function() {
        var x = this, Big = x.constructor, e = x.e, str = x.c.join(""), strL = str.length;
        if (e <= Big.E_NEG || e >= Big.E_POS) str = str.charAt(0) + (strL > 1 ? "." + str.slice(1) : "") + (e < 0 ? "e" : "e+") + e; else if (e < 0) {
            for (;++e; str = "0" + str) ;
            str = "0." + str;
        } else if (e > 0) if (++e > strL) for (e -= strL; e--; str += "0") ; else e < strL && (str = str.slice(0, e) + "." + str.slice(e)); else strL > 1 && (str = str.charAt(0) + "." + str.slice(1));
        return x.s < 0 && x.c[0] ? "-" + str : str;
    }, P.toExponential = function(dp) {
        return null == dp ? dp = this.c.length - 1 : (dp !== ~~dp || dp < 0 || dp > MAX_DP) && throwErr("!toExp!"), 
        format(this, dp, 1);
    }, P.toFixed = function(dp) {
        var str, x = this, Big = x.constructor, neg = Big.E_NEG, pos = Big.E_POS;
        return Big.E_NEG = -(Big.E_POS = 1 / 0), null == dp ? str = x.toString() : dp === ~~dp && dp >= 0 && dp <= MAX_DP && (str = format(x, x.e + dp), 
        x.s < 0 && x.c[0] && str.indexOf("-") < 0 && (str = "-" + str)), Big.E_NEG = neg, 
        Big.E_POS = pos, str || throwErr("!toFix!"), str;
    }, P.toPrecision = function(sd) {
        return null == sd ? this.toString() : ((sd !== ~~sd || sd < 1 || sd > MAX_DP) && throwErr("!toPre!"), 
        format(this, sd - 1, 2));
    }, Big = bigFactory(), global.Big = Big;
}(this);
riot.mixin("cooldown", {
    init: function() {
        this.on("mount", function() {
            this._cooldowns = [];
        }), this.isCoolingDown = function(id, time) {
            time = time || 1100;
            var cd = this._cooldowns[id];
            return !!(cd && window.performance.now() - cd < time) || (this._cooldowns[id] = window.performance.now(), 
            !1);
        }.bind(this);
    }
});
riot.mixin("i18n", {
    init: function() {
        this.on("mount unmount", function(evt) {
            "mount" === evt ? riotctrl.on("update-i18n-retro", this.onUpdateI18n, this) : "unmount" === evt && riotctrl.off("update-i18n-retro", this.onUpdateI18n, this);
        }), this.on("update", function() {
            this.onUpdateI18n();
        });
    },
    onUpdateI18n: function() {
        for (var labels = this.root.querySelectorAll("[data-i18n]"), i = 0; i < labels.length; i++) {
            var e = labels[i], k = e.dataset.i18n;
            e.innerText = iaw.i18n.getLocalizedString(k);
        }
    }
});
riot.mixin("scroll-end", {
    init: function() {
        this.scrollPane = null, this.scrollContainer = null, this.on("mount unmount", function(evt) {
            "mount" === evt ? (this.scrollPane = document.querySelector(".scroll-pane"), this.scrollContainer = document.querySelector(".scroll-container"), 
            this.scrollContainer && this.scrollPane && this.scrollContainer.addEventListener("scroll", this.onScroll)) : "unmount" === evt && this.scrollContainer && this.scrollPane && this.scrollContainer.removeEventListener("scroll", this.onScroll);
        });
    },
    onScroll: function(evt) {
        this.scrollPane.offsetHeight === this.scrollContainer.offsetHeight + this.scrollContainer.scrollTop && this.trigger("scroll-end");
    }
});
riot.mixin("spcmixin", {
    init: function() {
        var update = function() {
            var comps = this.root.querySelectorAll('[class*="spc-js-"');
            comps.length > 0 && window.componentHandler.upgradeElements(comps);
        }.bind(this);
        riotctrl.once("update-spcmixin-retro", function() {
            this.on("mount update updated", update), update();
        }.bind(this));
    }
});
riot.mixin("tooltip", {
    init: function() {
        this.on("mount", function(evt) {
            riotctrl.trigger("scan-tooltips");
        }), this.on("updated", function() {
            riotctrl.trigger("scan-tooltips");
        });
    }
});
riot.mixin("unitConversion", {
    convert: function(value, opts) {
        var Big = window.Big;
        opts = opts || {};
        var startingValue = new Big(value), normalizedValue = new Big(0), stringValue = "", stringArray = [], resolution = opts.resolution || 72, pointsPerInch = opts.pointsPerInch || 72, picasPerInch = opts.picasPerInch || 72, trim = opts.trim !== !1, precision = opts.precision || 5;
        resolution = new Big(resolution), pointsPerInch = new Big(pointsPerInch), picasPerInch = new Big(picasPerInch);
        var conversionTable = {
            m: {
                factor: new Big(1)
            },
            cm: {
                factor: new Big(.01)
            },
            "in": {
                factor: new Big(.0254)
            },
            mm: {
                factor: new Big(.001)
            },
            px: {
                factor: new Big(.0254).div(resolution)
            },
            pt: {
                factor: new Big(.0254).div(pointsPerInch)
            },
            pc: {
                factor: new Big(.0254).div(picasPerInch)
            },
            ha: {
                factor: new Big(.0254).div(101.6)
            },
            c: {
                factor: new Big(.004511278195484999)
            },
            ag: {
                factor: new Big(.0254).div(14)
            },
            cu: {
                factor: new Big(.48390048)
            },
            ft: {
                factor: new Big(.3048)
            }
        };
        return {
            from: function(value) {
                return normalizedValue = startingValue.mul(conversionTable[value].factor), this;
            },
            to: function(value) {
                return stringValue = normalizedValue.div(conversionTable[value].factor).toFixed(10), 
                trim && (stringArray = stringValue.split("."), stringArray[1] && (stringArray[1] = stringArray[1].substring(0, precision)), 
                stringValue = stringArray.join(".")), Number(stringValue);
            }
        };
    }
});
!function(global, factory) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = factory() : "function" == typeof define && define.amd ? define(factory) : global.exprEval = factory();
}(this, function() {
    "use strict";
    function Instruction(type, value) {
        this.type = type, this.value = void 0 !== value && null !== value ? value : 0;
    }
    function unaryInstruction(value) {
        return new Instruction(IOP1, value);
    }
    function binaryInstruction(value) {
        return new Instruction(IOP2, value);
    }
    function ternaryInstruction(value) {
        return new Instruction(IOP3, value);
    }
    function simplify(tokens, unaryOps, binaryOps, ternaryOps, values) {
        for (var n1, n2, n3, f, nstack = [], newexpression = [], i = 0; i < tokens.length; i++) {
            var item = tokens[i], type = item.type;
            if (type === INUMBER) nstack.push(item); else if (type === IVAR && values.hasOwnProperty(item.value)) item = new Instruction(INUMBER, values[item.value]), 
            nstack.push(item); else if (type === IOP2 && nstack.length > 1) n2 = nstack.pop(), 
            n1 = nstack.pop(), f = binaryOps[item.value], item = new Instruction(INUMBER, f(n1.value, n2.value)), 
            nstack.push(item); else if (type === IOP3 && nstack.length > 2) n3 = nstack.pop(), 
            n2 = nstack.pop(), n1 = nstack.pop(), "?" === item.value ? nstack.push(n1.value ? n2.value : n3.value) : (f = ternaryOps[item.value], 
            item = new Instruction(INUMBER, f(n1.value, n2.value, n3.value)), nstack.push(item)); else if (type === IOP1 && nstack.length > 0) n1 = nstack.pop(), 
            f = unaryOps[item.value], item = new Instruction(INUMBER, f(n1.value)), nstack.push(item); else if (type === IEXPR) {
                for (;nstack.length > 0; ) newexpression.push(nstack.shift());
                newexpression.push(new Instruction(IEXPR, simplify(item.value, unaryOps, binaryOps, ternaryOps, values)));
            } else if (type === IMEMBER && nstack.length > 0) n1 = nstack.pop(), nstack.push(new Instruction(INUMBER, n1.value[item.value])); else {
                for (;nstack.length > 0; ) newexpression.push(nstack.shift());
                newexpression.push(item);
            }
        }
        for (;nstack.length > 0; ) newexpression.push(nstack.shift());
        return newexpression;
    }
    function substitute(tokens, variable, expr) {
        for (var newexpression = [], i = 0; i < tokens.length; i++) {
            var item = tokens[i], type = item.type;
            if (type === IVAR && item.value === variable) for (var j = 0; j < expr.tokens.length; j++) {
                var replitem, expritem = expr.tokens[j];
                replitem = expritem.type === IOP1 ? unaryInstruction(expritem.value) : expritem.type === IOP2 ? binaryInstruction(expritem.value) : expritem.type === IOP3 ? ternaryInstruction(expritem.value) : new Instruction(expritem.type, expritem.value), 
                newexpression.push(replitem);
            } else type === IEXPR ? newexpression.push(new Instruction(IEXPR, substitute(item.value, variable, expr))) : newexpression.push(item);
        }
        return newexpression;
    }
    function evaluate(tokens, expr, values) {
        for (var n1, n2, n3, f, nstack = [], i = 0; i < tokens.length; i++) {
            var item = tokens[i], type = item.type;
            if (type === INUMBER) nstack.push(item.value); else if (type === IOP2) n2 = nstack.pop(), 
            n1 = nstack.pop(), f = expr.binaryOps[item.value], nstack.push(f(n1, n2)); else if (type === IOP3) n3 = nstack.pop(), 
            n2 = nstack.pop(), n1 = nstack.pop(), "?" === item.value ? nstack.push(evaluate(n1 ? n2 : n3, expr, values)) : (f = expr.ternaryOps[item.value], 
            nstack.push(f(n1, n2, n3))); else if (type === IVAR) if (item.value in expr.functions) nstack.push(expr.functions[item.value]); else {
                var v = values[item.value];
                if (void 0 === v) throw new Error("undefined variable: " + item.value);
                nstack.push(v);
            } else if (type === IOP1) n1 = nstack.pop(), f = expr.unaryOps[item.value], nstack.push(f(n1)); else if (type === IFUNCALL) {
                for (var argCount = item.value, args = []; argCount-- > 0; ) args.unshift(nstack.pop());
                if (f = nstack.pop(), !f.apply || !f.call) throw new Error(f + " is not a function");
                nstack.push(f.apply(void 0, args));
            } else if (type === IEXPR) nstack.push(item.value); else {
                if (type !== IMEMBER) throw new Error("invalid Expression");
                n1 = nstack.pop(), nstack.push(n1[item.value]);
            }
        }
        if (nstack.length > 1) throw new Error("invalid Expression (parity)");
        return nstack[0];
    }
    function expressionToString(tokens, toJS) {
        for (var n1, n2, n3, f, nstack = [], i = 0; i < tokens.length; i++) {
            var item = tokens[i], type = item.type;
            if (type === INUMBER) "number" == typeof item.value && item.value < 0 ? nstack.push("(" + item.value + ")") : nstack.push(escapeValue(item.value)); else if (type === IOP2) n2 = nstack.pop(), 
            n1 = nstack.pop(), f = item.value, toJS ? "^" === f ? nstack.push("Math.pow(" + n1 + ", " + n2 + ")") : "and" === f ? nstack.push("(!!" + n1 + " && !!" + n2 + ")") : "or" === f ? nstack.push("(!!" + n1 + " || !!" + n2 + ")") : "||" === f ? nstack.push("(String(" + n1 + ") + String(" + n2 + "))") : "==" === f ? nstack.push("(" + n1 + " === " + n2 + ")") : "!=" === f ? nstack.push("(" + n1 + " !== " + n2 + ")") : nstack.push("(" + n1 + " " + f + " " + n2 + ")") : nstack.push("(" + n1 + " " + f + " " + n2 + ")"); else if (type === IOP3) {
                if (n3 = nstack.pop(), n2 = nstack.pop(), n1 = nstack.pop(), f = item.value, "?" !== f) throw new Error("invalid Expression");
                nstack.push("(" + n1 + " ? " + n2 + " : " + n3 + ")");
            } else if (type === IVAR) nstack.push(item.value); else if (type === IOP1) n1 = nstack.pop(), 
            f = item.value, "-" === f || "+" === f ? nstack.push("(" + f + n1 + ")") : toJS ? "not" === f ? nstack.push("(!" + n1 + ")") : "!" === f ? nstack.push("fac(" + n1 + ")") : nstack.push(f + "(" + n1 + ")") : "!" === f ? nstack.push("(" + n1 + "!)") : nstack.push("(" + f + " " + n1 + ")"); else if (type === IFUNCALL) {
                for (var argCount = item.value, args = []; argCount-- > 0; ) args.unshift(nstack.pop());
                f = nstack.pop(), nstack.push(f + "(" + args.join(", ") + ")");
            } else if (type === IMEMBER) n1 = nstack.pop(), nstack.push(n1 + "." + item.value); else {
                if (type !== IEXPR) throw new Error("invalid Expression");
                nstack.push("(" + expressionToString(item.value, toJS) + ")");
            }
        }
        if (nstack.length > 1) throw new Error("invalid Expression (parity)");
        return String(nstack[0]);
    }
    function escapeValue(v) {
        return "string" == typeof v ? JSON.stringify(v).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029") : v;
    }
    function contains(array, obj) {
        for (var i = 0; i < array.length; i++) if (array[i] === obj) return !0;
        return !1;
    }
    function getSymbols(tokens, symbols, options) {
        options = options || {};
        for (var withMembers = !!options.withMembers, prevVar = null, i = 0; i < tokens.length; i++) {
            var item = tokens[i];
            item.type !== IVAR || contains(symbols, item.value) ? item.type === IMEMBER && withMembers && null !== prevVar ? prevVar += "." + item.value : item.type === IEXPR ? getSymbols(item.value, symbols, options) : null !== prevVar && (contains(symbols, prevVar) || symbols.push(prevVar), 
            prevVar = null) : withMembers ? null !== prevVar ? (contains(symbols, prevVar) || symbols.push(prevVar), 
            prevVar = item.value) : prevVar = item.value : symbols.push(item.value);
        }
        null === prevVar || contains(symbols, prevVar) || symbols.push(prevVar);
    }
    function Expression(tokens, parser) {
        this.tokens = tokens, this.parser = parser, this.unaryOps = parser.unaryOps, this.binaryOps = parser.binaryOps, 
        this.ternaryOps = parser.ternaryOps, this.functions = parser.functions;
    }
    function Token(type, value, index) {
        this.type = type, this.value = value, this.index = index;
    }
    function TokenStream(parser, expression) {
        this.pos = 0, this.current = null, this.unaryOps = parser.unaryOps, this.binaryOps = parser.binaryOps, 
        this.ternaryOps = parser.ternaryOps, this.consts = parser.consts, this.expression = expression, 
        this.savedPosition = 0, this.savedCurrent = null, this.options = parser.options;
    }
    function getOptionName(op) {
        return optionNameMap.hasOwnProperty(op) ? optionNameMap[op] : op;
    }
    function ParserState(parser, tokenStream, options) {
        this.parser = parser, this.tokens = tokenStream, this.current = null, this.nextToken = null, 
        this.next(), this.savedCurrent = null, this.savedNextToken = null, this.allowMemberAccess = options.allowMemberAccess !== !1;
    }
    function add(a, b) {
        return Number(a) + Number(b);
    }
    function sub(a, b) {
        return a - b;
    }
    function mul(a, b) {
        return a * b;
    }
    function div(a, b) {
        return a / b;
    }
    function mod(a, b) {
        return a % b;
    }
    function concat(a, b) {
        return "" + a + b;
    }
    function equal(a, b) {
        return a === b;
    }
    function notEqual(a, b) {
        return a !== b;
    }
    function greaterThan(a, b) {
        return a > b;
    }
    function lessThan(a, b) {
        return a < b;
    }
    function greaterThanEqual(a, b) {
        return a >= b;
    }
    function lessThanEqual(a, b) {
        return a <= b;
    }
    function andOperator(a, b) {
        return Boolean(a && b);
    }
    function orOperator(a, b) {
        return Boolean(a || b);
    }
    function inOperator(a, b) {
        return contains(b, a);
    }
    function sinh(a) {
        return (Math.exp(a) - Math.exp(-a)) / 2;
    }
    function cosh(a) {
        return (Math.exp(a) + Math.exp(-a)) / 2;
    }
    function tanh(a) {
        return a === 1 / 0 ? 1 : a === -(1 / 0) ? -1 : (Math.exp(a) - Math.exp(-a)) / (Math.exp(a) + Math.exp(-a));
    }
    function asinh(a) {
        return a === -(1 / 0) ? a : Math.log(a + Math.sqrt(a * a + 1));
    }
    function acosh(a) {
        return Math.log(a + Math.sqrt(a * a - 1));
    }
    function atanh(a) {
        return Math.log((1 + a) / (1 - a)) / 2;
    }
    function log10(a) {
        return Math.log(a) * Math.LOG10E;
    }
    function neg(a) {
        return -a;
    }
    function not(a) {
        return !a;
    }
    function trunc(a) {
        return a < 0 ? Math.ceil(a) : Math.floor(a);
    }
    function random(a) {
        return Math.random() * (a || 1);
    }
    function factorial(a) {
        return gamma(a + 1);
    }
    function isInteger(value) {
        return isFinite(value) && value === Math.round(value);
    }
    function gamma(n) {
        var t, x;
        if (isInteger(n)) {
            if (n <= 0) return isFinite(n) ? 1 / 0 : NaN;
            if (n > 171) return 1 / 0;
            for (var value = n - 2, res = n - 1; value > 1; ) res *= value, value--;
            return 0 === res && (res = 1), res;
        }
        if (n < .5) return Math.PI / (Math.sin(Math.PI * n) * gamma(1 - n));
        if (n >= 171.35) return 1 / 0;
        if (n > 85) {
            var twoN = n * n, threeN = twoN * n, fourN = threeN * n, fiveN = fourN * n;
            return Math.sqrt(2 * Math.PI / n) * Math.pow(n / Math.E, n) * (1 + 1 / (12 * n) + 1 / (288 * twoN) - 139 / (51840 * threeN) - 571 / (2488320 * fourN) + 163879 / (209018880 * fiveN) + 5246819 / (75246796800 * fiveN * n));
        }
        --n, x = GAMMA_P[0];
        for (var i = 1; i < GAMMA_P.length; ++i) x += GAMMA_P[i] / (n + i);
        return t = n + GAMMA_G + .5, Math.sqrt(2 * Math.PI) * Math.pow(t, n + .5) * Math.exp(-t) * x;
    }
    function stringLength(s) {
        return String(s).length;
    }
    function hypot() {
        for (var sum = 0, larg = 0, i = 0; i < arguments.length; i++) {
            var div, arg = Math.abs(arguments[i]);
            larg < arg ? (div = larg / arg, sum = sum * div * div + 1, larg = arg) : arg > 0 ? (div = arg / larg, 
            sum += div * div) : sum += arg;
        }
        return larg === 1 / 0 ? 1 / 0 : larg * Math.sqrt(sum);
    }
    function condition(cond, yep, nope) {
        return cond ? yep : nope;
    }
    function roundTo(value, exp) {
        return "undefined" == typeof exp || 0 === +exp ? Math.round(value) : (value = +value, 
        exp = - +exp, isNaN(value) || "number" != typeof exp || exp % 1 !== 0 ? NaN : (value = value.toString().split("e"), 
        value = Math.round(+(value[0] + "e" + (value[1] ? +value[1] - exp : -exp))), value = value.toString().split("e"), 
        +(value[0] + "e" + (value[1] ? +value[1] + exp : exp))));
    }
    function Parser(options) {
        this.options = options || {}, this.unaryOps = {
            sin: Math.sin,
            cos: Math.cos,
            tan: Math.tan,
            asin: Math.asin,
            acos: Math.acos,
            atan: Math.atan,
            sinh: Math.sinh || sinh,
            cosh: Math.cosh || cosh,
            tanh: Math.tanh || tanh,
            asinh: Math.asinh || asinh,
            acosh: Math.acosh || acosh,
            atanh: Math.atanh || atanh,
            sqrt: Math.sqrt,
            log: Math.log,
            ln: Math.log,
            lg: Math.log10 || log10,
            log10: Math.log10 || log10,
            abs: Math.abs,
            ceil: Math.ceil,
            floor: Math.floor,
            round: Math.round,
            trunc: Math.trunc || trunc,
            "-": neg,
            "+": Number,
            exp: Math.exp,
            not: not,
            length: stringLength,
            "!": factorial
        }, this.binaryOps = {
            "+": add,
            "-": sub,
            "*": mul,
            "/": div,
            "%": mod,
            "^": Math.pow,
            "||": concat,
            "==": equal,
            "!=": notEqual,
            ">": greaterThan,
            "<": lessThan,
            ">=": greaterThanEqual,
            "<=": lessThanEqual,
            and: andOperator,
            or: orOperator,
            "in": inOperator
        }, this.ternaryOps = {
            "?": condition
        }, this.functions = {
            random: random,
            fac: factorial,
            min: Math.min,
            max: Math.max,
            hypot: Math.hypot || hypot,
            pyt: Math.hypot || hypot,
            pow: Math.pow,
            atan2: Math.atan2,
            "if": condition,
            gamma: gamma,
            roundTo: roundTo
        }, this.consts = {
            E: Math.E,
            PI: Math.PI,
            "true": !0,
            "false": !1
        };
    }
    var INUMBER = "INUMBER", IOP1 = "IOP1", IOP2 = "IOP2", IOP3 = "IOP3", IVAR = "IVAR", IFUNCALL = "IFUNCALL", IEXPR = "IEXPR", IMEMBER = "IMEMBER";
    Instruction.prototype.toString = function() {
        switch (this.type) {
          case INUMBER:
          case IOP1:
          case IOP2:
          case IOP3:
          case IVAR:
            return this.value;

          case IFUNCALL:
            return "CALL " + this.value;

          case IMEMBER:
            return "." + this.value;

          default:
            return "Invalid Instruction";
        }
    }, Expression.prototype.simplify = function(values) {
        return values = values || {}, new Expression(simplify(this.tokens, this.unaryOps, this.binaryOps, this.ternaryOps, values), this.parser);
    }, Expression.prototype.substitute = function(variable, expr) {
        return expr instanceof Expression || (expr = this.parser.parse(String(expr))), new Expression(substitute(this.tokens, variable, expr), this.parser);
    }, Expression.prototype.evaluate = function(values) {
        return values = values || {}, evaluate(this.tokens, this, values);
    }, Expression.prototype.toString = function() {
        return expressionToString(this.tokens, !1);
    }, Expression.prototype.symbols = function(options) {
        options = options || {};
        var vars = [];
        return getSymbols(this.tokens, vars, options), vars;
    }, Expression.prototype.variables = function(options) {
        options = options || {};
        var vars = [];
        getSymbols(this.tokens, vars, options);
        var functions = this.functions;
        return vars.filter(function(name) {
            return !(name in functions);
        });
    }, Expression.prototype.toJSFunction = function(param, variables) {
        var expr = this, f = new Function(param, "with(this.functions) with (this.ternaryOps) with (this.binaryOps) with (this.unaryOps) { return " + expressionToString(this.simplify(variables).tokens, !0) + "; }");
        return function() {
            return f.apply(expr, arguments);
        };
    };
    var TEOF = "TEOF", TOP = "TOP", TNUMBER = "TNUMBER", TSTRING = "TSTRING", TPAREN = "TPAREN", TCOMMA = "TCOMMA", TNAME = "TNAME";
    Token.prototype.toString = function() {
        return this.type + ": " + this.value;
    }, TokenStream.prototype.newToken = function(type, value, pos) {
        return new Token(type, value, null != pos ? pos : this.pos);
    }, TokenStream.prototype.save = function() {
        this.savedPosition = this.pos, this.savedCurrent = this.current;
    }, TokenStream.prototype.restore = function() {
        this.pos = this.savedPosition, this.current = this.savedCurrent;
    }, TokenStream.prototype.next = function() {
        return this.pos >= this.expression.length ? this.newToken(TEOF, "EOF") : this.isWhitespace() || this.isComment() ? this.next() : this.isRadixInteger() || this.isNumber() || this.isOperator() || this.isString() || this.isParen() || this.isComma() || this.isNamedOp() || this.isConst() || this.isName() ? this.current : void this.parseError('Unknown character "' + this.expression.charAt(this.pos) + '"');
    }, TokenStream.prototype.isString = function() {
        var r = !1, startPos = this.pos, quote = this.expression.charAt(startPos);
        if ("'" === quote || '"' === quote) for (var index = this.expression.indexOf(quote, startPos + 1); index >= 0 && this.pos < this.expression.length; ) {
            if (this.pos = index + 1, "\\" !== this.expression.charAt(index - 1)) {
                var rawString = this.expression.substring(startPos + 1, index);
                this.current = this.newToken(TSTRING, this.unescape(rawString), startPos), r = !0;
                break;
            }
            index = this.expression.indexOf(quote, index + 1);
        }
        return r;
    }, TokenStream.prototype.isParen = function() {
        var c = this.expression.charAt(this.pos);
        return ("(" === c || ")" === c) && (this.current = this.newToken(TPAREN, c), this.pos++, 
        !0);
    }, TokenStream.prototype.isComma = function() {
        var c = this.expression.charAt(this.pos);
        return "," === c && (this.current = this.newToken(TCOMMA, ","), this.pos++, !0);
    }, TokenStream.prototype.isConst = function() {
        for (var startPos = this.pos, i = startPos; i < this.expression.length; i++) {
            var c = this.expression.charAt(i);
            if (c.toUpperCase() === c.toLowerCase() && (i === this.pos || "_" !== c && "." !== c && (c < "0" || c > "9"))) break;
        }
        if (i > startPos) {
            var str = this.expression.substring(startPos, i);
            if (str in this.consts) return this.current = this.newToken(TNUMBER, this.consts[str]), 
            this.pos += str.length, !0;
        }
        return !1;
    }, TokenStream.prototype.isNamedOp = function() {
        for (var startPos = this.pos, i = startPos; i < this.expression.length; i++) {
            var c = this.expression.charAt(i);
            if (c.toUpperCase() === c.toLowerCase() && (i === this.pos || "_" !== c && (c < "0" || c > "9"))) break;
        }
        if (i > startPos) {
            var str = this.expression.substring(startPos, i);
            if (this.isOperatorEnabled(str) && (str in this.binaryOps || str in this.unaryOps || str in this.ternaryOps)) return this.current = this.newToken(TOP, str), 
            this.pos += str.length, !0;
        }
        return !1;
    }, TokenStream.prototype.isName = function() {
        for (var startPos = this.pos, i = startPos, hasLetter = !1; i < this.expression.length; i++) {
            var c = this.expression.charAt(i);
            if (c.toUpperCase() === c.toLowerCase()) {
                if (i === this.pos && "$" === c) continue;
                if (i === this.pos || !hasLetter || "_" !== c && (c < "0" || c > "9")) break;
            } else hasLetter = !0;
        }
        if (hasLetter) {
            var str = this.expression.substring(startPos, i);
            return this.current = this.newToken(TNAME, str), this.pos += str.length, !0;
        }
        return !1;
    }, TokenStream.prototype.isWhitespace = function() {
        for (var r = !1, c = this.expression.charAt(this.pos); !(" " !== c && "\t" !== c && "\n" !== c && "\r" !== c || (r = !0, 
        this.pos++, this.pos >= this.expression.length)); ) c = this.expression.charAt(this.pos);
        return r;
    };
    var codePointPattern = /^[0-9a-f]{4}$/i;
    TokenStream.prototype.unescape = function(v) {
        var index = v.indexOf("\\");
        if (index < 0) return v;
        for (var buffer = v.substring(0, index); index >= 0; ) {
            var c = v.charAt(++index);
            switch (c) {
              case "'":
                buffer += "'";
                break;

              case '"':
                buffer += '"';
                break;

              case "\\":
                buffer += "\\";
                break;

              case "/":
                buffer += "/";
                break;

              case "b":
                buffer += "\b";
                break;

              case "f":
                buffer += "\f";
                break;

              case "n":
                buffer += "\n";
                break;

              case "r":
                buffer += "\r";
                break;

              case "t":
                buffer += "\t";
                break;

              case "u":
                var codePoint = v.substring(index + 1, index + 5);
                codePointPattern.test(codePoint) || this.parseError("Illegal escape sequence: \\u" + codePoint), 
                buffer += String.fromCharCode(parseInt(codePoint, 16)), index += 4;
                break;

              default:
                throw this.parseError('Illegal escape sequence: "\\' + c + '"');
            }
            ++index;
            var backslash = v.indexOf("\\", index);
            buffer += v.substring(index, backslash < 0 ? v.length : backslash), index = backslash;
        }
        return buffer;
    }, TokenStream.prototype.isComment = function() {
        var c = this.expression.charAt(this.pos);
        return "/" === c && "*" === this.expression.charAt(this.pos + 1) && (this.pos = this.expression.indexOf("*/", this.pos) + 2, 
        1 === this.pos && (this.pos = this.expression.length), !0);
    }, TokenStream.prototype.isRadixInteger = function() {
        var pos = this.pos;
        if (pos >= this.expression.length - 2 || "0" !== this.expression.charAt(pos)) return !1;
        ++pos;
        var radix, validDigit;
        if ("x" === this.expression.charAt(pos)) radix = 16, validDigit = /^[0-9a-f]$/i, 
        ++pos; else {
            if ("b" !== this.expression.charAt(pos)) return !1;
            radix = 2, validDigit = /^[01]$/i, ++pos;
        }
        for (var valid = !1, startPos = pos; pos < this.expression.length; ) {
            var c = this.expression.charAt(pos);
            if (!validDigit.test(c)) break;
            pos++, valid = !0;
        }
        return valid && (this.current = this.newToken(TNUMBER, parseInt(this.expression.substring(startPos, pos), radix)), 
        this.pos = pos), valid;
    }, TokenStream.prototype.isNumber = function() {
        for (var c, valid = !1, pos = this.pos, startPos = pos, resetPos = pos, foundDot = !1, foundDigits = !1; pos < this.expression.length && (c = this.expression.charAt(pos), 
        c >= "0" && c <= "9" || !foundDot && "." === c); ) "." === c ? foundDot = !0 : foundDigits = !0, 
        pos++, valid = foundDigits;
        if (valid && (resetPos = pos), "e" === c || "E" === c) {
            pos++;
            for (var acceptSign = !0, validExponent = !1; pos < this.expression.length; ) {
                if (c = this.expression.charAt(pos), !acceptSign || "+" !== c && "-" !== c) {
                    if (!(c >= "0" && c <= "9")) break;
                    validExponent = !0, acceptSign = !1;
                } else acceptSign = !1;
                pos++;
            }
            validExponent || (pos = resetPos);
        }
        return valid ? (this.current = this.newToken(TNUMBER, parseFloat(this.expression.substring(startPos, pos))), 
        this.pos = pos) : this.pos = resetPos, valid;
    }, TokenStream.prototype.isOperator = function() {
        var startPos = this.pos, c = this.expression.charAt(this.pos);
        if ("+" === c || "-" === c || "*" === c || "/" === c || "%" === c || "^" === c || "?" === c || ":" === c || "." === c) this.current = this.newToken(TOP, c); else if ("∙" === c || "•" === c) this.current = this.newToken(TOP, "*"); else if (">" === c) "=" === this.expression.charAt(this.pos + 1) ? (this.current = this.newToken(TOP, ">="), 
        this.pos++) : this.current = this.newToken(TOP, ">"); else if ("<" === c) "=" === this.expression.charAt(this.pos + 1) ? (this.current = this.newToken(TOP, "<="), 
        this.pos++) : this.current = this.newToken(TOP, "<"); else if ("|" === c) {
            if ("|" !== this.expression.charAt(this.pos + 1)) return !1;
            this.current = this.newToken(TOP, "||"), this.pos++;
        } else if ("=" === c) {
            if ("=" !== this.expression.charAt(this.pos + 1)) return !1;
            this.current = this.newToken(TOP, "=="), this.pos++;
        } else {
            if ("!" !== c) return !1;
            "=" === this.expression.charAt(this.pos + 1) ? (this.current = this.newToken(TOP, "!="), 
            this.pos++) : this.current = this.newToken(TOP, c);
        }
        return this.pos++, !!this.isOperatorEnabled(this.current.value) || (this.pos = startPos, 
        !1);
    };
    var optionNameMap = {
        "+": "add",
        "-": "subtract",
        "*": "multiply",
        "/": "divide",
        "%": "remainder",
        "^": "power",
        "!": "factorial",
        "<": "comparison",
        ">": "comparison",
        "<=": "comparison",
        ">=": "comparison",
        "==": "comparison",
        "!=": "comparison",
        "||": "concatenate",
        and: "logical",
        or: "logical",
        not: "logical",
        "?": "conditional",
        ":": "conditional"
    };
    TokenStream.prototype.isOperatorEnabled = function(op) {
        var optionName = getOptionName(op), operators = this.options.operators || {};
        return "in" === optionName ? !!operators["in"] : !(optionName in operators && !operators[optionName]);
    }, TokenStream.prototype.getCoordinates = function() {
        var column, line = 0, newline = -1;
        do line++, column = this.pos - newline, newline = this.expression.indexOf("\n", newline + 1); while (newline >= 0 && newline < this.pos);
        return {
            line: line,
            column: column
        };
    }, TokenStream.prototype.parseError = function(msg) {
        var coords = this.getCoordinates();
        throw new Error("parse error [" + coords.line + ":" + coords.column + "]: " + msg);
    }, ParserState.prototype.next = function() {
        return this.current = this.nextToken, this.nextToken = this.tokens.next();
    }, ParserState.prototype.tokenMatches = function(token, value) {
        return "undefined" == typeof value || (Array.isArray(value) ? contains(value, token.value) : "function" == typeof value ? value(token) : token.value === value);
    }, ParserState.prototype.save = function() {
        this.savedCurrent = this.current, this.savedNextToken = this.nextToken, this.tokens.save();
    }, ParserState.prototype.restore = function() {
        this.tokens.restore(), this.current = this.savedCurrent, this.nextToken = this.savedNextToken;
    }, ParserState.prototype.accept = function(type, value) {
        return !(this.nextToken.type !== type || !this.tokenMatches(this.nextToken, value)) && (this.next(), 
        !0);
    }, ParserState.prototype.expect = function(type, value) {
        if (!this.accept(type, value)) {
            var coords = this.tokens.getCoordinates();
            throw new Error("parse error [" + coords.line + ":" + coords.column + "]: Expected " + (value || type));
        }
    }, ParserState.prototype.parseAtom = function(instr) {
        if (this.accept(TNAME)) instr.push(new Instruction(IVAR, this.current.value)); else if (this.accept(TNUMBER)) instr.push(new Instruction(INUMBER, this.current.value)); else if (this.accept(TSTRING)) instr.push(new Instruction(INUMBER, this.current.value)); else {
            if (!this.accept(TPAREN, "(")) throw new Error("unexpected " + this.nextToken);
            this.parseExpression(instr), this.expect(TPAREN, ")");
        }
    }, ParserState.prototype.parseExpression = function(instr) {
        this.parseConditionalExpression(instr);
    }, ParserState.prototype.parseConditionalExpression = function(instr) {
        for (this.parseOrExpression(instr); this.accept(TOP, "?"); ) {
            var trueBranch = [], falseBranch = [];
            this.parseConditionalExpression(trueBranch), this.expect(TOP, ":"), this.parseConditionalExpression(falseBranch), 
            instr.push(new Instruction(IEXPR, trueBranch)), instr.push(new Instruction(IEXPR, falseBranch)), 
            instr.push(ternaryInstruction("?"));
        }
    }, ParserState.prototype.parseOrExpression = function(instr) {
        for (this.parseAndExpression(instr); this.accept(TOP, "or"); ) this.parseAndExpression(instr), 
        instr.push(binaryInstruction("or"));
    }, ParserState.prototype.parseAndExpression = function(instr) {
        for (this.parseComparison(instr); this.accept(TOP, "and"); ) this.parseComparison(instr), 
        instr.push(binaryInstruction("and"));
    };
    var COMPARISON_OPERATORS = [ "==", "!=", "<", "<=", ">=", ">", "in" ];
    ParserState.prototype.parseComparison = function(instr) {
        for (this.parseAddSub(instr); this.accept(TOP, COMPARISON_OPERATORS); ) {
            var op = this.current;
            this.parseAddSub(instr), instr.push(binaryInstruction(op.value));
        }
    };
    var ADD_SUB_OPERATORS = [ "+", "-", "||" ];
    ParserState.prototype.parseAddSub = function(instr) {
        for (this.parseTerm(instr); this.accept(TOP, ADD_SUB_OPERATORS); ) {
            var op = this.current;
            this.parseTerm(instr), instr.push(binaryInstruction(op.value));
        }
    };
    var TERM_OPERATORS = [ "*", "/", "%" ];
    ParserState.prototype.parseTerm = function(instr) {
        for (this.parseFactor(instr); this.accept(TOP, TERM_OPERATORS); ) {
            var op = this.current;
            this.parseFactor(instr), instr.push(binaryInstruction(op.value));
        }
    }, ParserState.prototype.parseFactor = function(instr) {
        function isPrefixOperator(token) {
            return token.value in unaryOps;
        }
        var unaryOps = this.tokens.unaryOps;
        if (this.save(), this.accept(TOP, isPrefixOperator)) if ("-" !== this.current.value && "+" !== this.current.value && this.nextToken.type === TPAREN && "(" === this.nextToken.value) this.restore(), 
        this.parseExponential(instr); else {
            var op = this.current;
            this.parseFactor(instr), instr.push(unaryInstruction(op.value));
        } else this.parseExponential(instr);
    }, ParserState.prototype.parseExponential = function(instr) {
        for (this.parsePostfixExpression(instr); this.accept(TOP, "^"); ) this.parseFactor(instr), 
        instr.push(binaryInstruction("^"));
    }, ParserState.prototype.parsePostfixExpression = function(instr) {
        for (this.parseFunctionCall(instr); this.accept(TOP, "!"); ) instr.push(unaryInstruction("!"));
    }, ParserState.prototype.parseFunctionCall = function(instr) {
        function isPrefixOperator(token) {
            return token.value in unaryOps;
        }
        var unaryOps = this.tokens.unaryOps;
        if (this.accept(TOP, isPrefixOperator)) {
            var op = this.current;
            this.parseAtom(instr), instr.push(unaryInstruction(op.value));
        } else for (this.parseMemberExpression(instr); this.accept(TPAREN, "("); ) if (this.accept(TPAREN, ")")) instr.push(new Instruction(IFUNCALL, 0)); else {
            var argCount = this.parseArgumentList(instr);
            instr.push(new Instruction(IFUNCALL, argCount));
        }
    }, ParserState.prototype.parseArgumentList = function(instr) {
        for (var argCount = 0; !this.accept(TPAREN, ")"); ) for (this.parseExpression(instr), 
        ++argCount; this.accept(TCOMMA); ) this.parseExpression(instr), ++argCount;
        return argCount;
    }, ParserState.prototype.parseMemberExpression = function(instr) {
        for (this.parseAtom(instr); this.accept(TOP, "."); ) {
            if (!this.allowMemberAccess) throw new Error('unexpected ".", member access is not permitted');
            this.expect(TNAME), instr.push(new Instruction(IMEMBER, this.current.value));
        }
    };
    var GAMMA_G = 4.7421875, GAMMA_P = [ .9999999999999971, 57.15623566586292, -59.59796035547549, 14.136097974741746, -.4919138160976202, 3399464998481189e-20, 4652362892704858e-20, -9837447530487956e-20, .0001580887032249125, -.00021026444172410488, .00021743961811521265, -.0001643181065367639, 8441822398385275e-20, -26190838401581408e-21, 36899182659531625e-22 ];
    Parser.prototype.parse = function(expr) {
        var instr = [], parserState = new ParserState(this, new TokenStream(this, expr), {
            allowMemberAccess: this.options.allowMemberAccess
        });
        return parserState.parseExpression(instr), parserState.expect(TEOF, "EOF"), new Expression(instr, this);
    }, Parser.prototype.evaluate = function(expr, variables) {
        return this.parse(expr).evaluate(variables);
    };
    var sharedParser = new Parser();
    Parser.parse = function(expr) {
        return sharedParser.parse(expr);
    }, Parser.evaluate = function(expr, variables) {
        return sharedParser.parse(expr).evaluate(variables);
    };
    var index = {
        Parser: Parser,
        Expression: Expression
    };
    return index;
});
//# sourceMappingURL=fnft-uilib.js.map
