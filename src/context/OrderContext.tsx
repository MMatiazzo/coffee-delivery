import {
	ReactNode,
	createContext,
	useEffect,
	useReducer,
	useState,
} from 'react';
import { ICoffeeProducts, coffees } from '../pages/Home/coffees-constants-mock';
import { orderReducer } from '../reducers/order/reducer';
import { FinishOrderData } from '../pages/Cart';
import { useNavigate } from 'react-router-dom';

interface IOrderContextProviderProps {
	children: ReactNode;
}

export interface IOrderSummary {
	cep?: string;
	rua?: string;
	numero?: number;
	complemento?: string;
	bairro?: string;
	cidade?: string;
	uf?: string;
	payment?: string;
	products: ICoffeeProducts[];
}

interface IOrdersContextType {
	order: IOrderSummary;
	coffeesProducts: ICoffeeProducts[];
	addCoffeeOrder: (id: number) => void;
	increaseAmount: (id: number) => void;
	decreaseAmount: (id: number) => void;
	increaseCoffeeAmountOrder: (id: number) => void;
	decreaseCoffeeAmountOrder: (id: number) => void;
	removeCoffeeFromOrder: (id: number) => void;
	finishOrder: (data: FinishOrderData) => void;
}

export const OrderContext = createContext({} as IOrdersContextType);

export function OrdersContextProvider({
	children,
}: IOrderContextProviderProps) {
	const navigate = useNavigate();
	const [coffeesProducts, setCoffeesProducts] = useState<ICoffeeProducts[]>([]);

	const [order, dispatch] = useReducer(orderReducer, { products: [] });

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

	function finishOrder(data: FinishOrderData) {
		const { cep, rua, numero, complemento, bairro, cidade, uf, payment } = data;

		console.log('payment on finishOrder => ', payment);

		dispatch({
			type: 'FINISH_ORDER',
			payload: {
				cep,
				rua,
				numero,
				complemento,
				bairro,
				cidade,
				uf,
				payment,
			},
		});

		navigate('/order-summary');
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

	function removeCoffeeFromOrder(coffeeId: number) {
		dispatch({
			type: 'REMOVE_COFFEE_FROM_CART',
			payload: {
				coffeeId,
			},
		});
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
				removeCoffeeFromOrder,
				finishOrder,
			}}
		>
			{children}
		</OrderContext.Provider>
	);
}
