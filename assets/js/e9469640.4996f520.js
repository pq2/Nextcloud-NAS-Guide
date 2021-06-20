(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8541],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return d},kt:function(){return m}});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(a),m=o,h=u["".concat(s,".").concat(m)]||u[m]||c[m]||r;return a?n.createElement(h,i(i({ref:t},d),{},{components:a})):n.createElement(h,i({ref:t},d))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},1096:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return p},default:function(){return c}});var n=a(2122),o=a(9756),r=(a(7294),a(3905)),i={id:"pivpn",title:"How to install PiVPN?",sidebar_label:"PiVPN"},l=void 0,s={unversionedId:"pivpn",id:"pivpn",isDocsHomePage:!1,title:"How to install PiVPN?",description:"PiVPN is an easy way to create a VPN server that lets you access your home network from away and also lets you use the Pi-hole when connected via VPN as DNS-server so that you get ads- and tracker-blocking also when you are not at home.",source:"@site/docs/pivpn.md",sourceDirName:".",slug:"/pivpn",permalink:"/Nextcloud-NAS-Guide/docs/pivpn",editUrl:"https://github.com/szaimen/Nextcloud-NAS-Guide/edit/main/docs/pivpn.md",version:"current",frontMatter:{id:"pivpn",title:"How to install PiVPN?",sidebar_label:"PiVPN"},sidebar:"docs",previous:{title:"Pi-hole",permalink:"/Nextcloud-NAS-Guide/docs/pi-hole"},next:{title:"Change update time",permalink:"/Nextcloud-NAS-Guide/docs/change-update-time"}},p=[{value:"Preparation",id:"preparation",children:[]},{value:"Installation",id:"installation",children:[]},{value:"What to do now?",id:"what-to-do-now",children:[]}],d={toc:p};function c(e){var t=e.components,a=(0,o.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"PiVPN is an easy way to create a VPN server that lets you access your home network from away and also lets you use the Pi-hole when connected via VPN as DNS-server so that you get ads- and tracker-blocking also when you are not at home."),(0,r.kt)("h3",{id:"preparation"},"Preparation"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Install Pi-hole (else, you will not be able to use Pi-hole as DNS-server when connected over VPN) (",(0,r.kt)("a",{parentName:"li",href:"./pi-hole"},"instructions"),")"),(0,r.kt)("li",{parentName:"ol"},"Port-forward port 51820 UDP to your server (",(0,r.kt)("a",{parentName:"li",href:"./port-forwarding"},"instructions"),")"),(0,r.kt)("li",{parentName:"ol"},"Create a Backup (",(0,r.kt)("a",{parentName:"li",href:"./manual-backup"},"instructions"),")\n(better to be prepared, since we use the scripts provided by the PiVPN project and something could go wrong. You never now!)")),(0,r.kt)("h3",{id:"installation"},"Installation"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Run over CLI:",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"sudo bash /var/scripts/not-supported.sh\n"))),(0,r.kt)("li",{parentName:"ol"},"Choose ",(0,r.kt)("inlineCode",{parentName:"li"},"PiVPN")),(0,r.kt)("li",{parentName:"ol"},"Choose to install PiVPN"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Selected")," that you have created a Backup"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Don't")," use ",(0,r.kt)("inlineCode",{parentName:"li"},"UPNP")," to open the required port since you've already done this manually"),(0,r.kt)("li",{parentName:"ol"},"Wait until a few things are installed"),(0,r.kt)("li",{parentName:"ol"},"Select the ",(0,r.kt)("strong",{parentName:"li"},"interface")," for PiVPN (should be called ",(0,r.kt)("inlineCode",{parentName:"li"},"eno1")," or something like that)"),(0,r.kt)("li",{parentName:"ol"},"Wait until a few more things are installed (and create an UEFI password, if you are asked to do so)"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Confirm")," that you want to use Pi-hole as DNS-server for PiVPN"),(0,r.kt)("li",{parentName:"ol"},"Wait until it reports that PiVPN was set up correctly and read through the information"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Confirm")," that you want to reboot now")),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"It can happen that your server won't startup automatically at this point, if you had to create an UEFI password during the installation. If this happens, do the following steps:"),(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol"},"On the server startup, you should see the ",(0,r.kt)("inlineCode",{parentName:"li"},"MOK-management-console")),(0,r.kt)("li",{parentName:"ol"},"Select ",(0,r.kt)("inlineCode",{parentName:"li"},"Enroll MOK")),(0,r.kt)("li",{parentName:"ol"},"Select ",(0,r.kt)("inlineCode",{parentName:"li"},"Yes")," when asked ",(0,r.kt)("inlineCode",{parentName:"li"},"Enroll the Key(s)?")),(0,r.kt)("li",{parentName:"ol"},"Enter the UEFI password, that you've created"),(0,r.kt)("li",{parentName:"ol"},"reboot")),(0,r.kt)("p",{parentName:"div"},"Now your server should automatically boot again."))),(0,r.kt)("h3",{id:"what-to-do-now"},"What to do now?"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"As suggested, to add a new VPN-profile, you should run the following over CLI and follow the instructions:",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"sudo pivpn -a\n"))),(0,r.kt)("li",{parentName:"ul"},"After you've added all needed profiles (you need one per device, don't reuse profiles on different devices!), you can show them by running the following over CLI and follow the instructions:",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"sudo pivpn -qr\n")),"  You should finally see a ",(0,r.kt)("strong",{parentName:"li"},"QR code"),", that you can scan with the ",(0,r.kt)("strong",{parentName:"li"},"Wireguard mobile app")," that you can download in the ",(0,r.kt)("inlineCode",{parentName:"li"},"Play Store")," on Android and ",(0,r.kt)("inlineCode",{parentName:"li"},"App Store")," on iOS"),(0,r.kt)("li",{parentName:"ul"},"After scanning the QR-code, the VPN-profile should be added to the Wireguard app and you should be able to connect to your home network from anywhere.")),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"If you've chosen to use Pi-hole as DNS server for the VPN connection during the setup, it is possible that your smartphones Nextcloud app won't be able to connect to your Nextcloud when it is connected via Wireguard to your home network. To fix this, you should create a ",(0,r.kt)("inlineCode",{parentName:"p"},"Local DNS Record\xb4 in your Pi-hole that points "),"yourdomain.com",(0,r.kt)("inlineCode",{parentName:"p"},"to the IP-address"),"10.6.0.1`. Afterwards it should work."))),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Notebooks")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"You can also use those profiles on your Notebook to get access to your home network via VPN.",(0,r.kt)("br",null),"\nThe simplest way to do this is the following:"),(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol"},"Create a new VPN profile for your Notebook and show its QR code (as instructed above)"),(0,r.kt)("li",{parentName:"ol"},"Scan the QR code of this profile with your smartphones Wireguard app"),(0,r.kt)("li",{parentName:"ol"},"Export all Tunnels from your smartphones Wireguard app settings"),(0,r.kt)("li",{parentName:"ol"},"Copy the zip file to a location where your Notebook has access to",(0,r.kt)("br",null),"\n(Best is to use SMB for this. It should be a directory that doesn't get synchronized via the Nextcloud Desktop client and that is not shared with another user.) "),(0,r.kt)("li",{parentName:"ol"},"Import the correct tunnel into the Wireguard Desktop app from there. "),(0,r.kt)("li",{parentName:"ol"},"It is recommended to delete the zip file from your phone and any place where you have copied it now since the profile files are very dangerous if an attacker gets them. So make sure the profiles only exist in the Wireguard apps afterwards. (And don't forget the trash bins!)")))))}c.isMDXComponent=!0}}]);