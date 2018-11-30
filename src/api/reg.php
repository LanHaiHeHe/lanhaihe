<?php
    /*
        查询登录页输入的用户名和密码是否正确
            post:
                username：用户名
                psw：密码
            返回：

     */
    //连接数据库
    include 'connect.php';
    
    //接收数据
    $username=isset($_POST['username']) ? $_POST['username'] : '15361375830';
    $psw=isset($_POST['psw']) ? $_POST['psw'] : '12345';
    
    //写查询语句
    $sql="SELECT * FROM user_inf WHERE username='$username' ";
    
    //执行：内部编译
    $res=$conn->query($sql);//结果集
      
    if($res->num_rows>0){
        // echo 'yes';//用户名密码都正确，可以登陆
        $sql2="SELECT * FROM user_inf WHERE password='$psw' AND username='$username' ";
        $res2=$conn->query($sql2);
        $data=$res2->fetch_all(MYSQLI_ASSOC);

        
        if($res2->num_rows>0){
            $loginName=$data[0]['loginname'];
            $res3=array(
                'y'=>'yes',
                'loginName'=>$loginName
            );
            echo json_encode($res3,JSON_UNESCAPED_UNICODE);
        }else{
            $res3=array(
                'y'=>'no_psw'
            );
            echo json_encode($res3,JSON_UNESCAPED_UNICODE);//密码不正确
        }
    }else{
        $res3=array(
                'y'=>'no_username'
            );
        echo json_encode($res3,JSON_UNESCAPED_UNICODE);//用户名不正确
    }
?>