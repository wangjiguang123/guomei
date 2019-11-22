<?php
    // 1. 连接数据库
    include('./conn.php');

    // 2. 接收数据
    $username = $_REQUEST['username'];
    $password = $_REQUEST['password'];
    $email = $_REQUEST['email'];
    $phone = $_REQUEST['phone'];
 
    // echo ($username,$password,$email,$phone);
    // 3. 验证数据  判断用户名是否存在
    $sql = "select * from user where user_name='$username'";
    $result = $mysqli->query($sql); //执行查询语句
    // echo(1);
    if($result->num_rows>0){
        // 数据库中有数据
        echo '{"msg":"0"}';
        $mysqli->close();
        die;
    }

    $insertSql = "insert into user(user_name,user_password,user_email,user_phone) values('$username','$password','$email','$phone')";

    // 当使用query函数执行插入操作的时候  返回的是插入的行数
    $res = $mysqli->query($insertSql);

    if($res){
        echo '{"msg":"1"}';
    }

    $mysqli->close();
    // echo $insertSql;
?>