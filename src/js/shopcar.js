$(function(){
    $('#nav .nav_lb li').hover(function(){
        $(this).css('background','#00BA31');
        $(this).find('.content').css('display','block');
    },function(){
        $(this).css('background','#336B48');
        $(this).find('.content').css('display','none');
    });
    // 是否登录
    function updateName(){
        var name=Cookie.get('loginName');
        if(name){
            var res=`<a href="../main.html" class="freereg">${name}</a>
                     欢迎登录和茶网！
                     <a href="../main.html" class="backOut" style="margin-left:13px">[退出登录]</a>`;
            $('#top .top .top_l').html(res);
        }else{
            var res2=`<a href="login.html" target="_blank" class="freereg">免费注册</a>
                    <a href="reg.html" target="_blank" class="loging">登陆</a>`;
            $('#top .top .top_l').html(res2);
        }
    }
    updateName();
    
    
    $('#top .top .top_l').on('click','.backOut',function(){
        Cookie.remove('loginName','/quhecha/src/');
        updateName();
    });
    // 购物车页渲染和操作
    var arr = [];
    
    function shopcarxr(){
        $.ajax({
            type:'get',
            url:'../api/selectOrder.php',
            async:true,
            data:{
                'time':new Date()
            },
            success:function(str){
                var arr=JSON.parse(str);
                var res='';
                for(var i=0;i<arr.length;i++){
                    res+=`<li class="pro clearfix" data-id="${arr[i].id}">
                            <p class="ck">
                                <input type="checkbox" style="border:2px solid #000;"/>
                            </p>
                            <p class="img">
                                <a href="detail.html" target="_blank">
                                    <img src="../img/${arr[i].tu1}" alt="" />
                                </a>
                            </p>
                            <p class="txt">
                                <a href="detail.html" target="_blank">
                                    ${arr[i].shopname}
                                </a>
                            </p>
                            <p class="mpri">
                                <del> ${arr[i].markprice}</del>
                                <strong>${arr[i].nowprice}</strong>
                            </p>
                            <p class="save">
                                <strong>${(arr[i].markprice-arr[i].nowprice).toFixed(2)}</strong>
                                <span>8.0折</span>
                            </p>
                            <p class="sunm">
                                <input type="text" class="nownum" value="${arr[i].num}" min="1" />
                                <i class="goods_add"></i>
                                <i class="goods_min"></i>
                            </p>
                            <p class="pri">
                                <strong> ${arr[i].nowprice}</strong>
                            </p>
                            <p class="st">
                                <span class="del">X</span>
                            </p>
                        </li>`;
                }
                 var newhtml=$('#cart_bg .cart_list .shopcarlist').html()+res;
                // console.log(newhtml);
                $('#cart_bg .cart_list .shopcarlist').html(newhtml);
                // console.log(123);
                
                update();
            }
        });
    }
    shopcarxr();
    // 加减数量
    function upnum(num,now){
        $.ajax({
            type:'get',
            url:'../api/updataOrder.php',
            async:true,
            data:{
                'id':now,
                'num':num,
                'time':new Date()
            },
            success:function(str){
                if(str){

                }
            }
        })
    }
    // 加数量
    $('#cart_bg .shopcarlist').on('click','.pro .sunm  .goods_add',function(){
        var val=$(this).prev().val();
        val++;
        if(val>=99){
            val=99;
        }
        var gid=$(this).parent().parent().attr('data-id');
        //接口 更新数据库数量
        upnum(val,gid)
        $(this).prev().val(val);
        $(this).parent().parent().find('.ck input').prop('checked','checked');
        updatePrice();
        update();
    });
    // 减数量
    $('#cart_bg .shopcarlist').on('click','.pro .sunm  .goods_min',function(){
        var val=$(this).prev().prev().val();
        val--;
        if(val<=1){
            val=1;
        }
        //接口 更新数据库数量
        var gid=$(this).parent().parent().attr('data-id');
        //接口 更新数据库数量
        upnum(val,gid);
        $(this).prev().prev().val(val);
        $(this).parent().parent().find('.ck input').prop('checked','checked');
        updatePrice();
        update();
    });
    //删除当行
    $('#cart_bg .shopcarlist').on('click','.pro .st ',function(){
        var mes=confirm('确定要删除？');
        if(mes){
            $(this).parent().remove();
            //接口 ：删除数据库的某行
            var delid=$(this).parent().attr('data-id');
            $.ajax({
                type:'get',
                url:'../api/deleteOrder.php',
                async:true,
                data:{
                    'id':delid,
                    'time':new Date()
                },
                success:function(str){
                    if(str=='yes'){
                        updatePrice();
                        update();
                    }
                }
            });
        }
        
    });
    update();
    // 更新状态
    function update(){
        if($('.goods_add').size()==0){
            $('#cart_bg .shopcarlist').css('display','none');
        }else{
            $('#cart_bg .shopcarlist').css('display','block');
        }
        if(arr.length==0){
            $('#cart_bg .GiftList').css('display','none');
        }else{
            $('#cart_bg .GiftList').css('display','block');
        }
    }
    
    
    // 全选
    var isok=true;
    $('#cart_bg .cart_list .txc .ck').on('click',function(){
        if(isok){
            $(this).find('input').prop('checked','checked');
            $('#cart_bg .shopcarlist .pro .ck input').prop('checked','checked');
            $('#cart_bg .shopcarlist .txb .ck input').prop('checked','checked');
        }else{
            $(this).find('input').removeAttr('checked');
            $('#cart_bg .shopcarlist .pro .ck input').removeAttr('checked');
            $('#cart_bg .shopcarlist .txb .ck input').removeAttr('checked');
        }
        isok=!isok;
        updatePrice();
        update();
    });
    // var isok2=true
    $('#cart_bg .cart_list .shopcarlist ').on('click','.txb .ck',function(){
        if(isok){
            $(this).find('input').prop('checked','checked');
            $('#cart_bg .shopcarlist .pro .ck input').prop('checked','checked');
            $('#cart_bg .cart_list .txc .ck input').prop('checked','checked');
        }else{
            $(this).find('input').removeAttr('checked');
            $('#cart_bg .shopcarlist .pro .ck input').removeAttr('checked');
            $('#cart_bg .cart_list .txc .ck input').removeAttr('checked');
        }
        isok=!isok;
        updatePrice();
        update();

    });
    // 复选框被勾选
    $('#cart_bg .shopcarlist').on('click','.pro .ck input',function(){
        updatePrice();
        if(arr.length==$('#cart_bg .shopcarlist .pro .ck').size()){
            $('#cart_bg .cart_list .txc .ck input').prop('checked','checked');
            $('#cart_bg .cart_list .shopcarlist .txb .ck input').prop('checked','checked');
            isok=false;
        }else{
            $('#cart_bg .cart_list .txc .ck input').removeAttr('checked');
            $('#cart_bg .cart_list .shopcarlist .txb .ck input').removeAttr('checked');
            isok=true;
        }
        update();
    });

    function updatePrice(){
        arr.length=0;
        var leng=$('#cart_bg .shopcarlist .pro .ck input').length;
        for(var i=0;i<leng;i++){
            if($('#cart_bg .shopcarlist .pro .ck input').eq(i).prop('checked')){
                arr.push(i);
            }
        }
        var totalPrice=0;
        var jifen=0;
        for(var i=0; i<arr.length;i++){
            var price=$('#cart_bg .shopcarlist .pro .pri strong').eq(arr[i]).html();
            var num=$('#cart_bg .shopcarlist .pro .sunm input').eq(arr[i]).val();
            price = $.trim(price);
            num = $.trim(num);
            price=price*1;         
            num=num*1;
            var total=num*price;
            totalPrice+=total;
            var jifenTotal=num*90;
            jifen+=jifenTotal;
        }
        $('#cart_bg  .pribox .pri .priTotal').html(totalPrice.toFixed(2));
        $('#cart_bg .cart_title i strong .totalPrice').html(totalPrice.toFixed(2));
        $('#cart_bg .GiftList .pro .img .juan strong').html(jifen);
        $('#cart_bg .GiftList .pro .mpri strong').html(jifen+'积分');
    }

    // 删除多行
    $('#cart_bg .cart_list .txc .st a').click(function(){
        updatePrice();
        if(arr.length==0){
            alert('请选择要删除的产品');
        }else if(arr.length>0){
            var mes=confirm('确认要删除选中的产品？');
            if(mes){
                // 接口更新数据
                var newid='';
                var le=arr.length;
                for(var i=0;i<le;i++){
                    newid+=$('#cart_bg .shopcarlist .pro .ck').eq(arr[i]).parent().attr('data-id')+',';
                }
                newid=newid.slice(0,-1);
                // console.log(newid);
                
                $.ajax({
                    type:"get",
                    url:"../api/deleteOrder.php",
                    async:true,
                    data:{
                        'id':newid,
                        'time':new Date()
                    },
                    success:function(str){
                        // console.log(str);
                    }
                });
                for(var i=arr.length-1;i>=0;i--){
                    $('#cart_bg .shopcarlist .pro').eq(arr[i]).remove();
                }
            }
        }
        updatePrice();
        update();   
    });
    //手动输入价格
    $('#cart_bg').on('blur','.shopcarlist .pro .sunm .nownum',function(){
        updatePrice();
        update();
        var val=$(this).val();
        var gid=$(this).parent().parent().attr('data-id');
        upnum(val,gid);
        // 接口更新数量
    });
    // 留言板的放大缩小
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