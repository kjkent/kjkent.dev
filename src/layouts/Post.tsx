import type { RFC } from '@/types';

export const Post: RFC<'div'> = () => {
	return (
		<div className='min-h-screen bg-gray-100 p-4 font-mono text-xs'>
			<header className='mb-4 border-b-2 border-black pb-2'>
				<h1 className='text-xl font-bold'>DEVELOPER PORTFOLIO - BLOG POST</h1>
				<p>REF: BLOG-2024-001</p>
			</header>

			<main className='grid grid-cols-4 gap-4'>
				<nav className='col-span-1 border-2 border-black p-2'>
					<h2 className='mb-2 font-bold underline'>NAVIGATION</h2>
					<ul className='list-inside list-disc'>
						<li>HOME</li>
						<li>BLOG INDEX</li>
						<li>ABOUT ME</li>
						<li>CONTACT</li>
					</ul>
				</nav>

				<article className='col-span-3 border-2 border-black p-2'>
					<h2 className='mb-2 text-lg font-bold underline'>
						IMPLEMENTING APOLLO WITH REACT
					</h2>
					<table className='mb-4 w-full border-collapse'>
						<tbody>
							<tr className='border-b border-black'>
								<td className='w-1/4 pr-2 font-bold'>AUTHOR:</td>
								<td>Your Name</td>
							</tr>
							<tr className='border-b border-black'>
								<td className='pr-2 font-bold'>DATE:</td>
								<td>2024-08-26</td>
							</tr>
							<tr>
								<td className='pr-2 font-bold'>TAGS:</td>
								<td>REACT, APOLLO, GRAPHQL</td>
							</tr>
						</tbody>
					</table>

					<section className='mb-4'>
						<h3 className='mb-2 font-bold underline'>1.0 INTRODUCTION</h3>
						<p className='mb-2'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua.
						</p>
						<p className='mb-2'>
							Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat.
						</p>
					</section>

					<section className='mb-4'>
						<h3 className='mb-2 font-bold underline'>2.0 SETUP</h3>
						<p className='mb-2'>
							Duis aute irure dolor in reprehenderit in voluptate velit esse
							cillum dolore eu fugiat nulla pariatur.
						</p>
						<pre className='overflow-x-auto bg-gray-200 p-2'>
							npm install @apollo/client graphql
						</pre>
					</section>

					<section className='mb-4'>
						<h3 className='mb-2 font-bold underline'>3.0 IMPLEMENTATION</h3>
						<p className='mb-2'>
							Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
							officia deserunt mollit anim id est laborum.
						</p>
						<pre className='overflow-x-auto bg-gray-200 p-2'>
							Here&apos;s some text blah blah blah
						</pre>
					</section>

					<section>
						<h3 className='mb-2 font-bold underline'>4.0 CONCLUSION</h3>
						<p>
							In conclusion, implementing Apollo with React provides a powerful
							solution for managing GraphQL data in your application.
						</p>
					</section>
				</article>
			</main>

			<footer className='mt-4 border-t-2 border-black pt-2 text-center'>
				<p>© 2024 Your Name | All rights reserved</p>
				<p>BLOG POST REF: BLOG-2024-001</p>
			</footer>
		</div>
	);
};

export default Post;
