;;;(function(global,undefined){
    var gls = global.location.search.split(/[\?\&]+/g);
    for(var i = 0; i < gls.length; i++){
        if(gls[i].match(/^src=(.+)$/g)){
            var src = RegExp.$1;
            var doc = global.document;
            var a_s = doc.getElementsByTagName("a");
            for(var i = 0; i < Math.min(a_s.length, 16); i++) {
                if(a_s[i].href.match(/^http:\/\/(www\.)?hao123\.com($|\/($|#|\?|index[\w-]\.htm.*))/)){
                    var h = a_s[i].href;
                    var pre = (h.indexOf("?")>-1 ? "&" : "?");
                    a_s[i].href=h.replace(/(#.*$|$)/g, pre+"ref="+src+"$1");
                }
            }
            var idx, ti = global.__TRACK_IMAGES__ = global.__TRACK_IMAGES__ || [];
            var img = ti[idx = ti["length"] || 0] = new Image();
            var ref = document.referrer.match(/^[^\/]+:\/\/([\w-\.]+)/)?RegExp.$1:"";
            img.src = "http://www.hao123.com/images/track.gif?level=2&page=hao123-erji&type=count-src&src=" + src + "&ref=" + ref;
            img.onerror = img.onload = function(){
                ti = img = ti[idx] = img.onerror = img.onload = null;
            };
            break;
        }
    }
})(this);
