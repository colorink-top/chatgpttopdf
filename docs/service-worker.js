if(!self.define){let e,s={};const c=(c,i)=>(c=new URL(c+".js",i).href,s[c]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=s,document.head.appendChild(e)}else e=c,importScripts(c),s()})).then((()=>{let e=s[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(i,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let d={};const n=e=>c(e,o),f={module:{uri:o},exports:d,require:n};s[o]=Promise.all(i.map((e=>f[e]||n(e)))).then((e=>(r(...e),d)))}}define(["./workbox-14b70077"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"css/bootstrap-icons.css",revision:"8f4b242830ec54686815617e7b5a5b1b"},{url:"css/chatgpt.css",revision:"3fab0c8b798abe7851c4f8e79930b875"},{url:"css/fonts/bootstrap-icons.woff",revision:"3d0ec57f40d62ba6a8e0d1857bb8f7d5"},{url:"css/fonts/bootstrap-icons.woff2",revision:"a30fb81bd52143bcd4de2898422ac8b9"},{url:"css/index.css",revision:"2a2c3d5f52db62d8d4870cf355149dae"},{url:"css/preview/code.css",revision:"d79bdba35e7b28a0551273f49757ae3a"},{url:"css/preview/preview.css",revision:"87f47954cea622f4e04685b3928fe746"},{url:"css/print.css",revision:"f8501ed655c6a7c89fb2d1ff99fd030d"},{url:"favicon.png",revision:"5397ce47e3748ee01c1d728deb0f71d9"},{url:"imgs/chatgpt.png",revision:"f00d0bdce05d2b87212c227a50acb59c"},{url:"imgs/chatgpt.svg",revision:"319809af7ff56dd69f89d9d08602aafd"},{url:"imgs/icon.svg",revision:"08b3c7d4f7c3c5296a3b79b04d97816a"},{url:"index.html",revision:"521c0b8e427b9251c5f131eeac7d5dcd"},{url:"js/index.js",revision:"3ca02ab756f892829a43f9c134bfe72b"},{url:"js/print.js",revision:"30b6d5d1677c7f9c358075b21fa8a7c8"},{url:"print.html",revision:"25b92a64949abdfdabc1c49cb16885b5"}],{})}));
