$(document).ready(()=>{
	$('#dd1').on('click',()=>{
		$('.dropdown-div').slideToggle();
		$('.dropdown-div').on('click',()=>{
			$('.dropdown-div').toggle();
		});
	});
	$('#dd2').on('click',()=>{
		$('.dropdown-div').slideToggle();
		$('.dropdown-div').on('click',()=>{
			$('.dropdown-div').toggle();
		});
	});
	$('#dehaze-icon').on('click',()=>{
		$('.imp').slideToggle();
		
	});
});
