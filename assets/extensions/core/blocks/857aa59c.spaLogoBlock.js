const e=(e,t)=>t?Array.isArray(t)?[e,...t.filter((e=>e&&void 0!==e))].join(" ").trim():[e,t].join(" ").trim():e;!function(e,t){void 0===t&&(t={});var a=t.insertAt;if("undefined"!=typeof document){var o=document.head||document.getElementsByTagName("head")[0],n=document.createElement("style");n.type="text/css","top"===a&&o.firstChild?o.insertBefore(n,o.firstChild):o.appendChild(n),n.styleSheet?n.styleSheet.cssText=e:n.appendChild(document.createTextNode(e))}}(".b-logo{max-width:100px;}.b-logo__image{width:100%}@media (min-width:768px){.b-logo{max-width:160px}}");const t=window.intl.defineMessages({logoAlt:{id:"app.utils.messages.alt",defaultMessage:"Logo"}}),a=a=>{const{src:o,className:i}=a,{core:{config:r}}=pwajet,c=window.intl.useIntl(),{pathname:l}=reactRouter.useLocation();return window.React.createElement("div",{className:e("b-logo",i)},window.React.createElement(n,{path:l},window.React.createElement("img",{src:o,alt:c.formatMessage({...t.logoAlt},{appName:r.appName}),className:"b-logo__image"})))},n=e=>{const{path:t,children:a}=e,o=pwajet.core.url.createHomepageLinkUrl();return t===o?window.React.createElement(window.React.Fragment,null,a):window.React.createElement(reactRouterDom.Link,{to:o},a)};export default e=>{const{src:t}=e;return window.React.createElement(a,{src:t})};