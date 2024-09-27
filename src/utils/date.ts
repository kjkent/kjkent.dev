/**
 * **dateStringify**
 *
 * Converts a Date object to a string in yyyy-mm-dd format
 * @param {Date} date - The Date object to stringify
 * @returns {string} The date in yyyy-mm-dd format
 */
export const dateStringify = (date: Date): string => {
	return date.toISOString().split('T')[0];
};
