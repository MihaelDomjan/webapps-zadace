//Napiši funkciju koja pretvara HRK u EUR
const KUNE_VALUE = 100;

const hrkToEur = (kune) => {
	return kune / 7.53;
};

console.log(`${KUNE_VALUE}HRK iznosi ${hrkToEur(KUNE_VALUE).toFixed(2)}€`);