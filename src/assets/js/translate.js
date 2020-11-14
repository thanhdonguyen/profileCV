import { arrLang } from './translate-interface.js';
	var local = localStorage.getItem("language");
	if(local){
		var lang = local;
		$('#changeLang').val(local);
	}else {
		var lang = $('#changeLang').val();
	}

	$(".lang").each(function(index, element) {
    	$(this).html(arrLang[lang][$(this).attr("key")]);
  	});

	$('#changeLang').on('change', function(e){
		$(".bg-load").addClass('visible');
		setTimeout(function(){
			$(".bg-load").removeClass('visible');
		},1000)

		var lang = $('#changeLang').val();
		localStorage.setItem("language",lang)
		$(".lang").each(function(index, element) {
    		$(this).html(arrLang[lang][$(this).attr("key")]);
  		});
	});