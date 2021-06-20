(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7401],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,y=d["".concat(c,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(y,a(a({ref:t},s),{},{components:n})):r.createElement(y,a({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5355:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return p}});var r=n(2122),o=n(9756),i=(n(7294),n(3905)),a={id:"recycle-bin-cleanup",title:"How to enable automatic recycle bin cleanup?",sidebar_label:"Automatic recycle bin cleanup"},l=void 0,c={unversionedId:"recycle-bin-cleanup",id:"recycle-bin-cleanup",isDocsHomePage:!1,title:"How to enable automatic recycle bin cleanup?",description:"This will set up a retention policy for files that were deleted over SMB and get moved to their hidden recycle folder. To automatically clean up those directories and preventing them from getting to big, you should enable this option. It will automatically delete files in the recycle bins that were deleted more than two days ago.",source:"@site/docs/recycle-bin-cleanup.md",sourceDirName:".",slug:"/recycle-bin-cleanup",permalink:"/Nextcloud-NAS-Guide/docs/recycle-bin-cleanup",editUrl:"https://github.com/szaimen/Nextcloud-NAS-Guide/edit/main/docs/recycle-bin-cleanup.md",version:"current",frontMatter:{id:"recycle-bin-cleanup",title:"How to enable automatic recycle bin cleanup?",sidebar_label:"Automatic recycle bin cleanup"},sidebar:"docs",previous:{title:"Create SMB-shares and mount it to Nextcloud",permalink:"/Nextcloud-NAS-Guide/docs/create-shares"},next:{title:"Overview",permalink:"/Nextcloud-NAS-Guide/docs/customize-nextcloud"}},u=[],s={toc:u};function p(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This will set up a retention policy for files that were deleted over SMB and get moved to their hidden recycle folder. To automatically clean up those directories and preventing them from getting to big, you should enable this option. It will automatically delete files in the recycle bins that were deleted more than two days ago."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Run over CLI:",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"sudo bash /var/scripts/not-supported.sh\n"))),(0,i.kt)("li",{parentName:"ol"},"Choose ",(0,i.kt)("inlineCode",{parentName:"li"},"SMB-server")," -> ",(0,i.kt)("inlineCode",{parentName:"li"},"Automatically empty recycle bins")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Confirm")," that you want enable automatic recycle bin cleanup"),(0,i.kt)("li",{parentName:"ol"},"Wait until you see the confirmation that it was configured successfully"),(0,i.kt)("li",{parentName:"ol"},"Now you will get asked if you want to set the retention policy for trashbin files and version files in Nextcloud to 2 days. Recommended is to answer with ",(0,i.kt)("inlineCode",{parentName:"li"},"Yes")," but this decision is up to you."),(0,i.kt)("li",{parentName:"ol"},"Afterwards, exit the script by selecting ",(0,i.kt)("inlineCode",{parentName:"li"},"Exit"))))}p.isMDXComponent=!0}}]);