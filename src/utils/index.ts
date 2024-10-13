type RandomElementFunc<T> = (arr: T[]) => T;

export const randomElement: RandomElementFunc<unknown> = (arr: unknown[]) => {
	return arr[Math.floor(Math.random() * arr.length)];
};
