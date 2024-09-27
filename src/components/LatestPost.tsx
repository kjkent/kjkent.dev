import { getCollection, type CollectionEntry } from 'astro:content';
import { type RFC } from '@/types';
import { dateStringify } from '@/utils';

const posts = await getCollection('posts');
const latestPost = posts.sort(
	(a: CollectionEntry<'posts'>, b: CollectionEntry<'posts'>) => {
		const dateA = a.data.published;
		const dateB = b.data.published;
		return dateB.getTime() - dateA.getTime();
	},
)[0];

export const LatestPost: RFC<'table'> = ({ ...attrs }) => {
	const { title, published, abstract } = latestPost.data;
	return (
		<table className='w-full border-collapse' {...attrs}>
			<caption className='mb-2 text-start font-bold underline'>
				LATEST POST
			</caption>
			<tr className='border-b border-black'>
				<th scope='row' className='pr-2 text-start font-bold'>
					TITLE:
				</th>
				<td>{title}</td>
			</tr>
			<tr className='border-b border-black'>
				<th scope='row' className='pr-2 text-start font-bold'>
					DATE:
				</th>
				<td>{dateStringify(published)}</td>
			</tr>
			<tr>
				<th scope='row' className='pr-2 align-top font-bold'>
					ABSTRACT:
				</th>
				<td>{abstract}</td>
			</tr>
		</table>
	);
};
