"use strict";var j=function(e,i){return function(){return i||e((i={exports:{}}).exports,i),i.exports}};var A=j(function(V,z){
var h=require('@stdlib/math-base-assert-is-nan/dist'),w=require('@stdlib/math-base-special-abs/dist');function J(e,i,b,k,r,s,a){var n,l,g,q,v,m,c,x,y,p,P;if(l=i.data,n=r.data,g=i.accessors[0],q=r.accessors[1],v=0,m=k,b===0)return c=g(l,m),h(c)?(q(n,a,v),q(n,a+s,0),r):(q(n,a,c*e),q(n,a+s,e),r);for(y=0,p=0,P=0;P<e;P++)c=g(l,m),h(c)===!1&&(x=v+c,w(v)>=w(c)?y+=v-x+c:y+=c-x+v,v=x,p+=1),m+=b;return q(n,a,v+y),q(n,a+s,p),r}z.exports=J
});var R=j(function(W,E){
var B=require('@stdlib/array-base-arraylike2object/dist'),C=require('@stdlib/math-base-assert-is-nan/dist'),D=require('@stdlib/math-base-special-abs/dist'),K=A();function L(e,i,b,k,r,s,a){var n,l,g,q,v,m,c,x,y;if(n=0,e<=0)return r[a]=n,r[a+s]=0,r;if(g=B(i),q=B(r),g.accessorProtocol||q.accessorProtocol)return K(e,g,b,k,q,s,a),r;if(l=k,b===0)return C(i[l])?(r[a]=n,r[a+s]=0,r):(r[a]=i[l]*e,r[a+s]=e,r);for(c=0,x=0,y=0;y<e;y++)v=i[l],C(v)===!1&&(m=n+v,D(n)>=D(v)?c+=n-m+v:c+=v-m+n,n=m,x+=1),l+=b;return r[a]=n+c,r[a+s]=x,r}E.exports=L
});var H=j(function(Y,G){
var F=require('@stdlib/strided-base-stride2offset/dist'),M=R();function Q(e,i,b,k,r){var s=F(e,b),a=F(2,r);return M(e,i,b,s,k,r,a)}G.exports=Q
});var S=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),I=H(),T=R();S(I,"ndarray",T);module.exports=I;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
