(function() {
    "use strict";
    // 用于保存整个
    var _$ = window.$,
        rootQuery = [],
        _$ = function(selector){
        return new _$.fn.init(selector,rootQuery);
    };
    //定义一个fn来初始化并执行一些操作
    /**
    * version 0.0.1存在以下目标
    * 可以选择指定id的标签如#id
    * 可以选择指定class的标签如.class
    * 可以是复合标签如#id .class
    */
    _$.fn = _$.prototype = {
        version: "0.0.1",
        isQuery: true,
        constructor: _$,
        length : 0,
        splice: [].splice,
        selector : '',
        init: function(selector,rootQuery){
            var quickCheck = /^(?=(#[\w-]+$)|([.][\w-]+$)|((?:[#|.][\w-]+[\s]+)+(?:[#|.][\w-]*)$))/g;
            var matchs = quickCheck.exec(selector);
            //如果是null，undefined，和false则直接返回自己就好了
            if ( !selector ) {
                return this;
            }
            // $0:代表表达式匹配结果默认为空（留作他用）
            // $1:代表表达式匹配结果为id类
            // $2:代表表达式匹配结果为class类
            // $3:一个多级列表
            // $4:预留一个tag检测位置
            // $5:预留一个~
            if(matchs){
                this.selector = selector;
                var elem = document.querySelectorAll(selector);
                for (var i = 0; i < elem.length; i++) {
                    this[i] = elem[i];
                }
                this.length = elem.length;
                return this;
                //预留ie接口
            }
            if ( selector !== undefined ) {
                //如果全部判断完成，还存在说明这个以及一个query对象了，现在直接返回就行了
                var elem = selector;
                for (var i = 0; i < elem.length; i++) {
                    this[i] = elem[i];
                }
                this.length = elem.length;
                return this;
            }
            console.log(this.version);
            //开始判断
            this.selector = selector;
            return this;
        },
        addClass : function( ClassName ) {

        },
        removeClass : function( ClassName ) {

        },
        each : function( callback ){
            // function(index,element)
            // if(callback.arguments.length = 2){
            //     index,callback.arguments[0];
            // }else{
            //     throw("you need input enought arguments");
            // }
            for ( var index = 0 ; index < this.length ; index++ ) {
               if(false === callback.call( index ,  index  , this[index] )) break;
            };
        },
        getPosition : function(){

        },
        on : function( name,listener ){
            this[0].addEventListener(name,listener);
            //预留ie位置
        }
    };
    
    _$.fn.init.prototype = _$.fn;
    window.$ = _$;
})(window);