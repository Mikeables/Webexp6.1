(function(){"use strict";var n={7500:function(n,t,e){var o=e(5130),r=e(6768);const u={id:"app"};function i(n,t,e,o,i,c){const s=(0,r.g2)("ClockComponent");return(0,r.uX)(),(0,r.CE)("div",u,[t[0]||(t[0]=(0,r.Lk)("h1",{class:"title"},"This is my clock",-1)),(0,r.bF)(s)])}var c=e(4232);const s={class:"clock-container"},a={class:"clock-display"};function f(n,t,e,o,u,i){return(0,r.uX)(),(0,r.CE)("div",s,[(0,r.Lk)("div",a,[(0,r.Lk)("span",null,(0,c.v_)(u.hours),1),t[0]||(t[0]=(0,r.eW)(":")),(0,r.Lk)("span",null,(0,c.v_)(u.minutes),1),t[1]||(t[1]=(0,r.eW)(":")),(0,r.Lk)("span",null,(0,c.v_)(u.seconds),1)])])}var l={name:"ClockComponent",data(){return{hours:0,minutes:0,seconds:0}},mounted(){this.updateTime(),setInterval((()=>{this.updateTime()}),1e3)},methods:{updateTime(){const n=new Date;this.hours=n.getHours(),this.minutes=n.getMinutes(),this.seconds=n.getSeconds()}}},d=e(1241);const p=(0,d.A)(l,[["render",f],["__scopeId","data-v-57786577"]]);var v=p,h={name:"App",components:{ClockComponent:v}};const m=(0,d.A)(h,[["render",i],["__scopeId","data-v-7fd5add9"]]);var k=m,b=e(4692);e(4188);const _=(0,o.Ef)(k);_.use(b.A),_.mount("#app")}},t={};function e(o){var r=t[o];if(void 0!==r)return r.exports;var u=t[o]={exports:{}};return n[o].call(u.exports,u,u.exports,e),u.exports}e.m=n,function(){var n=[];e.O=function(t,o,r,u){if(!o){var i=1/0;for(f=0;f<n.length;f++){o=n[f][0],r=n[f][1],u=n[f][2];for(var c=!0,s=0;s<o.length;s++)(!1&u||i>=u)&&Object.keys(e.O).every((function(n){return e.O[n](o[s])}))?o.splice(s--,1):(c=!1,u<i&&(i=u));if(c){n.splice(f--,1);var a=r();void 0!==a&&(t=a)}}return t}u=u||0;for(var f=n.length;f>0&&n[f-1][2]>u;f--)n[f]=n[f-1];n[f]=[o,r,u]}}(),function(){e.n=function(n){var t=n&&n.__esModule?function(){return n["default"]}:function(){return n};return e.d(t,{a:t}),t}}(),function(){e.d=function(n,t){for(var o in t)e.o(t,o)&&!e.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:t[o]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)}}(),function(){var n={524:0};e.O.j=function(t){return 0===n[t]};var t=function(t,o){var r,u,i=o[0],c=o[1],s=o[2],a=0;if(i.some((function(t){return 0!==n[t]}))){for(r in c)e.o(c,r)&&(e.m[r]=c[r]);if(s)var f=s(e)}for(t&&t(o);a<i.length;a++)u=i[a],e.o(n,u)&&n[u]&&n[u][0](),n[u]=0;return e.O(f)},o=self["webpackChunkmoz_todo_vue2"]=self["webpackChunkmoz_todo_vue2"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=e.O(void 0,[504],(function(){return e(7500)}));o=e.O(o)})();
//# sourceMappingURL=app.b627f688.js.map