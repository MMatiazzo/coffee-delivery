import { Minus, Plus } from 'phosphor-react';
import { QuantityButtonContainer } from './styles';

export function QuantityButton() {
	return (
		<QuantityButtonContainer>
			<button>
				<Plus />
			</button>
			1
			<button>
				<Minus />
			</button>
		</QuantityButtonContainer>
	);
}
