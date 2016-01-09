"use strict";

//returns a fn to use ES6 Multiline Template Strings for Query Creation
module.exports = function(escaperFn) {
    return function(parts) {
        let props = [];

        for (var _len = arguments.length, _key = 1; _key < _len; _key++) {
            //values[_key - 1] = arguments[_key];
            props.push(arguments[_key]);
        }

        let text = parts.reduce(function (prev, curr, i) {
            return prev + escaperFn(props[i - 1]) + curr;
        });

        return text;
    };
};