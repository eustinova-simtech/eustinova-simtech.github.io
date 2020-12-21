(self.webpackChunkpwajet=self.webpackChunkpwajet||[]).push([[8066,9499],{88066:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return C}});var t=n(76794),a=n.n(t),o=n(31483),l=n(14543),i=n(52607),s=n(76255),u=n(36812),c=n.n(u),m=n(73394),f=n(46691),d=n(37514),p=n(57334),b=n(19499),v=(0,n(6472).defineMessages)({email:{id:"app.form.email",defaultMessage:"Email"},password:{id:"app.form.password",defaultMessage:"Password"},tooShort:{id:"app.form.validation.too-short",defaultMessage:"Too short"},tooLong:{id:"app.form.validation.too-long",defaultMessage:"Too long"},required:{id:"app.form.validation.required",defaultMessage:"Required"},invalidEmail:{id:"app.form.validation.invalid-email",defaultMessage:"Invalid email format"},submitTitle:{id:"app.form.submit-title",defaultMessage:"Submit"},resetTitle:{id:"app.form.reset-title",defaultMessage:"Reset"}}),h=(n(86090),n(37192)),E="subcomponents/dynamic-form/DynamicForm";function y(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function g(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?y(Object(n),!0).forEach((function(r){a()(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}var _=function(e,r,n){return Boolean(e[n]&&r[n])},P=function(e,r,n){return _(e,r,n)?e[n]:void 0},w=function(e,r){return e[r]||""};function O(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function Z(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?O(Object(n),!0).forEach((function(r){a()(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}var C=(0,i.ZP)((0,l.j0)({mapPropsToValues:function(e){var r=e.schema,n={};return r.getFields().forEach((function(e){var r;switch(e.type){case m.Z.SELECTBOX:case m.Z.SLAVE_SELECTBOX:n[e.name]=e.value||(null===(r=e.values[0])||void 0===r?void 0:r.value);break;default:n[e.name]=e.value}})),n},validate:function(e,r){try{(function(e){var r=e.schema,n={};return r.getFields().forEach((function(r){var t=o;switch(r.type){case m.Z.EMAIL:t=t.string().email(e.intl.formatMessage(Z({},v.invalidEmail)));break;case m.Z.NUMBER:t=t.number();break;case m.Z.DATE:case m.Z.DATETIME:t=t.date();break;default:t=t.string()}if(r.isRequired)switch(r.type){case m.Z.SLAVE_SELECTBOX:break;default:t=t.required(e.intl.formatMessage(Z({},v.required)))}n[r.name]=t})),o.object().shape(Z({},n))})(r).validateSync(e,{abortEarly:!1})}catch(e){return(0,l.wq)(e)}return{}},handleSubmit:function(e,r){var n=r.props;n.onSubmit&&n.onSubmit(e)}})((function(e){var r=e.schema,n=e.onChange,t=e.onSubmit,a=e.onCancel,o=e.submitTitle,l=e.error,i=e.handleChange,u=e.handleBlur,y=e.handleSubmit,O=e.isValid,Z=e.intl,C=e.values,N=e.errors,T=e.touched,k=e.isRequesting,S=e.className,j=e.validateForm,L=e.onInit,M=e.onIsValidChange,D=r.sections;s.useEffect((function(){j()}),[j]);var R=s.useRef(C),I=s.useRef(O);if(s.useEffect((function(){L&&L(R.current,I.current)}),[L]),s.useEffect((function(){c()(R.current,C)&&I.current===O||!n||n(C,O),I.current!==O&&M&&M(O),R.current=C,I.current=O}),[n,R,C,O]),!t&&!n)throw new Error("No form behaviour specified. Use onSubmit or onChange");return s.createElement("div",{className:(0,p.Z)("b-dynamic-form",S),__source:{parentProps:e,name:E}},l&&s.createElement(b.default,{warning:!0,__source:{parentProps:e,name:E}},l),s.createElement("form",{onSubmit:y,__source:{parentProps:e,name:E}},D.map((function(e){return s.createElement("div",{key:e.id,className:"b-dynamic-form__section",__source:{parentProps:null,name:E}},e.title&&s.createElement("h2",{__source:{parentProps:null,name:E}},e.title),e.fields.map((function(r,n){return s.createElement("div",{className:"form-group",key:r.name,__source:{parentProps:null,name:E}},function(){var t=r.isRequired?"*".concat(r.label):r.label;switch(r.type){case m.Z.TEXT:case m.Z.PASSWORD:case m.Z.EMAIL:case m.Z.MULTILINE_TEXT:return s.createElement(d.default,{id:r.name,key:r.name,type:r.type,label:t,onChange:i,onBlur:u,name:r.name,multiline:r.type===m.Z.MULTILINE_TEXT,value:w(C,r.name),fullWidth:!0,disabled:k||!r.isEnabled,error:_(N,T,r.name),helperText:P(N,T,r.name),__source:{parentProps:null,name:E}});case m.Z.SELECTBOX:return s.createElement(f.default,{key:r.name,name:r.name,onChange:i,description:t,value:w(C,r.name),disabled:k||!r.isEnabled,error:_(N,T,r.name),helperText:P(N,T,r.name),options:r.values||[],__source:{parentProps:null,name:E}});case m.Z.SLAVE_SELECTBOX:var a=function(e,r,n){var t=function(e,r){return e.fields[r-1]}(e,r);if(t)return w(n,t.name)}(e,n,C),o=r.values?r.values.filter((function(e){return e.criteria===a})):[],l=w(C,r.name),c=Boolean(o.find((function(e){return e.value===l})));return o.length||(C[r.name]=""),a&&o.length?(c||(C[r.name]=o[0].value),s.createElement(f.default,{key:r.name,name:r.name,onChange:i,description:t,value:l,disabled:k||!r.isEnabled,error:_(N,T,r.name),helperText:P(N,T,r.name),options:o,__source:{parentProps:null,name:E}})):null}}())})))})),s.createElement("div",{className:"b-dynamic-form__actions",__source:{parentProps:e,name:E}},t&&s.createElement(h.Z,{type:"submit",appearance:"primary",className:"b-dynamic-form__submit",disabled:!(!k&&O),__source:{parentProps:e,name:E}},o||Z.formatMessage(g({},v.submitTitle))),a&&s.createElement(h.Z,{appearance:"dark",type:"reset",className:"b-dynamic-form__cancel",onClick:function(){return a()},__source:{parentProps:e,name:E}},o||Z.formatMessage(g({},v.resetTitle))))))})))},37514:function(e,r,n){"use strict";n.r(r),n.d(r,{Input:function(){return u}});var t=n(95263),a=n.n(t),o=n(84480),l=n.n(o),i=n(76255),s=n(94668),u=function(e){var r=e.ref,n=e.id,t=e.label,o=e.className,u=e.value,c=e.error,m=e.helperText,f=e.disabled,d=e.fullWidth,p=(e.color,e.size,e.multiline),b=l()(e,["ref","id","label","className","value","error","helperText","disabled","fullWidth","color","size","multiline"]);return i.createElement(s.Z,a()({disabled:f,ref:r,id:n,error:c,helperText:m,label:t,className:o,value:u,fullWidth:d,multiline:p,margin:"normal",variant:"outlined"},b,{__source:{parentProps:e,name:"subcomponents/input/Input"}}))};r.default=u},19499:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return R}});var t,a=n(76255),o=n(12261),l=n(52379),i=n(76127),s=n.n(i),u=n(28802),c=n(87496),m=n(31022),f=n(35064),d=n(28667),p=n(69489),b=((t={})[d.d0]="show",t[d.cn]="show",t),v=a.forwardRef((function(e,r){var n=e.className,t=e.children,i=(0,l.Z)(e,["className","children"]),u=(0,a.useCallback)((function(e){(0,p.Z)(e),i.onEnter&&i.onEnter(e)}),[i]);return a.createElement(d.ZP,(0,o.Z)({ref:r,addEndListener:f.Z},i,{onEnter:u}),(function(e,r){return a.cloneElement(t,(0,o.Z)({},r,{className:s()("fade",n,t.props.className,b[e])}))}))}));v.defaultProps={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1},v.displayName="Fade";var h=v,E=n(30914),y=n.n(E),g={label:y().string.isRequired,onClick:y().func},_=a.forwardRef((function(e,r){var n=e.label,t=e.onClick,i=e.className,u=(0,l.Z)(e,["label","onClick","className"]);return a.createElement("button",(0,o.Z)({ref:r,type:"button",className:s()("close",i),onClick:t},u),a.createElement("span",{"aria-hidden":"true"},"×"),a.createElement("span",{className:"sr-only"},n))}));_.displayName="CloseButton",_.propTypes=g,_.defaultProps={label:"Close"};var P=_,w=n(19733),O=n(87087);function Z(e){return!e||"#"===e.trim()}var C=a.forwardRef((function(e,r){var n=e.as,t=void 0===n?"a":n,i=e.disabled,s=e.onKeyDown,u=(0,l.Z)(e,["as","disabled","onKeyDown"]),c=function(e){var r=u.href,n=u.onClick;(i||Z(r))&&e.preventDefault(),i?e.stopPropagation():n&&n(e)};return Z(u.href)&&(u.role=u.role||"button",u.href=u.href||"#"),i&&(u.tabIndex=-1,u["aria-disabled"]=!0),a.createElement(t,(0,o.Z)({ref:r},u,{onClick:c,onKeyDown:(0,O.Z)((function(e){" "===e.key&&(e.preventDefault(),c(e))}),s)}))}));C.displayName="SafeAnchor";var N=C,T=("h4",a.forwardRef((function(e,r){return a.createElement("div",(0,o.Z)({},e,{ref:r,className:s()(e.className,"h4")}))})));T.displayName="DivStyledAsH4";var k=(0,w.Z)("alert-heading",{Component:T}),S=(0,w.Z)("alert-link",{Component:N}),j={show:!0,transition:h,closeLabel:"Close alert"},L=a.forwardRef((function(e,r){var n=(0,u.Ch)(e,{show:"onClose"}),t=n.bsPrefix,i=n.show,f=n.closeLabel,d=n.className,p=n.children,b=n.variant,v=n.onClose,E=n.dismissible,y=n.transition,g=(0,l.Z)(n,["bsPrefix","show","closeLabel","className","children","variant","onClose","dismissible","transition"]),_=(0,m.vE)(t,"alert"),w=(0,c.Z)((function(e){v&&v(!1,e)})),O=!0===y?h:y,Z=a.createElement("div",(0,o.Z)({role:"alert"},O?g:void 0,{ref:r,className:s()(d,_,b&&_+"-"+b,E&&_+"-dismissible")}),E&&a.createElement(P,{onClick:w,label:f}),p);return O?a.createElement(O,(0,o.Z)({unmountOnExit:!0},g,{ref:void 0,in:i}),Z):i?Z:null}));L.displayName="Alert",L.defaultProps=j,L.Link=S,L.Heading=k;var M=L,D=n(57334),R=function(e){var r=e.info,n=e.error,t=e.success,o=e.warning;return a.createElement(M,{className:(0,D.Z)("b-notifier",function(){switch(!0){case n:return"alert-danger";case r:return"alert-info";case t:return"alert-success";case o:return"alert-warning";default:return}}()),__source:{parentProps:e,name:"subcomponents/notifier/Notifier"}},e.children)}},46691:function(e,r,n){"use strict";n.r(r);var t=n(32218),a=n.n(t),o=n(76255),l=n(44417),i=n(47319),s=n(70220),u=n(87745),c="subcomponents/select/Select";r.default=function(e){var r=e.options,n=e.name,t=e.description,m=e.fullWidth,f=e.error,d=e.helperText,p=e.disabled,b=e.ref,v=e.onChange,h=e.value,E=o.useRef(null),y=o.useState(0),g=a()(y,2),_=g[0],P=g[1];return o.useEffect((function(){E.current&&P(E.current.offsetWidth)}),[]),o.createElement(l.Z,{variant:"outlined",fullWidth:!0,margin:"normal",error:f,disabled:p,__source:{parentProps:e,name:c}},o.createElement(i.Z,{ref:E,htmlFor:n,__source:{parentProps:e,name:c}},t),o.createElement(s.Z,{native:!0,fullWidth:m,labelWidth:_,ref:b,onChange:v,value:h,inputProps:{name:n,id:n},__source:{parentProps:e,name:c}},r.map((function(e){return o.createElement("option",{value:e.value,key:e.label,__source:{parentProps:null,name:c}},e.label)}))),d&&o.createElement(u.Z,{__source:{parentProps:e,name:c}},d))}},86090:function(){}}]);
//# sourceMappingURL=8066.0827c6bee89b1d05338e.chunk.js.map