$(document).ready(function () {
	$('form#programming').submit(function (event) {
		event.preventDefault();

		const experienceResult = $('#experience').val();
		const typeWorkResult = $('#typeWork').val();
		const hopeToDoResult = $('#hopeToDoResult').val();
		const experienceLogicResult = $('#experienceLogic').val();
		const mathAbilityResult = $('#mathAbility').val();

		let recommendation = '';

		if (experienceResult === 'Low') {
			recommendation = ' You should learn Python!';
		} else if (typeWorkResult === 'Stem') {
			recommendation = ' You should learn R!';
		} else if (hopeToDoResult === 'FANG') {
			recommendation = ' You should learn GO!';
		} else if (experienceLogicResult === 'High') {
			recommendation = ' You should learn C++';
		} else if (mathAbilityResult === 'High') {
			recommendation = ' You should learn Haskel';
		} else {
			recommendation = ' You should learn Python!';
		}

		$('.hidden-item').show();
		$('.hidden-item').append(recommendation);
	});
});
