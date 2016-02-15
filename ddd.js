(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _class = function () {
    _createClass(_class, [{
        key: '_createSvg',
        value: function _createSvg() {
            if (!this._svg) {
                this._svg = this._element.append('svg');

                this._svg.attr({
                    'height': this.height,
                    'width': this.width
                });
            }
        }
    }]);

    function _class(data) {
        var selector = arguments.length <= 1 || arguments[1] === undefined ? 'body' : arguments[1];
        var options = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

        _classCallCheck(this, _class);

        this._data = data;
        this.selector = selector;
        this._width = options.width || this.width;
        this._height = options.height || this.height;
    }

    _createClass(_class, [{
        key: 'render',
        value: function render() {
            this._createSvg();
        }
    }, {
        key: 'selector',
        set: function set(selector) {
            this._selector = selector;
            this._element = d3.select(this._selector);
        },
        get: function get() {
            return this._selector || 'body';
        }
    }, {
        key: 'height',
        get: function get() {
            return this._height || 200;
        }
    }, {
        key: 'width',
        get: function get() {
            return this._width || 300;
        }
    }]);

    return _class;
}();

exports.default = _class;

},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _class = function () {
    function _class(data) {
        _classCallCheck(this, _class);

        this.data = data;
    }

    _createClass(_class, [{
        key: "data",
        set: function set(data) {
            this._data = data;
        }
    }]);

    return _class;
}();

exports.default = _class;

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.translateString = translateString;
function translateString(x, y) {
    return 'translate(' + x + ',' + y + ')';
}

},{}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _d = require('d3');

var _d2 = _interopRequireDefault(_d);

var _Chart2 = require('./Chart');

var _Chart3 = _interopRequireDefault(_Chart2);

var _Helpers = require('./Helpers');

var Helpers = _interopRequireWildcard(_Helpers);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_Chart) {
    _inherits(_class, _Chart);

    _createClass(_class, [{
        key: '_createSvg',
        value: function _createSvg() {
            _get(Object.getPrototypeOf(_class.prototype), '_createSvg', this).call(this);

            this._svg.append('g').attr('transform', Helpers.translateString(this.width / 2, this.height / 2));
        }
    }]);

    function _class(data, selector) {
        _classCallCheck(this, _class);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(_class).call(this, data, selector));

        _this._pie = _d2.default.layout.pie();
        _this._arc = _d2.default.svg.arc().innerRadius(0).outerRadius(_this.radius);
        return _this;
    }

    _createClass(_class, [{
        key: 'render',
        value: function render() {
            _get(Object.getPrototypeOf(_class.prototype), 'render', this).call(this);

            var arcGroup = this._svg.select('g').selectAll('.arc').data(this._pie(this._data)).enter().append('g').attr('class', 'arc');

            arcGroup.append('path').attr('d', this._arc);
        }
    }, {
        key: 'radius',
        get: function get() {
            return (Math.min(this.width, this.height) - this.padding) / 2;
        }
    }, {
        key: 'padding',
        get: function get() {
            return 10;
        }
    }]);

    return _class;
}(_Chart3.default);

exports.default = _class;

},{"./Chart":1,"./Helpers":3,"d3":undefined}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _class = function () {
    function _class() {
        var data = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
        var label = arguments.length <= 1 || arguments[1] === undefined ? '' : arguments[1];

        _classCallCheck(this, _class);

        this.data = data;
        this._label = label;
    }

    _createClass(_class, [{
        key: 'data',
        set: function set(data) {
            this._data = data;
        }
    }]);

    return _class;
}();

exports.default = _class;

},{}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Pie = exports.Series = exports.Helpers = exports.Data = exports.Chart = undefined;

var _Chart = require('./Chart');

var _Chart2 = _interopRequireDefault(_Chart);

var _Data = require('./Data');

var _Data2 = _interopRequireDefault(_Data);

var _Helpers = require('./Helpers');

var _Helpers2 = _interopRequireDefault(_Helpers);

var _Series = require('./Series');

var _Series2 = _interopRequireDefault(_Series);

var _Pie = require('./Pie');

