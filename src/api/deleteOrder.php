<?php
/*
    购物车页删除多行或者全部
        get:
            id:"1,2,3,..."  需要删除的商品id拼接成的字符串
        返回:
            yes
 */
// 
    include 'connect.php';

    $id=isset($_GET['id']) ? $_GET['id'] : '1';

    $sql="DELETE FROM order_inf WHERE id in($id)";

    $res=$conn->query($sql);
    if($res){
        echo 'yes';
    }else{
        echo "Error:" . $sql . "<br>" . $conn->error;
    }

    $conn->close();
?>