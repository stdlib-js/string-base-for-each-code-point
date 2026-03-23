"use strict";var _=function(a,e){return function(){return e||a((e={exports:{}}).exports,e),e.exports}};var n=_(function(s,F){
var f=/[\uDC00-\uDFFF]/,h=/[\uD800-\uDBFF]/;function o(a,e,R){var i,t,u,c,v,r;for(i=a.length,r=0;r<i;r++)t=a[r],c=r,v=t,r<i-1&&h.test(t)&&(u=a[r+1],f.test(u)&&(v+=u,r+=1)),e.call(R,v,c,a);return a}F.exports=o
});var E=n();module.exports=E;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
