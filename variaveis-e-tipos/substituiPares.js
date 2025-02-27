function substituiNumerosPares(array) {
	if (!array.length) return console.log(-1);

	const naoZero = (num) => num !== 0;
	const numPar = (num) => num % 2 === 0;

	for (let i = 0; i < array.length; i++) {
		if (numPar(array[i]) && naoZero(array[i])) {
			console.log(`trocando ${array[i]} por 0...`);
			array[i] = 0;
		} else if (!naoZero(array[i])) {
			console.log('Ops, você já vale 0!');
		}
	}
	console.log(array);
}

substituiNumerosPares([2, 0, 3, 5]);

/* My solution */
function substituiPares(array){
    if (!array.length) return console.log(-1);

    for (let i = 0; i < array.length; i++) {
        if(array[i]% 2 === 0){
            array[i] = 0;
        }else{
            array[i] = array[i];
        }
    }
	return console.log(array);
}
substituiPares([1, 3, 4, 6, 80, 33, 23, 90]);
//  Exemplo:
// Input -> [1, 3, 4, 6, 80, 33, 23, 90]

// Output -> [1, 3, 0, 0, 0, 33, 23, 0]

// Input -> []

// Output -> -1