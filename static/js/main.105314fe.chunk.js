(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{14:function(t,e,c){},16:function(t,e,c){"use strict";c.r(e);var n=c(3),s=c.n(n),a=c(4),o=c(5),r=c(8),l=c(7),i=c(1),d=c(6),u=c.n(d),b=(c(13),c(14),c(0)),j=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],h=function(t){Object(r.a)(c,t);var e=Object(l.a)(c);function c(){var t;Object(a.a)(this,c);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(t=e.call.apply(e,[this].concat(s))).state={selectedGood:"Jam"},t.clearButton=function(){t.setState({selectedGood:""})},t.addButton=function(e){t.setState({selectedGood:e})},t}return Object(o.a)(c,[{key:"render",value:function(){var t=this,e=this.state.selectedGood;return Object(b.jsxs)("main",{className:"section container",children:[e?Object(b.jsxs)("h1",{className:"title is-flex is-align-items-center",children:["".concat(e," is selected"),Object(b.jsx)("button",{"data-cy":"ClearButton",type:"button",className:"delete ml-3",onClick:this.clearButton})]}):Object(b.jsx)("h1",{className:"title",children:"No goods selected"}),Object(b.jsx)("table",{className:"table",children:Object(b.jsx)("tbody",{children:j.map((function(c){var n=c===e;return Object(b.jsxs)("tr",{"data-cy":"Good",className:u()({"has-background-success-light":n}),children:[Object(b.jsx)("td",{children:n?Object(b.jsx)("button",{"data-cy":"RemoveButton",type:"button",className:"button is-info",onClick:t.clearButton,children:"-"}):Object(b.jsx)("button",{"data-cy":"AddButton",type:"button",className:"button",onClick:function(){return t.addButton(c)},children:"+"})}),Object(b.jsx)("td",{"data-cy":"GoodTitle",className:"is-vcentered",children:c})]},c)}))})})]})}}]),c}(i.Component);s.a.render(Object(b.jsx)(h,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.105314fe.chunk.js.map