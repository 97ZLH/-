<?php
    include "connect.php";
    $id = isset($_GET["id"])? $_GET["id"] : "";
    $res = $conn->query("DELETE FROM car_user where id='$id'");
    // echo $res;
    // $row = $res->fetch_all(MYSQLI_ASSOC);
    // echo json_encode($row,JSON_UNESCAPED_UNICODE);
    $rew = $conn->query("select * from car_user");
    $row = $rew->fetch_all(MYSQLI_ASSOC);
    echo json_encode($row,JSON_UNESCAPED_UNICODE);
?>