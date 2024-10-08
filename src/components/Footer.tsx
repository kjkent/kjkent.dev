import type { RFC } from '@/types';

const randomElement = (arr: unknown[]) => {
	return arr[Math.floor(Math.random() * arr.length)];
};

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

const copyright = '© 2024 Kristopher James Kent';

const footerStyle = [
	'h-fit',
	'pb-0.5',
	'font-mono',
	'text-term-yellow',
	'text-center',
	'text-xs',
].join(' ');

export const Footer: RFC<'footer'> = ({ ...attrs }) => {
	return (
		<footer {...attrs} className={footerStyle}>
			{randomElement(snark) as string}
			<pre className='inline text-term-yellow'>
				<b> λ </b>
			</pre>
			{copyright}
		</footer>
	);
};

export default Footer;
