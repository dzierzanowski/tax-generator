(this["webpackJsonptax-generator"]=this["webpackJsonptax-generator"]||[]).push([[0],{20:function(A,t,n){},21:function(A,t,n){},27:function(A,t,n){"use strict";n.r(t);var e=n(0),a=n.n(e),c=n(11),o=n.n(c),i=(n(20),n(4)),Q=n(2),r=n(3),B=(n(21),n(12));function C(A){for(var t=A.length-1;t>0;t--){var n=Math.floor(Math.random()*(t+1)),e=[A[n],A[t]];A[t]=e[0],A[n]=e[1]}return A}var g=Object(B.v4)();"cid=".concat(g),"tid=".concat("UA-188506897-1"),"dl=".concat(document.location);var S=n.p+"static/media/data.e7aca498.tsv",s=null,l=new XMLHttpRequest;function E(A){var t=Math.round(Math.random()),n=C(A[3].concat(A[4]))[0],e=C(A[5+t])[0],a=C(A[7].concat(A[8+t]))[0],c=C(A[10])[0];return{action:n,item:"".concat(e," ").concat(a),taxAmount:c}}function x(){var A={};A.taxType=function(A){var t=A[0].length,n=Math.floor(Math.random()*t);return[A[0][n],A[1][n],A[2][n]]}(s);var t=C([E])[0](s),n=function(A){var t=100,n=Math.floor(Math.random()*(t-10));t-=n;var e=Math.floor(Math.random()*t),a=[n,e,t-=e].sort((function(A,t){return t-A}));return console.log(a),[a,C(A[31].concat(A[32])).slice(0,3)]}(s),e=Object(i.a)(n,2),a=e[0],c=e[1];return A.title="o ".concat(A.taxType[1]," za ").concat(t.action," ").concat(t.item),A.art1="Na ".concat(t.action," ").concat(t.item," nak\u0142ada si\u0119 ").concat(A.taxType[2]," w wysoko\u015bci ").concat(t.taxAmount),A.art3="Cz\u0119\u015b\u0107 wp\u0142yw\xf3w z tytu\u0142u ".concat(A.taxType[2]," w wysoko\u015bci ").concat(a[0],"% zostanie przeznaczona na ").concat(c[0],", w ").concat(a[1],"% na ").concat(c[1]," i w ").concat(a[2],"% na ").concat(c[2]),A}l.open("GET",S,!0),l.onload=function(){if(4===l.readyState)if(200===l.status){s=l.responseText.replace(/[\r]+/g,"").split("\n").filter((function(A){return A}));for(var A=0;A<s.length;A++)s[A]=s[A].split("\t").filter((function(A){return A}))}else console.error(l.statusText)},l.send(null);var j,w,h,d,u,b,D,p,z,m,O,F,M=n(1),f=r.a.div(j||(j=Object(Q.a)(['\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: start;\n  align-items: center;\n  text-align: center;\n  font-family: "Lora", serif;\n  overflow-x: hidden;\n  overflow-y: scroll;\n  -webkit-overflow-scrolling: touch;\n']))),I=r.a.header(w||(w=Object(Q.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: start;\n  align-items: center;\n  width: 100vw;\n  font-size: calc(10px + 2vmin);\n  color: black;\n  margin-bottom: 5px;\n"]))),U=r.a.div(h||(h=Object(Q.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  width: 95vw;\n  // min-height; 1em;\n  font-size: 14px;\n  text-align: left;\n  padding-top: 8px;\n  padding-bottom: 1px;\n  border-bottom: 2px solid black;\n"]))),W=r.a.img(d||(d=Object(Q.a)(["\n  height: 70px;\n  min-height: 70px;\n  margin-top: 30px;\n"]))),H=r.a.h1(u||(u=Object(Q.a)(["\n  text-transform: uppercase;\n  font-size: 17px;\n  font-weight: bold;\n"]))),V=r.a.div(b||(b=Object(Q.a)(["\n  font-size: 17px;\n"]))),v=r.a.main(D||(D=Object(Q.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: start;\n  width: 95vw;\n  flex: 1 0 auto;\n"]))),R=r.a.h2(p||(p=Object(Q.a)(["\n  font-size: 16px;\n  margin: 0;\n  margin-bottom: 10px;\n"]))),K=r.a.p(z||(z=Object(Q.a)(["\n  text-align: left;\n  font-size: 14px;\n  margin: 8px 0;\n  width: 100%;\n"]))),L=r.a.button(m||(m=Object(Q.a)(["\n  background-color: white;\n  border: 3px solid black;\n  border-radius: 5px;\n  font-size: 16px;\n  font-weight: bold;\n  text-transform: uppercase;\n  padding: 0 1em;\n  min-height: 30px;\n  margin: 10px;\n  cursor: pointer;\n  outline: none;\n  &:hover {\n    background-color: black;\n    color: white;\n  }\n"]))),y=r.a.footer(O||(O=Object(Q.a)(["\n  display: flex;\n  justify-content: center;\n  width: 100vw;\n"]))),J=r.a.div(F||(F=Object(Q.a)(["\n  width: 95vw;\n  border-top: 2px solid black;\n  padding-top: 1px;\n  padding-bottom: 3px;\n  font-size: 11px;\n  text-align: left;\n"])));var N=function(A){Object(e.useEffect)((function(){}),[]);var t=Object(e.useState)(null),n=Object(i.a)(t,2),a=n[0],c=n[1],o=Object(e.useState)("Generuj"),Q=Object(i.a)(o,2),r=Q[0],B=Q[1],C=(new Date).toLocaleDateString("pl-PL",{day:"numeric",month:"long",year:"numeric"});return Object(M.jsxs)(f,{className:"App",children:[Object(M.jsxs)(I,{children:[Object(M.jsxs)(U,{id:"topBar",children:[Object(M.jsx)("div",{children:"Dziennik Ustaw"}),Object(M.jsx)("div",{children:"Poz. 2135"})]}),Object(M.jsx)(W,{src:"data:image/jpeg;base64,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"}),Object(M.jsx)(H,{children:"Ustawa"}),Object(M.jsxs)(V,{children:["z dnia ",C," r."]})]}),Object(M.jsxs)(v,{children:[a&&Object(M.jsxs)(M.Fragment,{children:[Object(M.jsx)(R,{children:a.title}),Object(M.jsxs)(K,{children:[Object(M.jsx)("b",{children:"Art. 1."})," ",a.art1,"."]}),Object(M.jsxs)(K,{children:[Object(M.jsx)("b",{children:"Art. 2."})," (uzasadnienie)"]}),Object(M.jsxs)(K,{children:[Object(M.jsx)("b",{children:"Art. 3."})," ",a.art3,"."]}),Object(M.jsxs)(K,{children:[Object(M.jsx)("b",{children:"Art. 4."})," Ustawa wchodzi w \u017cycie z dniem ",C," r."]})]}),Object(M.jsx)(L,{onClick:function(){c(x()),B("Generuj nowe"),document.getElementById("topBar").scrollIntoView()},children:r})]}),Object(M.jsx)(y,{children:Object(M.jsxs)(J,{children:[Object(M.jsx)("b",{children:"Ta strona to \u017cart."})," Po prawdziwe dokumenty z Dziennika Ustaw udaj si\u0119 ",Object(M.jsx)("a",{href:"https://dziennikustaw.gov.pl/DU",children:"tutaj"}),".",Object(M.jsx)("br",{}),"Grafika go\u0142\u0119bia dzi\u0119ki Syd Weiler."]})})]})},G=function(A){A&&A instanceof Function&&n.e(3).then(n.bind(null,28)).then((function(t){var n=t.getCLS,e=t.getFID,a=t.getFCP,c=t.getLCP,o=t.getTTFB;n(A),e(A),a(A),c(A),o(A)}))};o.a.render(Object(M.jsx)(a.a.StrictMode,{children:Object(M.jsx)(N,{})}),document.getElementById("root")),G()}},[[27,1,2]]]);
//# sourceMappingURL=main.0ea32ccf.chunk.js.map