define(['jquery','lazyload'],function($,lazyload){
    return {
        product:function(){
            // console.log(1);
            $.ajax({
                url:'http://127.0.0.1:8080/1910/guomei.com/lib/product.php',
                type:'post',
                // data:{},
                dataType:'json',
                success:function(respone){
                    // console.log(respone);
                    respone.forEach(elm => {
                        // console.log(elm.title);
                        // console.log(elm.pic)
                        let pic=JSON.parse(elm.pic);
                        // console.log(pic[0].src)
                        $('.product-main>ul').append(`
                        <li>
                            <a href="http://127.0.0.1:8080/1910/guomei.com/src/html/details.html?id=${elm.id}">
                            <div class="top" >
                            <img class="lazy" data-original="../${pic[0].src}">
                            </div>
                            <div class="bottom">
                                <p>${elm.title}</p>
                                <p><span>￥</span>${elm.price}</p>
                            </div>
                            </a>
                        </li> 
                        `)
                    });
                    $(function() {
                        $("img.lazy").lazyload({effect: "fadeIn"});
                    });
                }
                
            })
        }
    }
})