<?php
 include 'connect.php';
 header("content-type:text/html;charset=utf-8");

$email = isset($_POST["email"])? $_POST["email"] : "";
$password = isset($_POST["password"])? $_POST["password"] : "";

//  echo $password,$email;
//   echo $email;
$res1 = $conn->query("SELECT * FROM users WHERE email='${email}'and passwd='${password}'");
$res = $res1->num_rows;
//  $row = $res1->fetch_all(MYSQLI_ASSOC);//对象 [{},{},{}]
echo $res
// if($res){
//    echo 1; 
// }else{
//    echo 0;
// }

?>