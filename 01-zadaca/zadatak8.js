//Napiši funkciju koja vraća predano polje obrnutim redosljedom
//Ispis : [3,4,5,6] -> [6,5,4,3]
const FIXED_ARRAY = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const reverseArray = (array) => {
	return array.reverse();
};

console.log(reverseArray(FIXED_ARRAY));