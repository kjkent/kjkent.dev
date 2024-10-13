import type { RFC } from '@/types';

export const ProfilePic: RFC<'img'> = ({ ...attrs }) => {
	return (
		<picture {...attrs}>
			{/* Role normally auto-ascertained but SVG bug requires manual specification */}
			<source
				srcSet={'/media/home/pixelHead.webp'}
				role='img'
				type='image/webp'
			/>
			<img
				{...attrs}
				src={'/media/home/pixelHead.png'}
				alt='An ASCII-style headshot of Kris'
			/>
		</picture>
	);
};

export default ProfilePic;
