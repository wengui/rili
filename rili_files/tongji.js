(function () {
    function on(el,type,fun) {
        if (document.addEventListener) {
            el.addEventListener(type,fun,false);
        } else if (document.attachEvent) {
            el.attachEvent('on' + type,fun);
        } else {
            el['on' + type] = fun;
        }
    }
    var UserTrack = {
        send: function (params) {
            var r = new Date().getTime(),
                host = 'http://www.hao123.com/images/track.gif',
                u = "img_" + r,
                sParams = "type=channel_form_submit&level=2&";
            for (var i in params) {
                sParams += encodeURIComponent(i) + "=" + encodeURIComponent(params[i]) + "&";
            }
            window[u] = new Image();
            window[u].onload = window[u].onerror = function () {
                window[u] = null
            };
            window[u].src = host + "?" + sParams + "r=" + r;
        }
    };
    var forms = document.getElementsByTagName('form'),
        form;
    for (var i = 0,len = forms.length; i < len; i++) {
        form = forms[i];
        (function(v){
            on(form,'submit',function(e) {
                UserTrack.send({
                    'pageId':pageId,
                    'order':v
                });
            });
        })(i);
    }
})();