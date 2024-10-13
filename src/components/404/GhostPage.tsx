import { Icon } from '@/components';
import type { RFC } from '@/types';

export const GhostPage: RFC<'img', { seq: 1 | 2 | 3 }> = ({
	seq,
	...attrs
}) => {
	const css = {
		1: 'delay-0',
		2: 'delay-[4s]',
		3: 'delay-[8s]',
	};

	return (
		<Icon
			{...attrs}
			className={`ghost ${css[seq]}`}
			icon='icon-[mdi--file-question-outline]'
			aria-label='A ghostly page icon containing a question mark, and fading in and out of view'
		/>
	);
};

export default GhostPage;
