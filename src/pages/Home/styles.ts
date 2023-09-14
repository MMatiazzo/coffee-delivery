import { styled } from 'styled-components';

export const HomeContainer = styled.div`
	width: 100%;
	max-width: 1300px;
	margin: 4rem auto 0;
`;

export const BannerContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;

	gap: 4rem;

	div.coffee-delivery-info {
		p {
			margin-top: 0.5rem;
			font-size: 22px;
			color: ${(props) => props.theme['base-subtitle']};
			line-height: 130%;
		}
	}

	div.coffee-delivery-work-practices {
		margin-top: 3rem;
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 0.6rem;

		div {
			display: flex;
			align-items: center;
			gap: 10px;

			line-height: 130%;
			font-size: 18px;

			color: ${(props) => props.theme['base-text']};

			.icon {
				border-radius: 50%;
				padding: 0.4rem;
			}

			.shopping-cart-icon {
				color: ${(props) => props.theme.background};
				background: ${(props) => props.theme['yellow-dark']};
			}

			.package-icon {
				color: ${(props) => props.theme.background};
				background: ${(props) => props.theme['base-text']};
			}

			.timer-icon {
				color: ${(props) => props.theme.background};
				background: ${(props) => props.theme['yellow-base']};
			}

			.coffee-icon {
				color: ${(props) => props.theme.background};
				background: ${(props) => props.theme['purple-base']};
			}
		}
	}
`;

export const ProductShowcase = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	margin-top: 3rem;
	gap: 3rem;

	div.products {
		display: grid;
		margin: 0;
		grid-template-columns: repeat(auto-fill, minmax(17rem, 1fr));

		gap: 3rem;
	}
`;

export const CoffeeContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-direction: column;

	border-radius: 8px 15% 8px 15%;

	background: ${(props) => props.theme['base-card']};

	width: 18rem;
	height: 20rem;
	padding: 0 1rem 1rem;

	text-align: center;

	line-height: 130%;

	img {
		width: 120px;
		height: 120px;
		margin-top: -2rem;
	}

	p {
		color: ${(props) => props.theme['base-label']};
	}

	div {
		width: 65%;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	div.coffeeActions {
		width: 100%;
		margin-bottom: 0.5rem;

		button[type='submit'] {
			border: none;
			background: ${(props) => props.theme['purple-dark']};
			color: ${(props) => props.theme['base-card']};
			border-radius: 6px;
			padding: 3.5px;
			cursor: pointer;
		}

		div.price {
			display: flex;
			align-items: center;
			justify-content: center;
			gap: 5px;
			color: ${(props) => props.theme['base-text']};

			span {
				font-size: 14px;
			}
		}

		div:nth-child(2) {
			gap: 1rem;
		}
	}
`;

export const TagsContainer = styled.div`
	justify-content: center;
	gap: 0.4rem;

	span {
		font-size: 12.5px;
		padding: 0.2rem;

		border-radius: 8px;

		background: ${(props) => props.theme['yellow-ligth']};
		color: ${(props) => props.theme['yellow-dark']};
		font-weight: bold;
	}
`;
