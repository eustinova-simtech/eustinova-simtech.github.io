(self.webpackChunkpwajet=self.webpackChunkpwajet||[]).push([[327],{46479:function(e,n,t){"use strict";t.d(n,{Z:function(){return _}});var o=t(81253),r=t(96156),a=t(22122),i=t(67294),s=(t(45697),t(86010)),l=t(49353),c=t(32467),u=t(83711),d=t(17294),p=t(66987),m=t(73935),f="undefined"==typeof window?i.useEffect:i.useLayoutEffect,g=i.forwardRef((function(e,n){var t=e.alignItems,r=void 0===t?"center":t,l=e.autoFocus,g=void 0!==l&&l,b=e.button,v=void 0!==b&&b,_=e.children,Z=e.classes,h=e.className,k=e.component,E=e.ContainerComponent,P=void 0===E?"li":E,N=e.ContainerProps,y=(N=void 0===N?{}:N).className,C=(0,o.Z)(N,["className"]),w=e.dense,x=void 0!==w&&w,L=e.disabled,M=void 0!==L&&L,A=e.disableGutters,I=void 0!==A&&A,G=e.divider,S=void 0!==G&&G,B=e.focusVisibleClassName,R=e.selected,V=void 0!==R&&R,U=(0,o.Z)(e,["alignItems","autoFocus","button","children","classes","className","component","ContainerComponent","ContainerProps","dense","disabled","disableGutters","divider","focusVisibleClassName","selected"]),$=i.useContext(p.Z),j={dense:x||$.dense||!1,alignItems:r},z=i.useRef(null);f((function(){g&&z.current&&z.current.focus()}),[g]);var F=i.Children.toArray(_),D=F.length&&(0,u.Z)(F[F.length-1],["ListItemSecondaryAction"]),T=i.useCallback((function(e){z.current=m.findDOMNode(e)}),[]),H=(0,d.Z)(T,n),O=(0,a.Z)({className:(0,s.Z)(Z.root,h,j.dense&&Z.dense,!I&&Z.gutters,S&&Z.divider,M&&Z.disabled,v&&Z.button,"center"!==r&&Z.alignItemsFlexStart,D&&Z.secondaryAction,V&&Z.selected),disabled:M},U),Y=k||"li";return v&&(O.component=k||"div",O.focusVisibleClassName=(0,s.Z)(Z.focusVisible,B),Y=c.Z),D?(Y=O.component||k?Y:"div","li"===P&&("li"===Y?Y="div":"li"===O.component&&(O.component="div")),i.createElement(p.Z.Provider,{value:j},i.createElement(P,(0,a.Z)({className:(0,s.Z)(Z.container,y),ref:H},C),i.createElement(Y,O,F),F.pop()))):i.createElement(p.Z.Provider,{value:j},i.createElement(Y,(0,a.Z)({ref:H},O),F))})),b=(0,l.Z)((function(e){return{root:{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left",paddingTop:8,paddingBottom:8,"&$focusVisible":{backgroundColor:e.palette.action.selected},"&$selected, &$selected:hover":{backgroundColor:e.palette.action.selected},"&$disabled":{opacity:.5}},container:{position:"relative"},focusVisible:{},dense:{paddingTop:4,paddingBottom:4},alignItemsFlexStart:{alignItems:"flex-start"},disabled:{},divider:{borderBottom:"1px solid ".concat(e.palette.divider),backgroundClip:"padding-box"},gutters:{paddingLeft:16,paddingRight:16},button:{transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:e.palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}},secondaryAction:{paddingRight:48},selected:{}}}),{name:"MuiListItem"})(g),v=i.forwardRef((function(e,n){var t,r=e.classes,l=e.className,c=e.component,u=void 0===c?"li":c,d=e.disableGutters,p=void 0!==d&&d,m=e.ListItemClasses,f=e.role,g=void 0===f?"menuitem":f,v=e.selected,_=e.tabIndex,Z=(0,o.Z)(e,["classes","className","component","disableGutters","ListItemClasses","role","selected","tabIndex"]);return e.disabled||(t=void 0!==_?_:-1),i.createElement(b,(0,a.Z)({button:!0,role:g,tabIndex:t,component:u,selected:v,disableGutters:p,classes:(0,a.Z)({dense:r.dense},m),className:(0,s.Z)(r.root,l,v&&r.selected,!p&&r.gutters),ref:n},Z))})),_=(0,l.Z)((function(e){return{root:(0,a.Z)({},e.typography.body1,(0,r.Z)({minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",width:"auto",overflow:"hidden",whiteSpace:"nowrap"},e.breakpoints.up("sm"),{minHeight:"auto"})),gutters:{},selected:{},dense:(0,a.Z)({},e.typography.body2,{minHeight:"auto"})}}),{name:"MuiMenuItem"})(v)},82568:function(e,n,t){"use strict";function o(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return n.reduce((function(e,n){return null==n?e:function(){for(var t=arguments.length,o=new Array(t),r=0;r<t;r++)o[r]=arguments[r];e.apply(this,o),n.apply(this,o)}}),(function(){}))}t.d(n,{Z:function(){return o}})},99412:function(e,n,t){"use strict";t.d(n,{M:function(){return g},o:function(){return b}});var o=t(67154),r=t.n(o),a=t(67294),i=t(77844),s=(0,t(40395).defineMessages)({orders:{id:"app.components.profile.menu.orders",defaultMessage:"My orders"},logout:{id:"app.components.profile.menu.logout",defaultMessage:"Logout"},login:{id:"app.components.profile.menu.login",defaultMessage:"Login"},register:{id:"app.components.profile.menu.register",defaultMessage:"Register"},profile:{id:"app.components.profile.menu.profile",defaultMessage:"Profile"},notifications:{id:"app.components.profile.menu.notifications",defaultMessage:"Notification center"}}),l="profile/menu/ProfileMenuSchema",c=t(69435).default,u=t(4868).default,d=t(31181).default,p=t(59127).default,m=t(73752).default,f=t(77424).default,g=function(e){var n=e.logout;return[{icon:function(e){return a.createElement(m,r()({},e,{__source:{parentProps:e,name:l}}))},link:(0,i.createProfileLinkUrl)(),message:s.profile},{icon:function(e){return a.createElement(f,r()({},e,{__source:{parentProps:e,name:l}}))},link:(0,i.createNotificationsLinkUrl)(),label:e.notificationsNumber?e.notificationsNumber:void 0,message:s.notifications},{icon:function(e){return a.createElement(c,r()({},e,{__source:{parentProps:e,name:l}}))},link:(0,i.createOrdersLinkUrl)(),message:s.orders},{icon:function(e){return a.createElement(u,r()({},e,{__source:{parentProps:e,name:l}}))},action:n,message:s.logout}]},b=function(){return[{icon:function(e){return a.createElement(d,r()({},e,{__source:{parentProps:e,name:l}}))},link:(0,i.createLoginLinkUrl)(),message:s.login},{icon:function(e){return a.createElement(p,r()({},e,{__source:{parentProps:e,name:l}}))},link:(0,i.createRegistrationLinkUrl)(),message:s.register}]}},90668:function(e,n,t){"use strict";t.d(n,{Z:function(){return v}});var o=t(67154),r=t.n(o),a=t(67294),i=t(86933),s=t(73727),l=t(99050),c=t(46479),u=t(99412),d=t(62686),p=t(69936),m="profile/menu/dropdown/ProfileMenuDropdown",f=t(37703),g=t(4903),b=t(91126),v=(0,f.$j)((function(e){return{isLogged:e.Auth.isLogged,notificationsNumber:(0,b.G)(e)}}),(function(e){return{logout:function(){return e(g.kSL())}}}))((function(e){var n=e.anchor,t=e.onClose,o=e.isLogged?(0,u.M)(e):(0,u.o)();return a.createElement(l.Z,{id:"profile-menu",anchorEl:n,keepMounted:!0,open:Boolean(n),onClose:t,className:(0,d.Z)("b-profile-menu","dropdown"),__source:{parentProps:e,name:m}},o.map((function(e){return a.createElement(c.Z,{key:e.message.id,component:e.link?s.NavLink:"button",exact:Boolean(e.link)||void 0,to:e.link||void 0,classes:{root:"b-profile-menu__item-link"},onClick:e.action?e.action:void 0,__source:{parentProps:null,name:m}},e.icon({className:"b-profile-menu__item-icon",size:16}),a.createElement(i.Z,r()({},e.message,{__source:{parentProps:null,name:m}})),e.label&&a.createElement(p.default,{label:e.label,__source:{parentProps:null,name:m}}))})))}))},26554:function(e,n,t){"use strict";t.d(n,{Z:function(){return g}});var o=t(37703),r=t(63038),a=t.n(r),i=t(67294),s=t(43806),l=t(69936),c=t(23800),u=t(90668),d=t(98614),p="profile/profile-button/ProfileButton",m=t(73752).default,f=t(91126),g=(0,o.$j)((function(e){return{notificationsAmount:(0,f.G)(e),profile:e.Auth.profile}}),(function(){return{}}))((function(e){var n=e.size,t=e.label,o=e.notificationsAmount,r=e.profile,f=e.disableAvatar,g=e.className,b=i.useState(null),v=a()(b,2),_=v[0],Z=v[1],h=(0,d.Z)();return i.useEffect((function(){h&&_&&Z(null)}),[h,_]),i.createElement(i.Fragment,null,i.createElement("button",{onClick:function(e){return function(e){Z(e.currentTarget)}(e)},className:(0,s.Z)("b-profile-button",g),__source:{parentProps:e,name:p}},i.createElement("div",{className:"b-profile-button__icon-wrapper",__source:{parentProps:e,name:p}},r&&!f?i.createElement(c.Z,{profile:r,__source:{parentProps:e,name:p}}):i.createElement(m,{size:n,__source:{parentProps:e,name:p}}),!!o&&i.createElement(l.default,{label:o,className:"b-profile-button__amount",__source:{parentProps:e,name:p}})),t&&i.createElement("p",{className:"b-main-menu__button-label",__source:{parentProps:e,name:p}},t)),i.createElement(u.Z,{anchor:_,onClose:function(){Z(null)},__source:{parentProps:e,name:p}}))}))},23800:function(e,n,t){"use strict";t.d(n,{Z:function(){return d}});var o=t(67154),r=t.n(o),a=t(67294),i=t(86933),s=t(6767),l=t.n(s),c=(0,t(40395).defineMessages)({guestAcronym:{id:"app.components.user-avatar.guest-acronym",defaultMessage:"G"},avatarImageAlt:{id:"app.components.user-avatar.avatar-alt",defaultMessage:"Your avatar"}}),u="profile/user-info/avatar/UserAvatar",d=function(e){var n=e.profile;return a.createElement("div",{className:"b-user-avatar",__source:{parentProps:e,name:u}},a.createElement("div",{className:"b-user-avatar__placeholder",style:{background:"linear-gradient(90deg, ".concat(n.color,", ").concat(l()(n.color).rotate(45),")")},__source:{parentProps:e,name:u}},a.createElement("h2",{className:"b-user-avatar__acronym",__source:{parentProps:e,name:u}},n.acronym||a.createElement(i.Z,r()({},c.guestAcronym,{__source:{parentProps:e,name:u}})))))}},69936:function(e,n,t){"use strict";t.r(n);var o=t(67294),r=t(45989),a=t(37723),i=t(43806),s="subcomponents/label/Label";n.default=function(e){var n=e.label,t=e.className,l=e.children;return o.createElement(r.Z,{__source:{parentProps:e,name:s}},o.createElement(a.Z,{timeout:500,key:n||"key",classNames:{exit:"animated heartBeat"},component:null,__source:{parentProps:e,name:s}},o.createElement("span",{className:(0,i.Z)("b-label",t),__source:{parentProps:e,name:s}},l||n)))}},91126:function(e,n,t){"use strict";t.d(n,{G:function(){return a}});var o=t(22222),r=(0,o.P1)([function(e){return e.Notification}],(function(e){return e.notifications.filter((function(e){return!1===e.isViewed}))})),a=(0,o.P1)([r],(function(e){return e.length}))}}]);
//# sourceMappingURL=327.aeae881284ab45ffba76.chunk.js.map