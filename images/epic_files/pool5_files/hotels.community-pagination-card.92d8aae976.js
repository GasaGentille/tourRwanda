($WP="undefined"!=typeof $WP?$WP:[]).push({id:"@ta/hotels.community-pagination-card",d:["vendor-react-libs","@ta/styleguide.pagination","ta-platform"],e:["./packages/hotels/community-pagination-card/PaginationCard.jsx"],x:{"./packages/hotels/community-pagination-card/PaginationCard.jsx":["default"]},m:{"./packages/hotels/community-pagination-card/PaginationCard.jsx":function(a,t,i){"use strict";i.r(t);var e=i("react"),n=i("@ta/styleguide.pagination"),o=i("@ta/common.tracking"),c=i.n(o);t.default=function a(t){var i=t.offset,r=t.limit,l=t.total,d=t.url,u=t.module,m=t.onClick;if(l&&l<=r)return null;var g={offset:i,limit:r,total:l,url:d,className:"hotels-community-pagination-card-PaginationCard__wrapper--79519",onClick:function a(t,i){var e=window&&window.require;e&&e.defined("ta/Core/TA.FireEvent")&&e(["ta/Core/TA.FireEvent"],function(a){a&&(a.fireEvent("TabHeader_clickTab",document.getElementById("TABS_REVIEWS"),300),a.fireEvent("TabHeaderWC_clickTab","REVIEWS"))}),c()({module:u,action:"click",context:"pagination_".concat(t.buttonType),value:t.pageNumber}),c()({module:"ReviewLengthOptimization",action:"paginationReviewsClick"}),m&&m(t,i)}};return e.createElement(o.Track,{visible:{module:"ReviewLengthOptimization",action:"ScrolltoPagination"}},e.createElement(n.Pagination,g))}}}});
//# sourceMappingURL=hotels.community-pagination-card.92d8aae976.js.map