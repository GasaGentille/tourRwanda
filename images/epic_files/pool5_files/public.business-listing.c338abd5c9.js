($WP="undefined"!=typeof $WP?$WP:[]).push({id:"@ta/public.business-listing",d:["vendor-babel","vendor-react-libs","lithium-platform","ta-common","vendor-redux-libs","ta-platform","vendor-apollo-libs","@ta/overlays.modal","@ta/overlays.managers","vendor-common"],e:["./packages/public/business-listing/business-listing.jsx"],x:{"./packages/public/business-listing/business-listing.jsx":["SpecialOffer","WebLink","EmailLink","PhoneLink","Address","ContactLinkProps","AddressInfo","offerTextFromContactType","leadInFromSpecialOfferType","remapContacts","trackImpression","specialOfferViewWithOpen"]},m:{"./packages/public/business-listing/business-listing.jsx":function(e,n,a){"use strict";a.r(n);var t,i=a("@babel/runtime/helpers/esm/classCallCheck"),c=a.n(i),l=a("@babel/runtime/helpers/esm/createClass"),o=a.n(l),s=a("@babel/runtime/helpers/esm/possibleConstructorReturn"),r=a.n(s),u=a("@babel/runtime/helpers/esm/getPrototypeOf"),p=a.n(u),d=a("@babel/runtime/helpers/esm/inherits"),f=a.n(d),m=a("@babel/runtime/helpers/esm/assertThisInitialized"),b=a.n(m),_=a("@babel/runtime/helpers/esm/defineProperty"),k=a.n(_),y=a("react"),g=a("@ta/common.i18n"),v=a("@ta/common.string"),O=a("@ta/styleguide.icon"),h=a("@ta/common.classnames"),I=a.n(h),T=a("@babel/runtime/helpers/esm/slicedToArray"),L=a.n(T),C=a("@babel/runtime/helpers/esm/objectSpread"),E=a.n(C),S=a("react-redux"),U=a("@ta/common.state"),N=function e(n){return n&&fetch(n,{method:"GET",credentials:"same-origin"})},A=function e(n){var a=n.context,t=n.clickType,i=n.payload;fetch("/B2BClickTracking/".concat(a,"/").concat(t),{method:"POST",body:JSON.stringify(i),headers:{"Content-Type":"application/json","X-Requested-By":Object(U.getStore)().getState().auth.csrfToken},credentials:"same-origin"})},j=[],x=[],w=new Set,P=function e(){j.length&&fetch("/BALinkImpressionTracking/contact",{method:"POST",body:JSON.stringify(j),headers:{"Content-Type":"application/json","X-Requested-By":Object(U.getStore)().getState().auth.csrfToken},credentials:"same-origin"}),x.length&&fetch("/BALinkImpressionTracking/specialOffer",{method:"POST",body:JSON.stringify(x),headers:{"Content-Type":"application/json","X-Requested-By":Object(U.getStore)().getState().auth.csrfToken},credentials:"same-origin"}),function e(){t=null,j=[],x=[]}()},R=function e(n){var a=function e(n){if("contact"===n.clickType&&n.payload.layout&&n.payload.contactType)return"".concat(n.payload.layout,n.payload.contactType);if("specialOffer"===n.clickType&&n.payload.layout){if(n.payload.couponId)return"".concat(n.payload.layout,n.payload.couponId);if(n.payload.announcementId)return"".concat(n.payload.layout,n.payload.announcementId)}return null}(n);a&&!w.has(a)&&(null!==t&&clearTimeout(t),"contact"===n.clickType&&j.push(n.payload),"specialOffer"===n.clickType&&x.push(n.payload),w.add(JSON.stringify(a)),t=setTimeout(P,100))},z=function(e){function n(){var e,a;c()(this,n);for(var t=arguments.length,i=new Array(t),l=0;l<t;l++)i[l]=arguments[l];return a=r()(this,(e=p()(n)).call.apply(e,[this].concat(i))),k()(b()(b()(a)),"componentDidMount",function(){a.trackImp()}),k()(b()(b()(a)),"componentDidUpdate",function(e){e.uid===a.props.uid&&e.page===a.props.page||a.trackImp()}),k()(b()(b()(a)),"trackImp",function(){a.props.uid&&R({clickType:a.props.clickType,payload:E()({puid:a.props.uid,servletName:a.props.context||a.props.page,baLinkUid:a.props.baLinkUid},a.props.payload)})}),k()(b()(b()(a)),"click",function(){if(a.props.offerlessCommerceTrackUrl){var e=a.props.offerlessCommerceTrackUrl.split("?"),n=L()(e,2),t=n[0],i=n[1],c=new URLSearchParams(i);a.props.baLinkUid&&c.set("ba_uid",a.props.baLinkUid),N("".concat(t,"?").concat(c.toString()))}A({context:a.props.context||a.props.page,clickType:a.props.clickType,payload:E()({puid:a.props.uid},a.props.payload)})}),a}return f()(n,e),o()(n,[{key:"render",value:function e(){return this.props.children(this.click)}}]),n}(y.Component),F=Object(S.connect)(function(e){return{page:e.route.page,uid:e.tracking.uid}})(z),M=function e(n){var a=n.context,t=n.impressionId,i=n.payload,c=n.offerlessCommerceTrackUrl,l=n.baLinkUid,o=n.children;return y.createElement(F,{clickType:"specialOffer",impressionId:t,context:a,payload:i,offerlessCommerceTrackUrl:c,baLinkUid:l},function(e){return o(e)})};M.defaultProps={context:void 0};var D=M,W=function e(n){var a={};return n.forEach(function(e){var n=e.contactLinkType;n in a||(a[n]=e)}),a},H=function e(n){switch(n){case"URL_HOTEL":return Object(g.localize)("visit_hotel_website");case"EMAIL":return Object(g.localize)("ODCTest_email_link_ffffea3f");case"URL_DEALS":return Object(g.localize)("bl_flex_url_deals");case"URL_PACKAGES":return Object(g.localize)("bl_flex_url_packages");case"URL_VIRTUAL_TOUR":return Object(g.localize)("bl_flex_url_tour");case"URL_AFFILIATE":return Object(g.localize)("bl_flex_url_affiliate_fffff20a");default:return null}},V=function e(n){switch(n){case"CREATE_YOUR_OWN":return Object(g.localize)("SO_recat_headline_specialOfferHeader_e1f");case"ROOM_PERCENT_OFF":case"ROOM_AMOUNT_OFF":return Object(g.localize)("SO_recat_headline_specialPrice_e1f");case"ROOM_SPECIAL_RATE":case"ROOM_UPGRADE":return Object(g.localize)("SO_recat_headline_specialRateHeader_e1f");case"FOOD_CREDIT":return Object(g.localize)("SO_recat_specialDealHeader_e1f");case"BOTTLE_OF_WINE":return Object(g.localize)("SO_recat_headline_specialOfferHeader_e1f");case"FREE_BREAKFAST":return Object(g.localize)("SO_recat_specialDealHeader_e1f");case"FREE_PARKING":case"LOYALTY_POINTS":return Object(g.localize)("SO_recat_headline_specialOfferHeader_e1f");case"FREE_TICKETS":return Object(g.localize)("SO_recat_specialDealHeader_e1f");case"PACKAGE":return Object(g.localize)("SO_recat_headline_specialOfferHeader_e1f");default:return""}},q={ui_link_strategy:"public-business-listing-SpecialOffer__ui_link_strategy--qOjtS",container:"public-business-listing-SpecialOffer__container--3TTte",ui_link:"public-business-listing-SpecialOffer__ui_link--1bahm",level_5:"public-business-listing-SpecialOffer__level_5--3yrYw",level_4:"public-business-listing-SpecialOffer__level_4--uexk6",level_3:"public-business-listing-SpecialOffer__level_3--2zaLS",level_2:"public-business-listing-SpecialOffer__level_2--2ihbN",level_1:"public-business-listing-SpecialOffer__level_1--3iJJj",offer:"public-business-listing-SpecialOffer__offer--3xk43",link:"public-business-listing-SpecialOffer__link--3f9k4",specialIcon:"public-business-listing-SpecialOffer__specialIcon--3nPmx"},K=function(e){function n(){var e,a;c()(this,n);for(var t=arguments.length,i=new Array(t),l=0;l<t;l++)i[l]=arguments[l];return a=r()(this,(e=p()(n)).call.apply(e,[this].concat(i))),k()(b()(b()(a)),"state",{baLinkUid:Object(v.uuid)()}),k()(b()(b()(a)),"renderSpecialOfferOverlay",function(){require(["trjs!ta/servlet/ShowSpecialOffer"],function(e){var n,t=a.props,i=t.locationId,c=t.coupon,l=t.announcement,o=t.servlet;if(c&&l)n="viewcouponandannouncement";else if(c)n="viewcoupon";else{if(!l)return;n="viewannouncement"}e.openCoupon(n,c?c.id||c.specialOfferId:0,l?l.id||l.announcementId:0,i,"/css2/build/concat/t4bso_update.css","",o,"",!1)})}),a}return f()(n,e),o()(n,[{key:"render",value:function e(){var n=this,a=this.props,t=a.locationId,i=a.coupon,c=a.announcement,l=a.showLeadIn,o=a.icon,s=a.layout,r=a.linkLevel,u=i||c;if(!u)return null;var p,d=i&&i.offerlessCommerceTrackUrl||i&&i.lightboxClickUrl||c&&c.offerlessCommerceTrackUrl||c&&c.lightboxClickUrl||"";p=i&&c?Object(g.localize)("ANCM_offersAnnouncements2_e1f"):u===c?Object(g.localize)("ANCM_search_e1f"):u.leadIn||V(u.specialOfferType);var f=u.linkText||u.headingForTeaser;return y.createElement(D,{impressionId:u.impressionId,payload:{locationId:t,couponId:i&&(i.id||i.specialOfferId),announcementId:c&&(c.id||c.announcementId),specialOfferType:u.trackingName||u.specialOfferType||"INVALID",layout:s},offerlessCommerceTrackUrl:d,baLinkUid:this.state.baLinkUid},function(e){return y.createElement("div",{className:q.container,onClick:e},y.createElement(O.Icon,{name:o,className:q.specialIcon}),y.createElement("span",{className:I()(q.offer,r&&"".concat(q.ui_link," ").concat(q[r])),onClick:n.renderSpecialOfferOverlay},l&&y.createElement("span",{className:"blOfferLead","data-blspecialoffer":"lead"},"".concat(p).concat(f?":":"")),y.createElement("span",{className:q.link,"data-blspecialoffer":"link"},f)))})}}]),n}(y.Component);k()(K,"defaultProps",{showLeadIn:!0,icon:"special-offer-fill"});var B=K,J=a("@ta/common.routing"),G={ui_link_strategy:"public-business-listing-ContactInfo__ui_link_strategy--2tJxS",offer:"public-business-listing-ContactInfo__offer--KAFI4",common:"public-business-listing-ContactInfo__common--8f5f5",about:"public-business-listing-ContactInfo__about--t3vGk",aboutHighlighted:"public-business-listing-ContactInfo__aboutHighlighted--1GpSi",location:"public-business-listing-ContactInfo__location--1jP2j",overview:"public-business-listing-ContactInfo__overview--2La_S",overview_light:"public-business-listing-ContactInfo__overview_light--29eU-",overviewOffer:"public-business-listing-ContactInfo__overviewOffer--6wt_o",webLinkText:"public-business-listing-ContactInfo__webLinkText--2Vjgm",webLink:"public-business-listing-ContactInfo__webLink--fVOkq",atfInfo:"public-business-listing-ContactInfo__atfInfo--3wJ1b",hrMeta:"public-business-listing-ContactInfo__hrMeta--2syIq",nonWebLink:"public-business-listing-ContactInfo__nonWebLink--2rxPP",nonWebLinkText:"public-business-listing-ContactInfo__nonWebLinkText--nGymU",offerIcon:"public-business-listing-ContactInfo__offerIcon--1HFZO",ui_link_container:"public-business-listing-ContactInfo__ui_link_container--37q8W",level_5:"public-business-listing-ContactInfo__level_5--3KsUA",level_4:"public-business-listing-ContactInfo__level_4--3JgmI",level_3:"public-business-listing-ContactInfo__level_3--2LNQH",level_2:"public-business-listing-ContactInfo__level_2--2obP0",level_1:"public-business-listing-ContactInfo__level_1--1s823",ui_link:"public-business-listing-ContactInfo__ui_link--1_7Zp"},Y=function e(n){var a=n.context,t=n.locationId,i=n.contactType,c=n.contact,l=n.layout,o=n.offerlessCommerceTrackUrl,s=n.baLinkUid,r=n.children;return null!=c&&y.createElement(F,{clickType:"contact",context:a,payload:{locationId:t,contactType:i,contactColumn:c.column,isCommerce:c.isCommerceLink||c.cpc,layout:l},offerlessCommerceTrackUrl:o,baLinkUid:s},function(e){return y.createElement("div",{onClick:e,className:I()(G.offer,G[l]),"data-blcontact":"".concat(i," ").concat(a||"")},r)})};Y.defaultProps={context:void 0,offerlessCommerceTrackUrl:""};var Z=Y,X=function e(){return y.createElement(O.Icon,{name:"external-link-no-box",className:"public-business-listing-OutboundIcon__outboundIcon--18FnV"})},$=function(e){function n(){var e,a;c()(this,n);for(var t=arguments.length,i=new Array(t),l=0;l<t;l++)i[l]=arguments[l];return a=r()(this,(e=p()(n)).call.apply(e,[this].concat(i))),k()(b()(b()(a)),"baLinkUid",Object(v.uuid)()),a}return f()(n,e),o()(n,[{key:"render",value:function e(){var n=this.props,a=n.contact,t=n.layout,i=n.offerTextOverride,c=n.linkLevel,l=n.contactType,o=n.icon;if(!a)return null;var s=i||a.offerText||H(l),r=a.obfuscatedUrl||a.linkUrl,u="common"===t||"about"===t||"aboutHighlighted"===t||"atfInfo"===t,p="hrMeta"===t;return y.createElement(Z,{locationId:this.props.locationId,contactType:this.props.contactType,contact:this.props.contact,layout:this.props.layout,context:this.props.context,baLinkUid:this.baLinkUid},y.createElement(J.ObfuscatedLink,{encodedUrl:r,useSpan:!0,className:I()(G.webLink,c&&"".concat(G.ui_link_container," ").concat(G[c]),p&&"ui_button secondary"),urlArgs:{ba_uid:this.baLinkUid},target:"_blank"},o&&y.createElement(O.Icon,{name:o,className:G.offerIcon}),y.createElement("span",{className:I()(G.webLinkText,c&&"".concat(G.ui_link," ").concat(G[c]))},s),u&&y.createElement(X,null)))}}]),n}(y.Component);k()($,"defaultProps",{icon:"laptop"});var Q=a("react-apollo"),ee={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"EmailLink"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"locationId"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"Int"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"locations"},arguments:[{kind:"Argument",name:{kind:"Name",value:"locationIds"},value:{kind:"ListValue",values:[{kind:"Variable",name:{kind:"Name",value:"locationId"}}]}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"locationId"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:109}};ee.loc.source={body:"a2b452b0615c"};var ne=ee,ae=function(e){function n(){var e,a;c()(this,n);for(var t=arguments.length,i=new Array(t),l=0;l<t;l++)i[l]=arguments[l];return a=r()(this,(e=p()(n)).call.apply(e,[this].concat(i))),k()(b()(b()(a)),"baLinkUid",Object(v.uuid)()),k()(b()(b()(a)),"sendEmail",function(e,n){window&&window.location&&e.query({query:ne,variables:{locationId:n}}).then(function(e){var n=e&&e.data&&e.data.locations&&e.data.locations[0]&&e.data.locations[0].name,t=L()(a.props.contact.emailParts,3),i=t[0],c=t[1],l=t[2],o=n?Object(g.localize)("ODCTest_emailsubject2_404",{0:n}):"";window.location="mailto:".concat(i).concat(c).concat(l,"?subject=").concat(encodeURIComponent(o))})}),a}return f()(n,e),o()(n,[{key:"render",value:function e(){var n=this,a=this.props,t=a.locationId,i=a.contact,c=a.layout,l=a.icon,o=a.contactType,s=a.context,r=a.client,u=a.linkLevel;return i&&i.emailParts&&3===i.emailParts.length?y.createElement(Z,{locationId:t,contactType:o,contact:i,layout:c,context:s,offerlessCommerceTrackUrl:i.offerlessCommerceTrackUrl||i.clickTrackingUrl,baLinkUid:this.baLinkUid},y.createElement("span",{onClick:function e(){return n.sendEmail(r,t)},className:I()(G.nonWebLink,u&&"".concat(G.ui_link_container," ").concat(G[u]))},l&&y.createElement(O.Icon,{name:l,className:G.offerIcon}),y.createElement("span",{className:I()(G.nonWebLinkText,u&&"".concat(G.ui_link," ").concat(G[u]))},i.offerText||H("EMAIL"),"common"===c?y.createElement(X,null):null))):null}}]),n}(y.Component);k()(ae,"defaultProps",{contactType:"EMAIL",icon:"email"});var te=Object(Q.withApollo)(ae),ie=function(e){function n(){var e,a;c()(this,n);for(var t=arguments.length,i=new Array(t),l=0;l<t;l++)i[l]=arguments[l];return a=r()(this,(e=p()(n)).call.apply(e,[this].concat(i))),k()(b()(b()(a)),"baLinkUid",Object(v.uuid)()),a}return f()(n,e),o()(n,[{key:"render",value:function e(){var n=this.props,a=n.useCallCta,t=n.icon,i=n.contact,c=n.locationId,l=n.contactType,o=n.layout,s=n.context,r=n.linkLevel,u=i&&(i.displayPhoneNumber||i.displayPhone);return u?y.createElement(Z,{locationId:c,contactType:l,contact:i,layout:o,context:s,offerlessCommerceTrackUrl:i.offerlessCommerceTrackUrl||i.clickTrackingUrl,baLinkUid:this.baLinkUid},y.createElement("a",{href:"tel:".concat(i.value||i.rawPhone),className:I()(G.nonWebLink,r&&"".concat(G.ui_link_container," ").concat(G[r])),dir:"ltr"},t&&y.createElement(O.Icon,{name:t,className:G.offerIcon}),y.createElement("span",{className:I()(G.nonWebLinkText,r&&"".concat(G.ui_link," ").concat(G[r]))},a?Object(g.localize)("hr_about_call"):u))):null}}]),n}(y.Component);k()(ie,"defaultProps",{contactType:"PHONE",icon:"phone",useCallCta:!1});var ce=a("@ta/overlays.modal"),le=a("@ta/overlays.managers"),oe=a("@ta/common.radio"),se=a.n(oe),re={mapLink:"public-business-listing-Address__mapLink--1wZCm",localAddress:"public-business-listing-Address__localAddress--2hZiD",addressHead:"public-business-listing-Address__addressHead--2aDRx",addressLabel:"public-business-listing-Address__addressLabel--Oar1U",addressValue:"public-business-listing-Address__addressValue--1ULuO"},ue=function(e){function n(){var e,a;c()(this,n);for(var t=arguments.length,i=new Array(t),l=0;l<t;l++)i[l]=arguments[l];return a=r()(this,(e=p()(n)).call.apply(e,[this].concat(i))),k()(b()(b()(a)),"state",{mapRadio:null}),k()(b()(b()(a)),"openMap",function(){a.state.mapRadio&&a.state.mapRadio.emit("open-trigger-clicked")}),k()(b()(b()(a)),"renderMapLink",function(){var e=a.props,n=e.layout,t=e.disableMap;return"location"===n||"atfInfo"===n||t?null:y.createElement("span",{className:re.mapLink},Object(g.localize)("mw_common_seeOnMap_ffffec3e"))}),a}return f()(n,e),o()(n,[{key:"componentDidMount",value:function e(){this.setState({mapRadio:se()("hr-map")})}},{key:"render",value:function e(){var n=this.props,a=n.address,t=n.userLanguage,i=n.layout,c=n.disableMap,l=n.linkLevel,o=a&&a.localAddress&&a.localLanguage&&a.localLanguage!==t,s=l?"".concat(G.ui_link_container," ").concat(G[l]):"";return y.createElement(y.Fragment,null,a.address?y.createElement("div",{className:I()(G.offer,G[i])},y.createElement(O.Icon,{name:"map-pin-fill",className:G.offerIcon}),y.createElement("span",{onClick:!c&&this.openMap,className:I()(k()({},"".concat(G.nonWebLink," ").concat(s),!c))},y.createElement("span",{className:!c&&l?"".concat(G.ui_link," ").concat(G[l]):""},a.address),this.renderMapLink())):null,o?y.createElement("div",{className:I()(G.offer,G[i])},y.createElement(O.Icon,{name:"refresh",className:G.offerIcon}),y.createElement(le.Opener,{name:"overlay-localAddress-".concat(G[i])},function(e){return y.createElement("span",{onClick:e,className:I()(G.nonWebLink,s)},y.createElement("span",{className:I()(G.nonWebLink,l?"".concat(G.ui_link," ").concat(G[l]):"")},Object(g.localize)("localnameandaddress_1")))}),y.createElement(ce.Modal,{name:"overlay-localAddress-".concat(G[i]),disableFullscreenOnMobile:!0},y.createElement("div",{className:re.localAddress},y.createElement("div",{className:re.addressHead},Object(g.localize)("localnameandaddress_1")),y.createElement("div",{className:re.addressLabel},"".concat(Object(g.localize)("local-name-and-address_localname")).concat(Object(g.localize)("common_colon"))),y.createElement("div",{className:re.addressValue},a.localName),y.createElement("div",{className:re.addressLabel},"".concat(Object(g.localize)("local-name-and-address_localaddress")).concat(Object(g.localize)("common_colon"))),y.createElement("div",{className:re.addressValue},a.localAddress)))):null)}}]),n}(y.Component);k()(ue,"defaultProps",{layout:"overview",disableMap:!1});var pe=ue,de=a("./packages/public/business-listing/types.jsx"),fe=a("@babel/runtime/helpers/esm/toConsumableArray"),me=a.n(fe),be=a("@ta/common.decode"),_e=a.n(be),ke=a("js-cookie"),ye=a.n(ke),ge=function e(n){var a=Object(U.getStore)().getState(),t=a.route.page,i=a.meta.cookieDomain,c=a.tracking.uid,l=["ta.servlet.ShowSpecialOffer.openOnOpen",n.action,n.couponId,n.announcementId,n.locationId,n.cssFile,n.autoPid||"",t,n.locale||"",n.isAmex||"",null,n.isSponsoredListing.toString()],o=new Date((new Date).getTime()+5e3);ye.a.set("NPID",n.pid||c,{expires:o,path:"/",domain:i}),n.targetPage&&(l=["target:".concat(n.targetPage)].concat(me()(l)));var s=l.join("|");if(ye.a.set("ajaxAction",s,{expires:null,path:"/",domain:i}),n.offerlessCommerceUrl){var r=_e()(n.offerlessCommerceUrl).split("?"),u=L()(r,2),p=u[0],d=u[1],f=new URLSearchParams(d);n.impressionKey&&f.set("ik",n.impressionKey),n.listingKey&&f.set("lk",n.listingKey),n.baLinkUid&&f.set("ba_uid",n.baLinkUid);var m=[p,f.toString()].join("?");N(m)}A({context:t,clickType:"specialOffer",payload:{locationId:n.locationId,specialOfferType:n.couponId?n.specialOfferType:"INVALID",couponId:n.couponId||null,announcementId:n.announcementId||null}})};a.d(n,"SpecialOffer",function(){return B}),a.d(n,"WebLink",function(){return $}),a.d(n,"EmailLink",function(){return te}),a.d(n,"PhoneLink",function(){return ie}),a.d(n,"Address",function(){return pe}),a.d(n,"ContactLinkProps",function(){return de.ContactLinkProps}),a.d(n,"AddressInfo",function(){return de.AddressInfo}),a.d(n,"offerTextFromContactType",function(){return H}),a.d(n,"leadInFromSpecialOfferType",function(){return V}),a.d(n,"remapContacts",function(){return W}),a.d(n,"trackImpression",function(){return R}),a.d(n,"specialOfferViewWithOpen",function(){return ge})},"./packages/public/business-listing/types.jsx":function(e,n){}}});
//# sourceMappingURL=public.business-listing.c338abd5c9.js.map