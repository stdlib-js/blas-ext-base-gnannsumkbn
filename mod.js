// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r=function(r){return r!=r};var n=function(r){return Math.abs(r)};function t(t,u,a,e,f){var i,o,c,v,s,b,d,h;if(o=a<0?(1-t)*a:0,c=f<0?-f:0,i=0,t<=0)return e[c]=i,e[c+f]=0,e;if(1===t||0===a)return r(u[o])?(e[c]=i,e[c+f]=0,e):(e[c]=u[o],e[c+f]=1,e);for(b=0,d=0,h=0;h<t;h++)v=u[o],!1===r(v)&&(s=i+v,n(i)>=n(v)?b+=i-s+v:b+=v-s+i,i=s,d+=1),o+=a;return e[c]=i+b,e[c+f]=d,e}export{t as default};
//# sourceMappingURL=mod.js.map
