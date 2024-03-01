"use strict";var g=function(c,i){return function(){return i||c((i={exports:{}}).exports,i),i.exports}};var h=g(function(H,R){
var k=require('@stdlib/math-base-assert-is-nan/dist'),x=require('@stdlib/math-base-special-abs/dist');function C(c,i,b,n,a){var e,l,r,f,v,s,q,m;if(b<0?l=(1-c)*b:l=0,a<0?r=-a:r=0,e=0,c<=0)return n[r]=e,n[r+a]=0,n;if(c===1||b===0)return k(i[l])?(n[r]=e,n[r+a]=0,n):(n[r]=i[l],n[r+a]=1,n);for(s=0,q=0,m=0;m<c;m++)f=i[l],k(f)===!1&&(v=e+f,x(e)>=x(f)?s+=e-v+f:s+=f-v+e,e=v,q+=1),l+=b;return n[r]=e+s,n[r+a]=q,n}R.exports=C
});var A=g(function(I,z){
var j=require('@stdlib/math-base-assert-is-nan/dist'),w=require('@stdlib/math-base-special-abs/dist');function D(c,i,b,n,a,e,l){var r,f,v,s,q,m,p,y;if(f=n,v=l,r=0,c<=0)return a[v]=r,a[v+e]=0,a;if(c===1||b===0)return j(i[f])?(a[v]=r,a[v+e]=0,a):(a[v]=i[f],a[v+e]=1,a);for(m=0,p=0,y=0;y<c;y++)s=i[f],j(s)===!1&&(q=r+s,w(r)>=w(s)?m+=r-q+s:m+=s-q+r,r=q,p+=1),f+=b;return a[v]=r+m,a[v+e]=p,a}z.exports=D
});var E=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),B=h(),F=A();E(B,"ndarray",F);module.exports=B;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
