($WP="undefined"!=typeof $WP?$WP:[]).push({id:"@ta/maps.find-location-button",d:["vendor-babel","vendor-react-libs","ta-common","lithium-platform","@ta/common.geolocation","@ta/public.maps","ta-platform"],e:["./packages/maps/find-location-button/find-location-button.jsx"],x:{"./packages/maps/find-location-button/find-location-button.jsx":["default"]},m:{"./packages/maps/find-location-button/find-location-button.jsx":function(t,n,e){"use strict";e.r(n);var a=e("@babel/runtime/helpers/esm/classCallCheck"),o=e.n(a),i=e("@babel/runtime/helpers/esm/createClass"),c=e.n(i),s=e("@babel/runtime/helpers/esm/possibleConstructorReturn"),r=e.n(s),l=e("@babel/runtime/helpers/esm/getPrototypeOf"),m=e.n(l),u=e("@babel/runtime/helpers/esm/inherits"),p=e.n(u),d=e("@babel/runtime/helpers/esm/assertThisInitialized"),f=e.n(d),b=e("@babel/runtime/helpers/esm/defineProperty"),h=e.n(b),v=e("react"),g=e("@ta/styleguide.icon"),L=e("@ta/common.classnames"),k=e.n(L),_=e("@ta/common.geolocation"),w=e("@ta/common.i18n"),y=e("@ta/public.maps"),C=e("@ta/common.tracking"),I=e.n(C),M={icon:"/img2/maps/icons/my_location_dot.png",width:30,height:30,anchor:{x:15,y:15}},E=16,S=function(t){function n(){var t,e;o()(this,n);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return e=r()(this,(t=m()(n)).call.apply(t,[this].concat(i))),h()(f()(f()(e)),"state",{trackingLocation:!1,active:!1}),h()(f()(f()(e)),"setInactive",function(){e.setState({active:!1})}),h()(f()(f()(e)),"setMapInteractionListeners",function(){var t=e.props.map;t&&t.once("panStart",e.setInactive)}),h()(f()(f()(e)),"clearMapInteractionListeners",function(){var t=e.props.map;t&&t.off("panStart",e.setInactive)}),h()(f()(f()(e)),"moveMapToNewLocation",function(t){var n=e.props.map;n&&n.setCenter(t,E,!0)}),h()(f()(f()(e)),"isLatLngValid",function(t){return 0!==t.lat||0!==t.lng}),h()(f()(f()(e)),"trackClick",function(){I()({module:"find_me",action:"find_me_click"})}),h()(f()(f()(e)),"askForLocation",function(){if(e.trackClick(),e.setState({active:!0}),e.state.trackingHandler)e.state.userLocation&&(e.moveMapToNewLocation(e.state.userLocation),e.setMapInteractionListeners());else{var t=Object(_.watchLocation)(function(t,n){var a=new y.LatLng(t,n);e.isLatLngValid(a)&&(e.state.trackingLocation||(e.moveMapToNewLocation(a),e.setMapInteractionListeners()),e.setState({userLocation:a,trackingLocation:!0}))},function(){window.alert(Object(w.localize)("mw_js_positionPermissionDenied")),e.setState({active:!1,trackingHandler:null})});e.setState({trackingHandler:t})}}),e}return p()(n,t),c()(n,[{key:"componentWillUnmount",value:function t(){this.state.trackingHandler&&(Object(_.clearWatch)(this.state.trackingHandler),this.clearMapInteractionListeners())}},{key:"render",value:function t(){return v.createElement("div",null,v.createElement("div",{className:"maps-find-location-button-find-location-button__findme--SZdKH",onClick:this.askForLocation},v.createElement("span",{className:k()("maps-find-location-button-find-location-button__icon--2N5t_",this.state.active?"maps-find-location-button-find-location-button__active--VEw_5":"")},v.createElement(g.Icon,{name:"nearby-fill"}))),this.state.userLocation?v.createElement(y.IconMarker,{position:this.state.userLocation,width:M.width,height:M.height,src:M.icon,anchor:M.anchor}):null)}}]),n}(v.Component);n.default=function t(){return v.createElement(y.MapContextConsumer,null,function(t){var n=t.map;return n&&v.createElement(S,{map:n})})}}}});
//# sourceMappingURL=maps.find-location-button.092959b982.js.map