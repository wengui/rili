!function(e){function t(e){var t,e;1==arguments.length?(t=document,e=arguments[0]):2==arguments.length?(t=arguments[0],e=arguments[1]):alert("addSheet函数最多接受两个参数!");e+="\n";var n=t.getElementsByTagName("head")[0],a=n.getElementsByTagName("style");if(0==a.length)if(t.createStyleSheet)t.createStyleSheet();else{var r=t.createElement("style");r.setAttribute("type","text/css"),n.appendChild(r)}var s=a[0],m=s.getAttribute("media");null==m||/screen/.test(m.toLowerCase())||s.setAttribute("media","screen"),s.styleSheet?s.styleSheet.cssText+=e:t.getBoxObjectFor?s.innerHTML+=e:s.appendChild(t.createTextNode(e))}var n=["http://www.hao123.com/js/common/homelink-arg.js","http://www.hao123.com/js/common/tongji.js","http://www.hao123.com/js/common/erji-addin.js"],a=[!1,!0,!0,!0],r=n.length,s=null,m=document.getElementsByTagName("head")[0];if(m||(m=document.getElementsByTagName("script")[0].parentNode),e._LOGIN_JS_LOAD_=function(e){e.login.init()},function(){document.getElementById("user-entry")&&t("#user-entry a{margin-left:6px;}")}(),0!=r)for(var o=parseInt(+new Date/2592e5,10),c=0;r>c;c++){s=document.createElement("script"),s.type="text/javascript",a[c]&&(s.charset="utf-8");var i=n[c];i+=(i.indexOf("?")>-1?"&":"?")+"d="+o+".js",s.src=i,m&&m.appendChild(s)}}(window);