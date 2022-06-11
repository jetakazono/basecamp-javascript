// solução 1
function verificaPalindromo(string) {
	if (!string) return 'String inexistente';

	let reg = /[^A-Za-z0–9]/g;
    let lowRegStr = string.toLowerCase().replace(reg, '');
    let reverseStr = lowRegStr.split('').reverse().join('');
    return reverseStr === lowRegStr;

}
console.log(verificaPalindromo('cat'));

// solução 2

function varificaPalindromo2(string) {
	if (!string) return 'String inexistente';

	const reg = /[^A-Za-z0-9]/g;
    string = string.toLowerCase().replace(reg, '');

	for (var i = 0; i < string.length / 2; i++) {
		if (string[i] !== string[string.length - 1 - i]) {
			return false;
		}
	}
	return true;
}

console.log(varificaPalindromo2('asa'));

