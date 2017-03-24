(function() {
	
	console.log($('head').length());
	
	
	var $e = $('<div style="background-color: rgba(0, 0, 0, 0.5)" id="yourelement"></div>');

	// append it to the body:
	$('body').append($e);

	// style it:
	$e.css({
		position: 'absolute',
		top: '0',
		right: '0',
		width: '100%',
		height: '100%'    
	});

	$e.append("<div class='img-container'><img src='https://upload.wikimedia.org/wikipedia/commons/3/36/Hopetoun_falls.jpg' width='1000' style='margin: 0 auto'/></div>");
	$e.append("<div class='img-preview'></div>");
	
	console.log($(".img-container img").attr('src'));
	
	$(".img-container img").cropper({
	  aspectRatio: 1.618,
	  done: function(data) {
		console.log(data)
	  }
	});
})()
