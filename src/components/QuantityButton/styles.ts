import { styled } from 'styled-components';

export const QuantityButtonContainer = styled.div`
	justify-content: center;
	background: ${(props) => props.theme['base-button']};
	padding: 0.4rem;
	border-radius: 8px;
	gap: 0.2rem;

	button {
		background: transparent;
		border: none;
		color: ${(props) => props.theme['purple-base']};
		cursor: pointer;
	}
`;
