"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnimationDuration = void 0;
var gsap_1 = require("gsap");
var AnimationDuration;
(function (AnimationDuration) {
    AnimationDuration[AnimationDuration["VeryFast"] = 0.1] = "VeryFast";
    AnimationDuration[AnimationDuration["Fast"] = 0.3] = "Fast";
    AnimationDuration[AnimationDuration["Medium"] = 0.5] = "Medium";
    AnimationDuration[AnimationDuration["Slow"] = 0.8] = "Slow";
})(AnimationDuration || (exports.AnimationDuration = AnimationDuration = {}));
var SLIDE_DISTANCE = '50px';
function animate(ref, from, to) {
    if (ref.current) {
        return gsap_1.default.fromTo(ref.current, from, to);
    }
    return null;
}
function slideIn(ref, start, options) {
    return slide(ref, start, 'in', options);
}
function slideOut(ref, start, options) {
    return slide(ref, start, 'out', options);
}
function slide(ref, start, direction, options) {
    var duration = (options === null || options === void 0 ? void 0 : options.duration) || AnimationDuration.Medium;
    var distance = (options === null || options === void 0 ? void 0 : options.distance) || SLIDE_DISTANCE;
    var fade = (options === null || options === void 0 ? void 0 : options.fade) || false;
    var from = {};
    var to = {};
    switch (start) {
        case 'bottom':
            {
                from = { y: distance };
                to = { y: 0 };
                break;
            }
            ;
        case 'top': {
            from = { y: "-".concat(distance) };
            to = { y: 0 };
            break;
        }
        case 'left': {
            from = { left: "-".concat(distance) };
            to = { left: 0 };
            break;
        }
        case 'right': {
            from = { x: "-".concat(distance) };
            to = { x: 0 };
            break;
        }
    }
    if (fade) {
        from.opacity = 0;
        to.opacity = 1;
    }
    if (direction === 'in') {
        to.duration = duration;
        return animate(ref, from, to);
    }
    else {
        from.duration = duration;
        return animate(ref, to, from);
    }
}
function darkenBgIn(ref, options) {
    darkenBg(ref, 'in', options);
}
function darkenBgOut(ref, options) {
    darkenBg(ref, 'out', options);
}
function darkenBg(ref, direction, options) {
    var duration = (options === null || options === void 0 ? void 0 : options.duration) || AnimationDuration.Medium;
    var from = {};
    var to = {};
    from = { background: 'rgba(0, 0, 0, 0)' };
    to = { background: 'rgba(0, 0, 0, 0.7)' };
    if (direction === 'in') {
        to.duration = duration;
        return animate(ref, from, to);
    }
    else {
        from.duration = duration;
        return animate(ref, to, from);
    }
}
exports.default = {
    slideIn: slideIn,
    slideOut: slideOut,
    darkenBgIn: darkenBgIn,
    darkenBgOut: darkenBgOut
};
