jQuery(function ($) {
    show = (arr) => {
        var html = arr.list.map(function (item) {
            return ` <div class="search-book-list bookList-text clearfix" data-id="${item.id}">         <a href="javascript:;" target="_blank">             <div class="bookList-text-img bk-img-box">                 <img alt="聪明女人的99个说话技巧" src="${item.img}" style="height: 100%;">             </div>             <em class="bookList-text-title">${item.names}</em>             </a><p class="bookList-text-infor"><a href="javascript:;" target="_blank">                 </a><a target="_blank" href="javascript:window.location.href=encodeURI('https://www.wl.cn/search?author=牛苏放')">${item.writer}</a>                 <span>著</span>                 <span class="bookList-text-publish">${item.chuban}</span>                 <span class="bookList-text-isbn">9787563923502</span>                 <span class="bookList-text-time">${item.times}</span>             </p>             <p class="bookList-text-detail">${item.disc}</p>                  <p class="bookList-text-price">             蔚蓝价：<span class="red">${item.now}</span>             定价：<del>${item.prev}</del>             <span class="lightRed">省：<em>${(item.prev-item.now).toFixed(2)}</em></span>         </p>                    <div>             <p class="btn bookList-text-btn clearfix">                 <a target="_blank" class="buy-btn" data-wlid="6572439"></a>                 <a href="javascript:;" data="6572439" class="save-btn J_addFav"></a>             </p>         </div>              </div>`;
        }).join('');
        // console.log( $("#J_flashsale"))
        $("#J_template").html(html);
    }
    // 初始渲染
    let _page = '1';
    let _qty = '4';
    $.ajax({
        type: 'post',
        url: '../api/liebiao_page.php',
        data: {
            'page': _page,
            'qty': _qty
        },
        success: function (data) {
            // console.log(data);
            let arr = JSON.parse(data);
            // console.log(arr.total);
            show(arr)
            // var bookList = $(".search-book-list ");
            var pageNum = Math.ceil(arr.total / arr.qty);

            console.log(pageNum);

            $('#J_pagination').each((i, pageNum) => {

                console.log(i)
            })
            var html = ''
            for (var i = 0; i < pageNum; i++) {
                html += `<a class="J_page"><span title="${i+1}">${i+1}</span></a>`
            }
            
            $('#J_pagination').html(html)
            // var html = pageNum.map(function (item))
            // $('#J_pagination').html(htmlpageNum)
            // 详情页跳转
            $(".bk-img-box").on("click", function () {
                var curId = $(this).parent().parent().attr('data-id');
                location.href = 'xiangqing.html?' + curId;
            })
        }
    })

    $("#J_pagination").on("click", ".J_page", function () {
        var Page = 2
        var Qty = 4;
        $.ajax({
            type: 'post',
            url: '../api/liebiao_page.php',
            data: {
                'page': Page,
                'qty': Qty
            },
            success: function (res) {
                console.log(res);
                let arr = JSON.parse(res);
                show(arr)
            }
        })
    })



    // <span id="J_prevPage" class="prevPage disabled" title="Prev Page">上一页&nbsp;</span>
    // // <span title="Page 1" class="check">1</span>
    // <a class="J_page"><span title="Page 2">2</span></a>
    // // <a class="J_page">
    // //     <span title="Page 3">3</span>
    // // </a>
    // <a class="J_page">
    //     <span title="Page 9">9</span></a><a><span id="J_nextPage"
    //         title="Next Page">&nbsp;下一页</span></a>
    // <span class="count">共9页</span>
})