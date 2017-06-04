/**
 * Created by fov on 2017/4/6.
 */
//加载页头和页尾
$("#had").load("tmp/header.html", function () {
  $("#ec").on("mouseenter", function () {
    $(this).children("ul").css("display", "block");
  })
  $("#ec").on("mouseleave", function () {
    $(this).children("ul").css("display", "none");
  })
});
$("#footer").load("tmp/dogFooter.html", function () {
  $(".footer-wrapper>.flink>.click-arrow").on("click", function () {
    $(this).prev(".fwrapper").toggleClass("overflow");
    if ($(this).prev(".fwrapper").css("height") == "20px") {
      $(this).prev(".fwrapper").css("height", "auto")
    } else {
      $(this).prev(".fwrapper").css("height", "20px")
    }
    if ($(this).children().hasClass("footer-arrow-down")) {
      $(this).children().removeClass("footer-arrow-down");
      $(this).children().addClass("footer-arrow-up");
    } else {
      $(this).children().removeClass("footer-arrow-up");
      $(this).children().addClass("footer-arrow-down");
    }

  })

});
//页头的狗狗和商品分类的菜单切换
$(".maincates-title").on("mouseenter", ">span", function (e) {
  var target = e.target;
  $(target).addClass("hov").siblings().removeClass("hov").css({
      backgroundColor: "#fff",
      borderColor: "#e1e1e1",
      color: "#666"
    });
  var rgb = $(".indexaapic>div:visible").css("backgroundColor");
  $(target).css({
    backgroundColor: rgb,
    borderColor: rgb,
    color: "#fff"
  });
  $(target).children("b").css("transform", "rotate(180deg)");
  var number = $(target).attr("data-number");
  $(".catefm [data-number=" + number + "]").css("display", "block").siblings().css("display", "none");

})
$(".maincates-title").on("mouseleave", ">span", function (e) {
  var target = e.target;
  $(target).children("b").css("transform", "rotate(0deg)");
})
//商品菜单栏的切换
$('.dogType').on("mouseenter", ">ul>li", function (e) {
  var index = $(this).index();
  $(".catels").css("display", "block");
  $(".cate_1").children().eq(index).css("display", "block").siblings().css("display", "none");
})
$('.dogType').on("mouseleave", ">ul>li", function (e) {
  $(".catels").css("display", "none");
})
//页头的轮播
var carousel = {
  timer: "",
  index: 1,
  init: function () {
    this.rotate();
    $(".playpic").on("mouseenter ", "a", function (e) {
      clearInterval(this.timer);
      var target = e.target;
      this.index = parseInt($(target).html()) - 1;
      $(target).addClass("hov").siblings().removeClass("hov");
      $(".indexaapic").children("div").eq(this.index).css({
        display: "block",
        opacity: "1"
      }).addClass("hov").siblings().css("display", "none").removeClass("hov");
      this.index += 1;
    }.bind(this));
    $(".playpic").on("mouseleave", "a", function () {
      this.rotate();
    }.bind(this));
    $('.indexmidpic').on("mouseenter ", function () {
      clearInterval(this.timer);
    }.bind(this));
    $(".indexmidpic").on("mouseleave", function () {
      this.rotate();
    }.bind(this));

  },
  rotate: function () {
    this.timer = setInterval(function () {
      if (this.index == 5) {
        this.index = 0;
      }
      $(".indexaapic").children("div").eq(this.index).css({
        display: "block",
        opacity: "1"
      }).addClass("hov").siblings().css({
        display: "none",
        opacity: "0.3"
      }).removeClass("hov");
      $(".playpic").children().eq(this.index).addClass("hov")
        .siblings().removeClass("hov");
      var rgb = $(".indexaapic").children("div").eq(this.index).css("background-color");
      $(".maincates-title>span.hov").css({
        backgroundColor: rgb,
        borderColor: rgb,
        color: "#fff"
      });
      this.index++;
    }.bind(this), 5000);
  }
};
carousel.init();
//每日疯抢的右侧的图片切换
var zoom = {
  moved: 0,//保存左移的li的个数
  WIDTH: 211,//保存每个li的宽度
  OFFSET: 0,//保存ul的起始left值
  SHOW: 4,//显示的图片的个数
  init: function () {
    $(".time-procondiv").on("click", ">a", this.move.bind(this));
  },
  move: function (e) {
    e.preventDefault();
    $target = $(e.target);
    if ($target.attr("class").indexOf("disabled") == -1) {
      this.moved += $target.attr("class").indexOf("left") != -1 ? 1 : -1;
      $(".time-procon:visible").css("left", -this.moved * this.WIDTH + this.OFFSET);
    }
    this.checkA();
  },
  checkA: function () {//检查两个按键(a)的状态
    var $rightA = $(".timeproright");
    var $leftA = $(".timeproleft");
    var $li = $(".time-procon:visible>li");
    if (this.moved <= 0) {
      $rightA.addClass("disabledright");
    } else {
      $rightA.removeClass("disabledright");
    }
    ;
    if (($li.length - this.moved) <= this.SHOW) {
      $leftA.addClass("disabledleft");
    } else {
      $leftA.removeClass("disabledleft");
    }
  }
}
zoom.init();
/*每日疯抢右侧菜单切换*/

