import { Minus, Plus } from 'phosphor-react';
import { QuantityButtonContainer } from './styles';
import { useContext } from 'react';
import { OrderContext } from '../../context/OrderContext';

interface IQuantityButtonProps {
	id: number;
	amount: number;
	isCart?: boolean;
}

export function QuantityButton({ id, amount, isCart }: IQuantityButtonProps) {
	const {
		increaseAmount,
		decreaseAmount,
		increaseCoffeeAmountOrder,
		decreaseCoffeeAmountOrder,
	} = useContext(OrderContext);

	function handleIncreaseCoffeeAmount() {
		increaseAmount(id);
	}

	function handleDecreaseCoffeeAmount() {
		decreaseAmount(id);
	}

	function handleIncreaseCoffeeAmountCart() {
		increaseCoffeeAmountOrder(id);
	}

	function handleDecreaseCoffeeAmountCart() {
		decreaseCoffeeAmountOrder(id);
	}

	return (
		<QuantityButtonContainer>
			<button
				type="button"
				onClick={
					isCart
						? () => handleIncreaseCoffeeAmountCart()
						: () => handleIncreaseCoffeeAmount()
				}
			>
				<Plus />
			</button>
			{amount}
			<button
				type="button"
				onClick={
					isCart
						? () => handleDecreaseCoffeeAmountCart()
						: () => handleDecreaseCoffeeAmount()
				}
			>
				<Minus />
			</button>
		</QuantityButtonContainer>
	);
}
