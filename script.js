(function () {
	function MacrosToCalories(proteins, carbs, fats) {
		proteins = parseFloat(proteins);
		carbs = parseFloat(carbs);
		fats = parseFloat(fats);
        console.log(proteins, carbs, fats)
		return ((proteins * 4) + (carbs * 4) + (fats * 9));
	}

	const calculateMacros = document.getElementById("calculateMacros");

	if (calculateMacros) {
		calculateMacros.onsubmit = function () {
            this.result.value = MacrosToCalories(this.proteins.value, this.carbs.value, this.fats.value);
            document.getElementById("result-text").innerHTML = result.value;
			return false;
		};
	}
}());

function clearAnswer()
{   
    document.getElementById("result-text").innerHTML = '';
}
