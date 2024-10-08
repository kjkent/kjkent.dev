import type { RFC } from '@/types';

export const NavButton: RFC<'a'> = ({ href, ...attrs }) => {
	return (
		<a
			{...attrs}
			href={href}
			className='inline-block h-fit w-fit border-[1px] border-term-gray px-4 text-center text-term-fg'>
			{attrs.children}
		</a>
	);
};

export default NavButton;
