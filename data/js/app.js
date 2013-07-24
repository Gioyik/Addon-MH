/* Foundation v2.2 http://foundation.zurb.com */
jQuery(document).ready(function ($) {

	/* Use this js doc for all application specific JS */

	/* TABS --------------------------------- */
	/* Remove if you don't need :) */

	function activateTab($tab) {
		var $activeTab = $tab.closest('dl').find('a.active'),
				contentLocation = $tab.attr("href") + 'Tab';

		//Make Tab Active
		$activeTab.removeClass('active');
		$tab.addClass('active');

    	//Show Tab Content
		$(contentLocation).closest('.tabs-content').children('li').hide();
		$(contentLocation).css('display', 'block');
	}

	$('dl.tabs').each(function () {
		//Get all tabs
		var tabs = $(this).children('dd').children('a');
		tabs.click(function (e) {
			activateTab($(this));
		});
	});

	if (window.location.hash) {
		activateTab($('a[href="' + window.location.hash + '"]'));
	}

	/* ALERT BOXES ------------ */
	$(".alert-box").delegate("a.close", "click", function(event) {
    event.preventDefault();
	  $(this).closest(".alert-box").fadeOut(function(event){
	    $(this).remove();
	  });
	});


	/* PLACEHOLDER FOR FORMS ------------- */
	/* Remove this and jquery.placeholder.min.js if you don't need :) */

	$('input, textarea').placeholder();

	/* TOOLTIPS ------------ */
	$(this).tooltips();



	/* UNCOMMENT THE LINE YOU WANT BELOW IF YOU WANT IE6/7/8 SUPPORT AND ARE USING .block-grids */
//	$('.block-grid.two-up>li:nth-child(2n+1)').css({clear: 'left'});
//	$('.block-grid.three-up>li:nth-child(3n+1)').css({clear: 'left'});
//	$('.block-grid.four-up>li:nth-child(4n+1)').css({clear: 'left'});
//	$('.block-grid.five-up>li:nth-child(5n+1)').css({clear: 'left'});



	/* DROPDOWN NAV ------------- */

	var lockNavBar = false;
	$('.nav-bar a.flyout-toggle').live('click', function(e) {
		e.preventDefault();
		var flyout = $(this).siblings('.flyout');
		if (lockNavBar === false) {
			$('.nav-bar .flyout').not(flyout).slideUp(500);
			flyout.slideToggle(500, function(){
				lockNavBar = false;
			});
		}
		lockNavBar = true;
	});
  if (Modernizr.touch) {
    $('.nav-bar>li.has-flyout>a.main').css({
      'padding-right' : '75px'
    });
    $('.nav-bar>li.has-flyout>a.flyout-toggle').css({
      'border-left' : '1px dashed #eee'
    });
  } else {
    $('.nav-bar>li.has-flyout').hover(function() {
      $(this).children('.flyout').show();
    }, function() {
      $(this).children('.flyout').hide();
    })
  }


	/* DISABLED BUTTONS ------------- */
	/* Gives elements with a class of 'disabled' a return: false; */

	/* RSS */
	$('#divRss').FeedEk({
		FeedUrl : 'http://feeds.mozilla-hispano.org/mozillahispano',
		MaxCount : 8,
		ShowDesc : true,
		ShowPubDate:true
    }); 
  
	/* RSS Planet */
	$('#divPlanetRss').FeedEk({
		FeedUrl : 'http://feeds.mozilla-hispano.org/mozillahispano-planet',
		MaxCount : 8,
		ShowDesc : true,
		ShowPubDate:true
    }); 

	/* RSS Reuniones */
    $('#reuRss').FeedEk({
		FeedUrl : 'https://www.mozilla-hispano.org/documentacion/Especial:Ask/-5B-5BCategor%C3%ADa:Reuniones-5D-5D/-3FArea/-3FProyecto/-3FFechainicio%3Dstart/limit%3D50/order%3DDESC/sort%3DFechainicio/format%3Drss/title%3DReuniones-20Mozilla-20Hispano/description%3DListado-20de-20reuniones-20comunitarias',
		MaxCount : 8,
		ShowDesc : true,
		ShowPubDate:true
    });

    /* RSS Eventos */
    $('#eventosRss').FeedEk({
		FeedUrl : 'https://www.mozilla-hispano.org/documentacion/Especial:Ask/-5B-5BCategor%C3%ADa:Evento-5D-5D/-3F%3DNombre-23/-3FFechainicio%3DFecha/-3FPais/-3FCiudad/-3FUrl/mainlabel%3DNombre/limit%3D50/order%3DDESC,DESC/sort%3DFechainicio,/format%3Drss',
		MaxCount : 8,
		ShowDesc : true,
		ShowPubDate:true
    });

    /* RSS Tareas */
    $('#tareasRss').FeedEk({
		FeedUrl : 'https://www.mozilla-hispano.org/documentacion/Especial:Ask/-5B-5BCategor%C3%ADa:Tarea-5D-5D-5B-5Bestado::!Finalizado-5D-5D/limit%3D50/order%3DASC,DESC/sort%3DFechafin,Estado/format%3Drss',
		MaxCount : 8,
		ShowDesc : true,
		ShowPubDate:true
    });  

});
