($WP="undefined"!=typeof $WP?$WP:[]).push({id:"@ta/hotels.community-tab-reviews",d:["vendor-react-libs","@ta/hotels.review-list-parts","lithium-platform","@ta/common.safety-alert","@ta/hotels.community-tab-common"],e:["./packages/hotels/community-tab-reviews/community-tab-reviews.jsx"],x:{"./packages/hotels/community-tab-reviews/community-tab-reviews.jsx":["connectToHotelReviewWithPref","default","ssrQueries"]},m:{"./packages/hotels/community-tab-reviews/community-tab-reviews.jsx":function(e,t,n){"use strict";n.r(t);var r=n("react"),o=n("@ta/hotels.review-list-parts"),a=n("@ta/platform.import"),c=n("@ta/common.safety-alert"),i=n.n(c),l=n("@ta/hotels.community-tab-common"),s=n("@ta/common.features");n.d(t,"connectToHotelReviewWithPref",function(){return A}),n.d(t,"ssrQueries",function(){return N});var m,u=a.component.onUsage(((m=function e(){return n.e("@ta/hotels.partner-content-reviews")}).__PACKAGE__="@ta/hotels.community-tab-reviews",m.__MODULE_ID__="@ta/hotels.partner-content-reviews",m.__MODULE_NAME__="@ta/hotels.partner-content-reviews",m.__BUNDLE_NAME__="@ta/hotels.partner-content-reviews",m.__GET_SYNC__=function(){return n.m["@ta/hotels.partner-content-reviews"]?n("@ta/hotels.partner-content-reviews"):null},m.__IS_LOADED__=function(){return void 0!==n.m["@ta/hotels.partner-content-reviews"]},m),"PartnerReviewsContainer"),E={SSR_QUERIES:[],ROOT_FIELDS:[],LOCATION_FIELDS:[],REVIEW_LIST_FIELDS:[],REVIEW_FIELDS:[]},v=o.connectHeader(E),_=o.connectRatingLine(E),w=o.connectReviewTitle(E),f=o.connectGoogleTranslateButton(E),p=o.connectInlineRoomTip(E),d=o.connectEventDate(E),h=o.connectAdditionalRatings(E),R=o.connectTripType(E),y=o.connectGoogleTranslateResponseButton(E),b=o.connectOwnerResponse(E,{header:function e(t){return r.createElement(y,t)}}),F=o.connectInlinePhotos(E),I=o.connectResponseDisclaimerFooter(E),S=o.connectDisclaimerFooter(E),T=o.connectAttributionFooter(E),L=o.connectSocial(E),g=o.connectExpando(E,{children:function e(t,n){var o,a;return n?r.createElement(r.Fragment,null,r.createElement(d,t),r.createElement(R,t),r.createElement(p,t),r.createElement(h,t),r.createElement(T,t),r.createElement(D,t),r.createElement(S,t),r.createElement(L,t),r.createElement(b,t),r.createElement(I,t)):r.createElement(r.Fragment,null,r.createElement(T,t),r.createElement("div",{className:"hotels-community-tab-reviews-ReviewsTabContent__footer--2FHIK"},r.createElement(d,t),0===(null==t?void 0:null===(o=t.reviewList)||void 0===o?void 0:null===(a=o.page)||void 0===a?void 0:a.offset)&&r.createElement("span",{className:"hotels-community-tab-reviews-ReviewsTabContent__hiddenReviewContent--FCrPr"},r.createElement(h,t),r.createElement(R,t),r.createElement(p,t)),r.createElement(D,t)),r.createElement(L,t),r.createElement(b,t))}},!0),D=o.connectMTFooter(E),C=o.connectReview(E,{header:function e(t){return r.createElement(v,t)},photos:function e(t){return r.createElement(F,t)},mainCol:function e(t){return r.createElement(r.Fragment,null,r.createElement(_,t),r.createElement(w,t),t.review.alertStatus&&r.createElement("div",{className:"hotels-community-tab-reviews-ReviewsTabContent__safetyAlert--2MRuW"},r.createElement(i.a,null)),r.createElement(f,t),r.createElement(g,t))}}),P=o.connectReviewList(E,{review:function e(t){return r.createElement(l.Card,{key:t.queryProps.review.id},r.createElement(C,t))},reviewFilters:function e(t){return r.createElement(o.ReviewFilters,t)},searchBox:function e(t){return r.createElement(o.SearchBox,t)}}),A=function e(){return o.connectHRQuery(E,function(e){return r.createElement(r.Fragment,null,r.createElement(P,e),Object(s.featureIsEnabled)("display_restricted_partner_reviews")?r.createElement(u,{taReviewList:e.reviewList}):null)})},O=A(),N=(t.default=O,function e(t){return E.SSR_QUERIES.map(function(e){return e(t)})})}}});
//# sourceMappingURL=hotels.community-tab-reviews.3d08239112.js.map