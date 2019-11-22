define(['jquery'],function($){
    return {
       
        render:function(callback){
            let id=location.search.split('=')[1]
            $.ajax({
                url:'http://127.0.0.1:8080/1910/guomei.com/lib/datails.php',
                type:'post',
                data:{
                    'id':id
                },
                dataType:'json',
                success:function(res){
                    // console.log(res)
                    let temp='';
                    let pic=JSON.parse(res.pic);
                    // console.log(pic[1].src)
                    temp+=`
                    <div class="product-main clear">
                        <div class="left">
                            <div class="leftBox">
                                <div class="bigbox">
                                    <img src="../${pic[1].src}" alt="">
                                    <div class="movebox"></div>
                                </div>
                                <div class="smallbox">
                                    <a href="#javascript"><img src="../${pic[1].src}" alt=""></a>
                                    <a href="#javascript"><img src="../${pic[2].src}" alt=""></a>
                                    <a href="#javascript"><img src="../${pic[3].src}" alt=""></a>
                                </div>
                            </div>
                            <div class="rightBox">
                                <img src="../${pic[1].src}" alt="">
                            </div>
                        </div>
                        <div class="right">
                            <h2>${res.title}</h2>
                            <h3>${res.details}</h3>
                            <p>国美价：<span>￥</span><span>${res.price}</span><a href="">降价通知</a></p>
                            <p>剩余库存：<em>${res.num}</em></p>
                            <p>服务：<b>由国美配送并提供保障监管</b></p>
                            <p> 购买数量： <input type="number" value="1" min="1" max="${res.num}"></p>
                            <button>加入购物车</button>
                        </div>
                    </div>
                    `
                    $('#main').html(temp);
                    callback&&callback()
                }       
            });
            console.log(this)
        },
        fdj:function(){
             console.log($('.smallbox>a>img'));
            $('.smallbox>a>img').hover(
                function(){
                    $('.bigbox>img').get(0).src=$(this).get(0).src;
                    $('.rightBox>img').get(0).src=$(this).get(0).src; 
                   
                },function(){}
            );
            $('.bigbox').on('mouseover',
                function(ev){
                    // console.log(1);
                    $('.rightBox').css(
                        'display','block'
                    );
                    let top=ev.pageY-$('.bigbox').offset().top-($('.movebox').height()/2);
                    let left=ev.pageX-$('.bigbox').offset().left-($('.movebox').width()/2);
                    // console.log(top,left)
                    let ratio=$('.rightBox>img').width()/$('.bigbox').width();
                    if(top<0){
                        top=0
                    }else if(top>$('.bigbox').width()-$('.movebox').width()){
                        top=$('.bigbox').width()-$('.movebox').width();
                    };
                    if(left<0){
                        left=0;
                    }else if(left>$('.bigbox').width()-$('.movebox').width()){
                        left=$('.bigbox').width()-$('.movebox').width();
                    }
                    $('.movebox').css({
                        'display':'block',
                        'top':top,
                        'left':left
                    })
                    $('.rightBox>img').css({
                        'top':-top*ratio,
                        'left':-left*ratio
                    })
                })
            $('.bigbox').on('mouseout',function(){
                $('.rightBox').css('display','none');
                $('.movebox').css('display','none');
            })
            console.log(this)
            // return this;
        },
        fn:function () { console.log(this) }
    }
})