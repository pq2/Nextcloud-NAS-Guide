(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[169],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return u},kt:function(){return m}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),p=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(a),m=n,k=d["".concat(c,".").concat(m)]||d[m]||s[m]||i;return a?r.createElement(k,o(o({ref:t},u),{},{components:a})):r.createElement(k,o({ref:t},u))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},6204:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return s}});var r=a(2122),n=a(9756),i=(a(7294),a(3905)),o={id:"daily-backup",title:"How to set up a daily backup?",sidebar_label:"Daily Backup"},l=void 0,c={unversionedId:"daily-backup",id:"daily-backup",isDocsHomePage:!1,title:"How to set up a daily backup?",description:"Now that everything is prepared, you should set up a daily backup for your server.",source:"@site/docs/daily-backup.md",sourceDirName:".",slug:"/daily-backup",permalink:"/Nextcloud-NAS-Guide/docs/daily-backup",editUrl:"https://github.com/szaimen/Nextcloud-NAS-Guide/edit/main/docs/daily-backup.md",tags:[],version:"current",frontMatter:{id:"daily-backup",title:"How to set up a daily backup?",sidebar_label:"Daily Backup"},sidebar:"docs",previous:{title:"Update manually Nextcloud minor",permalink:"/Nextcloud-NAS-Guide/docs/update-manually"},next:{title:"Off-Shore Backup",permalink:"/Nextcloud-NAS-Guide/docs/offshore-backup"}},p=[],u={toc:p};function s(e){var t=e.components,a=(0,n.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Now that everything is prepared, you should set up a daily backup for your server."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Run over CLI:",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"sudo bash /var/scripts/not-supported.sh\n"))),(0,i.kt)("li",{parentName:"ol"},"Choose ",(0,i.kt)("inlineCode",{parentName:"li"},"Daily Backup Wizard")),(0,i.kt)("li",{parentName:"ol"},"Confirm that you want to ",(0,i.kt)("strong",{parentName:"li"},"create")," a daily backup script"),(0,i.kt)("li",{parentName:"ol"},"Confirm that you will leave the backup drive connected"),(0,i.kt)("li",{parentName:"ol"},"Select your external data SSD/HDD to be ",(0,i.kt)("strong",{parentName:"li"},"included")," in backups"),(0,i.kt)("li",{parentName:"ol"},"Choose that you want to backup the ",(0,i.kt)("strong",{parentName:"li"},"whole")," external data SSD/HDD"),(0,i.kt)("li",{parentName:"ol"},"Select the ",(0,i.kt)("strong",{parentName:"li"},"daily backup drive")," as backup target"),(0,i.kt)("li",{parentName:"ol"},"Choose to use the recommended backup directory"),(0,i.kt)("li",{parentName:"ol"},"Enter a difficult ",(0,i.kt)("strong",{parentName:"li"},"encryption key")," for your backup and store it at a safe place",(0,i.kt)("br",null),"\n(Difficult encryption key means at least 20 characters long, containing small and tall letters, digits and special characters)"),(0,i.kt)("li",{parentName:"ol"},"Choose to run the backup at the recommended time at ",(0,i.kt)("inlineCode",{parentName:"li"},"4.00 am")),(0,i.kt)("li",{parentName:"ol"},"Now everything will get set up"),(0,i.kt)("li",{parentName:"ol"},"You should now receive the daily backup config file via mail. Please ",(0,i.kt)("strong",{parentName:"li"},"save/archive")," it"),(0,i.kt)("li",{parentName:"ol"},"Finally, you will see the message that the backup script was successfully created")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"It is located here: ",(0,i.kt)("inlineCode",{parentName:"p"},"/var/scripts/daily-borg-backup.sh")," and will get executed at your chosen backup time, most likely ",(0,i.kt)("inlineCode",{parentName:"p"},"4.00 am"),". You will get ",(0,i.kt)("strong",{parentName:"p"},"notified")," by mail if something fails and also if the backup was successful. The script which will create the daily backup is based on a program called ",(0,i.kt)("inlineCode",{parentName:"p"},"borgbackup")," which is used to make daily incremental, compressed and deduplicated backup archives from your root partition and external data SSD/HDD."))))}s.isMDXComponent=!0}}]);