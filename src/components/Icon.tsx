import React from 'react';
import type { RFC } from '@/types';

const defaultStyle = 'inline-block';

export const Icon: RFC<{ icon: string }, 'span'> = ({
	icon,
	className,
	...props
}) => {
	if (!icon) throw new Error('Icon not defined');

	const style = [className || defaultStyle, icon].join(' ');

	return <span {...props} className={style}></span>;
};

export default Icon;
