export type DateString = string & { __brand: 'DateString' };

/** 0-indexed months. 1-indexed days. Months > 11 roll over
 *  to the next year. a `new Date` in the 91st month of 1995?
 * No worries, that's just Aug 2002. JS dates are cursed.
 */
function assertDateString(val: string): asserts val is DateString {
	try {
		if (!/^\d{4}-\d{2}-\d{2}$/.test(val as string)) {
			throw new Error('Invalid date string format. Expected yyyy-mm-dd');
		}

		// Make a new date from these numbers then compare the date
		// components to the numbers to see if they match. If not,
		// date is not valid.
		const [year, month, day] = val.split('-').map(Number);
		const date = new Date(year, month - 1, day);

		if (
			date.getFullYear() !== year ||
			date.getMonth() !== month - 1 ||
			date.getDate() !== day
		) {
			throw new Error(`${val} does not appear to be a real date.`);
		}
	} catch (e) {
		throw new Error(`Error asserting DateString: ${e}`);
	}
}

export const toDateString = (val: string): DateString => {
	assertDateString(val);
	return val as DateString;
};