require.config({
    paths:{
        'jquery':'./jquery.min',
        'introduce':'./lib/introduce',
        'cookie':'./lib/cookie'
    },
    shim:{}
});
require(['jquery','introduce'],function($,introduce){
    introduce.render(function(id,price){
        // alert(1)
        $('button').on('click',function(){
            introduce.cookie(id,price,$('.add').val());
        })
        introduce.fdj();
    });
})