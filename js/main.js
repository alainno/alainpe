$(document).on('ready', main);

function main(){
	$('.carousel').carousel('pause');

	$('.nav-pills > li > a').on('click', showItem);
}

function showItem(e){
	var index = $(this).parent('li').index();
	//alert('index: ' + index);
	$('.carousel').carousel(index);

	$('.nav-pills > li.active').removeClass('active');
	$(this).parent('li').addClass('active');

	$('.carousel').carousel('pause');
	return false;
}