($WP="undefined"!=typeof $WP?$WP:[]).push({id:"@ta/hotels.community-tab-questions",d:["vendor-babel","vendor-react-libs","vendor-apollo-libs","vendor-redux-libs","@ta/common.state-controller","@ta/social.skeletons","@ta/hotels.community-pagination-card","ta-platform","lithium-platform","@ta/overlays.headers","@ta/overlays.managers","@ta/overlays.modal","@ta/hotels.community-content-common","ta-common","@ta/input.text-area","@ta/common.captcha","@ta/hotels.question-answer-parts","@ta/common.text","@ta/social.member-event","@ta/styleguide.skeleton","@ta/hotels.community-tab-common","@ta/overlays.attached-arrow-overlay","@ta/overlays.pieces","@ta/events.window"],e:["./packages/hotels/community-tab-questions/community-tab-questions.jsx"],x:{"./packages/hotels/community-tab-common/fragments/MemberFields.fragment.gql":["a"],"./packages/hotels/community-tab-questions/community-tab-questions.jsx":["ssrQueries","default"]},m:{"./packages/hotels/community-tab-common/fragments/MemberFields.fragment.gql":function(e,n,t){"use strict";var i={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"PhotoSizesTabFragment"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"PhotoSize"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"url"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"width"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"height"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"isHorizontal"},arguments:[],directives:[]}]}}],loc:{start:0,end:86}};i.loc.source={body:"a185bc5d5550"};var a=i,o={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"MemberFieldsTabFragment"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"MemberProfile"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:{kind:"Name",value:"userId"},name:{kind:"Name",value:"id"},arguments:[],directives:[{kind:"Directive",name:{kind:"Name",value:"static"},arguments:[]}]},{kind:"Field",name:{kind:"Name",value:"isMe"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"isVerified"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"isFollowing"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"displayName"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"username"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"avatar"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"photoSizes"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"PhotoSizesTabFragment"},directives:[]}]}}]}},{kind:"Field",name:{kind:"Name",value:"hometown"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"locationId"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"fallbackString"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"location"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"locationId"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"additionalNames"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"long"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]}]}}]}},{kind:"Field",name:{kind:"Name",value:"contributionCounts"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"sumAllUgc"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"helpfulVote"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"route"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"url"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:471}};o.loc.source={body:"ca7d6b012deb"};var s={};o.definitions=o.definitions.concat(function r(e){return e.filter(function(e){if("FragmentDefinition"!==e.kind)return!0;var n=e.name.value;return!s[n]&&(s[n]=!0,!0)})}(a.definitions)),n.a=o},"./packages/hotels/community-tab-questions/community-tab-questions.jsx":function(e,n,t){"use strict";t.r(n);var i=t("@babel/runtime/helpers/esm/objectSpread"),a=t.n(i),o=t("@babel/runtime/helpers/esm/classCallCheck"),s=t.n(o),r=t("@babel/runtime/helpers/esm/createClass"),l=t.n(r),d=t("@babel/runtime/helpers/esm/possibleConstructorReturn"),m=t.n(d),c=t("@babel/runtime/helpers/esm/getPrototypeOf"),u=t.n(c),v=t("@babel/runtime/helpers/esm/inherits"),k=t.n(v),p=t("@babel/runtime/helpers/esm/assertThisInitialized"),g=t.n(p),f=t("@babel/runtime/helpers/esm/defineProperty"),b=t.n(f),N=t("@babel/runtime/helpers/esm/slicedToArray"),h=t.n(N),y=t("react"),F=t("react-apollo"),S=t("react-redux"),_=t("@ta/common.state-controller"),I=t("@ta/social.skeletons"),w=t("@ta/hotels.community-pagination-card"),E=t.n(w),T=t("@ta/common.radio"),A=t.n(T),q=t("@ta/common.i18n"),C=t("@ta/common.text"),V=t("@ta/common.tracking"),j=t.n(V),x=t("@ta/common.routing"),D=t("@ta/social.member-event"),P=t("@ta/styleguide.skeleton"),M=t.n(P),O=t("@ta/hotels.question-answer-parts"),z=t("@ta/hotels.community-tab-common"),R=t("@ta/common.captcha"),L=t("@ta/common.classnames"),Q=t.n(L),U=t("@ta/styleguide.avatar"),B=t("@ta/input.text-area"),G=t("@ta/failover.readonly"),H=t("@ta/styleguide.button"),W=t.n(H),Y=t("@ta/styleguide.loading"),J={text:"",errors:null,submitting:!1,answering:!1},$=function(e){function n(){var e,t;s()(this,n);for(var i=arguments.length,o=new Array(i),r=0;r<i;r++)o[r]=arguments[r];return t=m()(this,(e=u()(n)).call.apply(e,[this].concat(o))),b()(g()(g()(t)),"state",a()({},J)),b()(g()(g()(t)),"onChange",function(e){return t.setState({text:e.currentTarget.value})}),b()(g()(g()(t)),"onFocus",function(){j()({module:"faq",action:"click",context:"answers_faq_answer_form"}),t.setState({answering:!0})}),b()(g()(g()(t)),"onSubmitResponse",function(e){t.setState({submitting:!1}),e.ok&&t.props.onSubmit?(t.props.onSubmit(e),t.setState(a()({},J))):e.json().then(function(e){t.resetCaptcha(),t.setState({errors:e.errors})})}),b()(g()(g()(t)),"submitAnswer",function(e){if(t.state.text){t.setState({submitting:!0});var n=t.props.topic,i=n.locationId,o=n.id,s=t.state.text,r=a()({},e,{captchaResponse:t.captchaResponse});O.answersAjax.submitAnswer({locationId:i,topicId:o,text:s,requestValidation:r,onResponse:t.onSubmitResponse})}}),b()(g()(g()(t)),"captchaResponse",{}),b()(g()(g()(t)),"resetCaptcha",function(){}),t}return k()(n,e),l()(n,[{key:"render",value:function e(){var n=this,t=this.state,i=t.text,o=t.errors,s=t.submitting;return y.createElement(G.HideOnReadonly,null,y.createElement(O.AuthGated,{call:function e(t){var i=t.csrfToken,a=t.altSessId;return n.submitAnswer({csrfToken:i,altSessionId:a})}},function(e){var t,r;return y.createElement("form",{className:Q()(n.props.className,"hotels-community-tab-questions-AnswerForm__upperForm--1RlW5"),onSubmit:function n(t){e(),t.preventDefault()}},y.createElement(U.Avatar,{photo:n.props.currentMember?n.props.currentMember.avatar:void 0,display:"inline",target:"_self",href:null===(t=n.props.currentMember)||void 0===t?void 0:null===(r=t.route)||void 0===r?void 0:r.url,withBorder:!0,size:"xtra-small"}),y.createElement("div",{className:"hotels-community-tab-questions-AnswerForm__formContent--2Id-J"},y.createElement(B.TextArea,{value:i,onChange:n.onChange,onFocus:n.onFocus,className:Q()("hotels-community-tab-questions-AnswerForm__answerInput--3B4Fn",b()({},"hotels-community-tab-questions-AnswerForm__disabled--HoSOz",s)),placeholder:n.props.topic.postCount?Object(q.localize)("hr_community_qa_answer_question"):Object(q.localize)("hr_community_qa_answer_question_first"),name:"answer",rows:n.state.answering?3:1,disabled:s}),n.state.answering?y.createElement("div",{className:"hotels-community-tab-questions-AnswerForm__underForm--1-YwD"},y.createElement("div",{className:"hotels-community-tab-questions-AnswerForm__guidelines--2Q5er"},y.createElement(O.PostingGuidelinesLink,{location:n.props.location,theme:"community"})),y.createElement("div",null,o&&y.createElement("ul",{className:"hotels-community-tab-questions-AnswerForm__error--cC1dA"},o.map(function(e){return y.createElement("li",{key:e},e)})),y.createElement("div",{className:"hotels-community-tab-questions-AnswerForm__captchas--2o0Qz"},y.createElement(R.Captchas,null,function(e,t){n.resetCaptcha=t,n.captchaResponse=e})),y.createElement("div",{className:"hotels-community-tab-questions-AnswerForm__ctaButtons--3IeJh"},y.createElement("span",{className:"hotels-community-tab-questions-AnswerForm__ctaWrap--1vg53"},y.createElement(W.a,{onClick:function n(t){e(),t.preventDefault()},type:"primary",size:"default",disabled:s,loading:s},s?y.createElement(Y.LoadingBubbles,{size:"small"}):null,Object(q.localize)("common_Submit"))),y.createElement(W.a,{onClick:function e(t){t.preventDefault(),s||n.setState(a()({},J))},type:"secondary",size:"default",disabled:s},Object(q.localize)("btn_cancel"))))):null))}))}}]),n}(y.Component),Z=function e(n){return y.createElement(O.TranslateModal,n,function(e){return y.createElement(W.a,{onClick:e,type:"secondary",size:"small"},Object(q.localize)("google_translation"))})};Z.defaultProps={postingId:void 0};var K=Z,X=t("@ta/styleguide.icon"),ee=t("@ta/overlays.attached-arrow-overlay"),ne=t.n(ee),te=t("@ta/overlays.pieces"),ie=t("@ta/events.window"),ae=t.n(ie),oe=function(e){function n(){var e,t;s()(this,n);for(var i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];return t=m()(this,(e=u()(n)).call.apply(e,[this].concat(a))),b()(g()(g()(t)),"state",{numVotes:t.props.numVotes,ajaxMessage:""}),b()(g()(g()(t)),"onVoteResponse",function(e){e.json().then(function(e){void 0!==e.votes&&null!==e.votes?t.setState({numVotes:e.votes,ajaxMessage:e.message}):t.setState({ajaxMessage:e.message})})}),b()(g()(g()(t)),"vote",function(e){var n={altSessionId:t.props.altSessId||"",csrfToken:t.props.securityToken,captchaResponse:{}};e({postingId:t.props.postingId,requestValidation:n,onResponse:t.onVoteResponse})}),t}return k()(n,e),l()(n,[{key:"render",value:function e(){var n=this,t=this.state,i=t.numVotes,a=t.ajaxMessage;return y.createElement("form",{className:"hotels-community-tab-questions-VotingForm__votingForm--19m9f"},y.createElement(O.AuthGated,{call:function e(){return n.vote(O.answersAjax.upVote)}},function(e){return y.createElement(X.Icon,{name:"thumbs-up-fill",className:"hotels-community-tab-questions-VotingForm__voteButton--3ZDG_",onClick:e})}),y.createElement(te.Target,null,function(e,t){return y.createElement(y.Fragment,null,y.createElement("span",{className:"hotels-community-tab-questions-VotingForm__voteCount--3Jpcv",ref:e},Object(q.localize)("num_votes_plural",{0:i})),t&&a&&y.createElement(ne.a,{target:t,position:"above"},y.createElement("div",{className:"hotels-community-tab-questions-VotingForm__ajaxMessage--3N879"},a),y.createElement(ae.a,{event:"click",callback:function e(){return n.setState({ajaxMessage:""})}})))}),y.createElement(O.AuthGated,{call:function e(){return n.vote(O.answersAjax.downVote)}},function(e){return y.createElement(X.Icon,{name:"thumbs-down-fill",className:"hotels-community-tab-questions-VotingForm__voteButton--3ZDG_",onClick:e})}))}}]),n}(y.Component),se=Object(S.connect)(function(e){return{isLoggedIn:e.auth.isMember,securityToken:e.auth.csrfToken,altSessId:e.auth.altSessId}})(oe),re=function(e){function n(){var e,t;s()(this,n);for(var i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];return t=m()(this,(e=u()(n)).call.apply(e,[this].concat(a))),b()(g()(g()(t)),"deletePosting",function(){var e=t.props,n=e.posting.id,i=e.csrfToken,a=e.onAnswerDeleted;O.answersAjax.deleteAnswer({id:n,token:i,onResponse:a})}),t}return k()(n,e),l()(n,[{key:"render",value:function e(){var n=this.props,t=n.posting,i=n.currentMember,a=n.locationId;return y.createElement(y.Fragment,null,y.createElement(D.MemberEventOnObjectBlock,{actor:t.userProfile,member:i,objectEventType:"onTopicPosting",object:t,deleteObject:this.deletePosting}),y.createElement("div",{className:"hotels-community-tab-questions-Posting__content--1YUgg"},y.createElement(K,{locationId:a,topicId:t.locationTopicId,postingId:t.id,contentLanguage:t.contentLanguage}),y.createElement(C.DirectionalText,{contentLanguage:t.contentLanguage},t.content)),y.createElement(se,{postingId:t.id,numVotes:t.upvotes}))}}]),n}(y.Component),le=Object(S.connect)(function(e){return{csrfToken:e.auth.csrfToken}})(re),de={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"HRComm_PostingFields"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"ApiTopicPosting"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"locationTopicId"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"content"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"isOwner"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"isReviewer"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"upvotes"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"contentLanguage"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"timePublished"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"timeSubmitted"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"userProfile"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:{kind:"Name",value:"userId"},name:{kind:"Name",value:"id"},arguments:[],directives:[{kind:"Directive",name:{kind:"Name",value:"static"},arguments:[]}]},{kind:"Field",name:{kind:"Name",value:"isMe"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"isVerified"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"isFollowing"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"displayName"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"username"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"avatar"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"photoSizes"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"url"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"width"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"height"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"isHorizontal"},arguments:[],directives:[]}]}}]}},{kind:"Field",name:{kind:"Name",value:"hometown"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"locationId"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"fallbackString"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"location"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"locationId"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"additionalNames"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"long"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]}]}}]}},{kind:"Field",name:{kind:"Name",value:"contributionCounts"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"sumAllUgc"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"helpfulVote"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"route"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"url"},arguments:[],directives:[]}]}}]}}]}}],loc:{start:0,end:658}};de.loc.source={body:"5f66e490b288"};var me=de,ce={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"QuestionSectionPosting"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"fetchTopic"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"Boolean"}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"fetchPosting"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"Boolean"}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"topicId"}},type:{kind:"NamedType",name:{kind:"Name",value:"Int"}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"postingId"}},type:{kind:"NamedType",name:{kind:"Name",value:"Int"}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"topics"},arguments:[{kind:"Argument",name:{kind:"Name",value:"topicIds"},value:{kind:"ListValue",values:[{kind:"Variable",name:{kind:"Name",value:"topicId"}}]}}],directives:[{kind:"Directive",name:{kind:"Name",value:"include"},arguments:[{kind:"Argument",name:{kind:"Name",value:"if"},value:{kind:"Variable",name:{kind:"Name",value:"fetchTopic"}}}]}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"postings"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"HRComm_PostingFields"},directives:[]}]}}]}},{kind:"Field",name:{kind:"Name",value:"postings"},arguments:[{kind:"Argument",name:{kind:"Name",value:"postingIds"},value:{kind:"ListValue",values:[{kind:"Variable",name:{kind:"Name",value:"postingId"}}]}}],directives:[{kind:"Directive",name:{kind:"Name",value:"include"},arguments:[{kind:"Argument",name:{kind:"Name",value:"if"},value:{kind:"Variable",name:{kind:"Name",value:"fetchPosting"}}}]}],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"HRComm_PostingFields"},directives:[]}]}}]}}],loc:{start:0,end:374}};ce.loc.source={body:"18fa55cfe166"};var ue={};ce.definitions=ce.definitions.concat(function ve(e){return e.filter(function(e){if("FragmentDefinition"!==e.kind)return!0;var n=e.name.value;return!ue[n]&&(ue[n]=!0,!0)})}(me.definitions));var ke=ce,pe=function(e){function n(){var e,t;s()(this,n);for(var i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];return t=m()(this,(e=u()(n)).call.apply(e,[this].concat(a))),b()(g()(g()(t)),"state",{expandAnswers:!1,deletedAnswers:new Set}),b()(g()(g()(t)),"onSeeAllClick",function(e){e.preventDefault(),t.state.expandAnswers||j()({module:"faq",action:"click",context:"show_all_answers"}),t.setState(function(e){return{expandAnswers:!e.expandAnswers}})}),b()(g()(g()(t)),"onAnswerDeleted",function(e){return function(){t.setState(function(n){var t=new Set(n.deletedAnswers);return t.add(e),{deletedAnswers:t}})}}),b()(g()(g()(t)),"deleteTopic",function(){var e=t.props,n=e.topic.id,i=e.csrfToken,a=e.onQuestionDeleted;O.answersAjax.deleteQuestion({id:n,token:i,onResponse:a})}),t}return k()(n,e),l()(n,[{key:"renderToggleLink",value:function e(n){var t=this.props.topic,i=this.state.expandAnswers;return n>1?y.createElement(x.Link,{href:t.url,onClick:this.onSeeAllClick,className:"hotels-community-tab-questions-Topic__seeAllLink--21KIE"},i?Object(q.localize)("hr_community_qa_show_top_answer"):Object(q.localize)("hr_community_qa_show_all_answers")):null}},{key:"renderAnswers",value:function e(){var n=this,t=this.props,i=t.location.locationId,a=t.currentMember,o=t.topic,s=t.topPostingOverride,r=this.state,l=r.expandAnswers,d=r.deletedAnswers;return y.createElement(O.AnswerProvider,{query:ke,topic:o,expanded:l,newPostingId:s},function(e){var t=e.filter(function(e){return!e||!d.has(e.id)}),s=t.length;return t.map(function(e,t){return y.createElement("div",{className:"hotels-community-tab-questions-Topic__content--3wBtU",key:e?e.id:-1*t},e?y.createElement(le,{locationId:i,posting:e,currentMember:a,onAnswerDeleted:n.onAnswerDeleted(e.id)}):y.createElement(M.a,{width:"100%",height:"100px"}),t===s-1?n.renderToggleLink(l?s:o.postCount):null)})})}},{key:"render",value:function e(){var n=this.props,t=n.topic,i=n.currentMember,a=n.location,o=n.onAnswerPosted,s=n.renderFullTopic;return y.createElement(z.Card,{noPadding:!0},y.createElement("div",{className:"hotels-community-tab-questions-Topic__content--3wBtU","data-test-target":"faq-topic"},y.createElement(D.MemberEventOnObjectBlock,{actor:t.userProfile,member:i,objectEventType:"onLocationTopic",object:t,deleteObject:this.deleteTopic,renderMemberActions:s}),y.createElement(K,{locationId:a.locationId,topicId:t.id,contentLanguage:t.contentLanguage}),y.createElement(x.Link,{href:t.url,className:"hotels-community-tab-questions-Topic__questionLink--2ACzl"},y.createElement(C.DirectionalText,{contentLanguage:t.contentLanguage},t.content))),this.renderAnswers(),y.createElement($,{topic:t,currentMember:i,location:a,onSubmit:o,className:"hotels-community-tab-questions-Topic__content--3wBtU"}))}}]),n}(y.Component);b()(pe,"defaultProps",{csrfToken:""});var ge=Object(S.connect)(function(e){return{csrfToken:e.auth.csrfToken}})(pe),fe=t("./packages/hotels/community-tab-common/fragments/MemberFields.fragment.gql"),be={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"QuestionsSection"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"locationId"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"Int"}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"offset"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"Int"}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"limit"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"Int"}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"loggedIn"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"Boolean"}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"loggedInUserId"}},type:{kind:"NamedType",name:{kind:"Name",value:"String"}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:{kind:"Name",value:"currentMember"},name:{kind:"Name",value:"memberProfile"},arguments:[{kind:"Argument",name:{kind:"Name",value:"userId"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"id"},value:{kind:"Variable",name:{kind:"Name",value:"loggedInUserId"}}}]}}],directives:[{kind:"Directive",name:{kind:"Name",value:"include"},arguments:[{kind:"Argument",name:{kind:"Name",value:"if"},value:{kind:"Variable",name:{kind:"Name",value:"loggedIn"}}}]}],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"MemberFieldsTabFragment"},directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"locations"},arguments:[{kind:"Argument",name:{kind:"Name",value:"locationIds"},value:{kind:"ListValue",values:[{kind:"Variable",name:{kind:"Name",value:"locationId"}}]}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"locationId"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"geoName"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"parentGeoId"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"topicCount"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"locationTopics"},arguments:[{kind:"Argument",name:{kind:"Name",value:"page"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"offset"},value:{kind:"Variable",name:{kind:"Name",value:"offset"}}},{kind:"ObjectField",name:{kind:"Name",value:"limit"},value:{kind:"Variable",name:{kind:"Name",value:"limit"}}}]}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"locationId"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"mcid"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"content"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"timeSubmitted"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"postCount"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"url"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"contentLanguage"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"userProfile"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"MemberFieldsTabFragment"},directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"topPosting"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"HRComm_PostingFields"},directives:[]}]}}]}}]}}]}}],loc:{start:0,end:795}};be.loc.source={body:"80357b386e08"};var Ne={};function he(e){return e.filter(function(e){if("FragmentDefinition"!==e.kind)return!0;var n=e.name.value;return!Ne[n]&&(Ne[n]=!0,!0)})}be.definitions=be.definitions.concat(he(fe.a.definitions)),be.definitions=be.definitions.concat(he(me.definitions));var ye=be,Fe=t("@babel/runtime/helpers/esm/extends"),Se=t.n(Fe),_e=t("@ta/overlays.headers"),Ie=t("@ta/overlays.managers"),we=t("@ta/overlays.modal"),Ee=t("@ta/hotels.community-content-common"),Te=function(e){function n(){var e,t;s()(this,n);for(var i=arguments.length,o=new Array(i),r=0;r<i;r++)o[r]=arguments[r];return t=m()(this,(e=u()(n)).call.apply(e,[this].concat(o))),b()(g()(g()(t)),"state",{text:"",errors:null,submitting:!1}),b()(g()(g()(t)),"onChange",function(e){return t.setState({text:e.currentTarget.value})}),b()(g()(g()(t)),"onSubmitResponse",function(e){t.setState({submitting:!1}),e.ok?t.props.onSubmit(e):e.json().then(function(e){t.resetCaptcha(),t.setState({errors:e.errors})})}),b()(g()(g()(t)),"submitQuestion",function(e){if(t.state.text){t.setState({submitting:!0});var n=t.props.location.locationId,i=t.state.text,o=a()({},e,{captchaResponse:t.captchaResponse});O.answersAjax.submitQuestion({locationId:n,text:i,requestValidation:o,onResponse:t.onSubmitResponse})}}),b()(g()(g()(t)),"captchaResponse",{}),b()(g()(g()(t)),"resetCaptcha",function(){}),t}return k()(n,e),l()(n,[{key:"render",value:function e(){var n=this,t=this.props,i=t.location.name,a=t.onCancel,o=this.state,s=o.text,r=o.errors,l=o.submitting;return y.createElement(y.Fragment,null,y.createElement("div",{className:"ui_header h3"},Object(q.localize)("qa_get_quick_answers_56a",{0:i})),y.createElement(O.AuthGated,{call:function e(t){var i=t.csrfToken,a=t.altSessId;return n.submitQuestion({csrfToken:i,altSessionId:a})}},function(e){var t,i;return y.createElement("form",{className:"hotels-community-tab-questions-QuestionsForm__upperForm--3eo5C",onSubmit:function n(t){e(),t.preventDefault()}},y.createElement(U.Avatar,{photo:n.props.currentMember?n.props.currentMember.avatar:void 0,display:"inline",target:"_self",href:null===(t=n.props.currentMember)||void 0===t?void 0:null===(i=t.route)||void 0===i?void 0:i.url,withBorder:!0,size:"xtra-small"}),y.createElement("div",{className:"hotels-community-tab-questions-QuestionsForm__formContent--3UTEQ"},y.createElement(B.TextArea,{value:s,onChange:n.onChange,className:Q()("hotels-community-tab-questions-QuestionsForm__answerInput--2CiFw",b()({},"hotels-community-tab-questions-QuestionsForm__disabled--COHUC",l)),placeholder:Object(q.localize)("qa_q_placeholder_lo"),name:"answer",rows:6,disabled:l}),r&&y.createElement("ul",{className:"hotels-community-tab-questions-QuestionsForm__error--1e0jY"},r.map(function(e){return y.createElement("li",{key:e},e)})),Object(q.localize)("qa_question_overlay_note_56a"),y.createElement("div",{className:"hotels-community-tab-questions-QuestionsForm__guidelines--37spU"},y.createElement(O.PostingGuidelinesLink,{location:n.props.location,theme:"community",inlineExpansion:!0})),y.createElement("div",{className:"hotels-community-tab-questions-QuestionsForm__captchas--1cAHf"},y.createElement(R.Captchas,null,function(e,t){n.resetCaptcha=t,n.captchaResponse=e})),y.createElement("div",{className:"hotels-community-tab-questions-QuestionsForm__ctaButtons--W6MYH"},y.createElement("span",{className:"hotels-community-tab-questions-QuestionsForm__ctaWrap--3wL1R"},y.createElement(W.a,{onClick:function n(t){e(),t.preventDefault()},type:"primary",size:"default",disabled:l,loading:l},l?y.createElement(Y.LoadingBubbles,{size:"small"}):null,Object(q.localize)("common_Submit"))),y.createElement(W.a,{onClick:function e(n){n.preventDefault(),a()},type:"secondary",size:"default",disabled:l},Object(q.localize)("btn_cancel")))))}))}}]),n}(y.Component),Ae=function e(n){return y.createElement(we.Modal,{name:Ee.QUESTION_FORM_MODAL_NAME,header:y.createElement(_e.TitleBar,{iconName:"forums",displayType:"LEFT_ALIGN_GRAY"},Object(q.localize)("hr_ask_a_question"))},y.createElement(Ie.Closer,null,function(e){return y.createElement("div",{className:"hotels-community-tab-questions-QuestionFormModal__container--2yO2D"},y.createElement(Te,Se()({},n,{onCancel:e,onSubmit:function t(i){e(),n.onSubmit(i)}})))}))};t.d(n,"ssrQueries",function(){return je});var qe=function e(n){var t=n.locationId,i=n.loggedInUserId;return{query:ye,variables:{offset:0,locationId:t,limit:5,loggedInUserId:i,loggedIn:!!i},skip:!t||t<0,errorPolicy:"all"}},Ce=function(e){function n(){var e,t;s()(this,n);for(var i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];return t=m()(this,(e=u()(n)).call.apply(e,[this].concat(a))),b()(g()(g()(t)),"state",{topPostingOverrides:new Map,deletedTopics:new Set}),b()(g()(g()(t)),"previousTopicCount",0),t}return k()(n,e),l()(n,[{key:"shouldComponentUpdate",value:function e(n){return n.isSelectedTab}},{key:"render",value:function e(){var n=this,t=this.props,i=t.locationId,o=t.geoId,s=t.loggedInUserId,r=qe({locationId:i,geoId:o,loggedInUserId:s}),l={locationId:i,limit:5,loggedInUserId:s,loggedIn:!!s};return y.createElement(_.PaginationStateController,null,function(e){var t=e.offset,o=e.changePageOffset,s=!i||i<0;return y.createElement(F.Query,{query:r.query,variables:a()({},r.variables,{offset:t}),skip:r.skip,errorPolicy:r.errorPolicy},function(e){var i=e.data,r=e.loading,d=e.refetch,m=s||r,c=function u(e,n){if(e||!(n&&n.locations&&n.locations[0]))return{location:{locationId:-1,name:"",geoName:"",parentGeoId:-1},topicCount:0,locationTopics:[],currentMember:void 0};var t=n.currentMember,i=n.locations;i=void 0===i?[]:i;var a=h()(i,1)[0],o=(a=void 0===a?{}:a).topicCount,s=a.locationTopics,r=void 0===s?[]:s;return{location:{locationId:a.locationId,name:a.name,geoName:a.geoName,parentGeoId:a.parentGeoId},topicCount:o,locationTopics:r,currentMember:t}}(m,i),v=c.topicCount,k=c.locationTopics,p=c.currentMember,g=c.location;m||(n.previousTopicCount=v);var f=function e(){o({offset:0}),d(a()({offset:0},l)).then(function(){return A()("hr-community-tab").emit("selectTab","Questions",!0)})},b=function e(t){return function(){n.setState(function(e){var n=new Set(e.deletedTopics);return n.add(t),{deletedTopics:n}},d)}},N=function e(t){return function(e){e.json().then(function(e){return n.setState(function(n){var i=new Map(n.topPostingOverrides);return i.set(t,e.postingId),{topPostingOverrides:i}},d)})}};return m||v?y.createElement(y.Fragment,null,m?y.createElement(I.FeedLoadingSkeleton,{numSections:5}):k.filter(function(e){return!n.state.deletedTopics.has(e.id)}).map(function(e){return y.createElement(ge,{topic:a()({},e,{location:g}),location:g,key:e.id,currentMember:p,topPostingOverride:n.state.topPostingOverrides.get(e.id),onAnswerPosted:N(e.id),onQuestionDeleted:b(e.id),renderFullTopic:n.props.isSelectedTab})}),y.createElement(E.a,{offset:t,limit:5,total:v||n.previousTopicCount,module:"faq",onClick:function e(n){return o(n)}}),y.createElement(Ae,{currentMember:p,location:g,onSubmit:f})):y.createElement(Ae,{currentMember:p,location:g,onSubmit:f})})})}}]),n}(y.Component),Ve=function e(n){return{locationId:n.page.detailId,geoId:n.page.geoId,loggedInUserId:n.auth.loggedInUserId}},je=function e(n){return[qe(Ve(n))]};n.default=Object(S.connect)(Ve)(Ce)}}});
//# sourceMappingURL=hotels.community-tab-questions.b7e33a9d8a.js.map