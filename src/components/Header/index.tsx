import { useContext } from 'react';
import { ShoppingCart, MapPin } from 'phosphor-react';
import { CartSettingsContainer, HeaderContainer } from './styles';

import logoCoffeeDelivery from '../../assets/logo-coffee-delivery.svg';
import { OrderContext } from '../../context/OrderContext';

export function Header() {
	const { order } = useContext(OrderContext);

	return (
		<HeaderContainer>
			<img src={logoCoffeeDelivery} alt="teste-logo" />
			<CartSettingsContainer>
				<span>
					<MapPin className="location" weight="fill" size={25} />
					Prado Ferreira, Pr
				</span>
				<a className="shopping-cart" href="/cart">
					<ShoppingCart weight="fill" size={25} />
				</a>
				<span>{order.length}</span>
			</CartSettingsContainer>
		</HeaderContainer>
	);
}
