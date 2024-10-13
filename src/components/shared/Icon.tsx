import type { RFC } from '@/types';

export const Icon: RFC<'span', { icon: string }> = ({
	icon,
	className,
	...attrs
}) => {
	const style = [icon, className].join(' ');
	return <span {...attrs} className={style} />;
};

export default Icon;
