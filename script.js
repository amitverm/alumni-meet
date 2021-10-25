$(document).ready(function(){
	$('#search-input').bind('keyup', function(e){
		if ( e.which == 13 ) {
			e.preventDefault();
		}
		var searchTerm = $(this).val();
		if(searchTerm.length > 0){
			$('#participant-data .card').each(function(){
				if(!$(this).text().match(new RegExp(searchTerm, "i"))){
					$(this).parent().hide();
				}else{
					$(this).parent().show();
				}
			});
		}else{
			$('#participant-data .card').parent().show();
		}
	});

	$('#search-input').on('search', function () {
		$('#participant-data .card').parent().show();
	});
});