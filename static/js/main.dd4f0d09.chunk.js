(this["webpackJsonpart-craft"]=this["webpackJsonpart-craft"]||[]).push([[0],{101:function(e,t,c){"use strict";c.r(t);var s=c(1),a=c.n(s),i=c(22),n=c.n(i),r=c(13),l=c(16),o=c(37),j=c(38),d=c(40),b=c(41),u=c(3),m=c(10),O=c(102),x=(c(62),c(0)),h=[{code:"uz",name:"O'zbekcha",country_code:"uz"},{code:"ru",name:"\u0420\u0443\u0441\u0441\u043a\u0438\u0439",country_code:"ru"}];var v=function(){var e=function(e){var t=Object(s.useState)(e),c=Object(u.a)(t,2),a=c[0],i=c[1],n=Object(s.useRef)(null),r=function(e){"Escape"===e.key&&i(!1)},l=function(e){n.current&&!n.current.contains(e.target)&&i(!1)};return Object(s.useEffect)((function(){return document.addEventListener("keydown",r,!0),document.addEventListener("click",l,!0),function(){document.removeEventListener("keydown",r,!0),document.removeEventListener("click",l,!0)}})),{ref:n,isComponentVisible:a,setIsComponentVisible:i}}(!1),t=e.ref,c=e.isComponentVisible,a=e.setIsComponentVisible;return Object(x.jsxs)("div",{className:"language ".concat(c?"_active":""),ref:t,children:[Object(x.jsxs)("button",{className:"language__btn",onClick:function(){return a(!c)},children:[Object(x.jsx)("span",{className:"icon-flag icon-".concat(r.a.language)}),r.a.language,Object(x.jsx)("svg",{width:"14",height:"8",viewBox:"0 0 14 8",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(x.jsx)("path",{d:"M1 1L7 7L13 1",stroke:"#090A0A",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]}),Object(x.jsx)("ul",{className:c?"_active":"",children:h.map((function(e){var t=e.code,c=e.name,s=e.country_code;return Object(x.jsx)("li",{children:Object(x.jsxs)("button",{className:"language__item",onClick:function(){r.a.changeLanguage(t),a(!1)},children:[Object(x.jsx)("span",{className:"icon icon-".concat(s)}),c]})},s)}))})]})},_=(c(64),c.p+"static/media/logo.5eea70d7.png"),f=function(e){var t=e.isOpen,c=e.toggle,a=Object(O.a)().t,i=Object(s.useState)(!1),n=Object(u.a)(i,2),r=n[0],l=n[1];Object(s.useEffect)((function(){window.addEventListener("scroll",o)}),[]);var o=function(){window.scrollY>=80?l(!0):l(!1)};return Object(x.jsx)("nav",{className:"navbar ".concat(!t&&r?"_scroll":""),children:Object(x.jsxs)("div",{className:"navbar__container _container",children:[Object(x.jsx)("div",{className:"navbar__logo logo",onClick:function(){m.animateScroll.scrollToTop()},children:Object(x.jsx)("img",{src:_,alt:""})}),Object(x.jsxs)("div",{className:"mobileIcon ".concat(t?"_active":""),onClick:c,children:[Object(x.jsx)("span",{}),Object(x.jsx)("span",{}),Object(x.jsx)("span",{})]}),Object(x.jsxs)("ul",{className:"navbar__menu menu",children:[Object(x.jsx)("li",{children:Object(x.jsx)(m.Link,{to:"about",smooth:!0,duration:500,spy:!0,exact:"true",offset:-80,activeClass:"_active",children:a("mainMenu.about")})}),Object(x.jsx)("li",{children:Object(x.jsx)(m.Link,{to:"projects",smooth:!0,duration:500,spy:!0,exact:"true",offset:-80,activeClass:"_active",children:a("mainMenu.features")})}),Object(x.jsx)("li",{children:Object(x.jsx)(m.Link,{to:"projects",smooth:!0,duration:500,spy:!0,exact:"true",offset:-80,activeClass:"_active",children:a("mainMenu.services")})}),Object(x.jsx)("li",{children:Object(x.jsx)(m.Link,{to:"contacts",smooth:!0,duration:500,spy:!0,exact:"true",offset:-80,activeClass:"_active",children:a("mainMenu.contacts")})})]}),Object(x.jsxs)("div",{className:"navbar__action",children:[Object(x.jsx)(v,{}),Object(x.jsx)("div",{className:"navbar__info info",children:Object(x.jsx)("div",{className:"info__adress",children:Object(x.jsx)("a",{href:"tel:+998935330044",children:"+998 93 533 00 44"})})})]})]})})},p=c(2),g=c(5),N=c.n(g),k=(c(85),[{image:c.p+"static/media/hero.00f834b4.jpg"},{image:c.p+"static/media/hero2.b5c9e080.jpg"}]),w=function(e){var t=e.onClick;return Object(x.jsx)("div",{className:"hero__buttons-wrap",children:Object(x.jsx)("div",{className:"_container",children:Object(x.jsx)("button",{className:"slick-arrow slick-next",onClick:t,children:Object(x.jsx)("span",{})})})})},S=function(e){var t=e.onClick;return Object(x.jsx)("div",{className:"hero__buttons-wrap",children:Object(x.jsx)("div",{className:"_container",children:Object(x.jsx)("button",{className:"slick-arrow slick-prev",onClick:t,children:Object(x.jsx)("span",{})})})})},y=function(){var e={dots:!1,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1,nextArrow:Object(x.jsx)(w,{}),prevArrow:Object(x.jsx)(S,{})};return Object(x.jsx)("div",{className:"hero",id:"hero",children:Object(x.jsx)("div",{className:"hero__container",children:Object(x.jsx)(N.a,Object(p.a)(Object(p.a)({},e),{},{className:"hero__slider",children:k.map((function(e,t){return Object(x.jsxs)("div",{className:"hero__slide",children:[Object(x.jsx)("div",{className:"hero__content",children:Object(x.jsx)("button",{className:"hero__play"})}),Object(x.jsx)("div",{className:"hero__image",children:Object(x.jsx)("img",{src:e.image,alt:""})})]},t)}))}))})})},z=c(11),C=(c(89),c.p+"static/media/instagram.d2cdde29.svg"),T=c.p+"static/media/facebook.bacdef97.svg",W=c.p+"static/media/youtube.8024248b.svg",q=c.p+"static/media/telegram.76e6a3ef.svg",A=function(){return Object(x.jsxs)("div",{className:"socials",children:[Object(x.jsx)("a",{href:"https://www.instagram.com/uz_artcrafts/",className:"socials__link",rel:"noopener noreferrer",children:Object(x.jsx)(z.a,{src:C})}),Object(x.jsx)("a",{href:"https://www.instagram.com/uz_artcrafts/",className:"socials__link",rel:"noopener noreferrer",children:Object(x.jsx)(z.a,{src:T})}),Object(x.jsx)("a",{href:"https://www.instagram.com/uz_artcrafts/",className:"socials__link",rel:"noopener noreferrer",children:Object(x.jsx)(z.a,{src:W})}),Object(x.jsx)("a",{href:"https://www.instagram.com/uz_artcrafts/",className:"socials__link",rel:"noopener noreferrer",children:Object(x.jsx)(z.a,{src:q})})]})},L=(c(90),function(){var e=Object(O.a)().t;return Object(x.jsx)("footer",{className:"footer",id:"contacts",children:Object(x.jsxs)("div",{className:"footer__container _container","data-aos":"fade-up","data-aos-duration":"1000",children:[Object(x.jsx)("div",{className:"footer__col",children:Object(x.jsxs)("div",{className:"footer__copy",children:["\xa9 ",(new Date).getFullYear(),". Art Craft."," ",Object(x.jsx)("p",{children:e("footer.copy")})]})}),Object(x.jsx)("div",{className:"footer__col",children:Object(x.jsx)("div",{className:"footer__logo",onClick:function(){m.animateScroll.scrollToTop()},children:Object(x.jsx)("img",{src:_,alt:""})})}),Object(x.jsx)("div",{className:"footer__col",children:Object(x.jsxs)("div",{className:"footer__info",children:[Object(x.jsx)(A,{}),Object(x.jsxs)("p",{children:["Developed by"," ",Object(x.jsx)("a",{target:"_blank",href:"https://t.me/nicedocton",rel:"noopener noreferrer",children:"CoDesign studio"})]})]})})]})})}),E=(c(91),c.p+"static/media/about.3b6b0424.png"),M=function(){var e=Object(O.a)().t;return Object(x.jsx)("div",{className:"about",id:"about",children:Object(x.jsx)("div",{className:"about__container",children:Object(x.jsxs)("div",{className:"about__content",children:[Object(x.jsx)("div",{className:"about__image",children:Object(x.jsx)("img",{src:E,alt:""})}),Object(x.jsx)("div",{className:"about__info",children:Object(x.jsxs)("div",{children:[Object(x.jsx)("div",{className:"about__title title",children:e("about.title")}),Object(x.jsx)("div",{className:"about__text",children:e("about.text")}),Object(x.jsxs)("div",{className:"about__actions",children:[Object(x.jsxs)("a",{href:"https://www.instagram.com/uz_artcrafts/",className:"about__btn",target:"__blank",rel:"noopener noreferrer",children:["Follow to: ",Object(x.jsx)("span",{children:"@uz_artcrafts"})]}),Object(x.jsx)(A,{})]})]})})]})})})},B=(c(92),c.p+"static/media/1.fc99255a.jpg"),F=c.p+"static/media/2.b70c8a96.jpg",V=[{image:B},{image:F},{image:B},{image:F},{image:B}],I=function(e){var t=e.onClick;return Object(x.jsx)("div",{className:"ourWorks__buttons-wrap",children:Object(x.jsx)("div",{className:"_container",children:Object(x.jsx)("button",{className:"slick-arrow slick-next",onClick:t,children:Object(x.jsx)("span",{})})})})},J=function(e){var t=e.onClick;return Object(x.jsx)("div",{className:"ourWorks__buttons-wrap",children:Object(x.jsx)("div",{className:"_container",children:Object(x.jsx)("button",{className:"slick-arrow slick-prev",onClick:t,children:Object(x.jsx)("span",{})})})})},P=function(){var e=Object(O.a)().t,t=Object(s.useState)(0),c=Object(u.a)(t,2),a=c[0],i=c[1],n={dots:!0,infinite:!0,speed:500,slidesToShow:3,slidesToScroll:1,centerMode:!0,centerPadding:0,focusOnSelect:!0,nextArrow:Object(x.jsx)(I,{}),prevArrow:Object(x.jsx)(J,{}),beforeChange:function(e,t){i(t++)}};return Object(x.jsx)("div",{className:"ourWorks",children:Object(x.jsxs)("div",{className:"ourWorks__container _container",children:[Object(x.jsx)("h2",{className:"ourWorks__title title",children:e("ourWorks.title")}),Object(x.jsx)(N.a,Object(p.a)(Object(p.a)({},n),{},{className:"ourWorks__slider",children:V.map((function(e,t){return Object(x.jsx)("div",{className:"ourWorks__slide",children:Object(x.jsx)("img",{src:e.image,alt:""})},t)}))})),Object(x.jsxs)("div",{className:"ourWorks__slider-count",children:[Object(x.jsxs)("span",{children:["0",a+1]}),"/0",V.length]})]})})},D=(c(93),c.p+"static/media/penTool.9e9a4258.svg"),H=c.p+"static/media/clock.c305aebe.svg",U=c.p+"static/media/chrome.e9008675.svg",Y=[{imageUrl:"".concat(D),text:"\u0420\u043e\u0441\u043f\u0438\u0441\u044c \u043d\u0430 \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u044b\u0445 \u043f\u043e\u0432\u0435\u0440\u0445\u043d\u043e\u0441\u0442\u044f\u0445"},{imageUrl:"".concat(H),text:"\u0421\u043a\u043e\u0440\u043e\u0441\u0442\u044c \u043d\u0430\u043d\u0435\u0441\u0435\u043d\u0438\u044f \u0434\u043e 10 \u043c2 \u0432 \u0447\u0430\u0441"},{imageUrl:"".concat(U),text:"\u041f\u043e\u043c\u043e\u0449\u044c \u0434\u0438\u0437\u0430\u0439\u043d\u0435\u0440\u0430, \u043f\u0440\u0438 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e\u0441\u0442\u0438"}],K=function(e){var t=e.onClick;return Object(x.jsx)("div",{className:"ourWorks__buttons-wrap",children:Object(x.jsx)("div",{className:"_container",children:Object(x.jsx)("button",{className:"slick-arrow slick-next",onClick:t,children:Object(x.jsx)("span",{})})})})},Q=function(e){var t=e.onClick;return Object(x.jsx)("div",{className:"ourWorks__buttons-wrap",children:Object(x.jsx)("div",{className:"_container",children:Object(x.jsx)("button",{className:"slick-arrow slick-prev",onClick:t,children:Object(x.jsx)("span",{})})})})},R=function(){var e=Object(O.a)().t,t={dots:!1,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1,variableWidth:!0,nextArrow:Object(x.jsx)(K,{}),prevArrow:Object(x.jsx)(Q,{})};return Object(x.jsx)("div",{className:"benefits",children:Object(x.jsxs)("div",{className:"benefits__container _container",children:[Object(x.jsx)("div",{className:"benefits__title title",children:e("benefits.title")}),Object(x.jsx)(N.a,Object(p.a)(Object(p.a)({},t),{},{className:"benefits__slider",children:Y.map((function(e,t){return Object(x.jsxs)("div",{className:"benefits__slide",style:{width:435},children:[Object(x.jsx)("div",{className:"benefits__icon",children:Object(x.jsx)(z.a,{src:e.imageUrl})}),Object(x.jsx)("div",{className:"benefits__text",children:e.text})]},t)}))}))]})})},X=(c(94),c.p+"static/media/1.4964c1cb.jpg"),Z=c.p+"static/media/2.e886f187.jpg",G=[{image:X,text:"Wall art"},{image:Z,text:"Painting glass"},{image:X,text:"Office art"},{image:Z,text:"Ready-made accessories"},{image:Z,text:"Wall ar123123t"}],$=function(){var e=Object(O.a)().t,t=Object(s.useState)(),c=Object(u.a)(t,2),a=c[0],i=c[1],n=Object(s.useState)(),r=Object(u.a)(n,2),l=r[0],o=r[1],j=Object(s.useState)(0),d=Object(u.a)(j,2),b=d[0],m=d[1],h={slidesToShow:5,slidesToScroll:1,dots:!1,vertical:!0,focusOnSelect:!0,pauseOnHover:!0,autoplay:!0,autoplaySpeed:4e3,beforeChange:function(e,t){m(t++)}};return Object(x.jsx)("div",{className:"services",children:Object(x.jsxs)("div",{className:"services__container _container",children:[Object(x.jsx)("div",{className:"services__subtitle subtitle",children:e("services.subtitle")}),Object(x.jsx)("div",{className:"services__title title",children:e("services.title")}),Object(x.jsxs)("div",{className:"services__slider-wrapper",children:[Object(x.jsx)("div",{className:"services__slider-dots",children:G.map((function(e,t){return t===b?Object(x.jsx)("button",{className:"_active",children:t},t):Object(x.jsx)("button",{children:t},t)}))}),Object(x.jsxs)("div",{className:"services__slider-count",children:[Object(x.jsxs)("span",{children:["0",b+1]}),"/0",G.length]}),Object(x.jsx)(N.a,Object(p.a)(Object(p.a)({},h),{},{className:"slider-nav",asNavFor:l,ref:function(e){return i(e)},children:G.map((function(e,t){return Object(x.jsx)("div",{className:"servives__slide",children:e.text},t)}))})),Object(x.jsx)(N.a,Object(p.a)(Object(p.a)({className:"slider-for",asNavFor:a,ref:function(e){return o(e)}},{slidesToShow:1,slidesToScroll:1,dots:!1,arrows:!1,focusOnSelect:!0,fade:!0,pauseOnHover:!0}),{},{children:G.map((function(e,t){return Object(x.jsx)("div",{className:"servives__slide",children:Object(x.jsx)("img",{src:e.image,alt:""})},t)}))}))]})]})})},ee=(c(95),[{image:B},{image:F},{image:B},{image:F},{image:B},{image:F}]),te=function(e){var t=e.onClick;return Object(x.jsx)("div",{className:"ourWorks__buttons-wrap",children:Object(x.jsx)("div",{className:"_container",children:Object(x.jsx)("button",{className:"slick-arrow slick-next",onClick:t,children:Object(x.jsx)("span",{})})})})},ce=function(e){var t=e.onClick;return Object(x.jsx)("div",{className:"ourWorks__buttons-wrap",children:Object(x.jsx)("div",{className:"_container",children:Object(x.jsx)("button",{className:"slick-arrow slick-prev",onClick:t,children:Object(x.jsx)("span",{})})})})},se=function(){var e=Object(O.a)().t,t={infinite:!0,speed:300,slidesToShow:2,slidesToScroll:1,dots:!1,nextArrow:Object(x.jsx)(te,{}),prevArrow:Object(x.jsx)(ce,{})};return Object(x.jsx)("div",{className:"features",children:Object(x.jsxs)("div",{className:"features__container _container",children:[Object(x.jsxs)("div",{className:"features__header",children:[Object(x.jsx)("div",{className:"features__subtitle subtitle",children:e("features.subtitle")}),Object(x.jsx)("div",{className:"features__title title",children:e("features.title")})]}),Object(x.jsx)(N.a,Object(p.a)(Object(p.a)({},t),{},{className:"features__slider",children:ee.map((function(e,t){return Object(x.jsx)("div",{className:"features__slide",children:Object(x.jsx)("img",{src:e.image,alt:""})},t)}))}))]})})},ae=c(31);c(96);var ie=function(e){var t=e.delegate||"[data-fancybox]";return Object(s.useEffect)((function(){var c=e.options||{};return ae.a.bind(t,c),function(){ae.a.destroy()}})),Object(x.jsx)(x.Fragment,{children:e.children})},ne=(c(97),c.p+"static/media/video.d62d9c67.jpg"),re=[{image:"/images/video.jpg",url:"https://youtu.be/fPO76Jlnz6c"},{image:"/images/video.jpg",url:"https://youtu.be/VYOjWnS4cMY"},{image:"/images/video.jpg",url:"https://youtu.be/SbPx5vymy4Q"},{image:"/images/video.jpg",url:"https://youtu.be/2zToEPpFEN8"}],le=function(e){var t=e.onClick;return Object(x.jsx)("div",{className:"ourWorks__buttons-wrap",children:Object(x.jsx)("div",{className:"_container",children:Object(x.jsx)("button",{className:"slick-arrow slick-next",onClick:t,children:Object(x.jsx)("span",{})})})})},oe=function(e){var t=e.onClick;return Object(x.jsx)("div",{className:"ourWorks__buttons-wrap",children:Object(x.jsx)("div",{className:"_container",children:Object(x.jsx)("button",{className:"slick-arrow slick-prev",onClick:t,children:Object(x.jsx)("span",{})})})})},je=function(){var e=Object(O.a)().t,t={infinite:!1,speed:300,slidesToShow:2,slidesToScroll:1,dots:!1,arrows:!0,nextArrow:Object(x.jsx)(le,{}),prevArrow:Object(x.jsx)(oe,{})};return Object(x.jsx)("div",{className:"videoSection",children:Object(x.jsxs)("div",{className:"videoSection__container _container",children:[Object(x.jsxs)("div",{className:"videoSection__header",children:[Object(x.jsx)("div",{className:"videoSection__subtitle subtitle",children:e("videoSection.subtitle")}),Object(x.jsx)("div",{className:"videoSection__title title",children:e("videoSection.title")})]}),Object(x.jsx)(N.a,Object(p.a)(Object(p.a)({},t),{},{className:"videoSection__slider",children:re.map((function(e,t){return Object(x.jsx)(ie,{options:{infinite:!1},children:Object(x.jsx)("div",{className:"videoSection__slide",children:Object(x.jsxs)("a",{"data-fancybox":"gallery",href:e.url,children:[Object(x.jsx)("img",{src:ne,alt:""}),Object(x.jsx)("span",{})]})},t)},t)}))}))]})})},de=(c(98),c.p+"static/media/location.8f7bae40.svg"),be=c.p+"static/media/phone.3631e80b.svg",ue=c.p+"static/media/mail.95ad276b.svg",me=function(){var e=Object(O.a)().t;return Object(x.jsx)("div",{className:"contacts",children:Object(x.jsxs)("div",{className:"contacts__container _container",children:[Object(x.jsxs)("div",{className:"contacts__header",children:[Object(x.jsx)("div",{className:"contacts__subtitle subtitle",children:e("contacts.subtitle")}),Object(x.jsx)("div",{className:"contacts__title title",children:e("contacts.title")})]}),Object(x.jsx)("div",{className:"contacts__map",children:Object(x.jsx)("iframe",{src:"https://yandex.ru/map-widget/v1/?um=constructor%3Aa05917f98f8004676ad879970c390611a3a8d73422164439eeec305e7eeb1c81&source=constructor",title:"Art Craft",width:"100%",height:"400",frameBorder:"0",scroll:"false"})}),Object(x.jsxs)("div",{className:"contacts__info",children:[Object(x.jsxs)("div",{className:"contacts__col",children:[Object(x.jsx)("div",{className:"contacts__info-icon",children:Object(x.jsx)("img",{src:de,alt:""})}),Object(x.jsx)("div",{className:"contacts__info-head",children:e("contacts.address")}),Object(x.jsx)("div",{className:"contacts__info-text",children:Object(x.jsx)("p",{children:e("contacts.addressText")})})]}),Object(x.jsxs)("div",{className:"contacts__col",children:[Object(x.jsx)("div",{className:"contacts__info-icon",children:Object(x.jsx)("img",{src:be,alt:""})}),Object(x.jsx)("div",{className:"contacts__info-head",children:e("contacts.phone")}),Object(x.jsxs)("div",{className:"contacts__info-text",children:[Object(x.jsx)("p",{children:Object(x.jsx)("a",{href:"tel:+998935330044",children:"+998 93 533 00 44"})}),Object(x.jsx)("p",{children:Object(x.jsx)("a",{href:"tel:+998903210044",children:"+998 90 321 00 44"})})]})]}),Object(x.jsxs)("div",{className:"contacts__col",children:[Object(x.jsx)("div",{className:"contacts__info-icon",children:Object(x.jsx)("img",{src:ue,alt:""})}),Object(x.jsx)("div",{className:"contacts__info-head",children:e("contacts.email")}),Object(x.jsx)("div",{className:"contacts__info-text",children:Object(x.jsx)("p",{children:Object(x.jsx)("a",{href:"mailto:artcraftuz@gmail.com",children:"artcraftuz@gmail.com"})})})]})]})]})})},Oe=c(30),xe=c.n(Oe);c(99),c(100);var he=function(){var e=Object(s.useState)(!1),t=Object(u.a)(e,2),c=t[0],a=t[1];return Object(s.useEffect)((function(){xe.a.init(),xe.a.refresh()}),[]),Object(x.jsxs)("div",{className:"wrapper ".concat(c?"isOpen":""),children:[Object(x.jsx)(f,{isOpen:c,toggle:function(){a(!c)}}),Object(x.jsxs)("main",{className:"main",children:[Object(x.jsx)(y,{}),Object(x.jsx)(M,{}),Object(x.jsx)(P,{}),Object(x.jsx)(R,{}),Object(x.jsx)($,{}),Object(x.jsx)(se,{}),Object(x.jsx)(je,{}),Object(x.jsx)(me,{})]}),Object(x.jsx)(L,{})]})},ve={uz:{translation:b},ru:{translation:d}};r.a.use(l.e).use(o.a).use(j.a).init({resources:ve,supportedLngs:["uz","ru"],fallbackLng:"uz",lng:"uz",detection:{order:["subdomain","path","cookie","htmlTag","localStorage"],caches:["cookie"]},interpolation:{escapeValue:!1},react:{useSuspense:!1}}),n.a.render(Object(x.jsx)(a.a.StrictMode,{children:Object(x.jsx)(he,{})}),document.getElementById("root"))},40:function(e){e.exports=JSON.parse('{"mainMenu":{"about":"\u041e \u043d\u0430\u0441","features":"\u0418\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0435","services":"\u0423\u0441\u043b\u0443\u0433\u0438","contacts":"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b"},"about":{"title":"\u041e \u043d\u0430\u0441","text":"\u041f\u0440\u044f\u043c\u0430\u044f \u043f\u0435\u0447\u0430\u0442\u044c \u043d\u0430 \u043b\u044e\u0431\u044b\u0445 \u0432\u0435\u0440\u0442\u0438\u043a\u0430\u043b\u044c\u043d\u044b\u0445 \u043f\u043e\u0432\u0435\u0440\u0445\u043d\u043e\u0441\u0442\u044f\u0445! \u0420\u0430\u0437\u043d\u043e\u043e\u0431\u0440\u0430\u0437\u0438\u0435 \u043e\u0431\u043e\u0440\u0443\u0434\u043e\u0432\u0430\u043d\u0438\u044f \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438 \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u043d\u0430\u043d\u043e\u0441\u0438\u0442\u044c \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u043d\u0430 \u043b\u044e\u0431\u044b\u0435 \u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u044b, \u0442\u0430\u043a\u0438\u0435 \u043a\u0430\u043a \u0441\u0442\u0435\u043a\u043b\u043e \u0438 \u043f\u043b\u0438\u0442\u043a\u0430, \u0431\u0435\u0442\u043e\u043d, \u043a\u0438\u0440\u043f\u0438\u0447, \u0434\u0435\u0440\u0435\u0432\u043e \u0438 \u043c\u043d\u043e\u0433\u0438\u0435 \u0434\u0440\u0443\u0433\u0438\u0435."},"ourWorks":{"title":"\u041d\u0430\u0448\u0438 \u0420\u0430\u0431\u043e\u0442\u044b"},"benefits":{"title":"\u041f\u0440\u0435\u0438\u043c\u0443\u0449\u0435\u0441\u0442\u0432\u0430"},"services":{"title":"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0439 \u0442\u0438\u043f \u0443\u0441\u043b\u0443\u0433\u0438 \u0434\u043b\u044f \u0432\u0430\u0448\u0435\u0439 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u0439 \u0438\u0434\u0435\u0438 \u0440\u0438\u0441\u043e\u0432\u0430\u043d\u0438\u044f.","subtitle":"\u0422\u0438\u043f\u044b \u0443\u0441\u043b\u0443\u0433"},"features":{"title":"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 \u0438\u0441\u043a\u0443\u0441\u0441\u0442\u0432\u043e \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 \u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0439 \u043d\u043e\u0432\u043e\u0433\u043e \u043f\u043e\u043a\u043e\u043b\u0435\u043d\u0438\u044f \u043d\u0430 \u0441\u0432\u043e\u0435\u0439 \u0441\u0442\u0435\u043d\u0435.","subtitle":"\u0418\u0437\u0431\u0440\u0430\u043d\u043d\u044b\u0435 \u0440\u0430\u0431\u043e\u0442\u044b"},"videoSection":{"title":"\u041f\u043e\u0441\u043c\u043e\u0442\u0440\u0438\u0442\u0435, \u043a\u0430\u043a \u043c\u044b \u0441\u0434\u0435\u043b\u0430\u043b\u0438 \u0442\u043e\u043d\u043d\u044b \u0430\u0440\u0442\u043e\u0432","subtitle":"\u041d\u0430\u0448\u0438 \u0440\u0430\u0431\u043e\u0442\u044b"},"contacts":{"title":"\u041f\u0440\u043e\u0441\u0442\u043e \u043f\u043e\u0437\u0432\u043e\u043d\u0438\u0442\u0435 \u0441\u0435\u0439\u0447\u0430\u0441 \u0438 \u0432 \u043a\u0440\u0430\u0442\u0447\u0430\u0439\u0448\u0438\u0435 \u0441\u0440\u043e\u043a\u0438 \u043c\u044b \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0438\u043c\u0441\u044f","subtitle":"\u0421\u0432\u044f\u0437\u0430\u0442\u044c\u0441\u044f \u0441 \u043d\u0430\u043c\u0438","address":"\u0410\u0434\u0440\u0435\u0441","phone":"\u0422\u0435\u043b\u0435\u0444\u043e\u043d","email":"\u042d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u0430\u044f \u043f\u043e\u0447\u0442\u0430","addressText":"\u0433. \u0422\u0430\u0448\u043a\u0435\u043d\u0442, \u0443\u043b\u0438\u0446\u0430 \u0417\u0443\u043b\u044c\u0444\u0438\u044f\u0445\u0430\u043d\u044b\u043c 1\u0410"},"footer":{"copy":"\u0412\u0441\u0435 \u043f\u0440\u0430\u0432\u0430 \u0437\u0430\u0449\u0438\u0449\u0435\u043d\u044b."}}')},41:function(e){e.exports=JSON.parse('{"mainMenu":{"about":"Biz haqimizda","features":"Tanlangan","services":"Xizmatlar","contacts":"Kontaktlar"},"about":{"title":"Biz haqimizda","text":"Har qanday vertikal sirtlarda to\'g\'ridan-to\'g\'ri chop etish! Kompaniya jihozlarining xilma-xilligi shisha va plitkalar, beton, g\'isht, yog\'och va boshqalar kabi har qanday materiallarga tasvirlarni qo\'llash imkonini beradi."},"ourWorks":{"title":"Bizning Ishlarimiz"},"benefits":{"title":"Afzalliklar"},"services":{"title":"Keyingi g\'oyangiz uchun to\'g\'ri xizmat turini tanlang.","subtitle":"Xizmat turlari"},"features":{"title":"Devoringizda keyingi avlod texnologiyasiga asoslangan san\'atdan foydalaning.","subtitle":"Saralangan ishlar"},"videoSection":{"title":"Qanday qilib minglab san\'at asarlarini qilganimizni tomosha qiling","subtitle":"Bizning ishlarimiz"},"contacts":{"title":"Hoziroq qo\'ng\'iroq qiling va biz imkon qadar tezroq siz bilan bog\'lanamiz","subtitle":"Biz bilan bog\'laning","address":"Manzil","phone":"Telefon","email":"Elektron manzil","addressText":"Toshkent shahar, Zulfiyaxonim ko\'chas 1A"},"footer":{"copy":"Barcha huquqlar himoyalangan."}}')},62:function(e,t,c){},64:function(e,t,c){},85:function(e,t,c){},89:function(e,t,c){},90:function(e,t,c){},91:function(e,t,c){},92:function(e,t,c){},93:function(e,t,c){},94:function(e,t,c){},95:function(e,t,c){},97:function(e,t,c){},98:function(e,t,c){},99:function(e,t,c){}},[[101,1,2]]]);
//# sourceMappingURL=main.dd4f0d09.chunk.js.map