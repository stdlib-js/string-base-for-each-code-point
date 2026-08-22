"use strict";var _=function(a,e){return function(){try{return e||a((e={exports:{}}).exports,e),e.exports}catch(i){throw (e=0, i)}};};var R=_(function(s,n){
var f=/[\uDC00-\uDFFF]/,h=/[\uD800-\uDBFF]/;function o(a,e,i){var t,u,v,F,c,r;for(t=a.length,r=0;r<t;r++)u=a[r],F=r,c=u,r<t-1&&h.test(u)&&(v=a[r+1],f.test(v)&&(c+=v,r+=1)),e.call(i,c,F,a);return a}n.exports=o
});var E=R();module.exports=E;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
