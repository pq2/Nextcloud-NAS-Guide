(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{135:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return b}));var a=n(3),r=n(7),o=(n(0),n(149)),i={id:"ubuntu",title:"How to set up Ubuntu?",sidebar_label:"Ubuntu"},s={unversionedId:"ubuntu",id:"ubuntu",isDocsHomePage:!1,title:"How to set up Ubuntu?",description:"You need an OS for you server and we've chosen the latest Ubuntu LTS release for you. Here is how it should get installed and configured.",source:"@site/docs/ubuntu.md",slug:"/ubuntu",permalink:"/Nextcloud-NAS-Guide/docs/ubuntu",editUrl:"https://github.com/szaimen/Nextcloud-NAS-Guide/edit/main/docs/ubuntu.md",version:"current",sidebar_label:"Ubuntu",sidebar:"docs",previous:{title:"How to configure the BIOS/UEFI?",permalink:"/Nextcloud-NAS-Guide/docs/bios-uefi"},next:{title:"How to connect to your server over SSH?",permalink:"/Nextcloud-NAS-Guide/docs/ssh"}},c=[],l={toc:c};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"You need an OS for you server and we've chosen the latest Ubuntu LTS release for you. Here is how it should get installed and configured."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"},"Download")," the latest Ubuntu Server 20.04.1 LTS image by clicking ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"http://www.releases.ubuntu.com/20.04/ubuntu-20.04.1-live-server-amd64.iso"}),"here")," (this might take 30min because of slow download servers)"),Object(o.b)("li",{parentName:"ol"},"Use the already downloaded image to create a bootable USB-stick by following ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://ubuntu.com/tutorials/create-a-usb-stick-on-windows"}),"this guide")," (the guide is for Windows, but guides for macOS and Ubuntu are referenced there)"),Object(o.b)("li",{parentName:"ol"},"Connect a ",Object(o.b)("strong",{parentName:"li"},"LAN-cable")," to your server"),Object(o.b)("li",{parentName:"ol"},"Connect the ",Object(o.b)("strong",{parentName:"li"},"USB-stick")," to your server and ",Object(o.b)("strong",{parentName:"li"},"power the server on"),". The server should then automatically boot from the USB-stick"),Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"},"Since it is necessary that you configure certain things correctly, we have prepared a slideshow which makes it easier for you to configure Ubuntu correctly. Please click ",Object(o.b)("a",Object(a.a)({parentName:"strong"},{href:"https://szaimen.github.io/Nextcloud-NAS-Guide/ubuntu"}),"here")," to start the slideshow. Otherwise, just continue with the steps below")),Object(o.b)("li",{parentName:"ol"},"Select the correct ",Object(o.b)("strong",{parentName:"li"},"language")," for the installer"),Object(o.b)("li",{parentName:"ol"},"Choose to ",Object(o.b)("strong",{parentName:"li"},"Continue without updating")," the installer"),Object(o.b)("li",{parentName:"ol"},"Select the correct ",Object(o.b)("strong",{parentName:"li"},"Keyboard layout"),". This is has great importance!"),Object(o.b)("li",{parentName:"ol"},"Just use the defaults in ",Object(o.b)("strong",{parentName:"li"},"network connections")),Object(o.b)("li",{parentName:"ol"},"Don't configure any ",Object(o.b)("strong",{parentName:"li"},"Proxy address")),Object(o.b)("li",{parentName:"ol"},"Use the default ",Object(o.b)("strong",{parentName:"li"},"Mirror address")),Object(o.b)("li",{parentName:"ol"},"During ",Object(o.b)("strong",{parentName:"li"},"Storage configuration"),", activate the option to ",Object(o.b)("strong",{parentName:"li"},"Encrypt the LVM group with LUKS"),", enter a difficult ",Object(o.b)("strong",{parentName:"li"},"Passphrase"),", confirm it and store it at a safe place.",Object(o.b)("br",null),"\n(Difficult passphrase means at least 16 characters long, containing small and tall letters, digits and special characters)",Object(o.b)("br",null),"\n(",Object(o.b)("strong",{parentName:"li"},"Please note"),": The installer doesn't check if the passwords are equal so please make sure yourself. Alsoy you should only use a password with characters that are the same on a ",Object(o.b)("inlineCode",{parentName:"li"},"QWERTY")," keyboard layout because of a bug in Ubuntu. Here is a link to one: ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://en.wikipedia.org/wiki/QWERTY#/media/File:KB_United_States.svg"}),"click here"),")"),Object(o.b)("li",{parentName:"ol"},"Confirm your ",Object(o.b)("strong",{parentName:"li"},"Storage configuration")),Object(o.b)("li",{parentName:"ol"},"Setup your ",Object(o.b)("strong",{parentName:"li"},"Profile"),": recommended as ",Object(o.b)("strong",{parentName:"li"},"name")," and ",Object(o.b)("strong",{parentName:"li"},"username")," is ",Object(o.b)("inlineCode",{parentName:"li"},"ncadmin"),". Recommended as ",Object(o.b)("strong",{parentName:"li"},"Your server's name")," is ",Object(o.b)("inlineCode",{parentName:"li"},"nextcloud"),". Also type in a ",Object(o.b)("strong",{parentName:"li"},"password"),". This can be simple because you will change it later on, again, but remember it! Please note: The installer doesn't check if the passwords are equal so please make sure yourself!"),Object(o.b)("li",{parentName:"ol"},"Choose to ",Object(o.b)("strong",{parentName:"li"},"Install OpenSSH server")),Object(o.b)("li",{parentName:"ol"},"Do ",Object(o.b)("strong",{parentName:"li"},"not")," install any of ",Object(o.b)("strong",{parentName:"li"},"Featured Server Snaps")),Object(o.b)("li",{parentName:"ol"},"Now wait until Ubuntu is installed and you see the button to ",Object(o.b)("strong",{parentName:"li"},"Reboot"),". Press it to reboot."),Object(o.b)("li",{parentName:"ol"},"You should now remove the Ubuntu USB-stick if not already done and press ",Object(o.b)("inlineCode",{parentName:"li"},"[ENTER]")," to continue."),Object(o.b)("li",{parentName:"ol"},"During the boot process, type in your ",Object(o.b)("strong",{parentName:"li"},"LUKS passphrase")," and press ",Object(o.b)("inlineCode",{parentName:"li"},"[Enter]")," to confirm.",Object(o.b)("br",null),"\n(If it doesn't accept your ",Object(o.b)("strong",{parentName:"li"},"LUKS passphrase")," and you are sure that you enterd it correctly, most likely you experienced an Ubuntu bug. In this case, try to enter your password as if you had an ",Object(o.b)("inlineCode",{parentName:"li"},"QWERTY")," keyboard. Here is one example ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://en.wikipedia.org/wiki/QWERTY#/media/File:KB_United_States.svg"}),"click here"),Object(o.b)("br",null),"\nAdditionally, please make sure, that ",Object(o.b)("inlineCode",{parentName:"li"},"Capslock")," isn't activated.)"),Object(o.b)("li",{parentName:"ol"},"Wait until you see ",Object(o.b)("strong",{parentName:"li"},"Reached target Cloud-init target.")," and press ",Object(o.b)("inlineCode",{parentName:"li"},"[ENTER]")," to return to the login screen"),Object(o.b)("li",{parentName:"ol"},"Now type in your ",Object(o.b)("strong",{parentName:"li"},"username")," (e.g. ",Object(o.b)("inlineCode",{parentName:"li"},"ncadmin"),") and ",Object(o.b)("strong",{parentName:"li"},"pasword")),Object(o.b)("li",{parentName:"ol"},"If everything is correct, you will now see an overview of Ubuntu also containing the IPv4-address of your server.")),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},Object(o.b)("strong",{parentName:"p"},"You will need the ip-address in the next step!")))))}b.isMDXComponent=!0},149:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),b=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=b(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=b(n),d=a,m=u["".concat(i,".").concat(d)]||u[d]||p[d]||o;return n?r.a.createElement(m,s(s({ref:t},l),{},{components:n})):r.a.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);