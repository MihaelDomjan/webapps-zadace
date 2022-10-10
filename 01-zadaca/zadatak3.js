//Napiši funkciju koja provjerava nalazi li se dani broj X unutar [100,150000] : Ispis : 53 -> “53 nije unutar [100,150000]”


const RANDOM_N = 10;

const isNumberInRange = (number) => {
	return number >= 100 && number <= 150000;
};

console.log(
	RANDOM_N + `${isNumberInRange(RANDOM_N) ? " je u rangu." : " nije u rangu."}`
);