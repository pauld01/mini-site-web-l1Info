$(document).ready(function(){					/*Quand le DOM sera prêt et chargé*/
	$('#valider').click(function(){				/*au moment du clique sur le bouton de validation*/
		$('.popup').show('fast');				/*montrer les classes .popup rapidement*/
	});
	$('#annuler').click(function(){				/*au moment du clique sur le bouton d'annulation*/
		$('.popup').hide('fast');				/*faire disparaitre les classes .popup rapidement*/
	});
});