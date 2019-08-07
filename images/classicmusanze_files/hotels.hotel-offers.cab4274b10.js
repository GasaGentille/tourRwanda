($WP="undefined"!=typeof $WP?$WP:[]).push({id:"@ta/hotels.hotel-offers",d:["vendor-babel","vendor-react-libs","lithium-platform","ta-platform","ta-common","@ta/public.dataroots","@ta/public.data-api-polling"],e:["./packages/hotels/hotel-offers/hotel-offers.jsx"],x:{"./packages/hotels/hotel-offers/hotel-offers.jsx":["DominantOffer","bindDominantOffer","DetailTextOffer","bindDetailTextOffer","DetailChevronOffer","bindDetailChevronOffer","MobileDrawerOffer","bindMobileDrawerOffer","MiniOffer","getOfferElementProps","clickOfferElement","bindToHotelReview","isAnyAvailable","isNoCommerce","isBookWithRewards","getTopOffer","MerchandiseMessage","default"]},m:{"./packages/hotels/hotel-offers/hotel-offers.jsx":function(e,t,r){"use strict";r.r(t);var a=r("@babel/runtime/helpers/esm/extends"),n=r.n(a),o=r("react"),s=r("@ta/common.i18n"),l=r("@ta/common.cdn"),i=r("@ta/common.features"),c=r("@ta/common.classnames"),f=r.n(c);require(["trjs!commerce/offerclick"],function(){return null});var u=function e(t){if(!t)return{};var r={"data-contentid":t.contentId,"data-provider":t.provider,"data-clicktoken":t.clickToken||void 0,"data-early-click-target":"commerce/offerclick.compElementClick"};return(t.dataAtts?Object.keys(t.dataAtts).filter(function(e){return!r[e]&&/^data-/.test(e)}):[]).forEach(function(e){t&&t.dataAtts&&(r[e.toLowerCase()]=t.dataAtts[e])}),r},m=function e(t,r){t.persist();var a=r||t.currentTarget,n=a&&a.getAttribute("data-clicktoken");return!(!n||window._hotels_early_clicks_enabled_&&a.getAttribute("data-early-click-target")||(require(["trjs!commerce/offerclick"],function(e){return e.clickEvent(t.nativeEvent,a,n)}),1))},d=r("@babel/runtime/helpers/esm/defineProperty"),h=r.n(d),p=r("@ta/styleguide.icon"),_=function e(t){var r=t.message,a=Object(i.featureIsEnabled)("payment_messaging_ui_update");return o.createElement("div",{className:f()("hotels-hotel-offers-MerchandiseMessage__merchandiseMessage--1LZv3",h()({},"hotels-hotel-offers-MerchandiseMessage__singleLine--2TyGY",a))},o.createElement(p.Icon,{name:"checkmark",className:f()("hotels-hotel-offers-MerchandiseMessage__merchandiseMessageIcon--3Omc_",h()({},"hotels-hotel-offers-MerchandiseMessage__grayIcon--m9pI_",a))}),r)},v=function e(t){return t&&t.isIbOffer&&Object(i.featureIsEnabled)("om_affiliate_commerce_button_CTA")},O=function e(t){var r=t.data,a=t.providerLogoUrl,c=t.providerDisplayName,d=t.strikeThroughText,h=t.buttonText,p=t.priceText,O=t.status,g=t.merchandiseMessages;return o.createElement("div",null,o.createElement("a",n()({id:"bor_book_link_".concat(r.contentId),className:f()("hotels-hotel-offers-DominantOffer__offer--152Fj","offer",d&&Object(i.featureIsEnabled)("black_strikethrough")&&"hotels-hotel-offers-DominantOffer__blackStrikeThrough--3LBE4",Object(i.featureIsEnabled)("commerce_link_strategy_underline_prices")&&"hotels-hotel-offers-DominantOffer__linkStrategyUnderlinePrices--2TiVd",r.clickToken&&"bookableOffer"),href:"javascript:void(0);",onClick:function e(t){return m(t)}},u(r)),o.createElement("div",{className:"ui_columns is-mobile is-multiline is-vcentered is-gapless-vertical ".concat("hotels-hotel-offers-DominantOffer__offerBlock--1K1CL")},o.createElement("div",{className:"ui_column ".concat("hotels-hotel-offers-DominantOffer__logo--1KDoW")},function e(t,r,a){return t.isIbOffer?o.createElement("span",{className:"svgico ".concat("hotels-hotel-offers-DominantOffer__ta_meta_logo--1HyNm")}):r?o.createElement(l.CdnImage,{className:"hotels-hotel-offers-DominantOffer__logo_img--2-BIH",src:r,alt:a}):o.createElement("span",{className:"taLnk",title:a},a)}(r,a,c)),o.createElement("div",{className:"ui_column ".concat("hotels-hotel-offers-DominantOffer__priceBlock--1NB9R")},d?o.createElement("div",{className:"hotels-hotel-offers-DominantOffer__xthrough--pk0Bk"},d):null,p?o.createElement("div",{className:"hotels-hotel-offers-DominantOffer__price--D-ycN"},p):null)),function e(t){return v(t)?o.createElement(_,{key:Object(s.localize)("affiliate_merchandise_message_v1"),message:Object(s.localize)("affiliate_merchandise_message_v1")}):null}(r),function e(t){return t&&0!==t.length?o.createElement("div",{className:"hotels-hotel-offers-DominantOffer__merchandiseMessagesWrapper--2XT-A"},t.map(function(e){return o.createElement(_,{key:e,message:e})})):null}(g)),o.createElement("div",{className:"ui_columns is-mobile"},o.createElement("div",{className:"ui_column is-12 ".concat("hotels-hotel-offers-DominantOffer__ctaColumn--3V-xN")},o.createElement("div",n()({className:"".concat("hotels-hotel-offers-DominantOffer__ctaButton--2wh3E"," ui_button original"),onClick:function e(t){return m(t)}},u(r)),"IN_PROGRESS"===O?o.createElement("span",{className:"ui_loader small ".concat("hotels-hotel-offers-DominantOffer__loader--3QRVq")},o.createElement("span",null),o.createElement("span",null),o.createElement("span",null),o.createElement("span",null),o.createElement("span",null)):h||function e(t){return v(t)?Object(s.localize)("affiliate_cta_book_get_rewards_v1"):null}(r)||Object(s.localize)("view_deal")))))},g=function e(t){return t.offerFields.push("data","providerLogoUrl","strikeThroughText","savePriceText","providerDisplayName","taxesAndFeesText","priceText","status","merchandiseMessages"),function e(t){var r=t.offer;return r.data&&o.createElement(O,{data:r.data,providerLogoUrl:r.providerLogoUrl,providerDisplayName:r.providerDisplayName||"",priceText:r.priceText,strikeThroughText:r.strikeThroughText,status:r.status||"UNCONFIRMED",merchandiseMessages:r.merchandiseMessages})}};O.defaultProps={providerLogoUrl:void 0,priceText:void 0,strikeThroughText:void 0,buttonText:void 0,status:void 0,merchandiseMessages:void 0};var E=O,b=function e(t){var r=t.data,a=t.providerDisplayName,s=t.priceText,l=t.isComparisonOffer,c=t.status,d=t.inDropdown;return o.createElement("div",n()({className:f()("hotels-hotel-offers-DetailTextOffer__offer--3a6SH",!r.clickToken&&"hotels-hotel-offers-DetailTextOffer__unclickable--3-rKE",d&&"hotels-hotel-offers-DetailTextOffer__inDropdown--2mtzW",Object(i.featureIsEnabled)("black_strikethrough")&&"hotels-hotel-offers-DetailTextOffer__blackStrikeThrough--Pas5i",Object(i.featureIsEnabled)("commerce_link_strategy_underline_prices")&&"hotels-hotel-offers-DetailTextOffer__linkStrategyUnderlinePrices--1ikZZ"),onClick:function e(t){return m(t)}},u(r)),o.createElement("span",{title:a,className:"hotels-hotel-offers-DetailTextOffer__provider--1ai6p"},a,r.isIbOffer||!r.clickToken?null:o.createElement("span",{className:"ui_icon external-link-no-box"})),function e(t,r,a,n){return"IN_PROGRESS"===t?o.createElement("span",{className:"hotels-hotel-offers-DetailTextOffer__loading--1m0iV"},o.createElement("span",{className:"ui_loader small"},o.createElement("span",null),o.createElement("span",null),o.createElement("span",null),o.createElement("span",null),o.createElement("span",null))):"UNAVAILABLE"!==t&&a?"AVAILABLE"===t&&r?n?o.createElement("span",{title:r,className:f()("hotels-hotel-offers-DetailTextOffer__price--2gYdd","hotels-hotel-offers-DetailTextOffer__comparisonOffer--11Mdk")},r):o.createElement("span",{title:r,className:"hotels-hotel-offers-DetailTextOffer__price--2gYdd"},r):o.createElement("span",{className:"hotels-hotel-offers-DetailTextOffer__price--2gYdd"},o.createElement("span",{className:"ui_icon search"})):o.createElement("span",{className:"hotels-hotel-offers-DetailTextOffer__price--2gYdd"},o.createElement("span",{className:"ui_icon prohibited"}))}(c,s,!!r.clickToken,l))};b.defaultProps={priceText:void 0,isComparisonOffer:void 0,inDropdown:void 0};var k=function e(t,r){return t.offerFields.push("data","providerDisplayName","priceText","isComparisonOffer","status"),function e(t){var a=t.offer;return a.data&&o.createElement(b,{data:a.data,providerDisplayName:a.providerDisplayName||"",priceText:a.priceText,isComparisonOffer:a.isComparisonOffer,status:a.status||"UNCONFIRMED",inDropdown:r})}},D=b,N=function e(t){var r=t.data,a=t.providerLogoUrl,c=t.providerDisplayName,d=t.strikeThroughText,h=t.buttonText,p=t.priceText,v=t.status,O=t.savePriceText,g=t.taxesAndFeesText,E=t.merchandiseMessages;return o.createElement("div",n()({className:f()("hotels-hotel-offers-DetailChevronOffer__offer--2b4bE","offer",d&&Object(i.featureIsEnabled)("black_strikethrough")&&"hotels-hotel-offers-DetailChevronOffer__blackStrikeThrough--3k4KZ",Object(i.featureIsEnabled)("commerce_link_strategy_underline_prices")&&"hotels-hotel-offers-DetailChevronOffer__linkStrategyUnderlinePrices--1bpHe",r.clickToken&&"bookableOffer",O&&"hotels-hotel-offers-DetailChevronOffer__offerWithStarSave--UJ6h1"),onClick:function e(t){return m(t)}},u(r)),o.createElement("div",{className:"ui_columns is-gapless is-mobile"},o.createElement("div",{className:"ui_column is-4 ".concat("hotels-hotel-offers-DetailChevronOffer__logo--2JJsC")},function e(t,r,a){return t.isIbOffer?o.createElement("span",{className:"svgico ".concat("hotels-hotel-offers-DetailChevronOffer__ta_meta_logo--3Ihqg")}):r?o.createElement(l.CdnImage,{className:"hotels-hotel-offers-DetailChevronOffer__logo_img--1ug1t",src:r,alt:a}):o.createElement("span",{className:"taLnk",title:a},a)}(r,a,c)),o.createElement("div",{className:"ui_column is-4 ".concat("hotels-hotel-offers-DetailChevronOffer__priceBlock--QrLCS")},o.createElement("div",{className:"hotels-hotel-offers-DetailChevronOffer__priceInner--1X4PY"},d?o.createElement("div",{className:"autoResize ".concat("hotels-hotel-offers-DetailChevronOffer__xthrough--h1SKg")},d):null,p?o.createElement("div",{className:"".concat("hotels-hotel-offers-DetailChevronOffer__price--py2LH"," autoResize"),"data-sizegroup":"hr_chevron_prices"},p):null,g?o.createElement("div",{className:"hotels-hotel-offers-DetailChevronOffer__taxesAndFees--2GuTG"},"+ ".concat(g," ").concat(Object(s.localize)("meta_ui_taxes_and_fees_14f6"))):null)),o.createElement("div",{className:"ui_column is-4 ".concat("hotels-hotel-offers-DetailChevronOffer__ctaColumn--CMZbI")},o.createElement("div",{className:f()("ui_button original autoResize","hotels-hotel-offers-DetailChevronOffer__ctaButton--3MGTE","IN_PROGRESS"!==v&&"large"),"data-sizegroup":"hr_chevron_cta"},"IN_PROGRESS"===v?o.createElement("span",{className:"hotels-hotel-offers-DetailChevronOffer__ctaText--3irpB"},o.createElement("span",{className:"ui_loader small ".concat("hotels-hotel-offers-DetailChevronOffer__loader--1YARi")},o.createElement("span",null),o.createElement("span",null),o.createElement("span",null),o.createElement("span",null),o.createElement("span",null))):o.createElement("span",{className:"hotels-hotel-offers-DetailChevronOffer__ctaText--3irpB"},h||Object(s.localize)("view_deal"))))),O?o.createElement("div",{className:"autoResize ".concat("hotels-hotel-offers-DetailChevronOffer__starSave--26N9-")},o.createElement("span",{className:"ui_icon star"}),o.createElement("span",null,Object(s.localize)("hotels_save_money",{0:O}))):null,function e(t){return t&&0!==t.length?o.createElement("div",{className:"hotels-hotel-offers-DetailChevronOffer__merchandiseMessagesWrapper--nA5oH"},t.map(function(e){return o.createElement(_,{key:e,message:e})})):null}(E))};N.defaultProps={providerLogoUrl:void 0,priceText:void 0,strikeThroughText:void 0,buttonText:void 0,savePriceText:void 0,isComparisonOffer:void 0,taxesAndFeesText:void 0,merchandiseMessages:void 0};var T=function e(t){return t.offerFields.push("data","providerLogoUrl","strikeThroughText","savePriceText","providerDisplayName","taxesAndFeesText","priceText","isComparisonOffer","status","merchandiseMessages"),function e(t){var r=t.offer;return r.data&&o.createElement(N,{data:r.data,providerLogoUrl:r.providerLogoUrl,providerDisplayName:r.providerDisplayName||"",priceText:r.priceText,strikeThroughText:r.strikeThroughText,isComparisonOffer:r.isComparisonOffer,taxesAndFeesText:Object(i.featureIsEnabled)("hr_ib_exclude_taxes_and_fees")?void 0:r.taxesAndFeesText,savePriceText:r.savePriceText,status:r.status||"UNCONFIRMED",merchandiseMessages:r.merchandiseMessages})}},x=N,C=function e(t){var r=t.data,a=t.providerDisplayName,s=t.priceText,l=t.isComparisonOffer,c=t.status;return o.createElement("div",n()({className:f()("hotels-hotel-offers-MobileDrawerOffer__offer--3VA-m",!r.clickToken&&"hotels-hotel-offers-MobileDrawerOffer__unclickable--2wekV",Object(i.featureIsEnabled)("black_strikethrough")&&"hotels-hotel-offers-MobileDrawerOffer__blackStrikeThrough--1Moig"),onClick:function e(t){return m(t)}},u(r)),o.createElement("span",{title:a,className:"hotels-hotel-offers-MobileDrawerOffer__provider--1YOna"},a,r.isIbOffer||!r.clickToken?null:o.createElement("span",{className:"ui_icon external-link-no-box"})),function e(t,r,a,n){return"IN_PROGRESS"===t?o.createElement("span",{className:"hotels-hotel-offers-MobileDrawerOffer__loading--HInZl"},o.createElement("span",{className:"ui_loader small"},o.createElement("span",null),o.createElement("span",null),o.createElement("span",null),o.createElement("span",null),o.createElement("span",null))):"UNAVAILABLE"!==t&&a?"AVAILABLE"===t&&r?n?o.createElement("span",{title:r,className:"hotels-hotel-offers-MobileDrawerOffer__price--3clni"},o.createElement("span",{className:"hotels-hotel-offers-MobileDrawerOffer__comparisonOffer--2qLEC"},r)):o.createElement("span",{title:r,className:"hotels-hotel-offers-MobileDrawerOffer__price--3clni"},r):o.createElement("span",{className:"hotels-hotel-offers-MobileDrawerOffer__price--3clni"},o.createElement("span",{className:"ui_icon search"})):o.createElement("span",{className:"hotels-hotel-offers-MobileDrawerOffer__price--3clni"},o.createElement("span",{className:"ui_icon prohibited"}))}(c,s,!!r.clickToken,l))};C.defaultProps={priceText:void 0,isComparisonOffer:void 0};var M=function e(t){return t.offerFields.push("data","providerDisplayName","priceText","isComparisonOffer","status"),function e(t){var r=t.offer;return r.data&&o.createElement(C,{data:r.data,providerDisplayName:r.providerDisplayName||"",priceText:r.priceText,isComparisonOffer:r.isComparisonOffer,status:r.status||"UNCONFIRMED"})}},I=C,y=function e(t){var r=t.listing||{},a=r.chevronOffers,n=r.textLinkOffers,o=r.hiddenOffers,s=function e(t){return"AVAILABLE"===t.status};return!!(a&&a.find(s)||n&&n.find(s)||o&&o.find(s))},A=function e(t){var r=t.listing;return!!(r&&r.chevronOffers&&0===r.chevronOffers.length&&r.textLinkOffers&&0===r.textLinkOffers.length)},L=function e(t){var r=t.listing;return r&&r.chevronOffers&&r.chevronOffers[0]?r.chevronOffers[0]:null},j=function e(t){return t&&t.isIbOffer&&Object(i.featureIsEnabled)("om_affiliate_commerce_button_CTA")},w=function e(t){var r=t.offer;if(!r)return null;var a=r.data,l=r.status,i=r.providerDisplayName,c=r.priceText,f=j(a)?Object(s.localize)("affiliate_cta_book_get_rewards_v1"):Object(s.localize)("view_deal");return"AVAILABLE"!==l?null:o.createElement(o.Fragment,null,o.createElement("div",{className:"hotels-hotel-offers-MiniOffer__price_night--29nrf"},o.createElement("div",{className:"hotels-hotel-offers-MiniOffer__price--3qu-X"},c),o.createElement("div",{className:"hotels-hotel-offers-MiniOffer__price_vendor--3F3AG"},i,a.isIbOffer||!a.clickToken?null:o.createElement(p.Icon,{name:"external-link-no-box"}))),o.createElement("div",{className:"hotels-hotel-offers-MiniOffer__btnWrap--3XIDk"},o.createElement("div",n()({className:"ui_button original",onClick:m},u(a)),f)))},P=r("@ta/public.dataroots"),R=r("@ta/public.data-api-polling"),S=function e(t,r){if(!t)return"";var a={};return t.filter(function(e){return"string"==typeof e}).forEach(function(e){a[e]=!0}),r&&r.filter(function(e){return"string"==typeof e}).forEach(function(e){a[e]=!0}),Object.keys(a).sort().join(",")},F=function e(t,r,a){return Object(R.bindDataApiPoller)(function e(a,n){return function e(t,r,a,n){var o;if(!n.route.detail)return null;var s=Number(n.route.detail),l=["/data/1.0/hotelDetail/".concat(s,"/offers?rc=Hotel_Review")];t&&l.push("ttp=".concat(t)),n.tracking&&n.tracking.uid&&l.push("puid=".concat(encodeURIComponent(n.tracking.uid)));var i=n.travelerInfo&&n.travelerInfo.hotels;i&&i.stayDates&&(l.push("stayDates=".concat(i.stayDates)),l.push("dd=".concat(!!i.defaultDates))),i&&i.guests&&l.push("guestInfo=".concat(i.guests));var c=(n.meta&&n.meta.lineItemsByLoc||{})[String(s)];c&&l.push("slid=".concat(c));var f=null===(o=n.page)||void 0===o?void 0:o.refreshCount;return f&&l.push("refreshCount=".concat(f)),r&&l.push("rn=".concat(r)),l.push("fields=".concat(S(a.listingFields,["complete"]))),l.push("offerFields=".concat(S(a.offerFields,["status","data"]))),n.page.isMetaWithVp&&l.push("shape=VP_HR"),l.join("&")}(r,n,t,a)},function e(t){return!(!t||!t.complete)},function e(t,r,n){return a(function e(t,r,a){return{hotelId:t.route.detail?Number(t.route.detail):-1,loading:!!r,listing:a}}(t,r,n))},function e(r,a){return t&&Object(P.stageAll)(t,r,a)})};r.d(t,"DominantOffer",function(){return E}),r.d(t,"bindDominantOffer",function(){return g}),r.d(t,"DetailTextOffer",function(){return D}),r.d(t,"bindDetailTextOffer",function(){return k}),r.d(t,"DetailChevronOffer",function(){return x}),r.d(t,"bindDetailChevronOffer",function(){return T}),r.d(t,"MobileDrawerOffer",function(){return I}),r.d(t,"bindMobileDrawerOffer",function(){return M}),r.d(t,"MiniOffer",function(){return w}),r.d(t,"getOfferElementProps",function(){return u}),r.d(t,"clickOfferElement",function(){return m}),r.d(t,"bindToHotelReview",function(){return F}),r.d(t,"isAnyAvailable",function(){return y}),r.d(t,"isNoCommerce",function(){return A}),r.d(t,"isBookWithRewards",function(){return j}),r.d(t,"getTopOffer",function(){return L}),r.d(t,"MerchandiseMessage",function(){return _}),t.default={}}}});
//# sourceMappingURL=hotels.hotel-offers.cab4274b10.js.map