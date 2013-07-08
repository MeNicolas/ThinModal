$(document).ready(function(){
	$('body').append('<div id="overlay"></div><div id="modal"></div><style>#overlay {position: fixed;z-index: 10000;top: 0px;left: 0px;height: 100%;width: 100%;background: #000;opacity: 0.2;display: none;}#modal { width: 600px; display: none; position: fixed; opacity: 1; z-index: 11000; left: 50%; margin-left: -270px; top: 200px; background-color:  #FFFFFF; border-radius: 2px; -moz-border-radius: 2px; -webkit-border-radius: 2px; box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.40); }</style>');
	$('.modal').attr('url',$(this).attr('href')).attr('onclick','modal(this)').attr('href','javascript:void(0)');
});
function modal(modal){
	
	var url = $(modal).attr('url');
	var posting = $.post( url, { s: 1 } );

	posting.done(function( data ) {
		
		$('#modal').html(data).fadeIn('fast');
		$('#overlay').fadeIn();
	});
	
}

function modalclose(){
	$('#modal').fadeOut(function(){$('#modal').empty();});
	$('#overlay').fadeOut();

}
$(document).on("click", "#overlay", function(){modalclose()});
$(document).on("click", "#close", function(){modalclose()});