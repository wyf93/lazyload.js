var lazyload = function () {

	var aImg = document.querySelectorAll('.lazy');

	var top;
	var  clientHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

	for(var i = 0; i < aImg.length; i++) {
		top = aImg[i].getBoundingClientRect().top;

		if(top < clientHeight && !aImg[i].attributes["src"].value) {
			aImg[i].attributes["src"].value = aImg[i].attributes["data-src"].value;
		}
	}
}
 