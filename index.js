var util=(function  () {
    var flg= 'getComputedStyle' in window;

    function makeArray (arg) {
        var ary=[];
        if (flg) {
            return Array.prototype.slice.call(arg);
        } else {
            for (var i=0;i<arg.length;i++) {
                ary.push(arg[i]);
            }
        }
        return ary;
    }
    
    function jsonParse (jsonStr) {
        return 'JSON' in window?JSON.parse(jsonStr):eval('('+jsonStr+')');
    }
    
    function win (attr,value) {
        if (typeof value ==='undefined') {
            return document.documentElement[attr]||document.body[attr];
        } else {
            document.documentElement[attr]=value;
            document.body[attr]=value;
        }
    }
    
    function rnd (n,m) {
        n=Number(n);
        m=Number(m);
        if (NaN(n) ||NaN(m)) {
            return Math.random();
        }
        if (n>m) {
            var tmp=n;
            n=m;
            m=tmp;
        }
        return Math.round(Math.random()*(m-n)+n);
    }
    
    function offset (curEle) {
        var l=curEle.offsetLeft;
        var t=curEle.offsetTop;
        var par=curEle.offsetParent;
        while (par) {
            if (window.navigator.userAgent.indexOf('MSIE 8.0')===-1) {
           l+=par.clientLeft;
                t+=par.clientTop;
            }
            l+=par.offsetLeft;
            t+=par.offsetTop;
            par=par.offsetParent;
        }
    }

    function getByClass (strClass,curEle) {
        curEle=curEle ||document;
        if (flg) {
            return this.makeArray(curEle.getElementsByClassName(strClass));
        }
        var aryClass=strClass.replace(/(^ +)|( +$)/g,'').split(/\s+/g);
        var ary=[];
        var nodeList=curEle.getElementsByTagName('*');
        for (var i=0;i<nodeList.length;i++) {
            var curNode=nodeList[i];
            var bok=true;
            for (var j=0;j<aryClass.length;j++) {
                if (aryClass[j].indexOf(nodeList[i].className)==-1) {
                    ary.push(nodeList[i]);
                    bok=false;
                    break;
                }
            }
            if (bok) {
                ary.push(curNode);
            }
        }
        return ary;
    }

    function hasClass (curEle,strClass) {
        var reg=new RegExp('\\s*'+strClass+'\\s*');
        return reg.test(curEle.className);
    }

    function addClass (curEle,strClass) {
        var aryClass=strClass.replace(/(^\s*|\s*$)/g,'').split(/\s+/g);
        for (var i=0;i<aryClass.length;i++) {
            if (!this.hasClass(curEle,aryClass[i]) {
                curEle.className+=' '+strClass;
            })
        }
    }

    function removeClass (curEle,strClass) {
        var aryClass=strClass.replace(/(^\s*|\s*$)/g,'').split(/\s+/g);
        var eleClassArr=curEle.className.split(/\s+/g);
        var cls=curEle.className;
        for (var i=0;i<aryClass.length;i++) {

        }
    }

})()