!function(){"use strict";var e={};function t(e,t,n,r,o,i,c){try{var u=e[i](c),a=u.value}catch(e){return void n(e)}u.done?t(a):Promise.resolve(a).then(r,o)}function n(e){return function(){var n=this,r=arguments;return new Promise((function(o,i){var c=e.apply(n,r);function u(e){t(c,o,i,u,a,"next",e)}function a(e){t(c,o,i,u,a,"throw",e)}u(void 0)}))}}function r(){return o.apply(this,arguments)}function o(){return(o=n(regeneratorRuntime.mark((function e(){var t,n,r,o,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=Office.context.mailbox.item,n=Office.context.mailbox.userProfile.emailAddress,r=t.itemId,o=new RegExp("/","g"),r=r.replace(o,"-"),(i=document.createElement("a")).setAttribute("href","https://prod-138.westus.logic.azure.com/workflows/19dea0d01b67425bb1c73965f513059f/triggers/manual/paths/invoke/messageId/"+r+"/smbName/"+n+"?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=sLBzcVeh430T8N7QQHUZIaCQ7BuJSVL9GmylzgL-Wuk"),i.innerHTML="link text",i.click(),document.getElementById("item-subject").innerHTML="<br/>itemId:"+r;case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}e.d=function(t,n){for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},e.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},Office.onReady((function(e){e.host===Office.HostType.Outlook&&(document.getElementById("sideload-msg").style.display="none",document.getElementById("app-body").style.display="flex",document.getElementById("run").onclick=r)}))}();
//# sourceMappingURL=taskpane.js.map