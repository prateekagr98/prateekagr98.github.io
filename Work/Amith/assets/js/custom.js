$(document).ready(function() {
 
  	$("#slideshow").owlCarousel({
 		autoPlay: 3000, //Set AutoPlay to 3 seconds
      	items : 4,
     	itemsDesktop : [1199,3],
      	itemsDesktopSmall : [979,3]
  	});

  	/*$(".body_container").perfectScrollbar();*/
});
/*
function changeSize() {
    var width = parseInt($("#Width").val());
    var height = parseInt($("#Height").val());

    if(!width || isNaN(width)) {
        width = 600;
    }
    if(!height || isNaN(height)) {
        height = 400;
    }
    $("#Demo").width(width).height(height);

    // update perfect scrollbar
    $('#Demo').perfectScrollbar('update');
}*/