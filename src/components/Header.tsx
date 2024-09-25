import React from 'react';
import type { RFC } from '@/types';
import { Icon, Link } from '@/components';
import { extLinks } from '@/include';

const iconRowStyle = ['inline-block', 'mr-4'].join(' ');

export const Header: RFC<{}, 'header'> = () => {
	return (
		<header className='mb-4 border-b-2 border-black pb-2'>
			<h1 className='ml-1'>KRISTOPHER JAMES KENT</h1>
			<section className='text-2xl'>
				{extLinks.map((e, i) => {
					return (
						<Link key={i} href={e.href}>
							<Icon className={iconRowStyle} icon={e.icon} />
						</Link>
					);
				})}
			</section>
		</header>
	);
};

export default Header;
