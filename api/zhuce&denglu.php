<?php
      include 'connect.php';
      header("content-type:text/html;charset=utf-8");

     $email = isset($_POST["email"])? $_POST["email"] : "";
   //   echo $email;
     $res = $conn->query("SELECT * FROM users WHERE email='${email}'");
     $row = $res->fetch_all(MYSQLI_ASSOC);//对象 [{},{},{}]
     if($row){
        echo 1; 
     }else{
        echo 0;
     }
	

	// $res->close();
	// $conn->close();
?>