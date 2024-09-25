import React from 'react';
import type { RFC, TreeSpec, RenderProps } from '@/types';

/**
 * I wrote this as a class for the sake of it.
 */
class _DirectoryTree {
	#glyphs = {
		line: { x: '──', y: '│' },
		node: { root: '┐', mid: '├', end: '└' },
	};

	constructor(public treeSpec: TreeSpec) {
		this.treeSpec = treeSpec;
	}

	private renderTreeSpec(
		treeSpec: TreeSpec,
		props: RenderProps,
		ySpacing: number = 4,
	): string[] {
		const { label, children = [] } = treeSpec;
		const { prefix, isLastChild, isRoot } = props;

		const glyphs = this.#glyphs;
		const tree: string[] = [];

		const nodeGlyph =
			isRoot ? glyphs.node.root
			: isLastChild ? glyphs.node.end
			: glyphs.node.mid;

		const nodeText =
			isRoot ?
				`${label} ${nodeGlyph}`
			:	`${nodeGlyph}${glyphs.line.x} ${label}`;

		tree.push(`${prefix}${nodeText}`);

		if (children.length > 0) {
			const childrenPrefix =
				isRoot ?
					' '.repeat(label.length)
				:	`${prefix}${isLastChild ? '  ' : glyphs.line.y + ' '}`;

			children.forEach((child, index) => {
				const isLast = index === children.length - 1;

				if (!isRoot && index > 0) {
					for (let i = 0; i < ySpacing; i++) {
						tree.push(`${childrenPrefix}`);
					}
				}

				tree.push(
					...this.renderTreeSpec(
						child,
						{
							prefix: childrenPrefix,
							isLastChild: isLast,
							isRoot: false,
						},
						ySpacing,
					),
				);
			});
		}
		return tree;
	}

	renderTree(ySpacing?: number): string {
		return this.renderTreeSpec(
			this.treeSpec,
			{
				prefix: ' ',
				isRoot: true,
				isLastChild: false,
			},
			ySpacing,
		).join('\n');
	}
}


export const DirectoryTree: RFC<{ treeSpec: TreeSpec }, 'div'> = (props) => {
	const { treeSpec, ...attrs } = props;
	const tree = new _DirectoryTree(treeSpec);
	return (
		<div {...attrs} className='whitespace-pre font-mono leading-[1.2rem]'>
			{tree.renderTree()}
		</div>
	);
};

export default DirectoryTree;
