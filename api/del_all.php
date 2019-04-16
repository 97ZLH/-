<?php
    include "connect.php";
   
    $res = $conn->query("DELETE FROM car_user");
    // echo $res;
    // $row = $res->fetch_all(MYSQLI_ASSOC);
    // echo json_encode($row,JSON_UNESCAPED_UNICODE);
    // $rew = $conn->query("select * from car_user");
    // $row = $rew->fetch_all(MYSQLI_ASSOC);
    if($res){
        echo 1;
    }else{
        echo json_encode($row,JSON_UNESCAPED_UNICODE);
    }
    
?>