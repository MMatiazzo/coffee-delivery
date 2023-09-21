import styled from 'styled-components';

export const OrderSummaryContainer = styled.div`
	width: 100%;
	max-width: 1300px;
	margin: 4rem auto 0;
`;

export const OrderContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 1rem;

	> div {
		display: flex;
		flex-direction: column;
		gap: 2rem;

		h2 {
			color: ${(props) => props.theme['yellow-dark']};
			font-size: 25px;
			margin-bottom: 0.4rem;
		}

		p {
			font-size: 20px;
			color: ${(props) => props.theme['base-subtitle']};
		}
	}
`;

export const OrderInfoContainer = styled.div`
	border: 1px solid;
	padding: 3rem;

	border-top-right-radius: 25px;
	border-bottom-left-radius: 25px;

	border-top-color: ${(props) => props.theme['purple-base']};
	border-right-color: ${(props) => props.theme['purple-base']};
	border-left-color: ${(props) => props.theme['yellow-base']};
	border-bottom-color: ${(props) => props.theme['yellow-base']};
`;

interface IOrderInfoContainerProps {
	variant: 'purple-base' | 'yellow-base' | 'yellow-dark';
}

export const OrderInfo = styled.div<IOrderInfoContainerProps>`
	display: flex;
	align-items: flex-start;
	gap: 1rem;
	margin-bottom: 1rem;

	span {
		display: flex;
		background: ${(props) => props.theme[props.variant]};
		padding: 0.5rem;
		border-radius: 50%;
	}

	svg {
		color: white;
	}
`;
