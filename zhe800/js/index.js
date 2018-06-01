$(function(){
	//菜单
	$("#list li").on("click",function(){
		// alert(1);
		$("#list li").css({"border-bottom":'0.2rem solid #fff'})
		$(this).css({"border-bottom":'0.2rem solid red'});
		var _this=$(this);
		for(var i=0;i<$("#lis li").length;i++){
			if($("#lis li").eq(i).html()==_this.html()){
				$("#lis li").css("color",'#6A6969');
				$("#lis li").eq(i).css("color",'red');
			}
		}
	});

	//菜单
	$("#s1").click(function(){
		$('#lis').css('visibility','visible');
		$("#s2").click(function(){
			$('#lis').css('visibility','hidden');
		})
	})
	//轮播图
	var mySwiper = new Swiper('.swiper-container', {
		direction: 'horizontal',
		loop: true,
		autoplay: 2000,
		speed: 500,
		autoplayDisableOnInteraction: false,
		pagination: '.swiper-pagination',
		paginationClickable: true,
	
	})
	//回到顶部
	var ding=document.getElementById('ding');	
	document.addEventListener('mousewheel',function(){
		
   		var t=document.documentElement.scrollTop;
    	// console.log(t)
        if(t>=-1){
          ding.style.display="block";
        }else if(t==0){
          ding.style.display="none";
        }
    },false);

	//导航栏吸顶
        // var list=document.getElementById('list');
        // var nav=document.getElementById('nav');
        var NavTop=list.offsetTop;
        // console.log(NavTop);//64
        
        document.onmousewheel=function(){
        	// var a=parseInt($(document).height() - $(document).scrollTop());//667
             var navscroll=document.documentElement.scrollTop||document.body.scrollTop;
            console.log(navscroll)//0
            if(navscroll=NavTop){
               $("#list").css({'position':"fixed","top":"0rem","left":"0rem","z-index":"10"})
            }else{
            	// alert(1)
               $("#list").css({	"width":"100%",
								"height":"2.4rem",
								"border":"0.1rem solid #ccc",
								"border-left":"0rem",
								"border-right":"0rem",
								"position": "relative"})
            }
        }


	    // var list = document.getElementById('list');
	    // var titTop = list.offsetTop;
	    // document.onscroll = function () {
	    //     var bTop = document.documentElement.scrollTop;
	    //     if (bTop > titTop+200) {
	    //         list.classList.add("fix");
	    //     }else{
	    //         list.classList.remove("fix");
	    //     }
	    // }

       



	$.ajax({
		type:"GET",
		url:"php/data.php",
		success:function(data){
			var str=data.split("(")[1].split(')')[0];
			var datas=JSON.parse(str);
			var arr=datas.objects;
			console.log(arr)
			$('#tmplShop').tmpl(arr).appendTo('#mains');

			Lazyloading();
			// $('img').lazyload({effect:'fadeIn'});

			var div=$("<div>");
			div.addClass("mains_add");
			$("#mains").append(div);

			// for(var i=0;i<arr.length;i++){
				var arrs=[];
				console.log(arr[0].corner)
				for(var key in arr[0].corner){
					arrs.push(arr[0].corner[key])
					// for(var i=0;i<arrs.length;i++){
					// var se=arrs[0][0].text;
					// }
					

				}
				var se=arrs[0][0].text;

				console.log(se)	
			// }
			console.log(arrs);
					
		}
		
	})
	//懒加载
	window.onscroll = Lazyloading;
	function Lazyloading() {
		var aImg = $('#mains img');
		var scrTop = document.documentElement.scrollTop || document.body.scrollTop;
		var cH = document.documentElement.clientHeight;
	
		for(var i in aImg) {
			if(aImg[i].offsetTop < scrTop + cH-100) {
				aImg[i].setAttribute('src', aImg[i].getAttribute('_src'));
			}
		}
	};

	//无线循环有问题
	// var canRun=true;
	// var numb=1;
	// $(document).on('mousewheel', function(e) {

	// 	e = e || window.event;
	// 	//函数节流 ，使滚轮滚动只跳转一页	
	// 	if(!canRun) {
	// 		return
	// 	}
	// 	canRun = false;
	// 	setTimeout(function() {
	// 		canRun = true;
	// 	}, 500); //利用定时器，让函数执行延迟一段时间
	// 	//函数节流 结束
	// 	// console.log($('.mains div').length);
	// 	var a=parseInt($(document).height()-$(document).scrollTop());
	// 	if($(window).scrollTop() > $('.mains').offset().top - $(window).height() && $('#mains div').length < 50) {

	// 		var types = $('.kr_active').data('column');

	// 		numb++;

	// 		$.ajax({
	// 			type: "GET",
	// 			url: "php/news.php",
	// 			data: {
	// 				nums: '20',
	// 				types: types,
	// 				page: numb,
	// 			},
	// 			success: function(data) {

	// 				var str=data.split("(")[1].split(')')[0];
	// 				var datas=JSON.parse(str);
	// 				var arr=datas.objects;
	// 				// console.log(arr)
	// 				$('#tmplShop').tmpl(arr).appendTo('#mains');
	// 			}
	// 		});

	// 	}

	// 	// if($('#mains div').length >= 3) {
	// 	// 	$('.loading_more').text('浏览更多');
	// 	// }

	// })
	




})