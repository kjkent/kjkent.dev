import type { RFC } from '@/types';
import { Icon, Link } from '@/components';
import { extLinks } from '@/data';

type ExtLinksRFC = RFC<
	'a' | 'section' | 'span',
	{ groupCn?: string; iconCn?: string }
>;

export const ExtLinks: ExtLinksRFC = ({ ...attrs }) => {
	return (
		<section {...attrs} className='mt-2 flex justify-end gap-x-3'>
			{extLinks.map((e, i) => {
				return (
					<Link
						key={i}
						href={e.href}
						className='inline-block size-min leading-[0]'>
						<Icon className='size-6' icon={e.icon} />
					</Link>
				);
			})}
		</section>
	);
};

export default ExtLinks;
