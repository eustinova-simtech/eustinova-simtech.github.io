(self.webpackChunkpwajet=self.webpackChunkpwajet||[]).push([[2269],{12269:function(n,t,e){"use strict";e.r(t),e.d(t,{default:function(){return c}});var r=e(76255),i=e(57467),o=e(12261),a=e(56796);function s(n,t){var e=t.disableHysteresis,r=void 0!==e&&e,i=t.threshold,o=void 0===i?100:i,a=t.target,s=n.current;return a&&(n.current=void 0!==a.pageYOffset?a.pageYOffset:a.scrollTop),!(!r&&void 0!==s&&n.current<s)&&n.current>o}var u="undefined"!=typeof window?window:null,c=function(n){var t=n.children,e=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=n.getTrigger,e=void 0===t?s:t,i=n.target,c=void 0===i?u:i,f=(0,a.Z)(n,["getTrigger","target"]),l=r.useRef(),d=r.useState((function(){return e(l,f)})),p=d[0],v=d[1];return r.useEffect((function(){var n=function(){v(e(l,(0,o.Z)({target:c},f)))};return n(),c.addEventListener("scroll",n),function(){c.removeEventListener("scroll",n)}}),[c,e,JSON.stringify(f)]),p}();return r.createElement(i.Z,{appear:!1,direction:"down",in:!e,__source:{parentProps:n,name:"subcomponents/hide-on-scroll/HideOnScroll"}},t)}},57467:function(n,t,e){"use strict";var r=e(12261),i=e(56796),o=e(76255),a=(e(30914),e(63059)),s=e(60837),u=e(28667),c=e(44833),f=e(65909),l=e(31328),d=e(66417);function p(n,t){var e=function(n,t){var e,r=t.getBoundingClientRect();if(t.fakeTransform)e=t.fakeTransform;else{var i=window.getComputedStyle(t);e=i.getPropertyValue("-webkit-transform")||i.getPropertyValue("transform")}var o=0,a=0;if(e&&"none"!==e&&"string"==typeof e){var s=e.split("(")[1].split(")")[0].split(",");o=parseInt(s[4],10),a=parseInt(s[5],10)}return"left"===n?"translateX(".concat(window.innerWidth,"px) translateX(").concat(o-r.left,"px)"):"right"===n?"translateX(-".concat(r.left+r.width-o,"px)"):"up"===n?"translateY(".concat(window.innerHeight,"px) translateY(").concat(a-r.top,"px)"):"translateY(-".concat(r.top+r.height-a,"px)")}(n,t);e&&(t.style.webkitTransform=e,t.style.transform=e)}var v={enter:l.x9.enteringScreen,exit:l.x9.leavingScreen},g=o.forwardRef((function(n,t){var e=n.children,l=n.direction,g=void 0===l?"down":l,m=n.in,w=n.onEnter,y=n.onEntered,E=n.onEntering,h=n.onExit,x=n.onExited,Z=n.onExiting,b=n.style,k=n.timeout,T=void 0===k?v:k,C=n.TransitionComponent,O=void 0===C?u.ZP:C,S=(0,i.Z)(n,["children","direction","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"]),R=(0,f.Z)(),Y=o.useRef(null),L=o.useCallback((function(n){Y.current=a.findDOMNode(n)}),[]),P=(0,c.Z)(e.ref,L),D=(0,c.Z)(P,t),H=function(n){return function(t){n&&(void 0===t?n(Y.current):n(Y.current,t))}},X=H((function(n,t){p(g,n),(0,d.n)(n),w&&w(n,t)})),j=H((function(n,t){var e=(0,d.C)({timeout:T,style:b},{mode:"enter"});n.style.webkitTransition=R.transitions.create("-webkit-transform",(0,r.Z)({},e,{easing:R.transitions.easing.easeOut})),n.style.transition=R.transitions.create("transform",(0,r.Z)({},e,{easing:R.transitions.easing.easeOut})),n.style.webkitTransform="none",n.style.transform="none",E&&E(n,t)})),z=H(y),I=H(Z),N=H((function(n){var t=(0,d.C)({timeout:T,style:b},{mode:"exit"});n.style.webkitTransition=R.transitions.create("-webkit-transform",(0,r.Z)({},t,{easing:R.transitions.easing.sharp})),n.style.transition=R.transitions.create("transform",(0,r.Z)({},t,{easing:R.transitions.easing.sharp})),p(g,n),h&&h(n)})),V=H((function(n){n.style.webkitTransition="",n.style.transition="",x&&x(n)})),_=o.useCallback((function(){Y.current&&p(g,Y.current)}),[g]);return o.useEffect((function(){if(!m&&"down"!==g&&"right"!==g){var n=(0,s.Z)((function(){Y.current&&p(g,Y.current)}));return window.addEventListener("resize",n),function(){n.clear(),window.removeEventListener("resize",n)}}}),[g,m]),o.useEffect((function(){m||_()}),[m,_]),o.createElement(O,(0,r.Z)({nodeRef:Y,onEnter:X,onEntered:z,onEntering:j,onExit:N,onExited:V,onExiting:I,appear:!0,in:m,timeout:T},S),(function(n,t){return o.cloneElement(e,(0,r.Z)({ref:D,style:(0,r.Z)({visibility:"exited"!==n||m?void 0:"hidden"},b,e.props.style)},t))}))}));t.Z=g},65909:function(n,t,e){"use strict";e.d(t,{Z:function(){return o}});var r=e(73602),i=(e(76255),e(97289));function o(){return(0,r.Z)()||i.Z}},66417:function(n,t,e){"use strict";e.d(t,{n:function(){return r},C:function(){return i}});var r=function(n){return n.scrollTop};function i(n,t){var e=n.timeout,r=n.style,i=void 0===r?{}:r;return{duration:i.transitionDuration||"number"==typeof e?e:e[t.mode]||0,delay:i.transitionDelay}}}}]);
//# sourceMappingURL=2269.3d8a2c564e258d3a952c.chunk.js.map