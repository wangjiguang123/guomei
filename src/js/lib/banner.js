define(['jquery','jqSuper'],function($){
    return {
        banner:function(){
             //左侧分类导航
            $('.category-option .cat-item').hover(function () {
                                                    $(this).toggleClass('hover')
                                                });
            //图片轮播
            jQuery(".scroll-banner").slide({ 
                    mainCell: ".scroll-content",
                    titCell: ".scroll-btn span",
                    titOnClassName: "current", 
                    effect: "fold",
                    autoPlay: true, 
                    delayTime: 1000,
                    interTime: 3500 
                });
            }
        }
})