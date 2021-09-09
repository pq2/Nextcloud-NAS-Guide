(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4643],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(r),m=a,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return r?n.createElement(f,l(l({ref:t},u),{},{components:r})):n.createElement(f,l({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},7458:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return i},metadata:function(){return s},toc:function(){return c},default:function(){return d}});var n=r(2122),a=r(9756),o=(r(7294),r(3905)),l={id:"sensible-folder-structure",title:"How to create a sensible folder structure on the external data SSD/HDD?",sidebar_label:"Sensible folder structure"},i=void 0,s={unversionedId:"sensible-folder-structure",id:"sensible-folder-structure",isDocsHomePage:!1,title:"How to create a sensible folder structure on the external data SSD/HDD?",description:"Recommended is to create the folder structure on the external data SSD/HDD like this.",source:"@site/docs/sensible-folder-structure.md",sourceDirName:".",slug:"/sensible-folder-structure",permalink:"/Nextcloud-NAS-Guide/docs/sensible-folder-structure",editUrl:"https://github.com/szaimen/Nextcloud-NAS-Guide/edit/main/docs/sensible-folder-structure.md",tags:[],version:"current",frontMatter:{id:"sensible-folder-structure",title:"How to create a sensible folder structure on the external data SSD/HDD?",sidebar_label:"Sensible folder structure"},sidebar:"docs",previous:{title:"Veracrypt drives - PC access",permalink:"/Nextcloud-NAS-Guide/docs/access-veracrypt"},next:{title:"Overview",permalink:"/Nextcloud-NAS-Guide/docs/backup-hdds"}},c=[],u={toc:c};function d(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Recommended is to create the folder structure on the external data SSD/HDD like this."),(0,o.kt)("p",null,"Create a folder on the drive that contains all your files. Inside this folder, there will be the user folders and other folders that shall get shared between users in the future. Every user-folder should contain an ",(0,o.kt)("inlineCode",{parentName:"p"},"Archive"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Sync")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Backup folder")," and you should strictly separate between them. The ",(0,o.kt)("inlineCode",{parentName:"p"},"Sync")," folder should contain files and folders that are used or changed often and thus will get synchronized via the Nextcloud Desktop client. ",(0,o.kt)("inlineCode",{parentName:"p"},"Archive")," contains all files and folders that are not needed or changed often. ",(0,o.kt)("inlineCode",{parentName:"p"},"Backup")," will contain folders in which e.g. photos from your smartphone will get automatically uploaded or e.g. you can sync your desktop from your laptop to a folder in the Backup folder. (Just so that you know: the backup folder is meant to be a backup folder for data from client devices but isn't the server backup.)"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Here is an example how it could look like:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"external-SSD",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"your data folder",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"User1 folder",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Backup"),(0,o.kt)("li",{parentName:"ul"},"Sync"),(0,o.kt)("li",{parentName:"ul"},"Archive"))),(0,o.kt)("li",{parentName:"ul"},"User2 folder",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Backup"),(0,o.kt)("li",{parentName:"ul"},"Sync"),(0,o.kt)("li",{parentName:"ul"},"Archive"))),(0,o.kt)("li",{parentName:"ul"},"Data exchange folder",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Folder that gets shared between users"),(0,o.kt)("li",{parentName:"ul"},"Some other folder that gets shared between the same users"))),(0,o.kt)("li",{parentName:"ul"},"Some other data exchange folder",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"And some folder inside"))),(0,o.kt)("li",{parentName:"ul"},"user5 folder",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Backup"),(0,o.kt)("li",{parentName:"ul"},"Sync"),(0,o.kt)("li",{parentName:"ul"},"Archive"))))),(0,o.kt)("li",{parentName:"ul"},"Some other folder")))),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The exact foldernames and order can be different"))),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("strong",{parentName:"p"},"BTW"),": you can also spread your files over more than one external data SSD/HDD using the same system. Of course every ",(0,o.kt)("inlineCode",{parentName:"p"},"User folder")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"data exchange folder")," will need to be completely on one disk but you could manually add some different user folders or data exchange folders on a second drive. (this might also be useful if you run out of space on your external data SSD/HDD someday in the future)"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Now copy all private files to the external data SSD/HDD or at least create the folder structure.")),(0,o.kt)("p",null,"If you are done, ",(0,o.kt)("strong",{parentName:"p"},"eject")," the drive from your PC, ",(0,o.kt)("strong",{parentName:"p"},"connect")," the external data SSD/HDD to your server again and ",(0,o.kt)("strong",{parentName:"p"},"power the server on")," by pressing the ",(0,o.kt)("inlineCode",{parentName:"p"},"power button")))}d.isMDXComponent=!0}}]);