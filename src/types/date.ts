export type DateString = string & { __brand: 'DateString' };

/**
 * 0-indexed months. 1-indexed days. Months > 11 roll over
 *  to the next year. a `new Date` in the 91st month of 1995?
 * 	No worries, that's just Aug 2002. JS dates are cursed.
 *
 * new Date() offers sanity checking, but only if date is passed
 *  as a string. If it's passed as [number, number, number], it
 *  will accept any range of values.
 *
 * Test if date === NaN or date.toDateString() === 'Invalid Date'
 *  to check if date is valid.
 */
function assertDateString(val: string): asserts val is DateString {
	try {
		if (!/^\d{4}-\d{2}-\d{2}$/.test(val)) {
			throw new Error('Invalid date string format. Expected yyyy-mm-dd');
		}

		const date = new Date(val);

		if (
			Number.isNaN(date.getDate()) ||
			date.toDateString() === 'Invalid Date'
		) {
			throw new Error(`${val} does not appear to be a real date.`);
		}
	} catch (e) {
		throw new Error(`Error asserting DateString: ${e}`);
	}
};

export const toDateString = (val: string): DateString => {
	assertDateString(val);
	return val as DateString;
};
