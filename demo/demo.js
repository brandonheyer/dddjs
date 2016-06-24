(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _src = require('../src');

var ddd = _interopRequireWildcard(_src);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

new ddd.Pie(new ddd.Data([50, 25, 15, 10]), '.chart-pie').render();
new ddd.Donut(new ddd.Data([50, 25, 15, 10]), '.chart-donut').render();

},{"../src":8}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _d = require('d3');

var _d2 = _interopRequireDefault(_d);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
        this._colors = options.colors || _d2.default.scale.category10();
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
            this._element = _d2.default.select(this._selector);
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
    }, {
        key: 'colors',
        get: function get() {
            return this._colors;
        }
    }, {
        key: 'padding',
        get: function get() {
            return 10;
        }
    }]);

    return _class;
}();

exports.default = _class;

},{"d3":undefined}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _underscore = require('underscore');

var _underscore2 = _interopRequireDefault(_underscore);

var _Series = require('./Series');

var _Series2 = _interopRequireDefault(_Series);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _class = function () {
    _createClass(_class, [{
        key: '_processData',
        value: function _processData() {
            if (_underscore2.default.isArray(this._data) && this._data.length) {
                if (_underscore2.default.isArray(this._data[0])) {
                    _underscore2.default.each(this._data, function (series) {
                        this._series.push(new _Series2.default(series));
                    });
                } else {
                    this._series.push(new _Series2.default(this._data));
                }
            } else if (_underscore2.default.isNumber(this._data)) {
                this._series.push(new _Series2.default([this._data]));
            }
        }
    }]);

    function _class(data) {
        _classCallCheck(this, _class);

        this._series = [];
        this.data = data;
    }

    _createClass(_class, [{
        key: 'series',
        value: function series(index) {
            if (index < this._series.length && index >= 0) {
                return this._series[index];
            }

            return undefined;
        }
    }, {
        key: 'data',
        get: function get() {
            return this._data;
        },
        set: function set(data) {
            this._data = data;
            this._processData();
        }
    }]);

    return _class;
}();

exports.default = _class;

},{"./Series":7,"underscore":undefined}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _d = require('d3');

var _d2 = _interopRequireDefault(_d);

var _Pie2 = require('./Pie');

var _Pie3 = _interopRequireDefault(_Pie2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_Pie) {
    _inherits(_class, _Pie);

    function _class() {
        _classCallCheck(this, _class);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(_class).apply(this, arguments));
    }

    _createClass(_class, [{
        key: '_initializeArc',
        value: function _initializeArc() {
            this._arc = _d2.default.svg.arc().innerRadius(this.innerRadius).outerRadius(this.outerRadius);
        }
    }, {
        key: 'innerRadius',
        get: function get() {
            return this.radius / 3;
        }
    }, {
        key: 'outerRadius',
        get: function get() {
            return this.radius;
        }
    }]);

    return _class;
}(_Pie3.default);

exports.default = _class;

},{"./Pie":6,"d3":undefined}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.translateString = translateString;
function translateString(x, y) {
    return 'translate(' + x + ',' + y + ')';
}

},{}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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
        key: '_initializeArc',
        value: function _initializeArc() {
            this._arc = _d2.default.svg.arc().innerRadius(0).outerRadius(this.radius);
        }
    }]);

    function _class(data, selector) {
        _classCallCheck(this, _class);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(_class).call(this, data, selector));

        _this._initializeArc();

        _this._pie = _d2.default.layout.pie();
        return _this;
    }

    _createClass(_class, [{
        key: 'render',
        value: function render() {
            _get(Object.getPrototypeOf(_class.prototype), 'render', this).call(this);

            var self = this;

            this._mainGroup = this._svg.append('g').attr('transform', Helpers.translateString(this.width / 2, this.height / 2));

            this._arcGroups = this._mainGroup.selectAll('.arc').data(this._pie(this._data.series(0)._data)).enter().append('g').attr('class', 'arc');

            this._arcGroups.append('path').attr('d', this._arc).style('fill', function (datum, index) {
                return self._colors(index);
            });
        }
    }, {
        key: 'radius',
        get: function get() {
            return (Math.min(this.width, this.height) - this.padding) / 2;
        }
    }]);

    return _class;
}(_Chart3.default);

