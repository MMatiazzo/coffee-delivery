import {
	Bank,
	CreditCard,
	CurrencyDollar,
	MapPinLine,
	Money,
	Trash,
} from 'phosphor-react';
import expresso from '../../assets/coffee-types/expresso.svg';
import {
	CartContainer,
	CartItem,
	CartItemsOptions,
	DeleteButton,
	FinalizeOrderButton,
	ItemActions,
	OrderAddress,
	OrderAddressInfo,
	OrderForm,
	OrderInfo,
	OrderInfoInput,
	OrderInput,
	OrderSummary,
	OrderValuesSummary,
	PaymentMethodButtom,
	PaymentsMethods,
} from './styles';
import { QuantityButton } from '../../components/QuantityButton';

export function Cart() {
	return (
		<CartContainer>
			<OrderForm>
				<div>
					<h3>Complete seu pedido</h3>
					<OrderAddress>
						<OrderAddressInfo variant="map-pin">
							<MapPinLine size={25} />
							<div>
								<p>Endereço de entrega</p>
								<span>Informe o endereço onde deseja receber seu pedido</span>
							</div>
						</OrderAddressInfo>
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
					<OrderInfo>
						<OrderAddressInfo variant="dollar">
							<CurrencyDollar size={25} />
							<div>
								<p>Endereço de entrega</p>
								<span>Informe o endereço onde deseja receber seu pedido</span>
							</div>
						</OrderAddressInfo>
						<PaymentsMethods>
							<PaymentMethodButtom value="creadit-card">
								<CreditCard /> Cartão de crédito
							</PaymentMethodButtom>
							<PaymentMethodButtom value="debit-card">
								<Bank /> Cartão de débito
							</PaymentMethodButtom>
							<PaymentMethodButtom value="money">
								<Money /> Dinheiro
							</PaymentMethodButtom>
						</PaymentsMethods>
					</OrderInfo>
				</div>
				<div>
					<h3>Cafés Selecionados</h3>
					<OrderSummary>
						<CartItem>
							<img src={expresso} alt="" />
							<ItemActions>
								<p>Espresso Tradicional</p>
								<CartItemsOptions>
									<QuantityButton />
									<DeleteButton>
										<Trash size={20} /> Remover
									</DeleteButton>
								</CartItemsOptions>
							</ItemActions>
							<span>9,90</span>
						</CartItem>
						<CartItem>
							<img src={expresso} alt="" />
							<ItemActions>
								<p>Espresso Tradicional</p>
								<CartItemsOptions>
									<QuantityButton />
									<DeleteButton>
										<Trash size={20} /> Remover
									</DeleteButton>
								</CartItemsOptions>
							</ItemActions>
							<span>9,90</span>
						</CartItem>
						<OrderValuesSummary>
							<div>
								<span>Total de itens</span>
								<span>29,90</span>
							</div>
							<div>
								<span>Entrega</span>
								<span>3,50</span>
							</div>
							<div>
								<h3>Total</h3>
								<h3>33,20</h3>
							</div>
							<FinalizeOrderButton>Confirmar Pedido</FinalizeOrderButton>
						</OrderValuesSummary>
					</OrderSummary>
				</div>
			</OrderForm>
		</CartContainer>
	);
}