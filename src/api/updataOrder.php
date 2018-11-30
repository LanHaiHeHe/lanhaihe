<?php
    /*
        购物车页数量加减，更新订单表数据
            get:
                id:产品id，
                num:产品加减后的数量(num>=1)
            返回：
                id:产品id，
                num:产品加减后的数量
     */
    //连接数据库
    include 'connect.php';

    //获取id，num
    $id = isset($_GET['id']) ? $_GET['id'] : '1';
    $num = isset($_GET['num']) ? $_GET['num'] : '3';

    //更改订单表对应id的产品的数量num
    $sql = "UPDATE order_inf SET num='$num' WHERE id=$id;";

    //执行sql语句
    $res = $conn->query($sql);

    //获取内容
    $data = array(
        'id'=>$id,
        'num'=>$num
    );

    //判断sql语句是否执行成功，若成功，返回id和num
    if($res){
        echo json_encode($data,JSON_UNESCAPED_UNICODE);
    }else{
        echo "Error:" . $sql . "<br>" . $conn->error;
    }

    //关闭结果集
    // $res->close();
    $conn->close();

?>