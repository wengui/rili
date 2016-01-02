//for video
;;;(function _FOR_VIDEO(global,undefined){
    var sources = [
        "qiyi.com",
        "iqiyi.com",
        "v.ifeng.com",
        "m1905.com",
        "1905.com"
    ];
    function waitUntil(test, callback, countdown){
        if (test() || !countdown) callback();
        else {
            setTimeout(function(){waitUntil(test, callback, countdown - 1)}, 1000);
        }
    }
    function suffixInArray(item, array) {
        for(var i = 0; i < array.length; i++) {
            if (array[i] == item) return i;
            if ("."+array[i] == item.substr(item.length - array[i].length - 1)) return i;
        }
        return false;
    }

    if(location.href.match(/:\/\/(live|topic|www).hao123.com\/([^\/\?]*)/)){
        var path = [RegExp.$1, RegExp.$2];
        if (path[0] == "www" && path[1] == "topic") {
            path[0] = path[1];
        }
        path = path[0];
        if (path == "topic") {
            waitUntil(function(){return !!window.ALog && !!window.jQuery}, function () {
              setTimeout(function(){
                var iframes = document.getElementsByTagName("iframe");
                for (var i = 0, dm=""; i < iframes.length; i++) {
                    if ((dm = suffixInArray(gethost(iframes[i].src), sources)) !== false) {
                        var a = document.createElement("a");
                        a.href = iframes[i].src;
                        a.target = "_self";
                        a.setAttribute("monkey", "hezuo!iframe:"+sources[dm]);
                        a.onclick = function(e){ return !!(e && e.preventDefault && e.preventDefault() && false); };
                        jQuery(a).text("hezuo-iframe").hide().insertAfter(iframes[i]);
                        if (a.dispatchEvent) {
                            var evt = new MouseEvent("mousedown");
                            evt.initMouseEvent("mousedown", true, true);
                            a.dispatchEvent(evt);
                        } else {
                            a.fireEvent("onmousedown");
                        }
                    }
                }
              }, 5000);
            }, 60);
        } else if (path == "live") {
            waitUntil(function(){return !!window.ALog && !!window.jQuery}, function () {
                jQuery("iframe").each(function(idx, elem){
                    var tmo  = setTimeout(function(){
                        if(a[0].dispatchEvent){var evt=new MouseEvent("mousedown");evt.initMouseEvent("mousedown",true,true);a[0].dispatchEvent(evt);}
                        else{a[0].fireEvent("onmousedown");}}, 60000);
                    var a = $("<a>").attr("target", "_self").attr("monkey", "player!live").insertAfter(this).on("click", function(e){
                        e.preventDefault();
                    }).text("hezuo-iframe").hide();
                    $(this).on("load", function(e){
                        clearTimeout(tmo);
                        a.attr("href", this.src);
                        if(a[0].dispatchEvent){var evt=new MouseEvent("mousedown");evt.initMouseEvent("mousedown",true,true);a[0].dispatchEvent(evt);}
                        else{a[0].fireEvent("onmousedown");}
                    });
                });
            });
        }
        global._TRACK_IMAGES_ = global._TRACK_IMAGES_ || [];

        function gethost(url){
            if(url.match(/:\/\/([^\/]+)(?:\/|$)/)){
                return RegExp.$1; 
            }else{
                return url;
            }
        };
    }else{
        return;
    }
})(this);

