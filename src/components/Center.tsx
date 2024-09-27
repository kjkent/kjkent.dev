import type { RFC } from '@/types';

type CenterProps = { axis: 'x' | 'y' | 'xy' | 'yx' };

export const Center: RFC<'div', CenterProps> = ({
	axis,
	className,
	children,
	...attrs
}) => {
	const xAlign = 'justify-center';
	const yAlign = 'items-center';

	const parentDefaults = [
		// 'w-full', // Needs to fill entirety of containing div
		// 'h-full', //  for centering to work.
		'flex',
		['xy', 'yx'].includes(axis) && `${xAlign} ${yAlign}`,
		['x'].includes(axis) && xAlign,
		['y'].includes(axis) && yAlign,
	];

	const parentClass = [...parentDefaults].join(' ').concat(` ${className}`);

	return (
		<div {...attrs} className={parentClass}>
			{children}
		</div>
	);
};

export default Center;
