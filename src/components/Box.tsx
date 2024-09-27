import type { RFC } from '@/types';

const defaultStyle = ['border-2', 'border-black', 'p-2'].join(' ');

export const Box: RFC<'section'> = ({ className, children, ...attrs }) => {
	return (
		<section {...attrs} className={`${defaultStyle} ${className}`}>
			{children}
		</section>
	);
};

export default Box;
