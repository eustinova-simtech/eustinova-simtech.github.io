(self.webpackChunkpwajet=self.webpackChunkpwajet||[]).push([[364],{95596:function(e,n,t){"use strict";t.d(n,{Z:function(){return T}});var o=t(56796),r=t(12261),i=t(76255),u=t(63059),c=(t(30914),t(73602)),a=t(59685),l=t(9320),d=t(76686),s=t(21791),f=t(44833),p=t(23645),v=t(20537),h=t(32205),m=t(50114),b=t(56391),y=t(61563);function E(e,n){n?e.setAttribute("aria-hidden","true"):e.removeAttribute("aria-hidden")}function g(e){return parseInt(window.getComputedStyle(e)["padding-right"],10)||0}function k(e,n,t){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],r=arguments.length>4?arguments[4]:void 0,i=[n,t].concat((0,m.Z)(o)),u=["TEMPLATE","SCRIPT","STYLE"];[].forEach.call(e.children,(function(e){1===e.nodeType&&-1===i.indexOf(e)&&-1===u.indexOf(e.tagName)&&E(e,r)}))}function Z(e,n){var t=-1;return e.some((function(e,o){return!!n(e)&&(t=o,!0)})),t}var w=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.modals=[],this.containers=[]}return(0,h.Z)(e,[{key:"add",value:function(e,n){var t=this.modals.indexOf(e);if(-1!==t)return t;t=this.modals.length,this.modals.push(e),e.modalRef&&E(e.modalRef,!1);var o=function(e){var n=[];return[].forEach.call(e.children,(function(e){e.getAttribute&&"true"===e.getAttribute("aria-hidden")&&n.push(e)})),n}(n);k(n,e.mountNode,e.modalRef,o,!0);var r=Z(this.containers,(function(e){return e.container===n}));return-1!==r?(this.containers[r].modals.push(e),t):(this.containers.push({modals:[e],container:n,restore:null,hiddenSiblingNodes:o}),t)}},{key:"mount",value:function(e,n){var t=Z(this.containers,(function(n){return-1!==n.modals.indexOf(e)})),o=this.containers[t];o.restore||(o.restore=function(e,n){var t,o=[],r=[],i=e.container;if(!n.disableScrollLock){if(function(e){var n=(0,l.Z)(e);return n.body===e?(0,y.Z)(n).innerWidth>n.documentElement.clientWidth:e.scrollHeight>e.clientHeight}(i)){var u=(0,b.Z)();o.push({value:i.style.paddingRight,key:"padding-right",el:i}),i.style["padding-right"]="".concat(g(i)+u,"px"),t=(0,l.Z)(i).querySelectorAll(".mui-fixed"),[].forEach.call(t,(function(e){r.push(e.style.paddingRight),e.style.paddingRight="".concat(g(e)+u,"px")}))}var c=i.parentElement,a="HTML"===c.nodeName&&"scroll"===window.getComputedStyle(c)["overflow-y"]?c:i;o.push({value:a.style.overflow,key:"overflow",el:a}),a.style.overflow="hidden"}return function(){t&&[].forEach.call(t,(function(e,n){r[n]?e.style.paddingRight=r[n]:e.style.removeProperty("padding-right")})),o.forEach((function(e){var n=e.value,t=e.el,o=e.key;n?t.style.setProperty(o,n):t.style.removeProperty(o)}))}}(o,n))}},{key:"remove",value:function(e){var n=this.modals.indexOf(e);if(-1===n)return n;var t=Z(this.containers,(function(n){return-1!==n.modals.indexOf(e)})),o=this.containers[t];if(o.modals.splice(o.modals.indexOf(e),1),this.modals.splice(n,1),0===o.modals.length)o.restore&&o.restore(),e.modalRef&&E(e.modalRef,!0),k(o.container,e.mountNode,e.modalRef,o.hiddenSiblingNodes,!1),this.containers.splice(t,1);else{var r=o.modals[o.modals.length-1];r.modalRef&&E(r.modalRef,!1)}return n}},{key:"isTopModal",value:function(e){return this.modals.length>0&&this.modals[this.modals.length-1]===e}}]),e}(),R=function(e){var n=e.children,t=e.disableAutoFocus,o=void 0!==t&&t,r=e.disableEnforceFocus,c=void 0!==r&&r,a=e.disableRestoreFocus,d=void 0!==a&&a,s=e.getDoc,p=e.isEnabled,v=e.open,h=i.useRef(),m=i.useRef(null),b=i.useRef(null),y=i.useRef(),E=i.useRef(null),g=i.useCallback((function(e){E.current=u.findDOMNode(e)}),[]),k=(0,f.Z)(n.ref,g),Z=i.useRef();return i.useEffect((function(){Z.current=v}),[v]),!Z.current&&v&&"undefined"!=typeof window&&(y.current=s().activeElement),i.useEffect((function(){if(v){var e=(0,l.Z)(E.current);o||!E.current||E.current.contains(e.activeElement)||(E.current.hasAttribute("tabIndex")||E.current.setAttribute("tabIndex",-1),E.current.focus());var n=function(){null!==E.current&&(e.hasFocus()&&!c&&p()&&!h.current?E.current&&!E.current.contains(e.activeElement)&&E.current.focus():h.current=!1)},t=function(n){!c&&p()&&9===n.keyCode&&e.activeElement===E.current&&(h.current=!0,n.shiftKey?b.current.focus():m.current.focus())};e.addEventListener("focus",n,!0),e.addEventListener("keydown",t,!0);var r=setInterval((function(){n()}),50);return function(){clearInterval(r),e.removeEventListener("focus",n,!0),e.removeEventListener("keydown",t,!0),d||(y.current&&y.current.focus&&y.current.focus(),y.current=null)}}}),[o,c,d,p,v]),i.createElement(i.Fragment,null,i.createElement("div",{tabIndex:0,ref:m,"data-test":"sentinelStart"}),i.cloneElement(n,{ref:k}),i.createElement("div",{tabIndex:0,ref:b,"data-test":"sentinelEnd"}))},x={root:{zIndex:-1,position:"fixed",right:0,bottom:0,top:0,left:0,backgroundColor:"rgba(0, 0, 0, 0.5)",WebkitTapHighlightColor:"transparent"},invisible:{backgroundColor:"transparent"}},C=i.forwardRef((function(e,n){var t=e.invisible,u=void 0!==t&&t,c=e.open,a=(0,o.Z)(e,["invisible","open"]);return c?i.createElement("div",(0,r.Z)({"aria-hidden":!0,ref:n},a,{style:(0,r.Z)({},x.root,u?x.invisible:{},a.style)})):null})),I=new w,T=i.forwardRef((function(e,n){var t=(0,c.Z)(),h=(0,a.Z)({name:"MuiModal",props:(0,r.Z)({},e),theme:t}),m=h.BackdropComponent,b=void 0===m?C:m,y=h.BackdropProps,g=h.children,k=h.closeAfterTransition,Z=void 0!==k&&k,w=h.container,x=h.disableAutoFocus,T=void 0!==x&&x,A=h.disableBackdropClick,F=void 0!==A&&A,P=h.disableEnforceFocus,S=void 0!==P&&P,D=h.disableEscapeKeyDown,L=void 0!==D&&D,M=h.disablePortal,O=void 0!==M&&M,B=h.disableRestoreFocus,N=void 0!==B&&B,K=h.disableScrollLock,W=void 0!==K&&K,z=h.hideBackdrop,H=void 0!==z&&z,V=h.keepMounted,j=void 0!==V&&V,q=h.manager,Y=void 0===q?I:q,G=h.onBackdropClick,J=h.onClose,Q=h.onEscapeKeyDown,U=h.onRendered,X=h.open,$=(0,o.Z)(h,["BackdropComponent","BackdropProps","children","closeAfterTransition","container","disableAutoFocus","disableBackdropClick","disableEnforceFocus","disableEscapeKeyDown","disablePortal","disableRestoreFocus","disableScrollLock","hideBackdrop","keepMounted","manager","onBackdropClick","onClose","onEscapeKeyDown","onRendered","open"]),_=i.useState(!0),ee=_[0],ne=_[1],te=i.useRef({}),oe=i.useRef(null),re=i.useRef(null),ie=(0,f.Z)(re,n),ue=function(e){return!!e.children&&e.children.props.hasOwnProperty("in")}(h),ce=function(){return(0,l.Z)(oe.current)},ae=function(){return te.current.modalRef=re.current,te.current.mountNode=oe.current,te.current},le=function(){Y.mount(ae(),{disableScrollLock:W}),re.current.scrollTop=0},de=(0,p.Z)((function(){var e=function(e){return e="function"==typeof e?e():e,u.findDOMNode(e)}(w)||ce().body;Y.add(ae(),e),re.current&&le()})),se=i.useCallback((function(){return Y.isTopModal(ae())}),[Y]),fe=(0,p.Z)((function(e){oe.current=e,e&&(U&&U(),X&&se()?le():E(re.current,!0))})),pe=i.useCallback((function(){Y.remove(ae())}),[Y]);if(i.useEffect((function(){return function(){pe()}}),[pe]),i.useEffect((function(){X?de():ue&&Z||pe()}),[X,pe,ue,Z,de]),!j&&!X&&(!ue||ee))return null;var ve=function(e){return{root:{position:"fixed",zIndex:e.zIndex.modal,right:0,bottom:0,top:0,left:0},hidden:{visibility:"hidden"}}}(t||{zIndex:v.Z}),he={};return void 0===g.props.tabIndex&&(he.tabIndex=g.props.tabIndex||"-1"),ue&&(he.onEnter=(0,s.Z)((function(){ne(!1)}),g.props.onEnter),he.onExited=(0,s.Z)((function(){ne(!0),Z&&pe()}),g.props.onExited)),i.createElement(d.Z,{ref:fe,container:w,disablePortal:O},i.createElement("div",(0,r.Z)({ref:ie,onKeyDown:function(e){"Escape"===e.key&&se()&&(Q&&Q(e),L||(e.stopPropagation(),J&&J(e,"escapeKeyDown")))},role:"presentation"},$,{style:(0,r.Z)({},ve.root,!X&&ee?ve.hidden:{},$.style)}),H?null:i.createElement(b,(0,r.Z)({open:X,onClick:function(e){e.target===e.currentTarget&&(G&&G(e),!F&&J&&J(e,"backdropClick"))}},y)),i.createElement(R,{disableEnforceFocus:S,disableAutoFocus:T,disableRestoreFocus:N,getDoc:ce,isEnabled:se,open:X},i.cloneElement(g,he))))}))},76686:function(e,n,t){"use strict";var o=t(76255),r=t(63059),i=(t(30914),t(71034)),u=t(44833),c="undefined"!=typeof window?o.useLayoutEffect:o.useEffect,a=o.forwardRef((function(e,n){var t=e.children,a=e.container,l=e.disablePortal,d=void 0!==l&&l,s=e.onRendered,f=o.useState(null),p=f[0],v=f[1],h=(0,u.Z)(o.isValidElement(t)?t.ref:null,n);return c((function(){d||v(function(e){return e="function"==typeof e?e():e,r.findDOMNode(e)}(a)||document.body)}),[a,d]),c((function(){if(p&&!d)return(0,i.Z)(n,p),function(){(0,i.Z)(n,null)}}),[n,p,d]),c((function(){s&&(p||d)&&s()}),[s,p,d]),d?o.isValidElement(t)?o.cloneElement(t,{ref:h}):t:p?r.createPortal(t,p):p}));n.Z=a},65909:function(e,n,t){"use strict";t.d(n,{Z:function(){return i}});var o=t(73602),r=(t(76255),t(97289));function i(){return(0,o.Z)()||r.Z}},66417:function(e,n,t){"use strict";t.d(n,{n:function(){return o},C:function(){return r}});var o=function(e){return e.scrollTop};function r(e,n){var t=e.timeout,o=e.style,r=void 0===o?{}:o;return{duration:r.transitionDuration||"number"==typeof t?t:t[n.mode]||0,delay:r.transitionDelay}}},56391:function(e,n,t){"use strict";function o(){var e=document.createElement("div");e.style.width="99px",e.style.height="99px",e.style.position="absolute",e.style.top="-9999px",e.style.overflow="scroll",document.body.appendChild(e);var n=e.offsetWidth-e.clientWidth;return document.body.removeChild(e),n}t.d(n,{Z:function(){return o}})},61563:function(e,n,t){"use strict";t.d(n,{Z:function(){return r}});var o=t(9320);function r(e){return(0,o.Z)(e).defaultView||window}}}]);
//# sourceMappingURL=364.0fc9b7c4cf7b123d5165.chunk.js.map