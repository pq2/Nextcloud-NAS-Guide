(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2364],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return c},kt:function(){return h}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(a),h=r,m=p["".concat(l,".").concat(h)]||p[h]||u[h]||o;return a?n.createElement(m,i(i({ref:t},c),{},{components:a})):n.createElement(m,i({ref:t},c))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var d=2;d<o;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},1102:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return d},default:function(){return u}});var n=a(2122),r=a(9756),o=(a(7294),a(3905)),i={id:"create-shares",title:"How to create SMB-shares and mount it to Nextcloud in one go?",sidebar_label:"Create SMB-shares and mount it to Nextcloud"},s=void 0,l={unversionedId:"create-shares",id:"create-shares",isDocsHomePage:!1,title:"How to create SMB-shares and mount it to Nextcloud in one go?",description:"The big advantage is, that you can create a SMB-share and mount the same location to Nextcloud in one go.",source:"@site/docs/create-shares.md",sourceDirName:".",slug:"/create-shares",permalink:"/Nextcloud-NAS-Guide/docs/create-shares",editUrl:"https://github.com/szaimen/Nextcloud-NAS-Guide/edit/main/docs/create-shares.md",tags:[],version:"current",frontMatter:{id:"create-shares",title:"How to create SMB-shares and mount it to Nextcloud in one go?",sidebar_label:"Create SMB-shares and mount it to Nextcloud"},sidebar:"docs",previous:{title:"Create SMB-users and Nextcloud users",permalink:"/Nextcloud-NAS-Guide/docs/create-users"},next:{title:"Automatic recycle bin cleanup",permalink:"/Nextcloud-NAS-Guide/docs/recycle-bin-cleanup"}},d=[],c={toc:d};function u(e){var t=e.components,a=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The big advantage is, that you can create a SMB-share and mount the same location to Nextcloud in one go."),(0,o.kt)("p",null,"If you have followed this guide, you should have set up a ",(0,o.kt)("strong",{parentName:"p"},"sensible folder structure")," on the external data SSD/HDD by now. Based on this structure, you should ",(0,o.kt)("strong",{parentName:"p"},"share")," the ",(0,o.kt)("inlineCode",{parentName:"p"},"user folders")," with the corresponding user that you just created. The ",(0,o.kt)("inlineCode",{parentName:"p"},"data exchange")," folders should get shared with the users that shall have access to those folders. "),(0,o.kt)("p",null,"If you have mounted the external data SSD/HDD in ",(0,o.kt)("inlineCode",{parentName:"p"},"/mnt/data")," as recommended, is here one example:\nYour data folder should be now found in ",(0,o.kt)("inlineCode",{parentName:"p"},"/mnt/data/your data folder"),". One of your user folders and data exchange folders might be ",(0,o.kt)("inlineCode",{parentName:"p"},"/mnt/data/your data folder/user1 folder")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"/mnt/data/your data folder/Data exchange folder")," now. You should then ",(0,o.kt)("strong",{parentName:"p"},"share")," the ",(0,o.kt)("inlineCode",{parentName:"p"},"/mnt/data/your data folder/user1 folder")," with ",(0,o.kt)("inlineCode",{parentName:"p"},"user1")," and the ",(0,o.kt)("inlineCode",{parentName:"p"},"/mnt/data/your data folder/Data exchange folder")," with all users that shall get access to this folder. As you now see, best case is, if the user folders on your external data SSD/HDD match exactly the user count of newly created users."),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("strong",{parentName:"p"},"BTW"),": you can at this point still shutdown your server, disconnect the external data SSD/HDD, connect it to your PC, open it with ",(0,o.kt)("inlineCode",{parentName:"p"},"Veracrypt")," and change the folder structure there. (see ",(0,o.kt)("a",{parentName:"p",href:"./access-veracrypt"},"this link")," for further instructions). Afterwards you can connect the drive to your server again and power it back on."))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Based on the example above, you should now create a list how do you want to share your data with your users.")),(0,o.kt)("p",null,"Here is how to work off this list technically:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Go back to the ",(0,o.kt)("strong",{parentName:"li"},"SMB-server Main Menu")," and select ",(0,o.kt)("inlineCode",{parentName:"li"},"Open the SMB-share Menu")),(0,o.kt)("li",{parentName:"ol"},"Choose ",(0,o.kt)("inlineCode",{parentName:"li"},"Create a SMB-share")),(0,o.kt)("li",{parentName:"ol"},"You will see now a list of valid directories you can type in"),(0,o.kt)("li",{parentName:"ol"},"Type in one ",(0,o.kt)("strong",{parentName:"li"},"directory")," that you want to share. Based on the example above, it could be e.g. ",(0,o.kt)("inlineCode",{parentName:"li"},"/mnt/data/your data folder/user1 folder")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"/mnt/data/your data folder/Data exchange folder")),(0,o.kt)("li",{parentName:"ol"},"Type in the ",(0,o.kt)("strong",{parentName:"li"},"Share name")," that you want to use. It should most likely have the same name like the folder that you want to share. Please note, that spaces are not supported. For e.g. ",(0,o.kt)("inlineCode",{parentName:"li"},"user1 folder")," you would thus need to use ",(0,o.kt)("inlineCode",{parentName:"li"},"user1_folder")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"user1-folder")," as name"),(0,o.kt)("li",{parentName:"ol"},"Now ",(0,o.kt)("strong",{parentName:"li"},"select the SMB-users")," that shall get ",(0,o.kt)("strong",{parentName:"li"},"access")," to the share. If it is a ",(0,o.kt)("inlineCode",{parentName:"li"},"user folder"),", you should only share it with the corresponding user. If it is a ",(0,o.kt)("inlineCode",{parentName:"li"},"Data exchange folder"),", you should share it with all users that shall get access to the folder."),(0,o.kt)("li",{parentName:"ol"},"Now select if the share shall be ",(0,o.kt)("strong",{parentName:"li"},"writeable"),", which you should most likely answer with ",(0,o.kt)("inlineCode",{parentName:"li"},"Yes")),(0,o.kt)("li",{parentName:"ol"},"After restarting Samba, the SMB-share should be successfully created!"),(0,o.kt)("li",{parentName:"ol"},"Select that you ",(0,o.kt)("strong",{parentName:"li"},"want to mount")," the same directory to Nextcloud as local storage (you are making the path that you've chosen in the beginning accessible in Nextcloud this way)"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("div",{parentName:"li",className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"user-folders")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"In the case of a ",(0,o.kt)("inlineCode",{parentName:"p"},"user folder"),", you will now be asked if you want to make the selected directory the ",(0,o.kt)("strong",{parentName:"p"},"root folder in Nextcloud")," for the selected user, which you should in most cases ",(0,o.kt)("strong",{parentName:"p"},"confirm")," by pressing ",(0,o.kt)("inlineCode",{parentName:"p"},"[ENTER]"),".",(0,o.kt)("br",null),(0,o.kt)("br",null),"\n(This will only be shown to you in the case of a ",(0,o.kt)("inlineCode",{parentName:"p"},"user folder"),", not for ",(0,o.kt)("inlineCode",{parentName:"p"},"Data exchange folders")," and also not if you've made the directory ",(0,o.kt)("strong",{parentName:"p"},"read only"),". Only select ",(0,o.kt)("inlineCode",{parentName:"p"},"[NO]")," here if you've already made another directory the root folder for the selected user before.)")))),(0,o.kt)("li",{parentName:"ol"},"Now everything should get set up automatically"),(0,o.kt)("li",{parentName:"ol"},"Enabling Inotify is ",(0,o.kt)("strong",{parentName:"li"},"not")," recommended and normally not necessary")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Now repeat that method for the whole list that you've made, starting at point 2.")),(0,o.kt)("p",null,"After you've done with all shares, you can exit the SMB-server script by selecting ",(0,o.kt)("inlineCode",{parentName:"p"},"Return")," -> ",(0,o.kt)("inlineCode",{parentName:"p"},"Exit")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Please note that you can always change the settings for your mounts in Nextcloud by opening ",(0,o.kt)("inlineCode",{parentName:"p"},"https://yourdomain-or-ipaddress/settings/admin/externalstorages")," with your Nextcloud admin account afterwards."))),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Your users should now be able to access their files and folders using SMB over the local network.",(0,o.kt)("br",null),"\nHere are instructions how to do this in detail: ",(0,o.kt)("a",{parentName:"p",href:"./smb-connect"},"click here")))))}u.isMDXComponent=!0}}]);