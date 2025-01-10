// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function n(n,r){return r>0?0:(1-n)*r}function r(n){return n!=n}function t(n){return Math.abs(n)}function u(u,e,f,i,o){return function(n,u,e,f,i,o,a){var c,s,b,d,h,l,p;if(c=0,n<=0)return i[a]=c,i[a+o]=0,i;if(s=f,0===e)return r(u[s])?(i[a]=c,i[a+o]=0,i):(i[a]=u[s]*n,i[a+o]=n,i);for(h=0,l=0,p=0;p<n;p++)!1===r(b=u[s])&&(d=c+b,t(c)>=t(b)?h+=c-d+b:h+=b-d+c,c=d,l+=1),s+=e;return i[a]=c+h,i[a+o]=l,i}(u,e,f,n(u,f),i,o,n(2,o))}export{u as default};
//# sourceMappingURL=mod.js.map
