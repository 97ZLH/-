<?php
//前端通过点击加入购物车按钮来获取商品信息
//从前端得到商品的信息，去数据库查询
//      如果查到有数据存在，就往数据的数量属性值+1，然后传给前端渲染数量值
//      如果没有查到数据存在，就往数据库中插入数据，返回给前端渲染

include "connect.php";
$id = isset($_GET["id"])? $_GET["id"] : "";

$res = $conn->query("select * from car_user where _id='$id'");
$row = $res->fetch_all(MYSQLI_ASSOC);


if($row){
    echo json_encode($row,JSON_UNESCAPED_UNICODE);
}else{
    echo 0;//向前端返回0,表示在数据库找到了当前值
}

$res->close();
$conn->close();

?>