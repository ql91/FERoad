//封装成工具条

requirejs.config({
    paths:{
        'jquery': 'vendor/jquery-2.2.2',
    }
});

requirejs(['jquery','backtop'],function($, backtop){
    // new backtop.BackTop($('#backtop'),{
    //   mode: 'move'
    // });
    

    $("#backtop").backtop({
       mode: 'move'
    });

});