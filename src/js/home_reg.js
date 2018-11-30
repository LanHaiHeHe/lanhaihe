require.config({
    paths:{
        'jquery':'../lib/jquery-1.10.1.min',
        'common':'common'
    },
    shim:{
        // 'main':['jquery'],
        // 'list':['jquery'],
        // 'detail':['jquery'],
        // 'shopcar':['jquery'],
        // 'login':['jquery'],
        'reg':['jquery'],
        // 'main':['common'],
        // 'list':['common'],
        // 'detail':['common'],
        // 'shopcar':['common'],
        // 'login':['common'],
        'reg':['common'],
        'common':['jquery']
    }

});

require(['jquery','common','reg'],function($){
    // $('body').css('background','yellow');
});