<?php
 include 'connect.php';
 header("content-type:text/html;charset=utf-8");
 $pwd = isset($_POST["pwd"])? $_POST["pwd"] : "";
 $res = $conn->query("SELECT * FROM users WHERE passwd='${pwd}'");
 $row = $res->fetch_all(MYSQLI_ASSOC);//对象 [{},{},{}]
 if($row){
    echo 1; 
 }else{
    echo 0;
 }
?>