(function(){
    var bdshare_js,
        bdshell_js,
        thisURL = document.URL,
        thisHREF = document.location.href,
        thisSLoc = self.location.href,
        thisDLoc = document.location; 

    var baidu_shell_url_list ={
            "http://www.hao123.com/menu"   : {
                "title"     :   "菜谱",
                "filter"	:   {
                    "wangzhi"	:   "http://www.hao123.com/menu/site"
                }
            },
            
            "http://www.hao123.com/stocknew.htm"   : {
                "title"     :   "股票",
                "filter"	:   {}
            },
            
            "http://www.hao123.com/mystock.htm"   : {
                "title"     :   "自选股",
                "filter"	:   {}
            },
            
            "http://life.hao123.com"   : {
                "title"     :   "查询（生活助手）",
                "filter"	:   {}
            },
            
            "http://music.hao123.com"   : {
                "title"     :   "音乐",
                "filter"	:   {}
            },
            
            "http://mv.hao123.com"   : {
                "title"     :   "音乐",
                "filter"	:   {}
            },
            
            "http://www.hao123.com/xingzuonew.html"   : {
                "title"     :   "星座",
                "filter"	:   {}
            },
            
            "http://www.hao123.com/nba"   : {
                "title"     :   "NBA",
                "filter"	:   {}
            },
            
            "http://dongman.hao123.com"   : {
                "title"     :   "动漫",
                "filter"	:   {
                    "iframe" : "http://dongman.hao123.com/?iframe=browser"	
                }
            },
            
            "http://v.hao123.com/tv"   : {
                "title"     :   "电视剧",
                "filter"	:   {
                    "iframe" : "http://v.hao123.com/tv/?iframe=browser"	
                }
            },
            
            "http://v.hao123.com/live"   : {
                "title"     :   "直播",
                "filter"	:   {}
            },
            
            "http://v.hao123.com/zhuanti"   : {
                "title"     :   "专题",
                "filter"	:   {}
            },
            
            "http://video.hao123.com/dianying/"   : {
                "title"     :   "电影",
                "filter"	:   {}
            },
            
            "http://video.hao123.com/zongyi/"   : {
                "title"     :   "综艺",
                "filter"	:   {}
            },
            
            "http://pic.hao123.com"   : {
                "title"     :   "图片",
                "filter"	:   {}
            },
            
            "http://www.hao123.com/rili"   : {
                "title"     :   "万年历",
                "filter"	:   {}
            },
       
            "http://topic.hao123.com/xuanxiupk"   : {
                "title"     :   "选秀pk",
                "filter"	:   {}
            },
            
            "http://topic.hao123.com/xuanxiupk/pingwei/"   : {
                "title"     :   "评委",
                "filter"	:   {}
            }
    };
    var falg = true;
    for(var i in baidu_shell_url_list){
        if(thisURL.indexOf(i)>-1&&thisURL.indexOf("?iframe=")==-1&&thisURL.indexOf("&iframe=")==-1){
            for(var j in baidu_shell_url_list[i]["filter"]){
                if(falg&&thisURL==baidu_shell_url_list[i]["filter"][j]){
                    falg = false ;
                    break;
                }
            }
            if(falg){
                bdshare_js = document.createElement("script");
   

                bdshare_js.type="text/javascript";
                bdshare_js.id="bdshare_js";
                bdshare_js.setAttribute("data","type=slide&amp;img=1&amp;mini=1&amp;pos=right&amp;uid=6504620");
                bdshare_js.src="http://bdimg.share.baidu.com/static/js/bds_s_v2.js?cdnversion=" + Math.ceil(new Date()/3600000);

                bdshell_js=document.createElement("script");
                bdshell_js.type="text/javascript";
                bdshell_js.id="bdshell_js";
                bdshell_js.src="http://bdimg.share.baidu.com/static/js/shell_v2.js?cdnversion=" + Math.ceil(new Date()/3600000);

                document.body.appendChild(bdshare_js);
                document.body.appendChild(bdshell_js);	
            }
        }
    }

    if(!!~thisURL.indexOf("http://book.hao123.com/intro")||!!~thisURL.indexOf("http://book.hao123.com/index")){
        var data_list = document.getElementById("data_list").getElementsByTagName("a"),data_list_url = !!~thisURL.indexOf("intro"),thistype = data_list_url ? "intro" : "index";
        for(var i=0;i<data_list.length;i++){
            if(!!~data_list[i].href.indexOf("http://top.baidu.com/detail?")){
                data_list[i].onclick = function(){
                    var imge = new Image();
                    imge.src="http://www.hao123.com/images/track.gif?level=2&page=hao123-erji-book&type="+thistype+"-guanjianci&v="+new Date()/1;
                }
            }
        }
    }
    if(document.URL.indexOf("/rili")>-1){
        window.bds_config = {'bdText':"@hao123 万年历_hao123上网导航——hao123万年历真心不错，内容准确丰富，页面简洁清新，查询日历、农历、老黄历什么的，一定要来这里哈！"};
    }else{
        window.bds_config = {'bdText':"@hao123 "+document.title};
    }
})();
/*收藏*/
(function(global,undefined){
    var thisURL = document.URL,thisHREF = document.location.href,thisSLoc = self.location.href,thisDLoc = document.location;
    global.addSheet=function(cssCode){
        var doc,cssCode;
        if(arguments.length == 1){
            doc = document;
            cssCode = arguments[0]
        }else if(arguments.length == 2){
            doc = arguments[0];
            cssCode = arguments[1];
        }else{
            alert("addSheet函数最多接受两个参数!");
        }
        if(!+"\v1"){//新增功能，用户只需输入W3C的透明样式，它会自动转换成IE的透明滤镜
            var t = cssCode.match(/opacity:(\d?\.?\d+);/);
            if(t!= null){
                cssCode = cssCode.replace(t[0], "filter:alpha(opacity="+ parseFloat(t[1]) * 100+");");
            }
        }
        cssCode = cssCode + "\n";//增加末尾的换行符，方便在firebug下的查看。
        var headElement = doc.getElementsByTagName("head")[0];
        var styleElements = headElement.getElementsByTagName("style");
        if(styleElements.length == 0){//如果不存在style元素则创建
            if(doc.createStyleSheet){ //ie
                doc.createStyleSheet();
            }else{
                var tempStyleElement = doc.createElement('style');//w3c
                tempStyleElement.setAttribute("type", "text/css");
                headElement.appendChild(tempStyleElement);
            }
        }
        var styleElement = styleElements[0];
        var media = styleElement.getAttribute("media");
        if(media != null && !/screen/.test(media.toLowerCase()) ){
            styleElement.setAttribute("media","screen");
        }
        if(styleElement.styleSheet){ //ie
            styleElement.styleSheet.cssText += cssCode;//添加新的内部样式
        }else if(doc.getBoxObjectFor){
            styleElement.innerHTML += cssCode;//火狐支持直接innerHTML添加样式表字串
        }else{
            styleElement.appendChild(doc.createTextNode(cssCode))
        }
    }
    function c(tag,pro,childs){
        var isiel = [, ].length - 1;
        var node = document.createElement(tag);
        var map = {"class":"className", "style":"style.cssText"};
        for(var p in pro){
            if(isiel && map[p]){
                var v = map[p].split(/\./);
                for(var i = 0,vp = node; i < v.length-1; i++){
                    vp = vp[v[i]];
                }
                vp[v[i]] = pro[p];
            }else{
                node.setAttribute(p, pro[p]);
            }
        }
        for(var i = 0; i < childs.length; i++){
            if(typeof(childs[i])=="string"){
              childs[i]=document.createTextNode(childs[i]);
            }
            node.appendChild(childs[i]);
        }
       return node;
    };
	
    var AddFavorite = function(sURL, sTitle, el, event){
        var ua = navigator.userAgent.toLowerCase();
		if(ua.indexOf('firefox') != -1){
			el.setAttribute('rel', 'sidebar');
			el.title = sTitle;
			el.href = sURL;
		}else{
			try{
				window.external.addFavorite(sURL, sTitle);
			}
			catch(e){
				try{
					window.sidebar.addPanel(sTitle, sURL, "");
				}
				catch(e){
					alert("您的浏览器暂不支持，加入收藏失败，请使用Ctrl+D进行添加！");
				};
			}
			if(event&& event.preventDefault){
				event.preventDefault();
			}
			return false;
		}	
    };
    var collectlist ={
        "http://www.hao123.com/":{
            "collect":[],
            "filter":{
                "xingzuo":"http://www.hao123.com/star",
                "qiche":"http://www.hao123.com/exam",
                "tiyu":"http://www.hao123.com/sports",
	        "gaoxiao":"http://www.hao123.com/gaoxiao",
                "haomeizi":"http://www.hao123.com/haomeizi/",
                "manhua":"http://www.hao123.com/manhua",
                "english":"http://www.hao123.com/english",
                "menu":"http://www.hao123.com/menu/renxingmeishi",
                "huojushenyuce":"http://www.hao123.com/video/huojushenyuce",
                "drj":"http://www.hao123.com/video/drj",
                "juzi":"http://www.hao123.com/juzi"
            }
        },
        "http://mob.hao123.com":{
            "collect":[],
            "filter":{}
        },
	    "http://kan.hao123.com":{
			"collect":[],
            "filter":{}
		},
        "http://live.hao123.com/sports/":{
            "collect":[],
            "filter":{}
        }
    };
    var flag = true;
    for(var i in collectlist){
        if(thisURL.indexOf(i)>-1&&thisURL.indexOf("?iframe=")==-1&&thisURL.indexOf("&iframe=")==-1){
            for(var j in collectlist[i]["filter"]){
                if(flag&&thisURL.indexOf(collectlist[i]["filter"][j])!=-1){
                    flag = false ;
                    break;
                }
            }
            if(flag){
			 var url = location.href,title = document.title;		
			 var ua = navigator.userAgent.toLowerCase();
             global.addSheet("body{position: relative;}"+
                 ".clearfix {zoom:1}"+
                 ".clearfix:after {clear: both;content: '.'; display: block; height: 0;line-height: 0;visibility: hidden;}"+
                 ".top-collect-box{position:fixed;bottom:50px;left: 50%;margin-left: 486px;font-size: 12px; z-index: 1;}"+
                 "*html,*html body{background-image:url(about:blank);background-attachment:fixed;}"+
                 "*html .fixed-bottom{position:absolute;bottom:auto;top:expression(eval(document.documentElement.scrollTop+document.documentElement.clientHeight-this.offsetHeight-50-(parseInt(this.currentStyle.marginTop,10)||0)-(parseInt(this.currentStyle.marginBottom,10)||0)));}"+
                 "#collect-sub-box{width: 190px;position: absolute;left:-230px;bottom:3px; bottom:0px\\9; padding: 0 14px 0px; background: #fff;box-shadow: 3px 3px 0px #ddd;border:1px solid #ddd;}"+
                 ":root #collect-sub-box {bottom:3px\\9;}"+
                 ".collect-sub-li { padding-bottom: 14px;border-bottom: 1px dashed #ddd;}"+
                 ".collect-sub-li img{height: 91px; width: 91px;padding-right: 10px;padding-top: 15px;float: left;}"+
                 ".collect-sub-li .textwrapper{float: left;margin-top: 25px;width: 88px;}"+
                 ".collect-sub-li .title{color: #696969;font-size: 18px;padding-bottom: 6px;}"+
                 ".collect-sub-li p{line-height: 18px; }"+
                 "#topbox,#collectbox{display: block; width: 46px;height: 46px;border: 1px solid #dddddd;background: #f8fefc;color: #999999; font-size: 12px;text-align: center;cursor:pointer;}"+
                 "#topbox{margin-bottom: 10px;}"+
                 ".arrow{display: block; margin: 0 auto;margin-top: 8px; margin-bottom: 4px;}"+
                 ".toparrow{ width: 22px; height: 17px;background: url('http://s0.hao123img.com/res/img/sub/com/collect.png') 0px -41px no-repeat;}"+
                 ".collectarrow{ background: url('http://s0.hao123img.com/res/img/sub/com/collect.png') -31px -42px no-repeat;width: 20px;height: 17px;}"+
                 "#topbox:hover,#collectbox:hover{border: 1px solid #6ec4a1;text-decoration: none;}"+
                 "#topbox.hover,#collectbox.hover{border: 1px solid #6ec4a1;text-decoration: none;}"+
                 "#topbox:hover .toparrow{background: url('http://s0.hao123img.com/res/img/sub/com/collect.png') 0 0 no-repeat;}"+
                 "#topbox.hover .toparrow{background: url('http://s0.hao123img.com/res/img/sub/com/collect.png') 0 0 no-repeat;}"+
                 "#collectbox:hover .collectarrow{background: url('http://s0.hao123img.com/res/img/sub/com/collect.png') -30px -1px no-repeat;}"+
                 "#collectbox.hover .collectarrow{background: url('http://s0.hao123img.com/res/img/sub/com/collect.png') -30px -1px no-repeat;}");
                var cbx, tbx, csb;
                document.getElementsByTagName("body")[0].appendChild(c("div",{"class":"top-collect-box fixed-bottom"},[
                    csb=c("ul", {id:"collect-sub-box",style:"display:none"},[""]),
                    c("div",{},[
                        tbx=c("div",{"id":"topbox","ie6-fix":"hover"},[
                            c("span",{"class":"toparrow arrow"},[]),
                            c("span",{"class":"toptext text"},["回顶部"])
                        ]),
                        cbx=c("a",{"id":"collectbox","ie6-fix":"hover"},[
                            c("span",{"class":"collectarrow arrow"},[]),
                            c("span",{"class":"collecttext text"},["收藏"])
                        ])
                    ])
                ]));
                for(var key in collectlist[i].collect){
                    if(key==collectlist[i].collect.length-1){
                        var li = c("li",{"class":"collect-sub-li clearfix","style":"border-bottom:none"},[
                            c("img",{"src":collectlist[i].collect[key]["imgurl"]},[]),
                            c("div",{"class":"textwrapper"},[
                                c("h2",{"class":"title"},[collectlist[i].collect[key]["title"]]),
                                c("p",{"class":"text"},[collectlist[i].collect[key]["brief"]])
                            ])
                        ]);
                    }
                    else{
                        var li = c("li",{"class":"collect-sub-li clearfix"},[
                            c("img",{"src":collectlist[i].collect[key]["imgurl"]},[]),
                            c("div",{"class":"textwrapper"},[
                                c("h2",{"class":"title"},[collectlist[i].collect[key]["title"]]),
                                c("p",{"class":"text"},[collectlist[i].collect[key]["brief"]])
                            ])
                        ]);
                    }
					if(ua.indexOf('firefox') != -1){
						cbx.setAttribute('rel', 'sidebar');
						cbx.title = sTitle;
						cbx.href = sURL;
					}
                    csb.appendChild(li);
                    cbx.onmouseout=function(e){
                        csb.style.display="none";
                    };
                    cbx.onmousedown=function(e){
                        csb.style.display="block";
                        if(e&& e.preventDefault){
                            e.preventDefault();
                        }
                        return false;
                    };
                }
                tbx.onclick=function(e){
                    window.scrollTo(0,0);
                    if(e&& e.preventDefault){
                        e.preventDefault();
                    }
                    return false;
                };
				cbx.onclick = function(e){
					var url = location.href,title = document.title;
                    AddFavorite(url, title, this, e);
				};
                csb.onmouseover=function(e){
                    csb.style.display="block";
                };
                csb.onmouseout=function(e){
                    csb.style.display="none";
                };
            }
        }
    }

})(window);

