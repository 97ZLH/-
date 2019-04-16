jQuery(function($){
   $("#J_userName").on("blur",function(){
    var _email=$("#J_userName").val();
    if(_email){
        $.post("../api/zhuce&denglu.php",{email:_email},function(data){
            // console.log(data);
            if(data == 1){
                $("#J_loginErrorTip").css({"opacity":"0"});
                $("#J_userName").css({"border":""});
            }else if(data == 0){
                // $("#J_email").next().text("该邮箱还未注册").css({"color":"red"});
                $("#J_loginErrorTip").css({"opacity":"100"}).text("请先注册"); 
                $("#J_userName").css({"border":"2px solid red"});
            }
        })
    }else{
        $("#J_loginErrorTip").css({"opacity":"0"});
        $("#J_userName").css({"border":""});
        alert("信息不能为空");
        return;
    }
   }) 

   $("#J_pwd").on("blur",function(){
       var _pwd = $("#J_pwd").val();
       $.post("../api/denglu.php",{pwd:_pwd},function(data){
        if(data == 1){
            $("#J_loginErrorTip").css({"opacity":"0"});
            $("#J_pwd").css({"border":""});
        }else if(data == 0){
            // $("#J_email").next().text("该邮箱还未注册").css({"color":"red"});
            $("#J_loginErrorTip").css({"opacity":"100"}).text("密码错误"); 
            $("#J_pwd").css({"border":"2px solid red"});
        }
       })
   })

  
   $("#J_loginBtn").on("click",function(){
        var _email=$("#J_userName").val();
        var _pwd = $("#J_pwd").val();
        if(_email && _pwd ){
            $.post("../api/denglu_btn.php",{email:_email, password:_pwd},function(data){
                console.log(data);
                if(data == 1){  
                    document.cookie = "name="+ _email+"; path = /";
                    location = "../zhuye.html";
                }else if(data == 0 ){
                    alert("登录失败！");
                }
            })
        }else{
            alert("内容不能为空！"); 
        }
    })
})