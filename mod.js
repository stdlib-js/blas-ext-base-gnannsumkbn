// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function r(r){return r!=r}function n(r){return Math.abs(r)}function t(t,u,e,f,a){var i,o,c,s,b,d,h,l;if(o=e<0?(1-t)*e:0,c=a<0?-a:0,i=0,t<=0)return f[c]=i,f[c+a]=0,f;if(1===t||0===e)return r(u[o])?(f[c]=i,f[c+a]=0,f):(f[c]=u[o],f[c+a]=1,f);for(d=0,h=0,l=0;l<t;l++)!1===r(s=u[o])&&(b=i+s,n(i)>=n(s)?d+=i-b+s:d+=s-b+i,i=b,h+=1),o+=e;return f[c]=i+d,f[c+a]=h,f}export{t as default};
//# sourceMappingURL=mod.js.map
