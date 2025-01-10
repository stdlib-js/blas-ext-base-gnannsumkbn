"use strict";var g=function(e,a){return function(){return a||e((a={exports:{}}).exports,a),a.exports}};var x=g(function(H,h){
var k=require('@stdlib/math-base-assert-is-nan/dist'),R=require('@stdlib/math-base-special-abs/dist');function B(e,a,c,b,r,v,n){var i,s,q,m,y,l,p;if(i=0,e<=0)return r[n]=i,r[n+v]=0,r;if(s=b,c===0)return k(a[s])?(r[n]=i,r[n+v]=0,r):(r[n]=a[s]*e,r[n+v]=e,r);for(y=0,l=0,p=0;p<e;p++)q=a[s],k(q)===!1&&(m=i+q,R(i)>=R(q)?y+=i-m+q:y+=q-m+i,i=m,l+=1),s+=c;return r[n]=i+y,r[n+v]=l,r}h.exports=B
});var z=g(function(I,w){
var j=require('@stdlib/strided-base-stride2offset/dist'),C=x();function D(e,a,c,b,r){var v=j(e,c),n=j(2,r);return C(e,a,c,v,b,r,n)}w.exports=D
});var E=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),A=z(),F=x();E(A,"ndarray",F);module.exports=A;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
