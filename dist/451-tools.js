try{self["workbox:core:7.0.0"]&&_()}catch{}const V=(t,...e)=>{let n=t;return e.length>0&&(n+=` :: ${JSON.stringify(e)}`),n},G=V;class f extends Error{constructor(e,n){const r=G(e,n);super(r),this.name=e,this.details=n}}try{self["workbox:routing:7.0.0"]&&_()}catch{}const M="GET",x=t=>t&&typeof t=="object"?t:{handle:t};class k{constructor(e,n,r=M){this.handler=x(n),this.match=e,this.method=r}setCatchHandler(e){this.catchHandler=x(e)}}class Y extends k{constructor(e,n,r){const a=({url:s})=>{const i=e.exec(s.href);if(i)return s.origin!==location.origin&&i.index!==0?void 0:i.slice(1)};super(a,n,r)}}const Q=t=>new URL(String(t),location.href).href.replace(new RegExp(`^${location.origin}`),"");class Z{constructor(){this._routes=new Map,this._defaultHandlerMap=new Map}get routes(){return this._routes}addFetchListener(){self.addEventListener("fetch",e=>{const{request:n}=e,r=this.handleRequest({request:n,event:e});r&&e.respondWith(r)})}addCacheListener(){self.addEventListener("message",e=>{if(e.data&&e.data.type==="CACHE_URLS"){const{payload:n}=e.data,r=Promise.all(n.urlsToCache.map(a=>{typeof a=="string"&&(a=[a]);const s=new Request(...a);return this.handleRequest({request:s,event:e})}));e.waitUntil(r),e.ports&&e.ports[0]&&r.then(()=>e.ports[0].postMessage(!0))}})}handleRequest({request:e,event:n}){const r=new URL(e.url,location.href);if(!r.protocol.startsWith("http"))return;const a=r.origin===location.origin,{params:s,route:i}=this.findMatchingRoute({event:n,request:e,sameOrigin:a,url:r});let o=i&&i.handler;const c=e.method;if(!o&&this._defaultHandlerMap.has(c)&&(o=this._defaultHandlerMap.get(c)),!o)return;let l;try{l=o.handle({url:r,request:e,event:n,params:s})}catch(d){l=Promise.reject(d)}const u=i&&i.catchHandler;return l instanceof Promise&&(this._catchHandler||u)&&(l=l.catch(async d=>{if(u)try{return await u.handle({url:r,request:e,event:n,params:s})}catch(h){h instanceof Error&&(d=h)}if(this._catchHandler)return this._catchHandler.handle({url:r,request:e,event:n});throw d})),l}findMatchingRoute({url:e,sameOrigin:n,request:r,event:a}){const s=this._routes.get(r.method)||[];for(const i of s){let o;const c=i.match({url:e,sameOrigin:n,request:r,event:a});if(c)return o=c,(Array.isArray(o)&&o.length===0||c.constructor===Object&&Object.keys(c).length===0||typeof c=="boolean")&&(o=void 0),{route:i,params:o}}return{}}setDefaultHandler(e,n=M){this._defaultHandlerMap.set(n,x(e))}setCatchHandler(e){this._catchHandler=x(e)}registerRoute(e){this._routes.has(e.method)||this._routes.set(e.method,[]),this._routes.get(e.method).push(e)}unregisterRoute(e){if(!this._routes.has(e.method))throw new f("unregister-route-but-not-found-with-method",{method:e.method});const n=this._routes.get(e.method).indexOf(e);if(n>-1)this._routes.get(e.method).splice(n,1);else throw new f("unregister-route-route-not-registered")}}let b;const j=()=>(b||(b=new Z,b.addFetchListener(),b.addCacheListener()),b);function v(t,e,n){let r;if(typeof t=="string"){const a=new URL(t,location.href),s=({url:i})=>i.href===a.href;r=new k(s,e,n)}else if(t instanceof RegExp)r=new Y(t,e,n);else if(typeof t=="function")r=new k(t,e,n);else if(t instanceof k)r=t;else throw new f("unsupported-route-type",{moduleName:"workbox-routing",funcName:"registerRoute",paramName:"capture"});return j().registerRoute(r),r}function X(t){j().setDefaultHandler(t)}const S="451-tools";function O(t,e){return e?`${t}?revision=${e}`:t}const ee=t=>{if(!t||!t.pages)throw new Error("Missing contentBundles.pages in configuration.");return{pages:(Array.isArray(t.pages)?t.pages:[t.pages]).map(e=>typeof e=="string"?{url:e,revision:null}:{url:e.url,revision:e.revision||null})}},te=t=>{if(!t||!t.assets)throw new Error("Missing fallbackAssets.assets in configuration.");return{assets:(Array.isArray(t.assets)?t.assets:[t.assets]).map(e=>typeof e=="string"?{url:e,revision:null}:{url:e.url,revision:e.revision||null})}};function ne({language:t,textDirection:e,templateStrings:n,mainCSS:r,mainJS:a}){return{"{{ language }}":t,"{{ textDirection }}":e,"{{ mainCSS }}":r,"{{ mainJS }}":a,"{{ pageTitle }}":(n==null?void 0:n.pageTitle)||"Whoops, No Internet Connection","{{ pageDescription }}":(n==null?void 0:n.pageDescription)||"Please check your internet connection and try again.","{{ homeLinkText }}":(n==null?void 0:n.homeLinkText)||"Home","{{ bookmarksTabTitle }}":(n==null?void 0:n.bookmarksTabTitle)||"Bookmarks","{{ editorialTabTitle }}":(n==null?void 0:n.editorialTabTitle)||"Editorial","{{ aboutTabTitle }}":(n==null?void 0:n.aboutTabTitle)||"About","{{ copyright }}":(n==null?void 0:n.copyright)||`Copyright © ${new Date().getFullYear()}. All rights reserved.`,"{{ aboutInnerHTML }}":(n==null?void 0:n.aboutInnerHTML)||`
      <h2>Heading 2</h2>
      <h3>Heading 3</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vitae elementum est. Sed aliquet, nunc in faucibus ultricies, libero justo blandit nisi, nec pharetra magna lacus in nisi. Curabitur viverra quam est, id iaculis metus scelerisque id. Donec enim purus, consequat quis neque vitae, maximus euismod nulla. Sed blandit lacus et scelerisque maximus. Etiam sodales eleifend dui eu accumsan. Sed ut lectus eu sapien aliquet feugiat. Duis nisi purus, condimentum non tortor non, condimentum rutrum dui.</p>
      <p>Phasellus malesuada lectus at condimentum porttitor. Vivamus ullamcorper mauris at risus fermentum tempor. Morbi aliquet arcu quam. Nullam suscipit massa nunc, nec dapibus dui tempor ut. Fusce tortor eros, maximus quis porta eget, aliquet ac magna. Quisque ut sem auctor, interdum nunc quis, fringilla erat. Quisque at pellentesque lectus, ut auctor lorem. Duis cursus varius enim quis semper. Nunc ultrices risus nec metus posuere pellentesque.</p>
      <blockquote>
        <p>“This is a blockquote.”</p>
        <cite><a href="https://example.com/" target="_blank" rel="noopener noreferrer">Someone</a></cite>
      </blockquote>
      <ul>
        <li>Unordered list item 1</li>
        <li>Unordered list item 2</li>
      </ul>
      <ol>
        <li>Ordered list item 1</li>
        <li>Ordered list item 2</li>
      </ol>
    `}}const re='<!doctypehtml><html lang="{{ language }}"dir="{{ textDirection }}"><meta charset="UTF-8"><meta name="viewport"content="width=device-width,initial-scale=1"><meta name="description"content="{{ pageDescription }}"><title>{{ pageTitle }}</title><style>{{ mainCSS }}</style><div class="container"><header class="header"><a class="home-link"href="/"><svg xmlns="http://www.w3.org/2000/svg"fill="currentColor"viewBox="0 0 16 16"width="28"height="28"><path d="M8 1.32.66 8.133l.68.734.66-.613V14h5V9h2v5h5V8.254l.66.613.68-.734Zm0 1.36 5 4.648V13h-3V8H6v5H3V7.328Z"/></svg> <span class="link-text">{{ homeLinkText }}</span></a><h1 class="title">{{ pageTitle }}</h1><p class="description">{{ pageDescription }}</p><svg class="offline-icon"xmlns="http://www.w3.org/2000/svg"viewBox="0 0 500 500"aria-hidden="true"><path d="M355.5 105.5c11.4 36.1 17.7 73.6 18.7 111.4 4.3.5 8.5 1.1 12.6 2h69.8c-3.2-52.6-25.4-102.2-62.1-139.9-12.2 10-25.3 18.9-39 26.5M99 405.2c.7.7 1.5 1.3 2.1 1.8 2.1 1.6 4.4 3.1 6.5 4.7 3.2 2.3 6.5 4.5 9.7 6.6 2.3 1.5 4.7 2.8 6.9 4.2 3.4 1.9 6.6 3.9 10 5.6 2.4 1.3 4.9 2.5 7.4 3.7 3.2 1.6 6.8 3.1 10 4.7 2.4 1 4.7 2 7.1 2.8-12.9-16.2-23.6-34.1-31.5-53.4-10 5.7-19.3 12.1-28.2 19.3m171.2-158.9h-19.9v19.2c6-7 12.7-13.4 19.9-19.2m175.6.2c3.6 2.8 7 5.8 10.2 9 .3-3 .6-6 .8-9h-11M250.3 13.8v94.1c24.3-1.5 48-6.9 70.4-16.3-17.6-41.8-42.6-70.5-70.4-77.8m123.9 46.4-2.1-1.8c-2.1-1.6-4.4-3.1-6.5-4.7-3.2-2.3-6.5-4.5-9.7-6.6-2.3-1.5-4.7-2.7-6.9-4.2-3.4-1.9-6.6-3.9-10-5.7-2.5-1.3-4.9-2.5-7.4-3.7-3.2-1.6-6.8-3.2-10-4.7-2.4-1-4.7-1.9-7.1-2.7 13 16.2 23.6 34.1 31.5 53.4 9.9-5.7 19.3-12.2 28.2-19.3M250.3 218.8h78.8c5.7-1.2 11.5-2 17.4-2.4-1.2-33.5-6.6-66.7-16.4-98.8-25.4 10.3-52.4 16.3-79.7 17.8l-.1 83.4m-27.5 232.6v-51.7c-4.1-13.1-6.3-26.7-6.4-40.4V358c-22 2-43.5 7.2-63.9 15.7 17.6 41.6 42.5 70.4 70.3 77.7m-105.1-91.5c-11.6-36.7-18-74.9-18.7-113.4H16.6c3.2 52.6 25.4 102.2 62.1 139.9 12.2-10 25.3-18.9 39-26.5M16.3 218.8h82.5c1-38.5 7.1-76.7 18.7-113.4-13.8-7.6-26.8-16.5-39-26.5-36.7 37.7-58.6 87.4-62.2 139.9m235.3 232.1c-.4-.5-.8-1-1.3-1.5v2c.5-.1.9-.3 1.4-.4 0-.1-.1-.1-.1-.1m-125-204.4c1 34.3 6.5 68.4 16.5 101.3 24.2-9.9 49.9-15.7 75.9-17.5.2-1.2.4-2.4.7-3.5.9-3.9 1.9-7.8 3.1-11.6v-68.7h-96.2M159 26.2c-2.4.8-4.7 1.8-7.1 2.7-3.5 1.5-6.9 2.9-10.3 4.5-2.5 1.2-5 2.4-7.4 3.7-3.4 1.6-6.6 3.6-9.9 5.5-2.4 1.5-4.9 2.9-7.1 4.4-3.3 2.1-6.4 4.3-9.6 6.6-2.1 1.6-4.4 3.2-6.5 4.9-.6.5-1.3 1.1-1.9 1.8 8.9 7.3 18.4 13.6 28.3 19.2 7.8-19.1 18.5-37.1 31.5-53.3m-6.5 65.5c22.4 9.2 46.2 14.7 70.3 16.2v-94c-27.8 7.3-52.7 36.3-70.3 77.8m70.3 43.7c-27.5-1.5-54.3-7.4-79.7-17.8-10 32.8-15.5 66.9-16.5 101.2h96.2v-83.4m246.4 163.3c-6.1-11.7-14-22.4-23.3-31.7-10.7-10.7-23.3-19.4-37.1-25.7l-2.1-.9c-15.7-6.8-33-10.6-51.2-10.6-18.1 0-35.3 3.7-50.9 10.5-37.3 16.1-65.4 49.4-74.3 89.9-2.1 9.7-3.2 19.6-3 29.5.2 13.2 2.4 26.4 6.6 39 5.4 16.2 14 31.2 25.3 44 12.7 14.5 28.5 25.9 46.3 33.5 15.4 6.5 32.3 10.1 50.1 10.1 70.8 0 128.2-57.4 128.2-128.2-.1-21.5-5.3-41.6-14.6-59.4zm-43.9 107-22.1 22.1-47.7-47.7-47.7 47.7-22.1-22.1 47.7-47.7-47.7-47.7 22.1-22.1 47.7 47.7 47.7-47.7 22.1 22.1-47.7 47.7 47.7 47.7z"/></svg></header><main class="main-content"><div class="tabs"role="tablist"><button aria-controls="panel-1"aria-selected="false"class="tab tab__hidden"id="tab-1"role="tab"tabindex="-1"disabled="disabled">{{ bookmarksTabTitle }}</button> <button aria-controls="panel-2"aria-selected="false"class="tab tab__hidden"id="tab-2"role="tab"tabindex="-1"disabled="disabled">{{ editorialTabTitle }}</button> <button aria-controls="panel-3"aria-selected="false"class="tab"id="tab-3"role="tab"tabindex="-1">{{ aboutTabTitle }}</button></div><section aria-labelledby="tab-1"class="tab-content"data-bookmarks hidden id="panel-1"role="tabpanel"tabindex="0"></section><section aria-labelledby="tab-2"class="tab-content"data-editorial hidden id="panel-2"role="tabpanel"tabindex="0"></section><section aria-labelledby="tab-3"class="tab-content rich-text"hidden id="panel-3"role="tabpanel"tabindex="0">{{ aboutInnerHTML }}</section></main><footer><p class="copyright">{{ copyright }}</footer></div><script>{{ mainJS }}<\/script>',P='*,::after,::before{box-sizing:border-box}*{margin:0}body,html{height:100%}body{-webkit-font-smoothing:antialiased;background-color:var(--background-color,#f9fbfc);color:var(--text-color,#2d2d3b);font-family:system-ui,sans-serif;line-height:1.4}.container{display:flex;flex-direction:column;height:100%;margin:0 auto;max-width:var(--container-width,1200px);padding:0 2rem;width:100%}.header{margin:4rem 0 2.5rem;position:relative}.home-link{display:flex;align-items:center;gap:.5rem;color:var(--primary-color,#1993f6);margin-block-end:1rem;text-decoration:none}.home-link:hover .link-text{text-decoration:underline}.home-link svg{width:28px;height:28px}.title{font-size:2.75rem;line-height:1;margin-block-end:1.5rem}@media screen and (min-width:960px){.title{font-size:5rem}}.description{font-size:1.25rem;max-width:40rem}.offline-icon{display:none;fill:var(--icon-color,#e6e8ec);height:100%;position:absolute;inset-inline-end:0;inset-block-start:0;z-index:-1}@media screen and (min-width:960px){.offline-icon{display:initial}}.main-content{flex-grow:1}.tabs{display:flex;flex-direction:row;flex-wrap:wrap;list-style:none;margin-block-end:2rem;padding:0}@media screen and (min-width:485px){.tabs{border-block-end:1px solid var(--border-color,#e6e8ec);flex-wrap:nowrap;overflow:auto}}.tab{appearance:none;background:0 0;border:none;border-block-end:2px solid transparent;box-shadow:0 1px 0 0 var(--border-color,#e6e8ec);color:var(--tab-text-color,#7a7d95);cursor:pointer;font:inherit;font-size:1.25rem;font-weight:700;padding:.5rem 1rem;transition:border-color .2s ease-in-out;width:50%}@media screen and (min-width:485px){.tab{box-shadow:none;width:initial}}.tab__hidden{display:none}.tab:disabled{cursor:not-allowed;opacity:.5;order:1}.tab:disabled::before{content:"🔒";margin-inline-end:.25rem}.tab[aria-selected=true]{border-color:var(--primary-color,#1993f6);color:var(--primary-color,#1993f6)}.tab:hover:not(:disabled){border-color:var(--primary-color,#1993f6)}.rich-text{max-width:40rem}.rich-text>*+*{margin-block-start:1.5rem}.rich-text h2,.rich-text h3{line-height:1.25}.rich-text h2{font-size:2.25rem}@media screen and (min-width:960px){.rich-text h2{font-size:2.75rem}}.rich-text h3{font-size:1.75rem}@media screen and (min-width:960px){.rich-text h3{font-size:2.25rem}}.rich-text a{color:var(--primary-color,#1993f6)}.rich-text blockquote{border-inline-start:0.25rem solid var(--primary-color,#1993f6);padding-inline-start:1rem}.rich-text cite,.rich-text figcaption{display:block;font-style:italic;margin-block-start:0.5rem}.rich-text figcaption{text-align:center}.rich-text img{display:block;margin-inline-start:auto;margin-inline-end:auto;max-width:100%}.rich-text ol,.rich-text ul{list-style-position:inside;padding:0}.bookmarks,.content-bundles{display:flex;flex-wrap:wrap;gap:1.5rem;list-style:none;padding:0}.card{background-color:var(--card-background-color,#fff);border-radius:.5rem;border:1px solid var(--border-color,#e6e8ec);box-shadow:var(--card-box-shadow,0 8px 24px rgba(149,157,165,.2));width:100%}@media screen and (min-width:960px){.card{width:calc(50% - .75rem)}}.card-link{border-radius:.5rem;color:inherit;display:flex;height:100%;overflow:hidden;text-decoration:none;transition:box-shadow .2s ease-in-out}.card-link:hover{box-shadow:0 0 0 2px var(--primary-color,#1993f6)}.card-image{flex-shrink:0;height:100%;min-height:100px;object-fit:cover;width:100px}.card-image[src=""]{display:none}.card-content{padding:1rem}.card-title{font-size:1.25rem}.card-description,.card-title{-webkit-box-orient:vertical;-webkit-line-clamp:2;display:-webkit-box;overflow-wrap:break-word;overflow:hidden;word-break:break-word}.card-description:not(:empty){-webkit-line-clamp:3;margin-block-start:0.5rem}.copyright{margin:2rem 0;text-align:center}',ae=`(async function(){const bookmarksPlaceholder=document.querySelector("[data-bookmarks]");const serviceWorkerRegistration=await navigator.serviceWorker.getRegistration();if(!serviceWorkerRegistration){return}let showHiddenTabs;try{const configurationResponse=await caches.match("/configuration.json");const configuration=await configurationResponse.json();showHiddenTabs=configuration?.fallbackPages?.showHiddenTabs}catch{showHiddenTabs=false}const cacheNames=await caches.keys();const bookmarkCacheNames=cacheNames.filter((name=>name.endsWith("-bookmarks")));if(bookmarkCacheNames.length>0){const bookmarks=await Promise.all(bookmarkCacheNames.map((async cacheName=>fetch(\`/\${cacheName.replace(/-bookmarks$/,"/bookmark")}\`).then((res=>res.json())).catch((()=>[]))))).then((bookmarks=>bookmarks.flat())).catch((()=>[]));if(bookmarks.length<1){renderNoBookmarks()}else{const bookmarksList=document.createElement("ul");const bookmarksHtml=bookmarks.map(generateCardHtml).join("");bookmarksList.innerHTML=bookmarksHtml;bookmarksList.classList.add("bookmarks");bookmarksPlaceholder.appendChild(bookmarksList)}const bookmarksTab=document.querySelector("#tab-1");bookmarksTab.classList.remove("tab__hidden");bookmarksTab.removeAttribute("disabled")}else if(showHiddenTabs){const bookmarksTab=document.querySelector("#tab-1");bookmarksTab.classList.remove("tab__hidden")}function renderNoBookmarks(){const noBookmarksMessage=document.createElement("p");noBookmarksMessage.innerText="You have no bookmarks.";bookmarksPlaceholder.appendChild(noBookmarksMessage)}const contentBundlesPlaceholder=document.querySelector("[data-editorial]");const isContentBundlesUsed=await caches.has("content-bundles");if(isContentBundlesUsed){const contentBundles=await caches.open("content-bundles").then((cache=>cache.keys())).then((requests=>Promise.all(requests.map((async request=>{const response=await caches.match(request);const html=await response.text();return{path:new URL(request.url).pathname,url:request.url.split("?")[0],html:html}})))));if(contentBundles.length<1){renderNoContentBundles()}else{const contentBundlesList=document.createElement("ul");const contentBundlesHtml=contentBundles.reverse().map(generateCardHtml).join("");contentBundlesList.innerHTML=contentBundlesHtml;contentBundlesList.classList.add("content-bundles");contentBundlesPlaceholder.appendChild(contentBundlesList)}const contentBundlesTab=document.querySelector("#tab-2");contentBundlesTab.classList.remove("tab__hidden");contentBundlesTab.removeAttribute("disabled")}else if(showHiddenTabs){const contentBundlesTab=document.querySelector("#tab-2");contentBundlesTab.classList.remove("tab__hidden")}function renderNoContentBundles(){const noContentBundlesMessage=document.createElement("p");noContentBundlesMessage.innerText="You have no content bundles.";contentBundlesPlaceholder.appendChild(noContentBundlesMessage)}function generateCardHtml(response){const cardItem=document.createElement("li");const cardLink=document.createElement("a");const cardImage=document.createElement("img");const cardContent=document.createElement("div");const cardTitle=document.createElement("h2");const cardDescription=document.createElement("p");const html=document.createElement("html");html.innerHTML=response.html;const title=response.metadata?.title||html.querySelector("title")?.innerText||response.url;const description=response.metadata?.description||html.querySelector('meta[name="description"]')?.content||"";const imageSrc=response.metadata?.image?.src||html.querySelector('meta[property="og:image"]')?.content||"";cardItem.classList.add("card");cardLink.classList.add("card-link");cardLink.href=response.path;cardImage.classList.add("card-image");cardImage.src=imageSrc;if(Number.isInteger(response.metadata?.image?.height)){cardImage.height=response.metadata.image.height}if(Number.isInteger(response.metadata?.image?.width)){cardImage.width=response.metadata.image.width}cardImage.alt="";cardContent.classList.add("card-content");cardTitle.classList.add("card-title");cardTitle.innerText=title;cardDescription.classList.add("card-description");cardDescription.innerText=description;cardContent.appendChild(cardTitle);cardContent.appendChild(cardDescription);cardLink.appendChild(cardImage);cardLink.appendChild(cardContent);cardItem.appendChild(cardLink);return cardItem.outerHTML}const activeTabs=Array.from(document.querySelectorAll('[role="tab"]')).filter((tab=>!tab.classList.contains("tab__hidden")&&!tab.hasAttribute("disabled")));const firstActiveTab=activeTabs[0];const firstActivePanel=document.querySelector(\`#\${firstActiveTab.getAttribute("aria-controls")}\`);const tabList=document.querySelector('[role="tablist"]');firstActiveTab.setAttribute("aria-selected",true);firstActiveTab.setAttribute("tabindex",0);firstActivePanel.removeAttribute("hidden");activeTabs.forEach((tab=>tab.addEventListener("click",changeTabs)));let currentTabIndex=0;tabList.addEventListener("keydown",(e=>{if(e.key==="ArrowRight"||e.key==="ArrowLeft"){activeTabs[currentTabIndex].setAttribute("tabindex",-1);if(e.key==="ArrowRight"){currentTabIndex++;if(currentTabIndex>=activeTabs.length){currentTabIndex=0}}else if(e.key==="ArrowLeft"){currentTabIndex--;if(currentTabIndex<0){currentTabIndex=activeTabs.length-1}}activeTabs[currentTabIndex].setAttribute("tabindex",0);activeTabs[currentTabIndex].focus()}}));function changeTabs(e){const target=e.target;const parent=target.parentNode;const grandparent=parent.parentNode;parent.querySelectorAll('[aria-selected="true"]').forEach((t=>t.setAttribute("aria-selected",false)));target.setAttribute("aria-selected",true);grandparent.querySelectorAll('[role="tabpanel"]').forEach((p=>p.setAttribute("hidden",true)));grandparent.parentNode.querySelector(\`#\${target.getAttribute("aria-controls")}\`).removeAttribute("hidden")}})();
`,se=async(t={})=>{const{serviceWorkerController:e,...n}=t;if(!e)throw new Error("You must pass a serviceWorkerController plugin to registerFallbackPages");e.addConfigurationEntry({fallbackPages:B(n)}),e.addInstallHandler(ie),e.addActivateHandler(oe),e.addFallbackHandler(D),v(new RegExp(`/${S}/dashboard/?$`),async()=>{const{fallbackPages:r}=await e.getConfiguration(),{language:a,textDirection:s,customProperties:i,templateStrings:o}=r;return new Response(N({language:a,textDirection:s,customProperties:i,templateStrings:o}),{headers:{"Content-Type":"text/html"}})})};async function ie({serviceWorkerController:t}){const{fallbackPages:e}=await t.getConfiguration();if(e)return e.pages.map(n=>{const r=O(n.url,n.revision);return Promise.all([caches.open("fallback-pages").then(a=>a.add(r))])})}async function oe({serviceWorkerController:t}){const{fallbackPages:e}=await t.getConfiguration(),n=e==null?void 0:e.pages.map(r=>O(r.url,r.revision));return caches.open("fallback-pages").then(r=>r.keys().then(a=>{a.forEach(s=>{const i=s.url.replace(self.location.origin,"");if(!n.includes(i))return r.delete(s)})}))}async function D({url:t,request:e,event:n,serviceWorkerController:r}){if(e.destination!=="document")return;const{fallbackPages:a}=await r.getConfiguration(),{pages:s,language:i,textDirection:o,customProperties:c,templateStrings:l}=a;if(s.length<1)return new Response(N({language:i,textDirection:o,customProperties:c,templateStrings:l}),{headers:{"Content-Type":"text/html"}});const u=s.find(h=>h.refererRegex?new RegExp(h.refererRegex).test(e.headers.get("referer")):!1),d=u?u.url:s.find(h=>!h.refererRegex).url;return caches.open("fallback-pages").then(h=>h.match(d,{ignoreSearch:!0}).then(K=>K||Response.error()))}function N({language:t,textDirection:e,customProperties:n,templateStrings:r}){const a=n?`:root { ${Object.entries(n).map(([i,o])=>`--${i}: ${o};`).join(" ")} } ${P}`:P,s=ne({language:t,textDirection:e,templateStrings:r,mainCSS:a,mainJS:ae});return re.replace(/{{\s?(.*?)\s?}}/g,(i,o)=>s[i]||i)}const B=t=>{const e=(t==null?void 0:t.customProperties)||{},n=(t==null?void 0:t.templateStrings)||{},r=(t==null?void 0:t.language)||"en",a=(t==null?void 0:t.textDirection)||"ltr",s=(t==null?void 0:t.showHiddenTabs)||!1,i=(t!=null&&t.pages?Array.isArray(t.pages)?t.pages:[t.pages]:[]).map(o=>typeof o=="string"?{url:o,revision:null,refererRegex:null}:{url:o.url,revision:o.revision||null,refererRegex:o.refererRegex||null});return{language:r,textDirection:a,customProperties:e,templateStrings:n,showHiddenTabs:s,pages:i}};function ce(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var le=function(t){return ue(t)&&!de(t)};function ue(t){return!!t&&typeof t=="object"}function de(t){var e=Object.prototype.toString.call(t);return e==="[object RegExp]"||e==="[object Date]"||fe(t)}var he=typeof Symbol=="function"&&Symbol.for,me=he?Symbol.for("react.element"):60103;function fe(t){return t.$$typeof===me}function pe(t){return Array.isArray(t)?[]:{}}function w(t,e){return e.clone!==!1&&e.isMergeableObject(t)?g(pe(t),t,e):t}function ge(t,e,n){return t.concat(e).map(function(r){return w(r,n)})}function be(t,e){if(!e.customMerge)return g;var n=e.customMerge(t);return typeof n=="function"?n:g}function we(t){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t).filter(function(e){return Object.propertyIsEnumerable.call(t,e)}):[]}function E(t){return Object.keys(t).concat(we(t))}function W(t,e){try{return e in t}catch{return!1}}function ye(t,e){return W(t,e)&&!(Object.hasOwnProperty.call(t,e)&&Object.propertyIsEnumerable.call(t,e))}function ke(t,e,n){var r={};return n.isMergeableObject(t)&&E(t).forEach(function(a){r[a]=w(t[a],n)}),E(e).forEach(function(a){ye(t,a)||(W(t,a)&&n.isMergeableObject(e[a])?r[a]=be(a,n)(t[a],e[a],n):r[a]=w(e[a],n))}),r}function g(t,e,n){n=n||{},n.arrayMerge=n.arrayMerge||ge,n.isMergeableObject=n.isMergeableObject||le,n.cloneUnlessOtherwiseSpecified=w;var r=Array.isArray(e),a=Array.isArray(t),s=r===a;return s?r?n.arrayMerge(t,e,n):ke(t,e,n):w(e,n)}g.all=function(t,e){if(!Array.isArray(t))throw new Error("first argument should be an array");return t.reduce(function(n,r){return g(n,r,e)},{})};var ve=g,xe=ve;const Te=ce(xe);function Ce(t){const e=JSON.stringify(t);return self.clients.matchAll().then(n=>Promise.all(n.map(r=>(r.postMessage(e),Promise.resolve("postMessage sent, ",e)))))}const I="mirrors",U="/mirrors.json",qe=10*60*1e3,p="up",Se="low",L="down";async function T(){return caches.open(I).then(t=>t.match(U)).then(t=>t.json())}async function R(t){await caches.open(I).then(e=>e.put(U,new Response(JSON.stringify(t),{headers:{"Content-Type":"application/json"}})))}async function C(t,e){const n=await T(),r=n.find(i=>i.url===t),a={...r,lastModified:Date.now(),status:e},s=[...n.filter(i=>i.url!==t),a];await R(s).then(()=>{r.status!==e&&Ce({type:"mirror-status-changed",mirror:t,status:e})})}async function _e(){const t=Date.now(),e=await T(),n=e.every(a=>a.status===L);let r;n?r=e.map(a=>({...a,lastModified:t,status:p})):r=e.map(a=>a.lastModified<t-qe?{...a,lastModified:t,status:p}:a),await R(r)}async function A(){const t=(await T()).filter(e=>e.status===p);return t.find(e=>e.isPrimary)||t[0]}const Le=3e3;async function $(t){const e=Pe(t),n=t.destination==="document",r=e.replace(/^\//,"");let a=[];n&&await _e();let s=await A();for(;s;){const i=s.url,o=new URL(r,i),c=new AbortController;try{const l=await Promise.race([Re(Le),fetch(o,{signal:c.signal})]),u=new Headers(l.headers);return u.append("x-mirror",i),u.append("x-time-cached",Date.now()),await C(i,p),new Response(l.body,{...l,headers:u})}catch(l){c.abort(),a.push(l),l.status===408?await C(i,Se):await C(i,L)}s=await A()}return Promise.reject(new Error("networking.js (fetchFromNetwork): Out of mirrors.",{cause:a}))}function Re(t){return new Promise((e,n)=>{setTimeout(()=>{n(new Response("",{status:408,statusText:"Request Timeout"}))},t)})}function Pe(t){const e=new URL(t.url),n=/\.[0-9a-z]+$/,r=e.pathname.endsWith("/")?"index.html":"/index.html";return n.exec(e.pathname)?e.pathname:e.pathname+r}const Ee=async(t={})=>{const{serviceWorkerController:e,...n}=t;if(!e)throw new Error("You must pass a serviceWorkerController plugin to registerMirroring");Object.entries(n).length&&e.addConfigurationEntry({mirroring:z(n)}),e.addInstallHandler(Ae),v(He,je(e),"GET"),v(Me,Oe(),"GET"),v(`/${S}/mirror-status/`,De(),"GET")};async function Ae({serviceWorkerController:t}){const{mirroring:e}=await t.getConfiguration(),{urls:n}=e,r=n.map(a=>{const s=Date.now();return{url:a.url,lastModified:s,status:p,isPrimary:a.isPrimary}});return R(r)}const z=t=>{const e=self.location.origin,n=(t==null?void 0:t.urls)||[];return{urls:[{url:e,isPrimary:!0},...n.map(r=>({url:r,isPrimary:!1}))]}};function He(t){return t.request.destination==="document"}function Me(t){const e=new URL(t.request.url).pathname;return t.request.method==="GET"&&new URL(t.request.url).origin===new URL(self.registration.scope).origin&&!e.startsWith(`/${S}`)}function je(t){return e=>{const{request:n}=e;return $(n).catch(async r=>{const a=await t.getConfiguration(),{fallbackPages:s}=a;if(s)return D({event:e,request:n,serviceWorkerController:t})})}}function Oe(t){return e=>$(e.request)}function De(){return async()=>{let t="unknown";const e=await T(),n=e.find(s=>s.isPrimary&&s.status===p),r=e.find(s=>s.status===p),a=e.every(s=>s.status===L);return n?t="up":r?t="low":a&&(t="down"),new Response(JSON.stringify({status:t}),{status:200,headers:{"Content-Type":"application/json"}})}}const Ne="configuration";async function Be(t){return fetch(t,{cache:"no-store"}).then(async e=>{if(e.ok){const n=await e.json();return We(n)}return Promise.reject(new Error("Configuration file not found"))})}async function We(t){return caches.open(Ne).then(async e=>{const n={...t,...t.fallbackPages&&{fallbackPages:B(t.fallbackPages)},...t.fallbackAssets&&{fallbackAssets:te(t.fallbackAssets)},...t.contentBundles&&{contentBundles:ee(t.contentBundles)},...t.mirroring&&{mirroring:z(t.mirroring)}},r=new Response(JSON.stringify(n),{headers:{"Content-Type":"application/json"}});return await e.put("/configuration.json",r.clone()),r})}class Ie{constructor(){this.configuration={},this.installHandlers=[],this.activateHandlers=[],this.fallbackHandlers=[],this.init()}addConfigurationEntry(e){this.configuration={...this.configuration,...e}}async getConfiguration(){return Object.entries(this.configuration).length?this.configuration:caches.open("configuration").then(e=>e.match("/configuration.json")).then(async e=>{if(e){const n=await e.json();return this.addConfigurationEntry(n),n}})}addInstallHandler(e){this.installHandlers.push(e)}addActivateHandler(e){this.activateHandlers.push(e)}addFallbackHandler(e){this.fallbackHandlers.push(e)}async handlerDidError({request:e,event:n,error:r,state:a}){let s;for(const i of this.fallbackHandlers){const o=new URL(e.url),c=await i({event:n,request:e,url:o,serviceWorkerController:this});if(c){s=c;break}}return s||Response.error()}init(){self.addEventListener("install",e=>{const n=new URL(self.location).searchParams.get("configuration");n?e.waitUntil(Be(n).then(r=>r.json()).then(async r=>(this.configuration=Te(r,this.configuration),Promise.all(this.installHandlers.map(a=>a({serviceWorkerController:this}))))).then(()=>self.skipWaiting())):e.waitUntil(Promise.all(this.installHandlers.map(r=>r({serviceWorkerController:this}))).then(()=>self.skipWaiting()))}),self.addEventListener("activate",e=>{e.waitUntil(Promise.all(this.activateHandlers.map(n=>n({serviceWorkerController:this}))).then(()=>self.clients.claim()))})}}const m={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:typeof registration<"u"?registration.scope:""},q=t=>[m.prefix,t,m.suffix].filter(e=>e&&e.length>0).join("-"),Ue=t=>{for(const e of Object.keys(m))t(e)},$e={updateDetails:t=>{Ue(e=>{typeof t[e]=="string"&&(m[e]=t[e])})},getGoogleAnalyticsName:t=>t||q(m.googleAnalytics),getPrecacheName:t=>t||q(m.precache),getPrefix:()=>m.prefix,getRuntimeName:t=>t||q(m.runtime),getSuffix:()=>m.suffix};function H(t,e){const n=new URL(t);for(const r of e)n.searchParams.delete(r);return n.href}async function ze(t,e,n,r){const a=H(e.url,n);if(e.url===a)return t.match(e,r);const s=Object.assign(Object.assign({},r),{ignoreSearch:!0}),i=await t.keys(e,s);for(const o of i){const c=H(o.url,n);if(a===c)return t.match(o,r)}}class Fe{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}const Je=new Set;async function Ke(){for(const t of Je)await t()}function F(t){return new Promise(e=>setTimeout(e,t))}try{self["workbox:strategies:7.0.0"]&&_()}catch{}function y(t){return typeof t=="string"?new Request(t):t}class Ve{constructor(e,n){this._cacheKeys={},Object.assign(this,n),this.event=n.event,this._strategy=e,this._handlerDeferred=new Fe,this._extendLifetimePromises=[],this._plugins=[...e.plugins],this._pluginStateMap=new Map;for(const r of this._plugins)this._pluginStateMap.set(r,{});this.event.waitUntil(this._handlerDeferred.promise)}async fetch(e){const{event:n}=this;let r=y(e);if(r.mode==="navigate"&&n instanceof FetchEvent&&n.preloadResponse){const i=await n.preloadResponse;if(i)return i}const a=this.hasCallback("fetchDidFail")?r.clone():null;try{for(const i of this.iterateCallbacks("requestWillFetch"))r=await i({request:r.clone(),event:n})}catch(i){if(i instanceof Error)throw new f("plugin-error-request-will-fetch",{thrownErrorMessage:i.message})}const s=r.clone();try{let i;i=await fetch(r,r.mode==="navigate"?void 0:this._strategy.fetchOptions);for(const o of this.iterateCallbacks("fetchDidSucceed"))i=await o({event:n,request:s,response:i});return i}catch(i){throw a&&await this.runCallbacks("fetchDidFail",{error:i,event:n,originalRequest:a.clone(),request:s.clone()}),i}}async fetchAndCachePut(e){const n=await this.fetch(e),r=n.clone();return this.waitUntil(this.cachePut(e,r)),n}async cacheMatch(e){const n=y(e);let r;const{cacheName:a,matchOptions:s}=this._strategy,i=await this.getCacheKey(n,"read"),o=Object.assign(Object.assign({},s),{cacheName:a});r=await caches.match(i,o);for(const c of this.iterateCallbacks("cachedResponseWillBeUsed"))r=await c({cacheName:a,matchOptions:s,cachedResponse:r,request:i,event:this.event})||void 0;return r}async cachePut(e,n){const r=y(e);await F(0);const a=await this.getCacheKey(r,"write");if(!n)throw new f("cache-put-with-no-response",{url:Q(a.url)});const s=await this._ensureResponseSafeToCache(n);if(!s)return!1;const{cacheName:i,matchOptions:o}=this._strategy,c=await self.caches.open(i),l=this.hasCallback("cacheDidUpdate"),u=l?await ze(c,a.clone(),["__WB_REVISION__"],o):null;try{await c.put(a,l?s.clone():s)}catch(d){if(d instanceof Error)throw d.name==="QuotaExceededError"&&await Ke(),d}for(const d of this.iterateCallbacks("cacheDidUpdate"))await d({cacheName:i,oldResponse:u,newResponse:s.clone(),request:a,event:this.event});return!0}async getCacheKey(e,n){const r=`${e.url} | ${n}`;if(!this._cacheKeys[r]){let a=e;for(const s of this.iterateCallbacks("cacheKeyWillBeUsed"))a=y(await s({mode:n,request:a,event:this.event,params:this.params}));this._cacheKeys[r]=a}return this._cacheKeys[r]}hasCallback(e){for(const n of this._strategy.plugins)if(e in n)return!0;return!1}async runCallbacks(e,n){for(const r of this.iterateCallbacks(e))await r(n)}*iterateCallbacks(e){for(const n of this._strategy.plugins)if(typeof n[e]=="function"){const r=this._pluginStateMap.get(n);yield a=>{const s=Object.assign(Object.assign({},a),{state:r});return n[e](s)}}}waitUntil(e){return this._extendLifetimePromises.push(e),e}async doneWaiting(){let e;for(;e=this._extendLifetimePromises.shift();)await e}destroy(){this._handlerDeferred.resolve(null)}async _ensureResponseSafeToCache(e){let n=e,r=!1;for(const a of this.iterateCallbacks("cacheWillUpdate"))if(n=await a({request:this.request,response:n,event:this.event})||void 0,r=!0,!n)break;return r||n&&n.status!==200&&(n=void 0),n}}class Ge{constructor(e={}){this.cacheName=$e.getRuntimeName(e.cacheName),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}handle(e){const[n]=this.handleAll(e);return n}handleAll(e){e instanceof FetchEvent&&(e={event:e,request:e.request});const n=e.event,r=typeof e.request=="string"?new Request(e.request):e.request,a="params"in e?e.params:void 0,s=new Ve(this,{event:n,request:r,params:a}),i=this._getResponse(s,r,n),o=this._awaitComplete(i,s,r,n);return[i,o]}async _getResponse(e,n,r){await e.runCallbacks("handlerWillStart",{event:r,request:n});let a;try{if(a=await this._handle(n,e),!a||a.type==="error")throw new f("no-response",{url:n.url})}catch(s){if(s instanceof Error){for(const i of e.iterateCallbacks("handlerDidError"))if(a=await i({error:s,event:r,request:n}),a)break}if(!a)throw s}for(const s of e.iterateCallbacks("handlerWillRespond"))a=await s({event:r,request:n,response:a});return a}async _awaitComplete(e,n,r,a){let s,i;try{s=await e}catch{}try{await n.runCallbacks("handlerDidRespond",{event:a,request:r,response:s}),await n.doneWaiting()}catch(o){o instanceof Error&&(i=o)}if(await n.runCallbacks("handlerDidComplete",{event:a,request:r,response:s,error:i}),n.destroy(),i)throw i}}class Ye extends Ge{constructor(e={}){super(e),this._networkTimeoutSeconds=e.networkTimeoutSeconds||0}async _handle(e,n){let r,a;try{const s=[n.fetch(e)];if(this._networkTimeoutSeconds){const i=F(this._networkTimeoutSeconds*1e3);s.push(i)}if(a=await Promise.race(s),!a)throw new Error(`Timed out the network response after ${this._networkTimeoutSeconds} seconds.`)}catch(s){s instanceof Error&&(r=s)}if(!a)throw new f("no-response",{url:e.url,error:r});return a}}const Qe=({networkTimeoutSeconds:t=3})=>{const e=new Ie;return X(new Ye({networkTimeoutSeconds:t,plugins:[e]})),e},J=Qe({networkTimeoutSeconds:1});se({serviceWorkerController:J});Ee({serviceWorkerController:J});
