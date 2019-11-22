define(['jquery','md5'],function($,md5){
    return {
        register:function(selector){
            // console.log($.md5($('#password').val()));
            $(selector).on('click',function(){
                $.ajax({
                    url:'http://127.0.0.1:8080/1910/guomei.com/lib/register.php',
                    type:'post',
                    data:{
                        username:$('#username').val(),
                        password:$.md5($('#password').val()),
                        email:$('#email').val(),
                        phone:$('#phone').val()
                    },
                    // dataType:'json',
                    success:function(res){
                        let respone=JSON.parse(res);
                        console.log(respone)
                        if(respone.msg==1){
                            alert('注册成功');
                            
                            $('body').append(`
                            <script>
                                location.href='http://127.0.0.1:8080/1910/guomei.com/src/html'
                            </script>
                            `)
                        }else{
                            alert('注册失败，请重新注册');
                            $('body').append(`
                            <script>
                                location.reload;
                            </script>
                            `) 
                        }
                    }
                })
            });
        }
    }
})