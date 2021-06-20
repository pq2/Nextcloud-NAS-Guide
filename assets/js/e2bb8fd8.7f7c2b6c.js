(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8526],{3905:function(e,t,o){"use strict";o.d(t,{Zo:function(){return c},kt:function(){return u}});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(o),u=r,h=d["".concat(l,".").concat(u)]||d[u]||m[u]||a;return o?n.createElement(h,i(i({ref:t},c),{},{components:o})):n.createElement(h,i({ref:t},c))}));function u(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<a;p++)i[p]=o[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},2103:function(e,t,o){"use strict";o.r(t),o.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return p},default:function(){return m}});var n=o(2122),r=o(9756),a=(o(7294),o(3905)),i={id:"restore-files",title:"How to restore files from backup?",sidebar_label:"Restore files"},s=void 0,l={unversionedId:"restore-files",id:"restore-files",isDocsHomePage:!1,title:"How to restore files from backup?",description:"It can happen that you need to restore some files from a backup. This is especially useful if you want to restore some private files. Hint: if your system is broken and something doesn't work correctly, you should follow How to restore the system from a backup",source:"@site/docs/restore-files.md",sourceDirName:".",slug:"/restore-files",permalink:"/Nextcloud-NAS-Guide/docs/restore-files",editUrl:"https://github.com/szaimen/Nextcloud-NAS-Guide/edit/main/docs/restore-files.md",version:"current",frontMatter:{id:"restore-files",title:"How to restore files from backup?",sidebar_label:"Restore files"},sidebar:"docs",previous:{title:"Create new users after initial setup",permalink:"/Nextcloud-NAS-Guide/docs/create-new-users"},next:{title:"Restore system",permalink:"/Nextcloud-NAS-Guide/docs/restore-system"}},p=[{value:"Preparations",id:"preparations",children:[]},{value:"Execution",id:"execution",children:[]}],c={toc:p};function m(e){var t=e.components,o=(0,r.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"It can happen that you need to restore some files from a backup. This is especially useful if you want to restore some private files. Hint: if your system is broken and something doesn't work correctly, you should follow ",(0,a.kt)("a",{parentName:"p",href:"./restore-system"},"How to restore the system from a backup")),(0,a.kt)("h3",{id:"preparations"},"Preparations"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Install Remotedesktop (",(0,a.kt)("a",{parentName:"li",href:"./remotedesktop"},"instructions"),")")),(0,a.kt)("h3",{id:"execution"},"Execution"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Run over CLI:",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"sudo bash /var/scripts/not-supported.sh\n"))),(0,a.kt)("li",{parentName:"ol"},"Choose ",(0,a.kt)("inlineCode",{parentName:"li"},"Backup Viewer")),(0,a.kt)("li",{parentName:"ol"},"Confirm that you want to view the content of your backups"),(0,a.kt)("li",{parentName:"ol"},"Choose ",(0,a.kt)("inlineCode",{parentName:"li"},"Remotedesktop")," if you get asked which way do you prefer of showing your backups."),(0,a.kt)("li",{parentName:"ol"},"If both backup drives are connected, ",(0,a.kt)("strong",{parentName:"li"},"select the backup drive")," that you want to view backups from (most likely the daily backup drive)"),(0,a.kt)("li",{parentName:"ol"},"Now you should see the advice ",(0,a.kt)("strong",{parentName:"li"},"how to use Remotedesktop")," to access your backup files. Simply leave this window open for now! (",(0,a.kt)("strong",{parentName:"li"},"don't")," press ",(0,a.kt)("inlineCode",{parentName:"li"},"[ENTER]")," to continue here, yet! If you should do this by mistake, you need to restart at step 1 again.)"),(0,a.kt)("li",{parentName:"ol"},"Connect to your server via RDP (",(0,a.kt)("a",{parentName:"li",href:"./rdp-connect"},"instructions"),")"),(0,a.kt)("li",{parentName:"ol"},"When you are connected, open a ",(0,a.kt)("inlineCode",{parentName:"li"},"terminal")," in the Remotedesktop session "),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("div",{parentName:"li",className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"File Manager")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"This is useful if you just want to inspect some files from backup or restore some files from the backup. If you need to restore complete folders, folder sync makes more sense. See below."),(0,a.kt)("ol",{parentName:"div"},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Copy and paste")," or type into the terminal: ",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"xhost +si:localuser:root && sudo nautilus /tmp/borg\n"))),(0,a.kt)("li",{parentName:"ol"},"Now, after entering your password, you should see the file manager with all available backup archives "),(0,a.kt)("li",{parentName:"ol"},"You are now free to navigate through them, ",(0,a.kt)("strong",{parentName:"li"},"open files and restore")," them from the backup to the original directory (You can open a second file manager window by pressing ",(0,a.kt)("inlineCode",{parentName:"li"},"[CTRL] + [n]")," which makes it easier to copy files/folders between different locations)"),(0,a.kt)("li",{parentName:"ol"},"After you are done, ",(0,a.kt)("strong",{parentName:"li"},"close")," the file manager and the terminal in the RDP-session and exit the Remotedesktop session")))),"or",(0,a.kt)("div",{parentName:"li",className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Folder Sync")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"This is useful if you want to restore complete folders from a backup."),(0,a.kt)("ol",{parentName:"div"},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Copy and paste")," or type into the terminal: ",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"xhost +si:localuser:root && sudo grsync\n"))),(0,a.kt)("li",{parentName:"ol"},"Now, after entering your password, you should see Grsync which is a graphical User Interface for rsync - a Linux sync tool."),(0,a.kt)("li",{parentName:"ol"},"First, select your source directory by typing ",(0,a.kt)("inlineCode",{parentName:"li"},"/tmp/borg/")," into the first input box and clicking on ",(0,a.kt)("inlineCode",{parentName:"li"},"Open")," (next to the 1st input field). You will now see all available archives and should select a specific folder inside an archive. An example would look like this: ",(0,a.kt)("inlineCode",{parentName:"li"},"/tmp/borg/YYYYMMdd_hhmmss-NcVM-mnt-data-directory/mnt/data/subfolder"),". Make sure that after choosing the folder, you enter a slash ",(0,a.kt)("inlineCode",{parentName:"li"},"/")," at the end of the source directory, so that you sync the content of this folder and not the folder itself. This example would need look like this: ",(0,a.kt)("inlineCode",{parentName:"li"},"/tmp/borg/YYYYMMdd_hhmmss-NcVM-mnt-data-directory/mnt/data/subfolder/"),"."),(0,a.kt)("li",{parentName:"ol"},"Now, select your destination directory by typing ",(0,a.kt)("inlineCode",{parentName:"li"},"/mnt/data/")," (or any other path) into the second input box and clicking on ",(0,a.kt)("inlineCode",{parentName:"li"},"Open")," (next to the 2nd input field). Then you can select a subfolder that you want to sync. One example is: ",(0,a.kt)("inlineCode",{parentName:"li"},"/mnt/data/subfolder"),"."),(0,a.kt)("li",{parentName:"ol"},"Now adjust the rsync settings to fit your sync usecase. For restoring the complete source directory into the destination directory, the following options are recommended to be enabled (all other options should be disabled):",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u2611 Preserve Time"),(0,a.kt)("li",{parentName:"ul"},"\u2611 Preserve owner"),(0,a.kt)("li",{parentName:"ul"},"\u2611 Delete on destination"),(0,a.kt)("li",{parentName:"ul"},"\u2611 Verbose"),(0,a.kt)("li",{parentName:"ul"},"\u2611 Preserve permissions"),(0,a.kt)("li",{parentName:"ul"},"\u2611 Preserve group"),(0,a.kt)("li",{parentName:"ul"},"\u2611 Do not leave filesystem"),(0,a.kt)("li",{parentName:"ul"},"\u2611 Show transfer progress"))),(0,a.kt)("li",{parentName:"ol"},"Now, click on the \u2139 button (with the ",(0,a.kt)("strong",{parentName:"li"},"information icon"),") to start the ",(0,a.kt)("inlineCode",{parentName:"li"},"dry-run"),". This will check which files/folders are going to be modified/deleted/created but not start the sync process, yet. A popup should open that shows files/folders that are going to be modified/deleted/created."),(0,a.kt)("li",{parentName:"ol"},"If you are okay with the result, you can click on the button on the right, right next to the \u2139 button (the button with ",(0,a.kt)("strong",{parentName:"li"},"two gearwheels"),") to start the sync process."),(0,a.kt)("li",{parentName:"ol"},"After you are done, ",(0,a.kt)("strong",{parentName:"li"},"close")," Grsync and the terminal in the RDP-session and exit the Remotedesktop session"))))),(0,a.kt)("li",{parentName:"ol"},"The last step is to exit the Backup Viewer script by pressing ",(0,a.kt)("inlineCode",{parentName:"li"},"[ENTER]"),(0,a.kt)("div",{parentName:"li",className:"admonition admonition-caution alert alert--warning"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"It is crucial that you exit the Backup Viewer script correctly. Otherwise there might be problems on the next regular backup!")))),(0,a.kt)("li",{parentName:"ol"},"It should now report, that the backup and drive was successfully unmounted.")))}m.isMDXComponent=!0}}]);