(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{KzuC:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return u}));var r=t("IMLY"),l=t("vOnD"),n=t("q1tI"),s=t.n(n),c=t("EYWl"),o=l.default.div.withConfig({displayName:"progress__Container",componentId:"lk8v0k-0"})(["display:flex;align-items:center;.bar{flex:1;}"]);function u(){var e=Object(n.useState)(25),a=e[0],t=e[1],l=Object(n.useState)("Danger"),u=l[0],i=l[1];Object(n.useEffect)((function(){i(a<=25?"Danger":a<=50?"Warning":a<=75?"Info":"Success")}),[a]);var m=function(e){t(Math.min(Math.max(e,0),100))},E={marginBottom:"1rem"};return s.a.createElement(s.a.Fragment,null,s.a.createElement(c.a,{title:"Progress",keywords:["OAH","application","react"]}),s.a.createElement(r.Row,null,s.a.createElement(r.Col,{xs:12},s.a.createElement(r.Card,null,s.a.createElement("header",null,"Progress Status"),s.a.createElement(r.CardBody,null,s.a.createElement(r.Progress,{style:E,value:20,status:"Primary"},"Primary"),s.a.createElement(r.Progress,{style:E,value:40,status:"Success"},"Success"),s.a.createElement(r.Progress,{style:E,value:60,status:"Danger"},"Danger"),s.a.createElement(r.Progress,{style:E,value:80,status:"Info"},"Info"),s.a.createElement(r.Progress,{style:E,value:100,status:"Warning"},"Warning")))),s.a.createElement(r.Col,{xs:12},s.a.createElement(r.Card,null,s.a.createElement("header",null,"Progress Bar Size"),s.a.createElement(r.CardBody,null,s.a.createElement(r.Progress,{style:E,value:20,size:"XS"},"XS"),s.a.createElement(r.Progress,{style:E,value:40,size:"SM"},"SM"),s.a.createElement(r.Progress,{style:E,value:60,size:"MD"},"MD"),s.a.createElement(r.Progress,{style:E,value:80,size:"LG"},"LG"),s.a.createElement(r.Progress,{style:E,value:100,size:"XL"},"XL")))),s.a.createElement(r.Col,{xs:12},s.a.createElement(r.Card,null,s.a.createElement("header",null,"Progress Bar Value"),s.a.createElement(r.CardBody,null,s.a.createElement(r.Progress,{style:E,value:20,displayValue:!0}),s.a.createElement(r.Progress,{style:E,value:40},"Custom value")))),s.a.createElement(r.Col,{xs:12},s.a.createElement(r.Card,null,s.a.createElement("header",null,"Progress Bar Interactive"),s.a.createElement(r.CardBody,null,s.a.createElement(o,null,s.a.createElement(r.Actions,{size:"MD",actions:[{icon:"icon ion-ios-arrow-down",events:{onClick:function(){return m(a-25)}}}]}),s.a.createElement(r.Progress,{className:"bar",value:a,status:u,displayValue:!0}),s.a.createElement(r.Actions,{size:"MD",actions:[{icon:"icon ion-ios-arrow-up",events:{onClick:function(){return m(a+25)}}}]})))))))}}}]);
//# sourceMappingURL=component---src-pages-extra-components-progress-js-b79c73230edc3efe133b.js.map