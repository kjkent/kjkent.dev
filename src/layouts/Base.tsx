import { Footer } from '@/components';
import type { RFC } from '@/types';
import '@/styles/base.css';

const Head: RFC<'head', { title: string; description: string }> = ({
	title,
	description,
}) => {
	return (
		<head>
			<title>{title}</title>
			<meta name='description' content={description} />
			<meta charSet='utf-8' />
			<meta name='apple-mobile-web-app-title' content='kjkent' />
			<meta name='viewport' content='width=device-width, initial-scale=1.0' />


			<link
				rel='icon'
				type='image/png'
				href='/meta/favicon/favicon-48x48.png'
				sizes='48x48'
			/>
			<link rel='icon' type='image/svg+xml' href='/meta/favicon/favicon.svg' />
			<link rel='shortcut icon' href='/meta/favicon/favicon.ico' />
			<link
				rel='apple-touch-icon'
				sizes='180x180'
				href='/meta/favicon/apple-touch-icon.png'
			/>
			<link rel='manifest' href='/meta/favicon/site.webmanifest' />
		</head>
	);
};

/**
 * The base layout for the site, inluding HTML boilerplate, meta & footer.
 *
 * @param   - `{ title, description, children, ...attrs }`
 * @returns - A `div` element with 100% height and width set.
 *              Do not use set attributes on <Base /> itself.
 */
export const Base: RFC = ({
	title,
	description,
	children,
	className = '',
	...attrs
}) => {
	className = `${className} flex h-screen w-screen flex-col`;
	return (
		<html lang='en'>
			<Head title={title} description={description} />
			<body className={className}>
				<div {...attrs} className={'h-full w-full'}>
					{children}
				</div>
				<Footer />
			</body>
		</html>
	);
};

export default Base;
