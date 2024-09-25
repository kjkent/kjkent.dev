import React, { type ReactNode } from 'react';
import type { RFC } from '@/types';
import { Center } from '@/components';

export const Article: RFC<{ children: ReactNode }, 'article'> = ({
	children,
	...attrs
}) => {
	const { className, ...parsedAttrs } = attrs;

	/**
	 * To style code blocks with `@tailwind/typography`, size the block using
	 * `prose-pre:max-w-{fit|max|min|...}`, but size the text with
	 * `prose-code:text-{xs|sm|md|lg|...}`.
	 */
	const proseStyles = [
		className,
		'prose',
		'prose-sm',
		'prose-pre:max-w-fit',
		'max-w-screen-md',
		'p-3',
	].join(' ');

	return (
		<Center axis='x'>
			<article className={proseStyles} {...parsedAttrs}>
				{children}
			</article>
		</Center>
	);
};
