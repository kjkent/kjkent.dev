import type { RFC } from '@/types';

export const Posts: RFC = () => {
	return (
		<table>
			<thead className='underline'>
				<th className='min-w-32 text-start' scope='col'>
					DATE
				</th>
				<th className='text-start' scope='col'>
					TITLE
				</th>
			</thead>
			<tbody>
				<tr>
					<td>2024-09-05</td>
					<td>Common opinions: I fucking hate the DWP</td>
				</tr>
			</tbody>
		</table>
	);
};

export default Posts;