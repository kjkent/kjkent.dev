import type { RFC } from '@/types';

const randomElement = (arr: unknown[]) => {
	return arr[Math.floor(Math.random() * arr.length)];
};

const footerStyle = [
	'mt-4',
	'pt-2',
	'border-t-2',
	'border-black',
	'text-center',
	'text-xs',
].join(' ');

const snark: string[] = [
	'Made with hate by kjkent',
	'All the other sites have cookies, where are mine? :(',
];

// TODO: Remember to replace this
const licenseURL = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
const licenseText = '© 2024 Kristopher James Kent';
export const LicenceLink: RFC<'a'> = ({ ...attrs }) => {
	return (
		<a {...attrs} href={licenseURL}>
			{licenseText}
		</a>
	);
};

export const Footer: RFC<'footer'> = ({ ...attrs }) => {
	return (
		<footer {...attrs} className={footerStyle}>
			<p>
				{randomElement(snark) as string} | <LicenceLink />
			</p>
			<p>SPDX: GPL-3.0-or-later</p>
		</footer>
	);
};

export default Footer;
