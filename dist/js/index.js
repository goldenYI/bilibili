webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(32);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _head = __webpack_require__(178);
	
	var _head2 = _interopRequireDefault(_head);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Index = function (_React$Component) {
	    _inherits(Index, _React$Component);
	
	    function Index(props) {
	        _classCallCheck(this, Index);
	
	        // 定义 state
	
	        var _this = _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).call(this, props));
	
	        _this.state = {};
	        return _this;
	    }
	    // 生命周期方法
	
	
	    _createClass(Index, [{
	        key: 'componentWillMount',
	        value: function componentWillMount() {}
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {}
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {}
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(_head2.default, null),
	                _react2.default.createElement(
	                    'h1',
	                    null,
	                    'hello world'
	                )
	            );
	        }
	    }]);
	
	    return Index;
	}(_react2.default.Component);
	
	_reactDom2.default.render(_react2.default.createElement(Index, null), document.getElementById('content'));

/***/ },

/***/ 178:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _index = __webpack_require__(179);
	
	var _index2 = _interopRequireDefault(_index);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var CommonHead = function (_React$Component) {
	    _inherits(CommonHead, _React$Component);
	
	    function CommonHead(props) {
	        _classCallCheck(this, CommonHead);
	
	        // 定义 state
	
	        var _this = _possibleConstructorReturn(this, (CommonHead.__proto__ || Object.getPrototypeOf(CommonHead)).call(this, props));
	
	        _this.state = {};
	
	        return _this;
	    }
	    // 生命周期方法
	
	
	    _createClass(CommonHead, [{
	        key: 'componentWillMount',
	        value: function componentWillMount() {}
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {}
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {}
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                { className: _index2.default.container },
	                _react2.default.createElement(
	                    'div',
	                    { className: _index2.default.left },
	                    'logo'
	                ),
	                _react2.default.createElement(
	                    'div',
	                    { className: _index2.default.middle },
	                    'search'
	                ),
	                _react2.default.createElement(
	                    'div',
	                    { className: _index2.default.right },
	                    'user'
	                )
	            );
	        }
	    }]);
	
	    return CommonHead;
	}(_react2.default.Component);
	
	exports.default = CommonHead;

/***/ },

/***/ 179:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(180);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(182)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/.0.26.1@css-loader/index.js?modules&root=./dist!./index.css", function() {
				var newContent = require("!!./../../../../node_modules/.0.26.1@css-loader/index.js?modules&root=./dist!./index.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 180:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(181)();
	// imports
	
	
	// module
	exports.push([module.id, "/* actual flexbox stuff */\n.v1pq-IMey5HCriNVmMSqZ {\n  width: 100%;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-box-orient: horizontal;\n  -ms-flex-direction: row;\n  flex-direction: row;\n  -ms-box-pack: start;\n  -ms-flex-pack: start;\n      justify-content: flex-start;\n}\n._v6Z3wKqjcrHtmRad0nKm .v1pq-IMey5HCriNVmMSqZ {\n  *zoom: 1;\n}\n._v6Z3wKqjcrHtmRad0nKm .v1pq-IMey5HCriNVmMSqZ:before,\n._v6Z3wKqjcrHtmRad0nKm .v1pq-IMey5HCriNVmMSqZ:after {\n  display: table;\n  content: \"\";\n  line-height: 0;\n}\n._v6Z3wKqjcrHtmRad0nKm .v1pq-IMey5HCriNVmMSqZ:after {\n  clear: both;\n}\n._v6Z3wKqjcrHtmRad0nKm .v1pq-IMey5HCriNVmMSqZ > * {\n  float: left;\n}\n.v1pq-IMey5HCriNVmMSqZ ._3-GJR0C5ytwmENojvc0qf0 {\n  -ms-flex: 1;\n  flex: 1;\n  -ms-flex-order: 1;\n  order: 1;\n}\n._2jSriFt3HfunxPvaSXiFND .v1pq-IMey5HCriNVmMSqZ ._3-GJR0C5ytwmENojvc0qf0 {\n  width: 14.28571429%;\n}\n.v1pq-IMey5HCriNVmMSqZ .ab0Gy2eemcvQnw-sTFcZu {\n  -ms-flex: 5;\n  flex: 5;\n  -ms-flex-order: 2;\n  order: 2;\n}\n._2jSriFt3HfunxPvaSXiFND .v1pq-IMey5HCriNVmMSqZ .ab0Gy2eemcvQnw-sTFcZu {\n  width: 71.42857143%;\n}\n.v1pq-IMey5HCriNVmMSqZ ._2fc2HSYgIzYmxeF4XPVom2 {\n  -ms-flex: 1;\n  flex: 1;\n  -ms-flex-order: 3;\n  order: 3;\n}\n._2jSriFt3HfunxPvaSXiFND .v1pq-IMey5HCriNVmMSqZ ._2fc2HSYgIzYmxeF4XPVom2 {\n  width: 14.28571429%;\n}\n/* MIXINS */\n._1MMZM_l51aWv302o9Z8bBy {\n  *zoom: 1;\n}\n._1MMZM_l51aWv302o9Z8bBy:before,\n._1MMZM_l51aWv302o9Z8bBy:after {\n  display: table;\n  content: \"\";\n  line-height: 0;\n}\n._1MMZM_l51aWv302o9Z8bBy:after {\n  clear: both;\n}\n.v1pq-IMey5HCriNVmMSqZ {\n  position: fixed;\n  height: 20%;\n}\n.v1pq-IMey5HCriNVmMSqZ > div {\n  text-align: center;\n}\n.v1pq-IMey5HCriNVmMSqZ ._3-GJR0C5ytwmENojvc0qf0 {\n  background: green;\n}\n.v1pq-IMey5HCriNVmMSqZ .ab0Gy2eemcvQnw-sTFcZu {\n  background: silver;\n}\n.v1pq-IMey5HCriNVmMSqZ ._2fc2HSYgIzYmxeF4XPVom2 {\n  background: red;\n}\n", ""]);
	
	// exports
	exports.locals = {
		"container": "v1pq-IMey5HCriNVmMSqZ",
		"no-flexboxlegacy": "_v6Z3wKqjcrHtmRad0nKm",
		"left": "_3-GJR0C5ytwmENojvc0qf0",
		"no-flexbox": "_2jSriFt3HfunxPvaSXiFND",
		"middle": "ab0Gy2eemcvQnw-sTFcZu",
		"right": "_2fc2HSYgIzYmxeF4XPVom2",
		"clearfix": "_1MMZM_l51aWv302o9Z8bBy"
	};

/***/ },

/***/ 181:
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },

/***/ 182:
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(true) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ }

});
//# sourceMappingURL=index.js.map