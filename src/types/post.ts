import type { DateString } from '@/types';

export type PostBrief = {
	title: string;
	date: DateString;
	abstract: string;
	[label: string]: unknown;
};
