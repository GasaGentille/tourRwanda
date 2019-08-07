($WP="undefined"!=typeof $WP?$WP:[]).push({id:"@ta/social.section-overflow",d:["vendor-babel","vendor-react-libs","ta-platform","lithium-platform","@ta/overlays.managers","@ta/social.actions","@ta/social.follow","@ta/social.overflow-ui","@ta/tracking.interactions","@ta/social.login-gate","@ta/public.iap-reporting","ta-common"],e:["./packages/social/section-overflow/section-overflow.jsx"],x:{"./packages/social/section-overflow/section-overflow.jsx":["SectionOverflowMenu"]},m:{"./packages/social/section-overflow/section-overflow.jsx":function(e,t,o){"use strict";o.r(t);var n=o("@babel/runtime/helpers/esm/objectSpread"),r=o.n(n),a=o("@babel/runtime/helpers/esm/extends"),l=o.n(a),i=o("@babel/runtime/helpers/esm/classCallCheck"),c=o.n(i),s=o("@babel/runtime/helpers/esm/createClass"),p=o.n(s),u=o("@babel/runtime/helpers/esm/possibleConstructorReturn"),m=o.n(u),d=o("@babel/runtime/helpers/esm/getPrototypeOf"),f=o.n(d),E=o("@babel/runtime/helpers/esm/inherits"),b=o.n(E),g=o("@babel/runtime/helpers/esm/assertThisInitialized"),v=o.n(g),O=o("@babel/runtime/helpers/esm/defineProperty"),y=o.n(O),_=o("@babel/runtime/helpers/esm/slicedToArray"),T=o.n(_),R=o("react"),w=o("@ta/common.logging"),h=o.n(w),j=o("@ta/common.features"),k=o("@ta/common.i18n"),P=o("@ta/overlays.managers"),I=o("@ta/social.actions"),L=o("@ta/social.follow"),M=o.n(L),C=o("@ta/social.overflow-ui"),F=o("@ta/tracking.interactions"),N=o("@ta/social.login-gate"),A=o("@ta/public.iap-reporting"),U=o("@ta/failover.readonly"),D=["Video","Photo","LinkPost"],S=["Review","Photo","Video","LinkPost","ForumPost","Trip","RoomTip","ApiLocationTopic","ApiTopicPosting"],G=function(e){function t(){var e,o;c()(this,t);for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return o=m()(this,(e=f()(t)).call.apply(e,[this].concat(r))),y()(v()(v()(o)),"renderReportModal",function(e){var t=o.props.reportModalName,n=Object(A.reportPropsFromObject)(e);switch(e.__typename){case"RoomTip":case"Review":return R.createElement(A.ReportReviewModal,l()({},n,{modalName:t,key:"report"}));case"Photo":return R.createElement(A.ReportPhotoModal,l()({},n,{modalName:t,key:"report"}));case"Video":return R.createElement(A.ReportVideoModal,l()({},n,{modalName:t,key:"report"}));case"LinkPost":return R.createElement(A.ReportLinkModal,l()({},n,{modalName:t,key:"report"}));case"ForumPost":return R.createElement(A.ReportForumModal,l()({},n,{modalName:t,key:"report"}));case"Trip":return R.createElement(A.ReportTripModal,l()({},n,{modalName:t,key:"report"}));case"Repost":return R.createElement(A.ReportRepostModal,l()({},n,{modalName:t,key:"report"}));case"ApiLocationTopic":return R.createElement(A.ReportLocationTopicModal,l()({},n,{modalName:t,key:"report"}));case"ApiTopicPosting":return R.createElement(A.ReportLocationTopicPostModal,l()({},n,{modalName:t,key:"report"}));default:return h.a.error("Tried to report unsupported report type ".concat(e.__typename,":").concat(n.contentId)),null}}),y()(v()(v()(o)),"renderList",function(e){var t=e.reportEnabled,n=e.editEnabled,r=e.deleteEnabled,a=e.untagEnabled,l=e.followEnabled,i=e.onDelete,c=e.onUntag,s=e.mergedSectionObjectForType,p=o.props,u=p.onEdit,m=p.onReport,d=p.loginGate,f=p.logInteraction,E=p.sectionActor,b=[];return t&&b.push(R.createElement(C.OverflowUIListItem,{key:"report",onClick:function e(t){var o=t.event,n=t.close;f(o,"report");var r=function e(){m(),o.stopPropagation(),n()};d?d().then(function(){r()}):r()}},Object(k.localize)("social_report_1"))),n&&b.push(R.createElement(C.OverflowUIListItem,{key:"edit",onClick:function e(t){var o=t.event,n=t.close;"function"==typeof u&&u(),o.stopPropagation(),n()}},R.createElement("span",null,Object(k.localize)("trips_edit_CTA")," "))),r&&i&&b.push(R.createElement(C.OverflowUIListItem,{key:"delete",onClick:function e(t){var o=t.event,n=t.close;f(o,"delete"),"function"==typeof i&&i(),o.stopPropagation(),n()}},R.createElement("span",null,Object(k.localize)("inbox_swipe_delete")," "))),l&&b.push(R.createElement(C.OverflowUIListItem,{key:"follow",onClick:function e(t){t.event.stopPropagation()}},R.createElement(P.Closer,null,function(e){return R.createElement(M.a,{profile:E,displayType:"plain",onActionComplete:e})}))),a&&c&&b.push(R.createElement(C.OverflowUIListItem,{key:"untag",onClick:function e(t){var o=t.event,n=t.close;f(o,"untag"),"function"==typeof c&&c(),o.stopPropagation(),n()}},R.createElement("span",null,Object(k.localize)("social_untag_me")," "))),R.createElement(R.Fragment,null,t?o.renderReportModal(s.REPORT):null,R.createElement(C.OverflowUI,{onClick:function e(t){return f(t,"overflowMenuClick")}},R.createElement(C.OverflowUIList,null,b)))}),o}return b()(t,e),p()(t,[{key:"render",value:function e(){var t,o=this,n=this.props,a=n.deleteObject,l=n.onEdit,i=n.untagObject,c=n.sectionActor,s=n.sectionObject,p=n.sectionObjectForType,u=n.overrideItems,m=void 0===u?{}:u;if(!s&&!p)return null;var d=s?function e(t){var o={};return t.forEach(function(e){var t=T()(e,2),n=t[0],r=t[1];o[n]=r}),o}(["REPORT","DELETE","EDIT","FOLLOW","UNTAG"].map(function(e){return[e,s]})):{},f=r()({},d,p),E=c&&c.isMe,b=Object(j.featureIsEnabled)("social_report_iap_enabled")&&(Object(j.featureIsEnabled)("social_report_repost_iap_enabled")||"Repost"!==f.REPORT.__typename)&&("Repost"===f.REPORT.__typename&&S.includes(null===(t=f.REPORT.repostedObject)||void 0===t?void 0:t.__typename)||S.includes(f.REPORT.__typename))&&!1!==m.REPORT&&(m.REPORT||!E),g=Object(j.featureIsEnabled)("social_edit_enabled")&&D.includes(f.EDIT.__typename)&&l&&!(!1===m.EDIT)&&(!0===m.EDIT||E),v=Object(j.featureIsEnabled)("social_delete_enabled")&&a&&f.DELETE&&!1!==m.DELETE&&(m.DELETE||E),O=Object(j.featureIsEnabled)("social_follow_enabled")&&!1!==m.FOLLOW&&c&&(m.FOLLOW||!E),y=Object(j.featureIsEnabled)("social_at_referencing_profile_links")&&i&&f.UNTAG&&!1!==m.UNTAG;return b||g||v||O||y?v?R.createElement(I.DeleteConfirmation,{objectType:f.DELETE.__typename,deleteObject:a,shiftY:-5,below:!0,alignEdge:"right"},function(e,t){return R.createElement(R.Fragment,null,R.createElement(I.UntagConfirmation,{untagObject:i,shiftY:-5,below:!0,alignEdge:"right"},function(e,n){return R.createElement(R.Fragment,null,o.renderList({reportEnabled:b,editEnabled:g,deleteEnabled:v,untagEnabled:y,followEnabled:O,mergedSectionObjectForType:f,onDelete:t,onUntag:n}),R.createElement("span",{className:"social-section-overflow-SectionOverflowMenu__float--3mJ5J",ref:e}))}),R.createElement("span",{className:"social-section-overflow-SectionOverflowMenu__float--3mJ5J",ref:e}))}):R.createElement(I.UntagConfirmation,{untagObject:i,shiftY:-5,below:!0,alignEdge:"right"},function(e,t){return R.createElement(R.Fragment,null,o.renderList({reportEnabled:b,editEnabled:g,deleteEnabled:v,untagEnabled:y,followEnabled:O,mergedSectionObjectForType:f,onDelete:null,onUntag:t}),R.createElement("span",{className:"social-section-overflow-SectionOverflowMenu__float--3mJ5J",ref:e}))}):null}}]),t}(R.Component);y()(G,"defaultProps",{onEdit:void 0,untagObject:void 0,deleteObject:void 0,loginGate:void 0,sectionObjectForType:void 0});var x=function e(t){var o=t.sectionActor,n=t.deleteObject,r=t.onEdit,a=t.untagObject,l=t.sectionObject,i=t.sectionObjectForType,c=t.overrideItems,s=R.useRef("ReportIAP:".concat(Math.random())).current;return R.createElement(U.HideOnReadonly,null,R.createElement(N.SocialLoginGate,{pid:40474},function(e){return R.createElement(P.Opener,{name:s},function(t){return R.createElement(F.InteractionLogger,null,function(p){return R.createElement(G,{sectionActor:o,reportModalName:s,onReport:t,logInteraction:p,loginGate:e,deleteObject:n,sectionObjectForType:i,onEdit:r,untagObject:a,sectionObject:l,overrideItems:c})})})}))};o.d(t,"SectionOverflowMenu",function(){return x})}}});
//# sourceMappingURL=social.section-overflow.fd562b305d.js.map