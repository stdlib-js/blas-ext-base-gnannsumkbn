// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.1.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-abs@v0.1.0-esm/index.mjs";function e(e,r,i,n,a){var m,d,f,o,h,j,l,p;if(d=i<0?(1-e)*i:0,f=a<0?-a:0,m=0,e<=0)return n[f]=m,n[f+a]=0,n;if(1===e||0===i)return s(r[d])?(n[f]=m,n[f+a]=0,n):(n[f]=r[d],n[f+a]=1,n);for(j=0,l=0,p=0;p<e;p++)o=r[d],!1===s(o)&&(h=m+o,t(m)>=t(o)?j+=m-h+o:j+=o-h+m,m=h,l+=1),d+=i;return n[f]=m+j,n[f+a]=l,n}export{e as default};
//# sourceMappingURL=index.mjs.map
