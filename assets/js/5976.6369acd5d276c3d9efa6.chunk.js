(self.webpackChunkpwajet=self.webpackChunkpwajet||[]).push([[5976],{45976:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return p}});var r=n(67154),a=n.n(r),o=n(67294),i=n(86933),u=n(64396),l=n.n(u),s=n(62686),c=(0,n(40395).defineMessages)({totalReviews:{id:"app.components.reviews.total-reviews",defaultMessage:"({reviews, number} {reviews, plural,\n      one {review}\n      other {reviews}\n    })"}}),f="subcomponents/rating/Rating",p=function(e){var t=e.name,n=e.rating,r=e.totalTestimonials,u=e.readonly,p=e.big,v=e.onChange,d=e.showRatingText;return o.createElement("div",{className:(0,s.Z)("b-rating",p&&"big"),__source:{parentProps:e,name:f}},o.createElement(l(),{name:t,starCount:5,value:n,editing:!u,onStarClick:v,starColor:"red",__source:{parentProps:e,name:f}}),!!n&&d&&o.createElement("span",{className:"b-rating__rating-label",__source:{parentProps:e,name:f}},n),!!r&&o.createElement("div",{className:"b-rating__total-reviews",__source:{parentProps:e,name:f}},o.createElement(i.Z,a()({},c.totalReviews,{values:{reviews:r},__source:{parentProps:e,name:f}}))))}},64396:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(67294),o=l(a),i=l(n(45697)),u=l(n(94184));function l(e){return e&&e.__esModule?e:{default:e}}var s=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return n.state={value:e.value},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentWillReceiveProps",value:function(e){var t=e.value;null!=t&&t!==this.state.value&&this.setState({value:t})}},{key:"onChange",value:function(e){var t=this.props,n=t.editing,r=t.value;n&&null==r&&this.setState({value:e})}},{key:"onStarClick",value:function(e,t,n,r){r.stopPropagation();var a=this.props,o=a.onStarClick;a.editing&&o&&o(e,t,n,r)}},{key:"onStarHover",value:function(e,t,n,r){r.stopPropagation();var a=this.props,o=a.onStarHover;a.editing&&o&&o(e,t,n,r)}},{key:"onStarHoverOut",value:function(e,t,n,r){r.stopPropagation();var a=this.props,o=a.onStarHoverOut;a.editing&&o&&o(e,t,n,r)}},{key:"renderStars",value:function(){for(var e=this,t=this.props,n=t.name,r=t.starCount,a=t.starColor,i=t.emptyStarColor,u=t.editing,l=this.state.value,s=function(e,t){return{float:"right",cursor:u?"pointer":"default",color:t>=e?a:i}},c={display:"none",position:"absolute",marginLeft:-9999},f=[],p=function(t){var r=n+"_"+t,a=o.default.createElement("input",{key:"input_"+r,style:c,className:"dv-star-rating-input",type:"radio",name:n,id:r,value:t,checked:l===t,onChange:e.onChange.bind(e,t,n)}),i=o.default.createElement("label",{key:"label_"+r,style:s(t,l),className:"dv-star-rating-star "+(l>=t?"dv-star-rating-full-star":"dv-star-rating-empty-star"),htmlFor:r,onClick:function(r){return e.onStarClick(t,l,n,r)},onMouseOver:function(r){return e.onStarHover(t,l,n,r)},onMouseLeave:function(r){return e.onStarHoverOut(t,l,n,r)}},e.renderIcon(t,l,n,r));f.push(a),f.push(i)},v=r;v>0;v--)p(v);return f.length?f:null}},{key:"renderIcon",value:function(e,t,n,r){var a=this.props,i=a.renderStarIcon,u=a.renderStarIconHalf;return"function"==typeof u&&Math.ceil(t)===e&&t%1!=0?u(e,t,n,r):"function"==typeof i?i(e,t,n,r):o.default.createElement("i",{key:"icon_"+r,style:{fontStyle:"normal"}},"★")}},{key:"render",value:function(){var e=this.props,t=e.editing,n=e.className,r=(0,u.default)("dv-star-rating",{"dv-star-rating-non-editable":!t},n);return o.default.createElement("div",{style:{display:"inline-block",position:"relative"},className:r},this.renderStars())}}]),t}(a.Component);s.propTypes={name:i.default.string.isRequired,value:i.default.number,editing:i.default.bool,starCount:i.default.number,starColor:i.default.string,onStarClick:i.default.func,onStarHover:i.default.func,onStarHoverOut:i.default.func,renderStarIcon:i.default.func,renderStarIconHalf:i.default.func},s.defaultProps={starCount:5,editing:!0,starColor:"#ffb400",emptyStarColor:"#333"},t.default=s,e.exports=t.default}}]);
//# sourceMappingURL=5976.6369acd5d276c3d9efa6.chunk.js.map