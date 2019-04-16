<?php
    include "connect.php";
    $id = isset($_GET["id"])? $_GET["id"] : "";
    $shuliang = isset($_GET["num"])? $_GET["num"] : "";
    $res = $conn->query("UPDATE car_user SET num = '$shuliang' WHERE id = '$id'");
    echo $res;
    // $row = $res->fetch_all(MYSQLI_ASSOC);
    // echo json_encode($row,JSON_UNESCAPED_UNICODE);
?>