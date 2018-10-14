$(document).ready(function(){
	$('.b').on('click',()=>{
		$('#collapse1_p').slideToggle('fast');
		$('#collapse2_p').hide();
		$('#collapse3_p').hide();
	});
	$('.b1').on('click',()=>{
		$('#collapse2_p').slideToggle('fast');
		$('#collapse1_p').hide();
		$('#collapse3_p').hide();
	});
	$('.b2').on('click',()=>{
		$('#collapse3_p').slideToggle('fast');
		$('#collapse1_p').hide();
		$('#collapse2_p').hide();
	});
});
	
