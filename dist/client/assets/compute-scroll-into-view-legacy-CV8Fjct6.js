!function(){function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}System.register([],(function(e,n){"use strict";return{execute:function(){var n=function(e){return"object"==t(e)&&null!=e&&1===e.nodeType},o=function(t,e){return(!e||"hidden"!==t)&&"visible"!==t&&"clip"!==t},r=function(t,e){if(t.clientHeight<t.scrollHeight||t.clientWidth<t.scrollWidth){var n=getComputedStyle(t,null);return o(n.overflowY,e)||o(n.overflowX,e)||function(t){var e=function(t){if(!t.ownerDocument||!t.ownerDocument.defaultView)return null;try{return t.ownerDocument.defaultView.frameElement}catch(t){return null}}(t);return!!e&&(e.clientHeight<t.scrollHeight||e.clientWidth<t.scrollWidth)}(t)}return!1},i=function(t,e,n,o,r,i,l,u){return i<t&&l>e||i>t&&l<e?0:i<=t&&u<=n||l>=e&&u>=n?i-t-o:l>e&&u<n||i<t&&u>n?l-e+r:0},l=function(t){var e=t.parentElement;return null==e?t.getRootNode().host||null:e};e("r",(function(t,e){var o,u,f,c;if("undefined"==typeof document)return[];var d=e.scrollMode,s=e.block,a=e.inline,h=e.boundary,m=e.skipOverflowHiddenElements,p="function"==typeof h?h:function(t){return t!==h};if(!n(t))throw new TypeError("Invalid target");for(var g=document.scrollingElement||document.documentElement,y=[],w=t;n(w)&&p(w);){if((w=l(w))===g){y.push(w);break}null!=w&&w===document.body&&r(w)&&!r(document.documentElement)||null!=w&&r(w,m)&&y.push(w)}for(var b=null!=(u=null==(o=window.visualViewport)?void 0:o.width)?u:innerWidth,v=null!=(c=null==(f=window.visualViewport)?void 0:f.height)?c:innerHeight,W=window,H=W.scrollX,M=W.scrollY,S=t.getBoundingClientRect(),E=S.height,x=S.width,C=S.top,I=S.right,R=S.bottom,T=S.left,B=function(t){var e=window.getComputedStyle(t);return{top:parseFloat(e.scrollMarginTop)||0,right:parseFloat(e.scrollMarginRight)||0,bottom:parseFloat(e.scrollMarginBottom)||0,left:parseFloat(e.scrollMarginLeft)||0}}(t),F=B.top,V=B.right,k=B.bottom,D=B.left,L="start"===s||"nearest"===s?C-F:"end"===s?R+k:C+E/2-F+k,X="center"===a?T+x/2-D+V:"end"===a?I+V:T-D,Y=[],j=0;j<y.length;j++){var N=y[j],O=N.getBoundingClientRect(),q=O.height,z=O.width,A=O.top,G=O.right,J=O.bottom,K=O.left;if("if-needed"===d&&C>=0&&T>=0&&R<=v&&I<=b&&C>=A&&R<=J&&T>=K&&I<=G)return Y;var P=getComputedStyle(N),Q=parseInt(P.borderLeftWidth,10),U=parseInt(P.borderTopWidth,10),Z=parseInt(P.borderRightWidth,10),$=parseInt(P.borderBottomWidth,10),_=0,tt=0,et="offsetWidth"in N?N.offsetWidth-N.clientWidth-Q-Z:0,nt="offsetHeight"in N?N.offsetHeight-N.clientHeight-U-$:0,ot="offsetWidth"in N?0===N.offsetWidth?0:z/N.offsetWidth:0,rt="offsetHeight"in N?0===N.offsetHeight?0:q/N.offsetHeight:0;if(g===N)_="start"===s?L:"end"===s?L-v:"nearest"===s?i(M,M+v,v,U,$,M+L,M+L+E,E):L-v/2,tt="start"===a?X:"center"===a?X-b/2:"end"===a?X-b:i(H,H+b,b,Q,Z,H+X,H+X+x,x),_=Math.max(0,_+M),tt=Math.max(0,tt+H);else{_="start"===s?L-A-U:"end"===s?L-J+$+nt:"nearest"===s?i(A,J,q,U,$+nt,L,L+E,E):L-(A+q/2)+nt/2,tt="start"===a?X-K-Q:"center"===a?X-(K+z/2)+et/2:"end"===a?X-G+Z+et:i(K,G,z,Q,Z+et,X,X+x,x);var it=N.scrollLeft,lt=N.scrollTop;L+=lt-(_=0===rt?0:Math.max(0,Math.min(lt+_/rt,N.scrollHeight-q/rt+nt))),X+=it-(tt=0===ot?0:Math.max(0,Math.min(it+tt/ot,N.scrollWidth-z/ot+et)))}Y.push({el:N,top:_,left:tt})}return Y}))}}}))}();