define(['jquery','md5'],function($,md5){
    return {
        login:function(){
            console.log($.md5($('#password').val()));
            $('.btn').on('click',function(){
                $.ajax({
                    url:'http://localhost:8080/1910/guomei.com/lib/login.php',
                    type:'post',
                    data:{
                        username:$('#username').val(),
                        password:$.md5($('#password').val())
                    },
                    dataType:'json',
                    success:function(respone){
                        // console.log(respone.msg);
                        if(respone.msg==1){
                            alert('登录成功');
                            
                            $('body').append(`
                            <script>
                                location.href='http://localhost:8080/1910/guomei.com/src/html'
                            </script>
                            `)
                        }else{
                            alert('密码或账号错误');
                            $('body').append(`
                            <script>
                                location.reload;
                            </script>
                            `) 
                        }
                    }
                })
            })
        }
    }
})