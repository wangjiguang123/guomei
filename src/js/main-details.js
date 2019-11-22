require.config({
    paths:{
        'jquery':'./jquery.min',
        'details':'./lib/details'
    },
    shim:{}
});
require(['jquery','details'],function($,details){
    details.render(function(){
        details.fn();
        details.fdj();
    });
    // details.render(details.fn);
    // details.fn();
    
})