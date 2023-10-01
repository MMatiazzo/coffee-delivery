import { ICoffeeProducts } from '../../pages/Home/coffees-constants-mock';
import { coffees } from '../../pages/Home/coffees-constants-mock';

interface IOrderReducerActionProps {
	type: string;
	payload: {
		coffeeId: number;
	};
}

interface IOrderSummary {
	cep?: string;
	rua?: string;
	numero?: number;
	complemento?: string;
	bairro?: string;
	cidade?: string;
	uf?: string;
	products: ICoffeeProducts[];
}

export function orderReducer(
	state: IOrderSummary,
	action: IOrderReducerActionProps
) {
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

		default:
			return state;
	}
}
