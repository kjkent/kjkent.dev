import type { RFC } from '@/types';
import { Footer } from '@/components';
import '@/styles/base.css';

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

const baseStyles = ['h-screen', 'w-screen', 'flex flex-col'].join(' ');

const darkStyles = ['bg-term-bg', 'text-term-fg'].join(' ');

export const Base: RFC<'div'> = ({ children, className = '', ...props }) => {
	return (
		<div {...props} className={baseStyles.concat(' ', darkStyles)}>
			<div className='h-full w-full'>{children}</div>
			<Footer />
		</div>
	);
};

export default Base;
