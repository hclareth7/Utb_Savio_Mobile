
$(document).ready(function(){
	
});

function acordeon(){
	
	$('.savio-curso .cont-curso').hide();

	$('.savio-curso .titulo-curso').click(function(){
		
		if($(this).attr('data-atri')!='active'){
			$('.savio-curso .cont-curso').hide();
			$(this).attr('data-atri','active');
			$(this).next().show();
		}else{
			$(this).next().hide();
			$(this).attr('data-atri','noactive');
		}
		
	});
}


function util(){
	
}

function tabs(liMenu,classSeccion){
	$('.'+classSeccion).hide();
	$('.'+classSeccion+':first').show();
    
	$(liMenu).click(function(){
		var datalink=$(this).attr('data-link');

		var objeI=$('.'+classSeccion);
		
		//console.log(objeI[1]);

		$(objeI).each(function(index){
			//console.log(objeI[index]);
			$(objeI[index]).hide();
			if($(objeI[index]).attr('ok-link')===datalink){
				$(objeI[index]).show();
			}
		});
		
	});
}