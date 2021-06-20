(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6318],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return c},kt:function(){return d}});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),u=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=u(r),d=n,y=m["".concat(l,".").concat(d)]||m[d]||p[d]||a;return r?o.createElement(y,s(s({ref:t},c),{},{components:r})):o.createElement(y,s({ref:t},c))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,s=new Array(a);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var u=2;u<a;u++)s[u]=r[u];return o.createElement.apply(null,s)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5227:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return i},metadata:function(){return l},toc:function(){return u},default:function(){return p}});var o=r(2122),n=r(9756),a=(r(7294),r(3905)),s={id:"restore-system",title:"How to restore the system from backup?",sidebar_label:"Restore system"},i=void 0,l={unversionedId:"restore-system",id:"restore-system",isDocsHomePage:!1,title:"How to restore the system from backup?",description:"It could happen that something (e.g. Nextcloud) fails and you need to restore the system to an earlier state. It will automatically restore the whole root partition from the backup that you choose but will leave the external drives untouched. Hint: if you only want to restore some private files manually, you should follow How to restore files from backup?",source:"@site/docs/restore-system.md",sourceDirName:".",slug:"/restore-system",permalink:"/Nextcloud-NAS-Guide/docs/restore-system",editUrl:"https://github.com/szaimen/Nextcloud-NAS-Guide/edit/main/docs/restore-system.md",version:"current",frontMatter:{id:"restore-system",title:"How to restore the system from backup?",sidebar_label:"Restore system"},sidebar:"docs",previous:{title:"Restore files",permalink:"/Nextcloud-NAS-Guide/docs/restore-files"},next:{title:"Create subdomain and edit CNAME entry",permalink:"/Nextcloud-NAS-Guide/docs/subdomain-cname"}},u=[{value:"Execution",id:"execution",children:[]}],c={toc:u};function p(e){var t=e.components,r=(0,n.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"It could happen that something (e.g. Nextcloud) fails and you need to restore the system to an earlier state. It will automatically restore the whole root partition from the backup that you choose but will leave the external drives untouched. Hint: if you only want to restore some private files manually, you should follow ",(0,a.kt)("a",{parentName:"p",href:"./restore-files"},"How to restore files from backup?")),(0,a.kt)("h3",{id:"execution"},"Execution"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Run over CLI:",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"sudo bash /var/scripts/not-supported.sh\n"))),(0,a.kt)("li",{parentName:"ol"},"Choose ",(0,a.kt)("inlineCode",{parentName:"li"},"System Restore")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Confirm")," that you want to restore your system to a previous state"),(0,a.kt)("li",{parentName:"ol"},"Answer that you haven't made a backup of your NcVM"),(0,a.kt)("li",{parentName:"ol"},"Choose ",(0,a.kt)("inlineCode",{parentName:"li"},"Yes")," to create the backup now"),(0,a.kt)("li",{parentName:"ol"},"Wait until the backup is created (can take a few minutes)"),(0,a.kt)("li",{parentName:"ol"},"Answer if the backup was created successfully"),(0,a.kt)("li",{parentName:"ol"},"If both backup drives are connected, ",(0,a.kt)("strong",{parentName:"li"},"select the backup drive")," that you want to view backups from (most likely the daily backup drive)"),(0,a.kt)("li",{parentName:"ol"},"Select a ",(0,a.kt)("strong",{parentName:"li"},"backup archive")," that you want to restore to (you will see the date and time when it was made)"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Choose")," if you want to check if the backup extracting works (this is up to you)",(0,a.kt)("br",null),"\n(If you choose yes and it takes too long, you can cancel it by pressing ",(0,a.kt)("inlineCode",{parentName:"li"},"[CTRL] + [C]"),". Then start from step 1 again and simply skip it.)"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Choose")," if you want to restore Nextclouds previews (this is up to you)"),(0,a.kt)("li",{parentName:"ol"},"You will be asked next if you really want to restore your system to this state. Now select ",(0,a.kt)("inlineCode",{parentName:"li"},"Yes")," and press ",(0,a.kt)("inlineCode",{parentName:"li"},"[ENTER]")," if you are sure. (This is the last chance to cancel the operation!)"),(0,a.kt)("li",{parentName:"ol"},"Wait until it has restored the system and you see a popup that the restore process was successful."),(0,a.kt)("li",{parentName:"ol"},"Finally, press ",(0,a.kt)("inlineCode",{parentName:"li"},"[ENTER]")," to ",(0,a.kt)("strong",{parentName:"li"},"reboot")," your server.")),(0,a.kt)("p",null,"Now, your system should be restored to the selected state."))}p.isMDXComponent=!0}}]);