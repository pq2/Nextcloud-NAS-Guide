(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2635],{3905:function(M,N,j){"use strict";j.d(N,{Zo:function(){return y},kt:function(){return O}});var T=j(7294);function z(M,N,j){return N in M?Object.defineProperty(M,N,{value:j,enumerable:!0,configurable:!0,writable:!0}):M[N]=j,M}function D(M,N){var j=Object.keys(M);if(Object.getOwnPropertySymbols){var T=Object.getOwnPropertySymbols(M);N&&(T=T.filter((function(N){return Object.getOwnPropertyDescriptor(M,N).enumerable}))),j.push.apply(j,T)}return j}function L(M){for(var N=1;N<arguments.length;N++){var j=null!=arguments[N]?arguments[N]:{};N%2?D(Object(j),!0).forEach((function(N){z(M,N,j[N])})):Object.getOwnPropertyDescriptors?Object.defineProperties(M,Object.getOwnPropertyDescriptors(j)):D(Object(j)).forEach((function(N){Object.defineProperty(M,N,Object.getOwnPropertyDescriptor(j,N))}))}return M}function I(M,N){if(null==M)return{};var j,T,z=function(M,N){if(null==M)return{};var j,T,z={},D=Object.keys(M);for(T=0;T<D.length;T++)j=D[T],N.indexOf(j)>=0||(z[j]=M[j]);return z}(M,N);if(Object.getOwnPropertySymbols){var D=Object.getOwnPropertySymbols(M);for(T=0;T<D.length;T++)j=D[T],N.indexOf(j)>=0||Object.prototype.propertyIsEnumerable.call(M,j)&&(z[j]=M[j])}return z}var i=T.createContext({}),u=function(M){var N=T.useContext(i),j=N;return M&&(j="function"==typeof M?M(N):L(L({},N),M)),j},y=function(M){var N=u(M.components);return T.createElement(i.Provider,{value:N},M.children)},t={inlineCode:"code",wrapper:function(M){var N=M.children;return T.createElement(T.Fragment,{},N)}},c=T.forwardRef((function(M,N){var j=M.components,z=M.mdxType,D=M.originalType,i=M.parentName,y=I(M,["components","mdxType","originalType","parentName"]),c=u(j),O=z,e=c["".concat(i,".").concat(O)]||c[O]||t[O]||D;return j?T.createElement(e,L(L({ref:N},y),{},{components:j})):T.createElement(e,L({ref:N},y))}));function O(M,N){var j=arguments,z=N&&N.mdxType;if("string"==typeof M||z){var D=j.length,L=new Array(D);L[0]=c;var I={};for(var i in N)hasOwnProperty.call(N,i)&&(I[i]=N[i]);I.originalType=M,I.mdxType="string"==typeof M?M:z,L[1]=I;for(var u=2;u<D;u++)L[u]=j[u];return T.createElement.apply(null,L)}return T.createElement.apply(null,j)}c.displayName="MDXCreateElement"},3507:function(M,N,j){"use strict";j.r(N),j.d(N,{frontMatter:function(){return L},contentTitle:function(){return I},metadata:function(){return i},assets:function(){return u},toc:function(){return y},default:function(){return c}});var T=j(2122),z=j(9756),D=(j(7294),j(3905)),L={title:"Improve Nextcloud Performance",author:"szaimen",author_title:"Creator of Nextcloud-NAS-Guide",author_url:"https://github.com/szaimen",author_image_url:"https://avatars.githubusercontent.com/u/42591237?s=460&v=4",tags:["news","faq"],description:"Improve Nextcloud Performance",image:"/news/undraw_speed_test_wxl0.svg",hide_table_of_contents:!1},I=void 0,i={permalink:"/Nextcloud-NAS-Guide/news/2021/03/25/improve-performance",source:"@site/news/2021-03-25-improve-performance.md",title:"Improve Nextcloud Performance",description:"Improve Nextcloud Performance",date:"2021-03-25T00:00:00.000Z",formattedDate:"March 25, 2021",tags:[{label:"news",permalink:"/Nextcloud-NAS-Guide/news/tags/news"},{label:"faq",permalink:"/Nextcloud-NAS-Guide/news/tags/faq"}],readingTime:.37,truncated:!0,authors:[{name:"szaimen",title:"Creator of Nextcloud-NAS-Guide",url:"https://github.com/szaimen",imageURL:"https://avatars.githubusercontent.com/u/42591237?s=460&v=4"}],prevItem:{title:"Change update time",permalink:"/Nextcloud-NAS-Guide/news/2021/03/25/change-update-time"},nextItem:{title:"Enable Firewall and Harden SSH",permalink:"/Nextcloud-NAS-Guide/news/2021/03/11/firewall-and-harden-ssh"}},u={authorsImageUrls:[void 0]},y=[],t={toc:y};function c(M){var N=M.components,L=(0,z.Z)(M,["components"]);return(0,D.kt)("wrapper",(0,T.Z)({},t,L,{components:N,mdxType:"MDXLayout"}),(0,D.kt)("p",null,"After a recent switch to new server hardware, I've discovered that Nextcloud wasn't performing better than before although the hardware and software configuration got better by a lot which pointed to a bottleneck somewhere else. Because of my findings, I've decided to create a new FAQ guide how to improve the performance of your Nextcloud installation. You can find it ",(0,D.kt)("a",{parentName:"p",href:"/docs/improve-performance"},"here")),(0,D.kt)("p",null,(0,D.kt)("img",{alt:"Performance",src:j(141).Z})))}c.isMDXComponent=!0},141:function(M,N){"use strict";N.Z="data:image/svg+xml;base64,PHN2ZyBpZD0iZTk1NDNkYWUtZGU0MS00MThmLTkyOTAtMjRhYmI3NDYwZWU5IiBkYXRhLW5hbWU9IkxheWVyIDEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjEwMTIiIGhlaWdodD0iNzk0IiB2aWV3Qm94PSIwIDAgMTAxMiA3OTQiPjx0aXRsZT5zcGVlZCB0ZXN0PC90aXRsZT48cGF0aCBkPSJNNDIzLjMxMDMsMjQ5LjEzNzIxLDMwMy4zODA4LDM0OC41OTU3YTU0LjMxMzQ4LDU0LjMxMzQ4LDAsMSwxLTgzLjUyNSw2OS4yNjc4OUwxMTIuMzM0MTEsNTA3LjAzMjE3LDI4NC42ODk3LDcxNC44NjI3OWwzMTAuOTc2MTktMjU3Ljg5NVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC05NCAtNTMpIiBmaWxsPSIjZjJmMmYyIi8+PHBhdGggZD0iTTExMDYsNTUwLjI2MTc5YzAsMTIyLjgzOTQyLTczLjAyNjA5LDE2NS43MzAzNi0xNjMuMTA4MzMsMTY1LjczMDM2Uzc3OS43ODMzNCw2NzMuMTAxMjEsNzc5Ljc4MzM0LDU1MC4yNjE3OSw5NDIuODkxNjcsMjcxLjE1MTI0LDk0Mi44OTE2NywyNzEuMTUxMjQsMTEwNiw0MjcuNDIyMzYsMTEwNiw1NTAuMjYxNzlaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtOTQgLTUzKSIgZmlsbD0iI2YyZjJmMiIvPjxwb2x5Z29uIHBvaW50cz0iODQyLjk1IDY0NC4yMDEgODQ0LjYyIDU0MS4zOTYgOTE0LjE0MSA0MTQuMjExIDg0NC44ODIgNTI1LjI2OSA4NDUuNjMzIDQ3OS4wNDMgODkzLjU0NyAzODcuMDI2IDg0NS44MzIgNDY2LjgxIDg0NS44MzIgNDY2LjgxMSA4NDcuMTgyIDM4My42NzIgODk4LjQ4OSAzMTAuNDE1IDg0Ny4zOTUgMzcwLjU5OCA4NDguMjM5IDIxOC4xNTEgODQyLjkzNSA0MTkuOTY0IDg0My4zNzEgNDExLjYzOCA3OTEuMjA3IDMzMS43OTMgODQyLjUzNSA0MjcuNjIgODM3LjY3NCA1MjAuNDcyIDgzNy41MyA1MTguMDA3IDc3Ny4zOTQgNDMzLjk4MSA4MzcuMzQ3IDUyNi43MTQgODM2Ljc0IDUzOC4zMjYgODM2LjYzMSA1MzguNSA4MzYuNjggNTM5LjQ1MyA4MjQuMzQ5IDc3NS4wMjYgODQwLjgyNSA3NzUuMDI2IDg0Mi44MDEgNjUzLjM0OCA5MDIuNjA4IDU2MC44NDMgODQyLjk1IDY0NC4yMDEiIGZpbGw9IiMzZjNkNTYiLz48ZWxsaXBzZSBjeD0iNzA3IiBjeT0iNzc3IiByeD0iMjI4IiByeT0iMTciIGZpbGw9IiMzZjNkNTYiLz48cmVjdCB4PSI2OTIiIHdpZHRoPSIzNiIgaGVpZ2h0PSI3ODIiIGZpbGw9IiMzZjNkNTYiLz48cGF0aCBkPSJNMTAwOC40NzMzMiw4MDIuMTExMTVjMCwyMi40Njg1Ni0xMy4zNTY0NCwzMC4zMTM3NS0yOS44MzM4OCwzMC4zMTM3NXEtLjU3MjU3LDAtMS4xNDMzMS0uMDEyNzNjLS43NjM0NS0uMDE2MzYtMS41MTk2Mi0uMDUyNzEtMi4yNjY2OS0uMTAzNjEtMTQuODcwNTctMS4wNTI0NC0yNi40MjM4Ny05LjMwMTE1LTI2LjQyMzg3LTMwLjE5NzQxLDAtMjEuNjI1MTQsMjcuNjM0NDYtNDguOTEyNDIsMjkuNzEwMjYtNTAuOTMxODlsLjAwMzY0LS4wMDM2M2MuMDgtLjA3ODE2LjEyLS4xMTYzMy4xMi0uMTE2MzNTMTAwOC40NzMzMiw3NzkuNjQyNTksMTAwOC40NzMzMiw4MDIuMTExMTVaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtOTQgLTUzKSIgZmlsbD0iIzAwODJjOSIvPjxwYXRoIGQ9Ik05NzcuNTUyNDYsODI4Ljk4NzYybDEwLjkxMTYzLTE1LjI0NjgzLTEwLjkzODksMTYuOTIwOTQtLjAyOTA2LDEuNzUwNDRjLS43NjM0NS0uMDE2MzYtMS41MTk2Mi0uMDUyNzEtMi4yNjY2OS0uMTAzNjFsMS4xNzYwNy0yMi40Nzk0Ni0uMDA5MS0uMTc0NS4wMi0uMDMyNzIuMTEwODgtMi4xMjMwNy0xMC45NjYxOS0xNi45NjI3Nkw5NzYuNTYxOCw4MDUuOTA2NWwuMDI1NDguNDUwNzkuODg4ODMtMTYuOTg0NTYtOS4zODgzOS0xNy41MjgwNyw5LjUwMjkxLDE0LjU0Ny45MjUyLTM1LjIxMjQ0LjAwMzY0LS4xMnYuMTE2MzNsLS4xNTQ1LDI3Ljc2NzE1LDkuMzQ2NjEtMTEuMDA4LTkuMzg0NzgsMTMuNDAwMDYtLjI0NzIsMTUuMjA2ODUsOC43MjY3Ny0xNC41OTQyOS04Ljc2MzEyLDE2LjgzMTg5LS4xMzgxNCw4LjQ1NDEsMTIuNjY5MzQtMjAuMzEyNzctMTIuNzE2NiwyMy4yNjI5WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTk0IC01MykiIGZpbGw9IiMzZjNkNTYiLz48cGF0aCBkPSJNNzQzLjIyNjc2LDc4NS4yOTAxNGwtNi4zODE4LTQuNzQxMjFzLTQuMjI0MzUsMjMuNTk2NTkuNDg5NDksMjcuMTMyLDIyLjM5MDc2LDkuNDI3NjksMjIuMzkwNzYsMTYuNDk4NDYsNDAuMDY3NjgsMTYuNDk4NDUsNDEuMjQ2MTQsNS44OTIzLTMuNTM1MzgtMTYuNDk4NDUtMy41MzUzOC0xNi40OTg0NS0xOC44NTUzOC0xOC44NTUzOC0yMS4yMTIzLTIyLjM5MDc2LTguMjQ5MjMtMTAuNjA2MTUtOC4yNDkyMy0xMC42MDYxNVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC05NCAtNTMpIiBmaWxsPSIjMmYyZTQxIi8+PHBhdGggZD0iTTgzNy41MDM2NCw0OTEuODUzMzRzLS4xNzY3OSwxLjAzNzA1LS40ODMwNiwyLjkzNDM2Yy0uMjgzLDEuNjg1MTktLjY3MTgsNC4wNjU3LTEuMTQzMjIsNy4wMDAwNi00Ljk0OTYyLDMwLjIwNC0xOS4zODU3NywxMTkuMTE4ODYtMTguNDA3NTUsMTIyLjA1MzIyLDEuMTc4NDYsMy41MzUzOCw5LjQyNzY4LDE2LjQ5ODQ1LDAsMjAuMDMzODQtLjkwNzQ0LjM0MTcyLTEuODg1NTEsMS40NDk0OC0yLjkzNDM2LDMuMTkzNThhNjguNDk0MzIsNjguNDk0MzIsMCwwLDAtNC45ODQ4NywxMS43NjEwOWMtNS42MjEyOCwxNi4zMDk4Ni0xMS42MzE1NSw0Mi40MTI4LTE1LjEwNzk1LDYwLjQ5MDM1LTEuNTIwMjYsNy45NDI4OS0yLjU1NzE3LDE0LjMzMDEzLTIuODYzNTgsMTcuNjc2OTJhOS42MTE4Miw5LjYxMTgyLDAsMCwwLS4wMzUzOSwyLjMzMzRjMS4xNzg0Niw0LjcxMzg1LTcuMDcwNzYsMjEuMjEyMy0xMC42MDYxNSwyNS45MjYxNXMtOS40Mjc2OSw5LjQyNzY4LTguMjQ5MjIsMTQuMTQxNTMtMjkuNDYxNTMsMTcuNjc2OTEtMzIuOTk2OTEsOS40Mjc2OS0zLjUzNTM5LTEyLjk2MzA3LTQuNzEzODUtMTUuMzItMi4zNTY5Mi0xOC44NTUzNywzLjUzNTM4LTIxLjIxMjMsMi4zNTY5My00My42MDMsOC4yNDkyMy01MS44NTIyOGMxLjk2Nzk0LTIuNzQ1ODQsNC45NzMwNy0xMi4wNDM5MSw4LjExOTYyLTIzLjIyNzUsMS4yMzcyOS00LjM4Mzg0LDIuNDg2NTMtOS4wNTA1NywzLjcxMjE4LTEzLjcyOSw0Ljk3MzA3LTE5LjE3MzU5LDkuMzgwNS0zOC40NjUsOS4zODA1LTM4LjQ2NUw3NjYuNzk2LDQ4Ny4xMzk1bDY0LjgxNTM2LTguMjQ5MjMsMS42NjE1MywzLjY2NSwzLjMxMTU0LDcuMjcxMDlaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtOTQgLTUzKSIgZmlsbD0iIzJmMmU0MSIvPjxwYXRoIGQ9Ik04NDEuMDM5LDcxOC4xMTc4NnM5LjQyNzY5LTkuNDI3NjgsMTQuMTQxNTMsMCw5LjQyNzY5LDQ1Ljk2LDE3LjY3NjkyLDU0LjIwOTIxLDE4Ljg1NTM3LDQ5LjQ5NTM3LDcuMDcwNzYsNTEuODUyMjktMjQuNzQ3NjgtMy41MzUzOC0yNS45MjYxNC0xMC42MDYxNVM4MjguMDc2LDc2OS45NzAxNSw4MjguMDc2LDc2Ni40MzQ3N3MxNi40OTg0NS0xNi40OTg0NiwxNi40OTg0NS0xNi40OTg0NloiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC05NCAtNTMpIiBmaWxsPSIjMmYyZTQxIi8+PHBhdGggZD0iTTY5Ni4wODgzMiw0MjcuMDM4czE1LjMyLDEzNy44Nzk5NSwxOC44NTUzNywxNTAuODQzLDIyLjM5MDc2LDYyLjQ1ODQzLDI4LjI4MzA3LDcwLjcwNzY2LDQzLjYwMzA2LDc1LjQyMTUxLDQ4LjMxNjksNzguOTU2ODksMTQuMTQxNTQsMTIuOTYzMDcsMTQuMTQxNTQsMTIuOTYzMDcsMTcuNjc2OTEsMTcuNjc2OTIsMjAuMDMzODMsMjEuMjEyMywyMi4zOTA3Ni03LjA3MDc2LDIzLjU2OTIyLTE0LjE0MTUzLTEuMTc4NDYtMTguODU1MzgtMi4zNTY5Mi0yMy41NjkyMiwyLjM1NjkyLTExLjc4NDYxLTEuMTc4NDYtMTUuMzItMjEuMjEyMy0yMS4yMTIzLTIxLjIxMjMtMjkuNDYxNTMtMzAuNjQtNTYuNTY2MTMtNDIuNDI0Ni02Ny4xNzIyOC05LjQyNzY4LTI4LjI4MzA3LTkuNDI3NjgtMjguMjgzMDdWNTExLjg4NzE4bDY0LjgxNTM1LTIwLjAzMzg0cy0zLjUzNTM4LTU2LjU2NjEzLTExLjc4NDYxLTU2LjU2NjEzUzcwOS4wNTEzOSw0MTYuNDMxODMsNjk2LjA4ODMyLDQyNy4wMzhaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtOTQgLTUzKSIgZmlsbD0iIzJmMmU0MSIvPjxjaXJjbGUgY3g9IjY5Ny41NDM2NiIgY3k9IjEzOC4zNDU3NyIgcj0iMzguODg5MjIiIGZpbGw9IiM5ZjYxNmEiLz48cGF0aCBkPSJNNzc4LjU4MDU5LDIyMS45ODU3NnMtNC43MTM4NCwxNy42NzY5MS0xMC42MDYxNSwyMi4zOTA3NiwxNS4zMiwyNC43NDc2OCwxNS4zMiwyNC43NDc2OGw0MC4wNjc2NywyLjM1NjkyLDcuMDcwNzctMjIuMzkwNzZzLTEyLjk2MzA3LTI1LjkyNjE0LTkuNDI3NjktNDIuNDI0NlM3NzguNTgwNTksMjIxLjk4NTc2LDc3OC41ODA1OSwyMjEuOTg1NzZaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtOTQgLTUzKSIgZmlsbD0iIzlmNjE2YSIvPjxwYXRoIGQ9Ik03NjIuMDgyMTQsMjQyLjAxOTU5czEwLjYwNjE1LDEuMTc4NDcsMTIuOTYzMDcsNC43MTM4NSwxOC44NTUzNywxNC4xNDE1MywzMS44MTg0NSwxMS43ODQ2MSwyMS4yMTIzLTUuODkyMzEsMjMuNTY5MjItNC43MTM4NCw3LjA3MDc2LDI1LjkyNjE0LDcuMDcwNzYsMjUuOTI2MTRMODI0LjU0MDU3LDMxNy40NDExbDIuMzU2OTIsMTAzLjcwNDU4LDMuNTM1MzksMjguMjgzMDZzNy4wNzA3Ni05LjQyNzY5LTIxLjIxMjMtMy41MzUzOC02NC44MTUzNi00LjcxMzg1LTc2LjYtNS44OTIzMS0zMS44MTg0NS00LjcxMzg0LTMyLjk5NjkxLTExLjc4NDYxLDMuNTM1MzgtMzIuOTk2OTEsMy41MzUzOC0zMi45OTY5MWwxOC44NTUzOC03OC45NTY4OSwxMS43ODQ2MS00Mi40MjQ2WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTk0IC01MykiIGZpbGw9IiMzZjNkNTYiLz48cGF0aCBkPSJNNzczLjIyOTA4LDIzNi43MDA3MnMtOS45Njg0OC01LjI4NzI4LTEzLjUwMzg3LS41NzM0My00OC4zMTY5LDExLjc4NDYxLTQ4LjMxNjksMTUuMzItOS40Mjc2OSw5OC45OTA3My03LjA3MDc3LDEwNy4yNC00LjcxMzg0LDE3LjY3NjkyLTQuNzEzODQsMTcuNjc2OTJMNjkxLjM3NDQ3LDQxMS43MThzLTIyLjM5MDc2LDY3LjE3MjI4LTEyLjk2MzA3LDY5LjUyOTIsMTcuNjc2OTIsMCwyMS4yMTIzLDAsMi4zNTY5Mi00NC43ODE1MiwxMS43ODQ2MS01Ni41NjYxMywyMi4zOTA3Ni00MS4yNDYxNCwyNC43NDc2OC00Ny4xMzg0NCwzMS44MTg0NS04Ny4yMDYxMiwzMC42NC05Ni42MzM4MVM3NzMuMjI5MDgsMjM2LjcwMDcyLDc3My4yMjkwOCwyMzYuNzAwNzJaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtOTQgLTUzKSIgZmlsbD0iI2QwY2RlMSIvPjxwYXRoIGQ9Ik04MjIuMTgzNjUsMjQyLjAxOTU5czkuNDI3NjksMCwxMC42MDYxNSwyLjM1NjkzLDEyLjk2MzA3LDE3LjY3NjkxLDE3LjY3NjkyLDIxLjIxMjNTODcxLjY3OSwyODQuNDQ0MTksODcxLjY3OSwyODcuOTc5NThzLTM0LjE3NTM3LDI5LjQ2MTUyLTM0LjE3NTM3LDI5LjQ2MTUyLTE0LjE0MTUzLDY5LjUyOTIxLTcuMDcwNzYsOTMuMDk4NDMsMTcuNjc2OTEsODAuMTM1MzUsMTIuOTYzMDcsODMuNjcwNzMtMTUuMzIsNC43MTM4NS0xNS4zMiwwLTcuMDcwNzctNTUuMzg3NjctMTIuOTYzMDgtNjUuOTkzODItMjMuNTY5MjItNzcuNzc4NDMtMTYuNDk4NDUtOTYuNjMzOFM4MjIuMTgzNjUsMjQyLjAxOTU5LDgyMi4xODM2NSwyNDIuMDE5NTlaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtOTQgLTUzKSIgZmlsbD0iI2QwY2RlMSIvPjxwYXRoIGQ9Ik02NjYuNjI2NzksMzU4LjY4NzI0cy0xLjE3ODQ2LDM2LjUzMjI5LDExLjc4NDYxLDU1LjM4NzY3LDIxLjIxMjMsNDAuMDY3NjgsMjEuMjEyMyw0MC4wNjc2OCwyMS4yMTIzLTUuODkyMzEsMjQuNzQ3NjgtMTIuOTYzMDgsMjUuOTI2MTUtMS4xNzg0NiwyNS45MjYxNS0zLjUzNTM4UzcyMy4xOTI5Miw0MjMuNTAyNiw3MjAuODM2LDQyMS4xNDU2OHMtMTAuNjA2MTUtMi4zNTY5My0xNS4zMi03LjA3MDc3LTUuODkyMzEtMTUuMzItNS44OTIzMS0xNS4zMmwtNC43MTM4NC0zMC42NFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC05NCAtNTMpIiBmaWxsPSIjOWY2MTZhIi8+PHBhdGggZD0iTTc2NC43NTg4MywxNjcuMzY3NDljLTIuOTkxOC0uMjcxNzYtNi4wNzczNy0uNTcwNzktOC43MjE0OS0xLjk5Njc1LTUuOTI0NTgtMy4xOTUwOS03LjQ5NTYzLTEyLjI5Mzg3LTIuOTg1NTItMTcuMjkwNjhhMjIuMzQ0LDIyLjM0NCwwLDAsMSw0LjE0MzEzLTMuMzMxNDJsOC45NTc4My02LjA5NzE4YzMuOTYxODYtMi42OTY2NCw4LjAxNzM3LTUuNDM3NDgsMTIuNjM4Mi02LjcwODcxLDQuMTc5NDQtMS4xNDk4LDguNTkzNjQtMS4wMzE2NSwxMi45Mi0uNzYyNzMsOC4zOTg2Mi41MjIsMTYuODQ5MjMsMS42MDAyOCwyNC43NDg2NSw0LjVzMTUuMjY4Miw3Ljc1MDg5LDIwLjA1MjQ2LDE0LjY3MzMzYzcuNTg0NTMsMTAuOTc0Miw3LjY4ODc4LDI1Ljc3NDg2LDMuNTExNDUsMzguNDQ0cy0xMi4xMTIzOCwyMy43MDEzOS0xOS45MzExLDM0LjUxbC00LjA1NjkyLTE5Ljc5NDhjLS4zNjEzNS0xLjc2MzA5LS44Mjg2NC0zLjY5NTQzLTIuMjk1LTQuNzM4OS0zLjY0NDU0LTIuNTkzNDctOC4xMDI2NywyLjczMTQ0LTEyLjU3NTY1LDIuNjk2OTItMi44NzQwOC0uMDIyMTgtNS4yODcwNi0yLjM4NjEyLTYuMzc2MjUtNS4wNDU5MXMtMS4xNjA5LTUuNjA1MjktMS40MTI5LTguNDY4MzhjLS41MzM3NC02LjA2NDItMi42NTMzNS0xNC41MDIwNi04LjM5NjE5LTE3Ljg0NjUxQzc3OS42MjgxMiwxNjYuOTkzMzEsNzcwLjc3NCwxNjcuOTEzODcsNzY0Ljc1ODgzLDE2Ny4zNjc0OVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC05NCAtNTMpIiBmaWxsPSIjMmYyZTQxIi8+PHBhdGggZD0iTTc2Ni45NDA0LDQ5Mi44MDQ0NnMzLjk4MDE5LDExNS4xMjcyOSw2LjMzNzEyLDExOC42NjI2OCwwLTExOS4wMjQ1NywwLTExOS4wMjQ1N1oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC05NCAtNTMpIiBvcGFjaXR5PSIwLjEiLz48cGF0aCBkPSJNNzIwLjgzNiwyNTEuNDQ3MjhoLTkuNDI3NjlzLTQwLjA2NzY4LDU0LjIwOTIxLTM1LjM1MzgzLDU3Ljc0NDU5LDAsMTIuOTYzMDgsMCwxMi45NjMwOGwtOS40Mjc2OSwxNy42NzY5MXMtMTEuNzg0NjEsMTAuNjA2MTUtOC4yNDkyMywxMi45NjMwNyw4LjI0OTIzLDExLjc4NDYxLDguMjQ5MjMsMTEuNzg0NjEsMjMuNTY5MjItMy41MzUzOCwzMC42NCwxMC42MDYxNWwxNS4yODQ0Mi0xOS4yOTU2M1oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC05NCAtNTMpIiBmaWxsPSIjZDBjZGUxIi8+PHBhdGggZD0iTTgyOC4wNzYsMzUyLjc5NDkzcy0yNS45MjYxNSwxLjE3ODQ3LTU1LjM4NzY3LTE3LjY3NjkxTDc0My4yMjY3NiwzMjIuMTU1cy0yNS45MjYxNC00MC4wNjc2OC0yOC4yODMwNy0zMi45OTY5MSwzLjUzNTM5LDIxLjIxMjMsMy41MzUzOSwyMS4yMTIzUzY4Mi45MjQyMywzMjYuODI1MTUsNjgyLDMyOXMxOS45ODA2Mi0zLjMwOTY3LDE5Ljk4MDYyLTMuMzA5NjctMy41MzUzOCwyMi4zOTA3NiwxNi40OTg0NiwyMy41NjkyMiwyNS45MjYxNC0zLjUzNTM4LDI1LjkyNjE0LTMuNTM1MzgsODQuODQ5Miw3MC43MDc2Niw5OC45OTA3Myw0OC4zMTY5UzgyOC4wNzYsMzUyLjc5NDkzLDgyOC4wNzYsMzUyLjc5NDkzWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTk0IC01MykiIGZpbGw9IiM5ZjYxNmEiLz48cGF0aCBkPSJNODU4LjcxNTk0LDI4My4yNjU3M2wxMi45NjMwNyw0LjcxMzg1djM1LjM1MzgzbDQuNzEzODUsNy4wNzA3NnMtMS4xNzg0NiwxNC4xNDE1NC00LjcxMzg1LDE3LjY3NjkyLTEwLjYwNjE0LDIuMzU2OTItOC4yNDkyMiwxMC42MDYxNWE0NC42NjcsNDQuNjY3LDAsMCwxLDEuMTc4NDYsMTYuNDk4NDVzLTIxLjIxMjMsMjcuMTA0NjEtMjIuMzkwNzYsMjMuNTY5MjMtMTcuNjc2OTItNDcuMTM4NDUtMjAuMDMzODQtNDcuMTM4NDUsMjMuNTY5MjItNjguMzUwNzQsMjMuNTY5MjItNjguMzUwNzRaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtOTQgLTUzKSIgZmlsbD0iI2QwY2RlMSIvPjxwYXRoIGQ9Ik03MDMuNzQ4MzEsNDYxLjgwMjU4cy0xMi4xODUtMTEuNzg0NjEtNi4wOTI1MS0xMi4zNzM4NCwyNy4zMDQ4MS0xMi4zNzM4NCwzMC44NDAyLTYuNDgxNTNTNzAzLjc0ODMxLDQ2MS44MDI1OCw3MDMuNzQ4MzEsNDYxLjgwMjU4WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTk0IC01MykiIGZpbGw9IiMyZjJlNDEiLz48cGF0aCBkPSJNNTE3LjcxNjY3LDgwOEEyMjYuOTIyMTksMjI2LjkyMjE5LDAsMCwwLDU1MCw2OTFjMC0xMjUuOTIxLTEwMi4wNzkxLTIyOC0yMjgtMjI4Uzk0LDU2NS4wNzksOTQsNjkxYTIyNi45MjIxOSwyMjYuOTIyMTksMCwwLDAsMzIuMjgzMzMsMTE3WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTk0IC01MykiIGZpbGw9IiMzZjNkNTYiLz48Y2lyY2xlIGN4PSIyMjgiIGN5PSI2MjMiIHI9IjIyIiBmaWxsPSIjMDA4MmM5Ii8+PGNpcmNsZSBjeD0iNTMiIGN5PSI2NTkiIHI9IjExIiBmaWxsPSIjMDA4MmM5Ii8+PGNpcmNsZSBjeD0iNTkuNDU0MzUiIGN5PSI1NjMuNzI2MzYiIHI9IjExIiBmaWxsPSIjMDA4MmM5Ii8+PGNpcmNsZSBjeD0iMTE0LjA1NjM2IiBjeT0iNDg1LjM4NTE1IiByPSIxMSIgZmlsbD0iIzAwODJjOSIvPjxjaXJjbGUgY3g9IjIwMS4yMDgxMyIgY3k9IjQ0Ni4zNTU3NCIgcj0iMTEiIGZpbGw9IiMwMDgyYzkiLz48Y2lyY2xlIGN4PSIyOTYuMDEzNDEiIGN5PSI0NTcuNzg3NDgiIHI9IjExIiBmaWxsPSIjMDA4MmM5Ii8+PGNpcmNsZSBjeD0iMzcxLjM4OTYxIiBjeT0iNTE2LjQxNDcyIiByPSIxMSIgZmlsbD0iIzAwODJjOSIvPjxjaXJjbGUgY3g9IjQwNS44MDQzNiIgY3k9IjYwNS40ODk2OSIgcj0iMTEiIGZpbGw9IiMwMDgyYzkiLz48Y2lyY2xlIGN4PSIzODkuNDI2NTYiIGN5PSI2OTkuNTY2NzUiIHI9IjExIiBmaWxsPSIjMDA4MmM5Ii8+PGxpbmUgeDE9IjIyOCIgeTE9IjYyMyIgeDI9IjM0MSIgeTI9IjUzNyIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDA4MmM5IiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iNCIvPjxjaXJjbGUgY3g9IjMzMi41NDIwNyIgY3k9IjE5OC4zNTIiIHI9IjE0Ljc1NTU2IiBmaWxsPSJub25lIiBzdHJva2U9IiMzZjNkNTYiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIyIi8+PGNpcmNsZSBjeD0iNDE2LjU0MjA3IiBjeT0iMzcwLjM1MiIgcj0iMTQuNzU1NTYiIGZpbGw9IiMzZjNkNTYiLz48Y2lyY2xlIGN4PSIxNjguMjIyOTEiIGN5PSIzMzEuMTY1NTIiIHI9IjQyLjc3NzA5IiBmaWxsPSIjZjJmMmYyIi8+PC9zdmc+"}}]);