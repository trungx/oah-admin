(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{XTq0:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return i}));a("E5k/");var n=a("q1tI"),l=a.n(n),o=a("IMLY"),r=a("EYWl");function i(){var e=Object(n.useState)(1),t=e[0],a=e[1],i=Object(n.useState)({title:"HI there!",message:"cool toaster",position:"topEnd",status:"Primary",duration:2e3,hasIcon:!0,destroyByClick:!0,preventDuplicates:!1,icons:{Primary:"ion-ios-mail",Warning:"ion-ios-alert",Danger:"ion-ios-bug",Success:"ion-ios-checkmark-circle",Info:"ion-ios-help-circle"}}),u=i[0],c=i[1],s=Object(n.useRef)(),m=function(e,t){var a=Object.assign({},u);a[e]=t,c(a)};return l.a.createElement(l.a.Fragment,null,l.a.createElement(r.a,{title:"Toastr",keywords:["OAH","application","react"]}),l.a.createElement(o.Row,null,l.a.createElement(o.Col,{xs:12},l.a.createElement(o.Toastr,{ref:s}),l.a.createElement(o.Card,null,l.a.createElement("header",null,"Toaster configuration"),l.a.createElement(o.CardBody,null,l.a.createElement(o.Row,null,l.a.createElement(o.Col,{xs:12,md:6},l.a.createElement(o.Select,{style:{marginBottom:"1rem"},fullWidth:!0,placeholder:"Place to show toast",options:[{value:"topRight",label:"Top-Right"},{value:"topLeft",label:"Top-Left"},{value:"bottomRight",label:"Bottom-Right"},{value:"bottomLeft",label:"Bottom-Left"},{value:"topStart",label:"Top-Start"},{value:"topEnd",label:"Top-End"},{value:"bottomStart",label:"Bottom-Start"},{value:"bottomEnd",label:"Bottom-End"}],value:u.position,onChange:function(e){return m("position",e)}}),l.a.createElement(o.InputGroup,{fullWidth:!0,label:"Title"},l.a.createElement("input",{type:"text",value:u.title,onChange:function(e){return m("title",e.target.value)}})),l.a.createElement(o.InputGroup,{fullWidth:!0,label:"Message"},l.a.createElement("input",{type:"text",value:u.message,onChange:function(e){return m("message",e.target.value)}})),l.a.createElement(o.InputGroup,{fullWidth:!0,label:"Time to hide toast, ms. 0 to persistent toast"},l.a.createElement("input",{type:"number",value:u.duration,onChange:function(e){return m("duration",e.target.valueAsNumber)}}))),l.a.createElement(o.Col,{xs:12,md:6},l.a.createElement(o.Select,{style:{marginBottom:"1rem"},fullWidth:!0,placeholder:"Toast Status",options:[{value:"Info",label:"Info"},{value:"Success",label:"Success"},{value:"Danger",label:"Danger"},{value:"Primary",label:"Primary"},{value:"Warning",label:"Warning"},{value:"Default",label:"Default"}],value:u.status,onChange:function(e){return m("status",e)}}),l.a.createElement("div",{style:{display:"flex",flexDirection:"column"}},l.a.createElement(o.Checkbox,{checked:u.destroyByClick,onChange:function(e){return m("destroyByClick",e)}},"Hide on click"),l.a.createElement(o.Checkbox,{checked:u.preventDuplicates,onChange:function(e){return m("preventDuplicates",e)}},"Prevent arising of duplicate toast"),l.a.createElement(o.Checkbox,{checked:u.hasIcon,onChange:function(e){return m("hasIcon",e)}},"Show toast with icon"))))),l.a.createElement("footer",null,l.a.createElement(o.Button,{onClick:function(){a(t+1),s.current.add(u.message,u.title+t,Object.assign({},u))}},"Show Toastr"))))))}}}]);
//# sourceMappingURL=component---src-pages-modal-overlays-toastr-js-3dddb02079d9a31fbcee.js.map