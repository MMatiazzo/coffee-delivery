import { useContext } from 'react';
import { ShoppingCart, MapPin } from 'phosphor-react';
import { CartSettingsContainer, HeaderContainer } from './styles';

import logoCoffeeDelivery from '../../assets/logo-coffee-delivery.svg';
import { OrderContext } from '../../context/OrderContext';
import { Link } from 'react-router-dom';

export function Header() {
	const { order } = useContext(OrderContext);

	return (
		<HeaderContainer>
			<Link to="/">
				<img src={logoCoffeeDelivery} alt="teste-logo" />
			</Link>
			<CartSettingsContainer>
				<span>
					<MapPin className="location" weight="fill" size={25} />
					Prado Ferreira, Pr
				</span>
				<Link className="shopping-cart" to="/cart">
					<ShoppingCart weight="fill" size={25} />
				</Link>
				<span>{order.length}</span>
			</CartSettingsContainer>
		</HeaderContainer>
	);
}
