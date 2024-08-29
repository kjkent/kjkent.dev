import type { ReactElement, ReactNode } from 'react';
import { createElement } from 'react';

type HProps = {
	h: 1 | 2 | 3 | 4 | 5 | 6;
	children: ReactNode[];
};

const staticStyles = 'mb-2 font-mono font-bold';

const dynamicStyles = {
	1: 'text-3xl',
	2: 'text-3xl',
	3: 'text-2xl',
	4: 'text-2xl',
	5: 'text-xl',
	6: 'text-lg',
};

type HFunc = { (props: HProps): ReactElement };

export const Heading: HFunc = ({ h, children }: HProps) =>
	createElement(
		`h${h}`,
		{ className: [staticStyles, dynamicStyles[h]].join(' ') },
		...children,
	);

export default Heading;
