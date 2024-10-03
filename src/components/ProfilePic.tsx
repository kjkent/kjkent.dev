import type { RFC } from '@/types';

export const ProfilePic: RFC<'img', { image?: 'diag' | 'braille' }> = ({
	image = 'diag',
	...attrs
}) => {
	return (
		<picture>
			{/* Role normally auto-ascertained but SVG bug requires manual specification */}
			<source
				srcSet={`/assets/head/${image}.webp`}
				role='img'
				type='image/webp'
			/>
			<img
				{...attrs}
				src={`/assets/head/${image}.png`}
				alt='An ASCII-style headshot of Kris'
			/>
		</picture>
	);
};

export default ProfilePic;
