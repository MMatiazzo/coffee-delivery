import { useContext } from 'react';
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react';
import deliveryImg from '../../assets/delivery-img.svg';
import {
	OrderContainer,
	OrderInfo,
	OrderInfoContainer,
	OrderSummaryContainer,
} from './styles';
import { OrderContext } from '../../context/OrderContext';

export function OrderSummary() {
	const {
		order: { rua, bairro, cidade, complemento, numero, uf, payment },
	} = useContext(OrderContext);

	return (
		<OrderSummaryContainer>
			<OrderContainer>
				<div>
					<div>
						<h2>Uhu! Pedido confirmado</h2>
						<p>Agora é só aguardar que logo o café chegará até você</p>
					</div>
					<OrderInfoContainer>
						<OrderInfo variant="purple-base">
							<span>
								<MapPin weight="fill" size={20} />
							</span>
							<div>
								<p>
									Entrega em
									<strong>
										{' '}
										{rua}, {numero} {complemento}
									</strong>
								</p>
								<p>
									{bairro} - {cidade}, {uf}
								</p>
							</div>
						</OrderInfo>
						<OrderInfo variant="yellow-base">
							<span>
								<Timer weight="fill" size={20} />
							</span>
							<div>
								<p>Previsão de entrega</p>
								<p>
									<strong>20 min - 30 min </strong>
								</p>
							</div>
						</OrderInfo>
						<OrderInfo variant="yellow-dark">
							<span>
								<CurrencyDollar weight="fill" size={20} />
							</span>
							<div>
								<p>Pagamento na entrega</p>
								<p>
									{payment === 'credit-cart' && (
										<strong>Cartão de Crédito</strong>
									)}
									{payment === 'debit-card' && (
										<strong>Cartão de Débito</strong>
									)}
									{payment === 'money' && <strong>Dinheiro</strong>}
								</p>
							</div>
						</OrderInfo>
					</OrderInfoContainer>
				</div>
				<img src={deliveryImg} alt="" />
			</OrderContainer>
		</OrderSummaryContainer>
	);
}
