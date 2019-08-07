($WP="undefined"!=typeof $WP?$WP:[]).push({id:"@ta/maps.alsoshowresults",d:["lithium-platform","vendor-babel","vendor-react-libs","@ta/maps.markers","@ta/public.maps","ta-platform","@ta/maps.fetch"],e:["./packages/maps/alsoshowresults/entrypoint.jsx"],x:{"./packages/maps/alsoshowresults/entrypoint.jsx":["AlsoShowResultsController","BoundingBoxAlsoShowResults","AlsoShowValues","buildAlsoShowItems"]},m:{"./packages/maps/alsoshowresults/entrypoint.jsx":function(t,e,r){"use strict";r.r(e);var n=r("@ta/common.i18n"),o={restaurants:"restaurants",thingsToDo:"things_to_do",hotels:"hotels"},s=function t(e){return e.map(function(t){switch(t){case o.restaurants:return{value:o.restaurants,label:Object(n.localize)("common_Restaurants"),icon:"restaurants"};case o.thingsToDo:return{value:o.thingsToDo,label:Object(n.localize)("common_Thingstodo"),icon:"attractions"};case o.hotels:return{value:o.hotels,label:Object(n.localize)("common_Hotels"),icon:"hotels"};default:throw new Error("Unsupported also show value: ".concat(t))}})},a=r("@babel/runtime/helpers/esm/classCallCheck"),i=r.n(a),u=r("@babel/runtime/helpers/esm/createClass"),l=r.n(u),c=r("@babel/runtime/helpers/esm/possibleConstructorReturn"),p=r.n(c),h=r("@babel/runtime/helpers/esm/getPrototypeOf"),d=r.n(h),m=r("@babel/runtime/helpers/esm/inherits"),k=r.n(m),f=r("@babel/runtime/helpers/esm/assertThisInitialized"),b=r.n(f),M=r("@babel/runtime/helpers/esm/defineProperty"),g=r.n(M),v=r("react"),C=r("@ta/maps.markers"),w=r("@ta/public.maps"),y=r("@ta/common.routing"),P=r("@ta/common.features"),L=r("@ta/maps.fetch"),E=r.n(L),x=function(t){function e(){return i()(this,e),p()(this,d()(e).apply(this,arguments))}return k()(e,t),l()(e,[{key:"buildUrl",value:function t(e){var r=this.props.boundingBox;if(!r)return null;if(this.props.hotelCount<=0&&this.props.attractionCount<=0&&this.props.restaurantCount<=0)return null;var n=["minLat=".concat(r.southwest.lat),"minLng=".concat(r.southwest.lng),"maxLat=".concat(r.northeast.lat),"maxLng=".concat(r.northeast.lng),"hotelCount=".concat(this.props.hotelCount),"attractionCount=".concat(this.props.attractionCount),"restaurantCount=".concat(this.props.restaurantCount),"rc=".concat(e||"")];return Object(P.featureIsEnabled)("hotels_media_mas_maps")||n.push("getHotelThumbnails=true"),"/data/1.0/maps/alsoShow/boundingBox?".concat(n.join("&"))}},{key:"render",value:function t(){var e=this;return v.createElement(y.RouteConsumer,null,function(t){var r=e.buildUrl(t.page);return r&&v.createElement(E.a,{url:r},function(t){var r=t.data;return r?v.createElement(v.Fragment,null,r.restaurants.map(function(t){return e.props.restaurantPinFactory(t)}),r.hotels.map(function(t){return e.props.hotelPinFactory(t)}),r.attractions.map(function(t){return e.props.attractionPinFactory(t)})):null})})}}]),e}(v.Component);g()(x,"defaultProps",{boundingBox:null,hotelCount:30,attractionCount:30,restaurantCount:30});var F=x,S=function(t){function e(){var t,r;i()(this,e);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return r=p()(this,(t=d()(e)).call.apply(t,[this].concat(o))),g()(b()(b()(r)),"hotelPinFactory",function(t){var e=r.props.selectedMarker===t.id;return r.props.blacklist&&r.props.blacklist[t.id]?null:r.props.showSelectedMarker||!e?v.createElement(C.HotelMiniMarker,{key:t.id,position:new w.LatLng(t.geoPoint.latitude,t.geoPoint.longitude),onClick:function e(){return r.props.onMarkerClick(t)},onMouseEnter:function e(){return r.props.onMarkerMouseEnter(t)},onMouseLeave:function e(){return r.props.onMarkerMouseLeave(t)},selected:r.props.selectedMarker===t.id,hovered:r.props.hoveredMarker===t.id,visited:r.props.isVisited[t.id]}):null}),g()(b()(b()(r)),"restaurantPinFactory",function(t){var e=r.props.selectedMarker===t.id;return r.props.blacklist&&r.props.blacklist[t.id]?null:r.props.showSelectedMarker||!e?v.createElement(C.RestaurantMiniMarker,{key:t.id,position:new w.LatLng(t.geoPoint.latitude,t.geoPoint.longitude),onClick:function e(){return r.props.onMarkerClick(t)},onMouseEnter:function e(){return r.props.onMarkerMouseEnter(t)},onMouseLeave:function e(){return r.props.onMarkerMouseLeave(t)},selected:r.props.selectedMarker===t.id,hovered:r.props.hoveredMarker===t.id,visited:r.props.isVisited[t.id]}):null}),g()(b()(b()(r)),"attractionPinFactory",function(t){var e=r.props.selectedMarker===t.id;return r.props.blacklist&&r.props.blacklist[t.id]?null:r.props.showSelectedMarker||!e?v.createElement(C.AttractionMiniMarker,{key:t.id,position:new w.LatLng(t.geoPoint.latitude,t.geoPoint.longitude),onClick:function e(){return r.props.onMarkerClick(t)},onMouseEnter:function e(){return r.props.onMarkerMouseEnter(t)},onMouseLeave:function e(){return r.props.onMarkerMouseLeave(t)},selected:r.props.selectedMarker===t.id,hovered:r.props.hoveredMarker===t.id,visited:r.props.isVisited[t.id]}):null}),r}return k()(e,t),l()(e,[{key:"render",value:function t(){return v.createElement(F,{hotelCount:this.props.showHotels?30:0,restaurantCount:this.props.showRestaurants?30:0,attractionCount:this.props.showAttractions?30:0,boundingBox:this.props.boundingBox,hotelPinFactory:this.hotelPinFactory,restaurantPinFactory:this.restaurantPinFactory,attractionPinFactory:this.attractionPinFactory})}}]),e}(v.PureComponent);r.d(e,"AlsoShowValues",function(){return o}),r.d(e,"buildAlsoShowItems",function(){return s}),r.d(e,"AlsoShowResultsController",function(){return S}),r.d(e,"BoundingBoxAlsoShowResults",function(){return F})}}});
//# sourceMappingURL=maps.alsoshowresults.557de98fca.js.map