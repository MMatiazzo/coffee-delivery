import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Cart } from './pages/Cart';
import { OrderSummary } from './pages/OrderSummary';

import { DefaultLayout } from './layouts/DefaultLayout';

export function Router() {
	return (
		<Routes>
			<Route path="/" element={<DefaultLayout />}>
				<Route path="/" element={<Home />} />
				<Route path="/cart" element={<Cart />} />
				<Route path="/order-summary" element={<OrderSummary />} />
			</Route>
		</Routes>
	);
}
