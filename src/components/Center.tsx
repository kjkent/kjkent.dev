import type { RFC } from '@/types';

type CenterProps = { axis: 'x' | 'y' | 'xy' | 'yx' };

export const Center: RFC<'div', CenterProps> = ({ axis, children, ...attrs }) => {
	const xAlign = 'justify-center';
	const yAlign = 'items-center';
	const parentDefaults = [
		// Needs to fill entirety of containing div
		'flex',
		['xy', 'yx'].includes(axis) && `${xAlign} ${yAlign}`,
		['x'].includes(axis) && xAlign,
		['y'].includes(axis) && yAlign,
	];

	// Combine the defaults with passed className to handle any overrides
	const parentClass = [...parentDefaults].filter(Boolean).join(' ');

	// Child also needs to be in own div, filling the entire parent to
	// avoid sizing issues or having any flex-child attributes applied
	return (
		<div {...attrs} className={parentClass}>
			<div className='grow'>{children}</div>
		</div>
	);
};

export default Center;
