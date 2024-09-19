import React from 'react';
import { type RFC, type PostBrief } from '@/types';
import { postFallback } from '@/include';

const { brief: briefFallback } = postFallback;

export const LatestPost: RFC<{ postBrief: PostBrief }, 'table'> = ({
	postBrief = briefFallback,
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
				<td>{postBrief.title}</td>
			</tr>
			<tr className='border-b border-black'>
				<th scope='row' className='pr-2 text-start font-bold'>
					DATE:
				</th>
				<td>{postBrief.date}</td>
			</tr>
			<tr>
				<th scope='row' className='pr-2 align-top font-bold'>
					ABSTRACT:
				</th>
				<td>{postBrief.abstract}</td>
			</tr>
		</table>
	);
};
