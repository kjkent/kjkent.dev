import type { RFC } from '@/types';
import { Footer } from '@/components';
import '@/styles/base.css';

const baseStyles = [
	'h-screen',
	'w-screen',
	'flex flex-col',
	'bg-[#16161e] text-[#cbe3e7]',
].join(' ');

export const Base: RFC<'div'> = ({ children, ...props }) => {
	return (
		<div {...props} className={baseStyles}>
			<div className='grow'>{children}</div>
			<Footer />
		</div>
	);
};

export default Base;
