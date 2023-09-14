import { CartContainer, ProductsOnCart } from './styles';

export function Cart() {
	return (
		<CartContainer>
			<form>
				<div>
					<p>Endereço de entrega</p>
					<span>Informe o endereço onde deseja receber seu pedido</span>
				</div>
				<ProductsOnCart>
					<img src="" alt="" />
					<div>
						<span>Espresso Tradicional</span>
					</div>
					<span>9,90</span>
				</ProductsOnCart>
			</form>
		</CartContainer>
	);
}
