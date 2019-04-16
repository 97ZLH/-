<?php
include 'connect.php';
$userid = isset($_GET["userid"])? $_GET["userid"] : "";
$id = isset($_GET["id"])? $_GET["id"] : "";
$image = isset($_GET["image"])? $_GET["image"] : "";
$name = isset($_GET["name"])? $_GET["name"] : "";
$new = isset($_GET["new"])? $_GET["new"] : "";
$old = isset($_GET["old"])? $_GET["old"] : "";
$num = isset($_GET["num"])? $_GET["num"] : "";

// echo $id,$image,$name,$new,$old,$num
// var_dump ($num);
    $sql = "insert into car_user (_id,img,name,yuanjia,sale,num,userid) values ($id,'$image','$name','$old','$new',$num,'$userid')";
    
$res = $conn->query($sql);
if($res){
    echo "插入成功";
}else {
    echo 'no';
}
$conn->close();

?>