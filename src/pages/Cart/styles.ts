import { styled } from 'styled-components';

export const CartContainer = styled.div`
	width: 100%;
	max-width: 1300px;
	margin: 4rem auto 0;
`;

export const OrderForm = styled.form`
	display: flex;
	align-items: flex-start;
	justify-content: center;
	gap: 1rem;
`;

export const OrderInfo = styled.div`
	border-radius: 6px;
	background: ${(props) => props.theme['base-card']};
	padding: 2rem;
`;

export const OrderInput = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	margin-top: 1rem;

	div {
		display: flex;
		gap: 1rem;
	}
`;

interface IInputSizeOnContainer {
	variant: string;
}

export const OrderInfoInput = styled.input`
	background: ${(props) => props.theme['base-input']};
	padding: 10px 0 10px 0;
	border: 1px solid ${(props) => props.theme['base-button']};
	border-radius: 6px;
	text-indent: 0.8rem;

	/* max-width: ${(props) => props.variant}; */
`;

export const OrderSummary = styled.div``;

export const OrderAddress = styled.div``;

export const OrderPaymentMethod = styled.div``;
