(this.webpackJsonpcryptocurrency=this.webpackJsonpcryptocurrency||[]).push([[0],{13:function(e,n,t){},17:function(e,n,t){"use strict";t.r(n);var c=t(1),s=t(7),a=t.n(s),i=(t(13),t(5));var r=t(0);function o(e){var n=e.listing.response;return Object(r.jsxs)("div",{className:"showListing",children:[Object(r.jsx)("h3",{className:"h1Show wow animate__animated animate__fadeInLeft",children:"Top 10 Cryptocurrency"}),n?n.map((function(e,n){return Object(r.jsxs)("div",{className:"wow animate__animated animate__fadeInRight itemCoin",children:[Object(r.jsx)("span",{className:"rank",children:n+1}),Object(r.jsxs)("div",{className:"info__price",children:[Object(r.jsxs)("p",{className:"nameCoin",children:[" ",e.name," "]}),Object(r.jsxs)("p",{className:"priceCoin",children:[" ",e.current_price,Object(r.jsx)("span",{children:" $"})]}),Object(r.jsxs)("p",{className:"".concat(e.price_change_percentage_24h.toFixed(2)>0?"changeCoin green":"changeCoin red"),children:[" ",e.price_change_percentage_24h.toFixed(2),Object(r.jsx)("span",{children:" %"})]}),Object(r.jsxs)("p",{className:"symbolCoin",children:[" ",e.symbol]})]}),Object(r.jsx)("div",{className:"empty",style:{width:"100px"}})]},n)})):"Somethings is wrong"]})}var j=t(8);t(16);function d(e){var n=e.listing.response?e.listing.response.map((function(e){return[e.name,e.market_cap]})):[];return Object(r.jsxs)("div",{className:"wow animate__animated animate__fadeInRight",style:{textAlign:"center",margin:"40px 0px"},children:[Object(r.jsx)("div",{style:{margin:"20px 0px"},children:Object(r.jsx)("h3",{className:"h1Show h3Pie",children:"Top 10 cryptocurrency by market cap"})}),Object(r.jsx)(j.a,{data:n,colors:["#1e6091","#ed143d","#696465","#003049","#480ca8","#2B9348","#0081A7","#F77F00","#A9D6E5","#b00"]})]})}function l(){var e=Object(c.useState)([]),n=Object(i.a)(e,2),t=n[0],s=n[1];return Object(c.useEffect)((function(){return setInterval((function(){fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false").then((function(e){return e.json()})).catch((function(e){return"error is : "+e})).then((function(e){return s({response:e})}))}),2e3),function(){}}),[]),Object(r.jsxs)("div",{children:[Object(r.jsx)(o,{listing:t}),Object(r.jsx)(d,{listing:t})]})}function p(){return Object(r.jsxs)("div",{children:[Object(r.jsx)("header",{children:Object(r.jsx)("h1",{children:"Welcome to Crypto Dashboard"})}),Object(r.jsx)("p",{className:"caption wow animate__animated animate__fadeInRight",children:Object(r.jsx)("span",{children:"All data update every two seconds"})})]})}t(15);var h=function(){return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)(p,{}),Object(r.jsx)(l,{})]})},m=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,19)).then((function(n){var t=n.getCLS,c=n.getFID,s=n.getFCP,a=n.getLCP,i=n.getTTFB;t(e),c(e),s(e),a(e),i(e)}))};a.a.render(Object(r.jsx)(h,{}),document.getElementById("root")),m()}},[[17,1,2]]]);
//# sourceMappingURL=main.e4166d4a.chunk.js.map