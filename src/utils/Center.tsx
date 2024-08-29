import type { ReactNode, FC } from 'react';

import React from 'react';

type CenterProps = {
	children: ReactNode;
	axis: 'x' | 'y' | 'xy' | 'yx';
	className?: string;
};

const Center: FC<CenterProps> = ({ axis, className, children }) => {
	const xAlign = 'justify-center';
	const yAlign = 'items-center';

	const parentDefaults = [
		'w-full', // Needs to fill entirety of containing div
		'h-full', //  for centering to work.
		'flex',
		['xy', 'yx'].includes(axis) && `${xAlign} ${yAlign}`,
		['x'].includes(axis) && xAlign,
		['y'].includes(axis) && yAlign,
	];

	const parentClass = [...parentDefaults].join(' ').concat(` ${className}`);

	return <div className={parentClass}>{children}</div>;
};

export default Center;