$(".menubox").on("mouseenter", ">li", function (e) {
  var target = e.target;
  $(target).addClass("on").siblings().removeClass("on");
  var id = $(target).attr("data-number");
  $("#" + id).css("display", "block").siblings().css("display", "none");
});
/*狗狗日用等之后的右侧菜单的切换*/
$(".lib-menu>ul").on("mouseenter", ">li", function (e) {
  var target = e.target;
  $(target).addClass("hover").siblings().removeClass("hover");
  var index = $(target).index();
  $(target).parent().parent().next().children().eq(index).css("display", "block")
    .siblings().css("display", "none");
})


/**E宠口碑中间轮播***/
var content = [
  {
    "i": 0,
    "p": ["自**人", "加入E宠2年2月", "宠物：萨摩耶", "2岁6个月",
      "职业：个体户", "重庆--重庆市", "第7次购物", "养宠时间：2年6个月"],
    "appraise": "客服很贴心，每次有什么问题都能立刻解决，物流也是相当给力，" +
    " 基本头天买第二天或者第三天就收到了，即使有紧急情况也不用着急了， " +
    "而且快递小哥也很贴心，每次都送到家门口。总之棒棒哒！",
    "img": "imgs/2c6ba4741eea3af9a4f32cf7d1a52cfd.jpg"
  },
  {
    "i": 1, "p": ["自**人", "加入E宠2年2月", "宠物：萨摩耶", "2岁6个月",
    "职业：个体户", "重庆--重庆市", "第7次购物", "养宠时间：2年6个月"],
    "appraise": "客服很贴心，每次有什么问题都能立刻解决，物流也是相当给力，" +
    " 基本头天买第二天或者第三天就收到了，即使有紧急情况也不用着急了， " +
    "而且快递小哥也很贴心，每次都送到家门口。总之棒棒哒！",
    "img": "imgs/a7556dd0b1fc6497a3f4a2a09de80521.jpg"
  },
  {
    "i": 2, "p": ["自**人", "加入E宠2年2月", "宠物：萨摩耶", "2岁6个月",
    "职业：个体户", "重庆--重庆市", "第7次购物", "养宠时间：2年6个月"],
    "appraise": "客服很贴心，每次有什么问题都能立刻解决，物流也是相当给力，" +
    " 基本头天买第二天或者第三天就收到了，即使有紧急情况也不用着急了， " +
    "而且快递小哥也很贴心，每次都送到家门口。总之棒棒哒！",
    "img": "imgs/2c508f2dab92355d734a8a95f5b6b649.png"
  },
  {
    "i": 3, "p": ["自**人", "加入E宠2年2月", "宠物：萨摩耶", "2岁6个月",
    "职业：个体户", "重庆--重庆市", "第7次购物", "养宠时间：2年6个月"],
    "appraise": "客服很贴心，每次有什么问题都能立刻解决，物流也是相当给力，" +
    " 基本头天买第二天或者第三天就收到了，即使有紧急情况也不用着急了， " +
    "而且快递小哥也很贴心，每次都送到家门口。总之棒棒哒！",
    "img": "imgs/2bfa814e0924d3c870a2b758c335b18d.jpg"
  },
  {
    "i": 4, "p": ["自**人", "加入E宠2年2月", "宠物：萨摩耶", "2岁6个月",
    "职业：个体户", "重庆--重庆市", "第7次购物", "养宠时间：2年6个月"],
    "appraise": "客服很贴心，每次有什么问题都能立刻解决，物流也是相当给力，" +
    " 基本头天买第二天或者第三天就收到了，即使有紧急情况也不用着急了， " +
    "而且快递小哥也很贴心，每次都送到家门口。总之棒棒哒！",
    "img": "imgs/ab40c7fa73bfed41e27a8727d60e835a.png"
  }
];
var slider = {
  LIWIDTH: 0,//保存每个li的宽度
  DURATION: 1000,//动画的总时间
  WAIT: 3000,//自动轮播之间的等待时间
  timer: null,//保存一次性定时器序号
  canAuto: true,//保存是否可以自动轮播
  init: function () {
    this.LIWIDTH = parseFloat($("#focus001").css("width"));
    this.updateView();
    /*手动切换图片*/
    $("#focus001 .btndiv>div").on("mouseover", "span:not(.on)", function (e) {
      var $target = $(e.target);
      var index = $("#focus001 .btndiv>div>span").index($target);
      var index1 = $("#focus001 .btndiv>div>span.on").index();
      this.move(index - index1);
    }.bind(this));
    //当鼠标进入
    $("#focus001").hover(
      function () {
        this.canAuto = false;
      }.bind(this),
      function () {
        this.canAuto = true;
      }.bind(this)
    )
    this.autoMove();
  },
  autoMove: function () {//启动自动轮播
    this.timer = setTimeout(function () {
        if (this.canAuto) {
          this.move(1);//移动一个
        }
        else {
          this.autoMove();//继续等待
        }
      }.bind(this),
      this.WAIT
    )

  },
  move: function (n) {
    clearTimeout(this.timer);//停止一次性定时器
    this.timer = null;
    $("#focus001 .pic1").stop(true);//停止动画防止叠加
    var left = parseFloat($('#focus001 .pic1').css("left"));
    if (n < 0) {
      n *= -1;
      content = content.splice(content.length - n, n).concat(content);
      this.updateView();
      $('#focus001 .pic1').css("left", left - n * this.LIWIDTH);
      $('#focus001 .pic1').animate(
        {left: "0"},
        this.DURATION,
        this.autoMove.bind(this)
      );
    } else {
      $('#focus001 .pic1').animate({
          left: -n * this.LIWIDTH + 'px'//从现在的left向左移动
        }, this.DURATION,
        this.endMove.bind(this, n)//替换this传如n
      );
    }
  },
  endMove: function (n) {
    var left = parseFloat($('#focus001 .pic1').css("left"));

    content = content.concat(content.splice(0, n));
    this.updateView();//更新页面
    //设置ul的left为0
    $('#focus001 .pic1').css("left", 0);
    this.autoMove();
  },
  updateView: function () {//将数组中的元素更新到页面
    for (var i = 0, html = "", span = ""; i < content.length; i++) {
      var html1 = "<li><div class='clearfix rela'><div class='lf this-data overflow border'>";
      var html2 = '';
      for (var j = 0; j < content[i].p.length; j++) {
        if (j == 0) {
          html2 += "<p class='ft12 cf179'>" + content[i].p[j] + "</p>";
        } else if (j == content[i].p.length - 1) {
          html2 += " <p class='ft12 c000' style='border-bottom:0;padding-bottom:5px;'>" + content[i].p[j] + "</p>";
        } else {
          html2 += "<p class='ft12 c000'>" + content[i].p[j] + "</p>"
        }
      }
      var html3 = `</div><div class="rg this-datafont ft14 overflow">
                                        <div class="this-fontdiv">
                                           ${content[i].appraise}
                                        </div>
                                    </div>
                                    <div class="data-photo">
                                        <div class="data-photoimg">
                                            <img src="${content[i].img}" alt=""/>
                                        </div>
                                    </div>
                                    <div class="subiaoline"></div>
                                    <div class="bgfff-trigon"></div>
                                </div>
                            </li>`;
      html += (html1 + html2 + html3);
      span += "<span></span>"
    }
    $(".pic1").html(html).css("width", this.LIWIDTH * content.length);
    $("#focus001 .btndiv>div").html(span);
    $("#focus001 .btndiv>div>span:eq(" + content[0].i + ")").addClass("on")
      .siblings(".on").removeClass("on");

  }

};
slider.init();
/**E宠口碑右侧轮播**/
var contentright = [
  {
    "i": 0, img: "imgs/93097ab43d4bde559e3400557d71a180.jpg"
    , "name": "0**0", "appraise": "非常好的狗粮，买了好几袋了，" +
  "我家宝贝就喜欢小颗粒的，质量好，而且吃了便便正常。这个包装非常的合理，" +
  "密封严实也不容易坏。"
  }
  , {
    "i": 1, img: "imgs/a7556dd0b1fc6497a3f4a2a09de80521.jpg"
    , "name": "0**0", "appraise": "非常好的狗粮，买了好几袋了，" +
    "我家宝贝就喜欢小颗粒的，质量好，而且吃了便便正常。这个包装非常的合理，" +
    "密封严实也不容易坏。"
  },
  {
    "i": 2, img: "imgs/2c508f2dab92355d734a8a95f5b6b649.png"
    , "name": "0**0", "appraise": "非常好的狗粮，买了好几袋了，" +
  "我家宝贝就喜欢小颗粒的，质量好，而且吃了便便正常。这个包装非常的合理，" +
  "密封严实也不容易坏。"
  },
  {
    "i": 3, img: "imgs/2bfa814e0924d3c870a2b758c335b18d.jpg"
    , "name": "0**0", "appraise": "非常好的狗粮，买了好几袋了，" +
  "我家宝贝就喜欢小颗粒的，质量好，而且吃了便便正常。这个包装非常的合理，" +
  "密封严实也不容易坏。"
  },
  {
    "i": 4, img: "imgs/ab40c7fa73bfed41e27a8727d60e835a.png"
    , "name": "0**0", "appraise": "非常好的狗粮，买了好几袋了，" +
  "我家宝贝就喜欢小颗粒的，质量好，而且吃了便便正常。这个包装非常的合理，" +
  "密封严实也不容易坏。"
  },
  {
    "i": 5, img: "imgs/93097ab43d4bde559e3400557d71a180.jpg"
    , "name": "0**0", "appraise": "非常好的狗粮，买了好几袋了，" +
  "我家宝贝就喜欢小颗粒的，质量好，而且吃了便便正常。这个包装非常的合理，" +
  "密封严实也不容易坏。"
  }
];
var sliderright = {
  HEIGHT: 135,//移动的高度
  DURATION: 1000,//动画的总时间
  WAIT: 3000,//自动轮播之间的等待时间
  timer: null,//保存一次性定时器序号
  init: function () {
    this.updateView();
    this.autoMove();
  },
  autoMove: function () {
    setTimeout(this.move.bind(this), this.WAIT);
  },
  move: function () {
    $(".repute-li>ul").animate(
      {marginTop: -this.HEIGHT + "px"}, this.DURATION,
      this.endMove.bind(this)
    );
  },
  endMove: function () {
    contentright = contentright.concat(contentright.splice(0, 1));
    this.updateView();
    $(".repute-li>ul").css("marginTop", 0);
    this.autoMove();

  },
  updateView: function () {
    for (var i = 0, html = ''; i < contentright.length; i++) {
      html += `<li>
                        <div class="clearfix">
                            <div class="lf rephoto">
                                <img src="${contentright[i].img}" alt=""/>
                            </div>
                            <div class="lf ft12 c333 mt15 ml">${contentright[i].name}</div>
                        </div>
                        <div class="ft12 c999 clearfix mt">
                            <i class="index-ico dib lf il"></i>
                            <span class="lf dib mt5 ml5">
                                ${contentright[i].appraise}
                             </span>
                        </div>
                        <div class="fyinho textR mt">
                             <i class="dib i2">
                            </i>
                        </div>
                </li>`
    }
    $(".repute-li>ul").html(html);
  }

};
sliderright.init();
/*****E宠头条******/
$("#play").click(function () {
  $(this).css("display", "none");
  vido.play();
  vido.onpause = function () {
    $("#play").css("display", "block");
  }
})

