require.config({
    paths:{
        jquery:'./jquery.min',
        shopcar:'./lib/shopcar',
        cookie:'./lib/cookie',
        car:'./lib/car'
    },
    shim:{}
});
require(['jquery','shopcar','car'],function ($,shopcar,car) {
    shopcar.crud(function(){
        car.car()
    });
    

})