import type { RFC } from '@/types';

type Axis = 'x' | 'y' | 'xy' | 'yx';
type Breakpoint = 'sm:' | 'md:' | 'lg:' | 'xl:' | '2xl:';
type XClass = 'items-center';
type YClass = 'justify-center';
type ClassString = 
	| XClass 
	| YClass 
	| `${XClass} ${YClass}` 
	| `${YClass} ${XClass}`;

type AxisWithBreakpoint = `${Breakpoint | ''}${Axis}`;
type ClassWithBreakpoint = `${Breakpoint | ''}${XClass | YClass}`;

type CenterProps = { axis: AxisWithBreakpoint }

const axisToClass = (axis: Axis): ClassString => {
	if (axis === 'x') {
		return 'items-center';
	}
	if (axis === 'y') {
		return 'justify-center';
	}
	return 'items-center justify-center';

};

const parseAxisString = (axisPropString: string): string => {
	// Example axis string: 'xy md:x'

	// Split into breakpoints: ['xy', 'md:x']
	const axis = axisPropString.split(' ') as AxisWithBreakpoint[];

	// Convert to class strings: ['items-center justify-center', 'md:items-center']
	const classStrings = axis.map((axisItem) => {
		if (axisItem.includes(':')) {
			const [breakpoint, axis] = axisItem.split(':');
			return `${breakpoint}:${axisToClass(axis)}`;
		}
		return axisToClass(axisItem);
	});
};


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
