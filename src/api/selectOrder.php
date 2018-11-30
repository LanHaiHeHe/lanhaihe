<?php
    /*
        查询订单表数据，渲染购物车
     */
    //连接数据库
    include 'connect.php';

    //查询订单表所有数据
    $sql = "SELECT * FROM order_inf";

    //执行查询语句
    $res = $conn->query($sql);

    //获取内容
    $arr = $res->fetch_all(MYSQLI_ASSOC);
    // var_dump($arr);

    if($res->num_rows>0){
        //输出内容
        echo json_encode($arr,JSON_UNESCAPED_UNICODE);
    }else{
        echo "nothing";
    }
    
    //关闭结果集
    // $res->close();
    $conn->close();
    
?>