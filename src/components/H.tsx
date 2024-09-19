import React, { createElement } from 'react';
import type { RFC } from '@/types';

type HeaderComponent = RFC<{ h: 1 | 2 | 3 | 4 | 5 | 6 }, 'h1'>;

const staticStyles = 'mb-2 font-mono font-bold';

const dynamicStyles = {
	1: 'text-2xl italic',
	2: 'text-base underline',
	3: 'text-base underline',
	4: 'text-base underline',
	5: 'text-base underline',
	6: 'text-base underline',
};

export const H: HeaderComponent = ({ h, children }) => {
	return createElement(
		`h${h}`,
		{ className: [staticStyles, dynamicStyles[h]].join(' ') },
		children,
	);
};

export default H;
