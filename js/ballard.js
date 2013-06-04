//var score_values = new Array();
var scores = {postura:0, ang_pulso:0, ret_braco:0, ang_popliteo:0, sinal_xale:0, calcanhar_orelha:0};
var scoresControle = {
		postura:false, ang_pulso:false, ret_braco:false, 
		ang_popliteo:false, sinal_xale:false, calcanhar_orelha:false
};
var controleSoma = new Array();

for (score in scores) {
	for (var i = -1; i < 6; i++) {
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
		for (var i = -1; i < 6; i++) {
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
	
	console.log($.inArray(false, controleSoma));
	
	if ($.inArray(false, controleSoma) > -1) {
		$('#ResuWN').text('0');
		console.log(scores);
		console.log(scoresControle);
		console.log(controleSoma);
	}
	else {
		var soma = 0;
		for (score in scores) {
			soma = scores[score] + soma;
		}
		console.log('soma -> '+soma);
		$('#ResuWN').text(soma);
	}
}