var _Pie2 = _interopRequireDefault(_Pie);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Chart = _Chart2.default;
exports.Data = _Data2.default;
exports.Helpers = _Helpers2.default;
exports.Series = _Series2.default;
exports.Pie = _Pie2.default;

},{"./Chart":1,"./Data":2,"./Helpers":3,"./Pie":4,"./Series":5}]},{},[1,2,3,4,5,6])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9ncnVudC1icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvQ2hhcnQuanMiLCJzcmMvRGF0YS5qcyIsInNyYy9IZWxwZXJzLmpzIiwic3JjL1BpZS5qcyIsInNyYy9TZXJpZXMuanMiLCJzcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7O3FDQ0NrQjtBQUNWLGdCQUFLLENBQUMsS0FBSyxJQUFMLEVBQVk7QUFDZCxxQkFBSyxJQUFMLEdBQVksS0FBSyxRQUFMLENBQWMsTUFBZCxDQUFzQixLQUF0QixDQUFaLENBRGM7O0FBR2QscUJBQUssSUFBTCxDQUFVLElBQVYsQ0FBZ0I7QUFDWiw4QkFBVSxLQUFLLE1BQUw7QUFDViw2QkFBUyxLQUFLLEtBQUw7aUJBRmIsRUFIYzthQUFsQjs7OztBQVVKLG9CQUFjLElBQWQsRUFBc0Q7WUFBbEMsaUVBQVcsc0JBQXVCO1lBQWYsZ0VBQVUsa0JBQUs7Ozs7QUFDbEQsYUFBSyxLQUFMLEdBQWEsSUFBYixDQURrRDtBQUVsRCxhQUFLLFFBQUwsR0FBZ0IsUUFBaEIsQ0FGa0Q7QUFHbEQsYUFBSyxNQUFMLEdBQWMsUUFBUSxLQUFSLElBQWlCLEtBQUssS0FBTCxDQUhtQjtBQUlsRCxhQUFLLE9BQUwsR0FBZSxRQUFRLE1BQVIsSUFBa0IsS0FBSyxNQUFMLENBSmlCO0tBQXREOzs7O2lDQU9VO0FBQ04saUJBQUssVUFBTCxHQURNOzs7OzBCQUlLLFVBQVc7QUFDdEIsaUJBQUssU0FBTCxHQUFpQixRQUFqQixDQURzQjtBQUV0QixpQkFBSyxRQUFMLEdBQWdCLEdBQUcsTUFBSCxDQUFXLEtBQUssU0FBTCxDQUEzQixDQUZzQjs7NEJBS1Y7QUFDWixtQkFBTyxLQUFLLFNBQUwsSUFBa0IsTUFBbEIsQ0FESzs7Ozs0QkFJRjtBQUNWLG1CQUFPLEtBQUssT0FBTCxJQUFnQixHQUFoQixDQURHOzs7OzRCQUlEO0FBQ1QsbUJBQU8sS0FBSyxNQUFMLElBQWUsR0FBZixDQURFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQ2Isb0JBQWMsSUFBZCxFQUFxQjs7O0FBQ2pCLGFBQUssSUFBTCxHQUFZLElBQVosQ0FEaUI7S0FBckI7Ozs7MEJBSVcsTUFBTztBQUNkLGlCQUFLLEtBQUwsR0FBYSxJQUFiLENBRGM7Ozs7Ozs7Ozs7Ozs7OztRQ0xOO0FBQVQsU0FBUyxlQUFULENBQTJCLENBQTNCLEVBQThCLENBQTlCLEVBQWtDO0FBQ3JDLFdBQU8sZUFBZSxDQUFmLEdBQW1CLEdBQW5CLEdBQXlCLENBQXpCLEdBQTZCLEdBQTdCLENBRDhCO0NBQWxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ0dLOzs7Ozs7Ozs7Ozs7Ozs7OztxQ0FHTTtBQUNWLHlGQURVOztBQUdWLGlCQUFLLElBQUwsQ0FBVSxNQUFWLENBQWtCLEdBQWxCLEVBQ0ssSUFETCxDQUVRLFdBRlIsRUFHUSxRQUFRLGVBQVIsQ0FBeUIsS0FBSyxLQUFMLEdBQWEsQ0FBYixFQUFnQixLQUFLLE1BQUwsR0FBYyxDQUFkLENBSGpELEVBSFU7Ozs7QUFVZCxvQkFBYyxJQUFkLEVBQW9CLFFBQXBCLEVBQStCOzs7OEZBQ3BCLE1BQU0sV0FEYzs7QUFHM0IsY0FBSyxJQUFMLEdBQVksWUFBRyxNQUFILENBQVUsR0FBVixFQUFaLENBSDJCO0FBSTNCLGNBQUssSUFBTCxHQUFZLFlBQUcsR0FBSCxDQUFPLEdBQVAsR0FDUCxXQURPLENBQ00sQ0FETixFQUVQLFdBRk8sQ0FFTSxNQUFLLE1BQUwsQ0FGbEIsQ0FKMkI7O0tBQS9COzs7O2lDQVNVO0FBQ04scUZBRE07O0FBR04sZ0JBQUksV0FBVyxLQUFLLElBQUwsQ0FBVSxNQUFWLENBQWtCLEdBQWxCLEVBQ1YsU0FEVSxDQUNDLE1BREQsRUFFTixJQUZNLENBRUEsS0FBSyxJQUFMLENBQVcsS0FBSyxLQUFMLENBRlgsRUFHVixLQUhVLEdBSU4sTUFKTSxDQUlFLEdBSkYsRUFLRixJQUxFLENBS0ksT0FMSixFQUthLEtBTGIsQ0FBWCxDQUhFOztBQVVOLHFCQUFTLE1BQVQsQ0FBaUIsTUFBakIsRUFDSyxJQURMLENBQ1csR0FEWCxFQUNnQixLQUFLLElBQUwsQ0FEaEIsQ0FWTTs7Ozs0QkFjSTtBQUNWLG1CQUFPLENBQUUsS0FBSyxHQUFMLENBQVUsS0FBSyxLQUFMLEVBQVksS0FBSyxNQUFMLENBQXRCLEdBQXNDLEtBQUssT0FBTCxDQUF4QyxHQUF5RCxDQUF6RCxDQURHOzs7OzRCQUlDO0FBQ1gsbUJBQU8sRUFBUCxDQURXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQ2Ysc0JBQXNDO1lBQXhCLDZEQUFPLGtCQUFpQjtZQUFiLDhEQUFRLGtCQUFLOzs7O0FBQ2xDLGFBQUssSUFBTCxHQUFZLElBQVosQ0FEa0M7QUFFbEMsYUFBSyxNQUFMLEdBQWMsS0FBZCxDQUZrQztLQUF0Qzs7OzswQkFLVyxNQUFPO0FBQ2QsaUJBQUssS0FBTCxHQUFhLElBQWIsQ0FEYzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1FDQ2xCO1FBQ0E7UUFDQTtRQUNBO1FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuICAgIF9jcmVhdGVTdmcgKCkge1xuICAgICAgICBpZiAoICF0aGlzLl9zdmcgKSB7XG4gICAgICAgICAgICB0aGlzLl9zdmcgPSB0aGlzLl9lbGVtZW50LmFwcGVuZCggJ3N2ZycgKTtcblxuICAgICAgICAgICAgdGhpcy5fc3ZnLmF0dHIoIHtcbiAgICAgICAgICAgICAgICAnaGVpZ2h0JzogdGhpcy5oZWlnaHQsXG4gICAgICAgICAgICAgICAgJ3dpZHRoJzogdGhpcy53aWR0aFxuICAgICAgICAgICAgfSApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IgKCBkYXRhLCBzZWxlY3RvciA9ICdib2R5Jywgb3B0aW9ucyA9IHt9ICkge1xuICAgICAgICB0aGlzLl9kYXRhID0gZGF0YTtcbiAgICAgICAgdGhpcy5zZWxlY3RvciA9IHNlbGVjdG9yO1xuICAgICAgICB0aGlzLl93aWR0aCA9IG9wdGlvbnMud2lkdGggfHwgdGhpcy53aWR0aDtcbiAgICAgICAgdGhpcy5faGVpZ2h0ID0gb3B0aW9ucy5oZWlnaHQgfHwgdGhpcy5oZWlnaHQ7XG4gICAgfVxuXG4gICAgcmVuZGVyICgpIHtcbiAgICAgICAgdGhpcy5fY3JlYXRlU3ZnKCk7XG4gICAgfVxuXG4gICAgc2V0IHNlbGVjdG9yICggc2VsZWN0b3IgKSB7XG4gICAgICAgIHRoaXMuX3NlbGVjdG9yID0gc2VsZWN0b3I7XG4gICAgICAgIHRoaXMuX2VsZW1lbnQgPSBkMy5zZWxlY3QoIHRoaXMuX3NlbGVjdG9yICk7XG4gICAgfVxuXG4gICAgZ2V0IHNlbGVjdG9yICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NlbGVjdG9yIHx8ICdib2R5JztcbiAgICB9XG5cbiAgICBnZXQgaGVpZ2h0ICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2hlaWdodCB8fCAyMDA7XG4gICAgfVxuXG4gICAgZ2V0IHdpZHRoICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3dpZHRoIHx8IDMwMDtcbiAgICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyB7XG4gICAgY29uc3RydWN0b3IgKCBkYXRhICkge1xuICAgICAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICAgIH1cblxuICAgIHNldCBkYXRhICggZGF0YSApIHtcbiAgICAgICAgdGhpcy5fZGF0YSA9IGRhdGE7XG4gICAgfSBcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiB0cmFuc2xhdGVTdHJpbmcgKCB4LCB5ICkge1xuICAgIHJldHVybiAndHJhbnNsYXRlKCcgKyB4ICsgJywnICsgeSArICcpJztcbn1cbiIsImltcG9ydCBkMyBmcm9tICdkMyc7XG5cbmltcG9ydCBDaGFydCBmcm9tICcuL0NoYXJ0JztcbmltcG9ydCAqIGFzIEhlbHBlcnMgZnJvbSAnLi9IZWxwZXJzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDaGFydCB7XG4gICAgX2NyZWF0ZVN2ZyAoKSB7XG4gICAgICAgIHN1cGVyLl9jcmVhdGVTdmcoKTtcblxuICAgICAgICB0aGlzLl9zdmcuYXBwZW5kKCAnZycgKVxuICAgICAgICAgICAgLmF0dHIoXG4gICAgICAgICAgICAgICAgJ3RyYW5zZm9ybScsXG4gICAgICAgICAgICAgICAgSGVscGVycy50cmFuc2xhdGVTdHJpbmcoIHRoaXMud2lkdGggLyAyLCB0aGlzLmhlaWdodCAvIDIgKVxuICAgICAgICAgICAgKTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvciAoIGRhdGEsIHNlbGVjdG9yICkge1xuICAgICAgICBzdXBlciggZGF0YSwgc2VsZWN0b3IgKTtcblxuICAgICAgICB0aGlzLl9waWUgPSBkMy5sYXlvdXQucGllKCk7XG4gICAgICAgIHRoaXMuX2FyYyA9IGQzLnN2Zy5hcmMoKVxuICAgICAgICAgICAgLmlubmVyUmFkaXVzKCAwIClcbiAgICAgICAgICAgIC5vdXRlclJhZGl1cyggdGhpcy5yYWRpdXMgKTtcbiAgICB9XG5cbiAgICByZW5kZXIgKCkge1xuICAgICAgICBzdXBlci5yZW5kZXIoKTtcblxuICAgICAgICB2YXIgYXJjR3JvdXAgPSB0aGlzLl9zdmcuc2VsZWN0KCAnZycgKVxuICAgICAgICAgICAgLnNlbGVjdEFsbCggJy5hcmMnIClcbiAgICAgICAgICAgICAgICAuZGF0YSggdGhpcy5fcGllKCB0aGlzLl9kYXRhICkgKVxuICAgICAgICAgICAgLmVudGVyKClcbiAgICAgICAgICAgICAgICAuYXBwZW5kKCAnZycgKVxuICAgICAgICAgICAgICAgICAgICAuYXR0ciggJ2NsYXNzJywgJ2FyYycgKTtcblxuICAgICAgICBhcmNHcm91cC5hcHBlbmQoICdwYXRoJyApXG4gICAgICAgICAgICAuYXR0ciggJ2QnLCB0aGlzLl9hcmMgKTtcbiAgICB9XG5cbiAgICBnZXQgcmFkaXVzICgpIHtcbiAgICAgICAgcmV0dXJuICggTWF0aC5taW4oIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0ICkgLSB0aGlzLnBhZGRpbmcgKSAvIDI7XG4gICAgfVxuXG4gICAgZ2V0IHBhZGRpbmcgKCkge1xuICAgICAgICByZXR1cm4gMTA7XG4gICAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuICAgIGNvbnN0cnVjdG9yICggZGF0YSA9IFtdLCBsYWJlbCA9ICcnICkge1xuICAgICAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICAgICAgICB0aGlzLl9sYWJlbCA9IGxhYmVsO1xuICAgIH1cblxuICAgIHNldCBkYXRhICggZGF0YSApIHtcbiAgICAgICAgdGhpcy5fZGF0YSA9IGRhdGE7XG4gICAgfVxufVxuIiwiaW1wb3J0IENoYXJ0IGZyb20gJy4vQ2hhcnQnO1xuaW1wb3J0IERhdGEgZnJvbSAnLi9EYXRhJztcbmltcG9ydCBIZWxwZXJzIGZyb20gJy4vSGVscGVycyc7XG5pbXBvcnQgU2VyaWVzIGZyb20gJy4vU2VyaWVzJztcbmltcG9ydCBQaWUgZnJvbSAnLi9QaWUnO1xuXG5leHBvcnQge1xuICAgIENoYXJ0LFxuICAgIERhdGEsXG4gICAgSGVscGVycyxcbiAgICBTZXJpZXMsXG4gICAgUGllXG59O1xuIl19
