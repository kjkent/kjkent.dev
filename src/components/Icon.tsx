import type { RFC } from '@/types';

const defaultStyle = 'inline-block';

export const Icon: RFC<'span', { icon: string }> = ({
	icon,
	className,
	...props
}) => {
	if (!icon) throw new Error('Icon not defined');

	const style = [className || defaultStyle, icon].join(' ');

	return <span {...props} className={style}></span>;
};

export default Icon;
