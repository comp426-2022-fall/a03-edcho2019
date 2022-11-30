#!/usr/bin/env node

export function roll(sides, dice, rolls) {
	
	let final_results = [];
	let final_sum = 0;
	let minimum = 1;
	const maximum = sides;

	// edge case
	if (dice >= 2) {
		minimum = minimum * dice;
	}

	//enter nested for loop
	for (let n = 0; n < rolls; n++) {
		for (let n1 = 0; n1 < dice; n1++) {
			final_sum = final_sum + minimum + Math.floor(Math.random() * (1 + maximum - minimum));
		}
		final_results.push(final_sum);
		//reset final_sum to zero
		final_sum = 0;
	}

	return {
		"sides": sides,
		"dice": dice,
		"rolls": rolls,
		"results": final_results
	};
}
