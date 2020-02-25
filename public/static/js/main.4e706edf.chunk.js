(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{123:function(e,a,t){e.exports=t(163)},127:function(e,a,t){},128:function(e,a,t){},132:function(e,a,t){},136:function(e,a,t){},137:function(e,a,t){},138:function(e,a,t){},139:function(e,a,t){},140:function(e,a,t){},158:function(e,a,t){},159:function(e,a,t){},160:function(e,a,t){},163:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(52),l=t.n(r),m=(t(127),t(17)),s=(t(128),t(51)),o=t(97),i=t(47),u=t(114),E={url:"https://jordanbarbosa.com"},f=t(99),d=(t(115),t(75)),p={loading:!1,error:!1,list:[]},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,a=arguments.length>1?arguments[1]:void 0,t=a.type,n=a.payload;switch(t){case"PROJECTS_LOADING":return Object(d.a)({},e,{loading:!0});case"PROJECTS_LOADED":return Object(d.a)({},e,{loading:!1});case"PROJECTS_LOADED_ERROR":return Object(d.a)({},e,{loading:!1,error:!0});case"SET_PROJECTS":return Object(d.a)({},e,{list:n,error:!1,loading:!1});default:return e}},h=function(){var e=[];return e=[].concat(Object(o.a)(e),[f.a]),Object(i.createStore)(Object(i.combineReducers)({projects:b}),Object(u.composeWithDevTools)(i.applyMiddleware.apply(void 0,Object(o.a)(e))))},g=t(30),N=(t(132),t(74)),v=t(14),j=t(27);function x(){return c.a.createElement(N.a,{collapseOnSelect:!0,fixed:"top",variant:"dark",expand:"md",className:"p-0"},c.a.createElement(N.a.Brand,{as:m.b,href:"/",to:{pathname:"/",state:{animation:"slide-down"}},className:"mr-md-5 mr-0"},c.a.createElement("span",{className:"p-3"},"Jordan Barbosa")),c.a.createElement(N.a.Toggle,{"aria-controls":"responsive-navbar-nav",className:"p-2"},"MENU ",c.a.createElement("i",{className:"fas fa-bars"})),c.a.createElement(N.a.Collapse,{id:"responsive-navbar-nav"},c.a.createElement(v.a,{fill:!0},c.a.createElement(v.a.Item,null,c.a.createElement(v.a.Link,{as:m.c,exact:!0,href:"/",className:"nav-link",to:{pathname:"/",state:{animation:"slide-down"}},activeClassName:"active"},"HOME")),c.a.createElement(v.a.Item,null,c.a.createElement(v.a.Link,{as:m.c,href:"/about",className:"nav-link",to:{pathname:"/about",state:{animation:"slide-up"}},activeClassName:"active"},"ABOUT")),c.a.createElement(v.a.Item,null,c.a.createElement(v.a.Link,{as:m.c,href:"/projects",className:"nav-link",to:{pathname:"/projects",state:{animation:"slide-up"}},activeClassName:"active"},"PROJECTS")),c.a.createElement(v.a.Item,null,c.a.createElement(v.a.Link,{as:m.c,href:"/contact",className:"nav-link",to:{pathname:"/contact",state:{animation:"slide-up"}},activeClassName:"active"},"CONTACT"))),c.a.createElement(v.a,{className:"ml-auto social-links d-flex flex-row justify-content-center pr-2"},c.a.createElement(v.a.Link,{target:"_blank",href:"https://github.com/jordanjordanb1/"},c.a.createElement("i",{className:"fab fa-github mt-2"})),c.a.createElement(v.a.Link,{target:"_blank",href:"https://www.linkedin.com/in/jordan-barbosa/"},c.a.createElement("i",{className:"fab fa-linkedin mt-2"})),c.a.createElement(v.a.Link,{href:"mailto: jordansbarbosa01@gmail.com?subject=Contact from your website"},c.a.createElement("i",{className:"far fa-envelope mt-2"})),c.a.createElement(v.a.Link,{target:"_blank",href:"".concat(E.url,"/resume/resume.pdf")},c.a.createElement(j.a,{className:"p-1 px-2 resume-button"},"RESUME")))))}var O=t(166),y=t(165),k=(t(136),t(137),t(28));function w(){return c.a.createElement(k.a,{fluid:!0,className:"home-jumbotron d-flex justify-content-center align-items-center page"},c.a.createElement("div",{className:"item-container"},c.a.createElement("div",{className:"hi-box text-left"},c.a.createElement("h1",null,"Hi,")),c.a.createElement("div",{className:"intro-box text-left"},c.a.createElement("h1",null,"I'm Jordan, "),c.a.createElement("h1",null,"a web developer"),c.a.createElement(j.a,{as:m.b,to:{pathname:"/contact",state:{animation:"slide-up"}},className:"quick-links mt-2 mr-2 p-2"},"CONTACT ME"),c.a.createElement(j.a,{target:"_blank",href:"".concat(E.url,"/resume/resume.pdf"),className:"quick-links mt-2 mr-2 p-2 d-sm-none"},"RESUME"))))}t(138);var S=t(37),T=t(7),R=t(6);function C(){return c.a.createElement(k.a,{fluid:!0,className:"page d-flex align-items-center"},c.a.createElement(S.a,{fluid:!0},c.a.createElement(T.a,null,c.a.createElement(R.a,{xs:"12",md:"9",lg:"7",className:"about-container"},c.a.createElement(T.a,null,c.a.createElement(R.a,{xs:"12"},c.a.createElement("h1",{className:"text-center mt-2 mb-4"},"About me"))),c.a.createElement(T.a,null,c.a.createElement(R.a,{xs:"12"},c.a.createElement("p",{className:"about-paragraph"},"My name is Jordan Barbosa, and I have been programming since I was about 14 years old. I started off learning HTML and PHP (strange right?!), but soon after started to learn JavaScript. I hated JavaScript, then I quickly learned jQuery, and that made JavaScript a little better."),c.a.createElement("p",{className:"about-paragraph"},"Now with the rise of other more advanced frameworks and libraries, I started to move into the Angular side, but quickly changed to React. I now focus on Reactjs (and Redux for state managment) with TypeScript. With the backend I focus on NodeJS to keep everything JavaScript (I love it now \xaf\\_(\u30c4)_/\xaf) I love to problem solve, and to find better ways to do current things.")))))))}t(139);var I=t(81);t(140);function J(e){var a=e.project;return c.a.createElement(m.b,{to:{pathname:"/projects/".concat(a._id),state:{project:a,animation:"slide-right"}},className:"project-item d-flex justify-content-center align-items-center"},c.a.createElement("div",{className:"project-item-overlay d-flex justify-content-center align-items-center"},c.a.createElement("div",{className:"project-item-overlay-circle d-flex justify-content-center align-items-center"},c.a.createElement("span",{className:"mt-1"},"VIEW"))),c.a.createElement("div",{className:"project-image d-flex justify-content-center align-items-center"},c.a.createElement(I.a,{src:"".concat(E.url,"/images/projects/").concat(a._id,"-min.png")})))}var _=t(54),L=t.n(_);L.a.defaults.baseURL=E.url;t(158);function M(){return c.a.createElement("div",{className:"spinner"},c.a.createElement("div",{className:"double-bounce1"}),c.a.createElement("div",{className:"double-bounce2"}))}function A(){var e=Object(s.c)((function(e){return e.projects})).loading,a=Object(s.c)((function(e){return e.projects})).list,t=Object(s.c)((function(e){return e.projects})).error,r=Object(s.b)();Object(n.useEffect)((function(){r({type:"PROJECTS_LOADING"}),L.a.get("/api/projects").then((function(e){var a=e.data;a.success?r({type:"SET_PROJECTS",payload:a.projects}):a.success||(console.error(a.err),r({type:"PROJECTS_LOADED_ERROR"}))}))}),[r]);return c.a.createElement(k.a,{fluid:!0,className:"page"},c.a.createElement(S.a,{fluid:!0},c.a.createElement(T.a,null,c.a.createElement(R.a,{xs:"12",lg:{span:10,offset:1},className:"d-flex justify-content-center mt-5 flex-wrap"},e||!a.length||t?!e||a.length||t?e||a.length||!t?e||a.length||t?c.a.createElement(M,null):c.a.createElement("div",{className:"no-projects d-flex justify-content-center align-items-center"},c.a.createElement("h1",null,"NO PROJECTS ",c.a.createElement("i",{className:"far fa-frown"}))):"Error...":c.a.createElement(M,null):a.map((function(e){return c.a.createElement(J,{key:e._id,project:e})}))))))}t(159);var P=t(82),q=t(46);function D(){var e=Object(g.f)().state.project||"",a=e._id,t=e.name,n=e.desc,r=e.url,l=e.github,m=e.technology,s=e.isHeroku;return c.a.createElement(k.a,{fluid:!0,className:"page d-flex justify-content-center align-items-center"},c.a.createElement(S.a,{className:"mt-4 selected"},c.a.createElement(T.a,null,c.a.createElement(R.a,{xs:"12",md:{span:10,offset:1},lg:{span:6,offset:3},className:"d-flex justify-content-center selected-image"},c.a.createElement(I.a,{fluid:!0,src:"".concat(E.url,"/images/projects/").concat(a,".png")}))),c.a.createElement(T.a,null,c.a.createElement(R.a,{xs:"12",md:{span:10,offset:1},lg:{span:6,offset:3},className:"selected-body"},c.a.createElement(T.a,null,c.a.createElement(R.a,{className:"mt-4 text-center selected-title"},c.a.createElement("h1",null,t))),c.a.createElement(T.a,null,c.a.createElement(R.a,null,c.a.createElement("hr",null))),c.a.createElement(T.a,null,c.a.createElement(R.a,null,c.a.createElement("h6",null,"Description:"),c.a.createElement("p",null,n))),c.a.createElement(T.a,null,c.a.createElement(R.a,{xs:"auto"},c.a.createElement("h6",null,"Technologies used:"),c.a.createElement("div",{className:"d-flex flex-wrap justify-content-between"},m.map((function(e){return c.a.createElement("span",{key:e,className:"mr-2 mb-2 selected-tech-item"},e)}))))),c.a.createElement(T.a,null,c.a.createElement(R.a,null,c.a.createElement("hr",null))),c.a.createElement(T.a,{className:"mb-3"},c.a.createElement(R.a,{xs:"12"},s?c.a.createElement(q.a,{variant:"warning"},c.a.createElement("i",{className:"fas fa-info-circle"})," ",c.a.createElement("span",{className:"font-weight-bold"},"NOTE"),": This is a heroku app, it may take long to load!"):"",c.a.createElement(P.a,{className:"selected-actions"},c.a.createElement(j.a,{href:l},c.a.createElement("i",{className:"fab fa-github mr-1"})," Code"),c.a.createElement(j.a,{href:r},c.a.createElement("i",{className:"fas fa-external-link-alt mr-2"}),"Visit"))))))))}t(160);var B=t(102),U=t.n(B),F=t(118),H=t(103),G=t(69),V=t(35),W=t(73),Q=t(96);function z(){var e=Object(n.useState)(),a=Object(H.a)(e,2),t=a[0],r=a[1],l=Object(n.useState)(""),m=Object(H.a)(l,2),s=m[0],o=m[1],i=G.a().shape({contact:G.a().shape({name:G.b().min(3,"Name is not valid").max(25,"Name is not valid").required("Name is required"),email:G.b().email("Email is not valid").required("Email is required"),message:G.b().min(3,"Message is not valid").max(250,"Message is too long").required("Message is required")})});return c.a.createElement(V.d,{initialValues:{contact:{name:"",email:"",message:""}},validationSchema:i,onSubmit:function(){var e=Object(F.a)(U.a.mark((function e(a,t){var n,c;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.contact,(c=t.setSubmitting)(!0),e.next=5,L.a.post("/api/contact",n).then((function(e){if(e.data.success)return r(!0),o("Message sent successfully"),!0;r(!1),o("An unknown error occured")}));case 5:c(!1);case 6:case"end":return e.stop()}}),e)})));return function(a,t){return e.apply(this,arguments)}}()},(function(e){var a=e.isSubmitting,n=e.resetForm;return c.a.createElement(V.c,null,c.a.createElement(T.a,{className:"mb-2"},c.a.createElement(R.a,{xs:"12",md:{span:10,offset:1}},s?t?c.a.createElement(q.a,{className:"mb-2 form-success text-center"},s):c.a.createElement(q.a,{className:"mb-2 form-error text-center"},s):null,c.a.createElement(W.a,null,c.a.createElement(V.a,{name:"contact.name"},(function(e){return c.a.createElement(q.a,{className:"mb-1 form-error text-center",variant:"danger"},e)})),c.a.createElement(Q.a,{htmlFor:"contact.name"},"Name"),c.a.createElement(V.b,{className:"form-control",disabled:a,type:"text",name:"contact.name"})),c.a.createElement(W.a,null,c.a.createElement(V.a,{name:"contact.email"},(function(e){return c.a.createElement(q.a,{className:"mb-1 form-error text-center",variant:"danger"},e)})),c.a.createElement(Q.a,{htmlFor:"contact.email"},"Email"),c.a.createElement(V.b,{className:"form-control",disabled:a,type:"email",name:"contact.email"})),c.a.createElement(W.a,null,c.a.createElement(V.a,{name:"contact.message"},(function(e){return c.a.createElement(q.a,{className:"mb-1 form-error text-center",variant:"danger"},e)})),c.a.createElement(Q.a,{htmlFor:"contact.message"},"Message"),c.a.createElement(V.b,{className:"form-control",disabled:a,name:"contact.message",component:"textarea"})),c.a.createElement(W.a,null,c.a.createElement(P.a,{className:"login-buttons home-buttons"},c.a.createElement(j.a,{type:"submit",disabled:a},a?"SUBMITTING...":"SUBMIT"),c.a.createElement(j.a,{disabled:a,onClick:function(){n()}},"RESET"))))))}))}function K(){return c.a.createElement(k.a,{fluid:!0,className:"page"},c.a.createElement(S.a,{fluid:!0},c.a.createElement(T.a,null,c.a.createElement(R.a,{xs:"12",md:{span:8,offset:2},lg:{span:4,offset:4},className:"contact mt-3 mt-md-0"},c.a.createElement(T.a,null,c.a.createElement(R.a,{className:"text-center"},c.a.createElement("h1",null,"Contact me"))),c.a.createElement("hr",null),c.a.createElement(T.a,{noGutters:!0},c.a.createElement(R.a,{xs:"12",md:{span:10,offset:1},lg:{span:8,offset:2}},c.a.createElement(z,null)))))))}function X(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(x,null),c.a.createElement(g.a,{render:function(e){var a=e.location;return c.a.createElement(O.a,{component:null,childFactory:function(e){return c.a.cloneElement(e,{classNames:a.state?a.state.animation:"slide-down"})}},c.a.createElement(y.a,{key:a.pathname,timeout:750,mountOnEnter:!0,unmountOnExit:!0},c.a.createElement(g.c,{location:a},c.a.createElement(g.a,{exact:!0,path:"/",component:w}),c.a.createElement(g.a,{path:"/about",component:C}),c.a.createElement(g.a,{exact:!0,path:"/projects",component:A}),c.a.createElement(g.a,{path:"/projects/:id",component:D}),c.a.createElement(g.a,{path:"/contact",component:K}))))}}))}var Y=h();l.a.render(c.a.createElement((function(){return c.a.createElement(m.a,null,c.a.createElement(s.a,{store:Y},c.a.createElement(X,null)))}),null),document.getElementById("root"))}},[[123,1,2]]]);