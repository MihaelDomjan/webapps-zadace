// Napiši funkciju kojoj se predaje string, te ona ispisuje bez razmaka svaku rijec velikim slovom (cammelCase)

const stringToCamelCase = (word) => {
	let cammelCase = "";
	word.split(" ").forEach(function (el, idx) {
		let add = el.toLowerCase();
		cammelCase += idx === 0 ? add : add[0].toUpperCase() + add.slice(1);
	});
	return cammelCase;
};

console.log(stringToCamelCase("web apps vjezbe"));
