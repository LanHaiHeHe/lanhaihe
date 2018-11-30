<?php
    /*
        点击加入购物车，把数据写入订单表
            get：
                num：商品数量,
                id：商品id
            返回：
                订单表商品所有数据
     */

    //加入购物车，把数据写入订单表
    include 'connect.php';

    $num=isset($_GET['num']) ? $_GET['num'] : '3';
    $id=isset($_GET['id']) ? $_GET['id'] : '2';


    //试插入订单表
    $sql="SELECT num FROM order_inf WHERE id='$id'";
    
    $res=$conn->query($sql);
    $data1=$res->fetch_all(MYSQLI_ASSOC);
      
    if($res->num_rows>0){
        $newnum=$data1[0]['num']+$num;
        $sql2="UPDATE order_inf SET num=$newnum WHERE id=$id";
        $res2=$conn->query($sql2);
        
    }else{
            $sql3="SELECT * FROM  shop_inf WHERE id=$id";
            $res3=$conn->query($sql3);
            $data=$res3->fetch_all(MYSQLI_ASSOC);
            $gname = $data[0]['shopname'];
            $gimg = $data[0]['tu1'];
            $price = $data[0]['nowprice'];
            $price2=$data[0]['markprice'];
            $sql4="INSERT INTO order_inf(id,shopname,nowprice,num,tu1,markprice) VALUES ('$id','$gname','$price','$num','$gimg','$price2')";
            $res2=$conn->query($sql4);

        }
        if($res2){
            echo 'yes';
        }else{
            echo 'no';
        }
    
    


?>