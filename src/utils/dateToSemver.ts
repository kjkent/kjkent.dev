export const dateToSemver = () => {
	const date: Date = new Date();

	const yy: string = date.getFullYear().toString().slice(-2);
	const mm: number = date.getMonth() + 1;
	const dd: number = date.getDate();

	return `v${yy}.${mm}.${dd}`;
};
