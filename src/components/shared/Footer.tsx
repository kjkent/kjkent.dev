import type { RFC } from '@/types';
import { randomElement } from '@/utils';

const snark: string[] = [
	'Powered by Existential Dread™',
	"All the other sites have cookies, where are mine? :'(",
	'Totally mining crypto in your browser',
	'Bring back Blobmojis',
	'(ノಠ益ಠ)ノ彡┻━┻',
	'(V) (°,,,,°) (V)',
	'This site no longer tests on animals',
	'Tabs are the superior indentation method',
	'the an​*̶͑̾̾​̅ͫ͏̙̤g͇̫͛͆̾ͫ̑͆l͖͉̗̩̳̟̍ͫͥͨe̠̅s ͎a̧͈͖r̽̾̈́͒͑e n​ot rè̑ͧ̌aͨl̘̝̙̃ͤ͂̾̆',
];

const Tagline: RFC<'div'> = ({ className, ...attrs }) => {
	return (
		<div {...attrs} className={`${className} flex-shrink min-w-0 truncate`}>
			{randomElement(snark) as string}
		</div>
	);
};

const Copyright: RFC<'div'> = ({ ...attrs }) => {
	return (
		<div {...attrs} className='flex-shrink-0'>
			© 2024 Kristopher James Kent
		</div>
	);
};

const Divider: RFC<'pre'> = ({ className, ...attrs }) => {
	const randomTextColor: string = randomElement([
		'text-fg',
		'text-red',
		'text-green',
		'text-yellow',
		'text-blue',
		'text-magenta',
		'text-cyan',
	] as string[]);

	return (
		<pre {...attrs} className={`${randomTextColor} ${className} flex-shrink-0`}>
			<b> λ </b>
		</pre>
	);
};

const footerStyle = [
	'flex',
	'justify-center',
	'items-center',
	'h-fit',
	'px-1',
	'pb-0.5',
	'font-mono',
	'text-yellow',
	'whitespace-nowrap',
	'overflow-hidden',
	'text-xs',
].join(' ');

export const Footer: RFC<'footer'> = ({ ...attrs }) => {
	return (
		<footer {...attrs} className={footerStyle}>
			<Tagline />
			<Divider />
			<Copyright />
		</footer>
	);
};

export default Footer;
