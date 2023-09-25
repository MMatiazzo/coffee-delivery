import {
	BannerContainer,
	CoffeeContainer,
	HomeContainer,
	ProductShowcase,
	TagsContainer,
} from './styles';
import {
	Package,
	ShoppingCart,
	Coffee,
	Timer,
	ShoppingCartSimple,
} from 'phosphor-react';
import coffeeBanner from '../../assets/coffee-banner.svg';
import { QuantityButton } from '../../components/QuantityButton';
import { useContext } from 'react';
import { OrderContext } from '../../context/OrderContext';

export function Home() {
	const { coffeesProducts, addCoffeeOrder } = useContext(OrderContext);

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
			<ProductShowcase>
				<h3>Nossos cafés</h3>
				<div className="products">
					{coffeesProducts.map((coffee) => {
						return (
							<CoffeeContainer key={coffee.id}>
								<img src={coffee.img} alt={coffee.name} />
								<TagsContainer>
									{coffee.tag.map((tag) => {
										return <span key={tag}>{tag.toUpperCase()}</span>;
									})}
								</TagsContainer>
								<h3>{coffee.name}</h3>
								<p>{coffee.description}</p>
								<div className="coffeeActions">
									<div className="price">
										<span>$RS</span>
										<h3>{coffee.price}</h3>
									</div>
									<div>
										<QuantityButton id={coffee.id} amount={coffee.amount} />
										<button
											type="submit"
											onClick={() => addCoffeeOrder(coffee.id)}
										>
											<ShoppingCartSimple weight="fill" size={25} />
										</button>
									</div>
								</div>
							</CoffeeContainer>
						);
					})}
				</div>
			</ProductShowcase>
		</HomeContainer>
	);
}
