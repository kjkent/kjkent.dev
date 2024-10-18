import type { RFC } from '@/types';

export const ProfilePic: RFC<'img'> = ({ ...attrs }) => {
	return (
		<picture {...attrs}>
			{/* Role normally auto-ascertained but SVG bug requires manual specification */}
			<source
				srcSet={'/assets/home/pixelHead.avif'}
				role='img'
				type='image/webp'
			/>
			<img
				{...attrs}
				src={'/assets/home/pixelHead.webp'}
				alt='An ASCII-style headshot of Kris'
			/>
		</picture>
	);
};

export default ProfilePic;
