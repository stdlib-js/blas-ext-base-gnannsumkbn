// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var n,e;n=this,e=function(){"use strict";function n(n,e){return e>0?0:(1-n)*e}function e(n){return n!=n}function t(n){return Math.abs(n)}return function(r,u,f,o,i){return function(n,r,u,f,o,i,d){var s,c,a,l,p,b,h;if(s=0,n<=0)return o[d]=s,o[d+i]=0,o;if(c=f,0===u)return e(r[c])?(o[d]=s,o[d+i]=0,o):(o[d]=r[c]*n,o[d+i]=n,o);for(p=0,b=0,h=0;h<n;h++)!1===e(a=r[c])&&(l=s+a,t(s)>=t(a)?p+=s-l+a:p+=a-l+s,s=l,b+=1),c+=u;return o[d]=s+p,o[d+i]=b,o}(r,u,f,n(r,f),o,i,n(2,i))}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(n="undefined"!=typeof globalThis?globalThis:n||self).gnannsumkbn=e();
//# sourceMappingURL=browser.js.map
