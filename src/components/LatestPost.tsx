import React from 'react';
import { type RFC, type PostMeta } from '@/types';
import { postFallback } from '@/include';

const { brief: briefFallback } = postFallback;

export const LatestPost: RFC<{ meta: PostMeta }, 'table'> = ({
	meta = briefFallback,
	...attrs
}) => {
	return (
		<table className='w-full border-collapse' {...attrs}>
			<caption className='mb-2 text-start font-bold underline'>
				LATEST POST
			</caption>
			<tr className='border-b border-black'>
				<th scope='row' className='pr-2 text-start font-bold'>
					TITLE:
				</th>
				<td>{meta.title}</td>
			</tr>
			<tr className='border-b border-black'>
				<th scope='row' className='pr-2 text-start font-bold'>
					DATE:
				</th>
				<td>{meta.date}</td>
			</tr>
			<tr>
				<th scope='row' className='pr-2 align-top font-bold'>
					ABSTRACT:
				</th>
				<td>{meta.abstract}</td>
			</tr>
		</table>
	);
};
