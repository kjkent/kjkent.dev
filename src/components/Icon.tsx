import React from 'react';
import type { RFC } from '@/types';

const fallbackStyle = 'mx-1.5 inline-block text-2xl iconify ';

export const Icon: RFC<{ icon: string }, 'span'> = ({
	icon,
	className,
	children,
	...props
}) => {
	const style = [className || fallbackStyle, 'iconify', icon].join(' ');

	return (
		<span className={style} {...props}>
			{children}
		</span>
	);
};

export default Icon;
