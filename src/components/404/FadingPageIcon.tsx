import type { RFC } from '@/types';
import { Icon } from '@/components';

export const FadingPageIcon: RFC<'span'> = ({ ...attrs }) => {
	return (
		<Icon
			{...attrs}
			className='fadeout text-6xl'
			icon='icon-[mdi--file-question-outline]'
			aria-label='Disapearing page icon with question mark'
		/>
	);
};

export default FadingPageIcon;