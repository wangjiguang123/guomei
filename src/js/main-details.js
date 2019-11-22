require.config({
    paths:{
        'jquery':'./jquery.min',
        'details':'./lib/details',
        'cookie':'./lib/cookie'
    },
    shim:{}
});
require(['jquery','details'],function($,details){
    details.render(function(){
        
        $('button').on('click',function(){
            details.cookie();
        })
        details.fdj();
    });
})