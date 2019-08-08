($WP="undefined"!=typeof $WP?$WP:[]).push({id:"@ta/maps.redo-search-button",d:["vendor-babel","vendor-react-libs","lithium-platform","ta-platform","@ta/public.maps"],e:["./packages/maps/redo-search-button/entrypoint.jsx"],x:{"./packages/maps/redo-search-button/entrypoint.jsx":["AutoSearchToggle","RedoSearchButton"]},m:{"./packages/maps/redo-search-button/entrypoint.jsx":function(e,t,a){"use strict";a.r(t);var o=a("@babel/runtime/helpers/esm/classCallCheck"),n=a.n(o),r=a("@babel/runtime/helpers/esm/createClass"),s=a.n(r),c=a("@babel/runtime/helpers/esm/possibleConstructorReturn"),u=a.n(c),i=a("@babel/runtime/helpers/esm/getPrototypeOf"),l=a.n(i),h=a("@babel/runtime/helpers/esm/inherits"),m=a.n(h),d=a("@babel/runtime/helpers/esm/assertThisInitialized"),p=a.n(d),b=a("@babel/runtime/helpers/esm/defineProperty"),f=a.n(b),v=a("react"),S=a("@ta/common.i18n"),C=a("@ta/common.tracking"),M=a.n(C),k=a("@ta/public.maps"),g=a("@babel/runtime/helpers/esm/extends"),_=a.n(g),E=function(e){function t(e){var a;return n()(this,t),a=u()(this,l()(t).call(this,e)),f()(p()(p()(a)),"onMapMoved",function(){a.setState({mapHasMoved:!0})}),f()(p()(p()(a)),"onRedoSearch",function(){M()({module:"map_view",action:"redo"}),a.props.onRedoSearch(),a.setState({mapHasMoved:!1})}),a.state={mapHasMoved:e.defaultVisible},a}return m()(t,e),s()(t,[{key:"componentDidMount",value:function e(){var t=this.props.map;t.on("centerChange",this.onMapMoved),t.on("zoomChange",this.onMapMoved)}},{key:"componentWillUnmount",value:function e(){var t=this.props.map;t.off("centerChange",this.onMapMoved),t.off("zoomChange",this.onMapMoved)}},{key:"render",value:function e(){return this.state.mapHasMoved&&v.createElement("div",{className:"maps-redo-search-button-RedoSearchButton__redoSearchContainer--W6sVd",onClick:this.onRedoSearch},v.createElement("span",{className:"ui_icon refresh ".concat("maps-redo-search-button-RedoSearchButton__refreshIcon--3bkCI")}),v.createElement("span",{className:"maps-redo-search-button-RedoSearchButton__redoSearchLabel--ovbH4"},Object(S.localize)("map_search_redo_search_button_text")))}}]),t}(v.PureComponent),R=function e(t){return v.createElement(k.MapContextConsumer,null,function(e){var a=e.map;return a?v.createElement(E,_()({},t,{map:a})):null})};R.defaultProps={defaultVisible:!1};var y=R,A=function(e){function t(){var e,a;n()(this,t);for(var o=arguments.length,r=new Array(o),s=0;s<o;s++)r[s]=arguments[s];return a=u()(this,(e=l()(t)).call.apply(e,[this].concat(r))),f()(p()(p()(a)),"state",{autoSearchEnabled:null,mapHasMoved:!1}),f()(p()(p()(a)),"onCheckboxClicked",function(){var e=null===a.state.autoSearchEnabled?!a.props.defaultChecked:!a.state.autoSearchEnabled;M()({module:"search_toggle",action:e?"active":"inactive"}),a.setState({autoSearchEnabled:e})}),f()(p()(p()(a)),"onMapMoved",function(e){a.isAutoSearchEnabled()?a.onAutoSearch(e.userGesture):a.setState({mapHasMoved:!0})}),f()(p()(p()(a)),"onAutoSearch",function(e){a.timeout&&clearTimeout(a.timeout),a.timeout=setTimeout(function(){a.props.onRedoSearch(!0,e),a.timeout=null},0),a.setState({mapHasMoved:!1})}),f()(p()(p()(a)),"onManualRedoSearch",function(){a.props.onRedoSearch(!1,!0),a.setState({mapHasMoved:!1})}),f()(p()(p()(a)),"timeout",void 0),a}return m()(t,e),s()(t,[{key:"componentDidMount",value:function e(){var t=this.props.map;t.on("centerChange",this.onMapMoved),t.on("zoomChange",this.onMapMoved)}},{key:"componentWillUnmount",value:function e(){var t=this.props.map;t.off("centerChange",this.onMapMoved),t.off("zoomChange",this.onMapMoved),this.timeout&&clearTimeout(this.timeout)}},{key:"isAutoSearchEnabled",value:function e(){return null!==this.state.autoSearchEnabled?this.state.autoSearchEnabled:this.props.defaultChecked}},{key:"render",value:function e(){var t=this.isAutoSearchEnabled();return!this.isAutoSearchEnabled()&&this.state.mapHasMoved?v.createElement(y,{onRedoSearch:this.onManualRedoSearch,defaultVisible:!0}):v.createElement("div",{className:"maps-redo-search-button-AutoSearchToggle__autoSearchContainer--2sFk6"},v.createElement("div",{className:"maps-redo-search-button-AutoSearchToggle__contentContainer--3FN34",onClick:this.onCheckboxClicked},v.createElement("div",{className:"maps-redo-search-button-AutoSearchToggle__autoSearchCheckboxContainer--26F85"},t&&v.createElement("span",{className:"ui_icon checkmark ".concat("maps-redo-search-button-AutoSearchToggle__autoSearchCheckmark--2Iwdm")})),v.createElement("span",{className:"maps-redo-search-button-AutoSearchToggle__autoSearchLabel--1SviN"},Object(S.localize)("map_auto_search_label"))))}}]),t}(v.PureComponent);f()(A,"defaultProps",{defaultChecked:!1});var x=function e(t){return v.createElement(k.MapContextConsumer,null,function(e){var a=e.map;return a&&v.createElement(A,{defaultChecked:t.defaultChecked,onRedoSearch:t.onRedoSearch,map:a})})};x.defaultProps={defaultChecked:!1};var T=x;a.d(t,"AutoSearchToggle",function(){return T}),a.d(t,"RedoSearchButton",function(){return y})}}});
//# sourceMappingURL=maps.redo-search-button.d1d00bd2e0.js.map