import { Minus, Plus } from 'phosphor-react';
import { QuantityButtonContainer } from './styles';
import { useContext } from 'react';
import { OrderContext } from '../../context/OrderContext';

interface IQuantityButtonProps {
	id: number;
	amount: number;
}

export function QuantityButton({ id, amount }: IQuantityButtonProps) {
	const { increaseAmount, decreaseAmount } = useContext(OrderContext);

	function handleIncreaseCoffeeAmount() {
		increaseAmount(id);
	}

	function handleDecreaseCoffeeAmount() {
		decreaseAmount(id);
	}

	return (
		<QuantityButtonContainer>
			<button onClick={() => handleIncreaseCoffeeAmount()}>
				<Plus />
			</button>
			{amount}
			<button onClick={() => handleDecreaseCoffeeAmount()}>
				<Minus />
			</button>
		</QuantityButtonContainer>
	);
}
