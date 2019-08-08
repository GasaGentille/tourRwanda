($WP="undefined"!=typeof $WP?$WP:[]).push({id:"@ta/common.photo-carousel",d:["vendor-babel","vendor-react-libs","vendor-common","lithium-platform","@ta/common.loadable","ta-platform","ta-common","@ta/common.indicator-dots"],e:["./packages/common/photo-carousel/photo-carousel.jsx"],x:{"./packages/common/photo-carousel/photo-carousel.jsx":["PhotoCarousel","Photostrip","PhotoCount"]},m:{"./packages/common/photo-carousel/photo-carousel.jsx":function(e,t,o){"use strict";o.r(t);var r=o("@babel/runtime/helpers/esm/classCallCheck"),s=o.n(r),n=o("@babel/runtime/helpers/esm/possibleConstructorReturn"),a=o.n(n),l=o("@babel/runtime/helpers/esm/getPrototypeOf"),i=o.n(l),p=o("@babel/runtime/helpers/esm/createClass"),c=o.n(p),h=o("@babel/runtime/helpers/esm/inherits"),u=o.n(h),m=o("@babel/runtime/helpers/esm/assertThisInitialized"),d=o.n(m),g=o("@babel/runtime/helpers/esm/defineProperty"),v=o.n(g),f=o("react"),w=o("lodash/get"),x=o.n(w),C=o("@ta/common.classnames"),P=o.n(C),S=o("@ta/common.i18n"),_=o("@ta/common.loadable"),I=o.n(_),b=o("@ta/common.tracking"),k=o.n(b),E=o("@ta/common.state"),N=o("@ta/media.image"),y=o("@ta/styleguide.icon"),M=o("@ta/common.indicator-dots"),T=o.n(M),z=function e(t){return f.createElement("div",{className:"common-photo-carousel-CarouselProgress__container--3y8KU"},f.createElement("span",{className:"common-photo-carousel-CarouselProgress__text--1Urck"},Object(S.localize)("carousel_progress_numbers",{photos:t.currentIndex,totalPhotos:t.numItems})))},L=o("@babel/runtime/helpers/esm/objectSpread"),O=o.n(L),W={},R=new E.PrivateStateAccessor("photo-carousel",W);R.setReducer(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"registerState":var o=t.uniqueId,r={currentIndex:t.newIndex,hasWrapped:t.hasWrapped},s=O()({},e);return s[o]=r,s;default:return e}});var D=.1,j=2,A=function e(t){return function e(t){return R.getFrom(t)}(Object(E.getStore)().getState())[t]},F=function e(t){var o,r=t.isRight,s=t.size,n=t.onClick,a=t.disabled,l=t.allowOverClicking;if(a){if(l)return null;o=r?"common-photo-carousel-PhotoCarousel__rightNavDisabled--2ctBk":"common-photo-carousel-PhotoCarousel__leftNavDisabled--2BucD"}else o=r?"common-photo-carousel-PhotoCarousel__rightNav--2ArFZ":"common-photo-carousel-PhotoCarousel__leftNav--2oc4m";var i=s&&"small"===s?"common-photo-carousel-PhotoCarousel__small--2F3V3":null;return f.createElement("div",{className:P()(o,i,"is-shown-at-tablet"),onClick:n,"data-clicksource":"CarouselArrow"})},q=function(e){function t(e){var o;s()(this,t),o=a()(this,i()(t).call(this,e)),v()(d()(d()(o)),"swallow",function(e){e.stopPropagation()}),v()(d()(d()(o)),"previous",function(e){e.stopPropagation(),e.preventDefault(),o.nav(-1,!0,e),o.props.onNextTrackingProps&&k()(o.props.onNextTrackingProps)}),v()(d()(d()(o)),"next",function(e){e.stopPropagation(),e.preventDefault(),o.nav(1,!0,e),o.props.onPreviousTrackingProps&&k()(o.props.onPreviousTrackingProps)}),v()(d()(d()(o)),"nav",function(e,t,r){o.props.onNav&&o.props.onNav(e,t);var s=o.props.totalCount||o.props.photos.length,n=o.state.currentIndex+e;if(o.props.wrapPhotos||!(n>=s||n<0)){var a,l=o.state.hasWrapped;n>=s&&o.props.wrapPhotos&&(l=!0),(a=n<0?l?Math.max(Math.min(s,s+n),0):0:Math.max(Math.min(s,o.props.wrapPhotos?n%s:n),0))!==o.state.currentIndex&&(a>=o.props.photos.length-1-j&&o.props.onLoadLast&&o.props.onLoadLast(),o.setState({currentIndex:a,hasWrapped:l}),o.props.onPhotoChange&&o.props.onPhotoChange(a,r))}}),v()(d()(d()(o)),"swipeState",{xStart:null,xLast:null,swipeThreshold:null}),v()(d()(d()(o)),"touchStart",function(e){e&&e.currentTarget&&e.touches&&1===e.touches.length&&(o.swipeState.swipeThreshold=e.currentTarget.clientWidth*D,o.swipeState.xStart=e.touches[0].pageX-e.currentTarget.offsetLeft,o.swipeState.xLast=null)}),v()(d()(d()(o)),"touchMove",function(e){if(e&&e.currentTarget&&e.touches&&1===e.touches.length&&null!==o.swipeState.swipeThreshold&&null!==o.swipeState.xStart){o.swipeState.xLast=e.touches[0].pageX-e.currentTarget.offsetLeft;var t=o.swipeState.xStart-o.swipeState.xLast;o.swipeState.swipeThreshold<=Math.abs(t)&&o.touchEnd(e)}}),v()(d()(d()(o)),"touchEnd",function(e){if(null===o.swipeState.swipeThreshold||null===o.swipeState.xLast||null===o.swipeState.xStart)return o.swipeState.xStart=null,void(o.swipeState.xLast=null);var t=o.swipeState.xStart-o.swipeState.xLast;o.swipeState.swipeThreshold<=Math.abs(t)&&(o.swipeState.xStart=null,o.swipeState.xLast=null,o.nav(t/Math.abs(t),!1,e))});var r=0,n=!1,l=o.props.uniqueId;if(o.props.saveReduxState&&l){var p=A(l);r=x()(p,"currentIndex",0),n=x()(p,"hasWrapped",!1)}return o.state={currentIndex:r,hasWrapped:n},o}return u()(t,e),c()(t,null,[{key:"getDerivedStateFromProps",value:function e(t,o){var r=t.displayIndex,s=t.totalCount,n=t.photos,a=o.currentIndex;if(void 0===r)return null;var l=(s||n.length)-1;return r!==a?{currentIndex:Math.max(Math.min(r,l),0)}:null}}]),c()(t,[{key:"componentDidUpdate",value:function e(){var t=this.props.uniqueId;this.props.saveReduxState&&t&&Object(E.getStore)().dispatch(function e(t,o,r){return R.action({type:"registerState",uniqueId:t,newIndex:o,hasWrapped:r})}(t,this.state.currentIndex,this.state.hasWrapped))}},{key:"render",value:function e(){var t=this,o=this.props.maxIndicatorDots,r=void 0===o?5:o,s=this.props.totalCount||this.props.photos.length,n=this.props.hideArrows?"common-photo-carousel-PhotoCarousel__hideArrows--17PSq":null,a=this.state.currentIndex>0||this.state.hasWrapped,l=s>1&&(this.state.currentIndex<s-1||this.props.wrapPhotos),i=!this.props.noCta,p=this.state.currentIndex===this.props.photos.length-1&&this.props.totalCount!==this.props.photos.length,c=function e(){t.props.onPhotoMouseover&&t.props.onPhotoMouseover(p)};return f.createElement("div",{className:P()("common-photo-carousel-PhotoCarousel__carousel--hc4jm",n),style:{width:this.props.width,height:this.props.height},onClick:function e(){var o=t.props.photos[Math.min(t.state.currentIndex,t.props.photos.length-1)];t.props.onClick&&o&&t.props.onClick(o.id)},onTouchStart:function e(o){t.touchStart(o),c()},onTouchMove:this.touchMove,onTouchEnd:this.touchEnd,onMouseEnter:c},f.createElement("ul",{className:"common-photo-carousel-PhotoCarousel__images--3cna1"},this.props.photos.map(function(e,o){return f.createElement("li",{key:e.id,className:P()("common-photo-carousel-PhotoCarousel__photo--11M-m",t.props.overflowHidden?"common-photo-carousel-PhotoCarousel__crop--ZWIAl":null,t.state.currentIndex===o?"common-photo-carousel-PhotoCarousel__current--1ZRRH":null)},f.createElement(I.a,{shouldLoad:Math.abs(t.state.currentIndex-o)<=j},t.props.imageContainer?t.props.imageContainer(e):f.createElement(N.ResponsiveImage,{sources:e.photoSizes,width:"100%",height:t.props.photoHeight||"100%",notLazy:!t.props.lazyLoadImages,ssrContainerDimensions:0===t.state.currentIndex?t.props.ssrContainerDimensions:void 0,fitStrategy:t.props.fitStrategy,customFitStrategySelector:t.props.customFitStrategySelector})))})),this.props.children?f.createElement("div",{className:"common-photo-carousel-PhotoCarousel__childrenContainer--8HAPF"},this.props.children({currentIndex:this.state.currentIndex})):null,i?f.createElement(f.Fragment,null,f.createElement("div",{className:"common-photo-carousel-PhotoCarousel__ctaWrap--2Gk7f"},f.createElement("span",{className:"common-photo-carousel-PhotoCarousel__cta--3kEzs"},f.createElement(y.Icon,{name:"expand"})," ",Object(S.localize)("full_view"))),f.createElement("div",{className:"common-photo-carousel-PhotoCarousel__washout--WG3Ly"})):null,a?f.createElement(F,{isRight:!1,size:this.props.arrowSize,onClick:this.previous,disabled:!1,allowOverClicking:this.props.allowOverClicking}):f.createElement(F,{isRight:!1,size:this.props.arrowSize,onClick:this.swallow,disabled:!0,allowOverClicking:this.props.allowOverClicking}),l?f.createElement(F,{isRight:!0,size:this.props.arrowSize,onClick:this.next,disabled:!1,allowOverClicking:this.props.allowOverClicking}):f.createElement(F,{isRight:!0,size:this.props.arrowSize,onClick:this.swallow,disabled:!0,allowOverClicking:this.props.allowOverClicking}),this.props.badgeTopLeft&&f.createElement("div",{className:"common-photo-carousel-PhotoCarousel__badge-container--1JNFc"},this.props.badgeTopLeft),this.props.showIndicatorDots&&s?f.createElement(T.a,{numDots:Math.min(r,s),numItems:s,currentIndex:this.state.currentIndex}):null,this.props.showProgress&&f.createElement(z,{currentIndex:this.state.currentIndex+1,numItems:s}))}}]),t}(f.Component),H=function(e){function t(){var e,o;s()(this,t);for(var r=arguments.length,n=new Array(r),l=0;l<r;l++)n[l]=arguments[l];return o=a()(this,(e=i()(t)).call.apply(e,[this].concat(n))),v()(d()(d()(o)),"state",{currentIndex:0}),v()(d()(d()(o)),"onPhotoClick",function(e){o.setState({currentIndex:e}),o.props.onPhotoSelected&&o.props.onPhotoSelected(e)}),o}return u()(t,e),c()(t,[{key:"render",value:function e(){var t=this;if(!this.props.photos.length)return null;var o=Math.max(Math.min(this.state.currentIndex,this.props.photos.length-1),0),r=this.props.numItemsInRow?this.props.numItemsInRow:this.props.photos.length,s=0!==r?1/r:0;return f.createElement("div",{className:"common-photo-carousel-Photostrip__photostrip--jZJ_O"},this.props.photos.map(function(e,r){return f.createElement("div",{className:P()("common-photo-carousel-Photostrip__stripItem--2lP0e",o===r?"common-photo-carousel-Photostrip__selected--3XCcr":null),style:{flexBasis:"calc(".concat(100*s-.01,"% - 2px)")},onClick:function e(){return t.onPhotoClick(r)},key:e.id},f.createElement(N.ResponsiveImage,{sources:e.photoSizes,height:"100%",width:"100%"}))}))}}],[{key:"getDerivedStateFromProps",value:function e(t,o){var r=t.selectedIndex,s=t.photos,n=o.currentIndex;if(void 0===r)return null;var a=s.length-1;return r!==n?{currentIndex:Math.max(Math.min(r,a),0)}:null}}]),t}(f.Component),U=function e(t){var o=t.totalCount;return f.createElement("div",{className:"common-photo-carousel-PhotoCount__seeAll--3bVh_"},f.createElement(y.Icon,{name:"camera"})," ",f.createElement("span",{className:P()("is-shown-at-tablet","common-photo-carousel-PhotoCount__seeAllText--3Ufv_")},Object(S.localize)("all_photos_parens",{nCount:S.globalize.formatNumber("integer",o)})),f.createElement("span",{className:"is-hidden-tablet"},S.globalize.formatNumber("integer",o)))};o.d(t,"PhotoCarousel",function(){return q}),o.d(t,"Photostrip",function(){return H}),o.d(t,"PhotoCount",function(){return U})}}});
//# sourceMappingURL=common.photo-carousel.8e4adf6ee5.js.map