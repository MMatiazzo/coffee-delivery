import { MapPinLine } from 'phosphor-react';
import expresso from '../../assets/coffee-types/expresso.svg';
import {
	CartContainer,
	OrderAddress,
	OrderForm,
	OrderInfo,
	OrderInfoInput,
	OrderInput,
	OrderPaymentMethod,
	OrderSummary,
} from './styles';

export function Cart() {
	return (
		<CartContainer>
			<OrderForm>
				<OrderInfo>
					<h3>Complete seu pedido</h3>
					<OrderAddress>
						<p>Endereço de entrega</p>
						<span>Informe o endereço onde deseja receber seu pedido</span>
						<MapPinLine />
						<OrderInput>
							<OrderInfoInput type="text" placeholder="CEP" />
							<OrderInfoInput type="text" placeholder="Rua" />
							<div>
								<OrderInfoInput type="text" placeholder="Número" />
								<OrderInfoInput type="text" placeholder="Complemento" />
							</div>
							<div>
								<OrderInfoInput type="text" placeholder="Bairro" />
								<OrderInfoInput type="text" placeholder="Cidade" />
								<OrderInfoInput type="text" placeholder="UF" />
							</div>
						</OrderInput>
					</OrderAddress>
					<OrderPaymentMethod>
						<span>cartão de crédito</span>
						<span>Cartão de débito</span>
						<span>Dinheiro</span>
					</OrderPaymentMethod>
				</OrderInfo>
				<OrderSummary>
					<h3>Cafés Selecionados</h3>
					<img src={expresso} alt="" />
					<div>
						<span>Espresso Tradicional</span>
					</div>
					<span>9,90</span>
				</OrderSummary>
			</OrderForm>
		</CartContainer>
	);
}
