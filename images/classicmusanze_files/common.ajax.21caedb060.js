($WP="undefined"!=typeof $WP?$WP:[]).push({id:"@ta/common.ajax",d:["vendor-babel","vendor-react-libs"],e:["./packages/common/ajax/ajax.jsx"],x:{"./packages/common/ajax/ajax.jsx":["AjaxRequest","formEncode"]},m:{"./packages/common/ajax/ajax.jsx":function(e,t,n){"use strict";n.r(t);var a=n("@babel/runtime/helpers/esm/classCallCheck"),r=n.n(a),o=n("@babel/runtime/helpers/esm/createClass"),s=n.n(o),i=n("@babel/runtime/helpers/esm/possibleConstructorReturn"),l=n.n(i),u=n("@babel/runtime/helpers/esm/getPrototypeOf"),c=n.n(u),m=n("@babel/runtime/helpers/esm/inherits"),p=n.n(m),d=n("@babel/runtime/helpers/esm/assertThisInitialized"),h=n.n(d),f=n("@babel/runtime/helpers/esm/defineProperty"),b=n.n(f),j=n("react"),x={html:{mime:"text/html",default:"",parse:function e(t){return t.text()}},json:{mime:"application/json",default:{},parse:function e(t){return t.json()}}},g=function(e){function t(){var e,n;r()(this,t);for(var a=arguments.length,o=new Array(a),s=0;s<a;s++)o[s]=arguments[s];return n=l()(this,(e=c()(t)).call.apply(e,[this].concat(o))),b()(h()(h()(n)),"state",{loading:!0,data:null}),n}return p()(t,e),s()(t,[{key:"componentDidMount",value:function e(){var t=this,n=this.props,a=n.url,r=n.responseType,o=void 0===r?"html":r;fetch(a,{method:"GET",credentials:"same-origin",headers:{Accept:x[o].mime}}).then(function(e){if(!e.ok)throw new Error(e.statusText);return x[o].parse(e)}).then(function(e){t.setState({loading:!1,data:e})}).catch(function(){t.setState({loading:!1,data:x[o].default})})}},{key:"render",value:function e(){var t=this.state,n=t.loading,a=t.data,r=this.props.responseType,o=null===a?x[void 0===r?"html":r].default:a;return this.props.children({loading:n,data:o})}}]),t}(j.Component);b()(g,"defaultProps",{responseType:"html"});var v=g,y=function(e){return Object.keys(e).map(function(t){return"".concat(encodeURIComponent(t),"=").concat(null==e[t]?"":encodeURIComponent(e[t].toString()))}).join("&")};n.d(t,"AjaxRequest",function(){return v}),n.d(t,"formEncode",function(){return y})}}});
//# sourceMappingURL=common.ajax.21caedb060.js.map