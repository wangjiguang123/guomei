define(['jquery','cookie'],function($,cookie){
    return {
        crud:function(callback){
            let shop=cookie.get('shop');
            if(shop){
                shop = JSON.parse(shop);
                // console.log(shop)
                let idList = shop.map(elm=>elm.id).join();
                $.ajax({
                    url:'http://127.0.0.1:8080/1910/guomei.com/lib/shopcar.php',
                    type:'post',
                    data:{
                        idlist:idList
                    },
                    dataType:'json',
                    success:function(res){
                        // console.log(res)
                        let item='';
                        let count=0;
                        res.forEach(function(elm){
                            let pic=JSON.parse(elm.pic);
                            let arr = shop.filter((val,i)=>{
                                return val.id == elm.id;
                            });
                            count++;
                            // console.log(elm.title)
                            item+=`
                            <div class="order_content">
                                <ul class="order_lists">
                                    <li class="list_chk">
                                        <input type="checkbox" id="checkbox_${count}" class="son_check">
                                        <label for="checkbox_${count}"></label>
                                    </li>
                                    <li class="list_con">
                                        <div class="list_img"><a href="javascript:;"><img src="../${pic[1].src}" alt=""></a></div>
                                        <div class="list_text"><a href="javascript:;">${elm.title}</a></div>
                                    </li>
                                    <li class="list_info">
                                        <p>规格：默认</p>
                                        <p>尺寸：16*16*3(cm)</p>
                                    </li>
                                    <li class="list_price">
                                        <p class="price">￥${elm.price}</p>
                                    </li>
                                    <li class="list_amount">
                                        <div class="amount_box">
                                            <a href="javascript:;" class="reduce reSty">-</a>
                                            <input type="text" value="${arr[0].num}" class="sum" max="${elm.num}">
                                            <a href="javascript:;" class="plus">+</a>
                                        </div>
                                    </li>
                                    <li class="list_sum">
                                        <p class="sum_price">￥${(arr[0].num*elm.price).toFixed(2)}</p>
                                    </li>
                                    <li class="list_op">
                                        <p class="del"><a href="javascript:;" class="delBtn">移除商品</a></p>
                                    </li>
                                </ul>
                            </div>
                            `
                            $('.cartBox').append(item);
                        }) 
                        callback&&callback() 
                    }
                })
            }
        }
    }
})