import { CurrencyDollar, MapPin, Timer } from 'phosphor-react';
import deliveryImg from '../../assets/delivery-img.svg';
import {
	OrderContainer,
	OrderInfo,
	OrderInfoContainer,
	OrderSummaryContainer,
} from './styles';

export function OrderSummary() {
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
									Entrega em <strong>Rua João Daniel Martinelli, 10</strong>
								</p>
								<p>Farrapos - Porto Alegre, RS</p>
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
									<strong>Cartão de Crédito</strong>
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
