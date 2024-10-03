import type { RFC } from '@/types';

const defaultStyle = ['border-2', 'border-[#7aa2f7]', 'px-4', 'py-2'].join(' ');

export const Box: RFC<'section'> = ({ className, children, ...attrs }) => {
	return (
		<section {...attrs} className={`${defaultStyle} ${className}`}>
			{children}
		</section>
	);
};

export default Box;
