var utils=(function  () {
    var flg='getComputedStyle' in window;

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

    //用来获取元素值或设置元素值
    function win (attr,value) {
        if (typeof value==='undefined') {
            return document.documentElement[attr]||document.body[attr];
        }
        document.documentElement[attr]=document.body[attr]=value;
    }

    function rnd (n,m) {
        n=Number(n);
        m=Number(m);
        if (isNaN(n)||isNaN(m)) {
            return Math.random();
        }
        if (n>m) {
            var tmp=m;
            m=n;
            n=tmp;
        }
        return Math.round(Math.random()*(m-n)+n);
    }

    function getByClass (strClass,curEle) {
        curEle=curEle ||document;
        //标准浏览器
        if (flg) {
            return this.makeArray(document.getElementsByClassName(strClass));
            //IE 6-8
        } else {
            var aryClass=strClass.replace(/(^ +)|( +$)/g,'').split(/\s+/g);
            var nodeList=curEle.getElementsByTagName('*');
            var ary=[];
            for (var i=0;i<nodeList.length;i++) {
                var curNode=nodeList[i];
                var bok=true;
                for (var j=0;j<aryClass.length;j++) {

                }
            }
        }
    }




})()