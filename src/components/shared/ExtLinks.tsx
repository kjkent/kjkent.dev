import { Icon, Link } from '@/components';
import type { RFC } from '@/types';

export const extLinks = [
	{
		href: 'https://github.com/kjkent',
		icon: 'icon-[mdi--github]',
		caption: 'Check out my GitHub profile',
	},
	{
		href: 'https://aur.archlinux.org/packages?K=kjkent&SeB=m',
		icon: 'icon-[mdi--arch]',
		caption: 'See my Arch Linux packages on the AUR',
	},
	{
		href: 'https://muckrack.com/kjkent',
		icon: 'icon-[mdi--newspaper]',
		caption: 'See my journalism portfolio on MuckRack',
	},
	{
		href: 'https://linkedin.com/in/kjkent',
		icon: 'icon-[mdi--linkedin]',
		caption: 'Connect with me on LinkedIn',
	},
	{
		href: 'mailto:kris@kjkent.dev',
		icon: 'icon-[mdi--email]',
		caption: 'Send me an email',
	},
];

export const ExtLinks: RFC<'section'> = ({ ...attrs }) => {
	return (
		<section {...attrs}>
			{extLinks.map((e) => {
				return (
					<Link key={e.icon} href={e.href} className='size-min leading-[0]'>
						<Icon aria-label={e.caption} icon={e.icon} />
					</Link>
				);
			})}
		</section>
	);
};

export default ExtLinks;
