import { styled } from 'styled-components';
import * as RadioGroup from '@radix-ui/react-radio-group';

export const CartContainer = styled.div`
	width: 100%;
	max-width: 1300px;
	margin: 4rem auto 0;
`;

export const OrderForm = styled.form`
	display: flex;
	align-items: flex-start;
	justify-content: center;
	gap: 2rem;

	h3 {
		margin-bottom: 1rem;
	}
`;

export const OrderInfo = styled.div`
	padding: 2rem;
	border-radius: 6px;
	background: ${(props) => props.theme['base-card']};
	margin-top: 1rem;
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

export const OrderAddress = styled(OrderInfo)`
	h3 {
		margin-bottom: 2rem;
	}
`;

interface ITitleBox {
	variant: 'map-pin' | 'dollar';
}

export const OrderAddressInfo = styled.div<ITitleBox>`
	margin-top: 1rem;
	display: flex;
	gap: 0.5rem;
	margin-bottom: 2rem;

	svg {
		color: ${(props) =>
			props.variant === 'map-pin'
				? props.theme['yellow-dark']
				: props.theme['purple-base']};
	}

	p {
		color: ${(props) => props.theme['base-subtitle']};
		font-size: 18px;
	}

	span {
		color: ${(props) => props.theme['base-text']};
		font-size: 16px;
	}
`;

export const OrderInfoInput = styled.input`
	background: ${(props) => props.theme['base-input']};
	padding: 10px 0 10px 0;
	border: 1px solid ${(props) => props.theme['base-button']};
	border-radius: 6px;
	text-indent: 0.8rem;
`;

export const OrderSummary = styled.div`
	padding: 2rem;
	border-radius: 6px;
	background: ${(props) => props.theme['base-card']};
`;

export const OrderPaymentMethod = styled.div`
	padding: 2rem;
	border-radius: 6px;
	background: ${(props) => props.theme['base-card']};
`;

export const PaymentsMethods = styled(RadioGroup.Root)`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 0.5rem;
	padding: 0;
`;

export const PaymentMethodButton = styled(RadioGroup.Item)`
	background: ${(props) => props.theme['base-button']};
	padding: 1rem;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 0.5rem;
	border-radius: 6px;
	cursor: pointer;
	border: 0;
	color: ${(props) => props.theme['base-text']};

	svg {
		color: ${(props) => props.theme['purple-base']};
	}

	&[data-state='unchecked']:hover {
		transition: background-color 0.2s;
		background: ${(props) => props.theme['base-button']};
	}

	&[data-state='checked'] {
		background: ${(props) => props.theme['purple-ligth']};
	}
`;

export const CartItem = styled.div`
	display: flex;
	align-items: flex-start;

	gap: 1rem;

	border-bottom: 1px solid ${(props) => props.theme['base-button']};

	margin-top: 2rem;
	padding-bottom: 2rem;
`;

export const CartItemsOptions = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 0.8rem;
	margin-top: 1rem;
`;

export const DeleteButton = styled.button`
	background: ${(props) => props.theme['base-button']};
	border: none;
	padding: 0.5rem;
	border-radius: 6px;
	display: flex;
	align-items: center;
	gap: 0.2rem;
	cursor: pointer;

	svg {
		color: ${(props) => props.theme['purple-base']};
	}
`;

export const ItemActions = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export const OrderValuesSummary = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
	margin-top: 2rem;
	div {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
`;

export const FinalizeOrderButton = styled.button`
	flex: 1;
	padding: 1rem;
	color: ${(props) => props.theme.white};
	background: ${(props) => props.theme['yellow-base']};
	border: none;
	border-radius: 8px;
	cursor: pointer;
`;
