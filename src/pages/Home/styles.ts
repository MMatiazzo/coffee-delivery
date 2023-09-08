import { styled } from 'styled-components';

export const HomeContainer = styled.div``;

export const BannerContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;

	gap: 4rem;

	div.coffee-delivery-info {
		max-width: 39rem;

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
