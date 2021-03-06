$(document).ready(function(){
	$('body').append('<div id="overlay"></div><div id="modal"></div><style>#overlay {position: fixed;z-index: 10000;top: 0px;left: 0px;height: 100%;width: 100%;background: #000;opacity: 0.2;display: none;}#modal { width: 600px; display: none; position: fixed; opacity: 1; z-index: 11000; left: 50%; margin-left: -270px; top: 200px; background-color:  #FFFFFF; border-radius: 2px; -moz-border-radius: 2px; -webkit-border-radius: 2px; box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.40); padding:10px;}#modalHeader{background:#F2F2F2;width:auto;height:30px;margin-left:-10px; margin-top:-10px; margin-right: -10px; margin-bottom: 10px; border-radius: 2px 2px 0px 0px;border-bottom:#d4d4d4 solid 1px;}#modalTitle{color:#7e7e7e;font-family:"Helvetica Neue",Arial,sans-serif;padding-top:7px;padding-left:10px;float:left;font-size:14px;}#modalClose{color:#7e7e7e;float:right;margin-right:10px;padding-top:5px;font-weight:bold;cursor:pointer;}#modalClose:hover{color:#444444;}</style>');
	$('.modal').each(function(){
		$(this).attr('url',$(this).attr('href')).attr('onclick','modal(this)').attr('href','javascript:void(0)');
	});
	$('.modalStyle').each(function(){
		$(this).attr('onclick','modal(this,1)');
	});
});
function modal(modal,style){
	
	var url = $(modal).attr('url');
	var posting = $.post( url, { s: 1 } );

	posting.done(function( data ) {
		
		if(style == 1){
			$('#modal').html('<div id="modalHeader"><div id="modalTitle">'+$(modal).attr('title')+'</div><div id="modalClose" onclick="modalclose();">&times;</div></div>').append(data).fadeIn('fast');
			$('#overlay').fadeIn();
		}else{
			$('#modal').html(data).fadeIn('fast');
			$('#overlay').fadeIn();
		}

	});
	
}

function modalclose(){
	$('#modal').fadeOut(function(){$('#modal').empty();});
	$('#overlay').fadeOut();

}
$(document).on("click", "#overlay", function(){modalclose()});
$(document).on("click", "#close", function(){modalclose()});