(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5638],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),m=o,f=p["".concat(c,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4290:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return l},default:function(){return d}});var r=n(2122),o=n(9756),a=(n(7294),n(3905)),i={id:"smb-connect",title:"How to connect to your SMB-server?",sidebar_label:"Connect via SMB"},s=void 0,c={unversionedId:"smb-connect",id:"smb-connect",isDocsHomePage:!1,title:"How to connect to your SMB-server?",description:"If you've followed this guide and have set up a SMB-users and -shares, you will be able to connect to your server using SMB. Here is how to do this in detail.",source:"@site/docs/smb-connect.md",sourceDirName:".",slug:"/smb-connect",permalink:"/Nextcloud-NAS-Guide/docs/smb-connect",editUrl:"https://github.com/szaimen/Nextcloud-NAS-Guide/edit/main/docs/smb-connect.md",tags:[],version:"current",frontMatter:{id:"smb-connect",title:"How to connect to your SMB-server?",sidebar_label:"Connect via SMB"},sidebar:"docs",previous:{title:"Mount HDD for Movies/TV-Shows",permalink:"/Nextcloud-NAS-Guide/docs/mount-hdd"},next:{title:"Connect via Remotedesktop",permalink:"/Nextcloud-NAS-Guide/docs/rdp-connect"}},l=[{value:"On Windows:",id:"on-windows",children:[]}],u={toc:l};function d(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"If you've followed this guide and have set up a SMB-users and -shares, you will be able to connect to your server using SMB. Here is how to do this in detail."),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"It is important that you've created at least one SMB-user and at least one SMB-share. Otherwise you won't be able to connect to your server via SMB!"))),(0,a.kt)("h3",{id:"on-windows"},"On Windows:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Open ",(0,a.kt)("strong",{parentName:"li"},"Windows Explorer")," (e.g. by pressing ",(0,a.kt)("inlineCode",{parentName:"li"},"[WIN] + [E]"),")"),(0,a.kt)("li",{parentName:"ol"},"Select the ",(0,a.kt)("strong",{parentName:"li"},"address bar")," (e.g. by pressing ",(0,a.kt)("inlineCode",{parentName:"li"},"[ALT] + [E]"),")"),(0,a.kt)("li",{parentName:"ol"},"Type in ",(0,a.kt)("inlineCode",{parentName:"li"},"\\\\nextcloud")," and press ",(0,a.kt)("inlineCode",{parentName:"li"},"[ENTER]"),(0,a.kt)("br",null),"\n(if that doesn't work, type in the internal IPv4-address of your server, instead. E.g. ",(0,a.kt)("inlineCode",{parentName:"li"},"\\\\192.168.178.144"),")"),(0,a.kt)("li",{parentName:"ol"},"Now a ",(0,a.kt)("strong",{parentName:"li"},"credentials popup")," should open and you should ",(0,a.kt)("strong",{parentName:"li"},"type in")," the credentials of a specific SMB-user that you've created ",(0,a.kt)("a",{parentName:"li",href:"./create-users"},"here")),(0,a.kt)("li",{parentName:"ol"},"If the authentication is successful, you should see now the SMB-shares that specific SMB-user has access to and you should be able to access your files over SMB.")))}d.isMDXComponent=!0}}]);