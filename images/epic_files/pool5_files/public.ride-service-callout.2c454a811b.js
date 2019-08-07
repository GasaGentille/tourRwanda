($WP="undefined"!=typeof $WP?$WP:[]).push({id:"@ta/public.ride-service-callout",d:["vendor-babel","vendor-react-libs","vendor-apollo-libs","vendor-redux-libs","vendor-common","lithium-platform","ta-platform"],e:["./packages/public/ride-service-callout/ride-service-callout.jsx"],x:{"./packages/public/ride-service-callout/ride-service-callout.jsx":["default"]},m:{"./packages/public/ride-service-callout/ride-service-callout.jsx":function(e,t,n){"use strict";n.r(t);var i=n("@babel/runtime/helpers/esm/slicedToArray"),a=n.n(i),r=n("react"),l=n("react-apollo"),o=n("react-redux"),u=n("js-cookie"),d=n.n(u),s=n("@babel/runtime/helpers/esm/extends"),c=n.n(s),m=n("@babel/runtime/helpers/esm/objectSpread"),p=n.n(m),v=n("@ta/common.i18n"),f={placetypes:["ACCOMMODATION","EATERY","ATTRACTION"]},b={uber:p()({},f,{name:"uber",excludedParentGeos:[154943],calloutText:function e(){return Object(v.localize)("mobile_uberCTA_1ad3")},logoUrl:"/svg/mobile/uber_logo.svg",getCtaUrl:function e(t){var n=t.dropoff,i=t.dropoffName,a={action:"setPickup",client_id:"-NyzH0pBoWxt0dXPII6YiBh9IEyYfTkN",pickup:"my_location","dropoff[latitude]":n.latitude.toString(10),"dropoff[longitude]":n.longitude.toString(10),"dropoff[nickname]":i},r=new URLSearchParams(a);return"https://m.uber.com/ul/?".concat(r.toString())},getEstimateHandler:function e(t){var n=t.pickup,i=t.dropoff;if(!n)return new Promise(function(e,t){return t()});var a={start_latitude:n.latitude.toString(10),start_longitude:n.longitude.toString(10),end_latitude:i.latitude.toString(10),end_longitude:i.longitude.toString(10)},r=new URLSearchParams(a);return new Promise(function(e,t){return fetch("/MobileUberEstimateAjax?".concat(r.toString()),{credentials:"same-origin"}).then(function(n){return n.ok?n.json().then(function(n){n&&n.product_id||t();var i=n.price_estimate_string||"";if(n.time_estimate){var a=Math.round(parseInt(n.time_estimate,10)/60);i=i?"".concat(i,", ").concat(Object(v.localize)("mobile_uber_1ad3",{0:a})):Object(v.localize)("mobile_uber_1ad3",{0:a})}i?e(i):t()}):t()},t)})}}),olaCabs:p()({},f,{name:"olaCab",includedCountryIds:[293860],calloutText:function e(){return Object(v.localize)("mobile_ola_cabs")},logoUrl:"/svg/mobile/ola_cabs_logo.svg",getCtaUrl:function e(t){var n=t.pickup,i=t.dropoff,a=t.dropoffName,r={utm_source:"148b73e4b678470e9adc655d63ba3863",landing_page:"bk",lat:n?n.latitude.toFixed(6):"",lng:n?n.longitude.toFixed(6):"",drop_lat:i.latitude.toFixed(6),drop_lng:i.longitude.toFixed(6),drop_name:a},l=new URLSearchParams(r);return"https://olawebcdn.com/assets/ola-universal-link.html?".concat(l.toString())},getEstimateHandler:function e(t){var n=t.pickup,i=t.dropoff,a=t.dropoffName;if(!n)return new Promise(function(e,t){return t()});var r={start_latitude:n.latitude.toFixed(6),start_longitude:n.longitude.toFixed(6),end_latitude:i.latitude.toFixed(6),end_longitude:i.longitude.toFixed(6),drop_name:a},l=new URLSearchParams(r);return new Promise(function(e,t){return fetch("/MobileOlaCabsEstimateAjax?".concat(l.toString()),{credentials:"same-origin"}).then(function(n){return n.ok?n.json().then(function(t){return e(t.estimate_string)}):t()},t)})}})},k=n("@babel/runtime/helpers/esm/classCallCheck"),g=n.n(k),h=n("@babel/runtime/helpers/esm/createClass"),N=n.n(h),_=n("@babel/runtime/helpers/esm/possibleConstructorReturn"),y=n.n(_),C=n("@babel/runtime/helpers/esm/getPrototypeOf"),I=n.n(C),S=n("@babel/runtime/helpers/esm/inherits"),x=n.n(S),P=n("@babel/runtime/helpers/esm/defineProperty"),U=n.n(P),F=n("@ta/common.cdn"),T=function(e){function t(e){var n;return g()(this,t),(n=y()(this,I()(t).call(this,e))).state={estimateRequested:!1,estimateFailed:!1,estimateCallout:null},n}return x()(t,e),N()(t,[{key:"componentDidMount",value:function e(){var t=this,n=this.props,i=n.ride,a=n.getEstimateHandler;!this.state.estimateRequested&&i.pickup&&a(i).then(function(e){return t.setState({estimateCallout:e,estimateFailed:!1})},function(){return t.setState({estimateCallout:null,estimateFailed:!0})})}},{key:"renderCallout",value:function e(){var t=this.state.estimateCallout,n=this.props.calloutText;return t||n()}},{key:"render",value:function e(){var t=this.props,n=t.getCtaUrl,i=t.ride,a=t.logoUrl;return this.state.estimateFailed?null:r.createElement("a",{className:"public-ride-service-callout-internal-Callout__callout_container--3lS64",rel:"nofollow",href:n(i)},r.createElement(F.CdnImage,{src:a,className:"public-ride-service-callout-internal-Callout__logo--ACoUf"}),r.createElement("div",{className:"public-ride-service-callout-internal-Callout__cta--1ZrPs"},this.renderCallout()))}}]),t}(r.Component);U()(T,"defaultProps",{pickupLocation:null});var E=T,j=function e(t){var n=t.userPosition,i=t.targetLocation,a=t.distanceUnit;if(!n||!i)return null;var l=i.distance,o=i.name;if(!function e(t,n){if(t)switch(n){case"KILOMETERS":if(t>160.934)return!1;break;default:if(t>100)return!1}return!0}(l,a))return null;var u=function e(t){var n=t.countryId,i=t.parentGeoId,a=t.placeType,r=[];return Object.keys(b).forEach(function(e){var t=b[e];t.placetypes&&!t.placetypes.includes(a)||t.excludedParentGeos&&t.excludedParentGeos.includes(i)||(!t.includedCountryIds||n&&t.includedCountryIds.includes(n))&&r.push(t)}),r}(i);if(!u.length)return null;var d={pickup:n,dropoff:i,dropoffName:o};return r.createElement(r.Fragment,null,u.map(function(e){return r.createElement(E,c()({ride:d},e,{key:e.name}))}))},L={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"RideService"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"locationId"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"Int"}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"userLocation"}},type:{kind:"NamedType",name:{kind:"Name",value:"GeoPointInput"}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"userUnits"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"UnitLengthInput"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"locations"},arguments:[{kind:"Argument",name:{kind:"Name",value:"locationIds"},value:{kind:"ListValue",values:[{kind:"Variable",name:{kind:"Name",value:"locationId"}}]}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"latitude"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"longitude"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"countryId"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"placeType"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"parentGeoId"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"distance"},arguments:[{kind:"Argument",name:{kind:"Name",value:"units"},value:{kind:"Variable",name:{kind:"Name",value:"userUnits"}}},{kind:"Argument",name:{kind:"Name",value:"fromPoint"},value:{kind:"Variable",name:{kind:"Name",value:"userLocation"}}}],directives:[]}]}}]}}],loc:{start:0,end:285}};L.loc.source={body:"0bd6fe70475b"};var O=L;t.default=Object(o.connect)(function(e){return{locId:e.page.detailId,distanceUnit:e.i18n.distanceUnit||"MILES"}})(function e(t){var n=t.locId,i=t.distanceUnit,o=function e(){var t=d.a.withConverter(function(e){return e.startsWith("%1%")?decodeURIComponent(e.substring(3)):decodeURIComponent(e)}).get("TAUserLocation")||"";if(t){var n=t.split("&");n[0].indexOf("v")>-1&&n.shift();var i=a()(n,2),r=i[0],l=i[1],o=Number.parseFloat(r),u=Number.parseFloat(l);if(!Number.isNaN(o)&&!Number.isNaN(u))return{latitude:o,longitude:u}}return null}();return!o||!n||n<0?null:r.createElement(l.Query,{query:O,variables:{locationId:n,userLocation:o,userUnits:i}},function(e){var t=e.loading,n=e.data;return!t&&n&&n.locations&&n.locations[0]?r.createElement(j,{userPosition:o,distanceUnit:i,targetLocation:n.locations[0]}):null})})}}});
//# sourceMappingURL=public.ride-service-callout.2c454a811b.js.map