/***  move app.hao123.com to www ***/
// (function(doc){
//   function dealLink(node){
//       if(node){
//         var href = node.href;
//         if(href.match(/\/\/app.hao123.com\/sms/)){
//             node.href="http://www.hao123.com/shouji/";
//         }
//       }
//   }
//   if(doc.querySelectorAll){
//     var links = doc.querySelectorAll("a[href^='http://app.hao123.com']");
//     for(var i = links.length; i--; ){
//         dealLink(links[i]);
//     }
//   }else{
//     var tofix = ["page-header", "ft", "footer"];
//     for(var ti = 0; ti < tofix.length; ti++){
//         var ft = doc.getElementById(tofix[ti]);
//         if(ft){
//             var links = ft.getElementsByTagName("a");
//             for(var i = links.length; i--; ){
//                 dealLink(links[i]);
//             }
//         }
//     }
//   }
// }(document));

/*** for adb ***/
// 0 && (function(global){
//     setTimeout(function(){
//         var img = new Image();
//         if(global.ALog && global.ALog.sid){
//             var nblc = 1;
//         }else{
//             var nblc = 0;
//         }
//         var pid = global.pageVP || global.pageId || "unknown";
//         img.onload = function(){
//             global._adb_img_ = null;
//         };
//         img.onerror = function(){
//             global._adb_img_.onerror = null;
//             global._adb_img_.src = "http://jsonce.com/favicon.ico?nblc="+nblc+"&page="+pid+"&r="+(~new Date);
//         };
//         global._adb_img_ = img;
//         global._adb_img_.src = "http://www.hao123.com/images/track.gif?type=blct&nblc="+nblc+"&page="+pid+"&r="+(~new Date);
//         img = null;
//     }, 3000);
// }(window));

