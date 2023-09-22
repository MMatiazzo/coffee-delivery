import { BrowserRouter } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styles/themes/default';
import { GlobalStyle } from './styles/global';

import { Router } from './Router';
import { OrdersContextProvider } from './context/OrderContext';

export function App() {
	return (
		<ThemeProvider theme={defaultTheme}>
			<BrowserRouter>
				<OrdersContextProvider>
					<Router />
				</OrdersContextProvider>
				<GlobalStyle />
			</BrowserRouter>
		</ThemeProvider>
	);
}
