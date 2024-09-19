export type TreeSpec = {
	label: string;
	handleClick?: () => unknown;
	children?: TreeSpec[];
};

export type RenderProps = {
	prefix: string;
	isRoot: boolean;
	isLastChild: boolean;
};