;(function(win,doc){
    if(window.pageId === undefined && location.host === 'xyx.hao123.com') {
        window.pageId = 'hao123-game-xyx';
    }
    function loadScript(url, callback) {
        var script = document.createElement('script')
        script.type = 'text/javascript';
        if (script.readyState) { //for ie
            script.onreadystatechange = function() {
                if (script.readyState == 'loaded' || script.readyState == 'complete') {
                    script.onreadystatechange = null;
                    callback();
                }
            };
        } else { //other browser
            script.onload = function() {
                callback();
            };
        }
        script.src = url;
        document.getElementsByTagName('head')[0].appendChild(script);
    }

    function getElemt(id){
        return doc.getElementById(id);
    }

    function getCookie(name){
        var reg = new RegExp("(^| )"+name+"=([^;]*)(;|\x24)");
        return reg.exec(doc.cookie);
    }

    loadScript('http://www.hao123.com/js/browser.js?v=1.0.1', function() {
		
        var flag = getCookie("toptip"),
        bo   =   doc.getElementsByTagName("body")[0];
        if(!win.exports.isHao123() && !win.exportsisBaidu){

            var bwr    = win.exports,
            flid   = getCookie("FLASHID"),
            bdid   = getCookie("BAIDUID"),
            num    = 0,
            sy     = {
                "win2000" : 1,
                "winxp"   : 2,
                "win2003" : 3,
                "winvista": 4,
                "win7"    : 5,
                "win8"    : 6,
                "win8.1"  : 7,
                "mac"     : 8,
                "unix"    : 9,
                "linux"   : 10,
                "other"   : 11
            },
            br  = {
                "chrome"  : 1,
                "firefox" : 2,
                "msie"    : 3,
                "360"     : 4,
                "360se"   : 5,
                "sougou"  : 6,
                "liebao"  : 7,
                "qq"      : 8,
                "tt"      : 9,
                "opera"   : 10,
                "safari"  : 11,
                "maxthon" : 12,
                "baidu"   : 13,
                "hao123"  : 14
            },
            version = 0;

			if(bwr.is360){
				num = 4;
			}else if(bwr.is360se){
				num = 5;
			}else if(bwr.isSougou){
				num = 6;
			}else if(bwr.isLiebao){
				num = 7;
			}else if(bwr.isQQ){
				num = 8;
			}else if(bwr.isTT){
				num = 9;
			}else if(bwr.maxthon){
				num = 12;
			}else if(bwr.isHao123()){
				num = 14;
            }else{
                num = br[bwr.types[0]] ? br[bwr.types[0]] : 0;	
            }

            sy = sy[bwr.system.toLowerCase()];
            version = bwr.ie ? parseInt(bwr.types[1], 10) : 0;

            win.getXhtData = function(result){
                var d = result.data;

                if(d){
                    function addInlineStyle(cssText) {
                        var style = document.createElement("style");
                        style.type = "text/css";
                        try {
                            style.appendChild(document.createTextNode(cssText));
                        } catch (ex) {
                            style.styleSheet.cssText = cssText;
                        }
                        var head = document.getElementsByTagName("head")[0];
                        head.appendChild(style);
                    }

                    var cssText = '.widget-topbanner{height:35px;background:#fbffe5;border-bottom:1px solid #ddd;display:none}.widget-topbanner .topbanner-inner{position:relative}.widget-topbanner .link{font-size:13px;position:relative;top:0px!important;*top:2px;color:#333;cursor:pointer;height:20px;line-height:20px;display:inline-block;text-decoration:none}.widget-topbanner .link:hover{color:#F30;text-decoration:underline}.widget-topbanner .btn{display:inline-block;width:80px;height:24px;top:6px;*top:5px;position:relative;left:10px;cursor:pointer}.widget-topbanner .close{position:absolute;right:0;top:10px;*top:9px;width:16px;height:16px;background-position:-80px -1616px;cursor:pointer}.widget-topbanner .close:hover{background-position:-80px -1640px}.widget-topbanner .icon{display:inline-block;width:18px;height:18px;top:4px;margin:0 4px 0 0;position:relative}.widget-topbanner .g-wd{width:960px;margin:0 auto}.widget-topbanner .g_icon{background-image:url(http://s0.hao123img.com/v4/00/fJ/0b/iH/rY/3/index_icon.png)}';

                    addInlineStyle(cssText);

                    var div = doc.createElement("div"),
                        str = '<div id="__wgt_0_1" class="widget-topbanner" monkey="' + (window.pageId ? window.pageId : '') + 'topbanner" alog-alias="topbanner"><div class="g-wd topbanner-inner"><span id="__wgt_icon" class="icon"></span><a id="__wgt_text" href="#" class="link download" static="tpl='+window.pageId+'&bl=top_banner_hao123&ext=text"></a><a id="__wgt_btn" href="#" static="tpl='+window.pageId+'&bl=top_banner_hao123&ext=btn" title="" class="g-ib g_icon btn download"></a><a id="__wgt_close" href="javascript:void(0);" title="点击关闭" class="g_icon close" static="tpl='+window.pageId+'&bl=top_banner_hao123&ext=close"></a></div></div>';

                    div.style.position = 'relative';
                    div.style.zIndex = 10000;
                    div.innerHTML = str;
                    bo.insertBefore(div,bo.children[0]);
					d.content1 = d.content;
					var random = Math.floor(Math.random()*3+1),
                        el = getElemt('__wgt_0_1'),
                        text = getElemt('__wgt_text'),
                        btn = getElemt('__wgt_btn'),
                        icon = getElemt('__wgt_icon');

                    getElemt('__wgt_close').onclick = function(e){
                        el.style.display = "none";
                        doc.cookie="toptip=100";
                        return false;
                    };

                    btn.onclick = function(){
                        doc.cookie="toptip=100";
                    };

                    text.innerHTML = d["content"+random] || d.content;
                    text.href = d.content_url;
                    btn.href =  d.button_url;
                    btn.style.background = "url("+d.button+") no-repeat 0 0";
                    icon.style.background = "url("+d.icon+") no-repeat 0 0";
                    el.style.display = "block";
                    if(d.style) {
                        btn.onmouseover = function(){
                            btn.style.background = "url("+d.style+") no-repeat 0 0";
                        };
                        btn.onmouseout = function(){
                            btn.style.background = "url("+d.button+") no-repeat 0 0";
                        };
                    }
					if(flag == null){
					   flag = 0;
					}else{
					  result.count !=-1 ? flag++ : '';
					}
					if((flag < result.count-0 || result.count == -1) && flag < 100){
					   doc.cookie="toptip="+flag;
                                           
					   el.show();
					}
                }
            };

            var script = doc.createElement("script");
            script.src = "http://www.hao123.com/api/newxhtiao?c="+(flid ? flid[2].substring(0,32) : (bdid ? bdid[2].substring(0,32) : ""))+"&sys="+sy+"&brw="+num+"&edt="+version+"&pid="+window.pageId+"&callback=getXhtData";
			//script.src = "http://www.hao123.com/api/xhtiao?c="+(flid ? flid[2].substring(0,32) : (bdid ? bdid[2].substring(0,32) : ""))+"&mkey="+sy+","+num+","+version+","+window.pageId+"&callback=getXhtData";
            bo.appendChild(script);
        }
    });
}(window, document));

/* for moe track */
if(location.host == "moe.hao123.com" || location.hostname == "moe.hao123.com"){
  tracker.send({
    vp:"hao123-moe",
    type:"ua",
    level:2,
    canvas:typeof document.createElement("canvas").getContext,
    win:(navigator.userAgent.match(/Windows NT ([\d.]+)/)?RegExp.$1:0),
    ie:(navigator.userAgent.match(/MSIE\s?([\d.]+)/)?parseInt(RegExp.$1):0)
  });
}