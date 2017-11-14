const dfkLogo = document.querySelector('#dfk-logo');
const felixF = document.querySelector('#felixF');
const topF = document.querySelector('#topF');
const aniel = document.querySelector('#aniel');
const elix = document.querySelector('#elix');
const imName = document.querySelector('#im');



// var animateInitials = [
// 		{ e: $("#botK"), p: {  rotateZ: 140} , o: {duration: 1000} },
// 		{ e: $("#midF"), p: { rotateZ: 90}, o: {duration:1000}},
// 		{ e: $("#topK"), p: { rotateZ: 50}, o: {duration:1000}},
// ];

// $("#dfk-logo").on('click', function(event) {
//   event.preventDefault();
//   $.Velocity.RunSequence(animateInitials);
// });


function animateLogo(){
	$("#botK").velocity({ rotateZ: 130}, {duration: 500, easing: 'easeOutCubic', complete: function() {
		$('#botK').css('transform-origin', 'top left');
	}});
	$("#midF").velocity({ rotateZ: 90}, {duration: 500, easing: 'easeOutCubic'});
	$("#topK").velocity({ rotateZ: 50}, {duration: 500, easing: 'easeOutCubic'});

	

	$("#botK").velocity({ translateX: 780}, {duration: 5000, delay: 5000});
	$("#midF").velocity({ translateX: 480}, {duration: 1000, easing: 'easeOutCubic', delay: 500});
	$("#topK").velocity({ translateX: 780}, {duration: 1000, easing: 'easeOutCubic', delay: 500});

	$("#sideF").velocity({ translateX: 480, opacity: 1}, {duration: 1000, easing: 'easeOutCubic', delay: 500});
	$("#sideK").velocity({ translateX: 780, opacity: 1}, {duration: 1000, easing: 'easeOutCubic', delay: 500});

	$(".danielName").velocity({ translateX: [0, -150], opacity: 1}, {duration: 1000, easing: 'easeOutCubic', delay: 500});
	$(".felixName").velocity({ translateX: [0, -550], opacity: 1}, {duration: 1000, easing: 'easeOutCubic', delay: 500});
	$(".kimName").velocity({ translateX: [0, -830], opacity: 1}, {duration: 1000, easing: 'easeOutCubic', delay: 500});
}

 $("#dfk-logo").click(animateLogo);