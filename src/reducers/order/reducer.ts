import { IOrderSummary } from '../../context/OrderContext';
import { coffees } from '../../pages/Home/coffees-constants-mock';

interface IPayloadOrderSummary {
	cep: string;
	rua: string;
	numero: number;
	complemento: string;
	bairro: string;
	cidade: string;
	uf: string;
	payment: string;
}

interface IPayloadOrderCoffeeId {
	coffeeId: number;
}
interface IOrderReducerActionProps {
	type: string;
	payload: IPayloadOrderSummary | IPayloadOrderCoffeeId;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function orderReducer(state: IOrderSummary, action: any) {
	// eslint-disable-next-line react-hooks/rules-of-hooks

	switch (action.type) {
		case 'ADD_COFFEE_TO_CART': {
			const coffeeAlreadyExists = state.products.find(
				(c) => c.id === action.payload.coffeeId
			);

			if (!coffeeAlreadyExists) {
				const coffeeChosen = coffees.find(
					({ id }) => id === action.payload.coffeeId
				);

				if (!coffeeChosen) {
					throw new Error('Something went wrong adding coffees');
				}

				return { ...state, products: [...state.products, coffeeChosen] };
			}

			return state;
		}

		case 'ADD_AMOUNT_COFFEE_CART': {
			const products = state.products.map((orderState) => {
				if (orderState.id === action.payload.coffeeId) {
					const amount = orderState.amount + 1;
					return { ...orderState, amount };
				}

				return { ...orderState };
			});

			return { ...state, products };
		}

		case 'SUB_AMOUNT_COFFEE_CART': {
			const products = state.products.map((orderState) => {
				if (orderState.id === action.payload.coffeeId) {
					const amount = orderState.amount > 1 ? orderState.amount - 1 : 1;
					return { ...orderState, amount };
				}

				return { ...orderState };
			});

			return { ...state, products };
		}

		case 'REMOVE_COFFEE_FROM_CART': {
			const products = state.products.filter(
				(orderState) => orderState.id !== action.payload.coffeeId
			);

			return { ...state, products };
		}

		case 'FINISH_ORDER': {
			const { cep, rua, numero, complemento, bairro, cidade, uf, payment } =
				action.payload;

			return {
				cep,
				rua,
				numero,
				complemento,
				bairro,
				cidade,
				uf,
				payment,
				products: state.products,
			};
		}

		default:
			return state;
	}
}
