(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{149:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return m}));var a=r(0),n=r.n(a);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=n.a.createContext({}),d=function(e){var t=n.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},b=function(e){var t=d(e.components);return n.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},p=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),b=d(r),p=a,m=b["".concat(c,".").concat(p)]||b[p]||u[p]||o;return r?n.a.createElement(m,l(l({ref:t},s),{},{components:r})):n.a.createElement(m,l({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=p;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,c[1]=l;for(var s=2;s<o;s++)c[s]=r[s];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},67:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return i})),r.d(t,"default",(function(){return d}));var a=r(3),n=r(7),o=(r(0),r(149)),c={id:"sensible-folder-structure",title:"How to create a sensible folder structure on the external data SSD/HDD?",sidebar_label:"Sensible folder structure"},l={unversionedId:"sensible-folder-structure",id:"sensible-folder-structure",isDocsHomePage:!1,title:"How to create a sensible folder structure on the external data SSD/HDD?",description:"Recommended is to create the folder structure on the external data SSD/HDD like this.",source:"@site/docs/sensible-folder-structure.md",slug:"/sensible-folder-structure",permalink:"/Nextcloud-NAS-Guide/docs/sensible-folder-structure",editUrl:"https://github.com/szaimen/Nextcloud-NAS-Guide/edit/main/docs/sensible-folder-structure.md",version:"current",sidebar_label:"Sensible folder structure",sidebar:"docs",previous:{title:"How to access the encrypted external data SSD/HDD on any PC?",permalink:"/Nextcloud-NAS-Guide/docs/access-veracrypt"},next:{title:"How to configure the external backup HDD's?",permalink:"/Nextcloud-NAS-Guide/docs/backup-hdds"}},i=[],s={toc:i};function d(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Recommended is to create the folder structure on the external data SSD/HDD like this."),Object(o.b)("p",null,"Create a folder on the drive that contains all your files. Inside this folder, there will be the user folders and other folders that shall get shared between users in the future. Every user-folder should contain an ",Object(o.b)("inlineCode",{parentName:"p"},"Archive"),", ",Object(o.b)("inlineCode",{parentName:"p"},"Sync")," and ",Object(o.b)("inlineCode",{parentName:"p"},"Backup folder")," and you should strictly separate between them. The ",Object(o.b)("inlineCode",{parentName:"p"},"Sync")," folder should contain files and folders that are used or changed often and thus will get synchronized via the Nextcloud Desktop client. ",Object(o.b)("inlineCode",{parentName:"p"},"Archive")," contains all files and folders that are not needed or changed often. ",Object(o.b)("inlineCode",{parentName:"p"},"Backup")," will contain folders in which e.g. photos from your smartphone will get automatically uploaded or e.g. you can sync your desktop from your laptop to a folder in the Backup folder. (Just so that you know: the backup folder is meant to be a backup folder for data from client devices but isn't the server backup.)"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Here is an example how it could look like:")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"external-SSD",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"your data folder",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"User1 folder",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Backup"),Object(o.b)("li",{parentName:"ul"},"Sync"),Object(o.b)("li",{parentName:"ul"},"Archive"))),Object(o.b)("li",{parentName:"ul"},"User2 folder",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Backup"),Object(o.b)("li",{parentName:"ul"},"Sync"),Object(o.b)("li",{parentName:"ul"},"Archive"))),Object(o.b)("li",{parentName:"ul"},"Data exchange folder",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Folder that gets shared between users"),Object(o.b)("li",{parentName:"ul"},"Some other folder that gets shared between the same users"))),Object(o.b)("li",{parentName:"ul"},"Some other data exchange folder",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"And some folder inside"))),Object(o.b)("li",{parentName:"ul"},"user5 folder",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Backup"),Object(o.b)("li",{parentName:"ul"},"Sync"),Object(o.b)("li",{parentName:"ul"},"Archive"))))),Object(o.b)("li",{parentName:"ul"},"Some other folder")))),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"The exact foldernames and order can be different"))),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},Object(o.b)("strong",{parentName:"p"},"BTW"),": you can also spread your files over more than one external data SSD/HDD using the same system. Of course every ",Object(o.b)("inlineCode",{parentName:"p"},"User folder")," and ",Object(o.b)("inlineCode",{parentName:"p"},"data exchange folder")," will need to be completely on one disk but you could manually add some different user folders or data exchange folders on a second drive. (this might also be useful if you run out of space on your external data SSD/HDD someday in the future)"))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Now copy all private files to the external data SSD/HDD or at least create the folder structure.")),Object(o.b)("p",null,"If you are done, ",Object(o.b)("strong",{parentName:"p"},"eject")," the drive from your PC, ",Object(o.b)("strong",{parentName:"p"},"connect")," the external data SSD/HDD to your server again and ",Object(o.b)("strong",{parentName:"p"},"power the server on")," by pressing the ",Object(o.b)("inlineCode",{parentName:"p"},"power button")))}d.isMDXComponent=!0}}]);