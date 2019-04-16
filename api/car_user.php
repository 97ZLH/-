<?php
    include 'connect.php';
    header("content-type:text/html;charset=utf-8");
    $res = $conn->query("SELECT * FROM car_user ");
    $row=$res->fetch_all(MYSQLI_ASSOC);//对象
    echo json_encode($row,JSON_UNESCAPED_UNICODE); 
?>