jQuery(function($){
    //首页轮播图
    var lists = $("#J_img li ");
    var spans = $("#focus span");
    var box = $("#J_box");
    var liW = lists.eq(0).outerWidth();
 console.log(liW)
 lists.css("left",liW);
 lists.eq(0).css("left",0);
 //2.图片自动轮播
 var now = 0;
 var timer = null;
 clearInterval(timer);
 timer = setInterval(next,2000);
 function next(){
     lists.eq(now).animate({"left":-liW},800,"linear");
     now = ++now > lists.size()-1? 0:now;
     // if(++now>$("#ulImages li").size()-1){
     //     now = 0;
     // }else{
     //     now = now;
     // }
    lists.eq(now).css("left",liW);
    lists.eq(now).animate({"left":0},800,"linear");
     light();
 }
//  function prev(){
//     lists.eq(now).animate({"left":liW},800,"linear");
//      now = --now < 0?lists.size()-1:now;
//     lists.eq(now).css("left",-liW);
//     lists.eq(now).animate({"left":0},800,"linear");
//      light();
//  }
 //3.鼠标移入可视区域清除定时器,移出时开启
//  clearInterval(timer);
 box.hover(function(){
     clearInterval(timer);
 },function(){
     timer = setInterval(next,2000);
 });
 //4.点击左右按钮，图片向右左切换
//  leftBtn.click(function(){
//      prev();
//  });
//  rightBtn.click(function(){
//      next();
//  });
 //5.焦点跟随
 function light(){
     spans.eq(now).css("background","red").siblings().css("background","gray");
 }
//6.点击焦点跳转相应图片
spans.click(function(){
    var index = $(this).index();
    if(index>now){//如果点击索引大于当前索引
       lists.eq(now).animate({"left":-liW},800,"linear");//旧图迅速放到左侧
       lists.eq(index).css("left",liW);//新图放到右侧
        lists.eq(index).animate({"left":0},800,"linear");//新图从右侧移入
         now = index;
    } if(index<now){
    lists.eq(now).animate({"left":liW},800,"linear");//旧图迅速放到右侧
    lists.eq(index).css("left",-liW);//新图放到左侧
     lists.eq(index).animate({"left":0},800,"linear");//新图从左侧移入
      now = index;
    }
    old = new Date();
    light();
})

//限时促销分页效果
//1.渲染数据，图片，描述，价格
$.ajax({
    url:'api/ind.php',
    success:function(data){
        // console.log(data);
        let arr = JSON.parse(data);
        console.log(arr);
        var html = arr.map(function(item){
            return ` <li data-id="${item.id}">
            <a target="_blank" class="small-cover bk-img-box" href=""
                title="-好妈妈不打不骂培养男孩300个细节">
                <img src="${item.img}" alt="-好妈妈不打不骂培养男孩300个细节">
            </a>
            <a target="_blank" href=""
                class="book-intro">${item.disc}</a>
            <p class="price">￥ <span>${item.sale}</span></p>
        </li>`;
        }).join('');
        console.log( $("#J_flashsale"))
        $("#J_flashsale").html(html);
    }
})
console.log(cookie.get('name'));

$("#J_flashsale-pagination").on("click","a",function(){
    
})

})