import type { RFC } from '@/types';

const randomElement = (arr: unknown[]) => {
	return arr[Math.floor(Math.random() * arr.length)];
};

const snark: string[] = [
	'Powered by Existential Dread™',
	"All the other sites have cookies, where are mine? :'(",
	'All your base are belong to us',
	'(╯°□°）╯︵ ┻━┻',
	'(ノಠ益ಠ)ノ彡┻━┻',
	'Not tested on animals',
	'Tabs are the superior indentation method',
	'the an​*̶͑̾̾​̅ͫ͏̙̤g͇̫͛͆̾ͫ̑͆l͖͉̗̩̳̟̍ͫͥͨe̠̅s ͎a̧͈͖r̽̾̈́͒͑e n​ot rè̑ͧ̌aͨl̘̝̙̃ͤ͂̾̆',
];

const copyright = '© 2024 Kristopher James Kent';

const footerStyle = ['pb-1', 'text-[#e0af68]', 'text-center', 'text-xs'].join(
	' ',
);

export const Footer: RFC<'footer'> = ({ ...attrs }) => {
	return (
		<footer {...attrs} className={footerStyle}>
			{randomElement(snark) as string} <b>|</b> {copyright}
		</footer>
	);
};

export default Footer;
