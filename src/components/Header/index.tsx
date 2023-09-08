import { ShoppingCart, MapPin } from 'phosphor-react';
import { HeaderContainer } from './styles';

import logoCoffeeDelivery from '../../assets/logo-coffee-delivery.svg';

export function Header() {
	return (
		<HeaderContainer>
			<div>
				<img src={logoCoffeeDelivery} alt="teste-logo" />
			</div>
			<div className="location-cart">
				<span>
					<MapPin className="location" weight="fill" size={25} />
					Prado Ferreira, Pr
				</span>
				<button className="shopping-cart">
					<ShoppingCart weight="fill" size={25} />
				</button>
			</div>
		</HeaderContainer>
	);
}
