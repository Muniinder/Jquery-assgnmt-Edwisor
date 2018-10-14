

$(document).ready(()=>{
	$('.modal-button').on('click',()=>{
		$('.modal-box').show();
		
	});
	$('.close').on('click',()=>{
		$('.modal-box').hide();
		
	});
	//$(".modal-box").on('click',()=>{
	//	stopPropagation();
	//});

	 $('.modal-button').click(function(e){
		e.stopPropagation();
		
	});
});
