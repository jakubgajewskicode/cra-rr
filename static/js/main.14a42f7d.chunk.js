(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/header1.70e6670e.jpg"},function(e,t,a){e.exports=a.p+"static/media/header3.d9d36b65.jpg"},,,,,,,function(e,t,a){e.exports=a.p+"static/media/header2.33eca35f.jpg"},,,function(e,t,a){e.exports=a(45)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(21),c=a.n(l),i=(a(30),a(8)),u=a(9),m=a(11),o=a(10),s=a(12),p=(a(31),a(2)),E=a(6),d=(a(32),a(14)),h=a.n(d),f=a(22),b=a.n(f),g=a(15),v=a.n(g),y=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(E.e,null,r.a.createElement(E.c,{path:"/",exact:!0,render:function(){return r.a.createElement("img",{src:h.a,alt:"city"})}}),r.a.createElement(E.c,{path:"/products",render:function(){return r.a.createElement("img",{src:b.a,alt:"city"})}}),r.a.createElement(E.c,{path:"/contact",render:function(){return r.a.createElement("img",{src:v.a,alt:"city"})}}),r.a.createElement(E.c,{path:"/admin",render:function(){return r.a.createElement("img",{src:v.a,alt:"city"})}}),r.a.createElement(E.c,{render:function(){return r.a.createElement("img",{src:h.a,alt:"city"})}})))},x=(a(41),function(){return r.a.createElement("div",null,r.a.createElement("span",null,r.a.createElement("h2",null,"Footer")),r.a.createElement(E.c,{path:"/",exact:!0,render:function(e){return r.a.createElement("p",null,"Main Page")}}),r.a.createElement(E.c,{path:"/:page",exact:!0,render:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"you are on  ",r.a.createElement("span",null,e.match.params.page)),r.a.createElement("p",null,"Jeste\u015b na ",r.a.createElement("span",null,e.match.url)),r.a.createElement("p",null,"Jeste\u015b na ",r.a.createElement("span",null,e.match.path)))}}),r.a.createElement(E.c,{path:"/:page/:idProduct",exact:!0,render:function(e){return console.log(e),r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"You are on ",r.a.createElement("span",null,e.match.params.idProduct)),r.a.createElement("p",null,"You are on",r.a.createElement("span",null,e.match.url)),r.a.createElement("p",null,"You are on ",r.a.createElement("span",null,e.match.path)))}}))}),j=(a(42),[{name:"start",path:"/",exact:!0},{name:"products",path:"/products"},{name:"contacts",path:"/contact"},{name:"admin",path:"/admin"}]),w=function(){var e=j.map(function(e){return r.a.createElement("li",{key:e.name},r.a.createElement(p.c,{to:e.path,exact:!!e.exact&&e.exact},e.name))});return r.a.createElement("nav",{className:"main"},r.a.createElement("ul",null,e))},k=function(e){var t=e.title,a=e.author,n=e.text;return r.a.createElement("article",{style:{marginTop:40}},r.a.createElement("h3",{style:{marginBottom:3,textTransform:"uppercase"}},t),r.a.createElement("span",{style:{display:"block",marginBottom:10,fontSize:12}},a),r.a.createElement("p",{style:{fontSize:15}},n))},q=[{id:1,title:"czym jest teoria strun",author:"Nowak",text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos aliquam nobis eius similique, quibusdam perspiciatis, dicta nulla quas voluptatibus repellendus eligendi? Deleniti animi nobis doloribus deserunt libero temporibus suscipit earum!"},{id:2,title:"czym jest teoria strun",author:"Nowak",text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos aliquam nobis eius similique, quibusdam perspiciatis, dicta nulla quas voluptatibus repellendus eligendi? Deleniti animi nobis doloribus deserunt libero temporibus suscipit earum!"},{id:3,title:"czym jest teoria strun",author:"Nowak",text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos aliquam nobis eius similique, quibusdam perspiciatis, dicta nulla quas voluptatibus repellendus eligendi? Deleniti animi nobis doloribus deserunt libero temporibus suscipit earum!"}],O=function(){var e=q.map(function(e){return r.a.createElement(k,Object.assign({key:e.id},e))});return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"home"},e))},F=function(e){return r.a.createElement("article",{className:"product"},r.a.createElement("h1",null,e.id))},N=function(e){var t=e.match;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,"product page"),r.a.createElement(F,{id:t.params.id}),r.a.createElement(p.b,{to:"/products"}," Return to list of products "))},S=(a(43),["car","bike","motorbike"]),D=function(){var e=S.map(function(e){return r.a.createElement("li",{key:e},r.a.createElement(p.b,{to:"/product/".concat(e)},e))});return r.a.createElement("div",{className:"products"},r.a.createElement("div",null,"Products"),r.a.createElement("ul",null,e))},z=(a(44),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(m.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(r)))).state={value:""},a.handleSubmit=function(e){e.preventDefault(),a.setState({value:"",isEmpty:!0})},a.handlechange=function(e){e.target.value.length>0?a.setState({value:e.target.value,isEmpty:!1}):a.setState({value:e.target.value,isEmpty:!0})},a}return Object(s.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"contact"},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("h3",null,"Write to us"),r.a.createElement("textarea",{value:this.state.value,onChange:this.handlechange,placeholder:"write message..."}),r.a.createElement("button",null,"Sent")),r.a.createElement(E.a,{when:this.state.value,message:"Fill the form before leaving"}))}}]),t}(r.a.Component)),L=function(){return r.a.createElement(E.c,{render:function(){return r.a.createElement(E.b,{to:"/login"})}})},P=function(){return r.a.createElement("div",null,r.a.createElement("label",{htmlFor:""},"Insert Login ",r.a.createElement("input",{type:"text"})),r.a.createElement("br",null),r.a.createElement("label",{htmlFor:""},"Insert Password ",r.a.createElement("input",{type:"password"})),r.a.createElement("button",null,"Login"))},J=function(){return r.a.createElement("div",null,"wrong url")},B=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(E.e,null,r.a.createElement(E.c,{path:"/",exact:!0,component:O}),r.a.createElement(E.c,{path:"/products",component:D}),r.a.createElement(E.c,{path:"/product/:id",component:N}),r.a.createElement(E.c,{path:"/contact",component:z}),r.a.createElement(E.c,{path:"/admin",component:L}),r.a.createElement(E.c,{path:"/login",component:P}),r.a.createElement(E.c,{component:J})))},C=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(p.a,{basename:"/cra-rr"},r.a.createElement("div",{className:"app"},r.a.createElement("header",null,r.a.createElement(y,null)),r.a.createElement("main",null,r.a.createElement("aside",null,r.a.createElement(w,null)),r.a.createElement("section",{className:"page"},r.a.createElement(B,null))),r.a.createElement("footer",null,r.a.createElement(x,null))))}}]),t}(n.Component);c.a.render(r.a.createElement(C,null),document.getElementById("root"))}],[[25,1,2]]]);
//# sourceMappingURL=main.14a42f7d.chunk.js.map