($WP="undefined"!=typeof $WP?$WP:[]).push({id:"@ta/memx.registration-dialog-utils",d:["@ta/common.sessionstorage","@ta/common.localstorage","lithium-platform"],e:["./packages/memx/registration-dialog-utils/RegistrationDialogUtilities.jsx"],x:{"./packages/memx/registration-dialog-utils/RegistrationDialogUtilities.jsx":["ADHESION_COLLAPSE_ADVERTISER_ID","HOTEL_SERVLETS","ATTRACTIONS_SERVLETS","RESTAURANTS_SERVLETS","FLIGHTS_SERVLETS","userSignedOut","setRegDialogDismissed","userPreviouslyClosedRegDialog","userSignedOutRecently","shouldSuppressRegistrationDialog","isCpmMwAdhesionDismissed","isCpmMwAdhesionUnitEnabled","shouldIgnoreAdhesionUnit","doesAdExistOnPage","moveAdCloseX"]},m:{"./packages/memx/registration-dialog-utils/RegistrationDialogUtilities.jsx":function(e,t,i){"use strict";i.r(t),i.d(t,"ADHESION_COLLAPSE_ADVERTISER_ID",function(){return u}),i.d(t,"HOTEL_SERVLETS",function(){return h}),i.d(t,"ATTRACTIONS_SERVLETS",function(){return D}),i.d(t,"RESTAURANTS_SERVLETS",function(){return _}),i.d(t,"FLIGHTS_SERVLETS",function(){return T}),i.d(t,"userSignedOut",function(){return p}),i.d(t,"setRegDialogDismissed",function(){return b}),i.d(t,"userPreviouslyClosedRegDialog",function(){return v}),i.d(t,"userSignedOutRecently",function(){return L}),i.d(t,"shouldSuppressRegistrationDialog",function(){return M}),i.d(t,"isCpmMwAdhesionDismissed",function(){return C}),i.d(t,"isCpmMwAdhesionUnitEnabled",function(){return O}),i.d(t,"shouldIgnoreAdhesionUnit",function(){return x}),i.d(t,"doesAdExistOnPage",function(){return H}),i.d(t,"moveAdCloseX",function(){return I});var n=i("@ta/common.sessionstorage"),s=i.n(n),o=i("@ta/common.localstorage"),r=i.n(o),a=i("@ta/common.features"),u=55978451,l="-16px",d="-3px",g="regDialogDismissed",c="regDialogDismissedCount",R=864e5,m=432e5,S=2592e6,A="lastSignOutTime",f=864e5,E="ads.fixed.close",h=["Hotel_Review","Hotels","SmartDeals","HotelHighlight","HotelsNear","HotelsList","LastMinute","MobileSmartDeals","MobileHotelHighlight","LocalMapsRedesign","MobileLocalMaps"],D=["Attractions","Attraction_Review","AttractionProductDetail","AttractionsNear","Attraction_Products","AttractionProductReview","MobileAttraction_Review","MobileAttractions","MobileAttractionProductDetail","MobileAttractionsNear","MobileAttraction_Products","MobileAttractionProductReview","AttractionsLander"],_=["Restaurant_Review","Restaurants","RestaurantsNear","MobileRestaurants","MobileRestaurantsNear","MobileRestaurantSearch","RestaurantsLander","MobileNearbyRestaurants"],T=["Flights","MobileFlights","CheapFlightsSearchResults","CheapFlightsSearchDeals","MobileCheapFlightsSearchResults","FlightsRoute","Airline_Review","CheapFlightsHome","FlightsFrom"];function p(){return r.a.has(A)}function b(){var e=r.a.get(c)||0;if(r.a.set(c,e+1,0),e<2){var t=Object(a.featureIsEnabled)("memx_reg_dialogs_12h_suppression")?m:R;r.a.set(g,1,t)}else r.a.set(g,1,S),r.a.set(c,0,0)}function v(){return null!==r.a.get(g)}function L(){var e=r.a.get(A);if(!e){var t=s.a.get(A);return void 0!==t&&t+f>(new Date).getTime()}return e+f>(new Date).getTime()}function M(){return v()||L()}function C(){var e=s.a.get(E);return void 0!==e&&"true"===e}function O(){return Object(a.featureIsEnabled)("mobile_fixed_ad")}function x(){return!O()||C()}function H(){var e=document.querySelector("#FIXED_AD .gptAd");if(!e)return!1;var t=e.getAttribute("data-advertiser-id");return t&&t!==u.toString()}function I(e){var t=document.getElementsByClassName("close_ad");t&&0!==t.length&&(t[0].style.top=e?l:d)}}}});
//# sourceMappingURL=memx.registration-dialog-utils.20898a1c1a.js.map