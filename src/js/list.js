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


    // 数据渲染
    function TOPxr(){
        $.ajax({
            type:'get',
            url:'../api/selectShop.php',
            async:true,
            data:{
                'page':2,
                'qty':10,
                'time':new Date()
            },
            success:function(str){
                var arr=JSON.parse(str);
                var res=arr.datalist.map(function(item){
                    return `<li class="clearfix" data-id="${item.id}">
                                <a href="javascript:;" target="_blank">
                                    <img src="../img/${item.tu2}" alt="" />
                                </a>
                                <div class="pro_r">
                                    <p>
                                        <a href="detail.html">${item.shopname}</a>
                                    </p>
                                    <p>
                                        <strong>¥${item.nowprice}</strong>
                                        <del>¥${item.markprice}</del>
                                    </p>
                                </div>
                            </li>`;
                }).join('');
                $('#main .le .prolist').html(res);
            }
        });
    }
    TOPxr();

    
    $('#main .le .prolist').on('click','li',function(){
        var id=$(this).attr('data-id');
        location.href="detail.html?id="+id;
    });


    // 排序渲染
    var rows=0;
    var now_page=1;
    function sortxr(name,desc,page){
        $.ajax({
            type:'get',
            url:'../api/sortShop.php',
            async:true,
            data:{
                'inf':name,
                'desc':desc,
                'page':page,
                'qty':12,
                'time':new Date()
            },
            success:function(str){
                var arr=JSON.parse(str);
                var res=arr.datalist.map(function(item){
                    return `<li class="" data-id="${item.id}">
                                <div class="img">
                                    <a href="javascript:;" target="_blank">
                                        <img src="../img/${item.tu2}" alt="" />
                                    </a>
                                </div>
                                <div class="name">
                                    <a href="javascript:;" target="_blank">
                                        ${item.shopname}
                                    </a>
                                </div>
                                <div class="newpri">
                                    ￥${item.nowprice}
                                </div>
                                <div class="oldpri clearfix">
                                    <span>
                                        市场价
                                        <del>￥${item.markprice}</del>
                                    </span>
                                    <p>
                                        <a href="javascript:;" target="_blank">
                                          ${item.pnum}  
                                        </a>
                                        人评论
                                    </p>
                                </div>
                                <div class="buy">
                                    <a href="cart.html" target="_blank" class="nowbuy">
                                        立即购买
                                    </a>
                                    <a href="cart.html" target="_blank" class="carbuy">
                                        加入购物车
                                    </a>
                                </div>
                            </li>`;
                }).join('');
                $('#main .ri .shoplist_c .goodlist').html(res);
                var pagenum=Math.ceil(arr.total/arr.qty);
                rows=pagenum;
                var pagexr='';
                for(var i=0;i<pagenum;i++){
                    pagexr+=`<span>
                                <a href="javascript:;">${i+1}</a>
                            </span>`;
                }
                $('#main .ri .shoplist_b .page_b').html(pagexr);
                $('#main .ri .shoplist_b .page_b span').removeClass('page_now');
                $('#main .ri .shoplist_b .page_b span').eq(now_page-1).addClass('page_now');
                var shoptotal=`第 ${now_page}页， 共 2 页 [共${arr.total}件商品]`;
                $('#main .ri .shoplist_b>span').text(shoptotal);
                var shopt=`共${arr.total}件商品`;
                $('#main .ri .shoplist_t .total_shop').text(shopt);
                var t_page=`${now_page}/${rows}`;
                $('#main .ri .shoplist_t .t_page .now').text(t_page);
            }
        });
    }
    sortxr('id','desc',1);
    
    // 跳转详情页
    $('#main .ri .shoplist_c .goodlist').on('click','li .img ',function(){
        var id=$(this).parent().attr('data-id');
        location.href="detail.html?id="+id;
    });
    $('#main .ri .shoplist_c .goodlist').on('click','li .name ',function(){
        var id=$(this).parent().attr('data-id');
        location.href="detail.html?id="+id;
    });
    $('#main .ri .shoplist_c .goodlist').on('click','li .oldpri a ',function(){
        var id=$(this).parent().parent().parent().attr('data-id');
        location.href="detail.html?id="+id;
    });
    var isok1=false;
    var isok2=false;
    var isok3=false;
    
    // 上下页
    
    $('#main .ri .shoplist_t .t_page .next').click(function(){
        now_page++;
        
        if(now_page>=rows){
            now_page=rows;
        }
        $('#main .ri .shoplist_b .page_b span').removeClass('page_now');
        $('#main .ri .shoplist_b .page_b span').eq(now_page-1).addClass('page_now');
        var t_page2=`${now_page}/${rows}`;
        $('#main .ri .shoplist_t .t_page .now').text(t_page2);
        if(isok1==true && isok2==false && isok3==false){
            
            if($('#main .ri .shoplist_t .t_sort li').eq(0).find('a').hasClass('desc')){
                sortxr('nowprice','asc',now_page);
                
            }else if($('#main .ri .shoplist_t .t_sort li').eq(0).find('a').hasClass('asc')){
                sortxr('nowprice','desc',now_page);
                
            }
        }
        if(isok2==true && isok1==false && isok3==false){
            
            if($('#main .ri .shoplist_t .t_sort li').eq(1).find('a').hasClass('desc')){
                sortxr('salenum','asc',now_page);
            }else if($('#main .ri .shoplist_t .t_sort li').eq(1).find('a').hasClass('asc')){
                sortxr('salenum','desc',now_page);
            }
        }
        if(isok3==true && isok1==false && isok2==false){
            
            if($('#main .ri .shoplist_t .t_sort li').eq(2).find('a').hasClass('desc')){
                sortxr('pnum','asc',now_page);
            }else if($('#main .ri .shoplist_t .t_sort li').eq(2).find('a').hasClass('asc')){
                sortxr('pnum','desc',now_page);
            }
        }
        if(isok3==false && isok1==false && isok2==false){
            sortxr('id','desc',now_page);
        }
    });
    $('#main .ri .shoplist_t .t_page .prev').click(function(){
        now_page--;
        if(now_page<=1){
            now_page=1;
        }
        var t_page1=`${now_page}/${rows}`;
        $('#main .ri .shoplist_t .t_page .now').text(t_page1);
        $('#main .ri .shoplist_b .page_b span').removeClass('page_now');
        $('#main .ri .shoplist_b .page_b span').eq(now_page-1).addClass('page_now');
        if(isok1==true && isok2==false && isok3==false){
            
            if($('#main .ri .shoplist_t .t_sort li').eq(0).find('a').hasClass('desc')){
                sortxr('nowprice','asc',now_page);
                
            }else if($('#main .ri .shoplist_t .t_sort li').eq(0).find('a').hasClass('asc')){
                sortxr('nowprice','desc',now_page);
            }
        }
        if(isok2==true && isok1==false && isok3==false){
            
            if($('#main .ri .shoplist_t .t_sort li').eq(1).find('a').hasClass('desc')){
                sortxr('salenum','asc',now_page);
            }else if($('#main .ri .shoplist_t .t_sort li').eq(1).find('a').hasClass('asc')){
                sortxr('salenum','desc',now_page);
            }
        }
        if(isok3==true && isok1==false && isok2==false){
            
            if($('#main .ri .shoplist_t .t_sort li').eq(2).find('a').hasClass('desc')){
                sortxr('pnum','asc',now_page);
            }else if($('#main .ri .shoplist_t .t_sort li').eq(2).find('a').hasClass('asc')){
                sortxr('pnum','desc',now_page);
            }
        }
        if(isok3==false && isok1==false && isok2==false){
            sortxr('id','desc',now_page);
        }
    });
    $('#main .ri .shoplist_t .t_sort li').eq(0).find('a').click(function(){
        if($(this).hasClass('desc')){
            $(this).removeClass('desc');
            $(this).addClass('asc');
            sortxr('nowprice','desc',1);
        }else if($(this).hasClass('asc')){
            $(this).removeClass('asc');
            $(this).addClass('desc');
            sortxr('nowprice','asc',1);
        }
        now_page=1;
        isok1=true;
        isok2=false;
        isok3=false;

    });
    $('#main .ri .shoplist_t .t_sort li').eq(1).find('a').click(function(){
        if($(this).hasClass('desc')){
            $(this).removeClass('desc');
            $(this).addClass('asc');
            sortxr('salenum','desc',1);
        }else if($(this).hasClass('asc')){
            $(this).removeClass('asc');
            $(this).addClass('desc');
            sortxr('salenum','asc',1);
        }
        now_page=1;
        isok2=true;
        isok1=false;
        isok3=false;
    });
    $('#main .ri .shoplist_t .t_sort li').eq(2).find('a').click(function(){
        if($(this).hasClass('desc')){
            $(this).removeClass('desc');
            $(this).addClass('asc');
            sortxr('pnum','desc',1);
        }else if($(this).hasClass('asc')){
            $(this).removeClass('asc');
            $(this).addClass('desc');
            sortxr('pnum','asc',1);
        }
        now_page=1;
        isok3=true;
        isok1=false;
        isok2=false;
    });

    $('#main .ri .shoplist_b .page_b').on('click','span a',function(){
        now_page=$(this).text();

        if(isok1==true && isok3==false && isok2==false){
            if($('#main .ri .shoplist_t .t_sort li').eq(0).find('a').hasClass('desc')){
                sortxr('nowprice','asc',now_page);
                
                
            }else if($('#main .ri .shoplist_t .t_sort li').eq(0).find('a').hasClass('asc')){
                sortxr('nowprice','desc',now_page);
                
            }

        }
        if(isok2==true && isok1==false && isok3==false){
            if($('#main .ri .shoplist_t .t_sort li').eq(1).find('a').hasClass('desc')){
                sortxr('salenum','asc',now_page);
            }else if($('#main .ri .shoplist_t .t_sort li').eq(1).find('a').hasClass('asc')){
                sortxr('salenum','desc',now_page);
            }
        }
        if(isok3==true && isok1==false && isok2==false){
            if($('#main .ri .shoplist_t .t_sort li').eq(2).find('a').hasClass('desc')){
                sortxr('pnum','asc',now_page);
            }else if($('#main .ri .shoplist_t .t_sort li').eq(2).find('a').hasClass('asc')){
                sortxr('pnum','desc',now_page);
            }
        }
        if(isok3==false && isok1==false && isok2==false){
            sortxr('id','desc',now_page);
        }
        
    });




    // 商品筛选单选框
    $('.sizer  .l1 .sizer_r input').on('click',function(){
        var isok=$(this).prop('checked');
        if(isok){
            $('.sizer .l1 .sizer_r input').removeAttr('checked');
            $(this).prop('checked','checked');
        }else{
            $(this).removeAttr('checked');
        }
        isok=!isok;
    });
    $('.sizer  .l2 .sizer_r input').on('click',function(){
        var isok=$(this).prop('checked');
        if(isok){
            $('.sizer .l2 .sizer_r input').removeAttr('checked');
            $(this).prop('checked','checked');
        }else{
            $(this).removeAttr('checked');
        }
        isok=!isok;
    });
    $('.sizer  .l3 .sizer_r input').on('click',function(){
        var isok=$(this).prop('checked');
        if(isok){
            $('.sizer .l3 .sizer_r input').removeAttr('checked');
            $(this).prop('checked','checked');
        }else{
            $(this).removeAttr('checked');
        }
        isok=!isok;
    });
    $('.sizer  .l4 .sizer_r input').on('click',function(){
        var isok=$(this).prop('checked');
        if(isok){
            $('.sizer .l4 .sizer_r input').removeAttr('checked');
            $(this).prop('checked','checked');
        }else{
            $(this).removeAttr('checked');
        }
        isok=!isok;
    });

    // 数据渲染
    


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