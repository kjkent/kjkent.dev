export type Tree = {
	label: string;
	handleClick?: () => unknown;
	children?: Tree[];
};
