$(document).ready(function(){

	$("#banner").css({"height":$(window).height() + "px"});

	var flag = false;
	var scroll;

	$(window).scroll(function(){
		scroll = $(window).scrollTop();

		if(scroll > 50){
			if(!flag){
				$("#logo").css({"margin-top": "-10px", "width": "90px","height":"90px"});

				$("header").css({"background-color": "#006cc3"});
				flag = true;
			}
		}else{
			if(flag){
				$("#logo").css({"margin-top": "150px", "width": "400px","height":"400px"});

				$("header").css({"background-color": "#051534"});
				flag = false;
			}
		}


	});

});
