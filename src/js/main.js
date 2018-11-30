$(function(){
    // 首页的二级菜单
    $('#nav .nav_lb li').hover(function(){
        $(this).css('background','#00BA31');
        $(this).find('.content').css('display','block');
        
    },function(){
        $(this).css('background','#336B48');
        $(this).find('.content').css('display','none');
    });
    // 标签运动
    $('#logo .logo a img').hover(function(){
        $(this).animate({'top':15},200);
    },function(){
        $(this).animate({'top':20},100);
    });
    //若登陆可以要换标签
    function updateName(){
        var name=Cookie.get('loginName');
        if(name){
            var res=`<a href="main.html" class="freereg">${name}</a>
                     欢迎登录和茶网！
                     <a href="main.html" class="backOut" style="margin-left:13px">[退出登录]</a>`;
            $('#top .top .top_l').html(res);
        }else{
            var res2=`<a href="html/login.html" target="_blank" class="freereg">免费注册</a>
                    <a href="html/reg.html" target="_blank" class="loging">登陆</a>`;
            $('#top .top .top_l').html(res2);
        }
    }
    updateName();
    
    
    $('#top .top .top_l').on('click','.backOut',function(){
        Cookie.remove('loginName','/quhecha/src/');
        updateName();
    });
    // 轮播图
    /*
        步骤：
            ul运动，运动距离为每次增加的li宽度
            开定时器：每次轮播一个图
            焦点跟随
            点击焦点去到对应的图
     */
    var iW=$('#banner .bannerimg li').eq(0).outerWidth();
 
    $('#banner .bannerimg li').css('left',iW);
    $('#banner .bannerimg li').eq(0).css('left',0);
    var timer=null;
    clearInterval(timer);
    var now=0;
    
    timer=setInterval(next,2000);
    
    function next(){
        $('#banner .bannerimg li').eq(now).animate({'left':-iW},500);
        now=++now>=$('#banner .bannerimg li').size()?0:now;
        $('#banner .bannerimg li ').eq(now).css('left',iW);
        $('#banner .bannerimg li ').eq(now).animate({'left':0},500);
        light();
    }
    
    
    function light(){
        $('#banner .light span').removeClass('active');
        $('#banner .light span').eq(now).addClass('active');
    }
    
   
    //鼠标经过停止，鼠标离开继续运动
    $('#banner .banner_r').hover(function(){
        clearInterval(timer);
    },function(){
        clearInterval(timer);
        timer=setInterval(next,2000);
    });

    $('#banner .banner_r .light span').click(function(){
        var index=$(this).index();
        if(index>now){
            $('#banner .bannerimg li').eq(now).animate({'left':-iW},500);
            $('#banner .bannerimg li ').eq(index).css('left',iW);
            $('#banner .bannerimg li ').eq(index).animate({'left':0},500);
            now=index;

        }
        if(index<now){
            $('#banner .bannerimg li').eq(now).animate({'left':iW},500);
            $('#banner .bannerimg li ').eq(index).css('left',-iW);
            $('#banner .bannerimg li ').eq(index).animate({'left':0},500);
            now=index;
        }    
        light();
    });

    // 出来阴影
    $('#hot-sale ul li').hover(function(){
        $(this).animate({top:'-3px'},200);
    },function(){
        $(this).animate({top:0},200);
    });

    // 列表区图片移动
    // $('#good_tea .tea_con_b dd a').hover(function(){
    //     $(this).find('img').animate({'left':'-10px'},100);
    // },function(){
    //     $(this).find('img').animate({'left':'0'},100);
    // });
    $('#good_tea ').on('mouseover','.tea_con_b dd a',function(){
        $(this).find('img').animate({'left':'0px'},100);
    }).on('mouseleave','.tea_con_b dd a',function(){
        $(this).find('img').animate({'left':'5px'},100);
    });

    // 评论图图片移动
    $('#comment ').on('mouseover','.comment_c .pic',function(){
        $(this).find('img').animate({'left':'-8px'},100);
    }).on('mouseleave','.comment_c .pic',function(){
        $(this).find('img').animate({'left':'0'},100);
    });
    // 自助机跳转
    $('#brief ul ').on('click','li ',function(){
        var id=$(this).attr('data-id');
        location.href="html/detail.html?id="+id;
    });
    // 爆款特卖跳转
    $('#hot-sale ul ').on('click','li ',function(){
        var id=$(this).attr('data-id');
        location.href="html/detail.html?id="+id;
    });

    // 列表页渲染
    $('#good_tea .tea_con').on('click','.tea_con_b dt',function(){
        var id=$(this).attr('data-id');
        location.href="html/detail.html?id="+id;
    });

    function shopxr(){
        $.ajax({
            type:'get',
            url:'api/selectShop.php',
            async:true,
            data:{
                'page':3,
                'qty':4,
                'time':new Date()
            },
            success:function(str){
                var arr=JSON.parse(str);
                var res=arr.datalist.map(function(item){
                    return `<a href="javascript:;" target="_blank" data-id="${item.id}">
                                <img src="img/${item.tu1}"  alt="" />
                                    <div class="dd_b">
                                        <p>${item.shopname}</p>
                                        <p>
                                            <span class="price_prev">￥${item.nowprice}</span>
                                            <span class="price_next"><del>￥${item.markprice}</del></span>
                                        </p>
                                    </div>
                            </a>`;
                }).join('');
                $('#good_tea .tea_con_b dd').html(res);
            }
        });
    }
    shopxr();
    $('#good_tea .tea_con').on('click','.tea_con_b dd a',function(){
        var id=$(this).attr('data-id');
        location.href="html/detail.html?id="+id;
    });
    function shopxb(){
        $.ajax({
            type:'get',
            url:'api/selectShop.php',
            async:true,
            data:{
                'page':5,
                'qty':3,
                'time':new Date()
            },
            success:function(str){
                var arr=JSON.parse(str);
                var res=arr.datalist.map(function(item){
                    return `<div class="comment_c" data-id="${item.id}">
                                <a href="javascript:;" target="_blank">
                                    <div class="pic">
                                        <img src="img/${item.tu1}" alt="" />
                                    </div>
                                    
                                    <div class="txt">
                                        <p class="word">老客户了 依然非常喜欢 质量有保证 全五分 值得推荐 服务非 常周到 从这里购物心情愉快 话不多说了 总之老板很好。</p>
                                        <p class="from">来自388****2614@qq.com</p>
                                        <p>${item.shopname}  &nbsp;&nbsp;&nbsp;&nbsp;|<span>￥${item.nowprice}</span></p>
                                    </div>
                                </a>
                            </div>`;
                }).join('');
                $('#comment .con .comment_con').html(res);
            }
        });
    }
    shopxb();
    $('#comment .con .comment_con').on('click','.comment_c',function(){
        var id=$(this).attr('data-id');
        location.href="html/detail.html?id="+id;
    });

    // 购物车有多少商品
    function shopcarnum(){
        $.ajax({
            type:'get',
            url:'api/selectOrder.php',
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
});