exports.default = _class;

},{"./Chart":2,"./Helpers":5,"d3":undefined}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _underscore = require('underscore');

var _underscore2 = _interopRequireDefault(_underscore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _class = function () {
    _createClass(_class, [{
        key: '_processData',
        value: function _processData(data, label) {
            if (label) {
                this.label = label;
            } else {
                if (_underscore2.default.isArray(data) && data.length && _underscore2.default.isString(data[0])) {
                    this.label = data.shift();
                }
            }

            this.data = data;
        }
    }]);

    function _class() {
        var data = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
        var label = arguments.length <= 1 || arguments[1] === undefined ? '' : arguments[1];

        _classCallCheck(this, _class);

        this._processData(data, label);
    }

    _createClass(_class, [{
        key: 'label',
        set: function set(label) {
            this._label = label;
        }
    }, {
        key: 'data',
        get: function get() {
            return this._data;
        },
        set: function set(data) {
            this._data = data;
        }
    }]);

    return _class;
}();

exports.default = _class;

},{"underscore":undefined}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Pie = exports.Series = exports.Helpers = exports.Donut = exports.Data = exports.Chart = undefined;

var _Chart = require('./Chart');

var _Chart2 = _interopRequireDefault(_Chart);

var _Data = require('./Data');

var _Data2 = _interopRequireDefault(_Data);

var _Donut = require('./Donut');

var _Donut2 = _interopRequireDefault(_Donut);

var _Helpers = require('./Helpers');

var _Helpers2 = _interopRequireDefault(_Helpers);

var _Series = require('./Series');

var _Series2 = _interopRequireDefault(_Series);

var _Pie = require('./Pie');

