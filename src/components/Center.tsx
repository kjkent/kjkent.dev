import type { RFC } from '@/types';

type CenterProps = {
	axis: 'x' | 'y' | 'xy' | 'yx';
};

/**
 * CURSED KNOWLEDGE: min-height is not a stricter version of height
 *
 *  Background: https://stackoverflow.com/a/2341935
 *
 * If using min-height: 100% for the parent element, the child will not grow
 *  to fill the height of its parent (height may be computed as 'auto'). If
 *  using height/width: 100%, the parent *must* have a height/width set or it
 *  will not expand as expected.
 */
export const Center: RFC<'div', CenterProps> = ({
	axis,
	children,
	className = '',
	...attrs
}) => {
	const yAlign = 'justify-center';
	const xAlign = 'items-center';
	const parentClass = [
		'flex flex-col',
		'h-full',
		'w-full',
		axis.includes('x') && ` ${xAlign}`,
		axis.includes('y') && ` ${yAlign}`,
	]
		.filter(Boolean)
		.join(' ');

	return (
		<div className={parentClass}>
			<div {...attrs} className={className}>
				{children}
			</div>
		</div>
	);
};

export default Center;
