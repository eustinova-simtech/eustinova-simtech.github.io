(self.webpackChunkpwajet=self.webpackChunkpwajet||[]).push([[6747,4709,4991],{4368:function(e,r,t){"use strict";var n=t(37703),a=t(53846),s=t(4903);r.Z=(0,n.$j)((function(e,r){var t=r.type;return{layout:e.Layouts.layouts.find((function(e){return e.type===t})),language:e.Ui.language}}),(function(e){return{getLayout:function(r,t){return e(s.G0v(r,t))},setLayoutIsVisible:function(r){return e(s.jSD(r,!0))},setLayoutIsInvisible:function(r){return e(s.jSD(r,!1))}}}))(a.Z)},65366:function(e,r,t){"use strict";t.d(r,{Z:function(){return o}});var n=t(37703),a=t(67294),s=t(4903),o=(0,n.$j)((function(){return{}}),(function(e){return{setPage:function(r){return e((0,s.YAs)(r))}}}))((function(e){var r=e.reset,t=e.title,n=e.page,s=e.setPage;return a.useEffect((function(){n&&s(r?void 0:t)}),[r,t,n,s]),null}))},77922:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return x}});var n=t(37703),a=t(59713),s=t.n(a),o=t(67294),i=t(5977),c=t(67100),l=t(4368),u=t(86513),p=t(67154),m=t.n(p),f=t(86933),d=t(10682),g=t(31555),P=t(34051),_=t(73727),E=t(74888),b=t(54709),v=t(74991),w=t(77844),h=t(40395),y=(0,h.defineMessages)({email:{id:"app.form.labels.email",defaultMessage:"Email"},title:{id:"app.screens.restore-password.title",defaultMessage:"Trouble Logging In?"},description:{id:"app.screens.restore-password.description",defaultMessage:"Enter your email and we`ll send you a link to get back into your account."},successInstruction:{id:"app.screens.restore-password.success-instruction",defaultMessage:"Please check {email} for a link to reset your password."},loginFailed:{id:"app.screens.restore-password.login-failed",defaultMessage:"Recover password token is invalid. Try to create another one."},login:{id:"app.screens.restore-password.login",defaultMessage:"Login"},registration:{id:"app.screens.restore-password.registration",defaultMessage:"Registration"}}),Z=t(50928),k="auth/restore-password/RestorePassword";function O(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function R(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?O(Object(t),!0).forEach((function(r){s()(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):O(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var N=o.lazy((function(){return Promise.all([t.e(3090),t.e(4431),t.e(110),t.e(3918),t.e(7178),t.e(9916),t.e(7152)]).then(t.bind(t,69916))})),L=t(4903),j=(0,n.$j)((function(e){return{isRequesting:e.Auth.restorePasswordForm.isRequesting,isSuccess:e.Auth.restorePasswordForm.isSuccess,email:e.Auth.restorePasswordForm.email}}),(function(e){return{requestRestorePassword:function(r){return e(L.PIr(r))}}}))((function(e){var r=e.isRequesting,t=e.requestRestorePassword,n=e.isSuccess,a=e.email,s=e.isFailed,i=(0,c.Z)(),l=(0,Z.Z)({sections:[{id:"restore-password",fields:[{name:"email",label:i.formatMessage(R({},y.email)),type:E.Z.TEXT,isEnabled:!0,isRequired:!0}]}]});return o.createElement(o.Suspense,{fallback:null,__source:{parentProps:e,name:k}},o.createElement(d.Z,{className:"b-restore-password",__source:{parentProps:e,name:k}},o.createElement(P.Z,{__source:{parentProps:e,name:k}},o.createElement(g.Z,{__source:{parentProps:e,name:k}},o.createElement("h1",{className:"b-restore-password__title",__source:{parentProps:e,name:k}},o.createElement(f.Z,m()({},y.title,{__source:{parentProps:e,name:k}}))),o.createElement(b.default,{__source:{parentProps:e,name:k}}),s&&o.createElement(o.Fragment,null,o.createElement(v.default,{warning:!0,__source:{parentProps:e,name:k}},o.createElement(f.Z,m()({},y.loginFailed,{__source:{parentProps:e,name:k}}))),o.createElement(b.default,{__source:{parentProps:e,name:k}})),n?o.createElement(f.Z,m()({},y.successInstruction,{values:{email:a},__source:{parentProps:e,name:k}})):o.createElement(o.Fragment,null,o.createElement(f.Z,m()({},y.description,{__source:{parentProps:e,name:k}})),o.createElement(N,{onSubmit:function(e){return t(e.email)},isRequesting:r,schema:l,__source:{parentProps:e,name:k}})),o.createElement(b.default,{__source:{parentProps:e,name:k}}),o.createElement("div",{className:"b-restore-password__sign-links",__source:{parentProps:e,name:k}},o.createElement(_.Link,{to:(0,w.createLoginLinkUrl)(),__source:{parentProps:e,name:k}},o.createElement(f.Z,m()({},y.login,{__source:{parentProps:e,name:k}}))),o.createElement("span",{__source:{parentProps:e,name:k}}," | "),o.createElement(_.Link,{to:(0,w.createRegistrationLinkUrl)(),__source:{parentProps:e,name:k}},o.createElement(f.Z,m()({},y.registration,{__source:{parentProps:e,name:k}}))))))))})),C=t(80689),D=t(65366),S=t(77550),F=(0,h.defineMessages)({title:{id:"app.screens.restore-password.title",defaultMessage:"Trouble Logging In?"}}),q="screens/restore-password/RestorePasswordScreen";function M(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function U(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?M(Object(t),!0).forEach((function(r){s()(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):M(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var x=(0,n.$j)((function(e){return{isLoginRequesting:e.Auth.isLoginRequesting,isLogged:!!e.Auth.token,isRestorePasswordFailed:e.Auth.isRestorePasswordFailed}}),(function(e){return{requestLoginWithRestoreToken:function(r){return e(L.kEp(r))}}}))((function(e){var r=e.isLoginRequesting,t=e.requestLoginWithRestoreToken,n=e.isRestorePasswordFailed,a=e.isLogged,s=(0,c.Z)(),p=(0,i.useLocation)(),m=new URLSearchParams(p.search).get("ekey");return o.useEffect((function(){m&&t(m)}),[m,t]),m&&n?o.createElement(i.Redirect,{to:(0,w.createRestorePasswordLinkUrl)(),__source:{parentProps:null,name:q}}):a?o.createElement(i.Redirect,{to:(0,w.createProfileLinkUrl)(),__source:{parentProps:null,name:q}}):o.createElement(o.Fragment,null,o.createElement(D.Z,{page:!0,title:s.formatMessage(U({},F.title)),__source:{parentProps:e,name:q}}),o.createElement(l.Z,{type:u.Z.RESTORE_PASSWORD,__source:{parentProps:e,name:q}},m?r&&o.createElement(S.default,{__source:{parentProps:e,name:q}}):o.createElement(o.Fragment,null,o.createElement(j,{isFailed:n,__source:{parentProps:e,name:q}}))),o.createElement(C.Z,{currentUrl:(0,w.createRestorePasswordLinkUrl)(),title:s.formatMessage(U({},F.title)),__source:{parentProps:e,name:q}}))}))},54709:function(e,r,t){"use strict";t.r(r);var n=t(67294),a=t(43806),s="subcomponents/divider/Divider";r.default=function(e){var r=e.text,t=e.className;return r?n.createElement("div",{className:"row",__source:{parentProps:e,name:s}},n.createElement("div",{className:"col",__source:{parentProps:e,name:s}},n.createElement("hr",{__source:{parentProps:e,name:s}})),n.createElement("div",{className:"col-auto",__source:{parentProps:e,name:s}},r),n.createElement("div",{className:"col",__source:{parentProps:e,name:s}},n.createElement("hr",{__source:{parentProps:e,name:s}}))):n.createElement("hr",{className:(0,a.Z)("b-divider",t),__source:{parentProps:e,name:s}})}},74991:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return q}});var n,a=t(67294),s=t(22122),o=t(19756),i=t(94184),c=t.n(i),l=t(21927),u=t(96895),p=t(76792),m=t(30204),f=t(12666),d=t(34509),g=((n={})[f.d0]="show",n[f.cn]="show",n),P=a.forwardRef((function(e,r){var t=e.className,n=e.children,i=(0,o.Z)(e,["className","children"]),l=(0,a.useCallback)((function(e){(0,d.Z)(e),i.onEnter&&i.onEnter(e)}),[i]);return a.createElement(f.ZP,(0,s.Z)({ref:r,addEndListener:m.Z},i,{onEnter:l}),(function(e,r){return a.cloneElement(n,(0,s.Z)({},r,{className:c()("fade",t,n.props.className,g[e])}))}))}));P.defaultProps={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1},P.displayName="Fade";var _=P,E=t(45697),b=t.n(E),v={label:b().string.isRequired,onClick:b().func},w=a.forwardRef((function(e,r){var t=e.label,n=e.onClick,i=e.className,l=(0,o.Z)(e,["label","onClick","className"]);return a.createElement("button",(0,s.Z)({ref:r,type:"button",className:c()("close",i),onClick:n},l),a.createElement("span",{"aria-hidden":"true"},"×"),a.createElement("span",{className:"sr-only"},t))}));w.displayName="CloseButton",w.propTypes=v,w.defaultProps={label:"Close"};var h=w,y=t(44680),Z=t(16833);function k(e){return!e||"#"===e.trim()}var O=a.forwardRef((function(e,r){var t=e.as,n=void 0===t?"a":t,i=e.disabled,c=e.onKeyDown,l=(0,o.Z)(e,["as","disabled","onKeyDown"]),u=function(e){var r=l.href,t=l.onClick;(i||k(r))&&e.preventDefault(),i?e.stopPropagation():t&&t(e)};return k(l.href)&&(l.role=l.role||"button",l.href=l.href||"#"),i&&(l.tabIndex=-1,l["aria-disabled"]=!0),a.createElement(n,(0,s.Z)({ref:r},l,{onClick:u,onKeyDown:(0,Z.Z)((function(e){" "===e.key&&(e.preventDefault(),u(e))}),c)}))}));O.displayName="SafeAnchor";var R=O,N=("h4",a.forwardRef((function(e,r){return a.createElement("div",(0,s.Z)({},e,{ref:r,className:c()(e.className,"h4")}))})));N.displayName="DivStyledAsH4";var L=(0,y.Z)("alert-heading",{Component:N}),j=(0,y.Z)("alert-link",{Component:R}),C={show:!0,transition:_,closeLabel:"Close alert"},D=a.forwardRef((function(e,r){var t=(0,l.Ch)(e,{show:"onClose"}),n=t.bsPrefix,i=t.show,m=t.closeLabel,f=t.className,d=t.children,g=t.variant,P=t.onClose,E=t.dismissible,b=t.transition,v=(0,o.Z)(t,["bsPrefix","show","closeLabel","className","children","variant","onClose","dismissible","transition"]),w=(0,p.vE)(n,"alert"),y=(0,u.Z)((function(e){P&&P(!1,e)})),Z=!0===b?_:b,k=a.createElement("div",(0,s.Z)({role:"alert"},Z?v:void 0,{ref:r,className:c()(f,w,g&&w+"-"+g,E&&w+"-dismissible")}),E&&a.createElement(h,{onClick:y,label:m}),d);return Z?a.createElement(Z,(0,s.Z)({unmountOnExit:!0},v,{ref:void 0,in:i}),k):i?k:null}));D.displayName="Alert",D.defaultProps=C,D.Link=j,D.Heading=L;var S=D,F=t(43806),q=function(e){var r=e.info,t=e.error,n=e.success,s=e.warning;return a.createElement(S,{className:(0,F.Z)("b-notifier",function(){switch(!0){case t:return"alert-danger";case r:return"alert-info";case n:return"alert-success";case s:return"alert-warning";default:return}}()),__source:{parentProps:e,name:"subcomponents/notifier/Notifier"}},e.children)}},80689:function(e,r,t){"use strict";t.d(r,{Z:function(){return c}});var n=t(37703),a=t(67294),s=t(15482),o=t(77844),i="subcomponents/seo-meta/SeoMeta",c=(0,n.$j)((function(e){return{currentLanguageCode:e.Ui.language,languages:e.Ui.languages}}),(function(){return{}}))((function(e){var r=e.currentUrl,t=e.currentLanguageCode,n=e.languages,c=e.title,l=e.metaDescription,u=e.children;if(!n||!n.length)return null;var p=n.filter((function(e){return e.code!==t}));return a.createElement(a.Fragment,null,a.createElement(s.ql,{__source:{parentProps:e,name:i}},p.map((function(e){return a.createElement("link",{key:e.code,rel:"alternate",hrefLang:e.code,href:(0,o.getUrlWithNewLanguage)(r,e.code),__source:{parentProps:null,name:i}})})),a.createElement("link",{rel:"canonical",href:r,__source:{parentProps:e,name:i}}),a.createElement("title",{__source:{parentProps:e,name:i}},c),a.createElement("meta",{name:"description",content:l,__source:{parentProps:e,name:i}})),u)}))},31555:function(e,r,t){"use strict";var n=t(22122),a=t(19756),s=t(94184),o=t.n(s),i=t(67294),c=t(76792),l=["xl","lg","md","sm","xs"],u=i.forwardRef((function(e,r){var t=e.bsPrefix,s=e.className,u=e.as,p=void 0===u?"div":u,m=(0,a.Z)(e,["bsPrefix","className","as"]),f=(0,c.vE)(t,"col"),d=[],g=[];return l.forEach((function(e){var r,t,n,a=m[e];if(delete m[e],"object"==typeof a&&null!=a){var s=a.span;r=void 0===s||s,t=a.offset,n=a.order}else r=a;var o="xs"!==e?"-"+e:"";r&&d.push(!0===r?""+f+o:""+f+o+"-"+r),null!=n&&g.push("order"+o+"-"+n),null!=t&&g.push("offset"+o+"-"+t)})),d.length||d.push(f),i.createElement(p,(0,n.Z)({},m,{ref:r,className:o().apply(void 0,[s].concat(d,g))}))}));u.displayName="Col",r.Z=u}}]);
//# sourceMappingURL=RestorePassword.1c475d33e71b7b2ad9ca.chunk.js.map