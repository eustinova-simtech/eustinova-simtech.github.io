(self.webpackChunkpwajet=self.webpackChunkpwajet||[]).push([[8253],{4368:function(e,n,t){"use strict";var r=t(37703),u=t(53846),o=t(4903);n.Z=(0,r.$j)((function(e,n){var t=n.type;return{layout:e.Layouts.layouts.find((function(e){return e.type===t})),language:e.Ui.language}}),(function(e){return{getLayout:function(n,t){return e(o.G0v(n,t))},setLayoutIsVisible:function(n){return e(o.jSD(n,!0))},setLayoutIsInvisible:function(n){return e(o.jSD(n,!1))}}}))(u.Z)},65366:function(e,n,t){"use strict";t.d(n,{Z:function(){return a}});var r=t(37703),u=t(67294),o=t(4903),a=(0,r.$j)((function(){return{}}),(function(e){return{setPage:function(n){return e((0,o.YAs)(n))}}}))((function(e){var n=e.reset,t=e.title,r=e.page,o=e.setPage;return u.useEffect((function(){r&&o(n?void 0:t)}),[n,t,r,o]),null}))},80689:function(e,n,t){"use strict";t.d(n,{Z:function(){return c}});var r=t(37703),u=t(67294),o=t(15482),a=t(77844),s="subcomponents/seo-meta/SeoMeta",c=(0,r.$j)((function(e){return{currentLanguageCode:e.Ui.language,languages:e.Ui.languages}}),(function(){return{}}))((function(e){var n=e.currentUrl,t=e.currentLanguageCode,r=e.languages,c=e.title,i=e.metaDescription,l=e.children;if(!r||!r.length)return null;var _=r.filter((function(e){return e.code!==t}));return u.createElement(u.Fragment,null,u.createElement(o.ql,{__source:{parentProps:e,name:s}},_.map((function(e){return u.createElement("link",{key:e.code,rel:"alternate",hrefLang:e.code,href:(0,a.getUrlWithNewLanguage)(n,e.code),__source:{parentProps:null,name:s}})})),u.createElement("link",{rel:"canonical",href:n,__source:{parentProps:e,name:s}}),u.createElement("title",{__source:{parentProps:e,name:s}},c),u.createElement("meta",{name:"description",content:i,__source:{parentProps:e,name:s}})),l)}))},78253:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return A}});var r=t(59713),u=t.n(r),o=t(67294),a=t(10682),s=t(34051),c=t(31555),i=t(67100),l=t(4368),_=t(37703),p=t(67154),f=t.n(p),E=t(40395),P=(0,E.defineMessages)({title:{id:"app.components.vendor-signup.title",defaultMessage:"Apply for a vendor account"},submitLabel:{id:"app.components.vendor-signup.submit-label",defaultMessage:"Apply"}}),m=t(86933),R=o.lazy((function(){return Promise.all([t.e(3090),t.e(4431),t.e(110),t.e(3918),t.e(9631),t.e(7178),t.e(9916),t.e(9842)]).then(t.bind(t,69916))})),O=t(21898),g=(0,_.$j)((function(e){return{schema:e.ApplyForVendor.form.schema,error:e.ApplyForVendor.signup.error,isRequesting:e.ApplyForVendor.signup.isRequesting}}),(function(e){return{requestVendorSignupForm:function(){return e((0,O.M6)())},requestVendorSignup:function(n){return e((0,O.JF)(n))}}}))((function(e){var n=e.schema,t=e.error,r=e.requestVendorSignup,u=e.requestVendorSignupForm,a=e.isRequesting;return o.useEffect((function(){u()}),[u]),n?o.createElement("div",{className:"b-vendor-signup",__source:{parentProps:e,name:""}},o.createElement("h2",{className:"b-vendor-signup__title",__source:{parentProps:e,name:""}},o.createElement(m.Z,f()({},P.title,{__source:{parentProps:e,name:""}}))),o.createElement(o.Suspense,{fallback:null,__source:{parentProps:e,name:""}},o.createElement(R,{isRequesting:a,schema:n,onSubmit:function(e){r(e)},error:t?t.message:"",__source:{parentProps:e,name:""}}))):null})),S=t(80689),d=t(65366),U=(0,E.defineMessages)({title:{id:"app.components.vendor-signup.title",defaultMessage:"Apply for a vendor account"}}),F=t(42128),y=t(86513),v="";function N(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function L(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?N(Object(t),!0).forEach((function(n){u()(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):N(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var A=function(){var e=(0,i.Z)();return o.createElement(o.Fragment,null,o.createElement(d.Z,{page:!0,title:e.formatMessage(L({},U.title)),__source:{parentProps:null,name:v}}),o.createElement(l.Z,{type:y.Z.VENDOR_SIGNUP,__source:{parentProps:null,name:v}},o.createElement(a.Z,{__source:{parentProps:null,name:v}},o.createElement(s.Z,{__source:{parentProps:null,name:v}},o.createElement(c.Z,{xs:12,sm:{span:6,offset:3},__source:{parentProps:null,name:v}},o.createElement(g,{__source:{parentProps:null,name:v}}))))),o.createElement(S.Z,{currentUrl:(0,F.LE)(),title:e.formatMessage(L({},U.title)),__source:{parentProps:null,name:v}}))}},21898:function(e,n,t){"use strict";t.d(n,{M6:function(){return o},j7:function(){return a},TP:function(){return s},JF:function(){return c},X3:function(){return i},AG:function(){return l}});var r=t(96177),u=t(48340);function o(){return{type:r.Z.REQUEST_APPLY_FOR_VENDOR_FORM}}function a(e){return{type:r.Z.REQUEST_APPLY_FOR_VENDOR_FORM_SUCCESS,payload:{formSchema:e}}}function s(e){var n=new u.Z(e);return{type:r.Z.REQUEST_APPLY_FOR_VENDOR_FORM_FAILURE,payload:{error:n}}}function c(e){return{type:r.Z.REQUEST_APPLY_FOR_VENDOR_SIGNUP,payload:{profile:e}}}function i(){return{type:r.Z.REQUEST_APPLY_FOR_VENDOR_SIGNUP_SUCCESS}}function l(e){var n=new u.Z(e);return{type:r.Z.REQUEST_APPLY_FOR_VENDOR_SIGNUP_FAILURE,payload:{error:n}}}},96177:function(e,n){"use strict";var t;!function(e){e.REQUEST_APPLY_FOR_VENDOR_FORM="REQUEST_APPLY_FOR_VENDOR_FORM",e.REQUEST_APPLY_FOR_VENDOR_FORM_SUCCESS="REQUEST_APPLY_FOR_VENDOR_FORM_SUCCESS",e.REQUEST_APPLY_FOR_VENDOR_FORM_FAILURE="REQUEST_APPLY_FOR_VENDOR_FORM_FAILURE",e.REQUEST_APPLY_FOR_VENDOR_SIGNUP="REQUEST_APPLY_FOR_VENDOR_SIGNUP",e.REQUEST_APPLY_FOR_VENDOR_SIGNUP_SUCCESS="REQUEST_APPLY_FOR_VENDOR_SIGNUP_SUCCESS",e.REQUEST_APPLY_FOR_VENDOR_SIGNUP_FAILURE="REQUEST_APPLY_FOR_VENDOR_SIGNUP_FAILURE"}(t||(t={})),n.Z=t},31555:function(e,n,t){"use strict";var r=t(22122),u=t(19756),o=t(94184),a=t.n(o),s=t(67294),c=t(76792),i=["xl","lg","md","sm","xs"],l=s.forwardRef((function(e,n){var t=e.bsPrefix,o=e.className,l=e.as,_=void 0===l?"div":l,p=(0,u.Z)(e,["bsPrefix","className","as"]),f=(0,c.vE)(t,"col"),E=[],P=[];return i.forEach((function(e){var n,t,r,u=p[e];if(delete p[e],"object"==typeof u&&null!=u){var o=u.span;n=void 0===o||o,t=u.offset,r=u.order}else n=u;var a="xs"!==e?"-"+e:"";n&&E.push(!0===n?""+f+a:""+f+a+"-"+n),null!=r&&P.push("order"+a+"-"+r),null!=t&&P.push("offset"+a+"-"+t)})),E.length||E.push(f),s.createElement(_,(0,r.Z)({},p,{ref:n,className:a().apply(void 0,[o].concat(E,P))}))}));l.displayName="Col",n.Z=l}}]);
//# sourceMappingURL=8253.f44553376a36e66617da.chunk.js.map