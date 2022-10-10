//Napiši funkciju kojoj se predaje polje brojeva, te ona ispisuje brojeve djeljive s 3
//Ispis : [1,2,3,4,5,6,7,8,9,10] -> “Brojevi djeljivi s 3: 3,6,9”

const FIXED_ARRAY = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const printDivsibleByThree = (array) => {
	for (let i = 0; i < array.length; i++) {
		if (array[i] % 3 == 0) {
			console.log(array[i]);
		} else continue;
	}
};

printDivsibleByThree(FIXED_ARRAY);