($WP="undefined"!=typeof $WP?$WP:[]).push({id:"@ta/hotels.community-content",d:["vendor-babel","vendor-react-libs","ta-platform","@ta/hotels.community-content-common","@ta/hotels.hotel-draft-review","lithium-platform","@ta/hotels.community-tab-tips","@ta/hotels.community-tab-questions","@ta/hotels.community-tab-reviews"],e:["./packages/hotels/community-content/community-content.jsx"],x:{"./packages/hotels/community-content/community-content.jsx":["default"]},m:{"./packages/hotels/community-content/community-content.jsx":function(t,e,n){"use strict";n.r(e);var o,a=n("@babel/runtime/helpers/esm/classCallCheck"),s=n.n(a),i=n("@babel/runtime/helpers/esm/createClass"),m=n.n(i),c=n("@babel/runtime/helpers/esm/possibleConstructorReturn"),r=n.n(c),l=n("@babel/runtime/helpers/esm/getPrototypeOf"),u=n.n(l),b=n("@babel/runtime/helpers/esm/inherits"),_=n.n(b),h=n("@babel/runtime/helpers/esm/assertThisInitialized"),d=n.n(h),p=n("@babel/runtime/helpers/esm/defineProperty"),y=n.n(p),f=n("react"),E=n("@ta/common.api"),v=n("@ta/common.radio"),T=n.n(v),g=n("@ta/hotels.community-content-common"),I=n("@ta/hotels.hotel-draft-review"),A=(n("@babel/runtime/helpers/esm/toConsumableArray"),n("@ta/common.error-handling")),D=n("@ta/common.classnames"),w=n.n(D),C=n("@ta/common.features"),O=n("@ta/common.is-visible"),S=n("@ta/common.tracking"),q=n.n(S),L=n("@ta/platform.import"),M=(n("@ta/hotels.community-tab-tips"),n("@ta/hotels.community-tab-questions"),n("@ta/hotels.community-tab-reviews")),N=n.n(M),k=Object(C.featureIsEnabled)("crawler_or_search_ua"),P=L.component.onUsage(((o=function t(){return n.e("@ta/hotels.community-tab-questions")}).__PACKAGE__="@ta/hotels.community-content",o.__MODULE_ID__="@ta/hotels.community-tab-questions",o.__MODULE_NAME__="@ta/hotels.community-tab-questions",o.__BUNDLE_NAME__="@ta/hotels.community-tab-questions",o.__GET_SYNC__=function(){return n.m["@ta/hotels.community-tab-questions"]?n("@ta/hotels.community-tab-questions"):null},o.__IS_LOADED__=function(){return void 0!==n.m["@ta/hotels.community-tab-questions"]},o)),R=L.component.onUsage(function(){var t=function t(){return n.e("@ta/hotels.community-tab-tips")};return t.__PACKAGE__="@ta/hotels.community-content",t.__MODULE_ID__="@ta/hotels.community-tab-tips",t.__MODULE_NAME__="@ta/hotels.community-tab-tips",t.__BUNDLE_NAME__="@ta/hotels.community-tab-tips",t.__GET_SYNC__=function(){return n.m["@ta/hotels.community-tab-tips"]?n("@ta/hotels.community-tab-tips"):null},t.__IS_LOADED__=function(){return void 0!==n.m["@ta/hotels.community-tab-tips"]},t}()),U=[{name:"Reviews",module:"reviews",component:N.a},{name:"Questions",module:"faq",component:P},{name:"RoomTips",module:"roomtips",component:R}],j=function t(e){var n=e.selectedTab;return(Object(C.featureIsEnabled)("answers_hotels")?U:U.filter(function(t){return"Questions"!==t.name})).map(function t(e){var o=e.name,a=e.module,s=e.component,i=n===o;return i||k?f.createElement(A.ErrorBoundary,{key:o},f.createElement(O.HasBeenVisible,{onVisible:function t(){i&&q()({module:a,action:"in_view"})}},function(t){return f.createElement("div",{ref:t,className:w()(i?"":"hotels-community-content-TabContent__inactive--ZH1Rq"),"data-test-target":"".concat(a,"-tab")},f.createElement(s,{isSelectedTab:i}))})):null})},B=function(t){function e(){var t,n;s()(this,e);for(var o=arguments.length,a=new Array(o),i=0;i<o;i++)a[i]=arguments[i];return n=r()(this,(t=u()(e)).call.apply(t,[this].concat(a))),y()(d()(d()(n)),"state",{selectedTab:"Reviews"}),y()(d()(d()(n)),"setSelectedTab",function(t,e){t!==n.state.selectedTab&&(n.setState({selectedTab:t}),e&&Object(g.scrollIntoView)(g.HEADER_SCROLL_OFFSET))}),n}return _()(e,t),m()(e,[{key:"componentDidMount",value:function t(){T()("hr-community-tab").on("selectTab",this.setSelectedTab)}},{key:"render",value:function t(){var e=this.props,n=e.locationId,o=e.geoId;return f.createElement(I.DraftReviewProvider,{locationId:n},f.createElement(f.Fragment,null,f.createElement(g.TabBarAboveHeader,{locationId:n,geoId:o,selectedTab:this.state.selectedTab,setSelectedTab:this.setSelectedTab}),f.createElement(j,{selectedTab:this.state.selectedTab}),f.createElement(g.LowContentCTA,{locationId:n,geoId:o,selectedTab:this.state.selectedTab})))}}]),e}(f.Component);e.default=Object(E.bind)(function(t,e){return g.TabBarAboveHeader.stage(t,e),function(){return{locationId:t.page.detailId,geoId:t.page.geoId}}})(B)}}});
//# sourceMappingURL=hotels.community-content.3375ce20fc.js.map