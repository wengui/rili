var ALog=ALog||{};void function(P){var s=Math,d=window,E=document,N=parseInt;var M,G=/msie \d+/i.test(navigator.userAgent),i="alog-",C=i+"alias",H=i+"action",o=i+"group",a=i+"param",O=i+"extra",g=i+"text";alog_attr_custom=i+"custom";var z={},x={count:0,items:[]},c=[],L={},r=P.configs||{},I,t=(+new Date).toString(36)+(s.random().toFixed(8).substr(2)).toString(36);P.errors=x;P.configs=r;P.times=z;P.sid=t;function n(V){z[V]=+new Date}function u(){if(M){return}M={};"AdivBliCaDulEdlFddGspanHtableIbodyJtrKsectionLtdMolNpOarticlePdtQformRimgSh3TinputUasideViWbXthYemZfont".replace(/([A-Z])([a-z]+)/g,function(X,V,W){M[M[V]=W]=V})}function A(Y,X,Z,W){if(!Y||Y.nodeType!=1){return""}var V=(/^[^u]/.test(typeof Y.getAttribute)&&Y.getAttribute(X))||"";if("#"==V){V="[id]"}else{if("."==V){V="[class]"}}V.replace(/\[([\w-_]+)\]/,function(ab,aa){V=Y.getAttribute(aa)});W&&(W.target=Y);return V||(Z&&A(Y.parentNode,X,1,W))||""}function p(Y,V,ab){ab&&u();V=V||E.body;if(!Y||Y==V||/^body$/i.test(Y.tagName)){return""}if(Y.nodeType!=1||/html/i.test(Y.tagName)){return Y.tagName||""}var X=A(Y,C),aa=1,Z=Y.previousSibling,W=Y.nodeName.toLowerCase();while(Z){aa+=Z.nodeName==Y.nodeName;Z=Z.previousSibling}X=(ab&&M[W]||W)+(aa<2?"":aa)+(X&&"("+X+")");return Y.parentNode==V?X:p(Y.parentNode,V,ab)+(/^[A-Z]/.test(X)?"":"-")+X}function U(X,V){V=V||E;if(!X||X==V){return""}var W=A(X,"monkey",0);if(X.parentNode==V||X.parentNode==null){return W?"m-"+W:"m"}else{return U(X.parentNode,V)+(W?"-":"")+W}}P.getM=U;function K(W,V){return p(W,V,1)}P.getXPath=K;function D(W,V){return A(W,H,true,V)}P.getAction=D;function q(V){return A(V,o,true)}P.getGroup=q;function S(V){return A(V,O,true)}P.getExtra=S;function j(V){return A(V,a)}P.getParam=j;function e(V){return A(V,g)}P.getText=e;function f(V){return A(V,alog_attr_custom)}P.getCustom=f;function R(X,Z){if(!X||!Z){return}w("report",Z);var aa=new Image(1,1),V=[],W="img_"+(+new Date);for(var Y in Z){if(Z[Y]||Z[Y]===0){V.push(Y+"="+encodeURIComponent(Z[Y]))}}P[W]=aa;aa.onload=aa.onerror=function(){P[W]=aa=aa.onload=aa.onerror=null;delete P[W]};aa.src=X+"?"+V.join("&")}P.report=R;function w(W,Z){var Y=L[W],V=0;if(!Y){return}var X=Y.length;while(X--){if(Y[X](Z,W)){V++}}return V}P.fire=w;function y(X,W,V){x.count++;if(x.items.length<=9){x.items.push([X,W,V,+new Date])}w("error",x)}P.error=y;function B(Y,W,Z,V){if(!Y){return}try{V&&V.push([Y,W,Z]);if(Y==P){L[W]=L[W]||[];L[W].unshift(Z);return}if(Y.addEventListener){Y.addEventListener(W,Z,false)}else{if(Y.attachEvent){Y.attachEvent("on"+W,Z)}}}catch(X){}}P.on=B;function F(Y,V,ab){if(!Y){return}try{if(Y instanceof Array){for(var aa;aa=Y.pop();){F.apply(this,aa)}return}if(Y==P){var Z=L[V];if(!Z){return}var X=Z.length;while(X--){if(Z[X]===ab){Z.splice(X,1)}}return}if(Y.removeEventListener){Y.removeEventListener(V,ab,false)}else{Y.detachEvent&&Y.detachEvent("on"+V,ab)}}catch(W){}}P.un=F;function m(V){return V.replace(/\(([^)]+)\)/g,"").replace(/[A-Z]/g,function(W){return"-"+M[W]}).replace(/^-/,"")}P.epath=m;function J(V,W){if(!W){return r[V]}r[V]=r[V]||[];if(W instanceof Array){r=r[V].concat(W)}else{r[V].push(W)}}P.config=J;function l(){if(I){return}I=true;n("ult");if(w("unload")){isSleep=new Date;while(new Date-isSleep<100){}}}function k(W,Z){var Y=W.getBoundingClientRect(),V=Q(W);function X(ab,aa){return String(+s.min(s.max(ab/aa,0),1).toFixed(aa<36?1:(aa<351?2:3))).replace(/^0\./g,".")}return[X(Z[0]-Y.left,V[0]),X(Z[1]-Y.top,V[1])]}P.ep=k;function Q(V){var W=V.getBoundingClientRect();return[N(W.right-W.left),N(W.bottom-W.top)]}function v(){var W=Q(E.documentElement),V=Q(E.body);return[s.max(W[0],V[0],d.innerWidth||0,E.documentElement.scrollWidth||0),s.max(W[1],V[1],d.innerHeight||0,E.documentElement.scrollHeight||0)]}P.ps=v;function h(){return[s.max(E.documentElement.scrollLeft||0,E.body.scrollLeft||0,(E.defaultView&&E.defaultView.pageXOffset)||0),s.max(E.documentElement.scrollTop||0,E.body.scrollTop||0,(E.defaultView&&E.defaultView.pageYOffset)||0),d.innerWidth||E.documentElement.clientWidth||E.body.clientWidth||0,d.innerHeight||E.documentElement.clientHeight||E.body.clientHeight||0]}P.vr=h;function T(W,V){switch(W){case"group":o=V;break;case"alias":C=V;break;case"action":H=V;break;case"param":a=V;break;case"extra":O=V;break}}P.an=T;B(d,"beforeunload",l);B(d,"unload",l);B(d,"error",y)}(ALog);var Monkey=Monkey||{};void function(G){var e=window,A=document;var K,o,J="monkey",c=[["mousedown","d"],["focusout","o"],["blur","o",e],["focusin","i"],["focus","i",e],["scroll","s",e],["resize","e",e]],p,h,q,d=[],f,H,j,g,y,k,i,n,w,F,z,l={},B={},a=e.ALog,D,L;function I(Q){if(!Q){return}var O,P={ts:N().toString(36)};for(O in l){P[O]=l[O]}for(O in Q){P[O]=Q[O]}s("report",P);a.report(K.postUrl,P);a.report(K.hao123PostUrl,P)}function E(P,Q){if(!P){return}var O={cmd:"action",ac:P,param:Q};s("action",O);I(O)}G.push=E;function u(O,P){O&&(l[O]=P)}G.set=u;function x(P,Q,O){a.on(a,J+"."+P,Q,O)}G.on=x;function N(){return new Date-h}function M(O){while(O){if(/^(a|button)$/i.test(O.tagName)){return O}O=O.parentNode}}function m(){switch(o.refer){case 1:case true:return A.referrer;case 2:var O=A.referrer;if(!O){return}var P="";O.replace(/(^\w+:\/\/)?([^\/]+)/,function(R,Q){P=Q});if(A.location.host==P){return A.referrer}return P}}function C(S,aj,ah){var am=aj.target||aj.srcElement;switch(S){case"d":if(!am){return}H++;var O={},U=M(am),aa=a.getAction(am,O),ag="",P="",X=a.getText(am);if(U){if(/^a$/i.test(U.tagName)){if(o.click){ag=U.getAttribute("href",2);if(/^(javascript|#)/i.test(ag)){ag=""}var Q=U.getAttribute("cls");if(Q){Q=Q.split(",");var af=ag.match(/\/\/([^\/?#]+).*$/);if(af){af=af[1];af=(af.indexOf("hao123.com")>-1)?1:0}else{af=0}}}j++}else{g++}if(o.click){X=X||a.getText(U)||U.title||U.innerHTML.replace(/<[^>]*>|\s/g,"")}P=a.getCustom(U)}else{if(/input/i.test(am.tagName)&&/button|radio|checkbox|submit/i.test(am.type)){U=am;g++;X=X||am.value}}if(/img/i.test(am.tagName)){k++;X=X||am.alt||am.title||am.src}if((!U&&!aa)||!o.click){break}if(o.onlylink&&/input|button/i.test(am.tagName)){break}y++;var Y=ah?ah.path+"/"+D(am,ah.doc):D(am),ak=L(am),V=a.getGroup(am),R=a.getExtra(am),T=a.getParam(O.target),ad=a.ep(am,[aj.clientX,aj.clientY]),an=am.ownerDocument,W=an.body,ai=[0,0];if(aj.pageX||aj.pageY){ai=[aj.pageX,aj.pageY]}else{if(aj.clientX||aj.clientY){ai=[aj.clientX+(an&&an.scrollLeft||W&&W.scrollLeft||0)-(an&&an.clientLeft||W&&W.clientLeft||0),aj.clientY+(an&&an.scrollTop||W&&W.scrollTop||0)-(an&&an.clientTop||W&&W.clientTop||0)]}}var al={xp:Y,mp:ak,g:V,gx:R,ac:aa,ep:ad,ci:y,pp:ai,ps:a.ps(),param:T,u:String(ag||"none").substr(0,200),txt:String(X||"none").substr(0,30)};try{if(Q){al.c0=af;for(var ae=0;ae<Q.length;ae++){key="c"+(ae+1);al[key]=Q[ae]?Q[ae]:("n"+(ae+1))}}if(P){P=P.split(",");for(var ac=0;ac<P.length;ac++){var Z=P[ac].split(":");al["cus_"+Z[0]]=Z[1]}}}catch(aj){}if(o.vr){al.vr=a.vr()}s("click",al);I(al);break;case"o":n=N();w=1;break;case"i":F+=N()-n;n=N();w=0;break;case"s":case"e":var ab=a.vr();z=Math.max(ab[1]+ab[3],z);break}}function t(P){if(!window.ALog||h||!document.body.getBoundingClientRect){return}a=ALog;P=P||[];if(!(P instanceof Array)){P=[P]}var Q,R,O,S=[].concat(P);while(K=S.pop()){if(K.page=K.page||K.getPage()){break}}if(!K){return}if(K.page instanceof Array){K.mid=K.mid||K.page[1];K.page=K.page[0]}o=K.reports;a.on(a,"unload",r,d);a.on(a,"error",v,d);D=a.getXPath;L=a.getM;H=j=g=y=k=n=w=F=0;h=(a.times&&a.times.ht)||new Date;q=a.sid||(+h).toString(36)+(+Math.random().toFixed(8).substr(2)).toString(36);f="_e_"+q;l={pid:K.pid||241,sid:q,hid:K.hid,mid:K.mid,page:K.page,ver:5,p:K.product,px:e.screen.width+"*"+e.screen.height,ref:m()};for(Q in K){if(/^on(\w+)$/.test(Q)){x(Q.substr(2),K[Q],d)}}s("start",G);n=N();O=a.vr();z=O[1]+O[3];o.pv&&I({cmd:"open"});for(Q=0;R=c[Q++];){a.on(R[2]||A,R[0],(function(T){return function(U){if(!h){return}C(T,U)}})(R[1]),d);if(!o.staytime){break}}}G.start=t;function r(){if(!h){return}s("close",G);if(w){F+=N()-n}if(o.staytime){var O={cmd:"close",tc:H,lc:j,bc:g,pc:k,pd:z,ft:(N()-F).toString(36),ec:i};I(O)}h=0;a.un(d);return o.staytime}G.stop=r;function s(P,O){a.fire(J+"."+P,O)}G.fire=s;function v(P){i=P.count;if(o.error){o.error=0;var O=P.items[0];if(O){I({cmd:"error",et:(O[3]-h).toString(36),url:O[1],msg:O[0],line:O[2]})}}}if(a){if(a.configs&&a.configs[J]){t(a.configs[J])}}}(Monkey);(function(f){var u="data-log-config";var e="1.1.3";var y={rcv:"www.hao123.com/images/track.gif",vdur:30*60000,age:31536000000,id:"hao123"};var m={rcv:y.rcv,currentPageVisitTime:(new Date).getTime(),protocol:window.location.protocol=="https:"?"https:":"http:"};var r=["www.hao123.com","hao123.com","www.hao123.com/?f=hao123","www.hao123.com/?from=hao123"];var t=["tm","ref","embed","ua","ho","type","r","v"];var h={};var a=document.getElementsByTagName("script");for(var w=0,q=a.length;w<q;w++){var p=a[w].getAttribute(u);if(p){var d=p.split(";");for(var s=0;s<d.length;s++){var o=d[s].split(":");var z=o[0];var k=o[1];t.push(z);h[z]=k}if(h.page!="index"&&!h.vp){h.vp=h.vp||h.pageId||h.page;t.push("vp")}}}m.tagKeys=t;var n={};n.checkUA=function(F){F=F||0.2;var C=window,I=document,E=screen,c=navigator;var B=document.body,l=I.documentElement;function H(J){return J.toLowerCase()}function v(J){return new RegExp(J+"\\b[ \\/]?([\\w\\.]*)","i")}function j(){if(Math.random()>F){return}var L="ShockwaveFlash.ShockwaveFlash",K;if(c.plugins&&c.mimeTypes.length){K=c.plugins["Shockwave Flash"];if(K&&K.description){return K.description.match(/\d+/g).join(".")}}else{var J=ActiveXObject;try{K=new J(L+".7")}catch(M){try{K=new J(L+".6");K.AllowScriptAccess="always";return 6}catch(M){}try{K=new J(L)}catch(M){}}if(K!=null){try{return K.GetVariable("$version").match(/\d+/g).join(".")}catch(M){}}}return[0]}function D(){var J,K;if(C.innerHeight||C.innerHeight==0){J=C.innerWidth;K=C.innerHeight}else{if(l&&l.clientHeight){J=l.clientWidth;K=l.clientHeight}else{J="";K=""}}return[J,K]}function A(J){if(result=c.userAgent.match(v(J))){return result.slice(1)}else{return["",""]}}function G(){return !(typeof window._360ilike=="undefined")}function i(){var S=["",""],K="msie",R="safari";var L="("+K+"|"+R+"|firefox|chrome|opera)";var N="(maxthon|360se|theworld|se|theworld|greenbrowser)",W="(tencenttraveler)";var T="(windows nt|macintosh|solaris|linux)";var Q=A(L);if(H(Q[0])==K){if((S=A(N))==","){S=A(W);S=G()?["360se","se"]:[","]}}else{if(H(Q[0])==R){Q[1]=A("version")+"."+Q[1]}}var P=A(T);var J=[Q.join(","),S.join(","),P.join(",")];var O=j();var M=D();var U=[J[0],J[1],J[2],c.platform,c.systemLanguage||c.language,E.width,E.height,M[0],M[1],E.colorDepth,c.cookieEnabled?1:0,O,c.javaEnabled()?1:0];var V=H(U.join(";"));return V}return i()};n.l={};n.l._initUserData=function(){if(!n.l.userDataElem){try{n.l.userDataElem=document.createElement("input");n.l.userDataElem.type="hidden";n.l.userDataElem.style.display="none";n.l.userDataElem.addBehavior("#default#userData");document.getElementsByTagName("head")[0].appendChild(n.l.userDataElem)}catch(c){return false}}return true};n.checkHome=function(){var l=false;function v(){if(!l){l=document.createElement("div");l.style.display="none";l.style.behavior="url(#default#homePage)";document.body.appendChild(l)}return l}function j(A){try{return v().isHomePage(A)}catch(B){}return undefined}function i(){var A=r;A.push(location.host);var C=A.length,B;while(C--){B=A[C];A.push(B+"/","http://"+B,"http://"+B+"/")}return A}function c(){var C,B,A;C=i();C.push(document.URL);B=C.length;while(B--){A=C[B];if(j(A)){return A}}return 0}return c()};n.sio={};n.sio.log=function(i,l){var c=new Image;var j="_log_"+Math.floor(Math.random()*2147483648).toString(36);window[j]=c;c.onload=c.onerror=c.onabort=function(){c.onload=c.onerror=c.onabort=null;window[j]=null;c=null;if(l){l(i)}};c.src=i};function g(){if(typeof h.level=="undefined"||h.level!="1"){var l="_log_erjidata_";var j=[],c=ALog;c.on(document.body,"submit",function(B){var B=window.event||B;var A=B.srcElement||B.target;if(A.tagName.toLowerCase()=="form"){v()}},j);c.on(document.body,"click",function(B){var B=window.event||B;var A=B.srcElement||B.target;if(i(A)){v()}},j);function i(A){while(A){if(typeof A.hasAttribute=="function"&&(/^(a|button|b)$/i.test(A.tagName)||A.hasAttribute("as-link"))){return A}A=A.parentNode}return false}function v(){if(!window[l]){try{if(!h.pageId){throw {name:"not defined",message:"pageId is not defined"}}var A=[];A.push("type=erjidata");A.push("valid=1");A.push("pageId="+encodeURIComponent(h.pageId));typeof pageTitle!="undefined"&&A.push("pageTitle="+encodeURIComponent(pageTitle));typeof h.level!="undefined"&&A.push("level="+encodeURIComponent(h.level));typeof h.page!="undefined"&&A.push("page="+encodeURIComponent(h.page));A.push("r="+(new Date).getTime());n.sio.log(m.protocol+"//"+m.rcv+"?"+A.join("&"));window[l]=true;c.un(j)}catch(B){var A=[];for(w in h){A.push(w+"="+encodeURIComponent(h[w]))}A.push("type=error");A.push("n="+encodeURIComponent(B.name));A.push("m="+encodeURIComponent(B.message));A.push("r="+encodeURIComponent(document.referrer));n.sio.log(m.protocol+"//"+m.rcv+"?"+A.join("&"))}}}}}g();function x(){this.tags={};this.init()}x.prototype={init:function(){var i=this;try{i.setParams();i.postData();if(!h.pageId){throw {name:"not defined",message:"pageId is pageId not defined"}}}catch(j){var c=[];for(w in h){c.push(w+"="+encodeURIComponent(h[w]))}c.push("type=error");c.push("n="+encodeURIComponent(j.name));c.push("m="+encodeURIComponent(j.message));c.push("r="+encodeURIComponent(document.referrer));n.sio.log(m.protocol+"//"+m.rcv+"?"+c.join("&"))}},setTm:function(){var c;var j;var i;m.lastPageVisitTime=this.getData("H123_lpvt_"+y.id)||0;j=this.getData("H123_lvt_"+y.id);if(!j){j=m.currentPageVisitTime;c=Math.round((j-0)/1000)}else{i=j.split(",");if(m.currentPageVisitTime-i[i.length-1]>y.vdur){i.push(m.currentPageVisitTime)}while(i.length>4){i.shift()}j=i.join(",");c=Math.round((i[i.length-1]-0)/1000)}this.setData("H123_lvt_"+y.id,j,y.age);this.setData("H123_lpvt_"+y.id,m.currentPageVisitTime,y.age);this.tags.tm=c},getData:function(v){try{var B=new RegExp("(^| )"+v+"=([^;]*)(;|$)");var c=B.exec(document.cookie);var A=c?c[2]:null;if(!A){if(window.localStorage){var C=window.localStorage.getItem(v);if(C){var j=C.indexOf("|");var i=C.substring(0,j)-0;if(i&&i>(new Date).getTime()){return C.substring(j+1)}}}else{if(n.l._initUserData()){n.l.userDataElem.load(window.location.hostname);return n.l.userDataElem.getAttribute(v)}}}return A}catch(l){}},setData:function(j,l,A){try{var c=new Date;c.setTime(c.getTime()+A||365*24*60*60*1000);if(window.localStorage){l=c.getTime()+"|"+l;window.localStorage.setItem(j,l)}else{if(n.l._initUserData()){n.l.userDataElem.expires=c.toUTCString();n.l.userDataElem.load(window.location.hostname);n.l.userDataElem.setAttribute(j,l);n.l.userDataElem.save(window.location.hostname)}}}catch(i){try{if(A){c=new Date;c.setTime(c.getTime()+A||365*24*60*60*1000)}document.cookie=j+"="+l+(c?"; expires="+c.toGMTString():"")}catch(v){}}},removeData:function(j){try{if(window.localStorage){window.localStorage.removeItem(j)}else{if(n.l._initUserData()){n.l.userDataElem.load(window.location.hostname);n.l.userDataElem.removeAttribute(j);n.l.userDataElem.save(window.location.hostname)}}}catch(i){try{var c=new Date;c.setTime(c.getTime()-1);document.cookie=j+"=; expires="+c.toGMTString()}catch(l){}}return true},serializeTags:function(){var A=[];for(var v=0,c=m.tagKeys.length;v<c;v++){var j=m.tagKeys[v];var B=this.tags[j];if(typeof B!="undefined"&&B!==""){A.push(j+"="+encodeURIComponent(B))}}return A.join("&")},setParams:function(){this.setTm();if(Math.random()<0.005){this.tags.ua=n.checkUA()}this.tags.ho=n.checkHome();this.tags.ref=document.referrer;this.tags.embed=(self!==top)?1:0;this.tags.v=e;this.tags.r=(new Date).getTime();for(w in h){this.tags[w]=h[w]}},postData:function(){var i=this;i.tags.type="access";var c=m.protocol+"//"+m.rcv+"?"+i.serializeTags();n.sio.log(c,function(j){})}};new x;f&&f(h)})(function(a){Monkey.start({getPage:function(){return a.pageId},postUrl:"http://nsclick.baidu.com/h.gif",hao123PostUrl:"http://www.hao123.com/h.gif",pid:113,hid:450,onstart:function(){document.cookie.replace(/(?:^| )BAIDUID=([^;]*)(;|$)/,function(f,g){g&&Monkey.set("hao123_baiduid",decodeURIComponent(g.split(":")[0]))});ALog.an("group","monkey");ALog.an("extra","monkeyExtra");var e=["doc","common_erji_favorite_container","layoutContainer","userBar"];for(var d=0;d<e.length;d++){var c=document.getElementById(e[d]);if(c&&c.setAttribute){c.setAttribute("alog-alias",e[d])}}},onreport:function(d){d.ver=5.2;d.v=d.page;document.cookie.replace(/(?:^| )FLASHID=([^;]*)(;|$)/,function(h,g){if(g){d.hao123_flashid=decodeURIComponent(g.split(":")[0])}});delete d.page;d.objurl=d.u;delete d.u;d.title=d.txt;delete d.txt;d.area=d.g;delete d.g;d.monkey=d.mp;delete d.mp;if(d.xp&&ALog.epath){d.axp=d.xp;d.xp=ALog.epath(d.xp)}Monkey.fire("beforereport",d);if(d.gx){var f=String(d.gx),c=window.JSON&&JSON.parse?JSON.parse(f):/^[\],:{}\s]*$/.test(b.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,""))?(new Function("return "+f))():null;if(c){for(var e in c){d[e]=c[e]}}delete d.gx}},reports:{click:1,onlylink:1}})});window.js_track_loaded&&window.js_track_loaded(true);
