export const randomElement = <T>(arr: T[]): T => {
	if (arr.length === 0) {
		throw new Error('Cannot get random element of empty array');
	}
	return arr[Math.floor(Math.random() * arr.length)] as T;
};
