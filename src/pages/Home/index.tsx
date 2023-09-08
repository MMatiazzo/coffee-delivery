import { BannerContainer, HomeContainer } from './styles';
import { Package, ShoppingCart, Coffee, Timer } from 'phosphor-react';
import coffeeBanner from '../../assets/coffee-banner.svg';

export function Home() {
	return (
		<HomeContainer>
			<BannerContainer>
				<div>
					<div className="coffee-delivery-info">
						<h1>Encontre o café perfeito para qualquer hora do dia</h1>
						<p>
							Com o Coffee Delivery você recebe seu café onde estiver, a
							qualquer hora
						</p>
					</div>
					<div className="coffee-delivery-work-practices">
						<div>
							<ShoppingCart
								className="shopping-cart-icon icon"
								weight="fill"
								size={35}
							/>
							<span>Compra simples e segura</span>
						</div>
						<div>
							<Package className="package-icon icon" weight="fill" size={35} />
							<span>Embalagem mantém o café intacto</span>
						</div>
						<div>
							<Timer className="timer-icon icon" weight="fill" size={35} />
							<span>Entrega rápida e rastreada</span>
						</div>
						<div>
							<Coffee className="coffee-icon icon" weight="fill" size={35} />
							<span>O café chega fresquinho até você</span>
						</div>
					</div>
				</div>
				<img src={coffeeBanner} alt="coffee-banner" />
			</BannerContainer>
		</HomeContainer>
	);
}
