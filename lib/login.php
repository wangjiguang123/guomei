<?php
    include('./conn.php');

    $username=$_REQUEST['username'];
    $password=$_REQUEST['password'];

    $sql="select * from user where user_name='$username' and user_password='$password' ";
    $res=$mysqli->query($sql);
    if($res->num_rows>0){
        echo '{"msg":"1"}';
    }else{
        echo '{"msg":"0"}';
    }
    $mysqli->close();
?>