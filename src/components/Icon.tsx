import type { RFC } from '@/types';

export const Icon: RFC<'span', { icon: string }> = ({
	icon,
	className,
	...props
}) => {
	if (!icon) throw new Error('Icon not defined');

	const style = [icon, className].join(' ');

	return <span {...props} className={style}></span>;
};

export default Icon;
