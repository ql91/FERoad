//面向对象的方式来实现这个功能
//首先创建一个构造函数，构造函数的首字母会大写
/*如果构造函数创建了一个变量，则每一个实例中都会有这个变量
 *其实是一种浪费，那么我们就写在构造函数上
 */
define(['jquery'],function($){
    function ScrollTo(opts){
        this.opts = $.extend({}, ScrollTo.DEFAULTS, opts);
        this.$el = $('html,body');
    }

    ScrollTo.prototype.move = function(){
        var opts = this.opts,
            dest = this.opts.dest;
        // console.log(this);

        if($(window).scrollTop() != dest){
            if(!this.$el.is(':animated')){
                this.$el.animate({
                    scrollTop: dest
                }, opts.speed);        
            }
        }
    };

    ScrollTo.prototype.go = function(){
        var dest = this.opts.dest; //局部变量缓存会让速度更快
        if($(window).scrollTop() != dest){            
            this.$el.scrollTop(dest);
        }
    };

    ScrollTo.DEFAULTS = {
        dest: 0,
        speed: 800
    };

    return {
        ScrollTo: ScrollTo
    }
});