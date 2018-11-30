$(function(){
    $('#nav .nav_lb li').hover(function(){
        $(this).css('background','#00BA31');
        $(this).find('.content').css('display','block');
    },function(){
        $(this).css('background','#336B48');
        $(this).find('.content').css('display','none');
    });
    var isok1=false;
    var isok2=false;
    var isok3=false;
    var isok4=false;
    var isok5=false;
    var isok6=false;
    // 验证登录名是否存在
    $('#user_reglogin .regbox .LoginAccount').blur(function(){
        isok1=false;
        var val=$('#user_reglogin .regbox .login .LoginAccount').val();
        val=$.trim(val);
        if(val){
            if(checkReg.tel(val) || checkReg.email(val)){
                $.ajax({
                    type:"get",
                    url:"../api/checkName.php",
                    async:true,
                    data :{
                        'username':val,
                        'time':new Date()
                    },
                    success:function(str){
                        if(str=='yes'){
                            $('#user_reglogin .regbox .login .login_user').html('可注册,登录名不能修改，请记住！');
                            $('#user_reglogin .regbox .login .login_user').addClass('change_green');
                            isok1=true;
                        }else if(str=='no'){
                            $('#user_reglogin .regbox .login .login_user').html('已经存在');
                            $('#user_reglogin .regbox .login .login_user').removeClass('change_green');
                            $('#user_reglogin .regbox .login .login_user').addClass('change_red');
                        }
                    }
                });
            }else{
                $('#user_reglogin .regbox .login .login_user').html('登录名必须是邮箱或手机号');
                $('#user_reglogin .regbox .login .login_user').removeClass('change_green');
                $('#user_reglogin .regbox .login .login_user').addClass('change_red');
                // $('#user_reglogin .regbox .login .LoginAccount').val('');
                // $('#user_reglogin .regbox .login .LoginAccount').focus();
            }
        }else{
            $('#user_reglogin .regbox .login .login_user').html('不能为空');
            $('#user_reglogin .regbox .login .login_user').removeClass('change_green');
            $('#user_reglogin .regbox .login .login_user').addClass('change_red');
            // $('#user_reglogin .regbox .login .LoginAccount').val('');
            // $('#user_reglogin .regbox .login .LoginAccount').focus();
        }
    });
    // 验证昵称不为空
    $('#user_reglogin .regbox .LoginName').blur(function(){
        isok2=false;
        var val=$('#user_reglogin .regbox .login .LoginName').val();
        val=$.trim(val);
        if(val){
            $('#user_reglogin .regbox .login .login_notice').html('昵称可以在用户中心修改！');
            $('#user_reglogin .regbox .login .login_notice').addClass('change_green');
            isok2=true;
        }else{
            $('#user_reglogin .regbox .login .login_notice').html('不能为空');
            $('#user_reglogin .regbox .login .login_notice').removeClass('change_green');
            $('#user_reglogin .regbox .login .login_notice').addClass('change_red');
        }
    });
    // 验证密码长度和不为空
    $('#user_reglogin .regbox .Password').blur(function(){
        isok3=false;
        var val=$('#user_reglogin .regbox .login .Password').val();
        val=$.trim(val);
        if(val && checkReg.pswaeasy(val)){
            $('#user_reglogin .regbox .login .password_notice').html('');
            $('#user_reglogin .regbox .login .password_notice').addClass('change_green');
            isok3=true;
        }else{
            $('#user_reglogin .regbox .login .password_notice').html('请输入6-16位密码,且不能为空。');
            $('#user_reglogin .regbox .login .password_notice').removeClass('change_green');
            $('#user_reglogin .regbox .login .password_notice').addClass('change_red');
        }
    });
    // 验证密码一致且不为空
    $('#user_reglogin .regbox .AgainPassWord').blur(function(){
        isok4=false;
        var val1=$('#user_reglogin .regbox .login .AgainPassWord').val();
        var val2=$('#user_reglogin .regbox .login .Password').val();
        val1=$.trim(val1);
        val2=$.trim(val2);
        if(val1 && checkReg.pswaeasy(val1)){
            if(val1==val2){
                $('#user_reglogin .regbox .login .conform_password_notice').html('');
                $('#user_reglogin .regbox .login .conform_password_notice').addClass('change_green');
                isok4=true;
            }else{
                $('#user_reglogin .regbox .login .conform_password_notice').html('两次输入密码不一致 ');
                $('#user_reglogin .regbox .login .conform_password_notice').removeClass('change_green');
                $('#user_reglogin .regbox .login .conform_password_notice').addClass('change_red');
            }
        }else{
            $('#user_reglogin .regbox .login .conform_password_notice').html('请输入6-16位密码,且不能为空。');
            $('#user_reglogin .regbox .login .conform_password_notice').removeClass('change_green');
            $('#user_reglogin .regbox .login .conform_password_notice').addClass('change_red');
        }
    });
    //验证邮箱格式和不为空
    $('#user_reglogin .regbox .Email').blur(function(){
        isok5=false;
        var val=$('#user_reglogin .regbox .login .Email').val();
        val=$.trim(val);
        if(val && checkReg.email(val)){
            $('#user_reglogin .regbox .login .emailInfo').html('');
            $('#user_reglogin .regbox .login .emailInfo').addClass('change_green');
            isok5=true;
        }else{
            $('#user_reglogin .regbox .login .emailInfo').html('请输入正确的Email格式');
            $('#user_reglogin .regbox .login .emailInfo').removeClass('change_green');
            $('#user_reglogin .regbox .login .emailInfo').addClass('change_red');
        }
    });
    // 验证码的变换
    $('#user_reglogin .regbox .login .auth').html(radomCode());
    $('#user_reglogin .regbox .login .auth').css('color',randomColor(16));
    $('#user_reglogin .regbox .login .auth').css('background',randomGradient());
    $('#user_reglogin .regbox .login .auth').click(function(){
        $('#user_reglogin .regbox .login .auth').html(radomCode());
        $('#user_reglogin .regbox .login .auth').css('color',randomColor(16));
        $('#user_reglogin .regbox .login .auth').css('background',randomGradient());
    });
    $('#user_reglogin .regbox .login .chageCode').click(function(){
        $('#user_reglogin .regbox .login .auth').html(radomCode());
        $('#user_reglogin .regbox .login .auth').css('color',randomColor(16));
        $('#user_reglogin .regbox .login .auth').css('background',randomGradient());
    });
    $('#user_reglogin .regbox .Code').blur(function(){
        isok6=false;
        var val1=$('#user_reglogin .regbox .login .Code').val();
        var val2=$('#user_reglogin .regbox .login .auth').text();
        val1=$.trim(val1);
        val2=$.trim(val2);
        if(val1){
            if(val1==val2){
                $('#user_reglogin .regbox .login .trueCode').html('验证码正确');
                $('#user_reglogin .regbox .login .trueCode').addClass('change_green');
                isok6=true;
            }else{
                $('#user_reglogin .regbox .login .trueCode').html('验证码不正确 ');
                $('#user_reglogin .regbox .login .trueCode').removeClass('change_green');
                $('#user_reglogin .regbox .login .trueCode').addClass('change_red');
            }
        }else{
            $('#user_reglogin .regbox .login .trueCode').html('不能为空。');
            $('#user_reglogin .regbox .login .trueCode').removeClass('change_green');
            $('#user_reglogin .regbox .login .trueCode').addClass('change_red');
        }
    });


    $('#user_reglogin .regbox .login .Register').click(function(){
        if(isok1){
            if(isok2){
                if(isok3){
                    if(isok4){
                        if(isok5){
                            if(isok6){
                                var username=$('#user_reglogin .regbox .login .LoginAccount').val();
                                var psw=$('#user_reglogin .regbox .login .Password').val();
                                var val=$('#user_reglogin .regbox .login .LoginName').val();
                                $.ajax({
                                    type:"post",
                                    url:"../api/login.php",
                                    async:true,
                                    data:{
                                        'username':username,
                                        'psw':psw,
                                        'time':new Date(),
                                        'loginName':val
                                    },
                                    success:function(str){
                                        if(str=='yes'){
                                            
                                            Cookie.set('loginName',val,{'path':'/quhecha/src/'});
                                            location.href='reg.html';
                                        }
                                    }
                                });  
                            }else{
                                $('#user_reglogin .regbox .login .trueCode').html('不能为空。');
                                $('#user_reglogin .regbox .login .trueCode').removeClass('change_green');
                                $('#user_reglogin .regbox .login .trueCode').addClass('change_red');
                                $('#user_reglogin .regbox .login .Code').focus();
                            }
                        }else{
                            $('#user_reglogin .regbox .login .emailInfo').html('请输入正确的Email格式');
                            $('#user_reglogin .regbox .login .emailInfo').removeClass('change_green');
                            $('#user_reglogin .regbox .login .emailInfo').addClass('change_red');
                            $('#user_reglogin .regbox .login .Email').focus();
                        }
                    }else{
                        $('#user_reglogin .regbox .login .conform_password_notice').html('请输入6-16位密码,且不能为空。');
                        $('#user_reglogin .regbox .login .conform_password_notice').removeClass('change_green');
                        $('#user_reglogin .regbox .login .conform_password_notice').addClass('change_red');
                        $('#user_reglogin .regbox .login .AgainPassWord').focus();
                    }
                }else{
                    $('#user_reglogin .regbox .login .password_notice').html('请输入6-16位密码,且不能为空。');
                    $('#user_reglogin .regbox .login .password_notice').removeClass('change_green');
                    $('#user_reglogin .regbox .login .password_notice').addClass('change_red');
                    $('#user_reglogin .regbox .login .Password').focus();
                }
            }else{
                $('#user_reglogin .regbox .login .login_notice').html('不能为空');
                $('#user_reglogin .regbox .login .login_notice').removeClass('change_green');
                $('#user_reglogin .regbox .login .login_notice').addClass('change_red');
                $('#user_reglogin .regbox .login .LoginName').focus();

            }
        }else{
            $('#user_reglogin .regbox .login .login_user').html('不能为空');
            $('#user_reglogin .regbox .login .login_user').removeClass('change_green');
            $('#user_reglogin .regbox .login .login_user').addClass('change_red');
            $('#user_reglogin .regbox .login .LoginAccount').val('');
            $('#user_reglogin .regbox .login .LoginAccount').focus();
        }
    });


    $('#message .message_t span').on('click',function(){
        $(this).toggleClass('message_min');
        $('#message .message_c').toggle();
        $('#message .message_b').toggle();
    });

    $('#main .ri .shoplist .shoplist_t .t_style li').on('click',function(){
        $('#main .ri .shoplist .shoplist_t .t_style li').removeClass('green');
        $(this).addClass('green');
    });
    $('#main .ri .shoplist .shoplist_t .t_style li .img').on('click',function(){
        $('#main .ri .shoplist .shoplist_c .goodlist li').removeClass('goolist_r');
    });
    $('#main .ri .shoplist .shoplist_t .t_style li .list').on('click',function(){
        $('#main .ri .shoplist .shoplist_c .goodlist li').addClass('goolist_r');
    });

    // 购物车有多少商品
    function shopcarnum(){
        $.ajax({
            type:'get',
            url:'../api/selectOrder.php',
            async:true,
            data:{
                'time':new Date()
            },
            success:function(str){
                var arr=JSON.parse(str);
                var name=Cookie.get('loginName');
                
                    $('#logo .code_car .car_num').html(arr.length);
              
                
            }
        });
    }
    shopcarnum();
});