(self.webpackChunkpwajet=self.webpackChunkpwajet||[]).push([[4058,4709,1092],{54709:function(e,a,t){"use strict";t.r(a);var r=t(67294),n=t(43806),l="subcomponents/divider/Divider";a.default=function(e){var a=e.text,t=e.className;return a?r.createElement("div",{className:"row",__source:{parentProps:e,name:l}},r.createElement("div",{className:"col",__source:{parentProps:e,name:l}},r.createElement("hr",{__source:{parentProps:e,name:l}})),r.createElement("div",{className:"col-auto",__source:{parentProps:e,name:l}},a),r.createElement("div",{className:"col",__source:{parentProps:e,name:l}},r.createElement("hr",{__source:{parentProps:e,name:l}}))):r.createElement("hr",{className:(0,n.Z)("b-divider",t),__source:{parentProps:e,name:l}})}},44058:function(e,a,t){"use strict";t.r(a);var r=t(67294),n=t(51092),l="subcomponents/feature/FeatureTable";a.default=function(e){var a=e.features;return r.createElement(n.default,{className:"b-features-table",items:a.map((function(e){return{key:e.name,value:r.createElement(r.Fragment,null,(e.variants||[]).map((function(e){return r.createElement("span",{key:e.id,__source:{parentProps:null,name:l}},e.name)})),(a=e.value,"Y"===a||"N"===a?"Y"===a?r.createElement(s,{__source:{parentProps:null,name:l}}):r.createElement(u,{__source:{parentProps:null,name:l}}):a||null))};var a})),__source:{parentProps:e,name:l}})};var s=t(11214).default,u=t(41410).default},51092:function(e,a,t){"use strict";t.r(a);var r=t(67294),n=t(35161),l=t.n(n),s=t(62686),u=t(43806),c=t(54709),m="subcomponents/key-value-table/KeyValueTable";a.default=function(e){var a=e.items,t=e.justify,n=e.className,o=e.showEmpty,p=e.title,_=e.topDivider,i=void 0===_||_,v=e.bottomDivider,b=void 0===v||v,d=Array.isArray(a)?a:l()(a,(function(e,a){return{key:a,value:e}})),f=!d.length||d.every((function(e){return!e.value}));return!f||o?r.createElement("div",{className:(0,u.Z)("b-key-value-table",n||!1),__source:{parentProps:e,name:m}},!f&&i&&r.createElement(c.default,{className:"b-key-value-table__divider",__source:{parentProps:e,name:m}}),p&&r.createElement("h4",{className:"b-key-value-table__title",__source:{parentProps:e,name:m}},p),r.createElement("table",{className:(0,s.Z)("b-key-value-table__table",!!t&&"justify"),__source:{parentProps:e,name:m}},r.createElement("tbody",{__source:{parentProps:e,name:m}},d.map((function(e){return(e.value||o)&&r.createElement("tr",{className:"b-key-value-table__item",key:e.key,__source:{parentProps:null,name:m}},r.createElement("th",{className:"b-key-value-table__item-description",__source:{parentProps:null,name:m}},e.key),r.createElement("td",{className:"b-key-value-table__item-value",__source:{parentProps:null,name:m}},e.value))})))),!f&&b&&r.createElement(c.default,{className:"b-key-value-table__divider",__source:{parentProps:e,name:m}})):null}}}]);
//# sourceMappingURL=4058.8d021d6e5226b66091a2.chunk.js.map