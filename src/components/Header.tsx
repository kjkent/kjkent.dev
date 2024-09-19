import React from 'react';
import type { RFC } from '@/types';
import { Link } from '@/utils';
import { H, Icon } from '@/components';

export const Header: RFC<{}, 'header'> = () => {
	return (
		<header className='mb-4 border-b-2 border-black pb-2'>
			<H h={1}>KRISTOPHER JAMES KENT</H>

			<section className='text-2xl'>
				<Link href='https://github.com/kjkent'>
					<Icon icon='mdi--github' />
				</Link>
				<Link href='https://aur.archlinux.org/packages?K=kjkent&SeB=m'>
					<Icon icon='mdi--arch' />
				</Link>
				<Link href='https://muckrack.com/kjkent'>
					<Icon icon='mdi--newspaper' />
				</Link>
				<Link href='https://linkedin.com/in/kjkent'>
					<Icon icon='mdi--linkedin' />
				</Link>
			</section>
		</header>
	);
};

export default Header;
