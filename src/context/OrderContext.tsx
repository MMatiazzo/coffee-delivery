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

interface IOrderCoffee {
	id: number;
	name: string;
	amount: number;
	price: number;
	img: string;
}

interface IOrdersContextType {
	order: IOrderCoffee[];
	coffeesProducts: ICoffeeProducts[];
	addCoffeeOrder: (id: number) => void;
	increaseAmount: (id: number) => void;
	decreaseAmount: (id: number) => void;
}

export const OrderContext = createContext({} as IOrdersContextType);

export function OrdersContextProvider({
	children,
}: IOrderContextProviderProps) {
	const [order, dispatch] = useReducer((state: IOrderCoffee[], action: any) => {
		if (action.type === 'ADD_COFFEE_ORDER') {
			const coffeeAlreadyExists = state.find(
				(c) => c.id === action.payload.coffeeId
			);

			if (!coffeeAlreadyExists) {
				const { id, img, price, name, amount } =
					coffeesProducts.find(({ id }) => id === action.payload.coffeeId) ||
					{};

				if (!id || !img || !price || !name || !amount) {
					throw new Error('Something went wrong adding coffees');
				}

				return [...state, { id, img, price, name, amount }];
			}
		}

		return state;
	}, []);

	const [coffeesProducts, setCoffeesProducts] = useState<ICoffeeProducts[]>([]);

	useEffect(() => {
		if (!coffeesProducts.length) setCoffeesProducts(coffees);
	}, [coffeesProducts]);

	function addCoffeeOrder(coffeeId: number) {
		dispatch({
			type: 'ADD_COFFEE_ORDER',
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
			}}
		>
			{children}
		</OrderContext.Provider>
	);
}
