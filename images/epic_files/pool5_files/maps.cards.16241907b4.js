($WP="undefined"!=typeof $WP?$WP:[]).push({id:"@ta/maps.cards",d:["vendor-react-libs","@ta/maps.attractions-common","ta-platform","@ta/maps.click-source-tracking","lithium-platform","ta-common","@ta/trips.trip-flow-selector","@ta/trips.bookmark-icon","@ta/maps.location-types","@ta/maps.hoteloffer","@ta/maps.sponsored-pill","@ta/maps.thumbnail","@ta/hotels.tracking","vendor-babel","vendor-redux-libs","@ta/hotels.sponsored-listings","@ta/hotels.vacationpackages"],e:["./packages/maps/cards/entrypoint.jsx"],x:{"./packages/maps/cards/entrypoint.jsx":["AttractionCard","BaseLocationCard","HotelCard","RestaurantCard","LocationCard","VacationPackageCard"]},m:{"./packages/maps/cards/entrypoint.jsx":function(e,t,a){"use strict";a.r(t);var n=a("react"),r=a("@ta/maps.attractions-common"),i=a("@ta/common.tracking"),l=a.n(i),o=a("@ta/maps.click-source-tracking"),c=a("@ta/common.features"),s=a("@ta/common.routing"),m=a("@ta/styleguide.bubble-rating"),d=a("@ta/trips.trip-flow-selector"),u=a("@ta/trips.bookmark-icon"),p=a("@ta/styleguide.icon"),g=a("@ta/maps.location-types"),C=function e(t){var a=t.src,r=t.entityType;return a?n.createElement("div",{className:"maps-cards-CardThumbnail__photo--Qm9Mw",style:{backgroundImage:"url(".concat(a,")")}}):n.createElement("span",{className:"maps-cards-CardThumbnail__iconWrapper--wGz4P"},n.createElement(p.Icon,{name:Object(g.iconForEntityType)(r),className:"maps-cards-CardThumbnail__icon--3NHcm"}))};C.defaultProps={src:void 0};var f=C,k=function e(t){var a=function e(a,n){t.onDetailUrlClick&&t.onDetailUrlClick(n),a.stopPropagation()},r=t.thumbnail,p=t.entityType,g=t.renderThumbnail,C=n.useCallback(function(){if(g){var e=g();if(e)return e}return n.createElement(f,{src:r,entityType:p})},[g,r,p]),k=!t.hideBookmark&&Object(c.featureIsEnabled)("social_2018");return n.createElement("div",{className:"maps-cards-BaseLocationCard__outerContainer--2xViZ",onClick:t.onClick},n.createElement("div",{className:"".concat("maps-cards-BaseLocationCard__container--1OQgF"," ").concat(t.selected?"maps-cards-BaseLocationCard__selected--29vrV":""," ").concat(t.className||"")},n.createElement("div",{className:"".concat("maps-cards-BaseLocationCard__thumbnail--3ZSZa"," ").concat(t.largeImage?"maps-cards-BaseLocationCard__fullHeight--1Gr24":"")},n.createElement(s.Link,{href:t.detailUrl,onClick:function e(n){l()({module:"map_card",action:"card_photo_click",context:t.entityType}),a(n,o.CLICK_SOURCES.PHOTO)},target:"_blank"},C()),k&&n.createElement("span",{className:"maps-cards-BaseLocationCard__saveToTripButton--1v5s6"},n.createElement(d.QueriedTripFlowSelector,{object:{__typename:"LocationInformation",locationId:t.locationId},trackingContext:"Map"},function(e,t){return n.createElement(u.BookmarkIcon,{active:t,bookmarkStyle:"stacked",bookmarkSize:"24",onClick:e})}))),n.createElement("div",{className:"".concat("maps-cards-BaseLocationCard__rightContainer--3JZW2"," ").concat(t.largeImage?"maps-cards-BaseLocationCard__fullHeight--1Gr24":"")},t.titlePill&&("string"==typeof t.titlePill?n.createElement("div",{className:"maps-cards-BaseLocationCard__titlePill--2BV-M"},t.titlePill):t.titlePill),n.createElement(s.Link,{href:t.detailUrl,onClick:function e(t){return a(t,o.CLICK_SOURCES.NAME)},target:"_blank"},n.createElement(i.ClickTracker,{module:"map_card",action:"card_name_click",context:t.entityType},n.createElement("div",{className:"maps-cards-BaseLocationCard__title--1QCbV","data-base-location-card-title":"true",dir:"auto"},t.title))),n.createElement("div",{className:"maps-cards-BaseLocationCard__title2--2ypwc"},t.title2),n.createElement(s.Link,{href:"".concat(t.detailUrl,"#REVIEWS"),onClick:function e(t){return a(t,o.CLICK_SOURCES.REVIEWS)},target:"_blank"},void 0!==t.rating?n.createElement(m.BubbleRatingWithReviewCount,{rating:t.rating/10,numReviews:t.numReviews,fontSize:14}):null),t.subtitle&&("string"==typeof t.subtitle?n.createElement("div",{className:"maps-cards-BaseLocationCard__subtitle--1y1ao"},t.subtitle):t.subtitle),t.fullWidthFooter?null:n.createElement("div",{className:"maps-cards-BaseLocationCard__footerContainer--1Yhli"},t.children&&t.children()))),t.fullWidthFooter?n.createElement("div",{className:"maps-cards-BaseLocationCard__fullWidthFooterContainer--37yk7"},t.children&&t.children()):null)};k.defaultProps={rating:void 0,numReviews:0,selected:!1,onClick:null,largeImage:!1,thumbnail:null,renderThumbnail:null,subtitle:null,title2:null,children:null,className:"",fullWidthFooter:!1,hideBookmark:!1,onDetailUrlClick:null,titlePill:null};var b=k,h=function e(t){return n.createElement(b,{locationId:t.locationId,entityType:"attraction",title:t.title,detailUrl:t.detailUrl,rating:t.rating,numReviews:t.numReviews,thumbnail:t.thumbnail,subtitle:function e(){return n.createElement(r.AttractionSubtitle,{category:t.localizedCategorySubtext||t.category,openHours:t.openHours,openNow:t.openNow,detailUrl:t.detailUrl})}(),onClick:t.onClick,selected:t.selected,largeImage:t.largeImage},function(){return n.createElement(i.ClickTracker,{module:"map_card",action:"card_cta_click",context:"attraction",forceAjax:!0},n.createElement(r.AttractionCta,{locationId:t.locationId,experiencesCtaEncodedLink:t.experiencesCtaEncodedLink,experiencesCtaNumOffers:t.experiencesCtaNumOffers,experiencesCtaStartingCost:t.experiencesCtaStartingCost}))})};h.defaultProps={rating:0,numReviews:0,selected:!1,onClick:null,largeImage:!1,thumbnail:null,category:null,experiencesCtaEncodedLink:void 0,experiencesCtaNumOffers:0,experiencesCtaStartingCost:void 0,openHours:void 0,openNow:void 0,localizedCategorySubtext:void 0};var v=h,_=a("@ta/maps.hoteloffer"),y=a("@ta/maps.sponsored-pill"),I=a.n(y),E=a("@ta/maps.thumbnail"),T=a.n(E),x=a("@ta/hotels.tracking"),R=a.n(x),w={module:"map_card",action:"card_cta_click",context:"hotel"},S={module:"map_card",action:"card_cta_click",context:"hotel_deferred"},N=function e(){return n.createElement(f,{entityType:"hotel"})},U=function e(t){var a=t.isSponsored&&n.createElement("div",{className:"".concat("maps-cards-HotelCard__sponsoredContainer--3_DgH")},n.createElement(I.a,null)),r=t.locationId,i=n.useCallback(function(){return Object(c.featureIsEnabled)("hotels_media_mas_maps")?n.createElement(T.a,{locationId:r,renderNoPhotosDefault:N}):null},[r]);return n.createElement(R.a,{hotelListingRenderer:function e(l){return n.createElement(b,{locationId:r,entityType:"hotel",title:t.title,title2:t.accommodationCategory,detailUrl:t.detailUrl,rating:t.rating,numReviews:t.numReviews,thumbnail:t.thumbnail,renderThumbnail:i,onClick:t.onClick,onDetailUrlClick:function e(t){var a=Object(x.getSourceElemForMapClick)(t,o.MAP_LISTING_TYPES.CARD);l(a)},selected:t.selected,largeImage:t.largeImage,titlePill:a},function(){return t.offers?n.createElement(_.HotelOffer,{offers:t.offers,trackingProps:w,preOfferClick:t.preOfferClick,priceSize:16}):n.createElement(_.DeferredHotelOffer,{locationId:t.locationId,trackingProps:S})})},customClickHandler:t.onDetailUrlClick,locationId:r,listingKey:t.listingKey,interactionsParamName:x.INTERACTIONS_PARAM_NAMES.HOTEL_MAPS_COMPONENT})};U.defaultProps={rating:0,numReviews:0,popIndexText:null,selected:!1,onClick:null,largeImage:!1,thumbnail:null,accommodationCategory:null,isSponsored:!1,onDetailUrlClick:null,preOfferClick:function e(){}};var L=U,P=a("@babel/runtime/helpers/esm/objectSpread"),O=a.n(P),H=a("react-redux"),B=a("@ta/common.radio"),j=a.n(B),D=a("@ta/common.i18n"),A=a("@ta/styleguide.button"),z=a.n(A),W=function e(t,a){return[t,a.join(", ")].filter(function(e){return""!==e}).join(", ")},M=Object(H.connect)(function(e,t){var a=e.page.detailId;return O()({},{rating:0,numReviews:0,priceString:"",selected:!1,onClick:null,largeImage:!1,thumbnail:null,reserveText:null},t,{pageDetailId:a})})(function e(t){return n.createElement(b,{locationId:t.locationId,entityType:"restaurant",title:t.title,detailUrl:t.detailUrl,rating:t.rating,numReviews:t.numReviews,thumbnail:t.thumbnail,subtitle:W(t.priceString||"",t.cuisines||[]),onClick:t.onClick,selected:t.selected,largeImage:t.largeImage},function(){var e=t.pageDetailId===t.locationId,a=e?void 0:t.detailUrl,r=e?function(){return j()("restaurant-detail-map").emit("close-trigger-clicked")}:void 0;return n.createElement("div",{style:{float:"right"}},n.createElement(s.ResponsiveTargetLink,{target:"_blank",mobileTarget:"_self",href:a,onClick:r},n.createElement(i.ClickTracker,{module:"map_card",action:"card_cta_click",context:"restaurant"},n.createElement(z.a,{size:"small"},t.reserveText||Object(D.localize)("attractions.cta_more_info")))))})}),K=a("@babel/runtime/helpers/esm/extends"),V=a.n(K),F=a("@babel/runtime/helpers/esm/classCallCheck"),G=a.n(F),Q=a("@babel/runtime/helpers/esm/createClass"),Z=a.n(Q),$=a("@babel/runtime/helpers/esm/possibleConstructorReturn"),Y=a.n($),J=a("@babel/runtime/helpers/esm/getPrototypeOf"),q=a.n(J),X=a("@babel/runtime/helpers/esm/inherits"),ee=a.n(X),te=a("@babel/runtime/helpers/esm/assertThisInitialized"),ae=a.n(te),ne=a("@babel/runtime/helpers/esm/defineProperty"),re=a.n(ne),ie=(a("@ta/hotels.sponsored-listings"),a("@ta/hotels.vacationpackages")),le={module:"map_card",action:"card_cta_click",context:"vp"},oe=function e(){return n.createElement(f,{entityType:"hotel"})},ce=function e(t){var a=t.locationId,r=n.useCallback(function(){return Object(c.featureIsEnabled)("hotels_media_mas_maps")?n.createElement(T.a,{locationId:a,renderNoPhotosDefault:oe}):null},[a]),i=function e(){l()(le)};return n.createElement(b,{locationId:a,entityType:"vp",title:t.title,title2:t.accommodationCategory,detailUrl:t.detailUrl,rating:t.rating,numReviews:t.numReviews,thumbnail:t.thumbnail,renderThumbnail:r,onClick:t.onClick,selected:t.selected,largeImage:t.largeImage},function(){return t.vpoffers?n.createElement(ie.VpOffer,{displayType:"map",offer:t.vpoffers[0],onClick:i,className:"mapBottomSmall"}):null})};ce.defaultProps={rating:0,numReviews:0,popIndexText:null,selected:!1,onClick:null,largeImage:!1,thumbnail:null,accommodationCategory:null,isSponsored:!1,onDetailUrlClick:null,preOfferClick:function e(){}};var se=ce,me=function(e){function t(){var e,a;G()(this,t);for(var r=arguments.length,i=new Array(r),l=0;l<r;l++)i[l]=arguments[l];return a=Y()(this,(e=q()(t)).call.apply(e,[this].concat(i))),re()(ae()(ae()(a)),"onClick",function(){a.props.onClick&&a.props.onClick(a.props.location)}),re()(ae()(ae()(a)),"createHotelCard",function(e,t){var r=a.props,i=r.selected,l=r.largeImage,o={};return e.sponsoredListing&&(o={isSponsored:!0,onDetailUrlClick:function t(){a.props.spTrackingHandler&&a.props.spTrackingHandler.clickHandler(e)},preOfferClick:function t(n){a.props.spTrackingHandler&&a.props.spTrackingHandler.offerClickHandler(e,n)}}),n.createElement(L,V()({},o,{locationId:e.id,title:e.name,rating:e.bubbleRating,numReviews:e.numReviews,thumbnail:t,detailUrl:e.detailUrl,popIndexText:e.popIndexText,accommodationCategory:e.accommodationCategory,offers:e.offers,onClick:a.onClick,selected:i,largeImage:l,listingKey:e.listingKey}))}),a}return ee()(t,e),Z()(t,[{key:"render",value:function e(){var t=this.props,a=t.location,r=t.selected,i=t.largeImage,l=t.localizedCategorySubtext,o=a.thumbnail&&a.thumbnail.images.large.url;switch(a.entityType){case"hotel":return this.createHotelCard(a,o);case"restaurant":return n.createElement(M,{locationId:a.id,title:a.name,rating:a.bubbleRating,numReviews:a.numReviews,thumbnail:o,detailUrl:a.detailUrl,priceString:a.priceString,cuisines:(a.cuisines||[]).map(function(e){return e.name}),reserveText:a.commerceInfo&&a.commerceInfo.buttonText,onClick:this.onClick,selected:r,largeImage:i});case"attraction":return n.createElement(v,{locationId:a.id,title:a.name,rating:a.bubbleRating,numReviews:a.numReviews,thumbnail:o,detailUrl:a.detailUrl,category:a.category,onClick:this.onClick,selected:r,largeImage:i,experiencesCtaNumOffers:a.experiencesCtaNumOffers,experiencesCtaEncodedLink:a.experiencesCtaEncodedLink,experiencesCtaStartingCost:a.experiencesCtaStartingCost,openHours:a.openHours,openNow:a.openNow,localizedCategorySubtext:l});case"rental":return n.createElement(b,{locationId:a.id,title:a.name,rating:a.bubbleRating,numReviews:a.numReviews,thumbnail:o,detailUrl:a.detailUrl,onClick:this.onClick,entityType:a.entityType||"unknown",selected:r,largeImage:i});case"vp":return n.createElement(se,{locationId:a.id,title:a.name,rating:a.bubbleRating,numReviews:a.numReviews,thumbnail:o,detailUrl:a.detailUrl,accommodationCategory:a.accommodationCategory,vpoffers:a.vpoffers,onClick:this.onClick,selected:r,largeImage:i,listingKey:a.listingKey});default:return n.createElement(b,{locationId:a.id,hideBookmark:!0,title:a.name,rating:a.bubbleRating,numReviews:a.numReviews,thumbnail:o,detailUrl:a.detailUrl,onClick:this.onClick,entityType:a.entityType||"unknown",selected:r,largeImage:i})}}}]),t}(n.PureComponent);re()(me,"defaultProps",{selected:!1,onClick:null,largeImage:!1,spTrackingHandler:null,localizedCategorySubtext:void 0});var de=me;a.d(t,"AttractionCard",function(){return v}),a.d(t,"BaseLocationCard",function(){return b}),a.d(t,"HotelCard",function(){return L}),a.d(t,"RestaurantCard",function(){return M}),a.d(t,"LocationCard",function(){return de}),a.d(t,"VacationPackageCard",function(){return se})}}});
//# sourceMappingURL=maps.cards.16241907b4.js.map