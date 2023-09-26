import {
	ReactNode,
	createContext,
	useEffect,
	useReducer,
	useState,
} from 'react';
import { ICoffeeProducts, coffees } from '../pages/Home/coffees-constants-mock';

interface IOrderContextProviderProps {
	children: ReactNode;
}

interface IOrdersContextType {
	order: ICoffeeProducts[];
	coffeesProducts: ICoffeeProducts[];
	addCoffeeOrder: (id: number) => void;
	increaseAmount: (id: number) => void;
	decreaseAmount: (id: number) => void;
	increaseCoffeeAmountOrder: (id: number) => void;
	decreaseCoffeeAmountOrder: (id: number) => void;
}

export const OrderContext = createContext({} as IOrdersContextType);

export function OrdersContextProvider({
	children,
}: IOrderContextProviderProps) {
	const [coffeesProducts, setCoffeesProducts] = useState<ICoffeeProducts[]>([]);

	const [order, dispatch] = useReducer(
		(state: ICoffeeProducts[], action: any) => {
			if (action.type === 'ADD_COFFEE_TO_CART') {
				const coffeeAlreadyExists = state.find(
					(c) => c.id === action.payload.coffeeId
				);

				if (!coffeeAlreadyExists) {
					const coffeeChosen = coffeesProducts.find(
						({ id }) => id === action.payload.coffeeId
					);

					if (!coffeeChosen) {
						throw new Error('Something went wrong adding coffees');
					}

					return [...state, coffeeChosen];
				}
			} else if (action.type === 'ADD_AMOUNT_COFFEE_CART') {
				return state.map((orderState) => {
					if (orderState.id === action.payload.coffeeId) {
						const amount = orderState.amount + 1;
						return { ...orderState, amount };
					}

					return { ...orderState };
				});
			} else if (action.type === 'SUB_AMOUNT_COFFEE_CART') {
				return state.map((orderState) => {
					if (orderState.id === action.payload.coffeeId) {
						const amount = orderState.amount > 1 ? orderState.amount - 1 : 1;
						return { ...orderState, amount };
					}

					return { ...orderState };
				});
			}

			return state;
		},
		[]
	);

	useEffect(() => {
		if (!coffeesProducts.length) setCoffeesProducts(coffees);
	}, [coffeesProducts]);

	function addCoffeeOrder(coffeeId: number) {
		dispatch({
			type: 'ADD_COFFEE_TO_CART',
			payload: {
				coffeeId,
			},
		});
	}

	function increaseCoffeeAmountOrder(coffeeId: number) {
		dispatch({
			type: 'ADD_AMOUNT_COFFEE_CART',
			payload: {
				coffeeId,
			},
		});
	}

	function decreaseCoffeeAmountOrder(coffeeId: number) {
		dispatch({
			type: 'SUB_AMOUNT_COFFEE_CART',
			payload: {
				coffeeId,
			},
		});
	}

	function increaseAmount(coffeeId: number) {
		setCoffeesProducts((currentState) =>
			currentState.map((item) => {
				if (item.id === coffeeId) {
					return { ...item, amount: item.amount + 1 };
				}
				return item;
			})
		);
	}

	function decreaseAmount(coffeeId: number) {
		setCoffeesProducts((currentState) =>
			currentState.map((item) => {
				if (item.id === coffeeId && item.amount > 1) {
					return { ...item, amount: item.amount - 1 };
				}
				return item;
			})
		);
	}

	return (
		<OrderContext.Provider
			value={{
				order,
				addCoffeeOrder,
				coffeesProducts,
				increaseAmount,
				decreaseAmount,
				increaseCoffeeAmountOrder,
				decreaseCoffeeAmountOrder,
			}}
		>
			{children}
		</OrderContext.Provider>
	);
}
