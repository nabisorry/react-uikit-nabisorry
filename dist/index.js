import { jsx, css, keyframes } from '@emotion/core';
import { useState } from 'react';

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(n);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

var MINIMUM_RIPPLE_SIZE = 100;
function useRipple(style) {
  var _useState = useState([]),
      _useState2 = _slicedToArray(_useState, 2),
      ripples = _useState2[0],
      setRipples = _useState2[1]; // ts 수정해야함


  var showRipple = function showRipple(event, animationName) {
    var _event$currentTarget$ = event.currentTarget.getBoundingClientRect(),
        left = _event$currentTarget$.left,
        top = _event$currentTarget$.top;

    var x = event.clientX - left;
    var y = event.clientY - top;
    var rippleSize = Math.min(event.currentTarget.clientHeight, event.currentTarget.clientWidth, MINIMUM_RIPPLE_SIZE);
    var newRipple = {
      key: event.timeStamp,
      style: _objectSpread2({
        display: "block",
        width: rippleSize,
        height: rippleSize,
        position: "absolute",
        left: x - rippleSize / 2,
        top: y - rippleSize / 2,
        borderRadius: "50%",
        opacity: 0.4,
        pointerEvents: "none",
        animationName: animationName,
        animationDuration: "0.7s"
      }, style)
    };
    console.log(newRipple); // ts 수정해야 함

    setRipples(function (state) {
      return [].concat(_toConsumableArray(state), [newRipple]);
    });
  }; // ts 수정 any 천국


  var ripplesArray = ripples.map(function (currentRipple) {
    var handleAnimationEnd = function handleAnimationEnd() {
      setRipples(function (state) {
        return state.filter(function (previousRipple) {
          return previousRipple.key !== currentRipple.key;
        });
      });
    };

    return jsx("span", Object.assign({}, currentRipple, {
      onAnimationEnd: handleAnimationEnd
    }));
  });
  return [showRipple, ripplesArray];
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  width: 178px;\n  height: 36px;\n  font-size: 21px;\n  font-weight: normal;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.71;\n  letter-spacing: -0.16px;\n  color: #ffffff;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  width: 186px;\n  height: 81px;\n  border-radius: 20px;\n  box-shadow: 3px 3px 3px 0 rgba(137, 137, 137, 0.08);\n  background-color: #fecba3;\n  border: 0;\n  outline: 0;\n  margin-left: auto;\n  margin-right: auto;\n  overflow: hidden;\n  animation: ", ";\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  from {\n    opacity:0.4            \n  }\n  to {\n    transform: scale(15);\n    opacity: 0;\n  } \n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: inline-block;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var Button = function Button(_ref) {
  var buttonText = _ref.buttonText,
      width = _ref.width,
      height = _ref.height,
      backgroundColor = _ref.backgroundColor,
      backgroundCircleColor = _ref.backgroundCircleColor,
      color = _ref.color;

  var _useRipple = useRipple({
    backgroundColor: backgroundCircleColor ? backgroundCircleColor : "#AE8968"
  }),
      _useRipple2 = _slicedToArray(_useRipple, 2),
      addRipple = _useRipple2[0],
      ripples = _useRipple2[1];

  var onClick = function onClick(e) {
    var animationName = rippleAnimation.name;
    addRipple(e, animationName);
  };

  var customButtonStyles = {
    width: width,
    height: height,
    backgroundColor: backgroundColor
  };
  var customTextStyles = {
    color: color
  };
  return jsx("div", {
    css: buttonBackground
  }, jsx("button", {
    css: [buttonStyle, _objectSpread2({}, customButtonStyles)],
    onClick: onClick
  }, jsx("p", {
    css: [buttonTextStyle, _objectSpread2({}, customTextStyles)]
  }, buttonText), ripples));
};

Button.defaultProps = {
  buttonText: "문구를 입력하세요."
};
var buttonBackground = css(_templateObject());
var rippleAnimation = keyframes(_templateObject2());
var buttonStyle = css(_templateObject3(), rippleAnimation);
var buttonTextStyle = css(_templateObject4());

export { Button };
