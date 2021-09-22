$(document).ready(function(){					/*quand le DOM sera prêt*/
	$('#domaine').hover(function(){				/* au passage sur la zone cliquable*/
		$('.domaine').show();					/* montrer l'image sur la mappe*/
    }, function(){								/* quand la zone n'est plus survolé*/
		$(".domaine").hide();					/*faire disparaître l'imahe*/
	});
});

$(document).ready(function(){
	$('#manse').hover(function(){
		$('.manse').show();
    }, function(){
		$(".manse").hide();
	});
});

$(document).ready(function(){
	$('#ecuries').hover(function(){
		$('.ecuries').show();
    }, function(){
		$(".ecuries").hide();
	});
});

$(document).ready(function(){
	$('#hippodrome').hover(function(){
		$('.hippodrome').show();
    }, function(){
		$(".hippodrome").hide();
	});
});

$(document).ready(function(){
	$('#potager').hover(function(){
		$('.potager').show();
    }, function(){
		$(".potager").hide();
	});
});

$(document).ready(function(){
	$('#officiers').hover(function(){
		$('.officiers').show();
    }, function(){
		$(".officiers").hide();
	});
});

$(document).ready(function(){
	$('#canaux').hover(function(){
		$('.canaux').show();
    }, function(){
		$(".canaux").hide();
	});
});


