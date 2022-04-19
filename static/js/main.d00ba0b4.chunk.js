(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,a){},13:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(3),c=a.n(r),o=(a(9),a(1));a(11);function s(e){return l.a.createElement("div",null,l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-$(props.mode) bg-$(props.mode)"},l.a.createElement("div",{className:"container-fluid"},l.a.createElement("a",{className:"navbar-brand",href:"#"},e.title),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},l.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"},l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link active","aria-current":"page",href:"#"},"Home"))),l.a.createElement("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light")},l.a.createElement("input",{className:"form-check-input",onClick:e.toggleMode,type:"checkbox",role:"switch",id:"flexSwitchCheckDefault"}),l.a.createElement("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault"},"Enable Dark Mode"))))))}function m(e){var t=Object(n.useState)("Enter text here"),a=Object(o.a)(t,2),r=a[0],c=a[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"container",style:{color:"dark"===e.mode?"white":"black"}},l.a.createElement("h1",null,e.heading),l.a.createElement("div",{className:"mb-3"},l.a.createElement("label",{htmlFor:"myBox",class:"form-label"},"Example textarea"),l.a.createElement("textarea",{class:"form-control",value:r,onChange:function(e){console.log("On Change"),c(e.target.value)},style:{backgroundColor:"dark"===e.mode?"grey":"white",color:"dark"===e.mode?"white":"black"},id:"myBox",rows:"8"})),l.a.createElement("button",{className:"btn btn-primary mx-1",onClick:function(){c("You have clicked on handleUpClick");var t=r.toUpperCase();c(t),e.showAlert("Converted to uppercase!","success")}},"Convert to Uppercase"),l.a.createElement("button",{className:"btn btn-primary mx-1",onClick:function(){var t=r.toLowerCase();c(t),e.showAlert("Converted to lowercase!","success")}},"Convert to Lowercase"),l.a.createElement("button",{className:"btn btn-primary mx-1",onClick:function(){c(""),e.showAlert("Text cleared!","success")}},"Clear Text"),l.a.createElement("button",{className:"btn btn-primary mx-1",onClick:function(t){var a=document.getElementById("myBox");a.select(),navigator.clipboard.writeText(a.value),e.showAlert("Copied to clipboard!","success")}},"Copy Text"),l.a.createElement("button",{className:"btn btn-primary mx-1",onClick:function(){var t=r.split(/[ ]+/);c(t.join(" ")),e.showAlert("Removed extra spaces!","success")}},"Remove Extra Spaces")),l.a.createElement("div",{className:"container my-3",style:{color:"dark"===e.mode?"white":"black"}},l.a.createElement("h2",null,"Your text summary"),l.a.createElement("p",null,r.split(" ").length," words, ",r.length," characters"),l.a.createElement("p",null,.008*r.split(" ").length," Minutes Read"),l.a.createElement("h2",null,"Preview"),l.a.createElement("p",null,r.length>0?r:"Enter something in the textbox above to preview it here")))}s.defaultProps={title:"Set Title Here",aboutText:"About Text Here"};var i=function(e){return l.a.createElement("div",null,l.a.createElement("div",{className:"alert alert-$(props.alert.type) alert-dismissible fade show",role:"alert"},l.a.createElement("strong",null,e.alert.type),":",e.alert.msg))};function u(){var e=Object(n.useState)("light"),t=Object(o.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(""),u=Object(o.a)(c,2),d=u[0],b=u[1],p=function(e,t){b({msg:e,type:t}),setTimeout(function(){b("")},1500)};return l.a.createElement(l.a.Fragment,null,l.a.createElement(s,{title:"TextUtils",mode:a,toggleMode:function(){"light"===a?(r("dark"),document.body.style.backgroundColor="grey",p("Dark mode has been enabled","success"),document.title="TextUtils-DarkMode"):(r("light"),document.body.style.backgroundColor="white",p("Light mode has been enabled","success"),document.title="TextUtils-LightMode")}}),l.a.createElement(i,{alert:d}),l.a.createElement("div",{className:"container my-3"},l.a.createElement(m,{showAlert:p,heading:"Enter the text to analyze",mode:a})))}var d=function(e){e&&e instanceof Function&&a.e(1).then(a.bind(null,14)).then(function(t){var a=t.getCLS,n=t.getFID,l=t.getFCP,r=t.getLCP,c=t.getTTFB;a(e),n(e),l(e),r(e),c(e)})};c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(u,null)),document.getElementById("root")),d()},4:function(e,t,a){e.exports=a(13)},9:function(e,t,a){}},[[4,3,2]]]);
//# sourceMappingURL=main.d00ba0b4.chunk.js.map