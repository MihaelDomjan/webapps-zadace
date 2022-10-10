//Napiši funkciju koja pretvara broj X u sate i minute - Ispis : 120 -> “Ovo je 2 sata i 0 minuta”

const BROJ_MIN = 130;

const numberToTime = (number) => {
	const hours = number / 60;
	const roundedHours = Math.floor(hours);
	const minutes = (hours - roundedHours) * 60;
	const roundedMinutes = Math.round(minutes);

	return console.log(
		`${number} => ${roundedHours} sati i ${roundedMinutes} minuta.`
	);
};

numberToTime(BROJ_MIN);