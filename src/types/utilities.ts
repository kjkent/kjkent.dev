/**
 * @see https://stackoverflow.com/posts/comments/132026428
 *
 * @example
 * type CarSpec = {
 * 	mfr: string;
 * 	model?: string;
 * 	sku?: string;
 * }
 *
 * type CarSearchParams = RequireOnlyOne<CarSpec, 'model' | 'sku'>
 */
export type RequireOnlyOne<T, Keys extends keyof T = keyof T> = Omit<T, Keys> &
	{
		[K in keyof Required<T>]: Required<Pick<T, K>> &
			Partial<Record<Exclude<Keys, K>, undefined>>;
	}[Keys];
