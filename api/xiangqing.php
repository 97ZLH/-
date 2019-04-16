<?php
 include 'connect.php';
 header("content-type:text/html;charset=utf-8");
 $id = isset($_POST["id"])? $_POST["id"] : ""; 
 $res = $conn->query("SELECT * FROM goodslist WHERE id='${id}'");
 $row=$res->fetch_all(MYSQLI_ASSOC);
 echo json_encode($row,JSON_UNESCAPED_UNICODE);
?>