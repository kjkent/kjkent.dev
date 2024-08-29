import type { Tree } from '@/types';
import type { FC, ReactElement } from 'react';

import React from 'react';

import { renderTree } from '@/utils';

export const NavTree: FC<{ root: Tree }> = ({ root }): ReactElement => {
	return (
		<div className='whitespace-pre font-mono leading-[1.2rem]'>
			{renderTree(root)}
		</div>
	);
};

export default NavTree;
