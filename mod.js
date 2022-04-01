// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=function(){try{return r({},"x",{}),!0}catch(r){return!1}},t=Object.defineProperty,n=Object.prototype,o=n.toString,a=n.__defineGetter__,u=n.__defineSetter__,i=n.__lookupGetter__,l=n.__lookupSetter__;var c=t,f=function(r,e,t){var c,f,_,p;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((f="value"in t)&&(i.call(r,e)||l.call(r,e)?(c=r.__proto__,r.__proto__=n,delete r[e],r[e]=t.value,r.__proto__=c):r[e]=t.value),_="get"in t,p="set"in t,f&&(_||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return _&&a&&a.call(r,e,t.get),p&&u&&u.call(r,e,t.set),r},_=e()?c:f;var p=function(r){return r!=r};var v=function(r){return Math.abs(r)},b=p,y=v;var d=p,s=v;var j=function(r,e,t,n,o){var a,u,i,l,c,f,_,p;if(u=t<0?(1-r)*t:0,i=o<0?-o:0,a=0,r<=0)return n[i]=a,n[i+o]=0,n;if(1===r||0===t)return b(e[u])?(n[i]=a,n[i+o]=0,n):(n[i]=e[u],n[i+o]=1,n);for(f=0,_=0,p=0;p<r;p++)l=e[u],!1===b(l)&&(c=a+l,y(a)>=y(l)?f+=a-c+l:f+=l-c+a,a=c,_+=1),u+=t;return n[i]=a+f,n[i+o]=_,n},g=function(r,e,t,n,o,a,u){var i,l,c,f,_,p,v,b;if(l=n,c=u,i=0,r<=0)return o[c]=i,o[c+a]=0,o;if(1===r||0===t)return d(e[l])?(o[c]=i,o[c+a]=0,o):(o[c]=e[l],o[c+a]=1,o);for(p=0,v=0,b=0;b<r;b++)f=e[l],!1===d(f)&&(_=i+f,s(i)>=s(f)?p+=i-_+f:p+=f-_+i,i=_,v+=1),l+=t;return o[c]=i+p,o[c+a]=v,o};(function(r,e,t){_(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})})(j,"ndarray",g);var m=j;export{m as default,g as ndarray};
//# sourceMappingURL=mod.js.map
