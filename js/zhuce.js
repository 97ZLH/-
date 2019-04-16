jQuery(function($){
    // 当邮箱输入框失去焦点时，验证邮箱
    // var email = $("#J_email");
    // var _email = email.value;
    $("#J_email").on("blur",function(){
        var _email=$("#J_email").val();
     if(/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(_email)){
        $.post("../api/zhuce&denglu.php",{email:_email},function(data){
            // console.log(data);
            if(data == 0){
                $("#J_email").next().text("该邮箱可用").css({"color":"green"});
            }else if(data == 1){
                $("#J_email").next().text("该邮箱已被注册").css({"color":"red"});
                return;
            }
        })
     }else{
        $("#J_email").next().text("输入的email地址格式不正确").css({"color":"red"});
        return;
     }   
       
    });




    //当密码框失去焦点时，验证密码
    // var password = $("#J_pwd_email");
    // var _password = password.value;
    
    $("#J_pwd_email").on("blur",function(){
        var _password=$("#J_pwd_email").val();
        ///^[a-zA-Z][\w\-]{5,19}$/
        if(/^[a-zA-Z][\w\-]{5,19}$/.test(_password)){
            $("#J_pwd_email").next().text("密码合格").css({"color":"green"});
        }else{
            $("#J_pwd_email").next().text("请输入长为6-20个字符的密码，密码必须包含数字、字母").css({"color":"red"});
        }
    })

    
    $("#sure_pwd").on("blur", function(){
        var _sure = $("#sure_pwd").val();
        var _password=$("#J_pwd_email").val();
        if(_sure){
            //非空
            if(_sure == _password){
                $("#sure_pwd").next().text("密码一致").css({"color":"green"});
            }else{
                $("#sure_pwd").next().text("两次密码输入不一致").css({"color":"red"});
            }
        }else{
            //空
            $("#sure_pwd").next().text("密码不能为空").css({"color":"red"});
        }
        
    })
    
    var submit_Btn = $(".register-email-submit");
    $(submit_Btn).on("click",function(){
        var _email=$("#J_email").val();
        var _password=$("#J_pwd_email").val();
        if(_email && _password ){
            $.post("../api/zhuce_insert.php",{email:_email,password:_password},function(data){
                console.log(data);
                if(data == 1){
                    location = "../html/denglu.html";
                }else if(data == 0 ){
                    alert("登录失败！");
                }
            })
        }else{
            console.log(666);
            alert("内容不能为空！");   
        }
    })
})



