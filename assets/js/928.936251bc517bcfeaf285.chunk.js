(self.webpackChunkpwajet=self.webpackChunkpwajet||[]).push([[928],{30928:function(e,n,t){"use strict";t.r(n),t.d(n,{getPriceWithAppliedOptions:function(){return m},getVariantPrice:function(){return f}});var r=t(95263),a=t.n(r),i=t(76255),o=t(57334),c=t(50175),u=t(57763),s=t(26536),l=(t(37625),"subcomponents/option/variant/OptionVariant"),p=function(e){var n=e.variant,t=e.onClick,r=e.selected,a=e.children;return e.readonly?i.createElement("div",{className:"b-option-variant b-option-variant--readonly "+(r?"b-option-variant--selected":""),__source:{parentProps:e,name:l}},a):i.createElement("button",{className:(0,o.Z)("b-option-variant",r&&"b-option-variant--selected"),onClick:function(){return t(n.id)},__source:{parentProps:e,name:l}},a)},m=function(e,n,t){return n+e.filter((function(e){return e.id!==t})).reduce((function(e,t){return t.variants.filter((function(e){return e.id===t.value})).reduce((function(e,t){return e+f(t,n)}),e)}),0)},f=function(e,n){return e.modifierType===s.Z.ABSOLUTE?e.modifier:n*e.modifier/100};n.default=function(e){var n=e.variant,t=e.withImage,r=e.selected,s=n.getSmallIcon(),d=i.useContext(u.Z);if(!d)return console.warn("Check for Product Context Provider is used"),null;var v=m(d.options,d.basePrice,n.optionId)+f(n,d.basePrice);return i.createElement(p,a()({},e,{__source:{parentProps:e,name:l}}),!r&&v!==d.price&&i.createElement(c.Z,{price:v,className:"b-option-variant__price",__source:{parentProps:e,name:l}}),t&&!!s&&i.createElement("img",{src:s?s.url:"",alt:n.name,className:"b-option-variant__image",__source:{parentProps:e,name:l}}),i.createElement("div",{className:(0,o.Z)("b-option-variant__title",t&&"b-option-variant__title--little-font-size"),__source:{parentProps:e,name:l}},i.createElement("span",{className:"b-option-variant__title-name",__source:{parentProps:e,name:l}},n.name)))}},50175:function(e,n,t){"use strict";var r=t(53107),a=t(31915),i=t(34131);n.Z=(0,r.$j)((function(e){return{currency:(0,i.TV)(e)}}),(function(){return{}}))(a.Z)},57763:function(e,n,t){"use strict";var r=t(76255).createContext(null);n.Z=r},37625:function(){}}]);
//# sourceMappingURL=928.936251bc517bcfeaf285.chunk.js.map