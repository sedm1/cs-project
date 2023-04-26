(function(){"use strict";var e={4551:function(e,t,n){var r=n(9963),o=n(6252);function i(e,t,n,r,i,a){const s=(0,o.up)("router-view");return(0,o.wg)(),(0,o.j4)(s)}var a=n(3907),s={methods:{...(0,a.nv)(["GET_PRODCUTS_FROM_DB"])},mounted(){this.GET_PRODCUTS_FROM_DB()}},u=n(3744);const c=(0,u.Z)(s,[["render",i]]);var l=c,d=n(5205);(0,d.z)("/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var f=n(2201);const m=[{path:"/",name:"homepage",component:()=>n.e(835).then(n.bind(n,5835)),meta:{title:"Добро пожаловать"}},{path:"/MainPage",name:"MainPage",component:()=>Promise.all([n.e(748),n.e(14),n.e(391)]).then(n.bind(n,4646)),meta:{title:"Главная страница"}},{path:"/productPage/:id",name:"ProductPage",props:!0,component:()=>n.e(49).then(n.bind(n,7049)),meta:{title:"Страница рецепта"}},{path:"/Favourites",name:"Favourites",component:()=>Promise.all([n.e(748),n.e(776)]).then(n.bind(n,2171)),meta:{title:"Избранное"}},{path:"/RandomProducts",name:"RandomProducts",component:()=>Promise.all([n.e(748),n.e(14),n.e(795)]).then(n.bind(n,3256)),meta:{title:"Случайное блюдо"}},{path:"/Recipes",name:"Recipes",component:()=>Promise.all([n.e(748),n.e(4)]).then(n.bind(n,3877)),meta:{title:"Рецепты"}},{path:"/SelectOfDishes",name:"SelectOfDishes",component:()=>Promise.all([n.e(748),n.e(369)]).then(n.bind(n,3504)),meta:{title:"Подбор блюда"}}],p=(0,f.p7)({history:(0,f.PO)("/"),routes:m});var h=p;const g="Не задан заголовок";p.beforeEach((e=>{document.title=e.meta.title||g}));n(7658);var v=n(9669),b=n.n(v),O=n(3168),T=n(3002);const P=(0,T.pm)(),y=new O.ZP({storage:window.localStorage});var E=(0,a.MT)({state:{products:[],favourites:[]},getters:{PRODUCTS(e){return e.products},PRODUCT_BY_ID(e){return t=>e.products.find((e=>e.id===t))},FAVOURITES(e){return e.favourites}},mutations:{SET_PRODUCTS_TO_STATE:(e,t)=>{e.products=t},SET_TO_FAVOURITES:(e,t)=>{if(e.favourites.length){let n=!1;e.favourites.map((function(e){e.id===t.id&&(P.warning("Блюдо уже было добавлено",{timeout:3e3,closeOnClick:!0,hideProgressBar:!0}),n=!0)})),n||(e.favourites.push(t),P.success("Блюдо было добавлено",{timeout:3e3,closeOnClick:!0,hideProgressBar:!0}))}else e.favourites.push(t),P.success("Блюдо было добавлено",{timeout:3e3,closeOnClick:!0,hideProgressBar:!0})},DELTE_PRODUCTS(e,{data:t,getters:n}){n.FAVOURITES.splice(t,1),P.success("Блюдо было удалено",{timeout:3e3,closeOnClick:!0,draggable:!0,draggablePercent:2,hideProgressBar:!0})}},actions:{async GET_PRODCUTS_FROM_DB({commit:e}){try{const t=await b()("https://raw.githubusercontent.com/sedm1/Selldish/main/db-2.json",{method:"GET"});return e("SET_PRODUCTS_TO_STATE",t.data),t.data}catch(t){return console.log("Ошибка при получении продуктов"+t),t}},ADD_TO_FAVOURITES({commit:e},t){e("SET_TO_FAVOURITES",t)},DELTE_PRODUCTS_FROM_FAVOURITES({commit:e,getters:t},n){e("DELTE_PRODUCTS",{data:n,getters:t})}},modules:{},plugins:[y.plugin]});n(343);(0,r.ri)(l).use(E).use(h).use(T.ZP).mount("#app")}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,r,o,i){if(!r){var a=1/0;for(l=0;l<e.length;l++){r=e[l][0],o=e[l][1],i=e[l][2];for(var s=!0,u=0;u<r.length;u++)(!1&i||a>=i)&&Object.keys(n.O).every((function(e){return n.O[e](r[u])}))?r.splice(u--,1):(s=!1,i<a&&(a=i));if(s){e.splice(l--,1);var c=o();void 0!==c&&(t=c)}}return t}i=i||0;for(var l=e.length;l>0&&e[l-1][2]>i;l--)e[l]=e[l-1];e[l]=[r,o,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{4:"f07c93f8",14:"b16f5688",49:"def9444b",369:"014e74bb",391:"a329ce11",748:"b77bc915",776:"fa8ceb9a",795:"f1a4c773",835:"09296ac0"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{4:"b21c3682",49:"b59d8946",369:"a6f515dd",391:"e9236e1e",776:"2680d29a",795:"9256f3ae",835:"bb78e2aa"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="selldish:";n.l=function(r,o,i,a){if(e[r])e[r].push(o);else{var s,u;if(void 0!==i)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var d=c[l];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==t+i){s=d;break}}s||(u=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",t+i),s.src=r),e[r]=[o];var f=function(t,n){s.onerror=s.onload=null,clearTimeout(m);var o=e[r];if(delete e[r],s.parentNode&&s.parentNode.removeChild(s),o&&o.forEach((function(e){return e(n)})),t)return t(n)},m=setTimeout(f.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=f.bind(null,s.onerror),s.onload=f.bind(null,s.onload),u&&document.head.appendChild(s)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var e=function(e,t,n,r){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var i=function(i){if(o.onerror=o.onload=null,"load"===i.type)n();else{var a=i&&("load"===i.type?"missing":i.type),s=i&&i.target&&i.target.href||t,u=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=a,u.request=s,o.parentNode.removeChild(o),r(u)}};return o.onerror=o.onload=i,o.href=t,document.head.appendChild(o),o},t=function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=n[r],i=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(i===e||i===t))return o}var a=document.getElementsByTagName("style");for(r=0;r<a.length;r++){o=a[r],i=o.getAttribute("data-href");if(i===e||i===t)return o}},r=function(r){return new Promise((function(o,i){var a=n.miniCssF(r),s=n.p+a;if(t(a,s))return o();e(r,s,o,i)}))},o={143:0};n.f.miniCss=function(e,t){var n={4:1,49:1,369:1,391:1,776:1,795:1,835:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=r(e).then((function(){o[e]=0}),(function(t){throw delete o[e],t})))}}(),function(){var e={143:0};n.f.j=function(t,r){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise((function(n,r){o=e[t]=[n,r]}));r.push(o[2]=i);var a=n.p+n.u(t),s=new Error,u=function(r){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;s.message="Loading chunk "+t+" failed.\n("+i+": "+a+")",s.name="ChunkLoadError",s.type=i,s.request=a,o[1](s)}};n.l(a,u,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,i,a=r[0],s=r[1],u=r[2],c=0;if(a.some((function(t){return 0!==e[t]}))){for(o in s)n.o(s,o)&&(n.m[o]=s[o]);if(u)var l=u(n)}for(t&&t(r);c<a.length;c++)i=a[c],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(l)},r=self["webpackChunkselldish"]=self["webpackChunkselldish"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(4551)}));r=n.O(r)})();
//# sourceMappingURL=app.d71d8931.js.map