!function(){function t(r){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(r)}function r(t,r){for(var e=0;e<r.length;e++){var o=r[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,n(o.key),o)}}function n(r){var n=function(r,n){if("object"!=t(r)||!r)return r;var e=r[Symbol.toPrimitive];if(void 0!==e){var o=e.call(r,n||"default");if("object"!=t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(r)}(r,"string");return"symbol"==t(n)?n:String(n)}function e(r,n,e){return n=u(n),function(r,n){if(n&&("object"===t(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return i(r)}(r,o()?Reflect.construct(n,e||[],u(r).constructor):n.apply(r,e))}function o(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(o=function(){return!!t})()}function u(t){return u=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},u(t)}function i(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function c(t,r){return c=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,r){return t.__proto__=r,t},c(t,r)}function f(t,r){return function(t){if(Array.isArray(t))return t}(t)||function(t,r){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var e,o,u,i,c=[],f=!0,l=!1;try{if(u=(n=n.call(t)).next,0===r){if(Object(n)!==n)return;f=!1}else for(;!(f=(e=u.call(n)).done)&&(c.push(e.value),c.length!==r);f=!0);}catch(t){l=!0,o=t}finally{try{if(!f&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(l)throw o}}return c}}(t,r)||function(t,r){if(!t)return;if("string"==typeof t)return l(t,r);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return l(t,r)}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(t,r){(null==r||r>t.length)&&(r=t.length);for(var n=0,e=new Array(r);n<r;n++)e[n]=t[n];return e}System.register(["./svelte-legacy-AYgTH4zW.js"],(function(t,n){"use strict";var o,u,l,a,y,s,p,b,m;return{setters:[function(t){o=t.S,u=t.i,l=t.b,a=t.k,y=t.u,s=t.l,p=t.m,b=t.h,m=t.t}],execute:function(){function n(t){var r,n=t[1].default,e=a(n,t,t[0],null);return{c:function(){e&&e.c()},m:function(t,n){e&&e.m(t,n),r=!0},p:function(t,o){var u=f(o,1)[0];e&&e.p&&(!r||1&u)&&y(e,n,t,t[0],r?p(n,t[0],u,null):s(t[0]),null)},i:function(t){r||(b(e,t),r=!0)},o:function(t){m(e,t),r=!1},d:function(t){e&&e.d(t)}}}function v(t,r,n){var e=r.$$slots,o=void 0===e?{}:e,u=r.$$scope;return t.$$set=function(t){"$$scope"in t&&n(0,u=t.$$scope)},[u,o]}t("default",function(t){function o(t){var r;return function(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}(this,o),r=e(this,o),u(i(r),t,v,n,l,{}),r}return function(t,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(r&&r.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),r&&c(t,r)}(o,t),f=o,a&&r(f.prototype,a),y&&r(f,y),Object.defineProperty(f,"prototype",{writable:!1}),f;var f,a,y}(o))}}}))}();
