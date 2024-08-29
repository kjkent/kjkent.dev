import type { Tree } from '@/types';

const SPACING_Y = 4;

type RenderProps = {
	prefix: string;
	isRoot: boolean;
	isLastChild: boolean;
};

const glyphs = {
	line: { x: '──', y: '│' },
	node: { root: '┐', mid: '├', end: '└' },
};

function renderTreeNode(node: Tree, props: RenderProps): string[] {
	const { label, children = [] } = node;
	const { prefix, isLastChild, isRoot } = props;

	const tree: string[] = [];

	const nodeGlyph =
		isRoot ? glyphs.node.root
		: isLastChild ? glyphs.node.end
		: glyphs.node.mid;
	const nodeText =
		isRoot ? `${label} ${nodeGlyph}` : `${nodeGlyph}${glyphs.line.x} ${label}`;

	tree.push(`${prefix}${nodeText}`);

	if (children.length > 0) {
		const childrenPrefix =
			isRoot ?
				' '.repeat(label.length + 1)
			:	prefix + (isLastChild ? '  ' : `${glyphs.line.y} `);

		children.forEach((child, index) => {
			const isLast = index === children.length - 1;

			if (!isRoot && index > 0) {
				for (let i = 0; i < SPACING_Y; i++) {
					tree.push(`${childrenPrefix}`);
				}
			}

			tree.push(
				...renderTreeNode(child, {
					prefix: childrenPrefix,
					isLastChild: isLast,
					isRoot: false,
				}),
			);
		});
	}

	return tree;
}

export function renderTree(root: Tree): string {
	return renderTreeNode(root, {
		prefix: '',
		isRoot: true,
		isLastChild: true,
	}).join('\n');
}

export default renderTree;
