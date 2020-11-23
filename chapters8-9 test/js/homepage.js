$(document).ready(function() {
	// create an array of the slide images
	let image, imageCache = [];
	$("#slides img").each(function() {	
		image = new Image();
        image.src = $(this).attr("src");
        image.title = $(this).attr("alt");
        imageCache[imageCache.length] = image;
   	});
	
	// Start slide show
	let imageCounter = 0;
	let nextImage, nextCaption;
    let  timer = setInterval(
        function () {
        	$("#caption, #slide").fadeOut(1000,
				function() {
					imageCounter = (imageCounter + 1) % imageCache.length;
		        	nextImage = imageCache[imageCounter];
		        	nextCaption = nextImage.title;
			    	$("#slide").attr("src", nextImage.src).fadeIn(1000);
				    $("#caption").text(nextCaption).fadeIn(1000);		
				}        	
        	);
        },
    	3000);
    
});