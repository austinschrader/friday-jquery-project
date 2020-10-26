$(document).ready(function () {
	$('form#programming').submit(function (event) {
		const experienceResult = $('#experience').val();
		const typeWorkResult = $('#typeWork').val();
		const hopeToDoResult = $('#hopeToDoResult').val();
		const experienceLogicResult = $('#experienceLogic').val();
		const mathAbilityResult = $('#mathAbility').val();

		if (experienceResult === 'Low') {
			alert('You should learn Python!');
		} else if (typeWorkResult === 'Stem') {
			alert('You should learn R!');
		} else if (hopeToDoResult === 'FANG') {
			alert('You should learn GO!');
		} else if (experienceLogicResult === 'High') {
			alert('You should learn C++');
		} else if (mathAbilityResult === 'High') {
			alert('You should learn Haskel');
		} else {
			alert('You should learn Python!');
		}
	});
});
