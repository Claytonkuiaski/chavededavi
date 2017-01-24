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

$(document).ready(function() {
 
  $("#owl-demo").owlCarousel({
 
      navigation : false, // Show next and prev buttons
      slideSpeed : 100,
      paginationSpeed : 300,
      singleItem:true,
      autoPlay: true,
      pagination: false
      
 
      // "singleItem:true" is a shortcut for:
      // items : 1, 
      // itemsDesktop : true,
      // itemsDesktopSmall : true,
      // itemsTablet: true,
      // itemsMobile : true
 
  });
 
});