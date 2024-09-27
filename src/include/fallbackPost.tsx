import { Center, Link } from '@/components';
import { type PostMeta, type RFC, toDateString } from '@/types';

export const meta: PostMeta = {
	title: "404: Hey, where's my blog post?!",
	date: toDateString('1985-10-26'),
	abstract:
		"There should be a beautifully crafted blog post here, but, there's not! " +
		'Something has clearly gone wrong, leaving this placeholder as a warning ' +
		'to others, and an enduring testament to my folly.',
};

export const Post: RFC<'section'> = ({ ...attrs }) => {
	return (
		<section {...attrs}>
			<h1>Hey, where's my blog post?!</h1>
			<p>
				If you're reading this, something has well and truly **ballsed up**.
				Rest assured, I am either on the case, or have zero idea anything is
				wrong.
			</p>
			<Center axis='x'>
				<p>
					<img src='/assets/confused_vega.gif' />
				</p>
			</Center>
			<p>
				If you can spare a moment, check the
				<Link href='https://github.com/kjkent/kjkent.dev/issues'>
					issues on GitHub
				</Link>
				and open a new issue if there's no existing one.
			</p>
		</section>
	);
};
