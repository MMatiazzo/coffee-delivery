import { useContext, useEffect } from 'react';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as zod from 'zod';

import {
	Bank,
	CreditCard,
	CurrencyDollar,
	MapPinLine,
	Money,
	Trash,
} from 'phosphor-react';

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
import { OrderContext } from '../../context/OrderContext';

const finishOrderFormValidationSchema = zod.object({
	cep: zod.string().min(8, 'Informe o CEP'),
	rua: zod.string().min(1, 'Informe a Rua'),
	numero: zod.number().min(1),
	complemento: zod.string().min(1),
	bairro: zod.string().min(1),
	cidade: zod.string().min(1),
	uf: zod.string().min(2).max(2),
	payment: zod.string(),
});

type FinishOrderData = zod.infer<typeof finishOrderFormValidationSchema>;

export function Cart() {
	const { register, handleSubmit, reset } = useForm<FinishOrderData>({
		resolver: zodResolver(finishOrderFormValidationSchema),
		defaultValues: {
			cep: '',
			bairro: '',
			cidade: '',
			complemento: '',
			numero: 0,
			rua: '',
			uf: '',
		},
	});

	const {
		order: { products },
		removeCoffeeFromOrder,
	} = useContext(OrderContext);

	const totalOrder = products
		.reduce((acc, o) => {
			return acc + o.price * o.amount;
		}, 0)
		.toFixed(2);

	useEffect(() => {
		return;
	}, [products]);

	function handleFinishOrder(data: FinishOrderData) {
		console.log(data);
		reset();
	}

	return (
		<CartContainer>
			<OrderForm onSubmit={handleSubmit(handleFinishOrder)}>
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
							<OrderInfoInput
								type="text"
								placeholder="CEP"
								{...register('cep')}
							/>
							<OrderInfoInput
								type="text"
								placeholder="Rua"
								{...register('rua')}
							/>
							<div>
								<OrderInfoInput
									type="text"
									placeholder="Número"
									{...register('numero')}
								/>
								<OrderInfoInput
									type="text"
									placeholder="Complemento"
									{...register('complemento')}
								/>
							</div>
							<div>
								<OrderInfoInput
									type="text"
									placeholder="Bairro"
									{...register('bairro')}
								/>
								<OrderInfoInput
									type="text"
									placeholder="Cidade"
									{...register('cidade')}
								/>
								<OrderInfoInput
									type="text"
									placeholder="UF"
									{...register('uf')}
								/>
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
							<PaymentMethodButtom
								value="creadit-card"
								{...register('payment')}
							>
								<CreditCard /> Cartão de crédito
							</PaymentMethodButtom>
							<PaymentMethodButtom value="debit-card" {...register('payment')}>
								<Bank /> Cartão de débito
							</PaymentMethodButtom>
							<PaymentMethodButtom value="money" {...register('payment')}>
								<Money /> Dinheiro
							</PaymentMethodButtom>
						</PaymentsMethods>
					</OrderInfo>
				</div>
				<div>
					<h3>Cafés Selecionados</h3>
					<OrderSummary>
						{products.map((item) => (
							<CartItem key={item.id}>
								<img src={item.img} alt="" />
								<ItemActions>
									<p>{item.name}</p>
									<CartItemsOptions>
										<QuantityButton
											amount={item.amount}
											id={item.id}
											key={item.id}
											isCart
										/>
										<DeleteButton
											onClick={() => removeCoffeeFromOrder(item.id)}
										>
											<Trash size={20} /> Remover
										</DeleteButton>
									</CartItemsOptions>
								</ItemActions>
								<span>{item.price}</span>
							</CartItem>
						))}
						<OrderValuesSummary>
							<div>
								<span>Total de itens</span>
								<span>{totalOrder}</span>
							</div>
							<div>
								<span>Entrega</span>
								<span>3,50</span>
							</div>
							<div>
								<h3>Total</h3>
								<h3>{(Number(totalOrder) + 3.5).toFixed(2)}</h3>
							</div>
							<FinalizeOrderButton>Confirmar Pedido</FinalizeOrderButton>
						</OrderValuesSummary>
					</OrderSummary>
				</div>
			</OrderForm>
		</CartContainer>
	);
}
