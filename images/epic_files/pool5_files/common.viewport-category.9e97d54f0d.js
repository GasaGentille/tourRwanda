($WP="undefined"!=typeof $WP?$WP:[]).push({id:"@ta/common.viewport-category",d:["vendor-react-libs","vendor-redux-libs"],e:["./packages/common/viewport-category/index.jsx"],x:{"./packages/common/viewport-category/index.jsx":["ViewportCategory","ViewportCategoryLazy"]},m:{"./packages/common/viewport-category/index.jsx":function(e,t,r){"use strict";r.r(t),r("react");var o=r("react-redux"),n=Object(o.connect)(function(e){return{deviceType:e.meta.device.viewportCategory}})(function e(t){return"DESKTOP"===t.deviceType?t.desktop:"TABLET"===t.deviceType?t.tablet:t.mobile}),c=Object(o.connect)(function(e){return{deviceType:e.meta.device.viewportCategory}})(function e(t){return"DESKTOP"===t.deviceType?t.renderDesktop():"TABLET"===t.deviceType?t.renderTablet():t.renderMobile()});r.d(t,"ViewportCategory",function(){return n}),r.d(t,"ViewportCategoryLazy",function(){return c})}}});
//# sourceMappingURL=common.viewport-category.9e97d54f0d.js.map