var _Pie2 = _interopRequireDefault(_Pie);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Chart = _Chart2.default;
exports.Data = _Data2.default;
exports.Donut = _Donut2.default;
exports.Helpers = _Helpers2.default;
exports.Series = _Series2.default;
exports.Pie = _Pie2.default;

},{"./Chart":2,"./Data":3,"./Donut":4,"./Helpers":5,"./Pie":6,"./Series":7}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9ncnVudC1icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZW1vL2luZGV4LmpzIiwic3JjL0NoYXJ0LmpzIiwic3JjL0RhdGEuanMiLCJzcmMvRG9udXQuanMiLCJzcmMvSGVscGVycy5qcyIsInNyYy9QaWUuanMiLCJzcmMvU2VyaWVzLmpzIiwic3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7OztJQ0FZOzs7O0FBRVosSUFBSSxJQUFJLEdBQUosQ0FBUyxJQUFJLElBQUksSUFBSixDQUFVLENBQUUsRUFBRixFQUFNLEVBQU4sRUFBVSxFQUFWLEVBQWMsRUFBZCxDQUFkLENBQWIsRUFBaUQsWUFBakQsRUFBZ0UsTUFBaEU7QUFDQSxJQUFJLElBQUksS0FBSixDQUFXLElBQUksSUFBSSxJQUFKLENBQVUsQ0FBRSxFQUFGLEVBQU0sRUFBTixFQUFVLEVBQVYsRUFBYyxFQUFkLENBQWQsQ0FBZixFQUFtRCxjQUFuRCxFQUFvRSxNQUFwRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztxQ0NBa0I7QUFDVixnQkFBSyxDQUFDLEtBQUssSUFBTCxFQUFZO0FBQ2QscUJBQUssSUFBTCxHQUFZLEtBQUssUUFBTCxDQUFjLE1BQWQsQ0FBc0IsS0FBdEIsQ0FBWixDQURjOztBQUdkLHFCQUFLLElBQUwsQ0FBVSxJQUFWLENBQWdCO0FBQ1osOEJBQVUsS0FBSyxNQUFMO0FBQ1YsNkJBQVMsS0FBSyxLQUFMO2lCQUZiLEVBSGM7YUFBbEI7Ozs7QUFVSixvQkFBYyxJQUFkLEVBQXNEO1lBQWxDLGlFQUFXLHNCQUF1QjtZQUFmLGdFQUFVLGtCQUFLOzs7O0FBQ2xELGFBQUssS0FBTCxHQUFhLElBQWIsQ0FEa0Q7QUFFbEQsYUFBSyxRQUFMLEdBQWdCLFFBQWhCLENBRmtEO0FBR2xELGFBQUssTUFBTCxHQUFjLFFBQVEsS0FBUixJQUFpQixLQUFLLEtBQUwsQ0FIbUI7QUFJbEQsYUFBSyxPQUFMLEdBQWUsUUFBUSxNQUFSLElBQWtCLEtBQUssTUFBTCxDQUppQjtBQUtsRCxhQUFLLE9BQUwsR0FBZSxRQUFRLE1BQVIsSUFBa0IsWUFBRyxLQUFILENBQVMsVUFBVCxFQUFsQixDQUxtQztLQUF0RDs7OztpQ0FRVTtBQUNOLGlCQUFLLFVBQUwsR0FETTs7OzswQkFJSyxVQUFXO0FBQ3RCLGlCQUFLLFNBQUwsR0FBaUIsUUFBakIsQ0FEc0I7QUFFdEIsaUJBQUssUUFBTCxHQUFnQixZQUFHLE1BQUgsQ0FBVyxLQUFLLFNBQUwsQ0FBM0IsQ0FGc0I7OzRCQUtWO0FBQ1osbUJBQU8sS0FBSyxTQUFMLElBQWtCLE1BQWxCLENBREs7Ozs7NEJBSUY7QUFDVixtQkFBTyxLQUFLLE9BQUwsSUFBZ0IsR0FBaEIsQ0FERzs7Ozs0QkFJRDtBQUNULG1CQUFPLEtBQUssTUFBTCxJQUFlLEdBQWYsQ0FERTs7Ozs0QkFJQztBQUNWLG1CQUFPLEtBQUssT0FBTCxDQURHOzs7OzRCQUlDO0FBQ1gsbUJBQU8sRUFBUCxDQURXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7dUNDMUNBO0FBQ1gsZ0JBQUsscUJBQUUsT0FBRixDQUFXLEtBQUssS0FBTCxDQUFYLElBQTJCLEtBQUssS0FBTCxDQUFXLE1BQVgsRUFBb0I7QUFDaEQsb0JBQUsscUJBQUUsT0FBRixDQUFXLEtBQUssS0FBTCxDQUFZLENBQVosQ0FBWCxDQUFMLEVBQW9DO0FBQ2hDLHlDQUFFLElBQUYsQ0FBUSxLQUFLLEtBQUwsRUFBWSxVQUFVLE1BQVYsRUFBbUI7QUFDbkMsNkJBQUssT0FBTCxDQUFhLElBQWIsQ0FBbUIscUJBQVksTUFBWixDQUFuQixFQURtQztxQkFBbkIsQ0FBcEIsQ0FEZ0M7aUJBQXBDLE1BSU87QUFDSCx5QkFBSyxPQUFMLENBQWEsSUFBYixDQUFtQixxQkFBWSxLQUFLLEtBQUwsQ0FBL0IsRUFERztpQkFKUDthQURKLE1BUU8sSUFBSyxxQkFBRSxRQUFGLENBQVksS0FBSyxLQUFMLENBQWpCLEVBQWdDO0FBQ25DLHFCQUFLLE9BQUwsQ0FBYSxJQUFiLENBQW1CLHFCQUFZLENBQUUsS0FBSyxLQUFMLENBQWQsQ0FBbkIsRUFEbUM7YUFBaEM7Ozs7QUFLWCxvQkFBYyxJQUFkLEVBQXFCOzs7QUFDakIsYUFBSyxPQUFMLEdBQWUsRUFBZixDQURpQjtBQUVqQixhQUFLLElBQUwsR0FBWSxJQUFaLENBRmlCO0tBQXJCOzs7OytCQUtTLE9BQVE7QUFDYixnQkFBTSxRQUFRLEtBQUssT0FBTCxDQUFhLE1BQWIsSUFBdUIsU0FBUyxDQUFULEVBQWE7QUFDOUMsdUJBQU8sS0FBSyxPQUFMLENBQWMsS0FBZCxDQUFQLENBRDhDO2FBQWxEOztBQUlBLG1CQUFPLFNBQVAsQ0FMYTs7Ozs0QkFRTDtBQUNSLG1CQUFPLEtBQUssS0FBTCxDQURDOzswQkFJRCxNQUFPO0FBQ2QsaUJBQUssS0FBTCxHQUFhLElBQWIsQ0FEYztBQUVkLGlCQUFLLFlBQUwsR0FGYzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3lDQy9CQTtBQUNkLGlCQUFLLElBQUwsR0FBWSxZQUFHLEdBQUgsQ0FBTyxHQUFQLEdBQ1AsV0FETyxDQUNNLEtBQUssV0FBTCxDQUROLENBRVAsV0FGTyxDQUVNLEtBQUssV0FBTCxDQUZsQixDQURjOzs7OzRCQU1DO0FBQ2YsbUJBQU8sS0FBSyxNQUFMLEdBQWMsQ0FBZCxDQURROzs7OzRCQUlBO0FBQ2YsbUJBQU8sS0FBSyxNQUFMLENBRFE7Ozs7Ozs7Ozs7Ozs7OztRQ2ZQO0FBQVQsU0FBUyxlQUFULENBQTJCLENBQTNCLEVBQThCLENBQTlCLEVBQWtDO0FBQ3JDLFdBQU8sZUFBZSxDQUFmLEdBQW1CLEdBQW5CLEdBQXlCLENBQXpCLEdBQTZCLEdBQTdCLENBRDhCO0NBQWxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ0dLOzs7Ozs7Ozs7Ozs7Ozs7Ozt5Q0FHVTtBQUNkLGlCQUFLLElBQUwsR0FBWSxZQUFHLEdBQUgsQ0FBTyxHQUFQLEdBQ1AsV0FETyxDQUNNLENBRE4sRUFFUCxXQUZPLENBRU0sS0FBSyxNQUFMLENBRmxCLENBRGM7Ozs7QUFNbEIsb0JBQWMsSUFBZCxFQUFvQixRQUFwQixFQUErQjs7OzhGQUNwQixNQUFNLFdBRGM7O0FBRzNCLGNBQUssY0FBTCxHQUgyQjs7QUFLM0IsY0FBSyxJQUFMLEdBQVksWUFBRyxNQUFILENBQVUsR0FBVixFQUFaLENBTDJCOztLQUEvQjs7OztpQ0FRVTtBQUNOLHFGQURNOztBQUdOLGdCQUFJLE9BQU8sSUFBUCxDQUhFOztBQUtOLGlCQUFLLFVBQUwsR0FBa0IsS0FBSyxJQUFMLENBQVUsTUFBVixDQUFrQixHQUFsQixFQUNiLElBRGEsQ0FFVixXQUZVLEVBR1YsUUFBUSxlQUFSLENBQXlCLEtBQUssS0FBTCxHQUFhLENBQWIsRUFBZ0IsS0FBSyxNQUFMLEdBQWMsQ0FBZCxDQUgvQixDQUFsQixDQUxNOztBQVdOLGlCQUFLLFVBQUwsR0FBa0IsS0FBSyxVQUFMLENBQ2IsU0FEYSxDQUNGLE1BREUsRUFFVCxJQUZTLENBRUgsS0FBSyxJQUFMLENBQVcsS0FBSyxLQUFMLENBQVcsTUFBWCxDQUFtQixDQUFuQixFQUF1QixLQUF2QixDQUZSLEVBR2IsS0FIYSxHQUlULE1BSlMsQ0FJRCxHQUpDLEVBS0wsSUFMSyxDQUtDLE9BTEQsRUFLVSxLQUxWLENBQWxCLENBWE07O0FBa0JOLGlCQUFLLFVBQUwsQ0FBZ0IsTUFBaEIsQ0FBd0IsTUFBeEIsRUFDSyxJQURMLENBQ1csR0FEWCxFQUNnQixLQUFLLElBQUwsQ0FEaEIsQ0FFSyxLQUZMLENBRVksTUFGWixFQUVvQixVQUFFLEtBQUYsRUFBUyxLQUFULEVBQW9CO0FBQUUsdUJBQU8sS0FBSyxPQUFMLENBQWMsS0FBZCxDQUFQLENBQUY7YUFBcEIsQ0FGcEIsQ0FsQk07Ozs7NEJBd0JJO0FBQ1YsbUJBQU8sQ0FBRSxLQUFLLEdBQUwsQ0FBVSxLQUFLLEtBQUwsRUFBWSxLQUFLLE1BQUwsQ0FBdEIsR0FBc0MsS0FBSyxPQUFMLENBQXhDLEdBQXlELENBQXpELENBREc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3FDQ3pDQyxNQUFNLE9BQVE7QUFDekIsZ0JBQUssS0FBTCxFQUFhO0FBQ1QscUJBQUssS0FBTCxHQUFhLEtBQWIsQ0FEUzthQUFiLE1BRU87QUFDSCxvQkFBSyxxQkFBRSxPQUFGLENBQVcsSUFBWCxLQUFxQixLQUFLLE1BQUwsSUFBZSxxQkFBRSxRQUFGLENBQVksS0FBTSxDQUFOLENBQVosQ0FBcEMsRUFBOEQ7QUFDL0QseUJBQUssS0FBTCxHQUFhLEtBQUssS0FBTCxFQUFiLENBRCtEO2lCQUFuRTthQUhKOztBQVFBLGlCQUFLLElBQUwsR0FBWSxJQUFaLENBVHlCOzs7O0FBWTdCLHNCQUFzQztZQUF4Qiw2REFBTyxrQkFBaUI7WUFBYiw4REFBUSxrQkFBSzs7OztBQUNsQyxhQUFLLFlBQUwsQ0FBbUIsSUFBbkIsRUFBeUIsS0FBekIsRUFEa0M7S0FBdEM7Ozs7MEJBSVksT0FBUTtBQUNoQixpQkFBSyxNQUFMLEdBQWMsS0FBZCxDQURnQjs7Ozs0QkFJUjtBQUNSLG1CQUFPLEtBQUssS0FBTCxDQURDOzswQkFJRCxNQUFPO0FBQ2QsaUJBQUssS0FBTCxHQUFhLElBQWIsQ0FEYzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztRQ25CbEI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImltcG9ydCAqIGFzIGRkZCBmcm9tICcuLi9zcmMnO1xuXG5uZXcgZGRkLlBpZSggbmV3IGRkZC5EYXRhKCBbIDUwLCAyNSwgMTUsIDEwIF0gKSwgJy5jaGFydC1waWUnICkucmVuZGVyKCk7XG5uZXcgZGRkLkRvbnV0KCBuZXcgZGRkLkRhdGEoIFsgNTAsIDI1LCAxNSwgMTAgXSApLCAnLmNoYXJ0LWRvbnV0JyApLnJlbmRlcigpO1xuIiwiaW1wb3J0IGQzIGZyb20gJ2QzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuICAgIF9jcmVhdGVTdmcgKCkge1xuICAgICAgICBpZiAoICF0aGlzLl9zdmcgKSB7XG4gICAgICAgICAgICB0aGlzLl9zdmcgPSB0aGlzLl9lbGVtZW50LmFwcGVuZCggJ3N2ZycgKTtcblxuICAgICAgICAgICAgdGhpcy5fc3ZnLmF0dHIoIHtcbiAgICAgICAgICAgICAgICAnaGVpZ2h0JzogdGhpcy5oZWlnaHQsXG4gICAgICAgICAgICAgICAgJ3dpZHRoJzogdGhpcy53aWR0aFxuICAgICAgICAgICAgfSApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IgKCBkYXRhLCBzZWxlY3RvciA9ICdib2R5Jywgb3B0aW9ucyA9IHt9ICkge1xuICAgICAgICB0aGlzLl9kYXRhID0gZGF0YTtcbiAgICAgICAgdGhpcy5zZWxlY3RvciA9IHNlbGVjdG9yO1xuICAgICAgICB0aGlzLl93aWR0aCA9IG9wdGlvbnMud2lkdGggfHwgdGhpcy53aWR0aDtcbiAgICAgICAgdGhpcy5faGVpZ2h0ID0gb3B0aW9ucy5oZWlnaHQgfHwgdGhpcy5oZWlnaHQ7XG4gICAgICAgIHRoaXMuX2NvbG9ycyA9IG9wdGlvbnMuY29sb3JzIHx8IGQzLnNjYWxlLmNhdGVnb3J5MTAoKTtcbiAgICB9XG5cbiAgICByZW5kZXIgKCkge1xuICAgICAgICB0aGlzLl9jcmVhdGVTdmcoKTtcbiAgICB9XG5cbiAgICBzZXQgc2VsZWN0b3IgKCBzZWxlY3RvciApIHtcbiAgICAgICAgdGhpcy5fc2VsZWN0b3IgPSBzZWxlY3RvcjtcbiAgICAgICAgdGhpcy5fZWxlbWVudCA9IGQzLnNlbGVjdCggdGhpcy5fc2VsZWN0b3IgKTtcbiAgICB9XG5cbiAgICBnZXQgc2VsZWN0b3IgKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fc2VsZWN0b3IgfHwgJ2JvZHknO1xuICAgIH1cblxuICAgIGdldCBoZWlnaHQgKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faGVpZ2h0IHx8IDIwMDtcbiAgICB9XG5cbiAgICBnZXQgd2lkdGggKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fd2lkdGggfHwgMzAwO1xuICAgIH1cblxuICAgIGdldCBjb2xvcnMgKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fY29sb3JzO1xuICAgIH1cblxuICAgIGdldCBwYWRkaW5nICgpIHtcbiAgICAgICAgcmV0dXJuIDEwO1xuICAgIH1cbn1cbiIsImltcG9ydCBfIGZyb20gJ3VuZGVyc2NvcmUnO1xuXG5pbXBvcnQgU2VyaWVzIGZyb20gJy4vU2VyaWVzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuICAgIF9wcm9jZXNzRGF0YSgpIHtcbiAgICAgICAgaWYgKCBfLmlzQXJyYXkoIHRoaXMuX2RhdGEgKSAmJiB0aGlzLl9kYXRhLmxlbmd0aCApIHtcbiAgICAgICAgICAgIGlmICggXy5pc0FycmF5KCB0aGlzLl9kYXRhWyAwIF0gKSApIHtcbiAgICAgICAgICAgICAgICBfLmVhY2goIHRoaXMuX2RhdGEsIGZ1bmN0aW9uKCBzZXJpZXMgKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3Nlcmllcy5wdXNoKCBuZXcgU2VyaWVzKCBzZXJpZXMgKSApO1xuICAgICAgICAgICAgICAgIH0gKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fc2VyaWVzLnB1c2goIG5ldyBTZXJpZXMoIHRoaXMuX2RhdGEgKSApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKCBfLmlzTnVtYmVyKCB0aGlzLl9kYXRhICkgKSB7XG4gICAgICAgICAgICB0aGlzLl9zZXJpZXMucHVzaCggbmV3IFNlcmllcyggWyB0aGlzLl9kYXRhIF0gKSApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IgKCBkYXRhICkge1xuICAgICAgICB0aGlzLl9zZXJpZXMgPSBbXTtcbiAgICAgICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgICB9XG5cbiAgICBzZXJpZXMgKCBpbmRleCApIHtcbiAgICAgICAgaWYgICggaW5kZXggPCB0aGlzLl9zZXJpZXMubGVuZ3RoICYmIGluZGV4ID49IDAgKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fc2VyaWVzWyBpbmRleCBdO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBnZXQgZGF0YSAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRhO1xuICAgIH1cblxuICAgIHNldCBkYXRhICggZGF0YSApIHtcbiAgICAgICAgdGhpcy5fZGF0YSA9IGRhdGE7XG4gICAgICAgIHRoaXMuX3Byb2Nlc3NEYXRhKCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IGQzIGZyb20gJ2QzJztcblxuaW1wb3J0IFBpZSBmcm9tICcuL1BpZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUGllIHtcbiAgICBfaW5pdGlhbGl6ZUFyYyAoKSB7XG4gICAgICAgIHRoaXMuX2FyYyA9IGQzLnN2Zy5hcmMoKVxuICAgICAgICAgICAgLmlubmVyUmFkaXVzKCB0aGlzLmlubmVyUmFkaXVzIClcbiAgICAgICAgICAgIC5vdXRlclJhZGl1cyggdGhpcy5vdXRlclJhZGl1cyApO1xuICAgIH1cblxuICAgIGdldCBpbm5lclJhZGl1cyAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJhZGl1cyAvIDM7XG4gICAgfVxuXG4gICAgZ2V0IG91dGVyUmFkaXVzICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmFkaXVzO1xuICAgIH1cbn1cbiIsImV4cG9ydCBmdW5jdGlvbiB0cmFuc2xhdGVTdHJpbmcgKCB4LCB5ICkge1xuICAgIHJldHVybiAndHJhbnNsYXRlKCcgKyB4ICsgJywnICsgeSArICcpJztcbn1cbiIsImltcG9ydCBkMyBmcm9tICdkMyc7XG5cbmltcG9ydCBDaGFydCBmcm9tICcuL0NoYXJ0JztcbmltcG9ydCAqIGFzIEhlbHBlcnMgZnJvbSAnLi9IZWxwZXJzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDaGFydCB7XG4gICAgX2luaXRpYWxpemVBcmMgKCkge1xuICAgICAgICB0aGlzLl9hcmMgPSBkMy5zdmcuYXJjKClcbiAgICAgICAgICAgIC5pbm5lclJhZGl1cyggMCApXG4gICAgICAgICAgICAub3V0ZXJSYWRpdXMoIHRoaXMucmFkaXVzICk7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IgKCBkYXRhLCBzZWxlY3RvciApIHtcbiAgICAgICAgc3VwZXIoIGRhdGEsIHNlbGVjdG9yICk7XG5cbiAgICAgICAgdGhpcy5faW5pdGlhbGl6ZUFyYygpO1xuXG4gICAgICAgIHRoaXMuX3BpZSA9IGQzLmxheW91dC5waWUoKTtcbiAgICB9XG5cbiAgICByZW5kZXIgKCkge1xuICAgICAgICBzdXBlci5yZW5kZXIoKTtcblxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgdGhpcy5fbWFpbkdyb3VwID0gdGhpcy5fc3ZnLmFwcGVuZCggJ2cnIClcbiAgICAgICAgICAgIC5hdHRyKFxuICAgICAgICAgICAgICAgICd0cmFuc2Zvcm0nLFxuICAgICAgICAgICAgICAgIEhlbHBlcnMudHJhbnNsYXRlU3RyaW5nKCB0aGlzLndpZHRoIC8gMiwgdGhpcy5oZWlnaHQgLyAyIClcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgdGhpcy5fYXJjR3JvdXBzID0gdGhpcy5fbWFpbkdyb3VwXG4gICAgICAgICAgICAuc2VsZWN0QWxsKCAnLmFyYycgKVxuICAgICAgICAgICAgICAgIC5kYXRhKCB0aGlzLl9waWUoIHRoaXMuX2RhdGEuc2VyaWVzKCAwICkuX2RhdGEgKSApXG4gICAgICAgICAgICAuZW50ZXIoKVxuICAgICAgICAgICAgICAgIC5hcHBlbmQoICdnJyApXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKCAnY2xhc3MnLCAnYXJjJyApO1xuXG4gICAgICAgIHRoaXMuX2FyY0dyb3Vwcy5hcHBlbmQoICdwYXRoJyApXG4gICAgICAgICAgICAuYXR0ciggJ2QnLCB0aGlzLl9hcmMgKVxuICAgICAgICAgICAgLnN0eWxlKCAnZmlsbCcsICggZGF0dW0sIGluZGV4ICkgPT4geyByZXR1cm4gc2VsZi5fY29sb3JzKCBpbmRleCApOyB9ICk7XG5cbiAgICB9XG5cbiAgICBnZXQgcmFkaXVzICgpIHtcbiAgICAgICAgcmV0dXJuICggTWF0aC5taW4oIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0ICkgLSB0aGlzLnBhZGRpbmcgKSAvIDI7XG4gICAgfVxufVxuIiwiaW1wb3J0IF8gZnJvbSAndW5kZXJzY29yZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcbiAgICBfcHJvY2Vzc0RhdGEgKCBkYXRhLCBsYWJlbCApIHtcbiAgICAgICAgaWYgKCBsYWJlbCApIHtcbiAgICAgICAgICAgIHRoaXMubGFiZWwgPSBsYWJlbDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICggXy5pc0FycmF5KCBkYXRhICkgJiYgZGF0YS5sZW5ndGggJiYgXy5pc1N0cmluZyggZGF0YVsgMCBdICkgKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5sYWJlbCA9IGRhdGEuc2hpZnQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IgKCBkYXRhID0gW10sIGxhYmVsID0gJycgKSB7XG4gICAgICAgIHRoaXMuX3Byb2Nlc3NEYXRhKCBkYXRhLCBsYWJlbCApO1xuICAgIH1cblxuICAgIHNldCBsYWJlbCAoIGxhYmVsICkge1xuICAgICAgICB0aGlzLl9sYWJlbCA9IGxhYmVsO1xuICAgIH1cblxuICAgIGdldCBkYXRhICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGE7XG4gICAgfVxuXG4gICAgc2V0IGRhdGEgKCBkYXRhICkge1xuICAgICAgICB0aGlzLl9kYXRhID0gZGF0YTtcbiAgICB9XG59XG4iLCJpbXBvcnQgQ2hhcnQgZnJvbSAnLi9DaGFydCc7XG5pbXBvcnQgRGF0YSBmcm9tICcuL0RhdGEnO1xuaW1wb3J0IERvbnV0IGZyb20gJy4vRG9udXQnO1xuaW1wb3J0IEhlbHBlcnMgZnJvbSAnLi9IZWxwZXJzJztcbmltcG9ydCBTZXJpZXMgZnJvbSAnLi9TZXJpZXMnO1xuaW1wb3J0IFBpZSBmcm9tICcuL1BpZSc7XG5cbmV4cG9ydCB7XG4gICAgQ2hhcnQsXG4gICAgRGF0YSxcbiAgICBEb251dCxcbiAgICBIZWxwZXJzLFxuICAgIFNlcmllcyxcbiAgICBQaWVcbn07XG4iXX0=
