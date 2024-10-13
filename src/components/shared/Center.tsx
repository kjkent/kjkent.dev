import type { RFC } from '@/types';

const PARENT_BASE = 'flex h-full w-full';

type Axis = 'x' | 'y' | 'xy' | 'yx';
type XClass = 'justify-center';
type YClass = 'items-center';

type CenterProps = { axis?: Axis; parentClasses?: string };
type ClassString =
	| XClass
	| YClass
	| `${XClass} ${YClass}`
	| `${YClass} ${XClass}`;


const axisToClass = (axis: Axis): ClassString => {
	if (axis === 'x') {
		return 'justify-center';
	}
	if (axis === 'y') {
		return 'items-center';
	}
	return 'items-center justify-center';

};

// type Breakpoint = 'sm:' | 'md:' | 'lg:' | 'xl:' | '2xl:';
// type AxisWithBreakpoint = `${Breakpoint | ''}${Axis}`;
// type ClassWithBreakpoint = `${Breakpoint | ''}${XClass | YClass}`;
// const parseAxisString = (axisPropString: string): string => {
// 	// Example axis string: 'xy md:x'

// 	// Split into breakpoints: ['xy', 'md:x']
// 	const axis: AxisWithBreakpoint[] = axisPropString.split(' ') as AxisWithBreakpoint[];

// 	// Convert to class strings: ['items-center justify-center', 'md:items-center']
// 	const classStrings: ClassWithBreakpoint[] = axis.map((axisItem) => {
// 		if (axisItem.includes(':')) {
// 			const [breakpoint, axis] = axisItem.split(':');
// 			return `${breakpoint}:${axisToClass(axis as Axis)}`;
// 		}
// 		return axisToClass(axisItem as Axis);
// 	}) as ClassWithBreakpoint[];

// 	return classStrings.join(' ');
// };

export const Center: RFC<'div', CenterProps> = ({
	axis = 'xy',
	parentClasses,
	children,
	className = '',
	...attrs
}) => {
	if (!parentClasses) {
		parentClasses = axisToClass(axis);
	}

	return (
		<div className={`${PARENT_BASE} ${parentClasses}`}>
			<div {...attrs} className={className}>
				{children}
			</div>
		</div>
	);
};

export default Center;
