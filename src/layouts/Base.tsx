import type { RFC } from '@/types';
import { Footer } from '@/components';
import '@/styles/base.css';

const baseStyles = ['min-h-screen', 'min-w-screen', 'flex flex-col'].join(' ');

const darkStyles = ['bg-term-bg', 'text-term-fg'].join(' ');

export const Base: RFC<'div'> = ({ children, className = '', ...props }) => {
	return (
		<div {...props} className={baseStyles.concat(' ', darkStyles)}>
			<div className='h-full w-full grow'>
				<div className='h-full w-full'>{children}</div>
			</div>
			<Footer />
		</div>
	);
};

export default Base;
