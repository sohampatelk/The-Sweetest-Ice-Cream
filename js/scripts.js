// https://edabit.com/challenge/HKmJFmZZCX53ff4ke

//sweetestIcecream([ice1, ice2, ice3, ice4, ice5]) ➞ 23
//sweetestIcecream([ice3, ice1]) ➞ 23
//sweetestIcecream([ice3, ice5]) ➞ 17

function sweetestIcecream(arr) {
	const sweetnessValue = {
		"Plain" : 0,
		"Vanilla" :	5,
		"ChocolateChip" :	5,
		"Strawberry"	: 10,
		"Chocolate" :	10
	};
	let totalSweetness = arr.map(element => sweetnessValue[element["flavor"]] + element["numSprinkles"]);
	return Math.max(...totalSweetness);
}

// ice1 = IceCream("Chocolate", 13);         // value of 23
// ice2 = IceCream("Vanillla", 0);           // value of 5
// ice3 = IceCream("Strawberry", 7);        // value of 17
// ice4 = IceCream("Plain", 18);             // value of 18
// ice5 = IceCream("ChocolateChip", 3);      // value of 8

// sweetestIcecream([ice1, ice2, ice3, ice4, ice5]); // ➞ 23
// sweetestIcecream([ice3, ice1]);  // ➞ 23
// sweetestIcecream([ice3, ice5]);  // ➞ 17
