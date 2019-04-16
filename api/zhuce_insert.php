<?php
      include 'connect.php';
      header("content-type:text/html;charset=utf-8");

     $email = isset($_POST["email"])? $_POST["email"] : "";
     $password = isset($_POST["password"])? $_POST["password"] : "";
     
    //  echo $password,$email;
   //   echo $email;
     $res = $conn->query("INSERT INTO users (email, passwd) VALUES ('$email', '$password')");
    //  $row = $res->fetch_all(MYSQLI_ASSOC);//对象 [{},{},{}]
     if($res){
        echo 1; 
     }else{
        echo 0;
     }
	

	// $res->close();
	// $conn->close();
?>