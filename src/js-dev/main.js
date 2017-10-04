function initalslick(){
	$(".regular").slick({
		dots: true,
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 1,
				infinite: true,
				dots: true
			}
		},
		{
			breakpoint: 1023,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				infinite: true,
				dots: true
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true,
				dots: false
			}
		}
	  ]
	});
}
function makeAjaxCall(url, methodType, callback){
	return $.ajax({
		url : url,
		method :  methodType,
		dataType : "json"
	})
}
var URL = "https://gist.githubusercontent.com/roblos12/151417b9d5bcd444a2351b6d58db3fdc/raw/acc7ed077a9eb0cba0651bf9759d7b58cacc83c3/data.json";
makeAjaxCall(URL, "GET").then(function(respJson){
	console.log(respJson.numberOfItems);
	var html = "";
	for (i = 0; i < respJson.numberOfItems; i++) {
		
			html += "<div class='productslider'><div class='product-tile-inner'><div class='product-tile'>";
			html += "<div class='product-image'>"
			html += "<a href='" + respJson.carouselData[i].url + "'><img src='" + respJson.carouselData[i].productImageUrl + "' alt='" + respJson.carouselData[i].productImageAltText + "' title='" + respJson.carouselData[i].productImageAltText + "' style='width:100%'></a>";
			html += "</div>";
			html += "<div class='product-name'>" + respJson.carouselData[i].name + "</div>";
			html += "<div class='product-price'>" + respJson.carouselData[i].salesUnit + "</div><div class='product-price'>" + respJson.carouselData[i].price.currency + "</div><div class='product-price'>" + respJson.carouselData[i].price.formattedValue + "</div>";
			html += "</div></div></div>";
	}
	$(".regular").append(html);
	initalslick();
}, function(reason){
	console.log("error in processing your request", reason);
})

 