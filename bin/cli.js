#!/usr/bin/env node

import minimist from 'minimist';
import { roll } from "../lib/roll.js"

const values = minimist(process.argv.slice(2));

export function main() {
	// print values
	console.log(JSON.stringify(roll(values.sides, values.dice, values.rolls)));
};

// call main function
main();
