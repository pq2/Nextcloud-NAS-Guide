(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9514,6167],{895:function(e,t,n){"use strict";n.d(t,{dK:function(){return a},_k:function(){return i},vc:function(){return o},rx:function(){return r},qo:function(){return l},Hk:function(){return s},Iz:function(){return c}});n(1336);var a=["en"],i=!1,o=null,r="f1f31f8e",l=8,s=50,c={search_placeholder:"Search",see_all_results:"See all results",no_results:"No results.",search_results_for:'Search results for "{{ keyword }}"',search_the_documentation:"Search the documentation",count_documents_found_plural:"{{ count }} documents found",count_documents_found:"{{ count }} document found",no_documents_were_found:"No documents were found"}},3616:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return te}});var a=n(7294),i=n(3905),o=n(2263),r=n(6291),l=n(7319),s=n(2122),c=n(9756),u=n(6010),d=n(9732),m=n(944),b=n(1839),p=n(3783),f=n(7898),h=n(6742),v=n(3919),_=n(5537),E=function(e){return a.createElement("svg",(0,s.Z)({width:"20",height:"20","aria-hidden":"true"},e),a.createElement("g",{fill:"#7a7a7a"},a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))},g=n(4478),k=n(8617),C=n(4973),N="sidebar_15mo",Z="sidebarWithHideableNavbar_267A",I="sidebarHidden_2kNb",S="sidebarLogo_3h0W",w="menu_Bmed",y="menuLinkText_2aKo",A="menuWithAnnouncementBar_2WvA",R="collapseSidebarButton_1CGd",T="collapseSidebarButtonIcon_3E-R",M="sidebarMenuIcon_fgN0",x="sidebarMenuCloseIcon_1lpH";var L=function e(t,n){return"link"===t.type?(0,d.Mg)(t.href,n):"category"===t.type&&t.items.some((function(t){return e(t,n)}))},B=(0,a.memo)((function(e){var t=e.items,n=(0,c.Z)(e,["items"]);return t.map((function(e,t){return a.createElement(P,(0,s.Z)({key:t,item:e},n))}))}));function P(e){switch(e.item.type){case"category":return a.createElement(H,e);case"link":default:return a.createElement(W,e)}}function H(e){var t,n,i,o=e.item,r=e.onItemClick,l=e.collapsible,d=e.activePath,m=(0,c.Z)(e,["item","onItemClick","collapsible","activePath"]),b=o.items,p=o.label,f=L(o,d),h=(n=f,i=(0,a.useRef)(n),(0,a.useEffect)((function(){i.current=n}),[n]),i.current),v=(0,a.useState)((function(){return!!l&&(!f&&o.collapsed)})),_=v[0],E=v[1],g=(0,a.useRef)(null),k=(0,a.useState)(void 0),C=k[0],N=k[1],Z=function(e){var t;void 0===e&&(e=!0),N(e?(null==(t=g.current)?void 0:t.scrollHeight)+"px":void 0)};(0,a.useEffect)((function(){f&&!h&&_&&E(!1)}),[f,h,_]);var I=(0,a.useCallback)((function(e){e.preventDefault(),C||Z(),setTimeout((function(){return E((function(e){return!e}))}),100)}),[C]);return 0===b.length?null:a.createElement("li",{className:(0,u.Z)("menu__list-item",{"menu__list-item--collapsed":_})},a.createElement("a",(0,s.Z)({className:(0,u.Z)("menu__link",(t={"menu__link--sublist":l,"menu__link--active":l&&f},t[y]=!l,t)),onClick:l?I:void 0,href:l?"#!":void 0},m),p),a.createElement("ul",{className:"menu__list",ref:g,style:{height:C},onTransitionEnd:function(){_||Z(!1)}},a.createElement(B,{items:b,tabIndex:_?"-1":"0",onItemClick:r,collapsible:l,activePath:d})))}function W(e){var t=e.item,n=e.onItemClick,i=e.activePath,o=(e.collapsible,(0,c.Z)(e,["item","onItemClick","activePath","collapsible"])),r=t.href,l=t.label,d=L(t,i);return a.createElement("li",{className:"menu__list-item",key:l},a.createElement(h.Z,(0,s.Z)({className:(0,u.Z)("menu__link",{"menu__link--active":d}),to:r},(0,v.Z)(r)&&{isNavLink:!0,exact:!0,onClick:n},o),(0,v.Z)(r)?l:a.createElement("span",null,l,a.createElement(k.Z,null))))}function D(e){var t=e.onClick;return a.createElement("button",{type:"button",title:(0,C.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,C.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,u.Z)("button button--secondary button--outline",R),onClick:t},a.createElement(E,{className:T}))}function F(e){var t=e.responsiveSidebarOpened,n=e.onClick;return a.createElement("button",{"aria-label":t?(0,C.I)({id:"theme.docs.sidebar.responsiveCloseButtonLabel",message:"Close menu",description:"The ARIA label for close button of mobile doc sidebar"}):(0,C.I)({id:"theme.docs.sidebar.responsiveOpenButtonLabel",message:"Open menu",description:"The ARIA label for open button of mobile doc sidebar"}),"aria-haspopup":"true",className:"button button--secondary button--sm menu__button",type:"button",onClick:n},t?a.createElement("span",{className:(0,u.Z)(M,x)},"\xd7"):a.createElement(g.Z,{className:M,height:24,width:24}))}var O=function(e){var t,n,i=e.path,o=e.sidebar,r=e.sidebarCollapsible,l=void 0===r||r,s=e.onCollapse,c=e.isHidden,h=function(){var e=(0,m.Z)().isAnnouncementBarClosed,t=(0,a.useState)(!e),n=t[0],i=t[1];return(0,f.Z)((function(t){var n=t.scrollY;e||i(0===n)})),n}(),v=(0,d.LU)(),E=v.navbar.hideOnScroll,g=v.hideableSidebar,k=(0,m.Z)().isAnnouncementBarClosed,y=function(){var e=(0,a.useState)(!1),t=e[0],n=e[1];(0,b.Z)(t);var i=(0,p.Z)();return(0,a.useEffect)((function(){i===p.D.desktop&&n(!1)}),[i]),{showResponsiveSidebar:t,closeResponsiveSidebar:(0,a.useCallback)((function(e){e.target.blur(),n(!1)}),[n]),toggleResponsiveSidebar:(0,a.useCallback)((function(){n((function(e){return!e}))}),[n])}}(),R=y.showResponsiveSidebar,T=y.closeResponsiveSidebar,M=y.toggleResponsiveSidebar;return a.createElement("div",{className:(0,u.Z)(N,(t={},t[Z]=E,t[I]=c,t))},E&&a.createElement(_.Z,{tabIndex:-1,className:S}),a.createElement("nav",{className:(0,u.Z)("menu","menu--responsive","thin-scrollbar",w,(n={"menu--show":R},n[A]=!k&&h,n)),"aria-label":(0,C.I)({id:"theme.docs.sidebar.navAriaLabel",message:"Sidebar navigation",description:"The ARIA label for documentation menu"})},a.createElement(F,{responsiveSidebarOpened:R,onClick:M}),a.createElement("ul",{className:"menu__list"},a.createElement(B,{items:o,onItemClick:T,collapsible:l,activePath:i}))),g&&a.createElement(D,{onClick:s}))},K=n(7277),z=n(4608),J=n(5977),U="docPage_31aa",Y="docMainContainer_3ufF",q="docMainContainerEnhanced_3NYZ",G="docSidebarContainer_3Kbt",Q="docSidebarContainerHidden_3pA8",X="collapsedDocSidebar_2JMH",j="expandSidebarButtonIcon_1naQ",V="docItemWrapperEnhanced_2vyJ",$="docItemWrapper_3FMP";function ee(e){var t,n,r,s,c,m=e.currentDocRoute,b=e.versionMetadata,p=e.children,f=(0,o.Z)(),h=f.siteConfig,v=f.isClient,_=b.pluginId,g=b.version,k=function(e){var t,n=e.versionMetadata,a=e.currentDocRoute,i=n.permalinkToSidebar,o=n.docsSidebars,r=i[a.path]||i[(t=a.path,t.endsWith("/")?t:t+"/")]||i[function(e){return e.endsWith("/")?e.slice(0,-1):e}(a.path)];return{sidebar:o[r],sidebarName:r}}({versionMetadata:b,currentDocRoute:m}),N=k.sidebarName,Z=k.sidebar,I=(0,a.useState)(!1),S=I[0],w=I[1],y=(0,a.useState)(!1),A=y[0],R=y[1],T=(0,a.useCallback)((function(){A&&R(!1),w(!S)}),[A]);return a.createElement(l.Z,{key:v,wrapperClassName:d.kM.wrapper.docPages,pageClassName:d.kM.page.docPage,searchMetadatas:{version:g,tag:(0,d.os)(_,g)}},a.createElement("div",{className:U},Z&&a.createElement("aside",{className:(0,u.Z)(G,(t={},t[Q]=S,t)),onTransitionEnd:function(e){e.currentTarget.classList.contains(G)&&S&&R(!0)}},a.createElement(O,{key:N,sidebar:Z,path:m.path,sidebarCollapsible:null==(n=null==(r=h.themeConfig)?void 0:r.sidebarCollapsible)||n,onCollapse:T,isHidden:A}),A&&a.createElement("div",{className:X,title:(0,C.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,C.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:T,onClick:T},a.createElement(E,{className:j}))),a.createElement("main",{className:(0,u.Z)(Y,(s={},s[q]=S||!Z,s))},a.createElement("div",{className:(0,u.Z)("container padding-top--md padding-bottom--lg",$,(c={},c[V]=S,c))},a.createElement(i.Zo,{components:K.Z},p)))))}var te=function(e){var t=e.route.routes,n=e.versionMetadata,i=e.location,o=t.find((function(e){return(0,J.LX)(i.pathname,e)}));return o?a.createElement(ee,{currentDocRoute:o,versionMetadata:n},(0,r.Z)(t)):a.createElement(z.default,e)}},4608:function(e,t,n){"use strict";n.r(t);var a=n(7294),i=n(7319),o=n(4973);t.default=function(){return a.createElement(i.Z,{title:(0,o.I)({id:"theme.NotFound.title",message:"Page Not Found"})},a.createElement("main",{className:"container margin-vert--xl"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col col--6 col--offset-3"},a.createElement("h1",{className:"hero__title"},a.createElement(o.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),a.createElement("p",null,a.createElement(o.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),a.createElement("p",null,a.createElement(o.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))))}}}]);