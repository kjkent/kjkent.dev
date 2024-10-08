import type { RFC } from '@/types';
import { Footer } from '@/components';
import '@/styles/base.css';

/**
 * The base layout for the site (atm just appends `<Footer />`).
 * Must be outermost tag after `<body>`.
 *
 * @param   - Passed in by React, contains children, className, attrs, etc.
 * @returns - A `div` element with 100% height and width set.
 *              Do not use size attributes on <Base /> itself.
 */
export const Base: RFC<'div'> = ({ children, className = '', ...attrs }) => {
	return (
		<div className='flex h-screen w-screen flex-col'>
			<div {...attrs} className={`h-full w-full ${className}`}>
				{children}
			</div>
			<Footer />
		</div>
	);
};

export default Base;
