($WP="undefined"!=typeof $WP?$WP:[]).push({id:"@ta/styleguide.radio-button",d:["vendor-babel","vendor-react-libs"],e:["./packages/styleguide/radio-button/RadioButton.jsx"],x:{"./packages/styleguide/radio-button/RadioButton.jsx":["default"]},m:{"./packages/styleguide/radio-button/RadioButton.jsx":function(e,t,a){"use strict";a.r(t);var n,i=a("@babel/runtime/helpers/esm/classCallCheck"),r=a.n(i),u=a("@babel/runtime/helpers/esm/createClass"),l=a.n(u),s=a("@babel/runtime/helpers/esm/possibleConstructorReturn"),o=a.n(s),d=a("@babel/runtime/helpers/esm/getPrototypeOf"),c=a.n(d),b=a("@babel/runtime/helpers/esm/inherits"),h=a.n(b),p=a("@babel/runtime/helpers/esm/assertThisInitialized"),m=a.n(p),f=a("@babel/runtime/helpers/esm/defineProperty"),y=a.n(f),v=a("react"),R=(n=0,function(){return"radio_".concat(n+=1)}),g=function(e){function t(){var e,a;r()(this,t);for(var n=arguments.length,i=new Array(n),u=0;u<n;u++)i[u]=arguments[u];return a=o()(this,(e=c()(t)).call.apply(e,[this].concat(i))),y()(m()(m()(a)),"uniqueId",R()),y()(m()(m()(a)),"inputRef",v.createRef()),y()(m()(m()(a)),"labelRef",v.createRef()),a}return h()(t,e),l()(t,[{key:"componentDidMount",value:function e(){var t=this.inputRef.current;t&&(t.id=this.uniqueId);var a=this.labelRef.current;a&&(a.htmlFor=this.uniqueId)}},{key:"render",value:function e(){var t=this.props,a=t.name,n=t.value,i=t.selected,r=t.onSelect,u=t.disabled,l=t.children;return v.createElement("div",{className:"ui_radio ".concat("styleguide-radio-button-RadioButton__radio--QaLyE"," ").concat(u?"styleguide-radio-button-RadioButton__disabled--1vtUA":""),"data-value":n,onClick:r},v.createElement("input",{id:this.uniqueId,ref:this.inputRef,type:"radio",name:a,value:n,checked:i,onChange:r,disabled:u}),v.createElement("label",{htmlFor:this.uniqueId,ref:this.labelRef,className:"label ".concat("styleguide-radio-button-RadioButton__label--147LH"," ").concat(i?"checked":"unchecked")},l))}}]),t}(v.PureComponent);y()(g,"defaultProps",{disabled:!1,selected:!1}),t.default=g}}});
//# sourceMappingURL=styleguide.radio-button.f736e47f75.js.map