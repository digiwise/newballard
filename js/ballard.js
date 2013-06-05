/* 
 *  Sponsored by GDG Open Sampa (https://plus.google.com/107992078616098741450/posts)
 *  Developed by Sam Carecho (https://plus.google.com/106183363140838342264/posts)
 */

var scores = {
		postura:0, ang_pulso:0, ret_braco:0, 
		ang_popliteo:0, sinal_xale:0, calcanhar_orelha:0, 
		pele:0, lanugo:0, sup_plantar:0, peito_areola:0,
		olho_orelha:0, genital:0
};

var scoresControle = {
		postura:false, ang_pulso:false, ret_braco:false, 
		ang_popliteo:false, sinal_xale:false, calcanhar_orelha:false, 
		pele:false, lanugo:false, sup_plantar:false, peito_areola:false,
		olho_orelha:false, genital:false
};
var controleSoma = new Array();

for (score in scores) {
	for (var i = -2; i < 6; i++) {
		try {
			$('#'+score+'_'+i).attr('rel', String(score));
			$('#'+score+'_'+i).click(function() {
				uncheckRow($(this).attr('rel'));
				scores[$(this).attr('rel')] = parseInt($(this).attr("score"));
				scoresControle[$(this).attr('rel')] = true;
				calcScore();
				$(this).addClass("btActive");
			});
		}catch (e) {
				console.log('inactive #'+$(this).attr('rel')+'_'+i);
			}
	}
}

function uncheckRow(idPrefix){
	try{
		for (var i = -2; i < 6; i++) {
			$('#'+idPrefix+'_'+i).removeClass('btActive');
		}
	}catch (e) {
		console.log('inactive #'+idPrefix);
	}
}

function calcScore() {
	
	controleSoma.length = 0;
	for (prop in scoresControle) {
		controleSoma.push(scoresControle[prop]);
	}
	
	//console.log($.inArray(false, controleSoma));
	
	if ($.inArray(false, controleSoma) > -1) {
		$('#ResuWN').text('0');
	}
	else {
		var soma = 0;
		for (score in scores) {
			soma = scores[score] + soma;
		}
		var semana = (soma * 0.4) + 24;
		var dia = parseInt((semana % 1) * 7);
		console.log(semana + '--' + dia);
		$('#ResuWN').text(parseInt(semana));
		$('#ResuDN').text(parseInt(dia));
	}
}