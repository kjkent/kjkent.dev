import type { RFC } from '@/types';
import { Icon, Link } from '@/components';
import { extLinks } from '@/data';

type ExtLinksRFC = RFC<'section'>;

export const ExtLinks: ExtLinksRFC = ({ ...attrs }) => {
	return (
		<section {...attrs} className='flex justify-end gap-x-5'>
			{extLinks.map((e, i) => {
				return (
					<Link
						key={i}
						href={e.href}
						className='inline-block size-min leading-[0]'>
						<Icon className='size-6 text-term-fg' icon={e.icon} />
					</Link>
				);
			})}
		</section>
	);
};

export default ExtLinks;
