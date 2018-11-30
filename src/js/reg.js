$(function(){
    $('#nav .nav_lb li').hover(function(){
        $(this).css('background','#00BA31');
        $(this).find('.content').css('display','block');
    },function(){
        $(this).css('background','#336B48');
        $(this).find('.content').css('display','none');
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

    $('#user_reglogin .list .reg .reg_btn').click(function(){
        var name=$('#user_reglogin .list .reg .txtUserName').val();
        var psw=$('#user_reglogin .list .reg .txtPassword').val();
        name=$.trim(name);
        psw=$.trim(psw);
        // console.log(name);
        // console.log(psw);
        if(psw && name){
            $.ajax({
                type:'post',
                url:'../api/reg.php',
                async:true,
                data:{
                   'username' :name,
                   'psw':psw,
                   'time':new Date()
                },
                success:function(str){
                    var arr=JSON.parse(str);
                    
                    if(arr.y=='yes'){
                        
                        Cookie.set('loginName',arr.loginName,{'path':'/quhecha/src/'});
                        location.href='../main.html';
                    }else if(arr.y=='no_username'){
                        alert('用户名错误，登录失败');
                    }else if(arr.y=='no_psw'){
                        alert('密码错误，登录失败');
                    }
                }
            });
        }else{
            alert('用户名和密码不能为空');
        }
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