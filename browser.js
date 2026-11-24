// Copyright (c) 2026 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,t;e=this,t=function(){"use strict";var e=/[\uDC00-\uDFFF]/,t=/[\uD800-\uDBFF]/;return function(o,n,f){var u,i,r,d,l,s;for(u=o.length,s=0;s<u;s++)d=s,l=i=o[s],s<u-1&&t.test(i)&&(r=o[s+1],e.test(r)&&(l+=r,s+=1)),n.call(f,l,d,o);return o}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).forEachCodePoint=t();
//# sourceMappingURL=browser.js.map
