jQuery(function ($) { 
    //购物车页面渲染
    function show(arr){
        var total=0 ;
        var youhui =0;
        var res = arr.map(function (item) {
            total += ((item.sale * 1) * (item.num *1));
            youhui +=(((item.yuanjia-item.sale).toFixed(2) * 1) * (item.num *1));
            return `<tr class="cart-list-tr" data-id="${item.id}">
   <td width="460" class="col-cover">
       <div class="cover-info"> <a href="" target="_blank"
               class="book-cover"> <img
                   src="${item.img}" alt="书籍封面">
               <input type="hidden" class="J_bookId" name="bookId" value="9049255">
           </a> <a class="book-name" title="${item.name}" href=""
               target="_blank">${item.name}</a> </div>
   </td>
   <td class="col-credit">3</td>
   <td class="col-wl-price common-price" style="padding-top:0;"> ￥${item.sale} </td>
   <td class="col-discount common-price"> ￥${(item.yuanjia-item.sale).toFixed(2)} </td>
   <td class="col-buy-num">
       <div class="num-panel"> 
        <a href="javascript:;" class="minus"></a> 
        <input type="text" class="buy-num" value="${item.num}"> 
        <a href="javascript:;" class="plus"></a> 
     </div>
   </td>
   <td class="col-op"> <a href="javascript:;" class="J_collect">收藏</a> <a
           href="javascript:;" class="J_del" data-activeid="-1">删除</a> </td>
</tr>`
        }).join('');
        $("#t_body").html(res);
        $("#J_price, #J_total").text(total.toFixed(2));
        $("#J_thriftPrice").text(youhui.toFixed(2));
    }
    $.ajax({
        url: '../api/car_user.php',
        success: function (data) {
            var arr = JSON.parse(data);
            // console.log(arr);
            show(arr);
        }
    });       
// console.log(total.toFixed(2));
            //点击减  购买数量减一
        $("#t_body").on("click",".minus", function(){
            var _id = $(this).parent().parent().parent().attr("data-id");
            var numm = $(this).next().val()*1;
            var str = $(this).html();//获取所点击的按钮是哪个
            numm--;
            var numm = numm +1;
            if(numm<=1){
              return  numm = 1;
            }
            console.log(numm--);
            $.ajax({
                type: "GET",
                url: "../api/val_cart.php",
                data: { "num": numm, "id": _id },
                success: function (res) {
                    $.ajax({
                        type: "GET",
                        url: "../api/car_user.php",
                        success: function (res) {
                            var arr = JSON.parse(res);
                            show(arr); 
                        }
                    });
                }
            })
            // console.log(numm);
            // console.log(_id);
        })  

        $("#t_body").on("click",".plus", function(){
            var _id = $(this).parent().parent().parent().attr("data-id");
            var numm = $(this).prev().val()*1;
            
            numm++ ;
            var numm = numm -1;
            console.log(numm++);
            $.ajax({
                type: "GET",
                url: "../api/val_cart.php",
                data: { "num": numm, "id": _id },
                success: function (res) {
                    $.ajax({
                        type: "GET",
                        url: "../api/car_user.php",
                        success: function (res) {
                            var arr = JSON.parse(res);
                            show(arr); 
                        }
                    });
                }
            })
            // console.log(numm);
            // console.log(_id);
        });  
            //点击删除
            $("#t_body").on("click",".J_del", function(){
                // var _id = $(this).parent().parent().parent().attr("data-id");
                // var numm = $(this).next().val();
                var _id = $(this).parent().parent().attr("data-id");
                console.log(_id);
                var rem = confirm("确认删除该商品吗？");
                if(rem){
                    $.ajax({//点击时发送请求，在数据库中删除数据
                        type: "GET",
                        url: "../api/del_cart.php",
                        data:{"id": _id},
                        success: function (res) {
                                    var arr = JSON.parse(res);
                                    show(arr);       
                        }
                    })
                    console.log(numm);
                    console.log(_id);
                }
              
            });
            //全删      
            $("#J_empty").on("click",function(){
                // console.log("ddd")
                $.ajax(
                    {   type:'GET',
                        url:'../api/del_all.php',
                        success:function(res){
                            $("#t_body").html(" "); 
                        }
                    }
                )
            })
        
    
})