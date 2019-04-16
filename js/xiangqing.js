jQuery(function($){

//详情页渲染
    var date = decodeURI(location.search);
   
    date = date.slice(1);
    $.ajax({
        url:'../api/xiangqing.php',
        type:'post',
        data:{
            'id' : date
        },
        success : function(data){
            // console.log(data);
          var arr = JSON.parse(data);
        //   console.log(arr);
          var res = arr.map(function(item){
              return `
             
              <h1 class="book-title">
                  ${item.names}
              </h1>
              <div class="book-adcontent"></div>
              <div class="book-intro">
                  <div class="book-cover">
                           <a class="cover-show bk-img-box" id="J_sx" href="${item.img}" title="点击查看大图">
                              <img src="${item.img}" data-magnification="5" data-imagezoom="http://img.wl.cn/b/2074/9322074/9322074.jpg" alt="商品图片">
                          </a>
                      <div class="evaluate">
                          <span>顾客评分：</span>
                          <span>已有0人评论</span>
                      </div>
                          <div id="bdshare" style="margin-left: 25px;" class="bdshare_t bds_tools get-codes-bdshare">
                              <span class="bds_more">分享到：</span>
                              <a class="bds_qzone" href="javascript:;"></a>
                              <a class="bds_tsina" href="javascript:;"></a>
                              <a class="bds_tqq" href="javascript:;"></a>
                              <a class="bds_renren" href="javascript:;"></a>
                              <a class="bds_t163" href="javascript:;"></a>
                              <a class="shareCount" href="javascript:;"></a>
                          </div> 
                  </div>
                  <div class="book-sale-info">
                      
                      <div class="book-price">
                          <p>
                              蔚蓝价：<span id="J_bookPrice">
                                              ${item.now}
                                      </span>
                          </p>
                          <p>
                              定&nbsp;&nbsp;价：<span class="old-price">${item.prev}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                              折扣：
                                           79
                                      </p>
                              <p>
                                  vip(2-3星)：
                                  <span class="common-emprice">33.3</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                  svip(4-5星):<span class="common-emprice">33.3</span>
                              </p>
                          
          
                      </div>
                      <div class="book-other-info">
                          
                          <p>
                              <span>作&nbsp;&nbsp;&nbsp;&nbsp;者：</span>
                                      <a class="blue" href="javascript:window.location.href=encodeURI('https://www.wl.cn/search?author=蔡康永 著')">${item.writer} 著</a>
                                          ,
                                      
                                      <a class="blue" href="javascript:window.location.href=encodeURI('https://www.wl.cn/search?author=博集天卷 出品')">博集天卷 出品</a>
                                  著
                          </p>
                          <p>
                              <span>出&nbsp;版&nbsp;社：</span>
                              <a href="javascript:window.location.href=encodeURI('https://www.wl.cn/search?publisher=湖南文艺出版社')">${item.chuban}</a>
                          </p>
                          <p>
                              <span>出版时间：</span>
                             ${item.times}
                          </p>
                          <p>
                              <span>I&nbsp;S&nbsp;B&nbsp;N&nbsp;：</span>
                              9787540481551
                          </p>
                      </div>
                      <div class="book-word-count">
                          <p>
                                       字数：暂无&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;	
                                      页数：271&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                      开本：32开&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                       包装：平装-胶订
                          </p>
                      </div>
                      <form class="buy-panel" method="post" action="">
                          <p>
                              我要买<input name="count" type="text" id="J_buyNumField" class="good-num" onKeyUp="count.value=(this.value=this.value.replace(/\D/g,'').substring(0,6)).substring(0,3)"  value="1">件
                          </p>
                          <p class="buy-wrapper clearfix">
                              <a href="javascript:;" class="add-to-cart sell 
                              " id="J_addToCart">加入购物车</a>
                              <a class="add-to-fav" id="J_addToFav" href="javascript:;" data-error-url="">我要收藏</a>
                          </p>
                      </form>
                  </div>
                 
              </div>
               <div style="width: 790px">
                  <a href="http://www.wl.cn/zhuanti/30" target="_blank">
                  <img alt="" src="http://static.wl.cn/upload/zhuanti/cs_790-160.jpg" border="0">
                  </a>
                  <a href="http://www.wl.cn/8832614" target="_blank">
                  <img alt="" src="http://static.wl.cn/upload/zhuanti/%E4%B8%96%E7%95%8C%E6%98%AF%E7%BA%A2%E8%89%B2%E7%9A%84790-160.jpg" border="0">
                  </a>
               </div>
       
              `
          }).join('');
          $(".book-essential-info").html(res);
           //购物车弹窗
           //console.log($("#J_bookDetailPopup"));
          $("#J_addToCart").on("click",function(){
            $("#J_bookDetailPopup").css("display","block");
            var _id = arr[0].id;
            var _image = arr[0].img;
            var _name = arr[0].names;
            var _new = arr[0].now;
            var _old = arr[0].prev;
            var cookie = document.cookie;
            var cookies = cookie.split("=");
            var userid = cookies[1];
            // console.log(userid);
            // console.log($("#goodsnum").val())
            var num = $("#J_buyNumField").val();
            // console.log(num);
            $.ajax({
                type: "GET",
                url: "../api/query_cart.php",
                data: { "id": _id },
                success: function (res) {
                    // console.log(_image, _name, _new, _old,num,);
                    if (res == 0) {//在数据库查不到商品数据，返回0
                        $.ajax({
                            type: "GET",
                            url: "../api/insert_cart.php",
                            data: { "id": _id, "image": _image, "name": _name, "new": _new, "old": _old, "num": num, "userid":userid },
                            success: function (res) {
                            //   if(res == "插入成功"){
                            //     $("#J_buyNumField, #J_buyNum").val(num);
                            //   }
                            }
                        })
                    } else {
                        var arr = JSON.parse(res);
                        var _num = arr[0].num * 1;
                        console.log(_num);
                        // _num = $("#J_buyNumField").val();
                        // _num++;
                        // $("#J_buyNumField").on("change",function(){
                            //  $(this).val(_num);
                            var jb_val = $("#J_buyNumField").val()*1;
                            var _nums = _num + jb_val;
                             $.ajax({
                                 type: "GET",
                                 url: "../api/update_cart.php",
                                 data: { "id": _id, "num": _nums },
                                 success: function (res) {
                                    //  console.log(res);
                                    $("#J_buyNum").text(jb_val);
                                 }
                             })
                        // })   
                    }
                }
            })
            });
            $("#J_continueBuy, #J_closeTrigger").on("click",function(){
                $("#J_bookDetailPopup").css("display","none");  
            });
         
        }
    })
})