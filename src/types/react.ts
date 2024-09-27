import type { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react';

type GenericProp = { [key: string | number]: unknown };

export type FCProps<
	P extends GenericProp,
	E extends ElementType = ElementType,
> = ComponentPropsWithoutRef<E> & P;

/**
 * React.FC appears to be deprecated from online chatter &
 * most of its composite properties being deprecated.
 * This is a DIY wrapper.
 *
 * @template Props _(Optional)_ - The props the component takes. Unioned with
 * 	               **ComponentPropsWithoutRef<ElementType>**. Pass `{}` if no
 * 	               custom props are needed.
 *
 * @template WrappedElement _(Optional)_ - The wrapped component/HTML element
 * 	                        against which intrinisc props/attributes are
 * 	                        constrained. Defaults to **ElementType**.
 *
 * @example
 * type InputProps = { label: string };
 *
 * const LabeledInput: RFC<InputProps, 'input'> = ({ label, ...attrs }) => {
 * 	return (
 * 		<label>
 * 			{label}: <input {...attrs} />
 * 		</label>
 * 	)
 * }
 */
export type RFC<
	ReturnedHTMLElement extends ElementType = ElementType,
	Props extends GenericProp = ComponentPropsWithoutRef<ElementType>,
> = {
	(props: FCProps<Props, ReturnedHTMLElement>): ReactNode | null;
};
