(self.webpackChunkpwajet=self.webpackChunkpwajet||[]).push([[6169],{96169:function(n,t,r){"use strict";r.r(t),r.d(t,{VendorEpics:function(){return P},dbRequestVendorEpic:function(){return O},dbRequestVendorProductsEpic:function(){return m},mapApiRequestFailureToDbRequestEpic:function(){return h},mapFailuredLayoutRequestToVendorRequestEpic:function(){return S},mapSetVendorIsRequestingOnLayoutEpic:function(){return Z},mapVendorProductsApiRequestFailureToDbRequestEpic:function(){return A},requestVendorProductsEpic:function(){return q}});var e=r(72643),u=r.n(e),o=r(57515),a=r.n(o),i=r(1650),p=r(73709),c=r(3121),s=r(52798),d=r(15966),f=r(75906),l=r(63113),E=r(75810),R=r(10799),y=r(49625),U=r(18846),D=r(87885),_=r(36059),g=r(46782),T=r(94095),V=r(12832),w=r(83977),h=function(n){return(0,U.c)(n,y.Z.REQUEST_VENDOR_FAILURE,(function(n){return(0,R.F5)(n)}))},O=function(n){return n.pipe((0,E.l)(y.Z.DB_REQUEST_VENDOR),(0,i.w)((function(n){return(0,d.D)(g.aA.findVendor(n.payload.id)).pipe((0,p.U)((function(t){return t?(0,R.sl)(t):(0,R.iK)(n.payload.id)})))})))},S=function(n){return n.pipe((0,E.l)(D.Z.REQUEST_LAYOUT_FAILURE),(0,c.h)((function(n){return n.payload.dispatch===_.Z.VENDOR&&!!n.payload.slug})),(0,i.w)((function(n){return n.payload.slug?(0,f.of)((0,R.Sg)(n.payload.slug,n.payload.error)):(0,f.of)(l.E)})))},Z=function(n){return n.pipe((0,E.l)(D.Z.REQUEST_LAYOUT),(0,c.h)((function(n){return n.payload.dispatch===_.Z.VENDOR&&!!n.payload.slug})),(0,i.w)((function(){return(0,f.of)((0,R.Y7)(!0))})))},q=function(n,t,r){var e=r.parser;return n.pipe((0,E.l)(y.Z.REQUEST_VENDOR_PRODUCTS),(0,i.w)((function(n){return(0,d.D)((t=n.payload.id,r=n.payload.productSelection,(0,V.getProductsRequest)(r).setParams({company_id:t}).get())).pipe((0,i.w)((function(n){return e.extractProducts(n.data)})),(0,p.U)((function(t){return(0,R.Z5)(t,n.payload.shouldAppend)})),(0,s.K)((function(t){return console.error(t),(0,f.of)((0,R.BY)(n.payload.id,{status:t.status,message:t.message||""}))})));var t,r})))},m=function(n){return n.pipe((0,E.l)(y.Z.DB_REQUEST_VENDOR_PRODUCTS),(0,i.w)((function(n){return(0,d.D)((t=n.payload.vendorId,T.ZP.products.filter((function(n){return!!n.extra.vendor&&n.extra.vendor.id===t})).toArray())).pipe((0,i.w)(function(){var n=a()(u().mark((function n(t){return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,w.Z)({pagination:{page:1,total:t.length,limit:t.length},filters:[],products:t,sorting:{order:"asc",sortBy:""}});case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()),(0,p.U)((function(n){return(0,R.EN)(n)})));var t})))},A=function(n){return n.pipe((0,E.l)(y.Z.REQUEST_VENDOR_PRODUCTS_FAILURE),(0,c.h)((function(n){return 0===n.payload.error.status})),(0,i.w)((function(n){return(0,f.of)((0,R.W7)(n.payload.id))})))},P=[h,O,S,Z,q,m,A]}}]);
//# sourceMappingURL=6169.bc813282cf9ffa5f76dc.chunk.js.map