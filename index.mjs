// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
var t=/[\uDC00-\uDFFF]/,u=/[\uD800-\uDBFF]/;function e(e,r,a){var F,l,n,D,f,o;for(F=e.length,o=0;o<F;o++)D=o,f=l=e[o],o<F-1&&u.test(l)&&(n=e[o+1],t.test(n)&&(f+=n,o+=1)),r.call(a,f,D,e);return e}export{e as default};
//# sourceMappingURL=index.mjs.map
