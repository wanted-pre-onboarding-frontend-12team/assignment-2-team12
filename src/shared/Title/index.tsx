import { CSSProperties } from 'styled-components';
import { TitleLayout } from './styled';

type Props = {
	children: string;
	style?: CSSProperties;
};

export default function Title({ children, ...style }: Props) {
	return <TitleLayout {...style}>{children}</TitleLayout>;
}