"use strict";var j=function(i,v){return function(){try{return v||i((v={exports:{}}).exports,v),v.exports}catch(s){throw (v=0, s)}};};var A=j(function(V,z){
var h=require('@stdlib/math-base-assert-is-nan/dist'),w=require('@stdlib/math-base-special-abs/dist');function J(i,v,s,k,r,q,a){var n,l,g,b,e,m,c,x,y,p,P;if(l=v.data,n=r.data,g=v.accessors[0],b=r.accessors[1],e=0,m=k,s===0)return c=g(l,m),h(c)?(b(n,a,e),b(n,a+q,0),r):(b(n,a,c*i),b(n,a+q,i),r);for(y=0,p=0,P=0;P<i;P++)c=g(l,m),h(c)===!1&&(x=e+c,w(e)>=w(c)?y+=e-x+c:y+=c-x+e,e=x,p+=1),m+=s;return b(n,a,e+y),b(n,a+q,p),r}z.exports=J
});var R=j(function(W,E){
var B=require('@stdlib/array-base-arraylike2object/dist'),C=require('@stdlib/math-base-assert-is-nan/dist'),D=require('@stdlib/math-base-special-abs/dist'),K=A();function L(i,v,s,k,r,q,a){var n,l,g,b,e,m,c,x,y;if(n=0,i<=0)return r[a]=n,r[a+q]=0,r;if(g=B(v),b=B(r),g.accessorProtocol||b.accessorProtocol)return K(i,g,s,k,b,q,a),r;if(l=k,s===0)return C(v[l])?(r[a]=n,r[a+q]=0,r):(r[a]=v[l]*i,r[a+q]=i,r);for(c=0,x=0,y=0;y<i;y++)e=v[l],C(e)===!1&&(m=n+e,D(n)>=D(e)?c+=n-m+e:c+=e-m+n,n=m,x+=1),l+=s;return r[a]=n+c,r[a+q]=x,r}E.exports=L
});var H=j(function(Y,G){
var F=require('@stdlib/strided-base-stride2offset/dist'),M=R();function Q(i,v,s,k,r){var q=F(i,s),a=F(2,r);return M(i,v,s,q,k,r,a)}G.exports=Q
});var S=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),I=H(),T=R();S(I,"ndarray",T);module.exports=I;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
