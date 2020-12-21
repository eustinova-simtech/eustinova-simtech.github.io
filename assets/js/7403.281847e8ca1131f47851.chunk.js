(self.webpackChunkpwajet=self.webpackChunkpwajet||[]).push([[7403],{17637:function(e,t,a){"use strict";a.d(t,{Z:function(){return L}});var n=a(53107),r=a(95263),s=a.n(r),i=a(76255),o=a(89434),l=a(70303),c=a(56945),u=a(36557),m=a(87498),p=a(12471),d=a(32218),_=a.n(d),f=a(76794),b=a.n(f),v=a(88466),g=a.n(v),P=a(23478),E=a(28672),h=a(73394),w=a(6472),y=(0,w.defineMessages)({nameTitle:{id:"app.components.reviews.form.name-title",defaultMessage:"Name"},textareaTitle:{id:"app.components.reviews.form.textarea-title",defaultMessage:"Your feedback"},submitTitle:{id:"app.components.reviews.form.submit-title",defaultMessage:"Send"},savedAsDraft:{id:"app.common.saved-as-draft",defaultMessage:"Saved as draft"},clear:{id:"app.common.clear",defaultMessage:"Clear"}}),T=a(33548),N=a(85005),Z=a(46201),k=a(37192),R=a(9160),j=(a(27718),"reviewThread/form/TestimonialForm");function M(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function O(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?M(Object(a),!0).forEach((function(t){b()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):M(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var x=i.lazy((function(){return Promise.all([a.e(220),a.e(737),a.e(2090),a.e(9782),a.e(8066)]).then(a.bind(a,88066))})),C=a(55323),D=a(55653),q=(0,n.$j)((function(e,t){return{draft:(0,D.nF)(e,t),isSuccess:(0,D.sM)(e,t),isLogged:e.Auth.isLogged}}),(function(e){return{createDraft:function(t){return e(C.P2u(t))},removeDraft:function(t){return e(C.hG5(t))}}}))((function(e){var t=e.withRating,a=e.withReviews,n=e.createDraft,r=e.id,l=e.type,c=e.draft,m=e.removeDraft,p=e.isSuccess,d=[];e.isLogged||d.push({id:"reviewName",name:"reviewName",type:h.Z.TEXT,isRequired:!0,isEnabled:!0,label:P.ZP.formatMessage(O({},y.nameTitle))}),d.push({id:"reviewMessage",name:"reviewMessage",type:h.Z.MULTILINE_TEXT,isRequired:!0,isEnabled:!0,label:P.ZP.formatMessage(O({},y.textareaTitle))});var f=new R.Z({sections:[new E.Z({id:"testimonial",fields:d})]}),b=t?c?c.rating:3:void 0,v=i.useRef(p),w=i.useState({rating:b,name:null==c?void 0:c.name,message:null==c?void 0:c.text}),M=_()(w,2),C=M[0],D=M[1],q=i.useState(!(!t||a)),F=_()(q,2),S=F[0],A=F[1],I=i.useCallback(g()((function(e){return n(new T.Z({parentId:r,parentType:l,rating:e.rating,text:e.message,name:e.name,isFinal:!1}))}),500),[]);return i.useEffect((function(){!1===v.current&&p&&D({rating:3}),v.current=p}),[p]),i.createElement(N.Z,{loading:!!c&&c.isFinal,__source:{parentProps:e,name:j}},i.createElement("div",{className:"b-testimonial-form",__source:{parentProps:e,name:j}},t&&i.createElement(u.default,{rating:C.rating||3,name:"testimonial-form",onChange:function(e){return function(e){var t=C.rating,a=C.message,n=C.name;D({rating:e,name:n,message:a}),t&&(a||n)&&I(C)}(e)},big:!0,showRatingText:!0,__source:{parentProps:e,name:j}}),!!c&&i.createElement("span",{className:"b-testimonial-form__draft-notification animated fadeIn",__source:{parentProps:e,name:j}},i.createElement(o.Z,s()({},y.savedAsDraft,{__source:{parentProps:e,name:j}}))),a&&i.createElement(i.Suspense,{fallback:null,__source:{parentProps:e,name:j}},i.createElement(x,{enableReinitialize:!0,onChange:function(e,t){!function(e){var t=e.reviewName,a=e.reviewMessage,n=C.rating,s=C.message;D({rating:n,name:t,message:a}),s?I(C):(I.cancel(),c&&m((0,Z.r)(r,l)))}(e),function(e){A(e)}(t)},isRequesting:!!c&&c.isFinal,schema:f.setValues({reviewMessage:C.message,reviewName:C.name}),__source:{parentProps:e,name:j}})),i.createElement("div",{className:"b-testimonial-form__footer",__source:{parentProps:e,name:j}},i.createElement(k.Z,{appearance:"primary",className:"b-testimonial-form__submit",disabled:!S,onClick:function(){n(new T.Z({parentId:r,parentType:l,rating:C.rating,text:C.message,name:C.name,isFinal:!0}))},__source:{parentProps:e,name:j}},i.createElement(o.Z,s()({},y.submitTitle,{__source:{parentProps:e,name:j}}))),!!c&&i.createElement(k.Z,{appearance:"dark",className:"b-testimonial-form__clear-button animated fadeIn",onClick:function(){return m((0,Z.r)(r,l)),D({rating:3}),void I.cancel()},__source:{parentProps:e,name:j}},i.createElement(o.Z,s()({},y.clear,{__source:{parentProps:e,name:j}}))))))})),F=a(91930),S=a(54615),A=(0,w.defineMessages)({title:{id:"app.components.reviews.title",defaultMessage:"Ratings & reviews"},noContent:{id:"app.components.reviews.no-content",defaultMessage:"No reviews available"}}),I="reviewThread/ReviewThread",L=(0,n.$j)((function(e,t){return{thread:(0,D.EA)(e,t),isRequesting:(0,D.uV)(e,t)}}),(function(e){return{requestReviewThread:function(t,a,n,r){return e(C.hy5(t,a,n,r))}}}))((function(e){var t=e.type,a=e.id,n=e.requestReviewThread,r=e.thread,d=e.isRequesting,_=e.shouldRequestThread,f=void 0===_||_;if(i.useEffect((function(){f&&n(a,t)}),[f,a,t,n]),!r)return i.createElement(i.Fragment,null,d?i.createElement(S.default,{__source:{parentProps:null,name:I}}):i.createElement(o.Z,s()({},A.noContent,{__source:{parentProps:null,name:I}})));var b=r.selection,v=r.selection.pagination;return i.createElement("div",{className:"b-review-thread",__source:{parentProps:e,name:I}},i.createElement("h2",{className:"b-review-thread__title",__source:{parentProps:e,name:I}},i.createElement(o.Z,s()({},A.title,{__source:{parentProps:e,name:I}}))),i.createElement(u.default,{name:"rating-".concat(a),rating:r.rating,totalTestimonials:r.totalTestimonials,big:!0,showRatingText:!0,__source:{parentProps:e,name:I}}),i.createElement(p.default,{__source:{parentProps:e,name:I}}),i.createElement("div",{className:"b-review-thread__reviews",__source:{parentProps:e,name:I}},r.selection.testimonials.map((function(e){return i.createElement(i.Fragment,{key:e.id,__source:{parentProps:null,name:I}},i.createElement(m.default,{testimonial:e,__source:{parentProps:null,name:I}}),i.createElement(p.default,{__source:{parentProps:null,name:I}}))}))),v&&i.createElement(F.default,{limit:v.limit,page:v.page,total:v.total,isLoading:d,onLoadMore:function(){n(a,t,b.nextPage(),!0)},__source:{parentProps:e,name:I}}),!r.isReadonly&&i.createElement(l.Z,{__source:{parentProps:e,name:I}},i.createElement(c.Z,{md:{span:9,offset:3},__source:{parentProps:e,name:I}},i.createElement(q,{id:r.parentId,type:r.parentType,withRating:r.withRaiting,withReviews:r.withReviews,__source:{parentProps:e,name:I}}))))}))},50739:function(e,t,a){"use strict";a.r(t);var n=a(76255),r=a(13314),s=a.n(r),i=a(25540),o=a(57334),l=a(12471),c=(a(32071),"subcomponents/key-value-table/KeyValueTable");t.default=function(e){var t=e.items,a=e.justify,r=e.className,u=e.showEmpty,m=e.title,p=e.topDivider,d=void 0===p||p,_=e.bottomDivider,f=void 0===_||_,b=Array.isArray(t)?t:s()(t,(function(e,t){return{key:t,value:e}})),v=!b.length||b.every((function(e){return!e.value}));return!v||u?n.createElement("div",{className:(0,o.Z)("b-key-value-table",r||!1),__source:{parentProps:e,name:c}},!v&&d&&n.createElement(l.default,{className:"b-key-value-table__divider",__source:{parentProps:e,name:c}}),m&&n.createElement("h4",{className:"b-key-value-table__title",__source:{parentProps:e,name:c}},m),n.createElement("table",{className:(0,i.Z)("b-key-value-table__table",!!a&&"justify"),__source:{parentProps:e,name:c}},n.createElement("tbody",{__source:{parentProps:e,name:c}},b.map((function(e){return(e.value||u)&&n.createElement("tr",{className:"b-key-value-table__item",key:e.key,__source:{parentProps:null,name:c}},n.createElement("th",{className:"b-key-value-table__item-description",__source:{parentProps:null,name:c}},e.key),n.createElement("td",{className:"b-key-value-table__item-value",__source:{parentProps:null,name:c}},e.value))})))),!v&&f&&n.createElement(l.default,{className:"b-key-value-table__divider",__source:{parentProps:e,name:c}})):null}},18113:function(e,t,a){"use strict";a.r(t);var n=a(76255),r=a(36557),s=a(85005),i="subcomponents/rating/overview/RatingOverview";t.default=function(e){var t=e.thread,a=e.isRequesting;return a||t?n.createElement(s.Z,{loading:a,__source:{parentProps:e,name:i}},!!t&&n.createElement(r.default,{rating:t.rating,totalTestimonials:t.totalTestimonials,name:"".concat(t.parentType,"-rating"),readonly:!0,showRatingText:!0,__source:{parentProps:e,name:i}})):null}},86856:function(e,t,a){"use strict";a.r(t);var n=a(53107),r=a(18113),s=a(55653);t.default=(0,n.$j)((function(e,t){return{thread:(0,s.EA)(e,t),isRequesting:(0,s.uV)(e,t)}}),(function(){return{}}))(r.default)},74214:function(e,t,a){"use strict";a.r(t);var n=a(32218),r=a.n(n),s=a(76255),i=a(9480),o=a(5232),l=(a(40363),"subcomponents/tabs/Tabs");t.default=function(e){var t=e.panels,a=e.ariaLabel,n=e.children,c=s.useState(0),u=r()(c,2),m=u[0],p=u[1];return s.createElement(s.Fragment,null,s.createElement(i.Z,{value:m,onChange:function(e,t){p(t)},variant:"scrollable",scrollButtons:"off",indicatorColor:"primary",textColor:"primary","aria-label":a,classes:{root:"b-tabs",indicator:"b-tabs__indicator"},__source:{parentProps:e,name:l}},n),t.map((function(e,t){return s.createElement(o.default,{key:"panel-".concat(t),index:t,value:m,className:"animated fadeIn",__source:{parentProps:null,name:l}},e)})))}},5232:function(e,t,a){"use strict";a.r(t);var n=a(95263),r=a.n(n),s=a(84480),i=a.n(s),o=a(76255),l=a(57334);a(87570),t.default=function(e){var t=e.children,a=e.value,n=e.index,s=e.className,c=i()(e,["children","value","index","className"]);return o.createElement("div",r()({className:(0,l.Z)("b-tab-panel",s),role:"tabpanel",hidden:a!==n,id:"scrollable-auto-tabpanel-".concat(n),"aria-labelledby":"scrollable-auto-tab-".concat(n)},c,{__source:{parentProps:e,name:"subcomponents/tabs/panel/TabPanel"}}),n===a&&t)}},64360:function(e,t,a){"use strict";a.r(t);var n=a(95263),r=a.n(n),s=a(84480),i=a.n(s),o=a(76255),l=a(55496);a(37390),t.default=function(e){e.children;var t=e.label,a=i()(e,["children","label"]);return o.createElement(l.Z,r()({label:t},a,{classes:{root:"b-tab",textColorPrimary:"b-tab--color",selected:"b-tab--selected"},__source:{parentProps:e,name:"subcomponents/tabs/tab/Tab"}}))}},87498:function(e,t,a){"use strict";a.r(t);var n=a(76255),r=a(70303),s=a(56945),i=a(6472),o=a(36557),l=(a(1974),"subcomponents/testimonial/Testimonial");t.default=function(e){var t=e.testimonial;return n.createElement("div",{className:"b-testimonial",__source:{parentProps:e,name:l}},n.createElement(r.Z,{__source:{parentProps:e,name:l}},n.createElement(s.Z,{xs:12,sm:3,__source:{parentProps:e,name:l}},n.createElement("div",{className:"b-testimonial__author",__source:{parentProps:e,name:l}},t.author)),n.createElement(s.Z,{__source:{parentProps:e,name:l}},n.createElement("div",{className:"b-testimonial__content",__source:{parentProps:e,name:l}},n.createElement("div",{className:"b-testimonial__info",__source:{parentProps:e,name:l}},n.createElement(o.default,{name:"testimonial-".concat(t.id),rating:t.rating,__source:{parentProps:e,name:l}}),n.createElement("div",{className:"b-testimonial__date",__source:{parentProps:e,name:l}},n.createElement(i.FormattedDate,{value:new Date(t.createdAt),year:"numeric",month:"long",day:"2-digit",__source:{parentProps:e,name:l}}))),n.createElement("div",{__source:{parentProps:e,name:l}},t.text)))))}},27718:function(){},32071:function(){},40363:function(){},87570:function(){},37390:function(){},1974:function(){}}]);
//# sourceMappingURL=7403.281847e8ca1131f47851.chunk.js.map