import { type TreeSpec } from '@/types';

export const navTreeSpec: TreeSpec = {
	label: 'kjkent.dev',
	children: [
		{ label: 'whoami', handleClick: () => {} },
		{ label: 'log', handleClick: () => {} },
		{ label: 'contact', handleClick: () => {} },
	],
};

export default navTreeSpec;
