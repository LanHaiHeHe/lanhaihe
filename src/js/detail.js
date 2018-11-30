$(function(){
    // 数据渲染
    
    msgInf();
    function msgInf(){
        var str=location.search.slice(1);
        var id=str.split('=')[1];
        $.ajax({
            type:'get',
            url:'../api/idSelectShop.php',
            async:true,
            data:{
                'id':id,
                'time':new Date()
            },
            success:function(str){
                var arr=JSON.parse(str);
                var res=arr.list.map(function(item){

                    return `<div class="imgbox">
                            <div class="imgdet wrap">
                                
                                <div class="imgpart">
                                    
                                    <div class="pic">
                                        <img src="../img/${item.tu1}" alt="">
                                        
                                        <div class="magnify"></div>
                                    </div>
                                    
                                    <div class="bigpic">
                                        <img src="../img/${item.tu1}" alt="">
                                    </div>
                                </div>

                                <div class="imgbtn">
                                    <span class="btn_l">&lt;</span>
                                    <span class="btn_r">&gt;</span>
                                </div>
                                <div class="imglist">
                                    <ul>
                                        <li class="active">
                                            <img src="../img/${item.tu1}" alt="">
                                        </li>
                                        <li>
                                            <img src="../img/${item.tu2}" alt="">
                                        </li>
                                        <li>
                                            <img src="../img/${item.tu3}" alt="">
                                        </li>
                                        <li>
                                            <img src="../img/${item.tu4}" alt="">
                                        </li>
                                        <li>
                                            <img src="../img/${item.tu5}" alt="">
                                        </li>
                                    </ul>
                                </div>
                            </div>
                                <div class="shop_share">
                                    <div class="shop_collect">
                                        <p class="col">
                                            收藏商品
                                        </p>
                                    </div>
                                    <div class="shop_collect">
                                        <p class="sha">
                                            分享商品
                                        </p>
                                        <div class="share_r">
                                            <a href="https://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=http%3A%2F%2Fwww.hecha.cn%2Fsgoods-5971.html%230-qzone-1-53647-d020d2d2a4e8d1a374a433f596ad1440&title=%E3%80%90%E6%BB%8B%E6%81%A9%E3%80%91%E4%B8%80%E7%BA%A7%E7%A2%A7%E8%9E%BA%E6%98%A5%E7%BD%90%E8%A3%8570g&desc=&summary=&site=" title="分享到QQ空间" target="_blank" class="bds_qzone"></a>
                                            <a href="http://service.weibo.com/share/share.php?url=http%3A%2F%2Fwww.hecha.cn%2Fsgoods-5971.html%230-tsina-1-80163-397232819ff9a47a7b7e80a40613cfe1&title=%E3%80%90%E6%BB%8B%E6%81%A9%E3%80%91%E4%B8%80%E7%BA%A7%E7%A2%A7%E8%9E%BA%E6%98%A5%E7%BD%90%E8%A3%8570g&appkey=1343713053&searchPic=true#_loginLayer_1543055198763" title="分享到新浪微博" target="_blank" class="bds_tsina"></a>
                                            <a href="https://www.qq.com/?fromdefault" title="分享到腾讯微博" target="_blank" class="bds_tqq"></a>
                                            <a href="http://widget.renren.com/dialog/share?resourceUrl=http%3A%2F%2Fwww.hecha.cn%2Fsgoods-5971.html%230-renren-1-19815-98fde57bb3d39343db0f272b38411f3e&srcUrl=http%3A%2F%2Fwww.hecha.cn%2Fsgoods-5971.html%230-renren-1-19815-98fde57bb3d39343db0f272b38411f3e&title=%E3%80%90%E6%BB%8B%E6%81%A9%E3%80%91%E4%B8%80%E7%BA%A7%E7%A2%A7%E8%9E%BA%E6%98%A5%E7%BD%90%E8%A3%8570g&description=" title="分享到人人网" target="_blank" class="bds_renren"></a>
                                            <a href="https://passport.baidu.com/v2/?login&u=https%3A%2F%2Fwenzhang.baidu.com%2F" title="分享到百度搜藏" target="_blank" class="bds_baidu"></a>
                                            <a href="https://www.douban.com/share/service?href=http%3A%2F%2Fwww.hecha.cn%2Fsgoods-5971.html%230-douban-1-89302-8281435cf7fd5566f1df466eda875057&name=%E3%80%90%E6%BB%8B%E6%81%A9%E3%80%91%E4%B8%80%E7%BA%A7%E7%A2%A7%E8%9E%BA%E6%98%A5%E7%BD%90%E8%A3%8570g&text=" title="分享到豆瓣网" target="_blank" class="bds_douban"></a>
                                            <div class="share_more">
                                                <span>更多</span>
                                                <div class="share_mlist">
                                                    <h6>
                                                        分享到
                                                        <span></span>
                                                    </h6>
                                                    <ul>
                                                        <li><a class="bds_mshare" href="javascript:;">一键分享</a></li>
                                                        <li><a class="bds_qzone " href="javascript:;">QQ空间</a></li>
                                                        <li><a class="bds_tsina " href="javascript:;">新浪微博</a></li>
                                                        <li><a class="bds_bdysc" href="javascript:;">百度云收藏</a></li>
                                                        <li><a class="bds_renren " href="javascript:;">人人网</a></li>
                                                        <li><a class="bds_tqq " href="javascript:;">腾讯微博</a></li>
                                                        <li><a class="bds_bdxc " href="javascript:;">百度相册</a></li>
                                                        <li><a class="bds_kaixin001 " href="javascript:;">开心网</a></li>
                                                        <li><a class="bds_tqf " href="javascript:;">腾讯朋友</a></li>
                                                        <li><a class="bds_tieba " href="javascript:;">百度贴吧</a></li>
                                                        <li><a class="bds_douban " href="javascript:;">豆瓣网</a></li>
                                                        <li><a class="bds_tsohu " href="javascript:;">搜狐微博</a></li>
                                                        <li><a class="bds_bdhome " href="javascript:;">百度新首页</a></li>
                                                        <li><a class="bds_sqq " href="javascript:;">QQ好友</a></li>
                                                        <li><a class="bds_thx " href="javascript:;">和讯微博</a></li>
                                                        <li><a class="bds_more" href="javascript:;">更多...</a></li>
                                                    </ul>
                                                    <p>
                                                        <a class="goWebsite" href="javascript:;">百度分享</a>
                                                    </p>
                                                </div>
                                            </div>
                                            <a href="javascript:;" class="share_count">1</a>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>
                            <div class="texbox">
                                <h1 class="shop_name">
                                    ${item.shopname}
                                </h1>
                                <ul class="shop_price">
                                    <li class="price_1">活动价</li>
                                    <li class="price_2">
                                        
                                        <strong class="salePrice">
                                           ￥${item.nowprice}
                                        </strong>
                                    </li>
                                    <li class="price_3">
                                        <span>特享</span>
                                        包邮
                                    </li>
                                    <li class="price_4">
                                        和茶价
                                        <del class="hechaPrice">
                                           ￥ ${item.hechaprice}
                                        </del>
                                    </li>
                                    <li class="price_5">
                                        市场价
                                        <del class="marketPrice">
                                            ￥${item.markprice}
                                        </del>
                                    </li>
                                </ul>
                                <ul class="info1">
                                    <li class="t1">
                                        <p class="left">配送至&nbsp;:</p>
                                        <div class="zoli">
                                            <div class="zol">
                                                <a href="javascript:;">
                                                    <span class="showname">福建省</span>
                                                </a>
                                                <div class="ixbox">
                                                    <p>
                                                        <a href="javascript:;">吉林省</a>
                                                        <a href="javascript:;">北京</a>
                                                        <a href="javascript:;">内蒙古</a>
                                                        <a href="javascript:;">云南省</a>
                                                        <a href="javascript:;">上海</a>
                                                        <a href="javascript:;">四川省</a>
                                                        <a href="javascript:;">天津</a>
                                                        <a href="javascript:;">宁夏</a>
                                                        <a href="javascript:;">安徽省</a>
                                                        <a href="javascript:;">山东省</a>
                                                        <a href="javascript:;">山西省</a>
                                                        <a href="javascript:;">广东省</a>
                                                        <a href="javascript:;">广西</a>
                                                        <a href="javascript:;">新疆</a>
                                                        <a href="javascript:;">江苏省</a>
                                                        <a href="javascript:;">江西省</a>
                                                        <a href="javascript:;">河北省</a>
                                                        <a href="javascript:;">河南省</a>
                                                        <a href="javascript:;">浙江省</a>
                                                        <a href="javascript:;">海南省</a>
                                                        <a href="javascript:;">湖北省</a>
                                                        <a href="javascript:;">湖南省</a>
                                                        <a href="javascript:;">甘肃省</a>
                                                        <a href="javascript:;">福建省</a>
                                                        <a href="javascript:;">西藏</a>
                                                        <a href="javascript:;">贵州省</a>
                                                        <a href="javascript:;">辽宁省</a>
                                                        <a href="javascript:;">重庆</a>
                                                        <a href="javascript:;">陕西省</a>
                                                        <a href="javascript:;">青海省</a>
                                                        <a href="javascript:;">黑龙江省</a>
                                                        <a href="javascript:;">海外</a>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <p>包邮</p>&nbsp;&nbsp;&nbsp;&nbsp;
                                        <p>有货</p>
                                    </li>
                                    <li class="t2">
                                        <p class="left">顾客评分:</p>
                                        <p>
                                            <span>
                                                <span class="xstars">
                                                    <a href="javascript:;">
                                                        
                                                    </a>
                                                </span>
                                                4.78分
                                            </span>
                                        </p>
                                        (&nbsp;
                                        <span class="link1">
                                            已有${item.pnum}人评论
                                        </span>
                                        &nbsp;)
                                    </li>
                                </ul>
                                <ul class="info2 clearfix">
                                    <li class="t1">
                                        <p class="left">
                                            品牌商家：
                                        </p>
                                        <p>
                                            滋恩
                                        </p>
                                    </li>
                                    <li class="t2">
                                        <p class="left">
                                            产地：
                                        </p>
                                        <p>
                                            福建
                                        </p>
                                    </li>
                                    <li class="t3">
                                        <p class="left">
                                            等级：
                                        </p>
                                        <p>
                                            一级
                                        </p>
                                    </li>
                                    <li class="t4">
                                        <p class="left">
                                            保质期：
                                        </p>
                                        <p>
                                            18个月
                                        </p>
                                    </li>
                                    <li class="t5">
                                        <p class="left">
                                            产品编号：
                                        </p>
                                        <p>
                                            NZE-1C1150
                                        </p>
                                    </li>
                                    <li class="t6">
                                        <p class="left">
                                            产品规格：
                                        </p>
                                        <p>
                                            70g/罐
                                        </p>
                                    </li>
                                    <li class="t7">
                                        <p class="left">
                                            存储方法：
                                        </p>
                                        <p>
                                            存放于清洁、通风、避光、干燥、无异味环境。
                                        </p>
                                    </li>
                                </ul>
                                <ul class="info3" data-id="${item.id}">
                                    <li class=" t1 clearfix" >
                                        <p class="left">
                                            我要购买：
                                        </p>
                                        <div class="shop_inp">
                                            <input class="shop_num" type="text" value="1" min="1"/>
                                            <i class="shop_add">+</i>
                                            <i class="shop_min">-</i>
                                        </div>
                                        <p>件</p>
                                    </li>
                                    <li class="buy">
                                        <a href="javascript:;" target="_blank">
                                            <img src="../img/shop_buy1.png"  alt="" />
                                        </a>
                                    </li>
                                    <li class="buy">
                                        <a href="javascript:;" target="_blank">
                                            <img src="../img/shop_buy2.png" alt="" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div class="probox">
                                <div class="title">
                                    看过的用户还看过
                                </div>
                                <div class="probox_rlist1">
                                    
                                </div>
                                <a class="prev" href="javascript:;"></a>
                                <a class="next" href="javascript:;"></a>
                            </div>`;
                }).join('');
                $('#shop_inf').html(res);
            }
        });
    }
    // 跳转购物车页
    $('#shop_inf').on('click','.texbox .info3 .buy ',function(){
        var id=$(this).parent().attr('data-id');
        var num=$(this).parent().find('.t1 .shop_inp .shop_num').val();
        $.ajax({
            type:'get',
            url:'../api/insertOrder.php',
            async:true,
            data:{
                'num':num,
                'id':id,
                'time':new Date()
            },
            success:function(str){
                if(str=='yes'){
                    location.href='shopcar.html';
                }else if(str=='no'){
                    alert('网站错误,不能跳转');
                }
            }
        });
    });

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
    // 放大镜
    $(function() {
        (function() {
            var ulobj = $(" #shop_inf .imglist ul");

            var picimg = $("#shop_inf .imgpart .pic img");
            var objimg = $("#shop_inf .imgpart .bigpic img");
            $('#shop_inf').on("mouseenter", ".imgbox .imglist ul li", function() {

                var imgsrc = $(this).children("img").attr("src");
                // console.log(imgsrc);
                $(this).addClass("active").siblings().removeClass("active");
                $("#shop_inf .imgpart .pic img").attr("src", imgsrc);
                $("#shop_inf .imgpart .bigpic img").attr("src", imgsrc);
            });
             var pic = $("#shop_inf .imgpart .pic");
             var magnify  = $("#shop_inf .imgpart .pic .magnify");
             var bigpic=$("#shop_inf .imgpart .bigpic");
             var objimg  = $("#shop_inf .imgpart .bigpic img");
            $('#shop_inf').on('mousemove','.imgbox .imgpart .pic',function(e) {
                $("#shop_inf .imgpart .pic .magnify").show();
                $("#shop_inf .imgpart .bigpic").show();
                 var pagex = e.pageX;
                 var pagey = e.pageY;
                 var pictop = $("#shop_inf .imgpart .pic").offset().top;

                 var picleft = $("#shop_inf .imgpart .pic").offset().left;
                 var magnifyw = $("#shop_inf .imgpart .pic .magnify").width();
                 var magnifyh = $("#shop_inf .imgpart .pic .magnify").height();
                 var magnifytop = pagey - pictop - magnifyh / 2;

                 var magnifyleft = pagex - picleft - magnifyw / 2;
                 
                 var picw = $("#shop_inf .imgpart .pic").width() - magnifyw;
                 var pich = $("#shop_inf .imgpart .pic").height() - magnifyh;
                magnifytop = magnifytop < 0 ? 0 : magnifytop;
                magnifyleft = magnifyleft < 0 ? 0 : magnifyleft;
                magnifytop = magnifytop > pich ? pich : magnifytop;
                magnifyleft = magnifyleft > picw ? picw : magnifyleft;
                $("#shop_inf .imgpart .pic .magnify").css({ top: magnifytop, left: magnifyleft });
                 var minl = $("#shop_inf .imgpart .bigpic").width() - $("#shop_inf .imgpart .bigpic img").width();
                 var mint = $("#shop_inf .imgpart .bigpic").height() - $("#shop_inf .imgpart .bigpic img").height();
                 var objimgl = -magnifyleft * 2;
                 var objimgt = -magnifytop * 2;
                objimgl = objimgl < minl ? minl : objimgl;
                objimgt = objimgt < mint ? mint : objimgt;
                $("#shop_inf .imgpart .bigpic img").css({ top: objimgt, left: objimgl });
            });
            $('#shop_inf').on('mouseleave','.imgbox .imgpart .pic',function() {
                $("#shop_inf .imgpart .pic .magnify").hide();
                $("#shop_inf .imgpart .bigpic").hide()
            })
        })()
    });
    
    // 更多显示
    // $('#shop_inf .imgbox .shop_share .share_more').hover(function(){
    //     $('#shop_inf .imgbox .shop_share .share_mlist').show();
    // },function(){
    //     $('#shop_inf .imgbox .shop_share .share_mlist').hide();
    // });
    $('#shop_inf').on('mouseenter','.imgbox .shop_share .share_more',function(){
        $('#shop_inf .imgbox .shop_share .share_mlist').show();
    });
    $('#shop_inf').on('mouseleave','.imgbox .shop_share .share_more',function(){
        $('#shop_inf .imgbox .shop_share .share_mlist').hide();
    });

    // $('#shop_inf .imgbox .shop_share .share_count').click(function(){
    //     $('#shop_inf .imgbox .shop_share .share_mlist').show().css({'position':'fixed','top':'50%','left':'50%','transform':'translate(-50%,-50%)'});
    // });
    
    // 选择省份
    $('#shop_inf ').on('click','.texbox .info1 .ixbox a',function(){
        $('#shop_inf .texbox .info1 .showname').html($(this).html());
    });

    //数量加减
    $('#shop_inf ').on('click','.shop_add',function(){
        var num=$('#shop_inf .texbox .info3 .shop_inp .shop_num').val();
        num++;
        if(num>=99){
            num=99;
        }
        if(num<=1){
            num=1;
        }
        $('#shop_inf .texbox .info3 .shop_inp .shop_num').val(num);
    });
    $('#shop_inf ').on('click','.shop_min',function(){
        var num=$('#shop_inf .texbox .info3 .shop_inp .shop_num').val();
        num--;
        if(num<=1){
            num=1;
        }
        if(num>=99){
            num=99;
        }
        $('#shop_inf .texbox .info3 .shop_inp .shop_num').val(num);
    });

    // 模块连接的选项卡
    $('#package_show .package_showt ul li').click(function(){
        

        var nowLeft=$('#package_show .package_showb .bigbox').css('left');
        if(nowLeft=='0px' && $(this).hasClass('on')==false){
            $('#package_show .package_showb .bigbox').animate({'left':-1250},500);
        }else if(nowLeft=='-1250px' && $(this).hasClass('on')==false){
            $('#package_show .package_showb .bigbox').animate({'left':0},500);
        }
        $('#package_show .package_showt ul li').removeClass('on');
        $(this).addClass('on');
    });
    $('#package_show .package_showb .bigbox .hd_r li').click(function(){
        $('#package_show .package_showb .bigbox .hd_r li').removeClass('on');
        $(this).addClass('on');
    });
    var totalPrice=138.00;
    var vipPrice=45.00;
    $('#package_show .package_showb .bigbox .QL em input').click(function(){
        if($(this).prop('checked')){
           vipPrice+=$(this).parent().parent().find('strong').text().slice(2)*1;
           totalPrice+=$(this).parent().parent().find('del').text().slice(2)*1;
        }else{
            vipPrice-=$(this).parent().parent().find('strong').text().slice(2)*1;
            totalPrice-=$(this).parent().parent().find('del').text().slice(2)*1;
        }
        var VipPrice=vipPrice.toFixed(2);
        var TotalPrice=totalPrice.toFixed(2);  
        var cha=(TotalPrice-VipPrice).toFixed(2); 
        $('#package_show .package_showb .bigbox .total .VipPrice').text('￥'+VipPrice);
        $('#package_show .package_showb .bigbox .total .TotalPrice').text('￥'+TotalPrice);
        $('#package_show .package_showb .bigbox .total .StatePrice').text('￥'+cha);
    });

    // 吸顶和跟随
    // var top=$('#shop_detail .shop_detail_l_title').offset().top;
    top=1285;
    $(window).scroll(function(){
        var scrollTop=window.scrollY;
        if(scrollTop>=top && scrollTop<=12970){
            $('#shop_detail .shop_detail_l_title').addClass('shop_detail_l_miue');
            $('#shop_inf .texbox').addClass('texbox_minu');
            if(scrollTop>=12218 && scrollTop<=12970){
                // $('#shop_inf .texbox').removeClass('texbox_minu');
                $('#shop_inf .texbox').addClass('texbox_ag');
            }else{
                $('#shop_inf .texbox').removeClass('texbox_ag');
            }
        }else{
            $('#shop_detail .shop_detail_l_title').removeClass('shop_detail_l_miue');
            $('#shop_inf .texbox').removeClass('texbox_minu');
            $('#shop_inf .texbox').removeClass('texbox_ag');
        }
        for(var i=0;i<$('.shop_detail_l_box>div').length;i++){
            if(scrollTop>=$('.shop_detail_l_box>div').eq(i).offset().top){
                $('.shop_detail_l_title ul li').removeClass('on');
                $('.shop_detail_l_title ul li').eq(i).addClass('on');
            }
        }
    });
    $('.shop_detail_l_title ul li').click(function(){
        $('#shop_detail .shop_detail_l_title').addClass('shop_detail_l_miue');
        $('.shop_detail_l_title ul li').removeClass('on');
        $(this).addClass('on');
        var scrollTo=$('.shop_detail_l_box>div').eq($(this).index()).offset().top;
        $('body,html').animate({"scrollTop": scrollTo}, 300);
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
