(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5165],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=d(n),m=i,w=p["".concat(s,".").concat(m)]||p[m]||c[m]||r;return n?a.createElement(w,o(o({ref:t},u),{},{components:n})):a.createElement(w,o({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var d=2;d<r;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2834:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return d},default:function(){return c}});var a=n(2122),i=n(9756),r=(n(7294),n(3905)),o={id:"bitwarden-rs",title:"How to install Bitwarden RS?",sidebar_label:"Bitwarden RS"},l=void 0,s={unversionedId:"bitwarden-rs",id:"bitwarden-rs",isDocsHomePage:!1,title:"How to install Bitwarden RS?",description:"Bitwarden RS is an open Source but unofficial Bitwarden Server Password Manager implementation in Rust. It is much more lightweight than the official Bitwarden Server and runs nearly on any Hardware. Mostly because of this, it is recommended over the official Bitwarden Server. Of course you will need to trust the maintainer Dani Garcia when using Bitwarden RS. Installing Bitwarden RS enables you to manage all your passwords in the Browser on a website and will let you use all Bitwarden applications which exist for almost any platform.",source:"@site/docs/bitwarden-rs.md",sourceDirName:".",slug:"/bitwarden-rs",permalink:"/Nextcloud-NAS-Guide/docs/bitwarden-rs",editUrl:"https://github.com/szaimen/Nextcloud-NAS-Guide/edit/main/docs/bitwarden-rs.md",version:"current",frontMatter:{id:"bitwarden-rs",title:"How to install Bitwarden RS?",sidebar_label:"Bitwarden RS"},sidebar:"docs",previous:{title:"Extract",permalink:"/Nextcloud-NAS-Guide/docs/extract"},next:{title:"Pi-hole",permalink:"/Nextcloud-NAS-Guide/docs/pi-hole"}},d=[{value:"Preparation",id:"preparation",children:[]},{value:"Installation",id:"installation",children:[]},{value:"What to do now?",id:"what-to-do-now",children:[]}],u={toc:d};function c(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Bitwarden RS is an open Source but unofficial Bitwarden Server Password Manager implementation in Rust. It is much more lightweight than the official Bitwarden Server and runs nearly on any Hardware. Mostly because of this, it is recommended over the official Bitwarden Server. Of course you will need to trust the maintainer Dani Garcia when using Bitwarden RS. Installing Bitwarden RS enables you to manage all your passwords in the Browser on a website and will let you use all Bitwarden applications which exist for almost any platform."),(0,r.kt)("h3",{id:"preparation"},"Preparation"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Create a subdomain like ",(0,r.kt)("inlineCode",{parentName:"li"},"bw.yourdomain.com")," and edit the DNS settings for this subdomain to point to your Nextcloud Domain. (",(0,r.kt)("a",{parentName:"li",href:"./subdomain-cname"},"instructions"),")")),(0,r.kt)("h3",{id:"installation"},"Installation"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Run over CLI:",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"sudo bash /var/scripts/menu.sh\n"))),(0,r.kt)("li",{parentName:"ol"},"Choose ",(0,r.kt)("inlineCode",{parentName:"li"},"Additional Apps")," -> ",(0,r.kt)("inlineCode",{parentName:"li"},"Bitwarden")," -> ",(0,r.kt)("inlineCode",{parentName:"li"},"Bitwarden-RS")),(0,r.kt)("li",{parentName:"ol"},"Choose to install ",(0,r.kt)("inlineCode",{parentName:"li"},"Bitwarden RS")),(0,r.kt)("li",{parentName:"ol"},"Accept the risks and confirm that if you are sure to install ",(0,r.kt)("inlineCode",{parentName:"li"},"Bitwarden RS")),(0,r.kt)("li",{parentName:"ol"},"Type in the ",(0,r.kt)("strong",{parentName:"li"},"subdomain")," that you've created and that points to your Nextcloud domain like ",(0,r.kt)("inlineCode",{parentName:"li"},"bw.yourdomain.com")," and confirm it"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Don't")," use ",(0,r.kt)("inlineCode",{parentName:"li"},"UPNP")," to open the required ports (since you've already done this for your Nextcloud)"),(0,r.kt)("li",{parentName:"ol"},"Wait until everything is installed"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Note down")," the password for the admin panel that gets shown to you"),(0,r.kt)("li",{parentName:"ol"},"Confirm that you have the admin password now.")),(0,r.kt)("p",null,"Bitwarden RS should be successfully installed by now."),(0,r.kt)("h3",{id:"what-to-do-now"},"What to do now?"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You should now visit ",(0,r.kt)("inlineCode",{parentName:"li"},"https://bw.yourdomain.com/admin")," to set up the ",(0,r.kt)("strong",{parentName:"li"},"SMTP settings")," for Bitwarden RS (so that Bitwarden can send mails, too.)"),(0,r.kt)("li",{parentName:"ul"},"When you've successfully configured the SMTP settings, you should visit ",(0,r.kt)("inlineCode",{parentName:"li"},"https://bw.yourdomain.com/admin/users/overview")," to invite a new user via mail-address. And you will be able to create an account using the link that was send to you."),(0,r.kt)("li",{parentName:"ul"},"After you are done creating all needed accounts, you should disable the admin panel (to make it impossible for an attacker to log into the admin panel):",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Run over CLI:",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"sudo bash /var/scripts/menu.sh\n"))),(0,r.kt)("li",{parentName:"ul"},"Choose ",(0,r.kt)("inlineCode",{parentName:"li"},"Additional Apps")," -> ",(0,r.kt)("inlineCode",{parentName:"li"},"Bitwarden")," -> ",(0,r.kt)("inlineCode",{parentName:"li"},"Bitwarden-RS Admin-panel")),(0,r.kt)("li",{parentName:"ul"},"Choose ",(0,r.kt)("inlineCode",{parentName:"li"},"Yes (Disable the admin-panel)")),(0,r.kt)("li",{parentName:"ul"},"Wait until it reports that the admin panel was disabled"))),(0,r.kt)("li",{parentName:"ul"},"After creating the Bitwarden accounts, you should activate two-factor authentication by visiting ",(0,r.kt)("inlineCode",{parentName:"li"},"https://bw.yourdomain.com/#/settings/two-factor")," with each account.")),(0,r.kt)("p",null,"Now, Bitwarden RS is finally ready and secured as good as possible!"))}c.isMDXComponent=!0}}]);