import type { RFC } from '@/types';
import { Icon, Link } from '@/components';
import { extLinks } from '@/data';

export const ExtLinks: RFC<'section'> = ({ ...attrs }) => {
	return (
		<section {...attrs}>
			{extLinks.map((e, i) => {
				return (
					<Link key={i} href={e.href} className='ml-6 text-2xl'>
						<Icon icon={e.icon} />
					</Link>
				);
			})}
		</section>
	);
};

export default ExtLinks;
