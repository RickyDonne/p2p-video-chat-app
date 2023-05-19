(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5301:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(333)}])},3591:function(e,t,r){"use strict";r.d(t,{Z:function(){return c}});var n=r(5893),a=r(4184),o=r.n(a);r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function c(e){var t=e.color,r=void 0===t?"indigo":t,a=e.icon,c=e.fill,l=void 0!==c&&c,u=e.square,d=void 0!==u&&u,h=e.text,f=s(e,["color","icon","fill","square","text"]),m=o()("flex flex-row space-x-2 items-center justify-center rounded-md p-2 px-4 text-white focus:outline focus:outline-yellow-500 relative",{"w-full":l,"w-10 h-10":d,"bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700":"indigo"===r,"bg-slate-700 hover:bg-slate-600 active:bg-slate-500":"slate"===r,"bg-red-500 hover:bg-red-600 active:bg-red-700":"red"===r});return(0,n.jsxs)("button",function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){i(e,t,r[t])}))}return e}({type:"button",className:m},f,{children:[a&&a,(0,n.jsx)("span",{children:h})]}))}},9896:function(e,t,r){"use strict";r.d(t,{Z:function(){return l}});var n=r(5893),a=r(4184),o=r.n(a),i=r(7294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function l(e){var t=e.borderless,r=void 0!==t&&t,a=e.handleChange,l=e.id,u=e.placeholder,d=e.value,h=c(e,["borderless","handleChange","id","placeholder","value"]),f=i.useCallback((function(e){a(e.target.value)}),[a]),m=o()("p-2 text-black rounded-md w-full border border-slate-300 focus:outline focus:outline-yellow-500",{"border-none":r});return(0,n.jsx)("input",function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){s(e,t,r[t])}))}return e}({className:m,id:l,onChange:f,placeholder:u,type:"text",value:d},h))}},1064:function(e,t,r){"use strict";r.d(t,{Q6:function(){return o},zD:function(){return i},dr:function(){return s}});var n=r(9835),a=function(e,t){return n.unique("".concat(e).concat(t))},o=function(e){var t=(+new Date).toString(36).slice(-5);return t+a(t,e)},i=function(e,t){try{var r=e.substr(0,5);if(e.substr(5)!==a(r,t))throw new Error("Bad room hash")}catch(n){throw console.error(n),new Error("Invalid room code")}},s=function(){return Math.random().toString(16).substr(2,8)}},333:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return k}});var n=r(5893),a=r(7294);function o(e){var t=e.children;return(0,n.jsx)("section",{className:"py-20 px-4 sm:px-20",children:(0,n.jsx)("div",{className:"max-w-screen-md m-auto",children:t})})}function i(e){var t=e.title;return(0,n.jsx)("h5",{className:"mb-5 font-medium text-2xl",children:t})}function s(e){var t=e.children;return(0,n.jsx)("p",{className:"mb-5",children:t})}function c(){return(0,n.jsx)("div",{className:"text-slate-300",children:(0,n.jsx)(o,{children:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i,{title:"About"}),(0,n.jsx)(s,{children:"Peer-to-peer video conferencing, often shortened to P2P, refers to a direct connection between two or more devices for audio and video data streams in real-time. Enabled by WebRTC, that means when you dial in to a peer-to-peer video call, your computer is actually \u201ctalking\u201d directly to the other attendees\u2019 computers, with no intermediary."})]})})})}var l=r(3801);function u(e){var t=e.text;return(0,n.jsx)("h2",{className:"mt-16 text-2xl sm:text-3xl text-gray-900 font-extrabold tracking-tight",children:t})}function d(e){var t=e.children;return(0,n.jsx)("p",{className:"mt-4 max-w-3xl space-y-6 text-gray-500",children:t})}function h(e){var t=e.children;return(0,n.jsx)("div",{className:"flex items-center justify-center space-x-2 font-medium text-purple-500 text-xl ring ring-purple-500 rounded-md px-2 py-2 sm:py-4 w-48 sm:w-60",children:t})}function f(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l.BZ6,{width:50,className:"text-yellow-500 hidden sm:block"}),(0,n.jsx)(l.MNJ,{width:40,className:"text-yellow-500 sm:hidden"})]})}function m(){return(0,n.jsx)("div",{className:"bg-white",children:(0,n.jsxs)(o,{children:[(0,n.jsxs)("div",{className:"flex flex-col sm:flex-row sm:space-x-8 space-y-4 sm:space-y-0 justify-center items-center",children:[(0,n.jsx)(h,{children:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l.wl8,{width:24}),(0,n.jsx)("span",{children:"Create a room"})]})}),(0,n.jsx)(f,{}),(0,n.jsx)(h,{children:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l.aAc,{width:24}),(0,n.jsx)("span",{children:"Share the link"})]})}),(0,n.jsx)(f,{}),(0,n.jsx)(h,{children:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l.y3v,{width:24}),(0,n.jsx)("span",{children:"Chat!"})]})})]}),(0,n.jsx)(u,{text:"P2P video chat is more secure than server-based solutions. No centralised server can be completely safe from attacks. "}),(0,n.jsx)(d,{children:(0,n.jsx)(n.Fragment,{children:"End-to-end encryption can enhance security further, ensuring that only authorised parties can access the video stream."})}),(0,n.jsx)(u,{text:"Unique, secure rooms."}),(0,n.jsx)(d,{children:(0,n.jsx)(n.Fragment,{children:'Rooms are generated by creating a unique encrypted hash of the room name, making room links effectively unguessable. Rooms created with the same name will be treated as separate rooms, keeping you safe from "call bombing".'})}),(0,n.jsx)(u,{text:"Privacy first."}),(0,n.jsx)(d,{children:(0,n.jsx)(n.Fragment,{children:"The only server calls P2P Video Call App makes are to a signalling server that helps you find and connect to peers. Room names, participant names and, most importantly, video data are never sent to P2P Video Call App. This ensures your data is secure and private at all times - if your data is never sent to us, there is no way we can monitor or track it."})}),(0,n.jsx)(u,{text:"Downside?"}),(0,n.jsx)(d,{children:(0,n.jsx)(n.Fragment,{children:"P2P Video Call App uses what is referred to as a mesh architecture, where each participant in a call sends their video data directly to every other participant. The downside of this is that it requires more CPU and bandwidth as the numbers of users grows when compared to more traditional video conferencing. However, for calls with a small number of participants, this is not a problem."})})]})})}var x=r(2489),p=r(3591),b=r(1064),y=r(1163),j=r(9896);function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function g(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,o=[],i=!0,s=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);i=!0);}catch(c){s=!0,a=c}finally{try{i||null==r.return||r.return()}finally{if(s)throw a}}return o}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return v(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return v(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function w(){var e=(0,y.useRouter)(),t=g(a.useState(""),2),r=t[0],o=t[1],i=a.useCallback((function(){var t=r.replace(/^-+/,"").replace(/-+$/,"");t=""===t?(0,b.dr)():t;var n=(0,b.Q6)(t);e.push("/".concat(n,"/").concat(t,"?created=true"),"/".concat(n,"/").concat(t))}),[r,e]),s=a.useCallback((function(e){o(e.replace(/[^-a-zA-Z0-9\s+]+/gi,"").replace(/\s+/gi,"-").replace(/--+/g,"-").toLowerCase())}),[]),c=a.useCallback((function(e){e.preventDefault(),i()}),[i]);return(0,n.jsxs)("form",{className:"flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-24 justify-center",onSubmit:c,children:[(0,n.jsx)("div",{className:"sm:w-56",children:(0,n.jsx)(j.Z,{borderless:!0,handleChange:s,placeholder:"Enter a room name",value:r})}),(0,n.jsx)(p.Z,{icon:(0,n.jsx)(l.wl8,{width:20}),onClick:i,text:"Create your room"})]})}function O(){return(0,n.jsxs)("div",{className:"p-4 py-32 text-center hero",children:[(0,n.jsxs)("h1",{className:"mb-8 text-5xl sm:text-6xl font-extrabold tracking-tight",children:["P2P",(0,n.jsx)("span",{className:"text-yellow-500 mx-0.5",children:"."}),"Video-Chat",(0,n.jsx)("span",{className:"text-yellow-500 mx-0.5",children:"."}),"App"]}),(0,n.jsxs)("h2",{className:"mb-24 text-white-300 text-2xl sm:text-3xl font-extrabold tracking-tight",children:[(0,n.jsx)("div",{className:"inline-block",children:"No Sign Up or Log In. "}),"\xa0",(0,n.jsx)("div",{className:"inline-block",children:"No Cookies or Tracking. "}),"\xa0",(0,n.jsx)("div",{className:"inline-block",children:"No Installation."})]}),(0,n.jsx)(w,{}),(0,n.jsx)("div",{children:(0,n.jsx)(x.Z,{href:"https://github.com/RickyDonne","data-size":"large","data-show-count":"true","aria-label":"Ricky Donne on GitHub",children:"Rick"})})]})}function k(){return(0,n.jsxs)(a.Fragment,{children:[(0,n.jsx)(O,{}),(0,n.jsx)(m,{}),(0,n.jsx)(c,{})]})}}},function(e){e.O(0,[641,489,774,888,179],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);
//# sourceMappingURL=index-3e29a9fb7def7692.js.map