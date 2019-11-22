require.config({
    paths:{
        'jquery':'./jquery.min',
        'product':'./lib/product',
        lazyload:'./jquery.lazyload.min'
    },
    shim:{
        lazyload:['jquery']
    }
});
require(['jquery','product'],function($,product){
    // console.log(1);
    product.product();
})