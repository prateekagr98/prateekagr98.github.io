var isClicked = "false";

$(document).ready(function(){


	$('.find_me').click(function(){

		if(isClicked == "false"){
			$('.find_me').html(":-)");
			showSocialLinks();
			isClicked = "true";
		} else{
			$('.find_me').html("Find Me");
			showSocialLinks();
			isClicked = "false";
		}
	});

});

function showSocialLinks(){
	TweenMax.from('.gmail', 0.5, {css:{top:"40%", left: "40%", visibility: "visible"}, ease:Power2.easeOut});
	TweenMax.from('.twitter', 0.5, {css:{top:"40%", right: "40%", visibility: "visible"}, ease:Power2.easeOut});
	TweenMax.from('.facebook', 0.5, {css:{bottom:"40%", right: "40%", visibility: "visible"}, ease:Power2.easeOut});
	TweenMax.from('.linkedin', 0.5, {css:{bottom:"40%", left: "40%", visibility: "visible"}, ease:Power2.easeOut});

	TweenMax.to('.gmail', 0.5, {css:{visibility: "visible"}});
	TweenMax.to('.twitter', 0.5, {css:{visibility: "visible"}});
	TweenMax.to('.facebook', 0.5, {css:{visibility: "visible"}});
	TweenMax.to('.linkedin', 0.5, {css:{visibility: "visible"}});
}

