import React from 'react';
import type { RFC } from '@/types';
import { Footer } from '@/components';

const baseStyles = [
	'min-h-screen p-4',
	'text-sm font-mono',
	'text-zinc-800 bg-zinc-50',
	'flex justify-center',
].join(' ');

export const Base: RFC<{}, 'div'> = ({ children, ...props }) => {
	return (
		<div {...props} className={baseStyles}>
			<div className='max-w-screen-lg'>
				{children}
				<Footer />
			</div>
		</div>
	);
};

export default Base;
