$(document).ready(function () {
	
	////////////////////////////
	/// HANDLERS ///////////////
	////////////////////////////
	//map_pins click
	$(".map_pins i").click(function(event){
		kaart_show(this.className.slice(' ')[5]);
	});	
	//map_pint go-back click
	$("#text_kaart p i").click(function(){
		kaart_show('back');
	});	
	
	// portret click
	$('.portretten div div').click(function(event){
		portret_video_show('show', this.className );		
	});
	$('.portretten video').click(function(event){
		portret_video_show('hide');		
	});
	
	//positioning portret video
	$('.portretten video').css('height',$('.portretten').height()+'px');	
	$('.portretten video').css('margin-left',($('.portretten').width()-$('.portretten video').width())+'px');
	
	
	//click on facts
	$('.feiten').children('div').on('click',function(event){
		factClick(this);		
	});
	
	//verhalen uit molenbeek startup select
	toon_categorie('van_de_politie');
	
	//verhalen onclick select
	$('.verhalen ul li').on('click',function(event){		
		var str = this.innerHTML.toLowerCase().replace(/\s/g, "_"); ;
		toon_categorie(str);
		
	})	
	
	//toggleclass on verhalen	
	$('#verhalen_wrap section').on('click',function(event){
		
		 var index = $( "#verhalen_wrap section" ).index( this );
		 console.log(index);
		$('#verhalen_wrap section:nth-child('+(index+1)+')').toggleClass('opened');
		
		//$('#verhalen_wrap section:nth-child(1)').toggleClass('abc');
		//this.toggleClass('ABC');
	})
	
	
	
	
/*
    $('#scroll-down').click(function () {
		
        $('html, body').animate({
            scrollTop: $('.section-1').offset().top
        }, 'slow');
    });
	
	$('.count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 1000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
	
});
*/
});

////////////////////////////
/// FUNCTIONS ///////////////
////////////////////////////

//map pins click
function kaart_show(gewenste_item){
	console.log(gewenste_item);
	switch(gewenste_item){
	case '0': case '1': case '2': case '3': case '4':
		$('#text_kaart').children().css('display','none');
		$('#text_kaart .'+gewenste_item).css('display','block');
		$('.map_pins i').css('color','green');
		$('.map_pins i.item-'+gewenste_item).css('color','red');
		break;

	default:
		console.log('anders');
		$('#text_kaart').children().css('display','none');
		$('#text_kaart .default').css('display','block');
		$('.map_pins i').css('color','green');
		break;
	}
}


//video play// paused//
function startstop_filmpje(){	
	
	setTimeout(function(){
		switch($("#start_video").get(0).paused){
		case false:			
			console.log('false');
			$('#start_video').css('opacity','1');
			$('#video_cover').css('opacity','0');			
		break;		
		case true:
			
			console.log('true');
			$('#start_video').css('opacity','0');
			$('#video_cover').css('opacity','1');
		break;	
		
		}
	},100);
	
}


//video van portretten show en hide
function portret_video_show(taak, videotype){
	console.log('wat moet ik doen: '+taak +'|| welke video moet ik laten zien: '+ videotype);
	
	if(taak == 'show'){ // showvid
		$('.portretten video').css('display','block');
		switch(videotype){ //selector for the right video 
			case 'p_0': case 'p_1': case 'p_2': case 'p_3':
				$('.portretten video').append('<source src="video/'+videotype+'.mp4" type="video/mp4">');
				$('.portretten video')[0].load();
				$('.portretten video')[0].play();
				console.log('MADE A VIDEO ! ');
			break;
		}	
	}
	
	if(taak == 'hide' ){
		//korte timeout om te zien of de video op pauze is of niet		
		setTimeout(function(){			
			if( $('.portretten video')[0].paused ){
				$('.portretten video').empty();
				$('.portretten video').css('display','none');
			}		
		},100)
		
		
	}	
	
	
}


//model for selected array // feiten
object_array = new Array(
['false'],
['false'],
['false'],
['false'],
['false'],
['false']
);
//function click on feit
function factClick(clicked_object){
	console.log(clicked_object.className.split(' ')[0]);
	if(object_array[parseInt(clicked_object.className.split(' ')[0])] == 'false'){		
		object_array[parseInt(clicked_object.className.split(' ')[0])] = 'true';
		clicked_object.className = clicked_object.className + ' selected';
	} else {
		object_array[parseInt(clicked_object.className.split(' ')[0])] = 'false';
		clicked_object.className = clicked_object.className.split(' ')[0]+' '+clicked_object.className.split(' ')[1]+' '+clicked_object.className.split(' ')[2]
		
	}
	
	//console.log(object_array)
}


//verhalen uit molenbeek categorieselector functie
function toon_categorie(show_str){
	$('#verhalen_wrap section').each(function(event){	
		if(this.className == show_str){
			this.style='display:block;'
		}
		else{
			this.style='display:none;'
		}	
	})
}










